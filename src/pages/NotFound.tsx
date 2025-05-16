
import React from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const NotFound = () => {
  return (
    <Layout>
      <div className="min-h-screen pt-32 flex items-center justify-center">
        <div className="text-center">
          <h1 className="heading-xl mb-6">404</h1>
          <p className="body-lg mb-8">The page you are looking for does not exist.</p>
          <Link to="/" className="btn-primary">
            Return Home
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
