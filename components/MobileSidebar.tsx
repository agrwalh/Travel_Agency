// @ts-nocheck
import { useState, useRef } from "react";
import { Link } from "react-router";
import { SidebarComponent } from "@syncfusion/ej2-react-navigations";
import NavItems from "./NavItems";

const MobileSidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const sidebarRef = useRef(null);

    const openSidebar = () => setIsOpen(true);
    const closeSidebar = () => setIsOpen(false);

    return (
        <div className="mobile-sidebar wrapper">
            <header>
                <Link to="/">
                    <img
                        src="/assets/icons/logo.svg"
                        alt="Logo"
                        className="size-[30px]"
                    />
                    <h1>Tourvisto</h1>
                </Link>

                <button onClick={openSidebar} aria-label="Open sidebar">
                    <img src="/assets/icons/menu.svg" alt="menu" className="size-7" />
                </button>
            </header>
            {isOpen && (
                <>
                    <div className="fixed top-0 left-0 z-50 h-screen w-[270px] bg-white shadow-lg">
                        <SidebarComponent
                            width={270}
                            ref={sidebarRef}
                            created={() => sidebarRef.current && sidebarRef.current.show()}
                            closeOnDocumentClick={true}
                            showBackdrop={false}
                            type="over"
                            className="!h-screen"
                        >
                            <div className="h-full flex flex-col">
                                <NavItems handleClick={closeSidebar} />
                            </div>
                        </SidebarComponent>
                    </div>
                    {/* Backdrop for closing */}
                    <div
                        className="fixed inset-0 bg-white z-40"
                        onClick={closeSidebar}
                    />
                </>
            )}
        </div>
    );
};

export default MobileSidebar;