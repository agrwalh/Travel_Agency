import {Header} from "../../../components";

const Dashboard = () => {
  const user = { name: "Harsh" };

  return (
    <main className="dashboard wrapper">
      <Header
        title={`Welcome ${user?.name ?? "Guest"}`}
        description="Track activity, trends and popular destinations"
      />
      Dashboard page Content
    </main>
  );
};

export default Dashboard;
