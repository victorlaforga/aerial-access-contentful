import React, { useState } from 'react';
import FacebookLogo from '../../images/facebooklogo.png';
import InstagramLogo from '../../images/instagramlogo.png';
import LinkedinLogo from '../../images/linkedinlogo.png';

const ContactMain = (props) => {
  const [form, setForm] = useState({});
  const [response, setResponse] = useState({});

  const handleInputChange = (e) => {
    const {
      target: { name, value },
    } = e;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
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
      body: encode({ 'form-name': 'contact', ...form }),
    })
      .then(() => {
        setResponse({
          status: 'success',
          message: 'Message sent',
        });
      })
      .catch((error) => {
        setResponse({
          status: 'success',
          message: 'Message not sent',
        });
      });
  };

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
              onSubmit={handleSubmit}
            >
              <label>
                Naam <br />
                <input
                  type='text'
                  name='name'
                  value={form.name || ''}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                E-Mail <br />
                <input
                  type='text'
                  name='email'
                  required
                  value={form.email || ''}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Onderwerp <br />
                <input
                  type='text'
                  name='subject'
                  value={form.subject || ''}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Bericht <br />
                <input
                  type='textarea'
                  name='message'
                  value={form.message || ''}
                  onChange={handleInputChange}
                />
              </label>
              <button type='submit'>Verstuur</button>
            </form>
            {response ? (
              <div
                className={`form-response ${
                  response.status === 'success' ? 'success' : 'error'
                }`}
              >
                {response.message}
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

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

export default ContactMain;
