import { Button } from "./components/Buttons"

function App() {

  function clickHandler() {
    console.log("button clicked.")
  }
  return (
    <>
      <Button variant="primary" size="sm" text="Click Me" onClick={clickHandler}></Button>

      <Button variant="secondary" size="md" text="Click Me" onClick={clickHandler}></Button>

      <Button variant="primary" size="lg" text="Click Me" onClick={clickHandler}></Button>


    </>
  )
}

export default App
