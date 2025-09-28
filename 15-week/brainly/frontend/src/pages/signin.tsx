import type { ReactElement } from "react";
import { Input } from "../components/Input";
import { Button } from "../components/Buttons";



export function Sigin(): ReactElement {


  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <div className="flex flex-col gap-4">
        <div><Input placeholder="email" onChange={() => { }}></Input></div>
        <div><Input placeholder="password" onChange={() => { }}></Input></div>
        <div><Button fullwidth={true} variant="primary" size="md" text="Sign in" onClick={() => { }}></Button></div>

      </div>
    </div>
  )
}
