
import React from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { ArrowRight } from "lucide-react";

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-lg mb-6">Services</h1>
            <p className="body-lg mb-10 max-w-2xl mx-auto">
              Premium offerings designed to elevate performance, provide strategic clarity, and drive measurable results for high-performing individuals and organizations.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16">
        <div className="container-custom">
          {/* Executive Productivity Coaching */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-24">
            <div>
              <p className="text-sm font-medium uppercase tracking-wider mb-2">01</p>
              <h2 className="heading-md mb-6">Executive Productivity Coaching</h2>
              <p className="body-md mb-6">
                Personalized coaching designed specifically for executives and high-potential leaders seeking to maximize their effectiveness, focus, and impact. This comprehensive coaching program addresses the unique challenges faced by today's leaders.
              </p>
              <h3 className="text-lg font-semibold mb-4">This Service Includes:</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="mr-3 mt-1">—</span>
                  <span>1:1 coaching sessions tailored to your specific goals and challenges</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1">—</span>
                  <span>Custom productivity systems designed for your working style</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1">—</span>
                  <span>Decision-making frameworks to improve clarity and confidence</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1">—</span>
                  <span>Accountability structures and regular progress assessments</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1">—</span>
                  <span>Priority management and focus enhancement techniques</span>
                </li>
              </ul>
              <Link to="/contact" className="btn-outline inline-flex items-center">
                <span>Learn More</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="aspect-[4/3] bg-secondary relative">
              {/* Placeholder for image - replace with actual image when available */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-playfair text-4xl text-gray-300">Coaching</span>
              </div>
            </div>
          </div>

          {/* Strategic Consulting & Workshops */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-24">
            <div className="order-2 lg:order-1 aspect-[4/3] bg-secondary relative">
              {/* Placeholder for image - replace with actual image when available */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-playfair text-4xl text-gray-300">Consulting</span>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-sm font-medium uppercase tracking-wider mb-2">02</p>
              <h2 className="heading-md mb-6">Strategic Consulting & Workshops</h2>
              <p className="body-md mb-6">
                Comprehensive strategic consulting services and interactive workshops designed to align teams, clarify vision, and create actionable roadmaps for organizational success.
              </p>
              <h3 className="text-lg font-semibold mb-4">This Service Includes:</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="mr-3 mt-1">—</span>
                  <span>In-depth organizational assessment and strategic gap analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1">—</span>
                  <span>Custom workshop design tailored to your team's specific needs</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1">—</span>
                  <span>Facilitated strategic planning and roadmap development</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1">—</span>
                  <span>Implementation frameworks and execution accountability</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1">—</span>
                  <span>Progress monitoring and strategic adjustment guidance</span>
                </li>
              </ul>
              <Link to="/contact" className="btn-outline inline-flex items-center">
                <span>Learn More</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Keynote Speaking & Thought Leadership */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-sm font-medium uppercase tracking-wider mb-2">03</p>
              <h2 className="heading-md mb-6">Keynote Speaking & Thought Leadership</h2>
              <p className="body-md mb-6">
                Engaging and impactful keynote presentations on productivity, leadership, strategic execution, and high-performance habits for conferences, corporate events, and executive retreats.
              </p>
              <h3 className="text-lg font-semibold mb-4">This Service Includes:</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="mr-3 mt-1">—</span>
                  <span>Customized keynote addresses tailored to your audience and event goals</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1">—</span>
                  <span>Interactive sessions with practical takeaways and actionable strategies</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1">—</span>
                  <span>Virtual or in-person speaking engagements worldwide</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1">—</span>
                  <span>Post-event resources for continued learning and implementation</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1">—</span>
                  <span>Workshop add-ons for deeper audience engagement</span>
                </li>
              </ul>
              <Link to="/contact" className="btn-outline inline-flex items-center">
                <span>Learn More</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="aspect-[4/3] bg-secondary relative">
              {/* Placeholder for image - replace with actual image when available */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-playfair text-4xl text-gray-300">Speaking</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-black text-white">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-6">Ready to Elevate Your Performance?</h2>
          <p className="body-lg max-w-2xl mx-auto mb-8">
            Let's discuss how my services can be tailored to meet your specific needs and help you achieve extraordinary results.
          </p>
          <Link to="/contact" className="btn-primary bg-white text-black border-white hover:bg-white/90">
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
