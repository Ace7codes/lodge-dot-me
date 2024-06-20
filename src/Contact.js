import { Link } from 'react-router-dom';
import './Contact.css';
import { useState } from 'react';

const Contact = () => {
    const [formSubmitted , setFormSubmitted] = useState(false);
    const [name , setName] = useState('');
    const [email , setEmail] = useState('');
    const [number , setNumber] = useState('');
    const [subject , setSubject] = useState('');
    const [body , setBody] = useState('');
    const [isButtonDisabled , setIsButtonDisabled] = useState(true);

    const setDisplay = (e) => {
        e.preventDefault();
    };
    const setSubmit = () => {
        setFormSubmitted(!formSubmitted)
    }


    const inputValidation = (id)  => {
        const inputField = document.getElementById(`${id}`);
        if (inputField.value){
            inputField.style.borderColor = 'black'
        } else {
            inputField.style.borderColor = 'red'
        };

        if(!name || !email || !subject || body.length <= 10 ){
            setIsButtonDisabled(true)
        } else {
            setIsButtonDisabled(false)
        };
    };




    return (
        <section className="contact">
            {formSubmitted && <section className="submitted">
                <h2>Thanks for reaching out, {name}! <br />A representative will contact you shortly</h2>
                <Link to='/' className='back-link' onClick={setSubmit}>Back to Home</Link>
            </section>}
            {!formSubmitted && <section className="form">
                <h1>Send us an Email</h1>
                <form onSubmit={setDisplay}>
                    <label htmlFor="name">Your Name<span className="asterisk">*</span>:</label>
                    <input
                    type="text"
                    id='name'
                    value={name}
                    onChange={(e) => (setName(e.target.value))}
                    required
                    placeholder='Enter your name'
                    autoComplete='true'
                    onBlur={() => inputValidation('name')}
                    />
                    <label htmlFor="email">Your Email<span className="asterisk">*</span>:</label>
                    <input
                    type="email"
                    id='email'
                    value={email}
                    onChange={(e) => (setEmail(e.target.value))}
                    required
                    placeholder='Enter your name'
                    autoComplete='true'
                    onBlur={() => inputValidation('email')}
                    />
                    <label htmlFor="number">Contact Number:</label>
                    <input
                    type="tel"
                    id='number'
                    value={number}
                    onChange={(e) => (setNumber(e.target.value))}
                    placeholder='Enter your contact number'
                    autoComplete='true'
                    pattern={(+999)-(999)-(999)-(9999)}
                    />
                    <label htmlFor="mail-subject">Enquiry Subject<span className="asterisk">*</span>:</label>
                    <input
                    type="text"
                    id='mail-subject'
                    value={subject}
                    onChange={(e) => (setSubject(e.target.value))}
                    required
                    placeholder='Enter a subject for your message'
                    autoComplete='true'
                    onBlur={() => inputValidation('mail-subject')}
                    />
                    <label htmlFor="mail-body">Your Message<span className="asterisk">*</span>:</label>
                    <textarea
                    rows={10}
                    id="mail-body"
                    value={body}
                    onChange={(e) => (setBody(e.target.value))}
                    placeholder='Enter your message'
                    autoComplete='true'
                    onBlur={() => inputValidation('mail-body')}
                    />
                    <button
                    id='submit-btn'
                    type='submit'
                    disabled = {isButtonDisabled === true}
                    onClick={setSubmit}
                    >Send inquiry mail</button>
                </form>
            </section>}
        </section>
    );
}

export default Contact;