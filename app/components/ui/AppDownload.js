export default function AppDownload() {
  return (
    <div className="mt-6">
      <p className="text-gray-700 mb-3 font-semibold">حمل التطبيق الآن:</p>
      <div className="flex space-x-4 space-x-reverse">
        <a href="#" className="flex items-center space-x-2 space-x-reverse bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors">
          <span>📱</span>
          <div className="text-right">
            <div className="text-xs">حمله من</div>
            <div className="font-semibold">Google Play</div>
          </div>
        </a>
        <a href="#" className="flex items-center space-x-2 space-x-reverse bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors">
          <span>📱</span>
          <div className="text-right">
            <div className="text-xs">حمله من</div>
            <div className="font-semibold">App Store</div>
          </div>
        </a>
      </div>
    </div>
  )
}