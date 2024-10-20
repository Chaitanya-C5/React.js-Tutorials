import { NavLink } from 'react-router-dom';
import './styles.css';

function NavLinkBar() {
  return (
    <div>
        <NavLink to='/'>Home</NavLink> &nbsp; &nbsp; &nbsp;
        <NavLink to='/about'>About</NavLink> &nbsp; &nbsp; &nbsp;
        <NavLink to='/products'>Products</NavLink> &nbsp; &nbsp; &nbsp;
        <NavLink to='/profile'>Profile</NavLink> &nbsp; &nbsp; &nbsp;
        <NavLink to='/login'>Login</NavLink> &nbsp; &nbsp; &nbsp;
    </div>
  )
}

export default NavLinkBar