const admin = require('firebase-admin')
const firebaseUrl = 'https://weekly-search.firebaseio.com'
import serviceAccount from "../firebase-admin-sdk.json"

if (!admin.apps.length) {
    try {
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount),
            databaseURL: firebaseUrl
        });
    } catch (error: any) {
        console.log('Firebase admin initialization error', error.stack)
    }
}

export const serverFirestore = admin.firestore()
