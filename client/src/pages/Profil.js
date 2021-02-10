import React from 'react'
import Log from '../components/Log/Log'

function Profil() {
    return (
        <div className="profil-page">
            <div className="log-container">
                <Log signin={false} signup={true} />
                <div className="img-container">
                    <img src="./img/log.svg" alt=""/>
                </div>
            </div>
        </div>
    )
}

export default Profil
