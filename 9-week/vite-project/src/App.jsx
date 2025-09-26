import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

// function App() {
//   const [isVisible, setVisible] = useState(true);
//   useEffect(() => {
//     console.log("isVisible mounted")
//     setInterval(() => {
//       setVisible(c => !c)
//       console.log("isVisible changed.")
//     }, 5000)
//   }, [])
//   return (
//     <>hello
//       {
//         isVisible ? <Counter></Counter> : null
//       }
//     </>
//   )
// }
//
// function Counter() {
//
//   const [count, setCount] = useState(0)
//
//   // setInterval(() => {
//   //   setCount(count + 1)
//   // }, 1000)
//
//   useEffect(() => {
//     console.log("mounted")
//     setInterval(() => {
//       //setCount(count => count + 1)
//       console.log("clock startd.")
//       setCount(c => c + 1)
//     }, 1000)
//
//   }, [])
//
//
//   return (
//     <div>
//       count {count}
//     </div>
//   )
// }




function App() {

  const [count, setCount] = useState(0)

  return (
    <div>

    </div>
  )

}



export default App
