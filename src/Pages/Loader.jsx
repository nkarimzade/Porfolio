import React, { useEffect } from 'react';

function Loader() {
    useEffect(() => {
        function fg_load() {
            const loadingEl = document.getElementById('loading');
            if (loadingEl) {
                loadingEl.style.display = 'none';
            }
        }

        window.addEventListener('load', fg_load);

        return () => {
            window.removeEventListener('load', fg_load);
        };
    }, []);

    return (
        <div id="loading">
            <img src="loader.gif" alt="Loading..." />
        </div>
    );
}

export default Loader;
