// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './TaskInput.module.scss'

function TaskInput() {
  return (
    <div className='mb-2'>
      <h1 className={styles.title}>To do list typescript</h1>
      <form className={styles.form}>
        <input type='text' placeholder='caption goes here' />
        <button type='submit'>{'➕'}</button>
      </form>
    </div>
  )
}

export default TaskInput
