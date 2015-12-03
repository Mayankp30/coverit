// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {
/*
    'facebookAuth' : {
        'clientID'        : 'your-secret-clientID-here', // your App ID
        'clientSecret'    : 'your-client-secret-here', // your App Secret
        'callbackURL'     : 'http://localhost:8080/auth/facebook/callback'
    },

    'twitterAuth' : {
        'consumerKey'        : 'your-consumer-key-here',
        'consumerSecret'     : 'your-client-secret-here',
        'callbackURL'        : 'http://localhost:8080/auth/twitter/callback'
    },
*/
    'googleAuth' : {
        'clientID'         : '727313435120-pr14sa2oe8mc1qpipnfmjbbclqmrb2ui.apps.googleusercontent.com',
        'clientSecret'     : '3hgX2uscsy9gzqLHbfIeyrWT',
        'callbackURL'      : 'http://localhost:8080/auth/google/callback'
    }

};
