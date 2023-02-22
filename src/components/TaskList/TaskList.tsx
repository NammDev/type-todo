// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Todo } from '../@type/todo.type'
import styles from './TaskList.module.scss'

interface TaskListProps {
  doneTaskList?: boolean
  todos: Todo[]
  handleDoneTodo: (id: string, done: boolean) => void
}

function TaskList({ doneTaskList, todos, handleDoneTodo }: TaskListProps) {
  const onChangeCheckbox = (id: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    handleDoneTodo(id, e.target.checked)
  }

  return (
    <div className='mb-2'>
      <h2 className={styles.title}>{doneTaskList ? 'Hoàn thành' : 'Chưa hoàn thành'}</h2>
      <div className={styles.tasks}>
        {todos.map((todo) => (
          <div key={todo.id} className={styles.task}>
            <input
              type='checkbox'
              id={todo.id}
              className={styles.taskCheckbox}
              checked={todo.done}
              onChange={onChangeCheckbox(todo.id)}
            />
            <label htmlFor={todo.id} className={`${styles.taskName} ${todo.done ? styles.taskNameDone : ''}`}>
              {todo.name}
            </label>
            <div className={styles.taskActions}>
              <button className={styles.taskBtn}>🖊️</button>
              <button className={styles.taskBtn}>🗑️</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TaskList
