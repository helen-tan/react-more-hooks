// useCallback
// similar to useMemo. Difference is:
// useMemo returns a memoized value (when the dependencies change)
// useCallback returns a memoized callback function (when the dependencies change)
// React.memo is a high order component which is a compoennt that takes a compoent as a prop
// and prevents the re-rendering if the props or the values in it did not change
import React, { useState, useCallback } from 'react'

function UseCallbackExample() {
  const [tasks, setTasks] = useState([])

  // now button component will not get re rendered everytime we call it
  const addTask = useCallback(() => {
    setTasks((prevState) => [...prevState, 'Some Tasks'])
  }, [setTasks])

  return (
    <div>
      <Button addTask={addTask}/>
      {tasks.map((task, index) => {
        return <p key={index}>{task}</p>
      })}

    </div>
  )
}

const Button = React.memo(({ addTask }) => {
  console.log('button rendered');
  return <div>
    <button
      onClick={addTask}
      className='btn btn-primary'
    >
      Add Task
    </button>
  </div>
})

export default UseCallbackExample
