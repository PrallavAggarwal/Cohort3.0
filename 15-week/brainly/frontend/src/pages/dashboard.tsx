import { size } from "zod"
import { Button } from "../components/Buttons"
import { PlusIcon } from "../components/icons/PlusIcon"
import { ShareIcon } from "../components/icons/ShareIcon"
import { Card } from "../components/Card"
import { CreateContentModel } from "../components/CreateContentModel"
import { useState } from "react"
import { Sidebar } from "../components/Sidebar"

function Dashboard() {

  const [modelOpen, setModel] = useState(false);

  function clickHandler() {
    console.log("button clicked.")
    setModel(true)
  }
  return (
    <>
      <Sidebar></Sidebar>
      <CreateContentModel open={modelOpen} onClose={() => { setModel(false) }}></CreateContentModel>
      <div className="p-10 ml-72 bg-Grey100 min-h-screen">
        <div className="flex justify-end gap-4">
          <Button variant="primary" size="lg" text="Click Me" onClick={clickHandler} startIcon={<PlusIcon size={"md"} />}></Button>
          <Button variant="secondary" size="lg" text="Click Me" onClick={clickHandler} startIcon={<ShareIcon size={"md"} />}></Button>
        </div>
        <div className="flex gap-4">
          <Card title={'yt videos'} type={'youtube'} link={"https://www.youtube.com/watch?v=HhPZ7yx8ttg"} />
          <Card title={'tweets'} type={'twitter'} link={"https://x.com/opdaiIy/status/1971854580821450922"} />
        </div>

      </div>
    </>
  )
}

export default Dashboard;
