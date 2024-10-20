import { useSelector, useDispatch } from 'react-redux';
import AddTodo from './AddTodo';
import { removeTodo } from '../features/todoSlice';

function Todo() {

  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch();
  const removeTask = (id) => {
    dispatch(removeTodo(id))
  }
  return (
    <div>
        <h1>TODO</h1>
        <ul>
            {
                todos.map(todo => 
                    <li key={todo.id} style={{marginBottom: '10px'}}>
                            {todo.text} &nbsp;&nbsp;&nbsp;&nbsp;
                        <button onClick={() => removeTask(todo.id)}>Remove Todo</button>
                    </li>
                )
            }
        </ul>
        <div>
            <AddTodo />
        </div>
    </div>
  )
}

export default Todo