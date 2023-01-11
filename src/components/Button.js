import PropTypes from 'prop-types'

// NOTE - can just import props, but we destructured to get color and text so we didn't have to use props.color, etc

const Button = ({ color, text, onClick }) => {

    return <button onClick={onClick} style={{ backgroundColor: color }} className='btn'>{text}</button>

}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func.isRequired,
}

export default Button
