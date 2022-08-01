// useMemo
// Not used much - only reach for it for performance issues
// Memoization is an optimization technique that speeds up performance by storing or caching the results of an expensive function call
// functions that takes a lot of resources/ takes a while to complete
// E.g. searching through 1000 records in a db, video processing, computations that take time

import { useState, useEffect, useRef, useMemo} from 'react'

function UseMemoExample1() {
  const [number, setNumber] = useState(1)
  const [inc, setInc] = useState(0)

  // getSqrt() is our dummy expensive function
  // if number is not changed, the expensive function does not get called
  // bcos the the return value from getSqrt is memoized as the input number did not change
  //const sqrt = getSqrt(number)
  const sqrt = useMemo(() => {
   return getSqrt(number)
  }, [number])

  const renders = useRef(1)

  useEffect(() => {
    renders.current = renders.current + 1
  })

  const handleclick = () => {
    setInc((prevState) => {
      console.log(prevState + 1)
      return prevState + 1
    })
  }

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => { setNumber(e.target.value) }}
        className="form-control w-25"
      />

      <h2 className='my-3'>
        The square root of {number} is {sqrt}.
      </h2>

      <button onClick={handleclick} className="btn btn-primary">Re Render</button>
      <h3>Renders: {renders.current}</h3>
    </div>
  )
}

function getSqrt(num) {
  // for loop to make this function call expensive
  for (let i=0; i<= 10000; i++) {
    console.log(i)
  }

  console.log('Expensive function called!')

  return Math.sqrt(num)
}

export default UseMemoExample1
