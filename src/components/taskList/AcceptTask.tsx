

const AcceptTask = () => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between h-full">
            <div>
                <div className="flex justify-between items-center mb-2">
                    <h3 className="bg-emerald-100 text-emerald-800 py-0.5 px-2 rounded font-semibold">Category</h3>
                    <h4 className="text-sm text-gray-500">01/01/2001</h4>
                </div>
                <h2 className="text-xl font-semibold text-gray-900">Title</h2>
                <div id="description" className="text-gray-600 mt-2 max-h-24 overflow-y-auto pr-1 scrollbar-hide ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
                    volutpat metus sed felis congue, at vulputate lorem efficitur.
                </div>
            </div>
            <div className="mt-4 flex space-x-4">
                <button className="bg-emerald-600 text-white py-2 px-4 rounded-md hover:bg-emerald-700 transition">
                    Mark as Completed
                </button>
                <button className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition">
                    Mark as Failed
                </button>
            </div>
        </div>
    )
}

export default AcceptTask