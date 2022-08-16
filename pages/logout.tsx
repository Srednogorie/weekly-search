import {NextPage} from "next"
import {useEffect} from "react"
import {signOut} from "../db/firebase_client"
import {useRouter} from "next/router"

const Logout: NextPage = () => {
    const router = useRouter()
    useEffect(() => {
        signOut()
            .catch((e) => console.log(e))
        void router.push('/')
    })
    return (
        <div/>
    )
}

export default Logout;
