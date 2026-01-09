import React from 'react'
import { Link } from 'react-router-dom'
import NotFound from '../Bits/NotFound'
function Not() {
    return (
        <div>
            <div className="not-found">
            <NotFound
                baseIntensity={0.2}
                hoverIntensity={0.5}
                enableHover={true}
            >
                404
            </NotFound>
            <NotFound
                baseIntensity={0.2}
                hoverIntensity={0.5}
                enableHover={true}
            >
                Page Not Found
            </NotFound>
            <Link to="/" className="home-button">Ana Sayfaya Dön</Link>
            </div>
        </div>
    )
}

export default Not