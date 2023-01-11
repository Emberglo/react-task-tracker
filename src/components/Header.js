// NOTE - Don't need this anymore => import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'


const Header = (props) => {
    // NOTE - onClick function is passed as a prop to the child component
    const onClick = () => {
        console.log("Clicked");
    }

    return (
      <header className='header'>
        <h1>{props.title}</h1>
        <Button color='green' text='Add' onClick={onClick} />
      </header>
    )
}

// NOTE - include default props for a component incase something is not passed in
Header.defaultProps = {
    title: "Task Tracker",
}

// NOTE - prop types aren't necessary but helps catch errors
Header.propTypes = {
    title: PropTypes.string.isRequired,
} 


export default Header
