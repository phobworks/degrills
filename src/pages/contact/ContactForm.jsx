import { useState } from 'react';
import './contact.css';

const ContactForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'quote',
    message: '',
    honey: '',
    captcha: '',
    startTime: Date.now(),
  });

  const [status, setStatus] = useState('');

  const captchaAnswer = 7; // 3 + 4 (simple anti-bot check)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    if (!form.name || form.name.length < 2) return 'Name is required';
    if (!form.email.includes('@')) return 'Valid email required';
    if (!form.message || form.message.length < 5) return 'Message too short';
    if (form.captcha != captchaAnswer) return 'Captcha incorrect';
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('');

    const error = validate();
    if (error) {
      setStatus(error);
      return;
    }

    const formData = new FormData();
    Object.keys(form).forEach((key) => formData.append(key, form[key]));

    try {
      const res = await fetch('submit.php', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();
      setStatus(data.message);

      if (data.success) {
        setForm({
          name: '',
          email: '',
          phone: '',
          type: 'quote',
          message: '',
          honey: '',
          captcha: '',
          startTime: Date.now(),
        });
      }
    } catch (err) {
      setStatus('Something went wrong. Try again later.');
    }
  };

  return (
    <div className="contact-container">
      <form className="contact-form" onSubmit={handleSubmit}>
        <h2>Contact Us</h2>

        <input type="text" name="name" placeholder="Full Name" value={form.name} onChange={handleChange} />

        <input type="email" name="email" placeholder="Email Address" value={form.email} onChange={handleChange} />

        <input type="text" name="phone" placeholder="Phone Number (optional)" value={form.phone} onChange={handleChange} />

        <select name="type" value={form.type} onChange={handleChange}>
          <option value="partner">Become a Partner</option>
          <option value="quote">Get a Quote</option>
          <option value="enquiry">General Enquiry</option>
        </select>

        <textarea name="message" placeholder="Write your request..." value={form.message} onChange={handleChange} />

        {/* Honeypot field (hidden from humans) */}
        <input type="text" name="honey" value={form.honey} onChange={handleChange} className="hidden-field" autoComplete="off" />

        {/* Simple captcha */}
        <label>What is 3 + 4?</label>
        <input type="text" name="captcha" value={form.captcha} onChange={handleChange} />

        <button type="submit">Send Message</button>

        {status && <p className="status">{status}</p>}
      </form>
    </div>
  );
};
export default ContactForm;
