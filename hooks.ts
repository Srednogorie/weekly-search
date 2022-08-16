import {useEffect, useState} from 'react';
import {isLoggedIn} from "./db/utils";

function useIsUserLogged() {
    const [isLogged, setIsLogged] = useState(false)
    useEffect(() => {
        isLoggedIn()
            .then((value) => {
                setIsLogged(value);
            })
            .catch((e) => console.log(e))
    }, [])

    return isLogged;
}

export {useIsUserLogged}
