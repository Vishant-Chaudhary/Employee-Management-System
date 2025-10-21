

const FailedTask = () => {
  return (
    <>
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
        <div className="flex justify-between items-center mb-2">
          <h3 className="bg-emerald-100 text-emerald-800 py-0.5 px-2 rounded font-semibold">Category</h3>
          <h4 className="text-sm text-gray-500">01/01/2000</h4>
        </div>
      <h2 className="text-xl font-semibold text-gray-900">Title</h2>
        <div id="description" className="text-gray-600 mt-2 max-h-24 overflow-y-auto pr-1 scrollbar-hide ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab cum iusto inventore odio, eius tempora a aut facilis eos dolores magnam praesentium expedita! Temporibus ipsum consectetur, saepe atque maxime minus!</div>
      <div className="mt-4">
        <h1 className="text-red-600 font-semibold text-2xl">Failed</h1>
      </div>
    </div>
    
    </>
  )
}

export default FailedTask