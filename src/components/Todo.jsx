// useRef - Memory leak error fix
// this error happens when trying to update state on an unmounted component
// 1. create a ref to the component being mounted
import { useState, useEffect, useRef } from 'react'

function Todo() {
  const [loading, setLoading] = useState(true)
  const [todo, setTodo] = useState({})

  const isMounted = useRef(true)

  // if you want smth to happen when a component is unmounted,
  // you return it from the useEffect
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((res) => res.json())
    .then((data) => {
      setTimeout(() => {
        // check if component is mounted first before continuing to handle ajax response
        if(isMounted.current) {
          setTodo(data)
          setLoading(false)
        }
      }, 3000)
    })

    // runs when component is unmounted
    return () => {
      //console.log(123)
      isMounted.current = false
    }
  }, [isMounted])

  return (
    loading ? <h3>Loading...</h3> : <h1>{todo.title}</h1>
  )
}

export default Todo
