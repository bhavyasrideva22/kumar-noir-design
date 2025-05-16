
import React from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-lg mb-6">About Krishna Kumar</h1>
            <p className="body-lg mb-10 max-w-2xl mx-auto">
              A strategic leader with over 7 years experience in product management, executive coaching, and entrepreneurship — driven by a passion for high performance and disciplined execution.
            </p>
          </div>
        </div>
      </section>

      {/* The Strategist */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="aspect-[4/3] bg-secondary relative">
              {/* Placeholder for image - replace with actual image when available */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-playfair text-4xl text-gray-300">The Strategist</span>
              </div>
            </div>
            <div>
              <h2 className="heading-md mb-4">The Strategist</h2>
              <p className="body-md mb-4">
                With 7+ years in product leadership roles across enterprise SaaS and consumer tech companies, I've developed a deep understanding of how to align product vision with business outcomes.
              </p>
              <p className="body-md mb-4">
                I specialize in translating complex business requirements into clear product roadmaps, building high-performing teams, and creating frameworks for decision-making that scale with your organization.
              </p>
              <p className="body-md">
                My strategic approach focuses on delivering exceptional customer experiences while meeting key business metrics, creating sustainable growth through disciplined execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Coach */}
      <section className="py-16 bg-secondary">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="heading-md mb-4">The Coach</h2>
              <p className="body-md mb-4">
                As an executive coach, I work with high-performers who want to achieve breakthrough results. My coaching philosophy centers on the belief that clarity precedes performance.
              </p>
              <p className="body-md mb-4">
                Through a structured yet adaptable approach, I help clients identify their core objectives, develop systems that support consistent progress, and implement accountability frameworks that drive measurable results.
              </p>
              <p className="body-md">
                Whether working with C-suite executives, emerging leaders, or high-potential individual contributors, my coaching creates lasting behavioral change that elevates performance.
              </p>
            </div>
            <div className="order-1 lg:order-2 aspect-[4/3] bg-white border border-gray-200 relative">
              {/* Placeholder for image - replace with actual image when available */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-playfair text-4xl text-gray-300">The Coach</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Athlete */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="aspect-[4/3] bg-secondary relative">
              {/* Placeholder for image - replace with actual image when available */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-playfair text-4xl text-gray-300">The Athlete</span>
              </div>
            </div>
            <div>
              <h2 className="heading-md mb-4">The Athlete</h2>
              <p className="body-md mb-4">
                My foundation as a state-level competitive athlete shaped my approach to performance, discipline, and strategic thinking. The rigorous training and mental fortitude required in athletics directly translates to business excellence.
              </p>
              <p className="body-md mb-4">
                I've learned that consistent small improvements compound over time, that recovery is as important as exertion, and that the right mindset is often the difference between success and failure.
              </p>
              <p className="body-md">
                These athletic principles inform how I approach challenges, build resilience, and maintain focus in high-pressure situations—skills I bring to every client engagement and business initiative.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Entrepreneur */}
      <section className="py-16 bg-secondary">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="heading-md mb-4">The Entrepreneur</h2>
              <p className="body-md mb-4">
                As an entrepreneur, I've experienced firsthand the challenges and rewards of building ventures from the ground up. My entrepreneurial journey has taught me how to identify opportunities, validate ideas efficiently, and execute with limited resources.
              </p>
              <p className="body-md mb-4">
                I believe in lean methodologies, rapid experimentation, and data-driven decision making. This entrepreneurial mindset informs how I approach problems—always looking for the most effective path forward while maintaining a focus on long-term sustainability.
              </p>
              <p className="body-md">
                My experience spans multiple industries and business models, giving me a versatile toolkit for tackling diverse challenges and scaling ideas into successful enterprises.
              </p>
            </div>
            <div className="order-1 lg:order-2 aspect-[4/3] bg-white border border-gray-200 relative">
              {/* Placeholder for image - replace with actual image when available */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-playfair text-4xl text-gray-300">The Entrepreneur</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-black text-white">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-6">Let's Work Together</h2>
          <p className="body-lg max-w-2xl mx-auto mb-8">
            Whether you're looking to elevate your product strategy, enhance your leadership capabilities, or accelerate your personal performance, I'm here to help you achieve exceptional results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/services" className="btn-primary bg-white text-black border-white hover:bg-white/90">
              Explore Services
            </Link>
            <Link to="/contact" className="btn-outline border-white text-white hover:bg-white/10">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
