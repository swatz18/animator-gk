
import "./Contact.css";

import { contactData } from "./ContactData";
import usePageSEO from "../../hooks/usePageSEO";

function Contact() {
  usePageSEO(
  "Contact Animator GK | Freelance 3D Artist in Coimbatore",
  "Contact Animator GK, a freelance 3D artist and motion designer based in Coimbatore, Tamil Nadu, India. Get in touch for 3D animation, explainer videos, motion graphics, ArchViz and creative projects."
);
  return (
    <section className="contact-page">


      {/* ================= BACKGROUND EFFECT ================= */}

      <div className="contact-glow">
        <div className="contact-ring ring-1" />
        <div className="contact-ring ring-2" />
        <div className="contact-ring ring-3" />
        <div className="contact-ring ring-4" />
        <div className="contact-ring ring-5" />
      </div>


      {/* ================= MAIN CONTENT ================= */}

      <main className="contact-content">

        <div className="contact-left">

          {/* TITLE */}

          <div className="contact-title">

            <span>LET’S</span>

            <span className="purple">
              TALK.
            </span>

          </div>


          {/* TITLE LINE */}

          <div className="contact-title-line" />


          {/* EMAIL */}

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=animatorgkofficial@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-email"
          >
            <span>
              {contactData.email}
            </span>

            <span className="contact-email-arrow">
              →
            </span>
          </a>


          {/* DESCRIPTION */}

          <p className="contact-description">
            {contactData.description}
          </p>

        </div>

      </main>

    </section>
  );
}

export default Contact;