import React from "react";
import web from "../src/image/About.png";
import Common from "./Common";

function About() {
  return (
    <>
      <Common
        name="Welcome to About page"
        imgsrc={web}
        visit="/contact"
        btname="Contact now"
        about={
          <span>
            <p>
              <span className="aboutGOYA">
                Goya provides software engineering, DevOps, and quality
                assurance services. We help our clients create solutions that
                facilitate their business growth.{" "}
              </span>
            </p>
            <p>
              <span className="aboutGOYA">Our main expertise includes: </span>
            </p>
            <p>
              <span className="aboutGOYA">
                1) Cloud, Web, and Database technologies - Web &ndash;
                Javascript and Python-based technology stacks - Full-stack
                development using MEAN/MERN, Meteor, Django, Flask, Ruby on
                Rails - Databases &ndash; MySQL, PostgreSQL, SQLite, MongoDB,
                GraphQL, Memcache, Hadoop (Casandra/Kafka), ElasticSearch,
                Grafana/Influx, Redis, Redshift - Cloud infrastructure &ndash;
                AWS, Google Cloud, Ali Cloud{" "}
              </span>
            </p>
            <p>
              <span className="aboutGOYA">
                2) DevOps &ndash; CI/CD (Jenkins), TravisCI, MS TFS Pipelines,
                Tomcat, Nginx, Apache, Docker/Kubernetes, scripting (bash,
                python, ruby), build tools (maven, ant, webpack), package
                managers (gem, pip), Puppet/Ansible, Log management systems (ELK
                stack, Splunk){" "}
              </span>
            </p>
            <p>
              <span className="aboutGOYA">
                3) QA (Manual and Automation) &ndash; Selenium, Appium, JMeter,
                Tsung, TestNG, JUnit, Robot Framework{" "}
              </span>
            </p>
            <p>
              <span className="aboutGOYA">
                4) Mobile Development - Hybrid and Native, iOS and Android apps
                development{" "}
              </span>
            </p>
            <p>
              <span className="aboutGOYA">5) Salesforce Development</span>
            </p>
          </span>
        }
      />
    </>
  );
}

export default About;
