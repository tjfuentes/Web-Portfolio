import { Link } from "react-router-dom";


const Home = () => {

  return (
    <>
      <main className="main-container">
        <div className="profile-container">
          <div className="intro-container">
            <h4>Hello! I'm <span>Tynneth</span>, a Full Stack Web Developer</h4>
            <p>With expertise in both fron-end and back-end technologies.
              I  bring websites and web applications to life, from pixel-perfect
              user interfaces to building robust server-side systems.
            </p>
          </div>

          <div className="image-container">
            <img src="../images/tj.png" alt="tj-photo" />
          </div>
        </div>

        <div className="prog-container">
          <h3>Skills</h3>
        </div>
        
      </main>
    </>
  )
}

export default Home;