import "./MainPage.css"
const Button = (props) =>{
    return(<>
        <button type={props.type}>{props.msg}</button>
        </>)
}
export default Button