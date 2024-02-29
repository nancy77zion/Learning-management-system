// Banner from '../components/Banner'
import '../App.css'

const Home = () => {
  return (
    <div className="banner-area bg-1">
    <div className="container-fluid">
      <div className="row items-center">
        <div className="col-lg-6">
          <div className="banner-img">
            <img
              src="..\src\assets\images\banner\banner-img-1.png"
              alt="banner"
              // style={{ transform: 'scale(0) translateZ(0)' }}
            />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="banner-content">
            <h1>
              <span className="word-wrapper">
                <span style={{ overflow: 'hidden', display: 'inline-block' }}>
                  <span style={{ display: 'inline-block', transform: 'translateY(200%) translateZ(0)' }}>
                    I
                  </span>
                </span>
                {/* Repeat similar spans for each letter */}
              </span>
              {/* Repeat similar word-wrapper spans for each word */}
            </h1>
            <p style={{ opacity: 0, transform: 'scale(0.8) translateZ(0)' }}>
              We have <span>40k+</span> Online courses &amp;
              <span>500K+</span> Online registered student. Find your
              desired Courses from them.
            </p>
            <form className="search-form">
              <input
                type="text"
                className="form-control"
                placeholder="Search Courses"
                name="search"
                value=""
              />
              <button type="submit" className="default-btn">
                <span>Search Now</span>
                <i className="ri-search-line"></i>
              </button>
            </form>
            <ul className="client-list">
              <li>
                <img src="../src/assets/images/banner/client-1.jpg" alt="banner" />
                {/* Add more img tags for additional clients */}
              </li>
              <li>
                <p>
                  500K+ People already trusted us.
                  <a href="courses/index.html" className="read-more">
                    View Courses
                    <i className="ri-arrow-right-line"></i>
                  </a>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <img src="../src/assets/images/banner/shape-1.svg" className="shape shape-1" alt="banner" />
    <img src="../src/assets/images/banner/shape-2.svg" className="shape shape-2" alt="banner2" />
    <img src="../src/assets/images/banner/shape-3.svg" className="shape shape-3" alt="banner3" />
  </div>
  )
}

export default Home