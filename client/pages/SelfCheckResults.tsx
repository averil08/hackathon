import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Check, Download, ChevronDown } from "lucide-react";

interface PriceInfo {
  service: string;
  price: string;
  isFree?: boolean;
  isPhilHealthCovered?: boolean;
  isUnavailable?: boolean;
}

interface HealthcareProvider {
  name: string;
  type: string;
  address: string;
  contact: string[];
  available: boolean;
  waitTime?: string;
  queueCount?: string;
  insurance?: string[];
  pricing?: PriceInfo[];
}

export default function SelfCheckResults() {
  // For demo purposes, showing "Non-Urgent Care" results
  const [resultType] = useState<"self-care" | "non-urgent" | "urgent">("non-urgent");
  
  const providers: HealthcareProvider[] = [
    {
      name: "CORDILLERA KIDNEY SPECIALISTS, INC.",
      type: "Dialysis Clinic",
      address: "#16 KISAD ROAD",
      contact: ["09264377485", "074-4243484"],
      available: true,
      waitTime: "25 mins wait time",
      queueCount: "12 people in queue",
      insurance: ["Maxicare"],
      pricing: [
        { service: "General Consultation", price: "₱400 – ₱600" },
        { service: "Kidney Function Test", price: "₱800 – ₱1,200" },
        { service: "Dialysis Session", price: "₱2,500 – ₱3,000" },
        { service: "Blood Test", price: "Free", isFree: true, isPhilHealthCovered: true },
        { service: "Ultrasound", price: "₱1,000 – ₱1,500" }
      ]
    },
    {
      name: "DOH Baguio General Hospital and Medical Center",
      type: "Government Hospital - Tertiary-care hospital",
      address: "Gov. Pack Rd",
      contact: ["INFORMATION DESK (442-3765)", "EMERGENCY (442-5241)"],
      available: false,
      waitTime: "39 mins wait time",
      queueCount: "45 people in queue",
      insurance: ["PhilHealth"],
      pricing: [
        { service: "General Consultation", price: "Free", isFree: true, isPhilHealthCovered: true },
        { service: "X-ray", price: "Free", isFree: true, isPhilHealthCovered: true },
        { service: "Blood Test", price: "Free", isFree: true, isPhilHealthCovered: true },
        { service: "Emergency Care", price: "Free", isFree: true, isPhilHealthCovered: true },
        { service: "Surgery Consultation", price: "Free", isFree: true, isPhilHealthCovered: true }
      ]
    },
    {
      name: "Notre Dame De Chartres Hospital",
      type: "Private Hospital - Tertiary-care hospital",
      address: "#25, Main Building, Gen Luna Road",
      contact: ["INFORMATION DESK (442-3765)"],
      available: true,
      queueCount: "25 people in queue",
      insurance: ["PhilHealth"],
      pricing: [
        { service: "General Consultation", price: "₱300 – ₱500" },
        { service: "X-ray", price: "₱500 – ₱800" },
        { service: "Blood Test", price: "Free", isFree: true, isPhilHealthCovered: true },
        { service: "CT Scan", price: "₱3,000 – ₱5,000" },
        { service: "Emergency Care", price: "₱800 – ₱1,200" }
      ]
    },
    {
      name: "Pines City Doctors' Hospital",
      type: "Private Hospital - Tertiary-care hospital",
      address: "#16 KISAD ROAD",
      contact: ["To be announced"],
      available: false,
      pricing: [
        { service: "General Consultation", price: "Check with clinic", isUnavailable: true },
        { service: "X-ray", price: "Check with clinic", isUnavailable: true },
        { service: "Blood Test", price: "Check with clinic", isUnavailable: true },
        { service: "Emergency Care", price: "Check with clinic", isUnavailable: true }
      ]
    },
    {
      name: "Doctor Anywhere",
      type: "24/7 Online Consultations",
      address: "",
      contact: [],
      available: true,
      pricing: [
        { service: "General Consultation", price: "₱250 – ₱400" },
        { service: "Specialist Consultation", price: "₱500 – ₱800" },
        { service: "Follow-up Consultation", price: "₱200 – ₱300" },
        { service: "Prescription Review", price: "₱150 – ₱250" }
      ]
    }
  ];

  const getResultContent = () => {
    switch (resultType) {
      case "self-care":
        return {
          title: "Result: Self-Care Recommended",
          description: "Your symptoms do not currently require a clinic or hospital visit. You can manage your condition at home with rest, hydration, and monitoring.\n\nNext Steps:\nContinue observing your symptoms over the next few days\n\nIf your condition worsens or new symptoms appear, return to Ginhawa.AI or seek medical advice\n\nPractice healthy habits and stay informed\n\n💡 This result is based on your answers. If you feel unsure, you may still consult a healthcare provider.",
          showProviders: false
        };
      case "urgent":
        return {
          title: "Result: Urgent Care Recommended",
          description: "Your symptoms may require immediate medical attention. We strongly advise visiting a healthcare facility as soon as possible.\n\nNext Steps:\nChoose a nearby clinic or hospital from the list below\n\nBring your health card or ID, if available\n\nInform the staff about your symptoms upon arrival\n\n⚠️ If symptoms worsen or you experience severe pain, difficulty breathing, or confusion, go to the nearest emergency facility or call for help.",
          showProviders: true
        };
      default: // non-urgent
        return {
          title: "Result: Non-Urgent Care Recommended",
          description: "Your symptoms suggest that a medical check-up is advisable, but not urgent.\n\nWe recommend scheduling a consultation with a nearby healthcare provider within the next few days.\n\nNext Steps:\nChoose and call a clinic or hospital near you from the list below\n\nBring your health card or ID, if available\n\nMonitor your symptoms and seek care sooner if they worsen",
          showProviders: true
        };
    }
  };

  const content = getResultContent();

  return (
    <div className="min-h-screen bg-ginhaw-blue-50">
      <Header />
      
      {/* Title Section */}
      <section className="py-8 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-8xl font-semibold text-ginhaw-blue-500 mb-8">
            Self-Check
          </h1>
          <p className="text-2xl text-ginhaw-navy-800 tracking-wide leading-normal max-w-5xl mx-auto">
            This tool is not a replacement for medical advice, diagnosis, or treatment.
            If you have a life-threatening emergency, call 911 or your local emergency number.
          </p>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto bg-white rounded-2xl overflow-hidden">
          {/* Result Header */}
          <div className="bg-ginhaw-blue-500 p-8">
            <h2 className="text-2xl font-semibold text-white text-center">
              {content.title}
            </h2>
          </div>

          {/* Result Content */}
          <div className="p-12">
            <div className="max-w-4xl">
              <p className="text-2xl text-black leading-normal tracking-wide whitespace-pre-line">
                {content.description}
              </p>
            </div>

            {/* Healthcare Providers List */}
            {content.showProviders && (
              <div className="mt-12">
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold text-black mb-2">Healthcare Providers</h3>
                  <p className="text-2xl text-black font-light">Below is a list of clinics you can visit.</p>
                </div>

                <div className="space-y-6">
                  {providers.map((provider, index) => (
                    <div key={index} className="bg-gray-100/40 rounded-xl p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h4 className="text-2xl font-normal text-black tracking-wide mb-2">
                            {provider.name}
                          </h4>
                          <div className="flex items-center gap-4 text-lg text-black font-light tracking-wide">
                            <span>{provider.type}</span>
                            {provider.address && (
                              <>
                                <span className="text-black">|</span>
                                <span>{provider.address}</span>
                              </>
                            )}
                            {provider.insurance && provider.insurance.length > 0 && (
                              <>
                                <span className="text-black">|</span>
                                <span>{provider.insurance.join(", ")}</span>
                              </>
                            )}
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <div className={`w-7 h-6 rounded-full ${provider.available ? 'bg-green-500' : 'bg-red-500'}`}></div>
                          <span className="text-lg font-normal tracking-wide">
                            {provider.available ? 'AVAILABLE' : 'NOT AVAILABLE'}
                          </span>
                        </div>
                      </div>

                      {provider.contact.length > 0 && (
                        <div className="mb-4">
                          <span className="text-lg font-normal text-black tracking-wide">Contact: </span>
                          <div className="mt-1">
                            {provider.contact.map((contact, contactIndex) => (
                              <span key={contactIndex} className="text-lg font-light text-black tracking-wide mr-4">
                                {contact}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="flex items-center justify-between">
                        {/* View Prices Button */}
                        <div className="flex-1">
                          {provider.pricing && (
                            <Accordion type="single" collapsible className="w-full">
                              <AccordionItem value={`pricing-${index}`} className="border-none">
                                <AccordionTrigger className="text-lg font-medium text-ginhaw-blue-600 hover:text-ginhaw-blue-700 py-2 px-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all hover:no-underline">
                                  View Prices
                                </AccordionTrigger>
                                <AccordionContent className="pt-4">
                                  <div className="bg-white rounded-lg p-4 shadow-sm">
                                    <h5 className="text-lg font-semibold text-black mb-3">Price Details</h5>
                                    <div className="space-y-2 max-h-48 overflow-y-auto">
                                      {provider.pricing.map((price, priceIndex) => (
                                        <div key={priceIndex} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
                                          <span className="text-base text-black font-medium">{price.service}:</span>
                                          <div className="flex items-center gap-2">
                                            {price.isFree && price.isPhilHealthCovered ? (
                                              <div className="flex items-center gap-1 text-green-600 font-medium">
                                                <Check className="h-4 w-4" />
                                                <span>Free (PhilHealth Covered)</span>
                                              </div>
                                            ) : price.isUnavailable ? (
                                              <span className="text-gray-500 font-medium">{price.price}</span>
                                            ) : (
                                              <span className="text-black font-medium">{price.price}</span>
                                            )}
                                          </div>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </AccordionContent>
                              </AccordionItem>
                            </Accordion>
                          )}
                        </div>

                        {/* Wait Time and Queue Info */}
                        {(provider.waitTime || provider.queueCount) && (
                          <div className="text-right text-base text-black space-y-1 ml-4">
                            {provider.queueCount && (
                              <div className="font-medium">
                                Queue: {provider.queueCount.replace("people in queue", "patients")}
                                {provider.waitTime && ` (~${provider.waitTime.replace(" wait time", "")})`}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Retake Assessment Button */}
            <div className="text-center mt-12">
              <button 
                onClick={() => window.location.href = '/self-check'}
                className="px-8 py-4 bg-ginhaw-blue-500 text-white rounded-lg hover:bg-ginhaw-blue-600 transition-colors text-lg font-semibold"
              >
                Retake Assessment
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
