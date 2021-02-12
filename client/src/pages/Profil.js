import React, { useContext } from 'react'
import Log from '../components/Log/Log'
import { UidContext } from '../components/AppContext'
import UpdateProfil from '../components/Profil/UpdateProfil';

function Profil() {

    const uid = useContext(UidContext);

    return (
        <div className="profil-page">
            {uid ? (
                <h1><UpdateProfil/></h1>
            ) : (
            <div className="log-container">
                <Log signin={false} signup={true} />
                <div className="img-container">
                    <img src="./img/log.svg" alt=""/>
                </div>
            </div>
            )}
        </div>
    )
}

export default Profil
