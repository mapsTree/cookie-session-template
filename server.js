const express = require('express');
const session = require('cookie-session');

const app = express();
 // Adding cookie-session middleware

 app.use(
    session({
        // name of cookie
        name: 'session',
        // String which is used to sign & Verify cookie values
        secret: 'secretKeyWooo',
        // when cookie will expire 
        // Date.now() : sends time in milliseconds
        expires: new Date(Date.now()+ 24 * 60 * 60 * 1000) //24 hour
        // secure:  its boolean indicator if the cookie has to be sen t over https or not.
        //  false  means httpOnly(default) and true means for https 



    })
 )


app.listen(8080, () => console.log("I'm listening on port:",8080));
module.exports = app;