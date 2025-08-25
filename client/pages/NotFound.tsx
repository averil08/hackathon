import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-ginhaw-blue-50">
      <Header />
      
      <div className="py-16 px-6">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl p-16 text-center">
          <h1 className="text-6xl font-semibold text-ginhaw-blue-500 mb-8">
            404
          </h1>
          <h2 className="text-3xl font-semibold text-ginhaw-navy-800 mb-6">
            Page Not Found
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Sorry, the page you're looking for doesn't exist. This might be a placeholder page 
            that hasn't been implemented yet.
          </p>
          <p className="text-lg text-gray-500 mb-8">
            Continue prompting to help us fill in this page content!
          </p>
          <Link 
            to="/" 
            className="inline-flex items-center justify-center px-8 py-4 bg-ginhaw-blue-500 text-white rounded-xl hover:bg-ginhaw-blue-600 transition-colors text-xl font-semibold"
          >
            Go Home
          </Link>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
