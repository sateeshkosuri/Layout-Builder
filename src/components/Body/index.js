import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      return (
        <div className="body-container">
          <div className="body-left-navbar">
            <h1 className="left-navbar-heading">Left Navbar Menu</h1>
            <ul className="list-items">
              <li className="body-item">item1</li>
              <li className="body-item">item2</li>
              <li className="body-item">item3</li>
              <li className="body-item">item4</li>
            </ul>
          </div>

          <div className="body-content">
            <h1 className="content-heading">Content</h1>
            <p className="content-para">
              Lorem ipsum dolor sit amet,consectetur adipiscing elit,sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim
              ad minim veniam.
            </p>
          </div>

          <div className="body-right-navbar">
            <h1 className="right-navbar-heading">Right Navbar</h1>
            <button className="button" type="button">
              Ad 1
            </button>
            <button className="button" type="button">
              Ad 2
            </button>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
