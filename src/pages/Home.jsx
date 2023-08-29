const Home = () => {

  return (
    <>
      <main className="main-container">
        <div className="profile-container">
          <div className="profile-summary">
            <p>Hi I'm <span>Tynneth</span>, Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="image-container">
            <img src="..." alt="tj-photo" />
          </div>
        </div>
        <div className="languages-container">
          <ul className="all-languages">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>PHP</li>
            <li>ReactJs</li>
            <li>Laravel</li>
          </ul>
        </div>
        <div className="projects-container">
          <div className="first-project">
            <h3>Mini Project 1</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, voluptas!</p>
            <img src="..." alt="project-screenshot" />
          </div>
          <div className="second-project">
            <h3>Mini Project 2</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, voluptas!</p>
            <img src="..." alt="project-screenshot" />
          </div>
          <div className="capstone-project">
            <h3>Capstone Project</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, voluptas!</p>
            <img src="..." alt="project-screenshot" />
          </div>
        </div>
      </main>
    </>
  )
}

export default Home;