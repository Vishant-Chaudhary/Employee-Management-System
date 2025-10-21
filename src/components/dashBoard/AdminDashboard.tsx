
import Header from "../others/Header"
import CreateTask from "../others/CreateTask"
import AllTask from "../others/AllTask"



const AdminDashboard = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            <main className="max-w-7xl mx-auto px-6 py-8 space-y-8">
                <CreateTask />
                <AllTask />
            </main>
        </div>
    )
}

export default AdminDashboard