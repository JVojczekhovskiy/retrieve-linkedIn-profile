(function() {
angular.module('retrieve-linkedIn-profile',[])
.directive('linkedInLogin',function($q){

  return {
    restrict: 'E',
    template: "<script type='in/Login'></script>",
    scope: {
      callback: '&'
    },
    link: function(scope,element) {
      (function injectScript() {
        var src = 'http://platform.linkedin.com/in.js',
        script = document.createElement('script');
        script.src = src;
        script.text = 'api_key: ' + 'YOUR API HERE';
        script.onload = onLinkedInload;
        document.getElementsByTagName('head')[0].appendChild(script);
      })();

      onLinkedInFrameworkLoad = function() {
        var deferred = $q.defer();
        IN.Event.on(IN, "auth", function(){
          deferred.resolve(onLinkedInAuth())
        });
        return deferred.promise;
      }

      onLinkedInAuth = function() {
        var deferred = $q.defer();
        IN.API.Profile("me").fields([
                    "firstName","lastName","headline","positions:(company,title,summary,startDate)","industry",
                    "location:(name)","pictureUrl","id"]).result(function(result){
          var profile = {
              firstName: result.values[0].firstName,
              lastName: result.values[0].lastName,
              pictureUrl: result.values[0].pictureUrl,
              headline: result.values[0].headline,
              industry: result.values[0].industry,
              position: (function(){
                if(result.values[0].positions.values){
                  return {
                    title: result.values[0].positions.values[0].title,
                    company: result.values[0].positions.values[0].company.name,
                    summary: result.values[0].positions.values[0].summary,
                    startDate: result.values[0].positions.values[0].startDate.month+" "+result.values[0].positions.values[0].startDate.year
                  }
                }else{
                  return undefined;
                }
              })(),
              location: result.values[0].location.name,
              id: result.values[0].id
          }
          deferred.resolve(profile);
        });
        return deferred.promise;
      }

      function onLinkedInload(){
        onLinkedInFrameworkLoad().then(function(profile){
          scope.callback({profile:profile});
        });
      }

    }
  }
});
})();
