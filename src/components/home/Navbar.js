import React from 'react'
import "./navbar.css"
import Icon from '../../Icon/svg 3.svg'
import Icon1 from '../../Icon/$.svg'
import Icon2 from '../../Icon/line.svg'
import Icon3 from '../../Icon/Vector.svg'
import Icon4 from '../../Icon/svg 19.svg'

const Navbar = () =>{
    return (
        <div>
           <div className="nav_container">
                <div className="nav_container_item left_nav">
                    <div>CLOTHES</div>
                    <div>MEN</div>
                    <div>WOMEN</div>
                </div>
                <div className="nav_container_item mid_nav">
                    <div className="mid_nav_1_img"><img src={Icon} alt="/"/></div> 
                    <div className="mid_nav_2_img"><img src={Icon4}/></div>
                </div>
                <div className="nav_container_item right_nav">
                    <div className="dollar_icon"><img src={Icon1} /></div>
                    <div className="arrow_icon"><img src={Icon2} /></div>
                    <div className="rect_icon"><img src={Icon3} /></div>
                </div>
           </div>
        </div>
    )
}

export default Navbar;