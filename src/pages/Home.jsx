import { Search, GraduationCap } from 'lucide-react';

const Home = ({ onSearchClick }) => {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-64px)] px-4 py-16">
      <div className="text-center max-w-2xl mx-auto">
        <div className="mb-8 inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-lg">
          <GraduationCap className="w-10 h-10 text-white" />
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6 leading-tight">
          Welcome to the
          <br />
          College Finder
        </h1>
        
        <p className="text-xl text-gray-600 mb-12 leading-relaxed">
          Discover your perfect college match from top universities across the nation. 
          Start your academic journey today.
        </p>
        
        <button
          onClick={onSearchClick}
          className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:from-blue-700 hover:to-purple-700"
        >
          <Search className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
          College Finder
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
        </button>
      </div>
    </div>
  );
};

export default Home;