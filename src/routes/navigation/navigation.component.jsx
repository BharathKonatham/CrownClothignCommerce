import React,{useContext} from 'react'
import { Link, Outlet } from "react-router-dom";
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg'
import './navigation.styles.scss'
import { UserContext } from '../../contexts/user.context';
import { signOutUser } from '../../utils/Firebase.utils';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { CartContext } from '../../contexts/cartContext';
const Navigation = () => {
  const {currentUser,setCurrentUser} = useContext(UserContext)
  const {isCartOpen} = useContext(CartContext)
  console.log(currentUser)

  const signOutHandler = async ()=>{
    
    const response = await signOutUser()
    // setCurrentUser(null)
    // console.log(response)
  }



  const role = 'curator'

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
          {<CartIcon />}
            {role ==='curator'&& (<Link to="/create-product">CREATE</Link>)}
        </div>
        
        {isCartOpen && <CartDropdown />} 
      </div>
      <Outlet />
    </>
  )
}

export default Navigation
