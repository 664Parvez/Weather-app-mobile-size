import React from "react"
import {Link} from "react-router-dom"

import Normal from "../img/normal.png"

const Intro = () => {
    return(
        <>
            <div className="mobile_size">

                <img height={120} src={Normal} alt="" />

                <h2 className="text-center intro_heading">Weather Application</h2>

                <div className="text-center mt-5" id="go_to_weather">
                    <Link to="/weather">
                        <i class="fa-solid fa-arrow-right"></i>
                    </Link>
                </div>

            </div>
        </>
    )
}

export default Intro