// useRef - can also be used to keep track of previous state values
// this is because useRef values can be persisted between renders
// A combination of useState, useEffect, and useRef to keep track of the previous state.
import { useState, useEffect, useRef } from 'react'

function UseRefExample2() {
  const [name, setName] = useState();
  // useRef(initialValue) accepts one argument as the initial value and returns a reference. A reference is an object having a special property - current.
  // Set a ref to count the no. of renders - default of 1 (1st render is when component first loads)
  const renders = useRef(1)
  const prevName = useRef('')

  useEffect(() => {
    renders.current = renders.current + 1
    prevName.current = name // everytime name state changes when text is entered into the input field, this useEffect function will run, and name gets stored in prevName as a previous state
  }, [name])

  return (
    <div>
      <h1>Renders: {renders.current}</h1>
      <h2>Prev Name State: {prevName.current}</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="form-control mb-3"
      /> {/* Set the name state on change */}
    </div>
  )
}

export default UseRefExample2

// Whenever we update any state in a component, the component gets re-rendered
