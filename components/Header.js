import PropTypes from 'prop-types' //impt to imoprt proptyymes ia extension
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {              
    return (
        <header className = 'header'>
        <h1>{title}</h1>
        <Button color = {showAdd ? 'green': '#01034a'} text = {showAdd ? 'Close' : 'Add'}
         onClick= 
        {onAdd} /> 
        {/* the onAdd here and in the const Header ensures that the top 
    add green button toggles on clicking   */}
        
        </header>
    )
    }
    Header.defaultProps = {  //This will wprok only in the absence of he title in app.js
        title: 'Task Tracker'
    }
Header.propTypes = {
    title: PropTypes.string.isRequired
}
// css in js

// <h1 style={headingStyle} >{title}</h1>  abpve in head tag
//const headingStyle = {
//     color: 'red', 
//     backgroundColor: 'black',
// }

export default Header
