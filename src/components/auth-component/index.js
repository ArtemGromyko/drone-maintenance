import React, {useContext, useEffect} from "react";
import {MainContext} from '../../contexts/main-context'
import {useHistory} from "react-router-dom";

function AuthComponent(props) {
    const {jwt} = useContext(MainContext);
    const history = useHistory();

    useEffect(()=>{
        if(jwt === '' || !jwt){
            history.push('/login')
        }
    }, []);

    return (
        <div>
            {props.children}
        </div>
    )
}

export default AuthComponent