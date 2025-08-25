import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function Register() {
  const [formData, setFormData] = useState({
    facilityName: "",
    email: "",
    contactNumber: "",
    workplaceType: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle registration submission
    alert("Registration submitted! Our team will review your information and notify you once your listing is active on Ginhawa.AI.");
  };

  return (
    <div className="min-h-screen bg-ginhaw-blue-50">
      <Header />
      
      <div className="flex min-h-[80vh]">
        {/* Left Panel - Registration Info */}
        <div className="w-1/2 bg-ginhaw-navy-900 p-16 flex flex-col justify-center">
          <div className="max-w-md mx-auto text-center space-y-12">
            {/* Logo */}
            <div className="mb-16">
              <span className="text-white text-4xl font-semibold">Ginhaw.AI</span>
            </div>

            {/* Illustration Placeholder */}
            <div className="w-72 h-80 bg-gray-300 rounded-lg mx-auto mb-8 flex items-center justify-center">
              <span className="text-gray-600">Registration Illustration</span>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <h2 className="text-white text-4xl font-semibold">Early Registration</h2>
              <p className="text-white text-2xl font-light leading-relaxed">
                Your facility will appear on Ginhawa.AI when a patient is advised to seek a consultation or visit a hospital.
              </p>
            </div>
          </div>
        </div>

        {/* Right Panel - Registration Form */}
        <div className="w-1/2 bg-white p-16 flex items-center justify-center">
          <div className="w-full max-w-md space-y-12">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Facility Name */}
              <div className="space-y-3">
                <label className="block text-xl font-semibold text-gray-600">
                  Name of Hospital / Clinic / Health Center
                </label>
                <input
                  type="text"
                  value={formData.facilityName}
                  onChange={(e) => setFormData(prev => ({ ...prev, facilityName: e.target.value }))}
                  className="w-full p-4 border-2 border-gray-300 rounded-3xl focus:border-ginhaw-blue-500 focus:outline-none text-lg"
                  required
                />
              </div>

              {/* Email */}
              <div className="space-y-3">
                <label className="block text-xl font-semibold text-gray-600">
                  Email Address
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full p-4 border-2 border-gray-300 rounded-3xl focus:border-ginhaw-blue-500 focus:outline-none text-lg"
                  required
                />
              </div>

              {/* Contact Number */}
              <div className="space-y-3">
                <label className="block text-xl font-semibold text-gray-600">
                  Workplace Contact Number
                </label>
                <input
                  type="tel"
                  value={formData.contactNumber}
                  onChange={(e) => setFormData(prev => ({ ...prev, contactNumber: e.target.value }))}
                  className="w-full p-4 border-2 border-gray-300 rounded-3xl focus:border-ginhaw-blue-500 focus:outline-none text-lg"
                  required
                />
              </div>

              {/* Workplace Type */}
              <div className="space-y-4">
                <label className="block text-xl font-semibold text-gray-600">
                  Workplace Type:
                </label>
                <div className="flex gap-8">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="workplaceType"
                      value="Government"
                      checked={formData.workplaceType === "Government"}
                      onChange={(e) => setFormData(prev => ({ ...prev, workplaceType: e.target.value }))}
                      className="w-8 h-8 border-3 border-gray-500"
                      required
                    />
                    <span className="text-xl text-gray-600">Government</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="workplaceType"
                      value="Private"
                      checked={formData.workplaceType === "Private"}
                      onChange={(e) => setFormData(prev => ({ ...prev, workplaceType: e.target.value }))}
                      className="w-8 h-8 border-3 border-gray-500"
                      required
                    />
                    <span className="text-xl text-gray-600">Private</span>
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-8">
                <button
                  type="submit"
                  className="w-full bg-ginhaw-blue-500 text-white py-4 px-8 rounded-xl text-xl font-semibold tracking-wide hover:bg-ginhaw-blue-600 transition-colors"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
