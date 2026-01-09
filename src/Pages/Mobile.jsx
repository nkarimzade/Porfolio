import React from 'react'
import ShinyText from '../Bits/ShinyText'
function Mobile() {
    return (
        <div>
            <ShinyText className="shiny-text"
                text="Coming Soon"
                speed={2}
                delay={0}
                color="#b5b5b5"
                shineColor="#ffffff"
                spread={120}
                direction="left"
                yoyo={false}
                pauseOnHover={false}
            />
        </div>
    )
}

export default Mobile