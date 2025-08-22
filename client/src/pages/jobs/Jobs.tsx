import { Outlet } from "react-router";

export default function Jobs() {
  return (
    <div>
      <h1>Jobs Home</h1>
      <p>Nav for jobs goes on here</p>
      {/* will either be <JobList/> or <Job/> */}
      <Outlet />
    </div>
  );
}
