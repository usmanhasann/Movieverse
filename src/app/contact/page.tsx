"use client";
import type { NextPage } from "next";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact: NextPage = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    // Log the form data before sending
    if (form.current) {
      const formData = new FormData(form.current);
      const data = {
        name: formData.get("user_name"),
        email: formData.get("user_email"),
        subject: formData.get("subject"),
        message: formData.get("message"),
      };
      console.log("Form Data Sent:", data);
    }

    // Sending email via EmailJS
    emailjs
      .sendForm(
        "service_fbht85v", // Replace with your EmailJS service ID
        "template_7jlw5vy", // Replace with your EmailJS template ID
        form.current as HTMLFormElement,
        "UbAZvhnQ-ALH33t8r" // Replace with your EmailJS user ID (Public Key)
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          // Reset form after successful submission
          if (form.current) form.current.reset();
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send the message, please try again.");
        }
      );
  };

  return (
    <>
      <section className="contact section" id="contact">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>Contact Me</h2>
            </div>
          </div>
          <div className="row">
            {/* Contact Info Items */}
            <div className="contact-info-item padd-15">
              <div className="icon">
                <i className="fa fa-map-marker" />
              </div>
              <h4>Address</h4>
              <p>Lahore, Pakistan</p>
            </div>
            <div className="contact-info-item padd-15">
              <div className="icon">
                <i className="fa fa-phone" />
              </div>
              <h4>Call Us On</h4>
              <p>+92 3116458165</p>
            </div>
            <div className="contact-info-item padd-15">
              <div className="icon">
                <i className="fa fa-envelope" />
              </div>
              <h4>Email</h4>
              <p>coder.mobeen@email.com</p>
            </div>
          </div>
          {/* Contact Form */}
          <div className="row">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="contact-form padd-15"
            >
              <div className="row">
                <div className="form-item col-6 padd-15">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name*"
                      name="user_name"
                      required
                    />
                  </div>
                </div>
                <div className="form-item col-6 padd-15">
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email*"
                      name="user_email"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="form-item col-12 padd-15">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Subject*"
                      name="subject"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="form-item col-12 padd-15">
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      placeholder="Your Message*"
                      name="message"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 padd-15">
                  <button type="submit" className="btn">
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
