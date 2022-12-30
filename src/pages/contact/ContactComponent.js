import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import BlogsImg from "./BlogsImg";
import { Fade } from "react-reveal";
import "./ContactComponent.css";
import { greeting, contactPageData } from "../../portfolio.js";
import { style } from "glamor";

const ContactData = contactPageData.contactSection;
const blogSection = contactPageData.blogSection;

function Contact(props) {
  const theme = props.theme;

  const styles = style({
    backgroundColor: `${theme.accentBright}`,
    ":hover": {
      boxShadow: `0 5px 15px ${theme.accentBright}`,
    },
  });

  return (
    <div className="contact-main">
      <Header theme={theme} setTheme={props.setTheme} />
      <div className="basic-contact">
        <Fade bottom duration={1000} distance="40px">
          <div className="contact-heading-div">
            <div className="contact-heading-img-div">
              <img
                className="profile-pic"
                src={require(`../../assests/images/${ContactData["profile_image_path"]}`)}
                alt=""
              />
            </div>
            <div className="contact-heading-text-div">
              <h1
                className="contact-heading-text"
                style={{ color: theme.text }}
              >
                {ContactData["title"]}
              </h1>
              <p
                className="contact-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {ContactData["description"]}
              </p>
              <SocialMedia />
              <br />
              <br />
              <a
                {...styles}
                className="general-btn"
                href={greeting.resumeLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Resume
              </a>
              {/* <br />
              <br />
              <br />
              <a
                {...styles}
                className="general-btn"
                href={greeting.resumeLink2}
                target="_blank"
              >
                PM-PO-UX/IU Resume
              </a> */}
            </div>
          </div>
        </Fade>
        <Fade bottom duration={1000} distance="40px">
          <div className="blog-heading-div">
            <div className="blog-heading-text-div">
              <h1 className="blog-heading-text" style={{ color: theme.text }}>
                {blogSection["title"]}
              </h1>
              <p
                className="blog-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {/* {blogSection["subtitle"]} */}
                In 2016 I founded 2 startups: mobility and fintech, and the
                process that most caught my attention was user behavior when
                interacting with our products. Since that moment I have been
                training in UX and, at the same time, putting my knowledge into
                practice in each project that I undertook. In that way I
                achieved the following milestones: • I improved the user
                experience of a critical process of fintech, managing to
                increase the conversion rate by 34%. • I created two tools to
                increase a payment checkout with different clients, speeding up
                the integration process to only 10 minutes of development. • I
                developed and designed a self-contracting system for an internet
                provider company, doubling its monthly sales.
              </p>
              {/* <div className="blogsite-btn-div">
                <a {...styles} className="general-btn" href={blogSection.link}>
                  My Twitter Profile
                </a>
              </div> */}
            </div>
            <div className="blog-heading-img-div">
              <BlogsImg theme={theme} />
            </div>
          </div>
        </Fade>
      </div>
      <Footer theme={props.theme} onToggle={props.onToggle} />
    </div>
  );
}

export default Contact;
