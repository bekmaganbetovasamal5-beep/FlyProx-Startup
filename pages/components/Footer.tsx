export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center">
            <span className="text-black font-bold">FP</span>
          </div>
          <span className="text-xl font-bold text-white">FlyProx</span>
          <span className="text-xl font-bold text-yellow-400">AI</span>
          <span className="text-gray-400 ml-4">© {currentYear} FlyProx AI. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}