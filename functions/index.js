const functions = require('firebase-functions')

const app = require('express')()

const FBAuth = require('./util/fbAuth')

const { getAllShouts, postOneShout } = require('./handlers/shouts')

const { signup, login, uploadImage, addUserDetails } = require('./handlers/users')

// Shout routes

app.get('/shouts', getAllShouts)
app.post('/shout', FBAuth, postOneShout)
app.post('/user', FBAuth, addUserDetails)

// users route

app.post('/signup', signup)
app.post('/login', login)
app.post('/user/image', FBAuth, uploadImage)

exports.api = functions.region('europe-west1').https.onRequest(app)



