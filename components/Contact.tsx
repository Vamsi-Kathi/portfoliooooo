import React, { useState, useEffect } from 'react';

// This will allow TypeScript to recognize the emailjs global variable from the script tag
declare const emailjs: any;

interface ContactProps {
  email: string;
  phone: string;
  location: string;
}

const Contact: React.FC<ContactProps> = ({ email, phone, location }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const [statusMessage, setStatusMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // EmailJS credentials have been set
  const SERVICE_ID = 'service_p12q02m';
  const TEMPLATE_ID = 'template_f1h3x8f';
  const PUBLIC_KEY = 'i-K3zO-9B4-YvyH6A';
  
  useEffect(() => {
    if(PUBLIC_KEY) {
        emailjs.init(PUBLIC_KEY);
    }
  }, [PUBLIC_KEY]);

  const validateForm = (): boolean => {
    const newErrors = { name: '', email: '', message: '' };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required.';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid.';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
    if (errors[name as keyof typeof errors]) {
        setErrors(prevErrors => ({ ...prevErrors, [name]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) {
        return;
    }

    setIsSubmitting(true);
    setStatusMessage('');

    // These parameters should match the variables used in your EmailJS template
    const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams)
      .then((response: any) => {
          console.log('SUCCESS!', response.status, response.text);
          setStatusMessage('Thank you! Your message has been sent successfully.');
          // Delay form reset to allow user to read the message
          setTimeout(() => {
            setFormData({ name: '', email: '', message: '' });
          }, 3000); // 3-second delay before clearing fields
      }, (err: any) => {
          console.error('FAILED...', err);
          setStatusMessage('Failed to send message. Please try again later.');
      }).finally(() => {
          setIsSubmitting(false);
          setTimeout(() => setStatusMessage(''), 5000); // Clear message after 5 seconds
      });
  };


  return (
    <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 mb-4 mt-16">Contact Info</h2>
        <p className="mb-2">
            <a href={`mailto:${email}`} className="group flex items-center">
                <i className="fa-solid fa-envelope mr-2 text-slate-400 group-hover:text-teal-300"></i>
                <span className="font-medium text-slate-400 group-hover:text-teal-300 focus-visible:text-teal-300">{email}</span>
            </a>
        </p>
        <p className="mb-2">
             <a href={`tel:${phone.replace(/\s/g, '')}`} className="group flex items-center">
                <i className="fa-solid fa-phone mr-2 text-slate-400 group-hover:text-teal-300"></i>
                <span className="font-medium text-slate-400 group-hover:text-teal-300 focus-visible:text-teal-300">{phone}</span>
            </a>
        </p>
        <p className="mb-4 flex items-start">
             <i className="fa-solid fa-location-dot mr-2 mt-1 text-slate-400"></i>
            <span>{location}</span>
        </p>
        
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 mb-4 mt-16">Get In Touch</h2>
        <form onSubmit={handleSubmit} noValidate>
            <div className="mb-4">
                <label htmlFor="name" className="block mb-2 text-xs font-bold uppercase tracking-widest text-slate-400">Name</label>
                <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required 
                    className="w-full p-2 bg-slate-800 rounded-md border border-slate-700 focus:outline-none focus:ring-2 focus:ring-teal-400 text-slate-300 placeholder-slate-500"
                    aria-invalid={errors.name ? "true" : "false"}
                    aria-describedby="name-error"
                />
                {errors.name && <p id="name-error" className="mt-1 text-sm text-red-400">{errors.name}</p>}
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="block mb-2 text-xs font-bold uppercase tracking-widest text-slate-400">Email</label>
                <input 
                    type="email" 
                    id="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required 
                    className="w-full p-2 bg-slate-800 rounded-md border border-slate-700 focus:outline-none focus:ring-2 focus:ring-teal-400 text-slate-300 placeholder-slate-500"
                    aria-invalid={errors.email ? "true" : "false"}
                    aria-describedby="email-error"
                />
                {errors.email && <p id="email-error" className="mt-1 text-sm text-red-400">{errors.email}</p>}
            </div>
            <div className="mb-4">
                <label htmlFor="message" className="block mb-2 text-xs font-bold uppercase tracking-widest text-slate-400">Message</label>
                <textarea 
                    id="message" 
                    name="message" 
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required 
                    className="w-full p-2 bg-slate-800 rounded-md border border-slate-700 focus:outline-none focus:ring-2 focus:ring-teal-400 text-slate-300 placeholder-slate-500"
                    aria-invalid={errors.message ? "true" : "false"}
                    aria-describedby="message-error"
                ></textarea>
                {errors.message && <p id="message-error" className="mt-1 text-sm text-red-400">{errors.message}</p>}
            </div>
            <button 
                type="submit"
                disabled={isSubmitting} 
                className="w-full px-6 py-3 bg-teal-500 text-slate-900 font-semibold rounded-md hover:bg-teal-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-teal-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            {statusMessage && (
                <p 
                    role="status"
                    aria-live="polite"
                    className={`mt-4 text-center text-sm ${statusMessage.includes('Failed') ? 'text-red-400' : 'text-green-400'}`}>
                    {statusMessage}
                </p>
            )}
        </form>

        <p className="mt-8">
            This portfolio is built with React and Tailwind CSS. The design is inspired by modern developer portfolios, aiming for a clean, professional, and accessible user experience.
        </p>
    </footer>
  );
};

export default Contact;