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
              <Link to="https://web.dev/learn/html/"><i className="fa-brands fa-html5"></i></Link>
              <h4>HTML</h4>
            </div>
            <div className="tools">
            <Link to="https://web.dev/learn/css/"><i className="fa-brands fa-css3"></i></Link>
              <h4>CSS</h4>
            </div>
            <div className="tools">
            <Link to="https://www.javascript.com/learn/strings"><i className="fa-brands fa-square-js"></i></Link>
              <h4>JavaScript</h4>
            </div>
            <div className="tools">
            <Link to="https://www.php.net/"><i className="fa-brands fa-php"></i></Link>
              <h4>PHP</h4>
            </div>
          </div>
        </div>

        <div className="framework-container">
          <div className="first-section">
            <h3>Framework</h3>

            <div className="technology">
              <div className="tools">
              <Link to="https://react.dev/learn"><i class="fa-brands fa-react"></i></Link>
                <h4>React</h4>
              </div>
              <div className="tools">
              <Link to="https://getbootstrap.com/"><i class="fa-brands fa-bootstrap"></i></Link>
                <h4>Bootstrap</h4>
              </div>
              <div className="tools">
              <Link to="https://laravel.com/docs/10.x/readme"><i class="fa-brands fa-laravel"></i></Link>
                <h4>Laravel</h4>
              </div>
            </div>
          </div>

          <div className="second-section">
            <h3>Database</h3>

            <div className="technology">
              <div className="tools">
              <Link to="https://dev.mysql.com/doc/"><i class="fa-solid fa-database"></i></Link>
                <h4>MySQL</h4>
              </div>
            </div>
          </div>
        </div>

        <div className="about-me">
          
        </div>

        
        
      </main>
    </>
  )
}

export default Home;