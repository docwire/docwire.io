import './contact.css'
import Form from "./Form";
function Contact() {

    return (
            <div className="docwire__contact-bg section">
                <div className="docwire__contact-text">
                    <h1 className="docwire__contact-text_h1 text-display">
                        How Can We Help You?
                    </h1>
                    <p className="docwire__contact-text_section text-lead">
                        Want access to our non-commercial demo license, ask questions about our functions or simply inquire
                        about pricing? Fill in the form and we will get back to you!
                    </p>
                </div>
                <div className="docwire__contact-form">
                    <div className="docwire__contact-form_form card">
                        <Form />
                    </div>
                </div>
            </div>
    )
}

export default Contact;