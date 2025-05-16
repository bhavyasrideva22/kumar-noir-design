
import React, { useState } from "react";
import { toast } from "sonner";
import Layout from "@/components/Layout";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      toast.success("Your message has been sent successfully. I'll get back to you soon.");
    }, 1500);
  };
  
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-lg mb-6">Contact</h1>
            <p className="body-lg mb-10 max-w-2xl mx-auto">
              Let's discuss how we can work together to elevate your performance and achieve your strategic objectives.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="heading-md mb-8">Get in Touch</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black"
                    placeholder="Your email"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black appearance-none bg-white"
                  >
                    <option value="">Select a subject</option>
                    <option value="Executive Coaching">Executive Coaching</option>
                    <option value="Strategic Consulting">Strategic Consulting</option>
                    <option value="Speaking Engagement">Speaking Engagement</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black resize-none"
                    placeholder="How can I help you?"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="btn-primary w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-10 lg:pl-12">
              <div>
                <h2 className="heading-md mb-6">Contact Information</h2>
                <ul className="space-y-6">
                  <li className="flex items-start">
                    <Mail className="mt-1 mr-4 h-5 w-5" />
                    <div>
                      <p className="font-medium">Email</p>
                      <a href="mailto:hello@krishnakumar.com" className="text-gray-600 link-hover">hello@krishnakumar.com</a>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Phone className="mt-1 mr-4 h-5 w-5" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <a href="tel:+919876543210" className="text-gray-600 link-hover">+91 9876 543 210</a>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <MapPin className="mt-1 mr-4 h-5 w-5" />
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-gray-600">Mumbai, India</p>
                      <p className="text-gray-600">(Available for global engagements)</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div>
                <h2 className="heading-md mb-6">Schedule a Call</h2>
                <p className="body-md mb-6">
                  Prefer to schedule a call directly? Use the calendar below to book a 30-minute consultation at your convenience.
                </p>
                {/* Placeholder for Calendly embed */}
                <div className="border border-gray-200 p-4 text-center">
                  <p className="text-gray-500">Calendar booking integration would be placed here.</p>
                  <button className="btn-outline mt-4 w-full">
                    Book a Call
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map or Additional Contact Section */}
      <section className="py-16 bg-secondary">
        <div className="container-custom text-center">
          <h2 className="heading-md mb-8">Connect on Social Media</h2>
          <div className="flex justify-center gap-6">
            <a href="#" className="p-4 border border-black hover:bg-black hover:text-white transition-colors duration-300" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a href="#" className="p-4 border border-black hover:bg-black hover:text-white transition-colors duration-300" aria-label="Twitter">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </a>
            <a href="#" className="p-4 border border-black hover:bg-black hover:text-white transition-colors duration-300" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
