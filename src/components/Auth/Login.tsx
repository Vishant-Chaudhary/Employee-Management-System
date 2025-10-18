import { FaLock } from "react-icons/fa";

const Login = () => {
    return (
        <div>
            <div className="flex h-screen w-screen items-center justify-center bg-gradient-to-br from-emerald-50 to-white">
                <div className="bg-white border border-emerald-200 p-10 rounded-xl shadow-lg w-[380px]">
                    <div className="bg-emerald-200 w-20 h-20 rounded-full flex items-center justify-center mx-auto shadow-lg shadow-emerald-300/50">
                        <FaLock className="text-3xl text-emerald-700" />
                    </div>
                    <div className="text-center mt-4 mb-6">
                        <h2 className="text-2xl font-bold text-emerald-700">Welcome</h2>
                        <p className="text-emerald-600 text-sm mt-1">Sign in to continue to your account</p>
                    </div>
                    <form
                        className="flex flex-col mt-3 space-y-4">
                        <div className="flex flex-col">
                            <label htmlFor="Email" className="text-sm font-medium text-emerald-700 mb-2">Email</label>
                            <input
                                required
                                id="Email"
                                type="email"
                                placeholder="Enter your email"
                                className="w-full bg-emerald-50 outline-none border-2 border-emerald-500 py-3 px-5 rounded-full placeholder-emerald-400 text-emerald-700 focus:ring-2 focus:ring-emerald-300"
                            />
                        </div>
                        <div className="flex flex-col mt-2">
                            <label htmlFor="Password" className="text-sm font-medium text-emerald-700 mb-2">Password</label>
                            <input
                                required
                                id="Password"
                                type="password"
                                placeholder="Enter your password"
                                className="w-full bg-emerald-50 outline-none border-2 border-emerald-500 py-3 px-5 rounded-full placeholder-emerald-400 text-emerald-700 focus:ring-2 focus:ring-emerald-300"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full text-white bg-emerald-600 hover:bg-emerald-700 py-3 px-5 rounded-full mt-2 transition duration-200"
                        >
                            Log in
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login