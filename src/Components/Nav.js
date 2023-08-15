import React, { useEffect, useState } from 'react'
import "./Nav.css"
// import Netflix from '../images/Netflix_logo_PNG1'
// import avatar from '../images/Netflix-avatar'

function Nav() {
    const [show, handleshow] = useState(false);

    useEffect(() => {

        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleshow(true)
            }else handleshow(false)
        })
        return () => {
            // window.removeEventListener("scroll")
        }
    }, [])


  return (
    <div className={`nav ${show && "nav__black  "}`}>
        <img className='nav__logo' src="https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo-768x432.png" alt="Netflix logo" />

        <img className='nav__avatar' src="https://loodibee.com/wp-content/uploads/Netflix-avatar-12.png" alt="Avatar logo" />


    </div>
  )
}

export default Nav