import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value
      const onClickContent = event => {
        onToggleShowContent(event.target.value)
      }
      const onClickLeftNavbar = event => {
        onToggleShowLeftNavbar(event.target.value)
      }
      const onClickRightNavbar = event => {
        onToggleShowRightNavbar(event.target.value)
      }

      return (
        <div className="configuration-container">
          <h1 className="main-heading">Layout</h1>
          <form>
            <div>
              <input
                type="checkbox"
                id="content"
                onClick={onClickContent}
                value={showContent}
              />
              <label htmlFor="content" className="label-text">
                Content
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                id="left-nav"
                onClick={onClickLeftNavbar}
                value={showLeftNavbar}
              />
              <label htmlFor="left-nav" className="label-text">
                Left Navbar
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                id="right-nav"
                onClick={onClickRightNavbar}
                value={showRightNavbar}
              />
              <label htmlFor="right-nav" className="label-text">
                Right Navbar
              </label>
            </div>
          </form>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
