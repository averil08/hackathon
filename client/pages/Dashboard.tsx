export default function Dashboard() {
  const queueData = {
    patientsWaiting: 30,
    averageWait: 18,
    nowServing: 10
  };

  const patientInsights = [
    { name: "Dela Cruz, Maria Ciara", age: 24, gender: "F", queueNumber: 30 },
    { name: "Fernando, Charlize Papyrus", age: 21, gender: "F", queueNumber: 45 },
    { name: "Bachoco, Israel Vincent", age: 22, gender: "M", queueNumber: 46 },
    { name: "Pangilinan, Sophia Rubie", age: 19, gender: "F", queueNumber: 70 }
  ];

  return (
    <div className="min-h-screen bg-ginhaw-blue-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-24">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-ginhaw-blue-500">Ginhaw.AI</span>
            </div>
            
            <button className="flex items-center gap-3 px-6 py-4 bg-ginhaw-blue-500 text-white rounded-3xl hover:bg-ginhaw-blue-600 transition-colors">
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
            <div className="w-72 h-72 bg-gray-300 rounded-full flex items-center justify-center">
              <span className="text-gray-600">Dashboard Illustration</span>
            </div>
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
                <div className="w-9 h-20 bg-orange-400 rounded-full absolute left-4 top-0 flex items-center justify-center">
                  <svg className="w-6 h-12 fill-white" viewBox="0 0 36 79">
                    <circle cx="18" cy="61" r="18" fill="#FF947A"/>
                    <path d="M25.4304 7.49654C22.8272 7.49654 20.7211 9.43139 20.7211 11.8229C20.7211 14.2145 22.8272 16.1493 25.4304 16.1493C28.0336 16.1493 30.1397 14.2145 30.1397 11.8229C30.1397 9.43139 28.0336 7.49654 25.4304 7.49654Z" fill="white"/>
                  </svg>
                </div>
                <div className="ml-16">
                  <p className="text-sm text-gray-600 mb-2">Patients Waiting</p>
                  <p className="text-4xl font-bold text-gray-600">{queueData.patientsWaiting}</p>
                </div>
              </div>

              {/* Average Wait */}
              <div className="bg-pink-50 rounded-xl p-6 relative">
                <div className="w-9 h-9 bg-pink-400 rounded-full absolute left-4 top-6"></div>
                <div className="ml-16">
                  <p className="text-sm text-gray-600 mb-2">Average Wait (min)</p>
                  <p className="text-4xl font-bold text-gray-600">{queueData.averageWait}</p>
                </div>
              </div>

              {/* Now Serving */}
              <div className="bg-green-50 rounded-xl p-6 relative">
                <div className="w-9 h-9 bg-green-400 rounded-full absolute left-4 top-6"></div>
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
          <div className="col-span-2 bg-white rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-ginhaw-blue-500 mb-4">Patients Trend</h3>
            <div className="h-96 bg-gray-100 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Patients Trend Chart</span>
            </div>
          </div>

          {/* Most Requested Service */}
          <div className="bg-white rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-ginhaw-blue-500 mb-4">Most Requested Service</h3>
            <div className="h-96 bg-gray-100 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Service Chart</span>
            </div>
          </div>
        </div>
      </section>

      {/* Facility Capacity */}
      <section className="py-8 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-8">
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
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-400 rounded"></div>
                <span className="text-sm text-gray-600">Clinic Queue</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-400 rounded"></div>
                <span className="text-sm text-gray-600">Peak Hours</span>
                <span className="text-xs text-red-500">⚠️ High Volume</span>
              </div>
            </div>
          </div>

          {/* Patient Insights */}
          <div className="col-span-2 bg-white rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-ginhaw-blue-500 mb-6">Patient Insights</h3>
            <div className="overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 text-lg font-medium">Patient Name</th>
                    <th className="text-left py-3 text-lg font-medium">Age, Gender</th>
                    <th className="text-left py-3 text-lg font-medium">Queue Number</th>
                    <th className="text-left py-3 text-lg font-medium">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {patientInsights.map((patient, index) => (
                    <tr key={index} className="border-b">
                      <td className="py-4 text-base">{patient.name}</td>
                      <td className="py-4 text-base">{patient.age}, {patient.gender}</td>
                      <td className="py-4 text-base">{patient.queueNumber}</td>
                      <td className="py-4">
                        <div className="space-y-2">
                          <button className="w-24 bg-ginhaw-blue-500 text-white py-1 px-3 rounded text-sm font-medium">
                            Complete
                          </button>
                          <button className="w-24 bg-ginhaw-blue-500 text-white py-1 px-3 rounded text-sm font-medium">
                            Did Not Arrive
                          </button>
                        </div>
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
