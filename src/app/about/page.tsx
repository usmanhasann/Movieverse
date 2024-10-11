import type { NextPage } from "next";

const About: NextPage = () => {
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
                    Hi! My name is Mobeen Ahmad. I am a React.js and Next.js
                    Developer, and I am passionate and dedicated to front-end
                    development. With over 2 years of experience, I have
                    acquired expertise in React.js, Next.js, Tailwind CSS, MUI
                    (Material UI), Bootstrap, HTML, CSS, SCSS, JavaScript, and
                    TypeScript. I enjoy every step of the development process,
                    from discussion to implementation.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="personal-info padd-15">
                  <div className="row">
                    <div className="info-item padd-15">
                      <p>
                        Email : <span>coder.mobeen@gmail.com</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Degree : <span>Fsc ADP CS</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Phone : <span>+92 3116458165</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        City : <span>Lahore</span>
                      </p>
                    </div>
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
                      <a
                        href="#contact"
                        data-section-index={0}
                        className="btn hire-me"
                      >
                        Hire Me
                      </a>
                    </div>
                  </div>
                </div>

                <div className="skills padd-15">
                  <div
                    className="skill-item padd-15"
                    style={{
                      // backgroundColor: "#2196f3",
                      padding: "0px 0 10px 0",
                      borderRadius: "50px",
                    }}
                  >
                    <h5
                      style={{
                        fontSize: "24px",
                        fontWeight: "700",
                        lineHeight: "36px",
                      }}
                    >
                      Skills
                    </h5>
                  </div>
                  <div className="new-style-for-skills">
                    <div
                      className="skill-item padd-15"
                      style={{
                        backgroundColor: "#2196f3",
                        padding: "1px 20px",
                        borderRadius: "50px",
                      }}
                    >
                      <h5>React js</h5>
                    </div>
                    <div
                      className="skill-item padd-15"
                      style={{
                        backgroundColor: "#2196f3",
                        padding: "1px 20px",
                        borderRadius: "50px",
                      }}
                    >
                      <h5>Next js</h5>
                    </div>
                    <div
                      className="skill-item padd-15"
                      style={{
                        backgroundColor: "#2196f3",
                        padding: "1px 20px",
                        borderRadius: "50px",
                      }}
                    >
                      <h5>Material UI</h5>
                    </div>
                    <div
                      className="skill-item padd-15"
                      style={{
                        backgroundColor: "#2196f3",
                        padding: "1px 20px",
                        borderRadius: "50px",
                      }}
                    >
                      <h5>Web Development</h5>
                    </div>
                    <div
                      className="skill-item padd-15"
                      style={{
                        backgroundColor: "#2196f3",
                        padding: "1px 20px",
                        borderRadius: "50px",
                      }}
                    >
                      <h5>HTML5</h5>
                    </div>
                    <div
                      className="skill-item padd-15"
                      style={{
                        backgroundColor: "#2196f3",
                        padding: "1px 20px",
                        borderRadius: "50px",
                      }}
                    >
                      <h5>CSS</h5>
                    </div>
                    <div
                      className="skill-item padd-15"
                      style={{
                        backgroundColor: "#2196f3",
                        padding: "1px 20px",
                        borderRadius: "50px",
                      }}
                    >
                      <h5>Javascript</h5>
                    </div>
                    <div
                      className="skill-item padd-15"
                      style={{
                        backgroundColor: "#2196f3",
                        padding: "1px 20px",
                        borderRadius: "50px",
                      }}
                    >
                      <h5>Typescript</h5>
                    </div>
                    <div
                      className="skill-item padd-15"
                      style={{
                        backgroundColor: "#2196f3",
                        padding: "1px 20px",
                        borderRadius: "50px",
                      }}
                    >
                      <h5>Git</h5>
                    </div>
                    <div
                      className="skill-item padd-15"
                      style={{
                        backgroundColor: "#2196f3",
                        padding: "1px 20px",
                        borderRadius: "50px",
                      }}
                    >
                      <h5>Tailwind</h5>
                    </div>
                    <div
                      className="skill-item padd-15"
                      style={{
                        backgroundColor: "#2196f3",
                        padding: "1px 20px",
                        borderRadius: "50px",
                      }}
                    >
                      <h5>Bootstrap</h5>
                    </div>
                    <div
                      className="skill-item padd-15"
                      style={{
                        backgroundColor: "#2196f3",
                        padding: "1px 20px",
                        borderRadius: "50px",
                      }}
                    >
                      <h5>Gatsby js</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="education padd-15">
                  <h3 className="title">Education</h3>
                  <div className="row">
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2023 to Present
                          </h6>
                          <h4 className="timeline-title">
                            React.js & Next.js Development
                          </h4>
                          <p className="timeline-text">
                            Since 2022, I have been specializing in React.js and
                            Next.js development, focusing on creating dynamic,
                            high-performance web applications. My expertise
                            includes React hooks, Context API, and optimizing
                            performance with Next.js.
                          </p>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2021 to Present
                          </h6>
                          <h4 className="timeline-title">
                            ADP in Computer Science
                          </h4>
                          <p className="timeline-text">
                            Since 2021, I have been pursuing an Associate Degree
                            Program (ADP) in Computer Science at the Virtual
                            University of Pakistan. This academic background has
                            significantly enhanced my problem-solving abilities,
                            analytical thinking, and structured approach to
                            front-end development. It has also deepened my
                            understanding of core programming concepts and
                            modern web technologies, helping me grow as a
                            developer.
                          </p>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2021 to 2023
                          </h6>
                          <h4 className="timeline-title">
                            Degree In Computer Science
                          </h4>
                          <p className="timeline-text">
                            From 2021, I pursued a Degree In Computer Science at
                            Government S.M.K.M Degree College Kotha, Swabi. This
                            background has contributed to my problem-solving
                            skills and structured approach to front-end
                            development.
                          </p>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2019 to 2021
                          </h6>
                          <h4 className="timeline-title">
                            Secondary School Certificate (SSC)
                          </h4>
                          <p className="timeline-text">
                            In 2023, I completed my SSC from the Science Group
                            with a Percentage of 86% at GCMHS Marghuz (Swabi).
                            High School.
                          </p>
                        </div>
                        {/* Timeline Item end */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="experience padd-15">
                  <h3 className="title">Experience</h3>
                  <div className="row">
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2022 to Present
                          </h6>
                          <h4 className="timeline-title">
                            Front-End Web Development
                          </h4>
                          <p className="timeline-text">
                            Since 2022, I have focused on front-end development,
                            working with technologies like React.js, Next.js,
                            HTML, CSS, SCSS, JavaScript, TypeScript, Tailwind
                            CSS, Material UI snd Gatsby js. I have built
                            responsive and visually appealing web applications.
                          </p>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2023 to Present
                          </h6>
                          <h4 className="timeline-title">
                            API Integration & Optimization
                          </h4>
                          <p className="timeline-text">
                            I have experience in integrating third-party APIs,
                            optimizing performance, and improving SEO using
                            Next.js&apos; server-side rendering and static site
                            generation. My projects focus on efficiency and
                            scalability.
                          </p>
                        </div>
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
