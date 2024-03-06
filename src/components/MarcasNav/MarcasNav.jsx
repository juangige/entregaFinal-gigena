import React from "react"
import './MarcasNav.css'
import AMDNav from '../../assets/nav_amd.png'
import CorsairNav from '../../assets/nav_corsair.png'
import GeForceNav from '../../assets/nav_geforce.png'
import IntelNav from '../../assets/nav_intel.png'
import LogitechNav from '../../assets/nav_logitech.png'
import TrustNav from '../../assets/nav_trust.png'

export default function MarcasNav(){

return(
    <>
    <section className="secNavLogo">
        <div className="logos-display">
            <img src={AMDNav} alt="AMD Logo" />
            <img src={CorsairNav} alt="AMD Logo" />
            <img src={GeForceNav} alt="AMD Logo" />
            <img src={IntelNav} alt="AMD Logo" />
            <img src={LogitechNav} alt="AMD Logo" />
            <img src={TrustNav} alt="AMD Logo" />
        </div>
    </section>
    </>
)
}

