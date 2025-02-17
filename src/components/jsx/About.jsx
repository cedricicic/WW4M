import React from "react";
import "../css/about.css";
import Navbar from "./Navbar";

function About() {
  return (
    <div className="about-page">
      <h1 className="about-title2">About</h1>
      <p className="about-paragraph">
      Born from the depths of application season despair, WaterlooWorksForMe emerged when a fellow Warrior found themselves drowning in a sea of co-op applications. Like many before them, they faced the familiar cycle: copy, paste, customize, repeat – all while racing against time and thousands of other students.
      <br></br>
      <br></br>
      What started as a late-night caffeine-fueled thought has evolved into your personal co-op application ally. Using AI technology, we transform your resume and job details into tailored cover letters that capture your voice and experience, helping you stand out in the competitive co-op landscape.
      <br></br>
      <br></br>
      Think of us as your application wingman – because let's face it, WaterlooWorks is great, but WaterlooWorksForMe works... well, for you! (Yes, we went there, and we're not sorry about it <a href = "https://cedricleung.ca/" className = "smiley">:D</a>  ) 
      <br></br>
      <br></br>
      Our mission is simple: help students spend less time writing cover letters and more time focusing on what matters – like figuring out why MC looks like a giant math textbook or why geese have claimed V1 as their empire.
      </p>
    </div>
  );
}

function finalAbout(){
    return(
    <>
    <Navbar/>
    <About />
    </>)
}

export default finalAbout;
