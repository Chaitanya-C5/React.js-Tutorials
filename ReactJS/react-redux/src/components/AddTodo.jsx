import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todoSlice';

function AddTodo() {
  
  const dispatch = useDispatch();
  const [input,setInput] = useState('')
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addTodo(input))
    setInput('')
  }
  return (
    <div>
        <h1>Add Todo</h1>
        <div className='form-container'>
            <form onSubmit={handleSubmit}>
                <input type='text' 
                placeholder='Add a new todo'
                value={input}
                onChange={e => setInput(e.target.value)}
                /> &nbsp;&nbsp;&nbsp;&nbsp;
                <button type='submit'>Add Todo</button>
            </form>
        </div>
    </div>
  )
}

export default AddTodo