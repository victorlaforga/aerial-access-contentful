import React from 'react';
import FacebookLogo from '../../images/facebooklogo.png'
import InstagramLogo from '../../images/instagramlogo.png'
import LinkedinLogo from '../../images/linkedinlogo.png'




export default class ContactMain extends React.Component {
state = {
name: "",
email: "",
subject: "",
message: "",
}

handleInputChange = event => {
const target = event.target
const value = target.value
const name = target.name
this.setState({
[name]: value,
})
}
handleSubmit = event => {
    event.preventDefault()
    alert(`Bedankt ${this.state.firstName}! We zullen zo snel mogelijk contact met je opnemen.`)
  }
render() {
return <section className='contact-main'>
    <div className='container'>
        <div className="contact-container">
            <div className="contact-info">
                <h2>AERIAL ACCESS</h2>
                <p>Trawlerkade 60</p>
                <p>1976 CC IJmuiden</p>
                <p>info@aerial-access.com</p>
                <br />
                <p>KvK. 000000000000</p>
                <p>BTW Nr. 0000000000</p>
                <div className="social-icons">
                    <img src={FacebookLogo} alt="" />
                    <img src={InstagramLogo} alt="" />
                    <img src={LinkedinLogo} alt="" />
                </div>
            </div>
            <div className="contact-form">
                <form action="">
                    <label>
                        Naam <br />
                        <input type="text" name="name" value={this.state.name} onChange={this.handleInputChange}
 />
                    </label>
                    <label>
                        E-Mail <br />
                        <input type="text" name="email" value={this.state.email} onChange={this.handleInputChange}
/>
                    </label>
                    <label>
                        Onderwerp <br />
                        <input type="text" name="subject" value={this.state.subject} onChange={this.handleInputChange}
 />
                    </label>
                    <label>
                        Bericht <br />
                        <input type="textarea" name="message" value={this.state.message} onChange={this.handleInputChange}
 />
                    </label>
                    <button type="submit">Verstuur</button>
                </form>
            </div>
        </div>
    </div>
</section>
}
}

// const ContactMain = () => {
// return (
// <section className='contact-main'>
    // <div className='container'>
        // <div className="contact-container">
            // <div className="contact-info">
                // <h2>AERIAL ACCESS</h2>
                // <p>Trawlerkade 60</p>
                // <p>1976 CC IJmuiden</p>
                // <p>info@aerial-access.com</p>
                // <br />
                // <p>KvK. 000000000000</p>
                // <p>BTW Nr. 0000000000</p>
                // <div className="social-icons">
                    // <img src={FacebookLogo} alt="" />
                    // <img src={InstagramLogo} alt="" />
                    // <img src={LinkedinLogo} alt="" />
                    // </div>
                // </div>
            // <div className="contact-form">
                // <label htmlFor=""></label>
                // </div>
            // </div>
        // </div>
    // </section>
// );
// };

// export default ContactMain;