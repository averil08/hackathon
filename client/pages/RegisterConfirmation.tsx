import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function RegisterConfirmation() {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Separate useEffect for navigation when countdown reaches 0
  useEffect(() => {
    if (countdown === 0) {
      navigate("/");
    }
  }, [countdown, navigate]);
  return (
    <div className="min-h-screen bg-ginhaw-blue-50 relative overflow-hidden">
      <Header />
      
      {/* Background blur effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-12 w-96 h-80 bg-blue-200 rounded-full blur-lg opacity-50"></div>
        <div className="absolute bottom-32 left-0 w-80 h-52 bg-purple-200 rounded-full blur-lg opacity-40"></div>
      </div>

      {/* Blurred background content */}
      <div className="absolute inset-0 blur-lg pointer-events-none">
        {/* Hero Section (Blurred) */}
        <div className="py-16 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-6xl font-semibold mb-8 tracking-wide">
              <span className="text-ginhaw-navy-800">Ginhaw.AI: </span>
              <span className="text-ginhaw-blue-500">Gabay sa Tamang Kalusugan</span>
            </h1>
            <p className="text-2xl text-black tracking-wide mb-8">
              Alamin kung anong serbisyo ang pwede sa iyo.
            </p>
            <div className="inline-flex items-center justify-center px-12 py-6 bg-ginhaw-blue-500 text-white rounded-xl text-2xl font-semibold tracking-wide">
              Self-Check
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gray-400/40"></div>

      {/* Confirmation Modal */}
      <div className="relative z-10 flex items-center justify-center min-h-screen py-16">
        <div className="bg-white rounded-3xl p-16 max-w-4xl mx-6 text-center shadow-2xl">
          {/* Logo */}
          <div className="mb-8">
            <div className="w-44 h-48 bg-gray-300 rounded-lg mx-auto flex items-center justify-center">
              <span className="text-gray-600 text-lg">Ginhaw.AI Logo</span>
            </div>
          </div>

          {/* Success Message */}
          <h1 className="text-4xl font-semibold text-ginhaw-navy-800 mb-8">
            Thank you for using Ginhaw.AI
          </h1>

          <p className="text-2xl text-gray-600/80 leading-relaxed max-w-2xl mx-auto mb-8">
            Our team will review your information and notify you once your listing is active on Ginhawa.AI.
          </p>

          {/* Countdown and redirect message */}
          <div className="mt-8 p-4 bg-ginhaw-blue-50 rounded-xl">
            <p className="text-lg text-ginhaw-blue-600 font-medium">
              Redirecting to homepage in {countdown} seconds...
            </p>
            <button
              onClick={() => navigate("/")}
              className="mt-3 text-ginhaw-blue-500 hover:text-ginhaw-blue-600 underline font-medium"
            >
              Go to homepage now
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
