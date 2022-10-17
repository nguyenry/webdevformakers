import Head from "next/head";

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
                    <h1>Xin chào!<br/>Tên tôi là Ryan.</h1>
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
                <a href="https://en.wikipedia.org/wiki/Still_life" className="project-wrapper">
                    <div className="project-box">
                        <img src="still-life.jpg" alt="Still Life with Glazing"></img>
                        <h2>Still Life with Glazing</h2>
                        <p>
                            <i>Acrylic and oil on canvas</i><br/><br/>This was my first project for Intro to Painting and was also my first time ever painting! I honestly really struggled with this piece technically, but it's not too shabby should I say so myself.
                        </p>
                        <div className="badge"><span>Artwork</span></div>
                    </div>
                </a>
                <a href="https://en.wikipedia.org/wiki/Abstract_art" className="project-wrapper">
                    <div className="project-box">
                        <img src="abstract-triptych.jpg" alt="Abstract Triptych"></img>
                        <h2>Abstract Triptych</h2>
                        <p>
                            <i>Acrylic and oil on canvas</i><br/><br/>Another piece from Intro to Painting, I am a little more satisfied with how this turned out, but there's always room to improve.
                        </p>
                    </div>
                </a>
            </div>
        </>
    );
}
