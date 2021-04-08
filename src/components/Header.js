import PropTypes from 'prop-types'

const Header = ({ title }) => {
    return ( 
        <header className = 'header'>
           <h1> {title} </h1> 
        </header>
    )
}

Header.defaultProps = { /* this is and object */
    title: 'Task Tracker',
}

Header.propTypes = {     
    title: PropTypes.string.isRequired,
}

// CSS in JS (Dynamic styling)

//const headingStyle = {
//     color: 'red',
//     backgroundColor : 'black'
// }

export default Header