const functions = require('firebase-functions')

const app = require('express')()

const FBAuth = require('./util/fbAuth')

const { getAllShouts, postOneShout } = require('./handlers/shouts')

const { signup, login } = require('./handlers/users')

// Shout routes

app.get('/shouts', getAllShouts)
app.post('/shout', FBAuth, postOneShout)

// users route

app.post('/signup', signup)
app.post('/login', login)

exports.api = functions.region('europe-west1').https.onRequest(app)



