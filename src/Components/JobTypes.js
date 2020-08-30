import React from "react";
import { homeContent } from "../Utilities/String";
import { Jobs } from "../Data/Jobs";
import JobCard from "./JobCard";

export default function JobTypes() {
  return (
    <div className="jobTypes">
      <h3>{homeContent.jobHeading}</h3>
      <div className="jobs">
        {/* maps through the jobs to display the cards */}
        {Jobs.map((job, index) => (
          <JobCard job={job} key={index} />
        ))}
      </div>
    </div>
  );
}
