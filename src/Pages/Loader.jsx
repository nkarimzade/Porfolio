import React from 'react'
import "./Loader.css"

const Loader = () => {

    window.addEventListener('load', fg_load)

    function fg_load() {
        document.getElementById('loading').style.display = 'none'
    }

    return (
        <div id="loading">
            <img src="/public/load-7671.gif" alt="Yükleniyor..." />
        </div>
    )
}

export default Loader