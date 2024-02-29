import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div id="navbar" className="navbar-area">
    <div className="desktop-nav">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-light">
          <a href="index.html" className="navbar-brand">
            <img src="images/logo.png" alt="logo" />
          </a>
          <button
            className="navbar-toggler navbar-toggler-right collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="icon-bar top-bar"></span>
            <span className="icon-bar middle-bar"></span>
            <span className="icon-bar bottom-bar"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="others-options pe-0">
              <form className="search-form style1">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search Courses"
                  name="search"
                  value=""
                />
                <button type="submit" className="src-btn">
                  <i className="ri-search-line"></i>
                </button>
              </form>
            </div>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
              <Link className="nav-link active" to={"/"}>Home</Link>
              </li>
              <li className="nav-item">
                <a href="courses/index.html" className="nav-link">
                  Courses
                </a>
              </li>
              <li className="nav-item">
                <a href="become-an-instructor/index.html" className="nav-link">
                  Become An Instructor
                </a>
              </li>
            </ul>
          </div>
          <div className="others-options">
            <ul className="d-flex align-items-center">
              <li>
                <a href="checkout/index.html" className="cart">
                  <i className="ri-shopping-cart-line"></i>
                  <span>0</span>
                </a>
              </li>
              <li>
                <a href="auth/index.html" className="default-btn">
                  <i className="ri-registered-line"></i>
                  <span>Register Now</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  </div>
      
  )
}

export default Header