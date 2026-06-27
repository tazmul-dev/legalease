export default function Loading() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {[...Array(8)].map((_, index) => (
        <div
          key={index}
          className="border rounded-xl p-4 animate-pulse"
        >
          <div className="h-48 bg-gray-200 rounded-lg"></div>

          <div className="h-6 bg-gray-200 rounded mt-4"></div>

          <div className="h-4 bg-gray-200 rounded mt-3 w-1/2"></div>

          <div className="h-4 bg-gray-200 rounded mt-3 w-1/3"></div>

          <div className="h-10 bg-gray-200 rounded mt-5"></div>
        </div>
      ))}
    </div>
  );
}