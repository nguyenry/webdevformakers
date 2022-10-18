import Head from "next/head";
import Project from "../components/Project";
import projects from "../data/projects";
import React from "react";
import ReactTypingEffect from "react-typing-effect";

export default function Index() {
    return (
        <>
            <Head>
                <title>Ryan's Website</title>
                <meta name="description" content="Welcome to my portfolio"/>
            </Head>
            <div id="navbar">
                <span>Ryan Nguyen</span>
            </div>
            <div id="container">
                <div id ="top-section">
                    <img src="/stem-fair.png" alt="" id="prof-pic"/>
                    <h1>Xin chào!<br/>Tên tôi là <ReactTypingEffect text={["Ryan"]}/>.</h1>
                </div>
                <p>
                    I'm a <b>Computer Science</b> major at Harvey Mudd College as well as an <b>Art</b> major at Scripps College.
                </p>
                <p>
                    For the past year, I've been a grutor (grader + tutor) for the <a href="https://www.hmc.edu/cs/">HMC Department of Computer Science</a>. I have also developed multiple projects such as a <a href="https://github.com/nguyenry/intro-cs-final-battleship">text-based board game of Battleship with AI functionality</a>.
                </p>
                <p>
                    Outside of CS, I enjoy <b>drawing and animating!</b> I've worked on a few short films/animations in high school, but those are now <b>locked away</b> in the deep, deep confines of my Google Drive. However, here are some of the <b>artworks</b> I've completed during my time in college!
                </p>
                <hr/>
                {projects.map(d => (
                    <Project
                        title={d.title}
                        description={d.description}
                        medium={d.medium}
                        link={d.link}
                        image={d.image}
                        alt={d.alt}
                    />
                ))}
            </div>
        </>
    );
}
