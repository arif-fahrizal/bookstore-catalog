export default function CardSkeletonLoader() {
  return (
    <div className="group relative h-96 p-6 rounded-2xl transition-all duration-300 bg-gray-200 overflow-hidden hover:shadow-xl">
      <div className="absolute flex gap-2 top-4 left-4">
        <p className="w-20 h-5 rounded-lg  bg-gray-400 animate-pulse"></p>
        <p className="w-20 h-5 rounded-lg  bg-gray-400 animate-pulse"></p>
      </div>
      <div className="w-full h-52 mt-10 rounded-lg bg-gray-400 animate-pulse"></div>
      <div className="absolute bottom-6 left-6 right-6">
        <h3 className="w-1/2 h-5 mb-2 rounded-lg bg-gray-400 animate-pulse"></h3>
        <p className="w-ful h-7 rounded-lg bg-gray-400 animate-pulse"></p>
      </div>
    </div>
  );
}
