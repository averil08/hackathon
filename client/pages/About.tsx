import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function About() {
  return (
    <div className="min-h-screen bg-ginhaw-blue-50">
      <Header />
      
      <div className="py-16 px-6">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl p-16">
          <h1 className="text-5xl font-semibold text-ginhaw-blue-500 mb-8 text-center">
            About Ginhaw.AI
          </h1>
          
          <div className="space-y-8 text-xl text-gray-700 leading-relaxed">
            <p>
              Ginhaw.AI is your smart companion for health triage and local health facilities access in Baguio City. 
              Whether you're feeling unwell or simply unsure where to go, our AI-powered triage tool guides you to 
              the right level of care: Self-care, Non-urgent, or Urgent.
            </p>
            
            <p>
              We help communities access the right care faster, empower providers to serve better, and enable 
              partners to scale meaningful impact.
            </p>
            
            <div className="bg-ginhaw-blue-50 p-8 rounded-xl">
              <h2 className="text-2xl font-semibold text-ginhaw-navy-800 mb-4">Our Mission</h2>
              <p>
                To bridge the gap between patients and healthcare providers by offering intelligent health guidance 
                and connecting people with appropriate medical facilities in their area.
              </p>
            </div>
            
            <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-500">
              <p className="text-red-800 font-medium">
                <strong>Important:</strong> Ginhaw.AI does not provide medical diagnosis or treatment. The information 
                and recommendations on this site are for guidance and educational purposes only and are not a substitute 
                for professional healthcare advice.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
