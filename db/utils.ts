import {auth, clientFirestore} from './firebase_client'
import {deleteDoc, doc, getDoc, updateDoc} from "@firebase/firestore"
import {onAuthStateChanged} from "@firebase/auth"
import {Article} from "../types"


const getDocument = (collectionName: string, id: string) => {
    return new Promise<Article>((resolve, reject) => {
        const docRef = doc(clientFirestore, collectionName, id)
        getDoc(docRef)
            .then(docSnapshot => {
                if (docSnapshot.exists()) {
                    resolve({...docSnapshot.data(), id: docSnapshot.id} as Article)
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!")
                }
            })
            .catch(e => reject(e))
    })
}

const updateDocument = (id: string, data: any, collection: string) => {
    return new Promise((resolve, reject) => {
        const docRef = doc(clientFirestore, collection, id)
        updateDoc(docRef, data)
            .then(() => resolve(200))
            .catch(e => reject(e))
    })
}

const deleteDocument = (collection: string, id: string ) => {
    return new Promise((resolve, reject) => {
        deleteDoc(doc(clientFirestore, collection, id))
            .then(() => resolve(200))
            .catch(e => reject(e))
    })
}

const authState = () => {
    return new Promise((resolve, reject) =>
        onAuthStateChanged(auth, (user) => {
                if (user) {
                    // User is signed in.
                    resolve(user)
                } else {
                    // No user is signed in.
                    reject('no user logged in')
                }
            },
            // Prevent console error
            error => reject(error),
        )
    )
}

const isLoggedIn = async () => {
    try {
        await authState()
        return true
    } catch (e) {
        return false
    }
}

export {getDocument, updateDocument, deleteDocument, isLoggedIn}
