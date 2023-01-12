// NOTE - Don't need this anymore => import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'


const Header = (props) => {
    return (
      <header className='header'>
        <h1>{props.title}</h1>
        <Button 
          color={props.showAdd ? 'red' : 'green'} 
          text={props.showAdd ? 'Close' : 'Add'} 
          onClick={props.onAdd} 
        />
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
