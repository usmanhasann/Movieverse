import type { NextPage } from "next";
import { FaReact } from "react-icons/fa";
import { SiGatsby } from "react-icons/si";

const Service: NextPage = () => {
  return (
    <>
      <section className="service section" id="services">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>Our Services</h2>
            </div>
          </div>
          <div className="row">
            {/* Service Item 1: React.js Development */}
            <div className="service-item padd-15">
              <div className="service-item-inner">
                <div
                  className="icon"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <FaReact className="fa" />
                </div>
                <h4>React.js Development</h4>
                <p>
                  Build dynamic and responsive user interfaces with React.js.
                  Our team specializes in creating single-page applications
                  (SPAs) that provide seamless performance and an engaging user
                  experience.
                </p>
              </div>
            </div>
            {/* Service Item 1 End */}

            {/* Service Item 2: Next.js Development */}
            <div className="service-item padd-15">
              <div className="service-item-inner">
                <div className="icon">
                  <i className="fa fa-code" />
                </div>
                <h4>Next.js Development</h4>
                <p>
                  Leverage the power of Next.js for server-side rendering and
                  static site generation. We create fast, SEO-friendly
                  applications that enhance user engagement and improve
                  performance.
                </p>
              </div>
            </div>
            {/* Service Item 2 End */}

            {/* Service Item 3: Gatsby Development */}
            <div className="service-item padd-15">
              <div className="service-item-inner">
                <div
                  className="icon"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <SiGatsby className="fa" />
                </div>
                <h4>Gatsby Development</h4>
                <p>
                  Harness the power of Gatsby for building blazing-fast websites
                  and applications. Our expertise in Gatsby ensures optimized
                  performance and a great developer experience, delivering
                  exceptional sites for your business.
                </p>
              </div>
            </div>
            {/* Service Item 3 End */}

            {/* Service Item 4: Custom Web Design */}
            <div className="service-item padd-15">
              <div className="service-item-inner">
                <div className="icon">
                  <i className="fa fa-laptop" />
                </div>
                <h4>Custom Web Design</h4>
                <p>
                  Create a stunning online presence with our custom web design
                  services. We will tailor a website that not only looks
                  impressive but also delivers a seamless user experience,
                  helping you achieve your online goals.
                </p>
              </div>
            </div>
            {/* Service Item 4 End */}

            {/* Service Item 5: SEO Optimization */}
            <div className="service-item padd-15">
              <div className="service-item-inner">
                <div className="icon">
                  <i className="fa fa-rocket" />
                </div>
                <h4>SEO Optimization</h4>
                <p>
                  Boost your online visibility and drive organic traffic to your
                  website with our SEO optimization services. Our experts employ
                  proven strategies to improve your search engine rankings and
                  grow your online presence.
                </p>
              </div>
            </div>
            {/* Service Item 5 End */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
