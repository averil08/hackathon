import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-24">
          <Link to="/" className="flex items-center">
            <div className="flex items-center justify-center w-54 h-19">
              <span className="text-2xl font-bold text-ginhaw-blue-500">Ginhaw.AI</span>
            </div>
          </Link>
          
          <div className="flex items-center gap-4">
            <Link 
              to="/about" 
              className="px-5 py-4 text-black/55 hover:text-black transition-colors text-xl font-light"
            >
              About Us
            </Link>
            <Link 
              to="/register" 
              className="px-5 py-4 bg-ginhaw-blue-500 text-white rounded-2xl hover:bg-ginhaw-blue-600 transition-colors text-xl font-semibold"
            >
              Register Your Facility
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
