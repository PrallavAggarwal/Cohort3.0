import type { ReactElement } from "react";
import { Input } from "../components/Input";
import { Button } from "../components/Buttons";



export function Signup(): ReactElement {


  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <div>
        <Input placeholder="email" onChange={() => { }}></Input>
        <Input placeholder="username" onChange={() => { }}></Input>
        <Input placeholder="password" onChange={() => { }}></Input>
        <Button fullwidth={true} variant="primary" text="Signup" size="md" onClick={() => { }}></Button>
      </div>
    </div>
  )
}
