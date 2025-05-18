import { Outlet, redirect } from 'react-router'
import { SidebarComponent } from '@syncfusion/ej2-react-navigations'
import { MobileSidebar, Navitems } from "../../../components"
import { account } from "~/appwrite/client";
import { getExistingUser, storeUserData } from "~/appwrite/auth";

export async function clientLoader() {
    try {
        const user = await account.get();
        if (!user.$id) return redirect('/sign-in');

        // Get or create user data
        let userData = await getExistingUser(user.$id);
        if (!userData) {
            userData = await storeUserData();
        }

        // Check if user has admin status
        if (userData?.status !== 'admin') {
            return redirect('/');
        }

        return userData;
    } catch (e) {
        console.error('Error in clientLoader:', e);
        return redirect('/sign-in');
    }
}

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