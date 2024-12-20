import { useEffect, useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let oldCount = JSON.parse(localStorage.getItem('count') || 0)
    setCount(oldCount)
  })

  const handleIncrement = () => {
    let newCount = count + 1
    setCount(newCount)
    localStorage.setItem('count', newCount)
  }

  const handleDcrement = () => {
    if (count > 0) {
      let newCount = count - 1
      setCount(newCount)
      localStorage.setItem('count', newCount)
    }
  }

  return (
    <>
      <body className='bg-secondary'>
        <div className="d-flex justify-content-center align-items-center flex-column vh-100">
          <div className='d-flex justify-content-center align-items-center flex-column rounded-5 p-5 shadow-5 bg-dark-subtle'>
            <h1 className='fs-1 text-primary'>Counter with LocalStorage</h1>
            <h2 className='mb-3'><span className='text-success'>Vite </span>+ <span className='text-danger-emphasis'>React</span> + <span className='text-warning-emphasis'>Count is {count}</span></h2>
            <div className="">
              <button className='btn btn-outline-success fs-4 me-2' onClick={handleDcrement}>-</button>
              <span className='fs-4'>{count}</span>
              <button className='btn btn-outline-success fs-4 ms-2' onClick={handleIncrement}>+</button>
            </div>
          </div>
        </div>
      </body>
    </>
  )
}

export default App
