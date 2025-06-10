import React from 'react'

function Loader() {
    window.addEventListener('load', fg_load)

    function fg_load() {
        document.getElementById('loading').style.display = 'none'
    }
    return (
        <div id="loading">
            <img src="loader.gif" alt="Loading..." />
        </div>
    )
}

export default Loader