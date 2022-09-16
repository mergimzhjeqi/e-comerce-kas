import * as functions from 'firebase-functions'

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

// export {basicHTTP} from './http'
import * as admin from 'firebase-admin'
admin.initializeApp()

import express from 'express'
import indexRoutes from './routes/index.routes'

const app = express()

app.use('/', indexRoutes)

exports.indexRoutes = functions.https.onRequest(app)
