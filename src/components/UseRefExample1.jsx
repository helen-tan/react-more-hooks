// useRef - used to make a reference to a specific DOM element in a functional component
import { useRef } from 'react'

function UseRefExample1() {
  const inputRef = useRef(); // set the reference to the input with ref={inputRef}
  const paraRef = useRef(); // set reference to <p>

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(inputRef) // useRef will return an object with 1 property called 'current' which contains the actual DOM element
    console.log(inputRef.current) // returns the actual DOM element
    console.log(inputRef.current.value) // returns the value

    inputRef.current.value = 'Hello' // change input value
    inputRef.current.style.backgroundColor = 'green' // change input styling
    paraRef.current.innerText = 'form submitted' // change <p> text on form submit
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor='name'>Name</label>
        <input
          ref={inputRef}
          type="text"
          id='name'
          className="form-control mb-2"
        />
        <button type='submit' className="btn btn-primary">Submit</button>
        <p ref={paraRef} onClick={() => inputRef.current.focus()}>Click me to focus on the input</p>
      </form>
    </div>
  )
}

export default UseRefExample1

// Referencing the input of a form
// Normal way - having a state for each input
// - using useState: const [name, setName] - useState()
// - on <input> have an event handler onChange that will get called
// - and then the state will be set with setName

// When we want to get the value, but don't want it to be connected to any state
// use useRef
// when the reference value is changed (inputRef in this example),
// it does not re-render the component, as opposed to when we set a state value
