import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-ginhaw-blue-50">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl font-semibold mb-8 tracking-wide">
            <span className="text-ginhaw-blue-500">Ginhaw.AI </span>
            <span className="text-ginhaw-navy-800">Your Guide To<br />Right Healthcare</span>
          </h1>
          <p className="text-2xl text-ginhaw-navy-800 mb-8 max-w-4xl mx-auto tracking-wide">
            We help communities access the right care faster, empower providers to serve better, and enable partners to scale meaningful impact.
          </p>
          <Link 
            to="/self-check" 
            className="inline-flex items-center justify-center px-12 py-6 bg-ginhaw-blue-500 text-white rounded-xl hover:bg-ginhaw-blue-600 transition-colors text-2xl font-semibold tracking-wide"
          >
            Self-Check
          </Link>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Check Symptoms Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg shadow-ginhaw-blue-500/30 flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-teal-50 rounded-full flex items-center justify-center mb-6 shadow-inner">
                <div className="w-12 h-16 bg-gray-400 rounded"></div>
              </div>
              <h3 className="text-2xl font-semibold text-ginhaw-navy-900 mb-4 tracking-wide uppercase">
                Check symptoms
              </h3>
              <p className="text-xl text-black tracking-tight leading-normal">
                Assess your symptoms<br />by answering triage questions
              </p>
            </div>

            {/* Registration Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg shadow-ginhaw-blue-500/30 flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-teal-50 rounded-full flex items-center justify-center mb-6 shadow-inner">
                <div className="w-12 h-16 bg-gray-400 rounded"></div>
              </div>
              <h3 className="text-2xl font-semibold text-ginhaw-navy-900 mb-4 tracking-wide uppercase">
                registration
              </h3>
              <p className="text-xl text-black tracking-tight leading-normal">
                Register your Hospital or Clinic
              </p>
              <p className="text-sm text-black mt-4 font-light">
                *FOR HEALTHCARE PROVIDERS ONLY
              </p>
            </div>

            {/* Healthcare Locations Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg shadow-ginhaw-blue-500/30 flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-teal-50 rounded-full flex items-center justify-center mb-6 shadow-inner">
                <div className="w-12 h-16 bg-gray-400 rounded"></div>
              </div>
              <h3 className="text-2xl font-semibold text-ginhaw-navy-900 mb-4 tracking-wide uppercase">
                Healthcare Locations
              </h3>
              <p className="text-xl text-black tracking-tight leading-normal">
                Lists of Hospitals & Clinics<br />in Baguio City
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Description Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto bg-ginhaw-navy-900/93 rounded-3xl p-16 text-center">
          <p className="text-3xl text-white font-normal leading-normal">
            Ginhaw.AI is here to help! Our friendly artificial intelligence can assess your symptoms and recommend the best facilities for your needs.
          </p>
        </div>
      </section>

      {/* How to use Self-Check Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-medium text-ginhaw-navy-800 text-center mb-16">
            How to use Self-Check
          </h2>
          <div className="w-full max-w-6xl mx-auto">
            <div className="bg-gray-100 rounded-lg p-8 h-96 flex items-center justify-center">
              <span className="text-gray-500 text-lg">Step-by-step instructions image placeholder</span>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="flex justify-center py-8">
        <div className="w-40 h-6 bg-ginhaw-navy-900 rounded-full"></div>
      </div>

      {/* Registration Info Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto flex items-center gap-16">
          <div className="w-40 h-60 bg-gray-400 rounded-xl flex-shrink-0"></div>
          <div className="flex-1">
            <h2 className="text-4xl font-medium text-ginhaw-navy-800 mb-8 text-right">
              Registration is for Healthcare Providers
            </h2>
            <p className="text-2xl text-black leading-normal">
              Only registered hospitals, clinics, and health centers will appear on this website, each managing their own dashboard.
            </p>
            <br />
            <p className="text-2xl text-black leading-normal">
              Ginhaw.AI will recommend these registered facilities to patients or customers based on their specific service needs.
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="flex justify-center py-8">
        <div className="w-40 h-6 bg-ginhaw-navy-900 rounded-full"></div>
      </div>

      {/* Patient Recommendations Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto flex items-center gap-16">
          <div className="flex-1">
            <h2 className="text-4xl font-medium text-ginhaw-navy-800 mb-8">
              Patients will receive healthcare location recommendations based on their Self-Check results.
            </h2>
            <p className="text-2xl text-black leading-normal">
              Includes the facility names, addresses, and contact numbers.
            </p>
          </div>
          <div className="w-40 h-60 bg-gray-400 rounded-xl flex-shrink-0"></div>
        </div>
      </section>

      {/* Blue Info Section */}
      <section className="py-20 bg-ginhaw-blue-500/80">
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 w-44 h-44 bg-gray-400 rounded-lg shadow-lg"></div>
          <div className="text-center pt-24">
            <p className="text-2xl text-white font-semibold leading-normal max-w-5xl mx-auto">
              Ginhaw.AI is your smart companion for health triage and local health facilities access in Baguio City. Whether your feeling unwell or simply unsure where to go, our AI-powered triage tool guides you to the right level of care: Self-care, Non-urgent, or Urgent.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl p-16 shadow-lg shadow-ginhaw-blue-500/50 text-center">
            <h2 className="text-4xl font-semibold text-ginhaw-navy-800 leading-normal">
              Start your health check with Ginhaw.AI<br />
              Get quick guidance and explore nearby healthcare facilities.
            </h2>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
