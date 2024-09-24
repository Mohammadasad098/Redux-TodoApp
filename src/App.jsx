import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, deleteTodo, editTodo } from './config/redux/reducers/todoSlice'

const App = () => {

  const todoVal = useRef()

const dispatch = useDispatch()

const selector = useSelector(state => state.todos.todo)
console.log(selector);




const addTodoInRedux = (event) => {
  event.preventDefault()
    dispatch(addTodo({
      title: todoVal.current.value
    }))
    todoVal.current.value = '';
}




const deleteTodoInRedux = (index) => {
dispatch(deleteTodo(
{
  index: index
}
))
}


const editTodoInRedux = (index) => {
  const currentTodo = selector[index].title;
  const newTitle = prompt('Edit the todo:', currentTodo);


    dispatch(editTodo({
      index: index,
      title: newTitle,
    }));

};



  return (
    <>
    <div className='text-center'>
    <div className='text-4xl my-8'>Redux TodoApp</div>
    <form className='my-2' onSubmit={addTodoInRedux}>
      <input className="input input-bordered w-full max-w-xs my-3" type="text" ref={todoVal} required/> <br />
      <button class="btn btn-error" type='submit'>Submit</button>
    </form>
        <ul>
          {selector.length > 0 ? selector.map((item , index) => {
return <li className='my-3' key={item.id}>
  <p>{item.title}</p>
  <button className="btn btn-success mx-2" onClick={()=>deleteTodoInRedux(index)}>Delete</button> 
  <button className="btn btn-success" onClick={()=>editTodoInRedux(index)}>Edit</button>
  </li>
          }) : <h1 className='text-red-600'>data not found</h1>}
        </ul>
    </div>
    </>
  )
}

export default App