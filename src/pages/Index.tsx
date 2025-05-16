
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center pt-24 pb-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="heading-xl mb-6">Krishna Kumar</h1>
              <p className="text-xl md:text-2xl font-light mb-8 max-w-xl">
                Strategic Execution for High Performers.
              </p>
              <p className="body-lg mb-10 max-w-xl">
                Leadership coach, product strategist, and entrepreneur helping high-performance individuals and teams achieve clarity, direction, and measurable results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/services" className="btn-primary">
                  <span>Explore Services</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link to="/about" className="btn-outline">
                  About Me
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="aspect-[3/4] bg-secondary relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Placeholder for image - replace with actual image when available */}
                  <span className="font-playfair text-4xl text-gray-300">K</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Areas of Expertise */}
      <section className="py-20 bg-secondary">
        <div className="container-custom">
          <h2 className="heading-lg text-center mb-16">Areas of Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 border-t border-black">
              <h3 className="heading-sm mb-4">Product Leadership</h3>
              <p className="body-md mb-6">
                7+ years guiding product teams to achieve market-leading results through strategic planning and execution.
              </p>
            </div>
            <div className="p-6 border-t border-black">
              <h3 className="heading-sm mb-4">Performance Coaching</h3>
              <p className="body-md mb-6">
                Unlocking individual potential through personalized coaching focused on productivity and high-performance habits.
              </p>
            </div>
            <div className="p-6 border-t border-black">
              <h3 className="heading-sm mb-4">Strategic Execution</h3>
              <p className="body-md mb-6">
                Translating vision into actionable strategies that deliver measurable results and sustainable growth.
              </p>
            </div>
            <div className="p-6 border-t border-black">
              <h3 className="heading-sm mb-4">Athletic Discipline</h3>
              <p className="body-md mb-6">
                Applying lessons from state-level competitive athletics to develop disciplined approaches to business challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Insights */}
      <section className="py-20">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
            <h2 className="heading-lg">Featured Insights</h2>
            <Link to="/insights" className="link-hover mt-4 md:mt-0 inline-flex items-center">
              View All Articles
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <div className="space-y-12">
            <article className="border-t border-gray-200 pt-8">
              <p className="text-sm text-gray-500 mb-2">May 10, 2025</p>
              <h3 className="heading-md mb-4">The Discipline Paradox: Why Structure Creates Freedom</h3>
              <p className="body-md mb-4">
                Exploring how strategic constraints and disciplined routines can paradoxically lead to greater creative freedom and productivity.
              </p>
              <Link to="/insights/discipline-paradox" className="link-hover">
                Read Article
              </Link>
            </article>
            <article className="border-t border-gray-200 pt-8">
              <p className="text-sm text-gray-500 mb-2">April 22, 2025</p>
              <h3 className="heading-md mb-4">Strategic Patience: The Missing Element in Modern Leadership</h3>
              <p className="body-md mb-4">
                In an age of instant results, developing strategic patience can become your greatest competitive advantage.
              </p>
              <Link to="/insights/strategic-patience" className="link-hover">
                Read Article
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-black text-white">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-6">Ready to Elevate Your Performance?</h2>
          <p className="body-lg max-w-2xl mx-auto mb-8">
            Let's work together to unlock your potential and achieve extraordinary results through clarity, direction, and strategic execution.
          </p>
          <Link to="/contact" className="btn-primary bg-white text-black border-white hover:bg-white/90">
            Get in Touch
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
