import Button from "../Button/Button";
import styles from "./ContactUs.module.css"
import {MdMessage} from "react-icons/md";
import {FaPhone} from "react-icons/fa";
import {MdEmail} from "react-icons/md";
import {useState} from "react";
const ContactUs=()=>{
    const [name,setName]=useState("sridevi");
    const [email,setEmail]=useState("sridevi@gmail.com");
    const [text,setText]=useState("adadfasdf");
    const clickFun=()=>{
        console.log("Call button is clicked");
    }
    const submitForm=(event)=>{
        event.preventDefault();
        setName(event.target[0].value);
        setEmail(event.target[1].value);
        setText(event.target[2].value);
    }
    return(
        <div className={styles.contact_us_container}>
            <div className={styles.topbtns}>
            <Button text="via chat " icon={<MdMessage/>} />
            <Button onClick={clickFun}text="via phone" icon={<FaPhone/>} />
            </div>
            <Button isFull={true} text="via email" icon={<MdEmail/>} />
            <form onSubmit={submitForm} className={styles.form_block}>
            <div className={styles.contact_form}>
                <label>Name</label>
                <input type="name" ></input>
            </div>
            <div className={styles.contact_form}>
                <label>Email</label>
                <input type="email"></input>
            </div>
            <div className={styles.contact_form}>
                <label>Text</label>
                <textarea type="email" rows="8"></textarea>
            </div>
            <div
            style={{
                display:"flex",
                justifyContent:"end",
            }}>
            <Button text="Submit "/>
            </div>
            </form>
            <div>
                {name +""+email+""+text}
            </div>
            
        </div>
    )
}
export default ContactUs;