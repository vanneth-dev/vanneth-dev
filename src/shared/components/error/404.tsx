export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="text-center space-y-6 max-w-md mx-auto">
        <div className="relative">
          <div className="text-8xl font-light text-gray-800 tracking-tight opacity-80 transition-opacity duration-1000 hover:opacity-100">
            404
          </div>
        </div>

        <div className="space-y-3">
          <h1 className="text-2xl font-medium text-gray-900">Page not found</h1>

          <p className="text-gray-600 text-sm leading-relaxed">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        <div className="flex flex-col gap-3 pt-6">
          <a
            href="/"
            className="px-6 py-2 bg-gray-900 text-white text-sm font-medium rounded-md hover:bg-gray-800 transition-colors duration-200"
          >
            Go home
          </a>

          <button
            onClick={() => window.history.back()}
            className="px-6 py-2 text-gray-600 text-sm font-medium border border-gray-300 rounded-md hover:bg-gray-100 transition-colors duration-200"
          >
            Go back
          </button>
        </div>

        <div className="pt-8">
          <div className="flex justify-center space-x-1">
            <div className="w-1 h-1 bg-gray-400 rounded-full animate-bounce"></div>
            <div className="w-1 h-1 bg-gray-400 rounded-full animate-bounce delay-100"></div>
            <div className="w-1 h-1 bg-gray-400 rounded-full animate-bounce delay-200"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
