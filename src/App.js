import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import SearchBar from './components/SearchBar';
import CollegeCard from './components/CollegeCard';
import { Search } from 'lucide-react';

const App = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSearchClick = () => {
    setShowSearch(true);
  };

  const handleBackToHome = () => {
    setShowSearch(false);
    setSearchQuery('');
    setSearchResults([]);
    setHasSearched(false);
  };

  const handleSearch = async (query) => {
    if (query.trim() === '') {
      setSearchResults([]);
      setHasSearched(true);
      return;
    }

    try {
      setLoading(true);
      const response = await fetch(
        `http://universities.hipolabs.com/search?name=${encodeURIComponent(query)}`
      );
      const data = await response.json();

      // Transform API response to match CollegeCard props
      const transformedResults = data.map((college) => ({
        name: college.name,
        location: college.country,
        web_page: college.web_pages?.[0] || "",
        domain: college.domains?.[0] || ""
      }));

      setSearchResults(transformedResults);
      setHasSearched(true);
    } catch (error) {
      console.error("Error fetching colleges:", error);
      setSearchResults([]);
      setHasSearched(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex flex-col">
      {/* Background decoration */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-br from-blue-200/30 to-purple-200/30 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-gradient-to-br from-indigo-200/30 to-pink-200/30 blur-3xl"></div>
      </div>

      {/* Header */}
      <Header 
        onSearchClick={handleSearchClick} 
        onHomeClick={handleBackToHome} 
      />

      {/* Main Content */}
      <main className="flex-grow relative z-10">
        {!showSearch ? (
          <Home onSearchClick={handleSearchClick} />
        ) : (
          <div className="min-h-[calc(100vh-64px)] py-8 px-4">
            <div className="max-w-4xl mx-auto">
              {/* Header */}
              <div className="text-center mb-8">
                <button
                  onClick={handleBackToHome}
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium mb-6 transition-colors duration-200"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Back to Home
                </button>
                
                <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                  Find Your College
                </h2>
                <p className="text-gray-600 text-lg">
                  Search from a global database of universities
                </p>
              </div>

              {/* Search Section */}
              <SearchBar 
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                onSearch={handleSearch}
              />

              {/* Results Section */}
              {hasSearched && (
                <div className="animate-fadeIn">
                  {loading ? (
                    <p className="text-center text-gray-600">Loading...</p>
                  ) : searchResults.length > 0 ? (
                    <>
                      <div className="mb-6">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                          Search Results
                        </h3>
                        <p className="text-gray-600">
                          Found {searchResults.length} college{searchResults.length !== 1 ? 's' : ''} matching your search
                        </p>
                      </div>
                      
                      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {searchResults.map((college, index) => (
                          <CollegeCard 
                            key={index}
                            college={college}
                            index={index}
                          />
                        ))}
                      </div>
                    </>
                  ) : (
                    <div className="text-center py-12">
                      <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Search className="w-8 h-8 text-gray-400" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        No Results Found
                      </h3>
                      <p className="text-gray-600">
                        {searchQuery.trim() === '' 
                          ? "Please enter a search term to find colleges"
                          : `No colleges match "${searchQuery}". Try a different search term.`
                        }
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer 
        onSearchClick={handleSearchClick}
        onHomeClick={handleBackToHome}
      />

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default App;
