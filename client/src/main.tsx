import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import App from './App';
import Members from './pages/members/Members';
import Ranks from './pages/ranks/Ranks';
import Jobs from './pages/jobs/Jobs';
import JobList from './pages/jobs/JobList';
import Job from './pages/jobs/Job';
import JobHome from './pages/jobs/Home';

import './index.css'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="members" element={<Members />} />

        {/* Nested routes:
          the top level Route path is a container page, set the layout, if want common h1 etc
          the index element is the default component that loads on that url /jobs will load Jobs around Home
          the additional paths are the components that load within /jobs/job will load Jobs around Job
          /jobs/joblist will load Jobs around JobList
         */}
        <Route path="jobs" element={<Jobs />}> 
          <Route index element={<JobHome />} />
          <Route path="job" element={<Job />} />
          <Route path="pastjobs" element={<JobList />} />
        </Route>

        <Route path="ranks" element={<Ranks />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

