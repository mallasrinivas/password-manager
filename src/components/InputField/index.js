import {Component} from 'react'
import './index.css'
import {v4} from 'uuid'
import PasswordWallet from '../PasswordWallet'

class InputField extends Component {
  state = {
    itemsList: [],
    websiteInput: '',
    userName: '',
    password: '',
    searchInput: '',
    isChecked: false,
  }

  onAddPasswordList = event => {
    event.preventDefault()
    const {websiteInput, userName, password} = this.state

    const newItem = {
      id: v4(),
      websiteInput,
      userName,
      password,
    }
    this.setState(prevState => ({
      itemsList: [...prevState.itemsList, newItem],
      websiteInput: '',
      userName: '',
      password: '',
    }))
  }

  onDeleteItem = id => {
    const {itemsList} = this.state
    const updateList = itemsList.filter(eachItem => eachItem.id !== id)
    this.setState({itemsList: updateList})
  }

  updateSearchList = event => {
    this.setState({searchInput: event.target.value})
  }

  handleChangeWebsite = event => {
    const newValueWebsite = event.target.value
    this.setState({websiteInput: newValueWebsite})
  }

  handleChangeUserName = event => {
    const newValueUserName = event.target.value
    this.setState({userName: newValueUserName})
  }

  handleChangePassword = event => {
    const newValuePassword = event.target.value
    this.setState({password: newValuePassword})
  }

  onChecked = () => {
    this.setState(prevState => ({isChecked: !prevState.isChecked}))
  }

  render() {
    const {
      websiteInput,
      userName,
      password,
      isChecked,
      itemsList,
      searchInput,
    } = this.state

    const updatedList = itemsList.filter(eachItem =>
      eachItem.toLowerCase().includes(searchInput.toLowerCase()),
    )
    const count = updatedList.length

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
          <form className="form-container" onSubmit={this.onAddPasswordList}>
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
                onChange={this.handleChangeWebsite}
                value={websiteInput}
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
                onChange={this.handleChangeUserName}
                value={userName}
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
                onChange={this.handleChangePassword}
                value={password}
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
            <p className="count-display">{count}</p>
            <div className="searchInput-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
                className="icons-search"
              />
              <input
                type="text"
                className="input-bar"
                placeholder="Search"
                onChange={this.updateSearchList}
              />
            </div>
          </div>
          <hr className="line" />
          <div className="checkBox-container">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={this.onChecked}
            />
            <h1 className="heading">Show Passwords</h1>
          </div>
          <ul className="list-items-container">
            {updatedList.map(eachItem => (
              <PasswordWallet
                key={eachItem.id}
                itemDetails={eachItem}
                isChecked={isChecked}
                onDeleteItem={this.onDeleteItem}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default InputField
