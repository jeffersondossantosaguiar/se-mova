import { Head } from "next/document"
import { SideBar } from './SideBar'

export function Layout({children}) {
  return (
    <div className="Layout">
      <SideBar />
      <div className="Content">{children}</div>
    </div>
  )
}