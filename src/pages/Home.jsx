import { Link } from "react-router-dom";


const Home = () => {

  return (
    <>
      <main className="main-container">
        <div className="profile-container">
          <div className="intro-container">
            <h4>Hello! I'm <span>Tynneth</span>, a Full Stack Web Developer</h4>
            <p>With expertise in both front-end and back-end technologies.
              I  bring websites and web applications to life, from pixel-perfect
              user interfaces to building robust server-side systems.
            </p>
          </div>

          <div className="image-container">
            <img src="../images/tj.png" alt="tj-photo" />
            <div className="socmed">              
              <Link to="https://github.com/tjfuentes"><i className="fa-brands fa-github"></i></Link>
              <Link to="https://www.linkedin.com/in/tynneth-fuentes-990692233/"><i className="fa-brands fa-linkedin"></i></Link>
              <Link to="https://www.facebook.com/tynneth.jhoel/"><i className="fa-brands fa-facebook"></i></Link>
            </div>
          </div>
        </div>

        <div className="front-container">
          <h3>Programming Languages</h3>

          <div className="technology">
            <div className="tools">
              <i className="fa-brands fa-html5"></i>
              <h4>HTML</h4>
            </div>
            <div className="tools">
              <i className="fa-brands fa-css3"></i>
              <h4>CSS</h4>
            </div>
            <div className="tools">
              <i className="fa-brands fa-square-js"></i>
              <h4>JavaScript</h4>
            </div>
            <div className="tools">
              <i className="fa-brands fa-php"></i>
              <h4>JavaScript</h4>
            </div>
          </div>
        </div>

        <div className="back-container">
          <h3>Framework</h3>

          <div className="technology">
            <div className="tools">
              <i class="fa-brands fa-react"></i>
              <h4>React</h4>
            </div>
            <div className="tools">
              <i class="fa-brands fa-bootstrap"></i>
              <h4>Bootstrap</h4>
            </div>
            <div className="tools">
              <i class="fa-brands fa-laravel"></i>
              <h4>Laravel</h4>
            </div>
          </div>
        </div>

        
        
      </main>
    </>
  )
}

export default Home;