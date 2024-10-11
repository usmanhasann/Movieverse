import type { NextPage } from "next";

const About: NextPage = () => {
  const personalInfo = [
    { label: "Email", value: "coder.mobeen@gmail.com" },
    { label: "Degree", value: "Fsc ADP CS" },
    { label: "Phone", value: "+92 3116458165" },
    { label: "City", value: "Lahore" },
  ];

  const skills = [
    "React.js",
    "Next.js",
    "Material UI",
    "Web Development",
    "HTML5",
    "CSS",
    "JavaScript",
    "TypeScript",
    "Git",
    "Tailwind",
    "Bootstrap",
    "Gatsby.js",
  ];

  const education = [
    {
      date: "2023 to Present",
      title: "React.js & Next.js Development",
      description:
        "Specializing in React.js and Next.js development, focusing on creating dynamic, high-performance web applications.",
    },
    {
      date: "2021 to Present",
      title: "ADP in Computer Science",
      description:
        "Pursuing an Associate Degree Program (ADP) in Computer Science at the Virtual University of Pakistan.",
    },
    {
      date: "2021 to 2023",
      title: "Degree In Computer Science",
      description:
        "Studied at Government S.M.K.M Degree College Kotha, Swabi, enhancing problem-solving and development skills.",
    },
    {
      date: "2019 to 2021",
      title: "Secondary School Certificate (SSC)",
      description:
        "Completed SSC from the Science Group with a Percentage of 86% at GCMHS Marghuz (Swabi).",
    },
  ];

  const experience = [
    {
      date: "2022 to Present",
      title: "Front-End Web Development",
      description:
        "Focused on front-end development with technologies like React.js, Next.js, HTML, CSS, JavaScript, and more.",
    },
    {
      date: "2023 to Present",
      title: "API Integration & Optimization",
      description:
        "Experience in integrating third-party APIs, optimizing performance, and improving SEO using Next.js.",
    },
  ];

  return (
    <main>
      <section className="about section" id="about">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>About Me</h2>
            </div>
          </div>
          <div className="row">
            <div className="about-content padd-15">
              <div className="row">
                <div className="about-text padd-15">
                  <h2>
                    I am Mobeen Ahmad, a{" "}
                    <span>Professional React.js and Next.js Developer</span>
                  </h2>
                  <p>
                    Hi! My name is Mobeen Ahmad. I am passionate and dedicated
                    to front-end development. With over 2 years of experience, I
                    have acquired expertise in various technologies. I enjoy
                    every step of the development process, from discussion to
                    implementation.
                  </p>
                </div>
              </div>
              <div className="row">
                {/* Personal Info */}
                <div className="personal-info padd-15">
                  <div className="row">
                    {personalInfo.map((info, index) => (
                      <div key={index} className="info-item padd-15">
                        <p>
                          {info.label} : <span>{info.value}</span>
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="row">
                    <div className="buttons padd-15">
                      <a
                        href="/assets/MobeenAhmadResume.pdf"
                        target="_target"
                        className="btn"
                      >
                        Download CV
                      </a>
                      <a href="#contact" className="btn hire-me">
                        Hire Me
                      </a>
                    </div>
                  </div>
                </div>
                {/* Skills Section */}
                <div className="skills padd-15">
                  <div className="skill-item padd-15">
                    <h5>Skills</h5>
                  </div>
                  <div className="new-style-for-skills">
                    {skills.map((skill, index) => (
                      <div
                        key={index}
                        className="skill-item padd-15"
                        style={{
                          backgroundColor: "#2196f3",
                          padding: "1px 20px",
                          borderRadius: "50px",
                        }}
                      >
                        <h5>{skill}</h5>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="row">
                {/* Education Section */}
                <div className="education padd-15">
                  <h3 className="title">Education</h3>
                  <div className="row">
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">
                        {education.map((edu, index) => (
                          <div key={index} className="timeline-item">
                            <div className="circle-dot" />
                            <h6 className="timeline-date">
                              <i className="fa fa-calendar" /> {edu.date}
                            </h6>
                            <h4 className="timeline-title">{edu.title}</h4>
                            <p className="timeline-text">{edu.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                {/* Experience Section */}
                <div className="experience padd-15">
                  <h3 className="title">Experience</h3>
                  <div className="row">
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">
                        {experience.map((exp, index) => (
                          <div key={index} className="timeline-item">
                            <div className="circle-dot" />
                            <h6 className="timeline-date">
                              <i className="fa fa-calendar" /> {exp.date}
                            </h6>
                            <h4 className="timeline-title">{exp.title}</h4>
                            <p className="timeline-text">{exp.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
