import { Link } from "react-router-dom";


const Home = () => {

  return (
    <>
      <main className="main-container">
        <section className="glass">
          <div className="dashboard">
            <div className="user">
              <img src="/images/tj.png" alt="..." />
              <h3>Tynneth</h3>
              <p>Pro member</p>
            </div>
            <div className="links">
              <div className="link">
                <i class='bx bx-user'></i>
                <h2>About</h2>
              </div>
              <div className="link">
                <i class='bx bx-task' ></i>
                <h2>Projects</h2>
              </div>
              <div className="link">
                <i class='bx bxl-react' ></i>
                <h2>Skills</h2>
              </div>
              <div className="link">
                <i class='bx bxl-meta' ></i>
                <h2>Socmed</h2>
              </div>
            </div>
            <div className="pro">
              <h2>Hire Me</h2>
              <img src="/images/tj.png" alt="..." />
            </div>
          </div>
          <div className="games">
            <div className="status">
              <h1>Languages & FrameWorks</h1>
              <div className="cards">
                <div className="kard">
                  <i class='bx bxl-html5' ></i>
                  <div className="card-info">
                    <h2>HTML</h2>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <div className="progressbar"></div>
                  </div>
                  <h2 className="percentage">60%</h2>
                </div>
                <div className="kard">
                  <i class='bx bxl-css3' ></i>
                  <div className="card-info">
                    <h2>CSS</h2>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <div className="progressbar"></div>
                  </div>
                  <h2 className="percentage">60%</h2>
                </div>
                <div className="kard">
                  <i class='bx bxl-javascript' ></i>
                  <div className="card-info">
                    <h2>JAVASCRIPT</h2>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <div className="progressbar"></div>
                  </div>
                  <h2 className="percentage">60%</h2>
                </div>
                <div className="kard">
                  <i class='bx bxl-php' ></i>
                  <div className="card-info">
                    <h2>PHP</h2>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <div className="progressbar"></div>
                  </div>
                  <h2 className="percentage">60%</h2>
                </div>
                <div className="kard">
                  <i class='bx bxs-data' ></i>
                  <div className="card-info">
                    <h2>MySQL</h2>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <div className="progressbar"></div>
                  </div>
                  <h2 className="percentage">60%</h2>
                </div>
                <div className="kard">
                  <i class='bx bxl-react' ></i>
                  <div className="card-info">
                    <h2>ReactJs</h2>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <div className="progressbar"></div>
                  </div>
                  <h2 className="percentage">60%</h2>
                </div>
                <div className="kard">
                  <i class='bx bxl-bootstrap' ></i>
                  <div className="card-info">
                    <h2>BootStrap</h2>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <div className="progressbar"></div>
                  </div>
                  <h2 className="percentage">60%</h2>
                </div>
                <div className="kard">
                  <i class='bx bx-data' ></i>
                  <div className="card-info">
                    <h2>Laravel</h2>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <div className="progressbar"></div>
                  </div>
                  <h2 className="percentage">60%</h2>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <div className="circle1"></div>
      <div className="circle2"></div>
    </>
  )
}

export default Home;