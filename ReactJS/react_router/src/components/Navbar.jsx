import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
        <nav>
            <Link to='/'>Home</Link> &nbsp; &nbsp; &nbsp;
            <Link to='/about'>About</Link>
        </nav>
    </div>
  )
}

export default Navbar