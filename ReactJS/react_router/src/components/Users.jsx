import { Outlet, useSearchParams } from 'react-router-dom';

function Users() {

  const [searchParams, setSearchParams] = useSearchParams();
  const activeUsers = searchParams.get('filter') === 'active';
  return (
    <div>
        <h1>User-1</h1>
        <h1>User-2</h1>
        <h1>User-3</h1>

        <button onClick={() => setSearchParams({filter: 'active'})}>Active Filter</button> &nbsp; &nbsp;
        <button onClick={() => setSearchParams({})}>Reset Filter</button> &nbsp; &nbsp;
        <Outlet />

        <div>
          {
            activeUsers ? <h2>Showing active users</h2> : <h2>Showing all users</h2>
          }
        </div>
    </div>
  )
}

export default Users;