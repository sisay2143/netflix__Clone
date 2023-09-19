import React, { useEffect, useState } from 'react'
import "./Nav.css"
import { Link,useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/Auth';
// import Netflix from '../images/Netflix_logo_PNG1'
// import avatar from '../images/Netflix-avatar'

function Nav() {
const {user, logout} = UserAuth()
const navigate = useNavigate()

    // console.log(user);
    const handleLogout = async ()=> {
        try{
            await logout()
            navigate('/')
        }catch(error){
                console.log(error)
        }
    }
    const [show, handleshow] = useState(false);

    useEffect(() => {

        window.addEventListener("scroll", () => {
            if (window.scrollY > 150) {
                handleshow(true)
            }else handleshow(false)
        })
        return () => {
            // window.removeEventListener("scroll")
        }
    }, [])


  return (
    <div className={`nav ${show && "nav__black  "}`}>
        <Link to="/">
        <img className='nav__logo' src="https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo-768x432.png" alt="Netflix logo" />
        </Link>
        {user?.email ? (
            <div>
        <Link to="/account">
       <button className='in text-white pr-2'>Account</button>
       </Link>
      
       <button onClick={handleLogout} className='out text-white'>Logout</button>
      
            </div>

        ) : (
            <div>
        <Link to="/login">
       <button className='in text-white pr-2'>Sign In</button>
       </Link>
       <Link to="/signup">
       <button className='out text-white'>Sign up</button>
       </Link>
        </div>
        )}
       {/* <Link to="/login">
       <button className='in text-white pr-2'>Sign In</button>
       </Link>
       <Link to="/signup">
       <button className='out text-white'>Sign up</button>
       </Link> */}
        <img className='nav__avatar' src="https://loodibee.com/wp-content/uploads/Netflix-avatar-12.png" alt="Avatar logo" />


    </div>
  ) 
}

export default Nav