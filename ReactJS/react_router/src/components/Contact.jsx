import { useNavigate } from 'react-router-dom';

function Contact() {
  const navigate = useNavigate();
  return (
    <div>
        <h1>Contact</h1>
        <button onClick={() => navigate('/email-confirm',{replace: true})}>Send Email</button>
        <button onClick={() => navigate('/hello')}>Go to hello</button>
    </div>
  )
}

export default Contact