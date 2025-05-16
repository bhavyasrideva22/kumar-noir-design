
import React from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const articles = [
  {
    id: 1,
    title: "The Discipline Paradox: Why Structure Creates Freedom",
    excerpt: "Exploring how strategic constraints and disciplined routines can paradoxically lead to greater creative freedom and productivity.",
    date: "May 10, 2025",
    slug: "discipline-paradox"
  },
  {
    id: 2,
    title: "Strategic Patience: The Missing Element in Modern Leadership",
    excerpt: "In an age of instant results, developing strategic patience can become your greatest competitive advantage.",
    date: "April 22, 2025",
    slug: "strategic-patience"
  },
  {
    id: 3,
    title: "Decision Velocity: Making Better Choices, Faster",
    excerpt: "How high-performing leaders balance speed and quality in decision-making to create sustainable competitive advantage.",
    date: "March 15, 2025",
    slug: "decision-velocity"
  },
  {
    id: 4,
    title: "The Execution Gap: Why Great Ideas Often Fail",
    excerpt: "Identifying and addressing the common breakdowns between strategic planning and effective implementation.",
    date: "February 28, 2025",
    slug: "execution-gap"
  },
  {
    id: 5,
    title: "Minimum Effective Dose: The Science of Doing Just Enough",
    excerpt: "How focusing on the smallest intervention that produces the desired outcome can dramatically increase your productivity and impact.",
    date: "January 17, 2025",
    slug: "minimum-effective-dose"
  },
  {
    id: 6,
    title: "Attention Capital: The Currency of High Performance",
    excerpt: "Understanding and optimizing your attention as your most valuable resource in an increasingly distracted world.",
    date: "December 9, 2024",
    slug: "attention-capital"
  }
];

const Insights = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-lg mb-6">Insights</h1>
            <p className="body-lg mb-10 max-w-2xl mx-auto">
              Thoughts on leadership, productivity, strategy, and high-performance habits from my experience working with exceptional individuals and organizations.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-12 bg-secondary">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm uppercase tracking-wider mb-2">Featured Article</p>
              <h2 className="heading-md mb-4">The Discipline Paradox: Why Structure Creates Freedom</h2>
              <p className="text-sm text-gray-500 mb-4">{articles[0].date}</p>
              <p className="body-md mb-6">
                Counter to popular belief, the path to creative freedom and peak productivity isn't through unbounded flexibility, but through strategic constraints and disciplined routines. This article explores the paradoxical relationship between structure and freedom in high-performance environments.
              </p>
              <Link to={`/insights/${articles[0].slug}`} className="btn-outline">
                Read Full Article
              </Link>
            </div>
            <div className="aspect-[4/3] bg-white border border-gray-200 relative">
              {/* Placeholder for image - replace with actual image when available */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-playfair text-4xl text-gray-300">Featured</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles List */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="sr-only">All Articles</h2>
          <div className="max-w-3xl mx-auto space-y-16">
            {articles.map((article) => (
              <article key={article.id} className="border-t border-gray-200 pt-8">
                <p className="text-sm text-gray-500 mb-2">{article.date}</p>
                <h3 className="heading-md mb-4">{article.title}</h3>
                <p className="body-md mb-4">
                  {article.excerpt}
                </p>
                <Link to={`/insights/${article.slug}`} className="link-hover">
                  Read Article
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-black text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-md mb-4">Subscribe to the Newsletter</h2>
            <p className="body-md mb-8 max-w-xl mx-auto">
              Get monthly insights on leadership, productivity, and strategic execution delivered directly to your inbox.
            </p>
            <form className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-grow px-4 py-3 bg-transparent border border-white/40 focus:outline-none focus:border-white" 
                  required
                />
                <button type="submit" className="btn-primary bg-white text-black border-white hover:bg-white/90">
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-gray-400 mt-4">
                I respect your privacy. Unsubscribe at any time.
              </p>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Insights;
