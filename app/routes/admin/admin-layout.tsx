import { Outlet } from 'react-router'
import { SidebarComponent } from '@syncfusion/ej2-react-navigations'
import { MobileSidebar, Navitems } from "../../../components"

const AdminLayout = () => {
  return (
    <div className="admin-layout flex w-full h-screen">
      {/* Mobile Sidebar: only visible on mobile */}
      <div className="lg:hidden">
        <MobileSidebar />
      </div>
      {/* Desktop Sidebar: only visible on desktop */}
      <aside className="hidden lg:block w-[270px] h-full">
        <SidebarComponent width={270} enableGestures={false} className="h-full">
          <div className="h-full flex flex-col justify-between">
            <Navitems />
          </div>
        </SidebarComponent>
      </aside>
      {/* Main Content */}
      <main className="flex-1 bg-light-200 pt-12 lg:pt-10 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  )
}

export default AdminLayout