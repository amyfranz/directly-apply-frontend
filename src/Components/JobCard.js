import React from "react";

export default function JobCard({ job }) {
  //displays the job card
  return (
    <a href={job.link} className="jobCard">
      <img src={job.img} alt="" />
      <h5>{job.job}</h5>
      <p>{job.numJobs}</p>
    </a>
  );
}
