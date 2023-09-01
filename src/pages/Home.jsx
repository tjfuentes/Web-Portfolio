import { Link } from "react-router-dom";
import '../scss/home.scss'

const Home = () => {

  return (
    <>
      <main className="main-container">
        <div className="profile-container">
          <div className="profile-summary">
            <p>Hi I'm <span>Tynneth</span>, Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="image-container">
            <img src="/images/tj.jpg" alt="tj-photo" className="prof-pic" />
          </div>
        </div>
        <div className="languages-container">
          <ul className="all-languages">
            <li className="language-content nav-link">HTML</li>
            <li className="language-content nav-link">CSS</li>
            <li className="language-content nav-link">JavaScript</li>
            <li className="language-content nav-link">PHP</li>
            <li className="language-content nav-link">ReactJs</li>
            <li className="language-content nav-link">Laravel</li>
          </ul>
        </div>
        <div className="projects-container">
          <div className="card" style={{width: 280}}>
            <img src="/images/ColorHuePrints.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Color Hue Prints</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <Link to="..." className="btn btn-primary">Go to Website</Link>
            </div>
          </div>
          <div className="card" style={{width: 280}}>
            <img src="/images/F2PGaming.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">F2P Gaming</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <Link to="..." className="btn btn-primary">Go to Website</Link>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Home;