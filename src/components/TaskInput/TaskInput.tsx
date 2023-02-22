// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useState } from 'react'
import styles from './TaskInput.module.scss'

interface TaskInputProps {
  addTodo: (name: string) => void
}

function TaskInput({ addTodo }: TaskInputProps) {
  const [name, setName] = useState<string>('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    addTodo(name)
    setName('')
  }

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  return (
    <div className='mb-2'>
      <h1 className={styles.title}>Todo App</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input type='text' placeholder='Add New Task' value={name} onChange={handleChangeInput} />
        <button type='submit'>{'➕'}</button>
      </form>
    </div>
  )
}

export default TaskInput
