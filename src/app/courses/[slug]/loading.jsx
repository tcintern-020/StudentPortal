export default function CourseLoading() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-pulse">
      <div className="max-w-4xl mx-auto">
        <div className="w-32 h-4 bg-gray-200 rounded mb-8"></div>
        
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 mb-16">
          <div className="h-64 bg-gray-200 relative">
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="w-24 h-6 bg-gray-300 rounded-full mb-3"></div>
              <div className="w-3/4 h-10 bg-gray-300 rounded"></div>
            </div>
          </div>
          
          <div className="p-8">
            <div className="flex justify-between items-center mb-8 pb-8 border-b border-gray-100">
              <div>
                <div className="w-16 h-4 bg-gray-200 rounded mb-2"></div>
                <div className="w-24 h-8 bg-gray-300 rounded"></div>
              </div>
              <div className="w-32 h-12 bg-gray-300 rounded-xl"></div>
            </div>
            
            <div>
              <div className="w-48 h-8 bg-gray-300 rounded mb-4"></div>
              <div className="space-y-3">
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                <div className="h-4 bg-gray-200 rounded w-full mt-4"></div>
                <div className="h-4 bg-gray-200 rounded w-4/6"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
