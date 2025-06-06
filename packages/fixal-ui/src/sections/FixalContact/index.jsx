import React from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import '../../styles/fixal.css';

// Avoid inline function default in destructuring
const defaultSubmit = (e) => {
  e.preventDefault();
  alert("Message sent!");
};

const FixalContact = (props) => {
  const {
    title = "Contact Us",
    onSubmit = defaultSubmit,
  } = props;

  const formRef = useScrollReveal('reveal-visible');

  return (
    <div className="fixal-hero">
      <h1>{title}</h1>
      <form ref={formRef} className="reveal fixal-contact-form" onSubmit={onSubmit}>
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message..." rows="5" required />
        <button className="fixal-button" type="submit">Send</button>
      </form>
    </div>
  );
};

export default FixalContact;
