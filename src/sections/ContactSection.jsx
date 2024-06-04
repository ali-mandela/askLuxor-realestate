import style from '../styles/contact.module.css';
import SectionLayout from './SectionLayout';

const ContactSection = () => {

    const customStyles = {
        color: "black",
        backgroundColor: "#F6F5F5"
    };
    return (

        <SectionLayout
            isHr={false}
            style={customStyles}
            title='Contact us'
            content='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo assumenda, dolorum necessitatibus eius earum voluptates sed!'>
            <div className={style.contactContainer}>
                <div className={style.form}>
                    <ContactForm/>
                </div>
                <div className={style.content}>
                    <h3>Contact Info</h3>
                    <div>
                        <label>Address:</label>
                        <address>34 Street Name, City Name Here, United States</address>
                        <label>Phone:</label><br/>
                        <a href="tel:+9999999999">+9999999999</a><br/>
                        <label>Email:</label><br/>
                        <a href="mailto:mail@rdev.com">mail@rdev.com</a>
                    </div>

                </div>
            </div>
        </SectionLayout>

    )
}

const ContactForm = () => {

    const handleSubmit = (e) => {
        e.preventDefault();

    }
    return (
        <form onSubmit={handleSubmit} className={style.formContainer}>
            <div>
                <input type='text' placeholder='First Name'/>
                <input type='text' placeholder='Last Name'/>
            </div>
            <input type='email' placeholder='email address'/>

            <textarea rows={10} type='text' placeholder='write your Message'/>

            <button>Send Message</button>
        </form>
    )
}
export default ContactSection
