import {Component} from 'react'
import './index.css'

class InputField extends Component {
  render() {
    return (
      <div className="app-container">
        <div>
          <img
            className="logo-container"
            alt="logo"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png "
          />
        </div>
        <div className="input-items-container">
          <picture className="picture-container">
            <source
              media="(min-width :768px)"
              srcSet="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            />
            <img
              className="password-manager-image"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
              alt="password manager"
            />
          </picture>
          <form className="form-container">
            <h1 className="main-heading">Add New Password</h1>
            <div className="input-container">
              <img
                className="input-icons"
                alt="website"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png "
              />
              <input
                type="text"
                className="input-field"
                placeholder="Enter Website"
              />
            </div>
            <div className="input-container">
              <img
                className="input-icons"
                alt="username"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png "
              />
              <input
                type="text"
                className="input-field"
                placeholder="Enter Username"
              />
            </div>
            <div className="input-container">
              <img
                className="input-icons"
                alt="password"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png "
              />
              <input
                type="password"
                className="input-field"
                placeholder="Enter Password"
              />
            </div>
            <div className="button-container">
              <button type="submit" className="button">
                Add
              </button>
            </div>
          </form>
        </div>
        <div className="password-items-container">
          <div className="password-header-container">
            <h1 className="heading">Your Passwords</h1>
            <p className="count-display">0</p>
            <div className="searchInput-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
                className="icons-search"
              />
              <input type="text" className="input-bar" placeholder="Search" />
            </div>
          </div>
          <hr className="line" />
          <div className="checkBox-container">
            <input type="checkbox" />
            <h1 className="heading">Show Passwords</h1>
          </div>
          <div className="noPasswordImg-container">
            <img
              className="noPassword-img"
              alt="no passwords"
              src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
            />
            <h1>No Passwords</h1>
          </div>
        </div>
      </div>
    )
  }
}

export default InputField
