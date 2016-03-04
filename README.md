## Retrieve linkedIn profile directive

Directive for angularjs to login into linkedIn and retrieve the users profile.

## Usage

* Install via [bower](http://bower.io/) or you can check out the [source](https://github.com/JVojczekhovskiy/retrieve-linkedIn-profile) and install it yourself.

 `bower install --save retrieve-linkedIn-profile`

 `git clone git://github.com/JVojczekhovskiy/retrieve-linkedIn-profile`

* Add `retrieve-linkedIn-profile` to your application's module dependencies.
* Include script inside your HTML.

      ```html
      <script src="dist/retrieve-linkedIn-profile.js"></script>
      ```
* Include your API key on line 16 of the directive.
* Use the `retrieve-linkedIn-profile` directive.

## Example

* You can place the login tags anywhere you want inside your application.
<<<<<<< HEAD
* Add your api key in the apikey attribute.
      `<linked-in-login apikey="YOUR_KEY_HERE" callback='mySaveProfileFunction(profile)'></linked-in-login>`
=======

      `<linked-in-login callback='mySaveProfileFunction(profile)'></linked-in-login>`
>>>>>>> eb49323f9b7217c3bccdc9cde516baa928a88a84
* The callback attribute is for the function which will be executed when the user logins and the parameter of that function is the linkedIn profile of the user which logged in.
