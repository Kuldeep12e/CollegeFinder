import { MapPin, Users} from 'lucide-react';

const CollegeCard = ({ college, index }) => {
  return (
    <div
      className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-white/20 hover:border-blue-200"
      style={{
        animation: `slideUp 0.6s ease-out ${index * 0.1}s both`
      }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
          <div className="flex items-center gap-1">
            <span className="text-sm font-medium text-gray-700">{college.web_page}</span>
          </div>
        </div>
      </div>
      
      <h4 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-200">
        {college.name}
      </h4>
      
      <div className="space-y-2 text-gray-600">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-blue-500" />
          <span className="text-sm">{college.location}</span>
        </div>
        <div className="flex items-center gap-2">
          <Users className="w-4 h-4 text-green-500" />
          <span className="text-sm">{college.domain} students</span>
        </div>
      </div>
      
      <button className="mt-4 w-full bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 py-2 px-4 rounded-xl font-medium hover:from-blue-100 hover:to-purple-100 transition-all duration-200 group-hover:scale-105">
        Learn More
      </button>
    </div>
  );
};

export default CollegeCard;