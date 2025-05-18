import { Header } from "../../../components";
import { StatsCard } from "../../../components";
import { TripCard } from "../../../components";
import { dashboardStats, user, allTrips } from "~/constants";
import {redirect} from "react-router"; 

const Dashboard = () => {
  const { totalUsers, usersJoined, totalTrips, tripsCreated, userRole } = dashboardStats;

  return (
    <main className="dashboard wrapper">
      <Header
        title={`Welcome ${user?.name ?? "Guest"}`}
        description="Track activity, trends and popular destinations"
      />

      <section className="flex flex-col gap-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          <StatsCard
            title="Total Users"
            total={totalUsers}
            currentMonth={usersJoined.currentMonth}
            lastMonth={usersJoined.lastMonth}
          />
          <StatsCard
            title="Total Trips"
            total={totalTrips}
            currentMonth={tripsCreated.currentMonth}
            lastMonth={tripsCreated.lastMonth}
          />
          <StatsCard
            title="User Roles"
            total={userRole.total}
            currentMonth={userRole.currentMonth}
            lastMonth={userRole.lastMonth}
          />
        </div>

        <section className="container">
          <h1 className="text-xl font-semibold text-dark-100">Created Trips</h1>
          <div className="trip-grid">
            {allTrips.slice(0, 4).map(({ id, name, imageUrls, itinerary, tags, estimatedPrice }) => (
              <TripCard
                key={id}
                id={id.toString()}
                name={name}
                imageUrl={imageUrls[0]}
                location={itinerary?.[0]?.location ?? ''}
                tags={tags}
                price={estimatedPrice}
              />
            ))}
          </div>
        </section>
      </section>
    </main>
  );
};

export default Dashboard;
