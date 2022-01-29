import {useEffect, useState} from "react";

const AuthBlock = () => {

    /* @ts-ignore */
    const [authStatus, setAuthStatus] = useState( false);

    useEffect(()=>{
        setAuthStatus(true)
    })
    return(
        <>
            {
                authStatus?
                    <div> userName</div> :
                    <div>
                        <button>войти</button>
                        <button>зарегистрироваться</button>
                     </div>
            }

        </>

    )
}
export default AuthBlock