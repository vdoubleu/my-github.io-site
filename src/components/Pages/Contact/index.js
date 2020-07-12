import React from "react";
import { Form, FormGroup, Input } from "reactstrap";
import emailjs from "emailjs-com";

import "../../../styles/components/contact.css";

const Contact = () => {
    const sendMessage = e => {
        e.preventDefault();

        emailjs.sendForm("gmail", "template_hw7gBkzT", e.target, "user_I7F0kzRLn3IzlcEw00QiF")
        .then((result) => {
            console.log(result);
            alert("Message sent, I will get back to you as soon as I can");
        }, (error) => {
            console.log(error);
            alert("Error sending message, try emailing me directly at victorwang2001@gmail.com");
        })
        .then(() => {
            document.getElementById("contact-form").reset();
        });

        }

    return (
        <div>
        <div className="contact-gradient-box" />
        <div className="container">
            <h2 className="base-page-header" > Contact Me </h2>
            
            <Form id="contact-form" className="d-flex flex-column" onSubmit={sendMessage} >
                <FormGroup className="contact-group">
                    <label> Your Name </label>
                    <Input type="text" name="from_name" required />
                </FormGroup>
                <FormGroup className="contact-group">
                    <label> Your Email </label>
                    <Input type="email" name="from_email" required />
                </FormGroup>
                <FormGroup>
                    <label> Your Message </label>
                    <Input type="textarea" name="message_html" required rows="6" />
                </FormGroup>
                
                
                <Input type="submit" id="contact-submit" className="align-self-center" value="Send Message" />
            </Form>
        </div>
        </div>
    );
}

export default Contact;
