export default function Badge() {
  return (
    <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full shadow-sm">
      <span className="text-sm font-medium text-gray-700">New arrivals</span>
      <span className="text-orange-500">📚</span>
      <a href="#catalog" className="text-sm font-medium text-gray-900 hover:text-orange-600 transition-colors">
        Browse collection →
      </a>
    </div>
  );
}
