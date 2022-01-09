/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */

import PropTypes from "prop-types"
import Button from "./Button"

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        onClick={onAdd}
        backroundColor={showAdd ? "Red" : "Green"}
        color={"white"}
        text={showAdd ? "Close" : "Add"}
      />
    </header>
  )
}

// CSS using JS for dynamic-styleing
// in Div: h1 style={headerStyle}
//const headerStyle = { color: "red", backgroundColor: "black" };

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

Header.defaultProps = {
  title: "Title missing",
}

export default Header
