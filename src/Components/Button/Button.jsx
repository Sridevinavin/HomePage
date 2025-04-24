import styles from "./Button.module.css";


const Button=({isFull,text,icon,...rest})=>
{
    return(
        <div>
            <button {...rest}className={isFull ? styles.outline : styles.primary }>{icon}{text}</button>
        </div>
    )
}
export default Button;