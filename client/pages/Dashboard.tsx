import { useState } from "react";
import { useNavigate } from "react-router-dom";

type PatientStatus = "pending" | "completed" | "did-not-arrive";

interface Patient {
  id: number;
  name: string;
  age: number;
  gender: string;
  queueNumber: number;
  status: PatientStatus;
}

export default function Dashboard() {
  const navigate = useNavigate();
  const queueData = {
    patientsWaiting: 30,
    averageWait: 18,
    nowServing: 10
  };

  const [facilityStatus, setFacilityStatus] = useState<"full" | "short">("short");

  const [patients, setPatients] = useState<Patient[]>([
    { id: 1, name: "Dela Cruz, Maria Ciara", age: 24, gender: "F", queueNumber: 30, status: "pending" },
    { id: 2, name: "Fernando, Charlize Papyrus", age: 21, gender: "F", queueNumber: 45, status: "pending" },
    { id: 3, name: "Bachoco, Israel Vincent", age: 22, gender: "M", queueNumber: 46, status: "pending" },
    { id: 4, name: "Pangilinan, Sophia Rubie", age: 19, gender: "F", queueNumber: 70, status: "pending" }
  ]);

  const handleLogout = () => {
    navigate("/");
  };

  const toggleFacilityStatus = () => {
    setFacilityStatus(prevStatus => prevStatus === "full" ? "short" : "full");
  };

  const updatePatientStatus = (patientId: number, status: PatientStatus) => {
    setPatients(prevPatients =>
      prevPatients.map(patient =>
        patient.id === patientId ? { ...patient, status } : patient
      )
    );
  };

  const getStatusDisplay = (status: PatientStatus) => {
    switch (status) {
      case "completed":
        return <span className="text-green-600 font-medium">Completed</span>;
      case "did-not-arrive":
        return <span className="text-red-600 font-medium">Did Not Arrive</span>;
      default:
        return <span className="text-gray-600 font-medium">Pending</span>;
    }
  };

  return (
    <div className="min-h-screen bg-ginhaw-blue-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-24">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-ginhaw-blue-500">Ginhaw.AI</span>
            </div>
            
            <button
              onClick={handleLogout}
              className="flex items-center gap-3 px-6 py-4 bg-ginhaw-blue-500 text-white rounded-3xl hover:bg-ginhaw-blue-600 transition-colors"
            >
              <svg className="w-6 h-5 fill-white" viewBox="0 0 25 19">
                <path d="M24.375 16.077H21.25V4.07127C21.25 3.093 20.409 2.29669 19.375 2.29669H15V4.59341H18.75V18.3738H24.375C24.7203 18.3738 25 18.1168 25 17.7996V16.6512C25 16.334 24.7203 16.077 24.375 16.077ZM12.1969 0.0362102L4.69688 1.82119C4.14023 1.95362 3.75 2.42947 3.75 2.97566V16.077H0.625C0.279687 16.077 0 16.334 0 16.6512V17.7996C0 18.1168 0.279687 18.3738 0.625 18.3738H13.75V1.19067C13.75 0.416246 12.9859 -0.151834 12.1969 0.0362102ZM10.3125 10.3352C9.79492 10.3352 9.375 9.82097 9.375 9.18686C9.375 8.55275 9.79492 8.0385 10.3125 8.0385C10.8301 8.0385 11.25 8.55275 11.25 9.18686C11.25 9.82097 10.8301 10.3352 10.3125 10.3352Z"/>
              </svg>
              <span className="text-2xl font-medium">Log Out</span>
            </button>
          </div>
        </div>
      </header>

      {/* Dashboard Header */}
      <section className="py-8 px-6">
        <div className="max-w-7xl mx-auto bg-white rounded-xl p-12">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h1 className="text-6xl font-medium text-ginhaw-blue-500 mb-4">
                Baguio Clinic Dashboard
              </h1>
              <p className="text-2xl font-normal text-ginhaw-gray-500 mb-4">
                Real-time patient flow and service monitoring
              </p>
              <p className="text-xl font-light text-ginhaw-gray-500">
                Monitor patient referrals, update facility details, and manage service availability in real time.
              </p>
            </div>
            <div
              className="w-80 h-80 bg-white rounded-full flex items-center justify-center"
              style={{
                backgroundImage: "url(https://cdn.builder.io/api/v1/image/assets%2Fa1a425b01280465589496a6892b850bd%2F79acc1a1bc0e482eba2688abb789a0c5)",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "85%"
              }}
            />
          </div>
        </div>
      </section>

      {/* Current Queue Status */}
      <section className="py-8 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-xl p-8">
            <h2 className="text-2xl font-semibold text-ginhaw-blue-500 mb-8">Current Queue Status</h2>
            <div className="grid grid-cols-3 gap-8">
              {/* Patients Waiting */}
              <div className="bg-yellow-50 rounded-xl p-6 relative">
                <div
                  className="w-9 bg-orange-400 rounded-full absolute left-4 flex items-center justify-center"
                  style={{
                    height: "35px",
                    top: "23px",
                    backgroundImage: "url(https://cdn.builder.io/api/v1/image/assets%2Fa1a425b01280465589496a6892b850bd%2Ff272ae2fd21b4a1c92572ee4ced47193)",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover"
                  }}
                />
                <div className="ml-16">
                  <p className="text-sm text-gray-600 mb-2">Patients Waiting</p>
                  <p className="text-4xl font-bold text-gray-600">{queueData.patientsWaiting}</p>
                </div>
              </div>

              {/* Average Wait */}
              <div className="bg-pink-50 rounded-xl p-6 relative">
                <div
                  className="w-9 h-9 bg-pink-400 rounded-full absolute left-4"
                  style={{
                    top: "23px",
                    backgroundImage: "url(https://cdn.builder.io/api/v1/image/assets%2Fa1a425b01280465589496a6892b850bd%2F12f1e92c8a01420a8c3a86b3ad274386)",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover"
                  }}
                />
                <div className="ml-16">
                  <p className="text-sm text-gray-600 mb-2">Average Wait (min)</p>
                  <p className="text-4xl font-bold text-gray-600">{queueData.averageWait}</p>
                </div>
              </div>

              {/* Now Serving */}
              <div className="bg-green-50 rounded-xl p-6 relative">
                <div
                  className="w-9 h-9 bg-green-400 rounded-full absolute left-4"
                  style={{
                    top: "23px",
                    backgroundImage: "url(https://cdn.builder.io/api/v1/image/assets%2Fa1a425b01280465589496a6892b850bd%2Fa76fd86f155149ccbd6fb70eaf22c52f)",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover"
                  }}
                />
                <div className="ml-16">
                  <p className="text-sm text-gray-600 mb-2">Now Serving</p>
                  <p className="text-4xl font-bold text-gray-600">{queueData.nowServing}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Charts Section */}
      <section className="py-8 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-3 gap-8">
          {/* Patients Trend */}
          <div className="col-span-2 bg-white rounded-xl p-8" style={{ marginBottom: "-4px" }}>
            <h3 className="text-2xl font-semibold text-ginhaw-blue-500 mb-4">Patients Trend</h3>
            <div
              className="bg-white rounded-lg flex items-center justify-center"
              style={{
                height: "425px",
                margin: "0 -5px -5px -3px",
                backgroundImage: "url(https://cdn.builder.io/api/v1/image/assets%2Fa1a425b01280465589496a6892b850bd%2Fbe8a497906a44885998a991ec6f5bf07)",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover"
              }}
            />
          </div>

          {/* Most Requested Service */}
          <div className="bg-white rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-ginhaw-blue-500 mb-4">Most Requested Service</h3>
            <div
              className="bg-white rounded-lg flex items-center justify-center"
              style={{
                height: "361px",
                backgroundImage: "url(https://cdn.builder.io/api/v1/image/assets%2Fa1a425b01280465589496a6892b850bd%2F1e98184adaf24516bf022d19b2994727)",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover"
              }}
            />
          </div>
        </div>
      </section>

      {/* Facility Capacity */}
      <section className="py-8 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-8 mb-48">
            <h3 className="text-2xl font-semibold text-ginhaw-blue-500 mb-4">Facility Capacity</h3>
            <div className="flex items-center justify-center">
              <div className="relative w-48 h-48">
                <div className="w-48 h-48 rounded-full border-8 border-gray-200"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-500">70%</div>
                    <div className="text-sm text-gray-500">Occupied</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-2 justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-400 rounded"></div>
                  <span className="text-sm text-gray-600">Clinic Queue</span>
                </div>
                <button
                  onClick={toggleFacilityStatus}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                    facilityStatus === "full"
                      ? "bg-red-100 text-red-700 hover:bg-red-200"
                      : "bg-green-100 text-green-700 hover:bg-green-200"
                  }`}
                >
                  {facilityStatus === "full" ? "🔴 Full" : "🟢 Short"}
                </button>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-400 rounded"></div>
                <span className="text-sm text-gray-600">Peak Hours</span>
                <span className="text-xs text-red-500">⚠️ High Volume</span>
              </div>
            </div>
          </div>

          {/* Patient Insights */}
          <div className="col-span-2 bg-white rounded-xl p-8 -mr-1">
            <h3 className="text-2xl font-semibold text-ginhaw-blue-500 mb-6">Patient Insights</h3>
            <div className="overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 text-lg font-medium">Patient Name</th>
                    <th className="text-left py-3 text-lg font-medium">Age, Gender</th>
                    <th className="text-left py-3 text-lg font-medium pl-3">Queue #</th>
                    <th className="text-left py-3 text-lg font-medium pl-3">Status</th>
                    <th className="text-left py-3 text-lg font-medium pl-25">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {patients.map((patient) => (
                    <tr key={patient.id} className="border-b">
                      <td className="py-4 text-base">{patient.name}</td>
                      <td className="py-4 text-base">{patient.age}, {patient.gender}</td>
                      <td className="py-4 text-base pl-3">{patient.queueNumber}</td>
                      <td className="py-4 text-base pl-2 pr-4">{getStatusDisplay(patient.status)}</td>
                      <td className="py-4">
                        {patient.status === "pending" ? (
                          <div className="space-y-2 pl-5">
                            <button
                              onClick={() => updatePatientStatus(patient.id, "completed")}
                              className="w-28 bg-green-500 hover:bg-green-600 text-white py-1 px-3 rounded text-sm font-medium transition-colors"
                            >
                              Complete
                            </button>
                            <button
                              onClick={() => updatePatientStatus(patient.id, "did-not-arrive")}
                              className="w-28 bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded font-medium transition-colors ml-4"
                              style={{ fontSize: "13px" }}
                            >
                              Did Not Arrive
                            </button>
                          </div>
                        ) : (
                          <div className="text-gray-500 text-sm">
                            Status Updated
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
