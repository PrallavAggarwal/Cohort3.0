import type { ReactElement } from "react";
import { CrossIcon } from "./icons/CrossIcon";
import { Input } from "./Input";
import { Button } from "./Buttons";



export function CreateContentModel({ open, onClose }: { open: boolean, onClose: () => void }): ReactElement {


  return (
    <div>
      {open &&
        <div className="w-screen h-screen bg-Purple200 fixed opacity-50 top-0 left-0 flex items-center justify-center z-10">
          <div className="flex flex-col justify-center">
            <span className="bg-white opacity-100 p-4 rounded-md flex-col gap-2 justify-center flex">
              <div className="flex justify-end"><div onClick={onClose} className="cursor-pointer"> <CrossIcon size={"md"}></CrossIcon></div></div>
              <Input placeholder={"email"} onChange={() => console.log('change in iput')}></Input>
              <Input placeholder={"email"} onChange={() => console.log('change in iput')}></Input>
              <div className="cursor-pointer"><Button onClick={() => { }} variant="primary" size="md" text="Submit" ></Button></div>
            </span>
          </div>
        </div>}
    </div>
  )
}
