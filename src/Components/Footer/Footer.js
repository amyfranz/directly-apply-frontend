import React from "react";
import logo from "../../Assets/logoFooter.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitterSquare,
  faFacebookSquare,
  faYoutubeSquare,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

export default function Footer() {
  //footer
  return (
    <div className="footer">
      <img src={logo} alt="" />
      <div className="footerLinks">
        <div>
          <h4>Job Seekers</h4>
          <a href="https://uk.directlyapply.com/job-seekers">
            Search for a Job
          </a>
          <a href="https://uk.directlyapply.com/job-seekers/tools/resume-builder">
            Resume Builder
          </a>
          <a href="https://uk.directlyapply.com/job-seekers/tools/job-application-tracker">
            Job Application Tracker
          </a>
          <a href="http://localhost:3001/login">Your Account</a>
        </div>
        <div>
          <h4>Employers</h4>
          <h5>Post a Job</h5>
          <a href="https://uk.directlyapply.com/hire" className="rightNav">
            Free Job Post
          </a>
          <a href="https://uk.directlyapply.com/hire/pricing" className="rightNav">
            Premium Pricing
          </a>
          <h5>Hiring Tools</h5>
          <a
            href="https://uk.directlyapply.com/hire/tools/applicant-tracking-system"
            className="rightNav"
          >
            Free Applicant Tracking
          </a>
          <a
            href="https://uk.directlyapply.com/hire/tools/multi-poster"
            className="rightNav"
          >
            Job Multi-Poster
          </a>
          <a
            href="https://uk.directlyapply.com/hire/tools/diversity-inclusion-checker"
            className="rightNav"
          >
            Diversity & Inclusion Checker
          </a>
          <a
            href="https://uk.directlyapply.com/hire/tools/job-description-builder"
            className="rightNav"
          >
            Job Description Builder
          </a>
          <a
            href="https://uk.directlyapply.com/hire/tools/programmatic-advertising"
            className="rightNav"
          >
            Programmatic Advertising
          </a>
          <h5>Resources</h5>
          <a
            href="https://uk.directlyapply.com/hire/resources/job-descriptions"
            className="rightNav"
          >
            Job Description Templates
          </a>
          <a
            href="https://uk.directlyapply.com/hire/resources/interview-questions"
            className="rightNav"
          >
            Sample Interview Questions
          </a>
        </div>
        <div>
          <h4>Company</h4>
          <a href="https://uk.directlyapply.com/insights">Insights / Blog</a>
          <a href="https://uk.directlyapply.com/about">About Us</a>
          <a href="https://uk.directlyapply.com/careers">Careers</a>
          <a href="https://uk.directlyapply.com/press">Press</a>
          <hr />
          <a href="https://uk.directlyapply.com/terms">Terms</a>
          <a href="https://uk.directlyapply.com/privacy">Privacy</a>
          <a href="https://uk.directlyapply.com/contact">Contact Us</a>
        </div>
        <div>
          <h4>Social</h4>
          <a href="https://www.twitter.com/directlyapply">
            <FontAwesomeIcon className="icon" icon={faTwitterSquare} />
            Twitter
          </a>
          <a href="https://www.youtube.com/channel/UCfe1AsFvDeWVt2jDXRXx--g/">
            <FontAwesomeIcon className="icon" icon={faYoutubeSquare} />
            YouTube
          </a>
          <a href="https://www.linkedin.com/company/directlyapply">
            <FontAwesomeIcon className="icon" icon={faLinkedin} />
            Linkedin
          </a>
          <a href="https://www.facebook.com/directlyapply">
            <FontAwesomeIcon className="icon" icon={faFacebookSquare} />
            Facebook
          </a>
        </div>
      </div>
      <hr />
    </div>
  );
}
