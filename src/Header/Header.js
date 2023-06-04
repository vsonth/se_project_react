import { Link } from 'react-router-dom';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';
import './Header.css'

const Header = ({onCreateModal}) => {
    return(
        <header className="header">
        <div className="header__logo">
          <div>
            <Link to="/">
            <img src={require("../images/logo.svg").default} alt="logo" />
            </Link>
          </div>
          <div>Date</div>
        </div>
        <div className="header__avatar-logo">
          <ToggleSwitch/>
          <div>
            <button type="text" onClick={onCreateModal}> Add New Clothes</button>
          </div>
          <Link to="/profile">Name</Link>
          <div><img src={require("../images/avatar.svg").default} /></div>
        </div>
      </header>
    )
}

export default Header;