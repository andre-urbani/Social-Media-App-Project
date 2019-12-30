const admin = require('firebase-admin')

const serviceAccount = {
  'type': 'service_account',
  'project_id': 'social-media-app-5af76',
  'private_key_id': 'e137aaab085ccc402c56e8279a0011d4e42217ac',
  'private_key': '-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDZgUgTpPFkkhsb\niHuNjOMRrYBgQ81+z5pT2tSrO4f6xHJ2kos7STFTe0Y06IQn4Dt1CSpLMF/fB6Pf\nR+yJio6RoYA4LohvaZzyRYkHrj5CxlIudMl0k7yOEah47xKN8Q5FM25Ykmv9iBkY\nQh2IbUOofqLwKozovUcSxZKzqqPEwe6EfUu/mDzDpQ+twx1Ko0BPStoskki5/CM/\nvHmhuJa4NGEvVUVijOk6hrLqpgT9Ok12jteHKXfcD8jXlKp4f2YUiyXn4KlDVoi6\nNkU1LJuEzwjKcb+FKc3M3kGGKTTJMxAcSuHMFKx30+AXKNcUheOB0MHfxPRTeXBg\nDyErsmCxAgMBAAECggEAOOtWr+Fd1IpRsrpcTvY8JA+qBUcpG1L72Y7uUaNCGhNX\nuwTtj8W/NVAQ1t60WvUYyi9sVIHjzOtkbJWXZoUOezju44T16mYSjuo4inyESZg5\nwHOKlsnksa8YThGOYvve1qg3a9FhllcL7ie7L80cRBdjz4LrHisOUvDGS+NPeTkl\nZ/v/Zo7ixgqU019r+TYt4J26yGegwtrmyGU/PZk8rUx2j9xpo2qcxUmXXuVuRQge\n4XyMRAvqos9jZ0FUMs90kXkTClfeeFe2YRrcR2BUgF4WvYIc7SjAljTMvQTl6EoH\nBMUMUNhvHBUR2XXBCu+5C5XnNCVlQ9BMb7KiWwO5kwKBgQD4E6sVqAoMQQ6NNZn0\nAc/YMEoU0fTneYI4ksCQ2VoIsDWwEadwbuHuQ+mzp2skGc8UkpUDZNP26lerHQop\nO/YQ7KmJPP9Whsiz93+lWl9REOdK/CsL8L5dHWVEZ/1Nr36/1FUPEZfUyHaPWXPs\nE72jye3BGLrEm5K6GRDI0RYL8wKBgQDgc6azpZ2mCVF7s2iWRu9wDNuoQJ0jemHB\nfROPAEM8IMVl27YBE+A8ZVs6UfkaAX9rWTvFXN3CV5IvKxmCtGU4J4GJRYHJq02z\n6OKAzb1MeO09hFi2JKGRb2i0XjCitgZkDAsm8Fyd0k4g5o1RRTWpZuzZrw0XSajH\nCj+U1ao9ywKBgQCfMrgC8NBp5sH42qIOla8VFIAl9krM1Qw9U+fhzKnbk4EQmXOz\nUmUIq2ppURIPm8RpdlvMTsM73E0gUUV5CrKxT77IhG1z0JEx9K1kpqcudcOIOmVB\nh2ASj0+yY22Jkgqr/g4L2oVuFqsG+SfMIyr61hYOadlJXHD/niBITu1wAwKBgQCW\nNlAWYnxDJnFV7BfOmuKbhr9qtvNzTvAlYeO5DF/y2avCI2yHBBpJ0TtgqIOhl+cC\nnNGXoDL5YUoAL0P/aWNkVWwnxlC5+t8hzHXp5ccOas+7H9uO6q0GfB0CuRarjk5w\nnm7IPIx/QsPu2N0yyrLDEJLqjHCiaTV/H6i1ntk0SQKBgDOj7pTpfrv3NMLmiHhL\nAfdOwaITQj/EKjJBjCHmdcyaseBDkyXUjK7nnm8N4sT/3cjAxOFclqmJQEl89u3V\n2qGKsr4XWNpgP0WuEmq4WgfsqFhL2Tm4KVEJ1mC1hlGMtb28nMjl+6rKUeMUxXrQ\nkqRwhc5xAOUhV9KE0XwxNzyz\n-----END PRIVATE KEY-----\n',
  'client_email': 'firebase-adminsdk-20rqt@social-media-app-5af76.iam.gserviceaccount.com',
  'client_id': '108935647232739315252',
  'auth_uri': 'https://accounts.google.com/o/oauth2/auth',
  'token_uri': 'https://oauth2.googleapis.com/token',
  'auth_provider_x509_cert_url': 'https://www.googleapis.com/oauth2/v1/certs',
  'client_x509_cert_url': 'https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-20rqt%40social-media-app-5af76.iam.gserviceaccount.com'
}

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://social-media-app-5af76.firebaseio.com'
})

const db = admin.firestore()

module.exports = { admin, db }