import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Search } from "lucide-react";

export default function SelfCheck() {
  const [formData, setFormData] = useState({
    name: "",
    sex: "",
    age: "",
    symptoms: "",
    medicalHistory: [] as string[]
  });

  const medicalHistoryOptions = [
    "Previous Surgeries (Eg. Appendectomy, Hysterectomy)",
    "Current Or Past Conditions (Eg. Diabetes, High Blood Pressure)",
    "Lifestyle Factors (Eg. Smoking, Alcohol Use)",
    "Reproductive History (Eg. Birth Control, Pregnancy)",
    "Current Medications",
    "Family History (Eg. Cancer, Heart Problems)",
    "Skip",
    "None Of The Above"
  ];

  const handleMedicalHistoryChange = (option: string) => {
    setFormData(prev => ({
      ...prev,
      medicalHistory: prev.medicalHistory.includes(option)
        ? prev.medicalHistory.filter(item => item !== option)
        : [...prev.medicalHistory, option]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Navigate to results page based on form data
    // For demo, let's go to a result page
    window.location.href = "/self-check/results";
  };

  return (
    <div className="min-h-screen bg-ginhaw-blue-50">
      <Header />
      
      {/* Warning Section */}
      <section className="py-8 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-ginhaw-navy-900 rounded-2xl p-8 text-center">
            <p className="text-white text-xl font-semibold tracking-wide leading-normal">
              This tool is not a replacement for medical advice, diagnosis, or treatment.<br />
              If you have a life-threatening emergency, call 911 or your local emergency number.
            </p>
          </div>
        </div>
      </section>

      {/* Title Section */}
      <section className="py-8 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-semibold mb-4 tracking-wide">
            <span className="text-ginhaw-navy-800">Ginhaw.AI:</span>
          </h1>
          <h2 className="text-5xl font-semibold text-ginhaw-blue-500 mb-8">
            Self-Check
          </h2>
          <p className="text-lg text-black tracking-wide max-w-6xl">
            Answer a few quick questions and our AI will give you a preliminary assessment based on your symptoms and health history.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl p-12">
          <form onSubmit={handleSubmit} className="space-y-16">
            {/* Name Field */}
            <div className="space-y-6">
              <label className="text-xl font-bold text-black tracking-wide">
                Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                placeholder="Name"
                className="w-full p-4 text-base font-normal border-2 border-gray-400 rounded-xl focus:border-ginhaw-blue-500 focus:outline-none placeholder-gray-400"
                required
              />
            </div>

            {/* Sex Assignment */}
            <div className="space-y-6">
              <label className="text-xl font-bold text-black tracking-wide">
                What was your sex assigned at birth?
              </label>
              <div className="space-y-6">
                {["Female", "Male"].map((option) => (
                  <div key={option} className="bg-gray-200 rounded-xl p-4">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="sex"
                        value={option}
                        checked={formData.sex === option}
                        onChange={(e) => setFormData(prev => ({ ...prev, sex: e.target.value }))}
                        className="w-5 h-5 border-2 border-gray-500"
                        required
                      />
                      <span className="text-base font-semibold text-ginhaw-navy-800 text-center flex-1">
                        {option}
                      </span>
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Age Field */}
            <div className="space-y-6">
              <label className="text-xl font-bold text-black tracking-wide">
                How old are you?
              </label>
              <input
                type="number"
                value={formData.age}
                onChange={(e) => setFormData(prev => ({ ...prev, age: e.target.value }))}
                placeholder="Age"
                className="w-full p-4 text-base font-normal border-2 border-gray-400 rounded-xl focus:border-ginhaw-blue-500 focus:outline-none placeholder-gray-400"
                required
              />
            </div>

            {/* Symptoms Field */}
            <div className="space-y-6">
              <label className="text-xl font-bold text-black tracking-wide">
                What symptom is bothering you?
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={formData.symptoms}
                  onChange={(e) => setFormData(prev => ({ ...prev, symptoms: e.target.value }))}
                  placeholder="Find Symptoms..."
                  className="w-full p-4 pr-12 text-base font-normal border-2 border-gray-400 rounded-xl focus:border-ginhaw-blue-500 focus:outline-none placeholder-gray-400"
                  required
                />
                <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-black" />
              </div>
            </div>

            {/* Medical History */}
            <div className="space-y-6">
              <label className="text-xl font-bold text-black tracking-wide">
                Any other details we should know?
              </label>
              <div className="space-y-4">
                {medicalHistoryOptions.map((option) => (
                  <div key={option} className="bg-gray-200 rounded-xl p-4">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.medicalHistory.includes(option)}
                        onChange={() => handleMedicalHistoryChange(option)}
                        className="w-5 h-5 border-2 border-gray-500 rounded"
                      />
                      <span className="text-base font-medium text-ginhaw-navy-800 text-center flex-1">
                        {option}
                      </span>
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center pt-8">
              <button
                type="submit"
                className="px-8 py-3 bg-ginhaw-blue-500 text-white rounded-lg hover:bg-ginhaw-blue-600 transition-colors text-lg font-semibold"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}
