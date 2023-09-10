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
          <h3>Front-End</h3>

          <div className="technology">
            <div className="tools">
              <i class="fa-brands fa-html5"></i>
              <h4>HTML</h4>
            </div>
            <div className="tools">
              <i class="fa-brands fa-css3"></i>
              <h4>CSS</h4>
            </div>
            <div className="tools">
              <i class="fa-brands fa-square-js"></i>
              <h4>JavaScript</h4>
            </div>
            <div className="tools">
              <i class="fa-brands fa-php"></i>
              <h4>PHP</h4>
            </div>
          </div>
        </div>
        
      </main>
    </>
  )
}

export default Home;