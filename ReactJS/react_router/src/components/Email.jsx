import { useNavigate } from 'react-router-dom';

function Email() {
  const navigate = useNavigate();
  return (
    <div>
        Email Sent !
        <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  )
}

export default Email