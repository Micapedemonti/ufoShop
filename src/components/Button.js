
const Button = (props) =>{

    return (
        <div>
      <button onClick={props.callback}>{props.label}</button>
        </div>
    )
}

export default Button