import './index.css'

const PasswordWallet = props => {
  const {itemDetails, isChecked, onDeleteItem} = props
  const {id, websiteInput, userName, password} = itemDetails
  const passwordStar = isChecked ? (
    <p className="para">{password}</p>
  ) : (
    <img
      src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
      alt="stars"
    />
  )
  const initial = websiteInput[0].toUpperCase()

  const onClickDelete = () => {
    onDeleteItem(id)
  }

  return (
    <li className="list-item-container">
      <div className="initial-section">{initial}</div>
      <div className="text-cont">
        <p className="heading">{websiteInput}</p>
        <p className="para">{userName}</p>
        {passwordStar}
      </div>
      <div className="button-cont">
        <button
          type="button"
          testId="delete"
          className="delete-button"
          onClick={onClickDelete}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            alt="delete"
            className="delete-icon"
          />
        </button>
      </div>
    </li>
  )
}
export default PasswordWallet
