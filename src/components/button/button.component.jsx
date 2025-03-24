
import './button.styles.scss'
//import Spinner from '../spinner/spinner.component'
const BUTTON_TYPE_CLASSES = {
    google: 'google-sign-in',
    inverted: 'inverted'
}

const Button = ({children,buttonType,isProcessing,otherClass,...otherProps})=>{

    return(
        <button className= {` button-container ${BUTTON_TYPE_CLASSES[buttonType]} ${otherClass}`} 
        {...otherProps} >{children}
        </button>
    )
}

export default Button