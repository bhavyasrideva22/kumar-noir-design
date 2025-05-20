
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Award, TrendingUp, Users, Rocket, BookOpen } from "lucide-react";
import Layout from "@/components/Layout";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center pt-24 pb-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="heading-xl mb-6">Yadlapalli Krishna Kumar</h1>
              <p className="text-xl md:text-2xl font-light mb-8 max-w-xl">
                Strategic Execution for High Performers.
              </p>
              <p className="body-lg mb-10 max-w-xl">
                Acclaimed entrepreneur, angel investor, and thought leader whose insights and transformative philosophies have impacted millions worldwide through business acumen, spiritual wisdom, and Agile expertise.
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
                  <span className="font-playfair text-4xl text-gray-300">YK</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Achievements */}
      <section className="py-20 bg-secondary">
        <div className="container-custom">
          <h2 className="heading-lg text-center mb-16">Impact & Recognition</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 border-t border-black">
              <div className="flex items-center mb-3">
                <Award className="h-5 w-5 mr-2" />
                <h3 className="heading-sm">Acclaimed Entrepreneur</h3>
              </div>
              <p className="body-md mb-6">
                Co-founded successful ventures and established a proven track record in the tech industry through innovative business models.
              </p>
            </div>
            <div className="p-6 border-t border-black">
              <div className="flex items-center mb-3">
                <Rocket className="h-5 w-5 mr-2" />
                <h3 className="heading-sm">Angel Investor</h3>
              </div>
              <p className="body-md mb-6">
                Strategically investing in promising startups with a focus on sustainable growth and transformative technologies.
              </p>
            </div>
            <div className="p-6 border-t border-black">
              <div className="flex items-center mb-3">
                <TrendingUp className="h-5 w-5 mr-2" />
                <h3 className="heading-sm">Agile Expert</h3>
              </div>
              <p className="body-md mb-6">
                Deep understanding of the Agile ecosystem, helping organizations implement frameworks that drive innovation and efficiency.
              </p>
            </div>
            <div className="p-6 border-t border-black">
              <div className="flex items-center mb-3">
                <Users className="h-5 w-5 mr-2" />
                <h3 className="heading-sm">Thought Leader</h3>
              </div>
              <p className="body-md mb-6">
                Inspiring millions worldwide through teachings on happiness, wealth creation, and personal growth strategies.
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
              <h3 className="heading-md mb-4">Blending Business Acumen with Spiritual Wisdom</h3>
              <p className="body-md mb-4">
                How combining practical business strategies with deeper spiritual insights creates a holistic approach to leadership and success in today's complex marketplace.
              </p>
              <Link to="/insights/business-spiritual-wisdom" className="link-hover">
                Read Article
              </Link>
            </article>
            <article className="border-t border-gray-200 pt-8">
              <p className="text-sm text-gray-500 mb-2">April 22, 2025</p>
              <h3 className="heading-md mb-4">The Three Pillars of Sustainable Wealth Creation</h3>
              <p className="body-md mb-4">
                Exploring the interconnected foundations of financial intelligence, value generation, and ethical business practices that lead to lasting prosperity.
              </p>
              <Link to="/insights/sustainable-wealth-creation" className="link-hover">
                Read Article
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-black text-white">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-6">Ready to Transform Your Approach?</h2>
          <p className="body-lg max-w-2xl mx-auto mb-8">
            Join the millions who have experienced breakthrough results through Krishna's unique blend of business expertise, spiritual wisdom, and performance strategies.
          </p>
          <Link to="/contact" className="btn-primary bg-white text-black border-white hover:bg-white/90">
            Connect with YK
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
