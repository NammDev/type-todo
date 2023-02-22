import { useState } from 'react'
import { Todo } from '../@type/todo.type'
import TaskInput from '../TaskInput'
import TaskList from '../TaskList'
import styles from './TodoList.module.scss'

function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([])
  const doneTodos = todos.filter((todo) => todo.done)
  const notDoneTodos = todos.filter((todo) => !todo.done)

  const handleAddTodo = (name: string) => {
    const todo: Todo = {
      name,
      done: false,
      id: new Date().toISOString()
    }
    setTodos((prev) => [...prev, todo])
  }

  const handleDoneTodo = (id: string, done: boolean) => {
    setTodos((prev) => {
      return prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, done }
        }
        return todo
      })
    })
  }

  return (
    <div className={styles.todoList}>
      <div className={styles.todoListContainer}>
        <TaskInput addTodo={handleAddTodo} />
        <TaskList todos={notDoneTodos} handleDoneTodo={handleDoneTodo} />
        <TaskList todos={doneTodos} handleDoneTodo={handleDoneTodo} doneTaskList />
      </div>
    </div>
  )
}

export default TodoList
