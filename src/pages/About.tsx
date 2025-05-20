
import React from "react";
import { Link } from "react-router-dom";
import { Award, Rocket, BookOpen, TrendingUp } from "lucide-react";
import Layout from "@/components/Layout";

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-lg mb-6">About Yadlapalli Krishna Kumar</h1>
            <p className="body-lg mb-10 max-w-2xl mx-auto">
              An acclaimed entrepreneur, angel investor, and thought leader whose unique ability to blend business acumen with spiritual insights and Agile expertise has impacted millions worldwide.
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
                <Award className="h-16 w-16 text-gray-300" />
              </div>
            </div>
            <div>
              <h2 className="heading-md mb-4">The Entrepreneur</h2>
              <p className="body-md mb-4">
                With a track record of co-founding successful ventures in the tech industry, YK has established himself as a visionary entrepreneur with a keen eye for innovation and sustainable business models.
              </p>
              <p className="body-md mb-4">
                His approach to entrepreneurship combines strategic foresight with practical execution, allowing him to navigate complex business landscapes and identify opportunities that others might miss.
              </p>
              <p className="body-md">
                As an angel investor, he strategically supports promising startups that align with his vision of creating meaningful impact while delivering exceptional value to stakeholders and society.
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
              <h2 className="heading-md mb-4">The Thought Leader</h2>
              <p className="body-md mb-4">
                YK's teachings on happiness, wealth creation, and personal growth have struck a chord with millions worldwide, transcending cultural and geographical boundaries.
              </p>
              <p className="body-md mb-4">
                Through his unique ability to distill complex concepts into actionable wisdom, he helps individuals from all walks of life achieve breakthrough results in both their personal and professional endeavors.
              </p>
              <p className="body-md">
                His philosophy centers on the belief that true success comes from aligning one's actions with deeper values, creating harmony between material achievement and spiritual fulfillment.
              </p>
            </div>
            <div className="order-1 lg:order-2 aspect-[4/3] bg-white border border-gray-200 relative">
              {/* Placeholder for image - replace with actual image when available */}
              <div className="absolute inset-0 flex items-center justify-center">
                <BookOpen className="h-16 w-16 text-gray-300" />
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
                <TrendingUp className="h-16 w-16 text-gray-300" />
              </div>
            </div>
            <div>
              <h2 className="heading-md mb-4">The Agile Expert</h2>
              <p className="body-md mb-4">
                With a deep understanding of the Agile ecosystem, YK has helped numerous organizations transform their approach to product development, team dynamics, and innovation cycles.
              </p>
              <p className="body-md mb-4">
                His expertise in implementing Agile frameworks is grounded in practical experience, having applied these methodologies in diverse business environments with measurable results.
              </p>
              <p className="body-md">
                Beyond the technical aspects, he emphasizes the cultural and mindset shifts required for true agility, helping teams embrace change as an opportunity rather than a challenge.
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
              <h2 className="heading-md mb-4">The Business Strategist</h2>
              <p className="body-md mb-4">
                YK's business acumen is characterized by his ability to identify market opportunities, optimize operational efficiency, and build scalable systems that drive sustainable growth.
              </p>
              <p className="body-md mb-4">
                Through strategic consulting and hands-on leadership, he has helped businesses across various industries transform their challenges into competitive advantages.
              </p>
              <p className="body-md">
                His approach integrates cutting-edge business methodologies with timeless principles of value creation, resulting in strategies that are both innovative and enduring.
              </p>
            </div>
            <div className="order-1 lg:order-2 aspect-[4/3] bg-white border border-gray-200 relative">
              {/* Placeholder for image - replace with actual image when available */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Rocket className="h-16 w-16 text-gray-300" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-black text-white">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-6">Join the Movement</h2>
          <p className="body-lg max-w-2xl mx-auto mb-8">
            Connect with YK and become part of a global community dedicated to achieving excellence in business, personal growth, and meaningful impact.
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
