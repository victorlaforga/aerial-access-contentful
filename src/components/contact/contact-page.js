import React from 'react';
import FacebookLogo from '../../images/facebooklogo.png';
import InstagramLogo from '../../images/instagramlogo.png';
import LinkedinLogo from '../../images/linkedinlogo.png';

export default class ContactMain extends React.Component {
  state = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const encode = (data) => {
      return Object.keys(data)
        .map(
          (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
        )
        .join('&');
    };

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...this.state }),
    })
      .then(() =>
        alert(
          `Bedankt ${this.state.firstName}! We zullen zo snel mogelijk contact met je opnemen.`
        )
      )
      .catch((error) => alert(error));
  };

  render() {
    return (
      <section className='contact-main'>
        <div className='container'>
          <div className='contact-container'>
            <div className='contact-info'>
              <h2>AERIAL ACCESS</h2>
              <p>Trawlerkade 60</p>
              <p>1976 CC IJmuiden</p>
              <p>info@aerial-access.com</p>
              <br />
              <p>KvK. 000000000000</p>
              <p>BTW Nr. 0000000000</p>
              <div className='social-icons'>
                <img src={FacebookLogo} alt='' />
                <img src={InstagramLogo} alt='' />
                <img src={LinkedinLogo} alt='' />
              </div>
            </div>
            <div className='contact-form'>
              <form
                name='contact'
                method='post'
                data-netlify='true'
                data-netlify-honeypot='bot-field'
                onSubmit={this.handleSubmit}
              >
                <label>
                  Naam <br />
                  <input
                    type='text'
                    name='name'
                    value={this.state.name}
                    onChange={this.handleInputChange}
                  />
                </label>
                <label>
                  E-Mail <br />
                  <input
                    type='text'
                    name='email'
                    value={this.state.email}
                    onChange={this.handleInputChange}
                  />
                </label>
                <label>
                  Onderwerp <br />
                  <input
                    type='text'
                    name='subject'
                    value={this.state.subject}
                    onChange={this.handleInputChange}
                  />
                </label>
                <label>
                  Bericht <br />
                  <input
                    type='textarea'
                    name='message'
                    value={this.state.message}
                    onChange={this.handleInputChange}
                  />
                </label>
                <button type='submit'>Verstuur</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
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
