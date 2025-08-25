export function Footer() {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-6">
        {/* Top section with links */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-0">
            <div className="px-6 py-2 border-r-2 border-black">
              <span className="text-black text-2xl font-normal">About</span>
            </div>
            <div className="px-8 py-2 border-r-2 border-black">
              <span className="text-black text-2xl font-normal">Terms</span>
            </div>
            <div className="px-4 py-2">
              <span className="text-black text-2xl font-normal">ginhawAIdevs@gmail.com</span>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-black text-2xl font-normal">Language:</span>
            <span className="text-black text-2xl font-normal">English ▼</span>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="text-center mb-6">
          <span className="text-black text-2xl font-normal">© Ginhaw.AI, 2025</span>
        </div>
        
        {/* Disclaimer */}
        <div className="text-center">
          <p className="text-black text-2xl font-normal leading-6 max-w-5xl mx-auto">
            Ginhaw.AI does not provide medical diagnosis or treatment. The information and recommendations on this site are for guidance and educational purposes only and are not a substitute for professional healthcare advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
