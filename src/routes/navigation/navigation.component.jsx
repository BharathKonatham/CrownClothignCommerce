import React,{useContext} from 'react'
import { Link, Outlet } from "react-router-dom";
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg'
import './navigation.styles.scss'
import { UserContext } from '../../contexts/user.context';
import { signOutUser } from '../../utils/Firebase.utils';

const Navigation = () => {
  const {currentUser,setCurrentUser} = useContext(UserContext)
  console.log(currentUser)

  const signOutHandler = async ()=>{

    const response = await signOutUser()
    // setCurrentUser(null)
    // console.log(response)
  }

  return (
    <>
      <div className='navigation'>
        <Link className='logo-container'to={'/'}>
          <CrwnLogo className='logo'/>
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>
          { currentUser? (<span className='nav-link' onClick={signOutHandler}>SIGN OUT</span>):
            (<Link className='nav-link' to='/sign-in'>
            SIGN IN
            </Link> )}
          
          
        </div>
      </div>
      <Outlet />
    </>
  )
}

export default Navigation
