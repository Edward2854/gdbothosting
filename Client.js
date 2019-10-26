* @type {?String}
*/
this.password = null;
/**
* The time in milliseconds the Client connected
* @type {?Number}
*/
this.readyTime = null;
}

/**
* Logs the client in. If successful, resolves with the account's token. <warn>If you're making a bot, it's
* much better to use a bot account rather than a user account.
* Bot accounts have higher rate limits and have access to some features user accounts don't have. User bots
* that are making a lot of API requests can even be banned.</warn>
* @param  {String} emailOrToken The email or token used for the account. If it is an email, a password _must_ be
* provided.
* @param  {String} [password] The password for the account, only needed if an email was provided.
* @return {Promise<String>}
* @example
* // log the client in using a token
* const token = 'my token';
* client.login(token);
* @example
* // log the client in using email and password
* const email = 'user@email.com';
* const password = 'supersecret123';
* client.login(email, password);
*/
login(email, password) {
if (password) {
 // login with email and password
 return this.rest.methods.loginEmailPassword(email, password);
}
// login with token
return this.rest.methods.loginToken(email);
}

/**
* The uptime for the logged in Client
* @type {?Number}
*/
get uptime() {
return this.readyTime ? Date.now() - this.readyTime : null;
}

}

module.exports = Client;
