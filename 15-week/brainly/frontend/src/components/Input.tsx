import type { ReactElement } from "react";



export function Input({ placeholder, onChange }: { placeholder: string, onChange: () => void }): ReactElement {

  return (
    <div>
      <input className=" px-4 py-2 border rounded " placeholder={placeholder} onChange={onChange}></input>
    </div>
  )
}
