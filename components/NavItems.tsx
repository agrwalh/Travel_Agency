import { Link, NavLink } from "react-router";
import { sidebarItems } from "~/constants";
import { cn } from "~/lib/utils";

const NavItems = ({ handleClick }:{handleClick?:()=> void}) => {
  const user = {
    name: "Harsh",
    email: "haagarwal67@gmail.com",
    imageUrl: "/assets/images/david.webp",
  };

  return (
    <section className="nav-items h-full flex flex-col justify-between">
      <div>
        <Link to="/" className="link-logo">
          <img src="/assets/icons/logo.svg" alt="logo" className="size-[30px]" />
          <h1>TourVisto</h1>
        </Link>

        <nav>
          {sidebarItems.map(({ id, href, icon, label }) => (
            <NavLink to={href} key={id}>
              {({ isActive }: { isActive: boolean }) => (
                <div
                  className={cn("group nav-item", {
                    "bg-primary-100 !text-white": isActive,
                  })} onClick={handleClick}
                >
                  <img
                    src={icon}
                    alt={label}
                    className={`group-hover:brightness-0 size-0 group-hover:invert ${
                      isActive ? "brightness-0 invert" : "text-dark-200"
                    }`}
                  />
                  {label}
                </div>
              )}
            </NavLink>
          ))}
        </nav>
      </div>

      <footer className="nav-footer">
        <img
          src={user?.imageUrl || "/assets/images/David.webp"}
          alt={user?.name || "David"}
        />

        <article>
          <h2>{user?.name}</h2>
          <p>{user?.email}</p>
        </article>

        <button
          onClick={() => {
            console.log("Logout");
          }}
          className="cursor-pointer"
        >
          Logout
        </button>

        <img
          src="/assets/icons/logout.svg"
          alt="logout"
          className="size-6"
        />
      </footer>
    </section>
  );
};

export default NavItems;
