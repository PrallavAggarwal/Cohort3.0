import type { ReactElement } from "react";



export function SidebarItems({ icon, text }: { icon: ReactElement, text: string }): ReactElement {

  return (
    <div className="flex ">
      <div className="p-2">{icon}</div>
      <div className="p-2">{text}</div>
    </div>
  )
}
