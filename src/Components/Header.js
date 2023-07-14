import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import UserContext from './UserContext'

const Header = () => {
  const {user} = useContext(UserContext)
  console.log(user)
  return (
    <div className='Header'>
        <img src='' alt='logo'/>
        <h1>
            Food Ordering App
        </h1>
        <ul>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/about"}>About US</Link></li>
            <li><Link to={"/contact"}>CONTACT</Link></li>
            <li><Link to={"/login"}>LOGIN</Link></li>
        </ul>
        <h1>{user}</h1>
    </div>
  )
}

export default Header