/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
import PropTypes from "prop-types"

const Button = ({ color, backroundColor, text, onClick }) => {
  return (
    <div>
      <button
        style={{ color: color, background: backroundColor }}
        className="btn"
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  )
}

Button.defaultProps = {
  title: "No Name",
  color: "green",
  text: "Text Missing",
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
}

export default Button
