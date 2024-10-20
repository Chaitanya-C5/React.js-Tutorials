import { useParams } from 'react-router-dom';

function Details() {
  const params = useParams();
  const userId = params.userId;
  return (
    <div>
        <h3>Details of the user {userId}</h3>
    </div>
  )
}

export default Details