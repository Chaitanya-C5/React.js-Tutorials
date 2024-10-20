import { Link, Outlet } from 'react-router-dom';

function Products() {
  return (
    <div>
        Products
        <nav>
            <Link to='featured'>Featured</Link> &nbsp; &nbsp; &nbsp;
            <Link to='new'>New</Link> &nbsp; &nbsp; &nbsp;
            <Link to='feedback'>Feedback</Link> &nbsp; &nbsp; &nbsp;
        </nav>
        <Outlet />
    </div>
  )
}

export default Products