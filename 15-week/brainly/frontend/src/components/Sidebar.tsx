import { BrainIcon } from "./icons/BrainIcon";
import { Xicon } from "./icons/Xicon";
import { YoutubeIcon } from "./icons/YoutubeIcon";
import { SidebarItems } from "./SidebarItems";



export function Sidebar() {

  return (
    <div className="h-screen w-72 bg-white border-r fixed left-0 top-0 flex-col items-center pl-4">
      <div className="flex items-center gap-2 py-2"><div><BrainIcon /></div><div className="text-2xl">Brainly</div></div>
      <div className="cursor-pointer hover:bg-Grey200 rounded-md ml-2 max-w-50 transition-all duration-200"><SidebarItems icon={<YoutubeIcon />} text="Youtube" ></SidebarItems></div>
      <div className="cursor-pointer hover:bg-Grey200 rounded-md ml-2 max-w-50 transition-all duration-200"><SidebarItems icon={<Xicon />} text="X.com" /></div>
    </div>

  )
}
