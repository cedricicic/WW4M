import React, { useRef, useState } from "react";
import "../css/header.css";
import "../css/cover.css";
import Navbar from "./Navbar";
import Formater from "./Cover.jsx";
import { generateCoverLetter } from "../js/ai";

function Header() {
  const [cover, setCover] = React.useState("");
  const [resume, setResume] = React.useState("");
  const [jobDescription, setJobDescription] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const coverLetterRef = useRef(null);
  const [showBanner, setShowBanner] = useState(true);

  // Banner style
  const bannerStyle = {
    backgroundColor: "black",
    color: "white",
    padding: "10px",
    textAlign: "center",
    width: "100%",
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 1000,
    fontWeight: "bold",
    display: showBanner ? "block" : "none"
  };

  const closeBannerStyle = {
    color: "white",
    float: "right",
    cursor: "pointer",
    marginRight: "20px"
  };

  // Function to close banner
  const closeBanner = () => {
    setShowBanner(false);
  };

  async function getCover() {
    try {
      setLoading(true);
      const CoverLetter = await generateCoverLetter(resume, jobDescription);
      console.log("Generated Cover Letter:", CoverLetter);
      setCover(CoverLetter);

      if (coverLetterRef.current) {
        coverLetterRef.current.scrollIntoView({ behavior: "smooth" });
      }
    } catch (error) {
      console.error("Error generating cover letter:", error);
    } finally {
      setLoading(false);
    }
  }

  function clearJobDescription() {
    setJobDescription("");
  }
  function copyToClipboard(button) {
    if (cover) {
      navigator.clipboard.writeText(cover).then(
        () => {
          button.textContent = "Copied!";
          setTimeout(() => {
            button.textContent = "Copy Cover Letter";
          }, 2000);
        },
        (err) => {
          console.error("Failed to copy cover letter: ", err);
        }
      );
    }
  }

  return (
    <>
      <div style={bannerStyle}>
        <span style={closeBannerStyle} onClick={closeBanner}>
          &times;
        </span>
        <p>NOTICE: Too broke to purchase more tokens to run the site :(</p>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          getCover();
        }}
      >
        <div className="about-container">
          <h1 className="about-title">Waterloo Works for Me</h1>
          <div className="loader"></div>
          <div className="background">↓scroll down after submission↓</div>
          <div className="input-container">
            <textarea
              className="input-box"
              placeholder="Paste in your resume content"
              value={resume}
              onChange={(e) => setResume(e.target.value)}
              required
            ></textarea>
            <div className="job-description-container">
              <textarea
                className="input-box"
                placeholder="Paste in your company name, job summary/ responsibility/ required skills"
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
                required
              ></textarea>
              <button
                className="clear-button"
                type="button"
                onClick={clearJobDescription}
              >
                Clear
              </button>
            </div>

            <button className="submit-button" type="submit" disabled={loading}>
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </div>
      </form>
      {cover && (
        <div className="cover-letter" ref={coverLetterRef}>
          <h2>Generated Cover Letter</h2>
          <Formater cover={cover} />
          <button
            className="copy-button"
            onClick={(e) => copyToClipboard(e.target)}
          >
            Copy Cover Letter
          </button>
        </div>
      )}
    </>
  );
}

function finalHeader() {
  return (
    <>
      <Navbar />
      <Header />
    </>
  );
}

export default finalHeader;
