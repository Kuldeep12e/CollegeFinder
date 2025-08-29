import { Search } from 'lucide-react';

const SearchBar = ({ searchQuery, setSearchQuery, onSearch }) => {
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      onSearch(searchQuery);
    }
  };

  return (
    <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl p-8 mb-8 border border-white/20">
      <div className="flex gap-4 max-w-2xl mx-auto">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search colleges by name or location..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={handleKeyPress}
            className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all duration-200 text-lg placeholder-gray-400"
          />
        </div>
        <button
          onClick={() => onSearch(searchQuery)}
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;