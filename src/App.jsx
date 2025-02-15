import { useState } from 'react'
import './App.css'

function App() {
  const [todoList , setTodoList] = useState([
    {id: 0 , content: '할 일 목록'},
    {id: 1 , content: '할 일 목록2'},
    {id: 2 , content: '할 일 목록3'}
  ])

  return (
    <>
    <div className='container'>
    <h1> TO-DO LIST </h1>
      <TodoList todoList={todoList} setTodoList={setTodoList}/>
      <hr />
      <TodoInput todoList={todoList} setTodoList={setTodoList} />
      </div>
    </>
  )
}

function TodoInput ({todoList, setTodoList}){
  const [inputValue, setInputValue] = useState('')
  return(
    <>
    <input className="addInput" value={inputValue} onChange={(e)=> setInputValue(e.target.value)}/>
      <button className="addBtn" onClick={()=>{
        const newTodo = {id: Number(new Date()), content: inputValue}
        const newTodoList = [...todoList, newTodo]
        setTodoList(newTodoList)
        setInputValue("")
      }}>➕</button>
    </>
  )
}

function TodoList({todoList, setTodoList}){
  return(
    <>
      <ul>
        {todoList.map((todo) => (
        <Todo key={todo.id} todo={todo} setTodoList={setTodoList}/>))}
      </ul>
    </>
  )
}

function Todo({todo, setTodoList}){
  const [inputValue, setInputValue] = useState('')
  return(
        <>
        <li> 📍 {todo.content} 
        <div className="edit">
        <input className="editInput" value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}/>
        <button className="editBtn" onClick={()=>{
          setTodoList(prev => {
            return prev.map((el) => el.id === todo.id ?{ ...el , content: inputValue} : el)
        });
        setInputValue('');}}>✏️</button>
        <button className="editBtn" onClick={() => {
          setTodoList(prev => {
            return prev.filter( (el) => el.id !== todo.id)
          })
        }}>x</button>
        </div>
        </li>
        
        </>
        )
        //  원래는 ... 아래 코드지만
        //  아래에서 key 값은 map이 이루어지는 코드에 적어야 해서 위에 TodoList 함수로 올라감
        //  <ul>
        // {todoList.map((todo) => (
        //   <li key={todo.id}>{todo.content} </li>))}
        // </ul>
}

export default App
