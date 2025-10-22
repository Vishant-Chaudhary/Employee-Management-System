import { useDispatch, useSelector } from "react-redux"
import type { AppDispatch, RootState } from "../../store/store"
import { useNavigate } from "react-router-dom";
import { logout } from "../../store/userSlice";


const Header = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { user } = useSelector((state: RootState) => state.user);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  }
  return (
    <header className="flex items-center justify-between  bg-emerald-600 text-white px-8 py-4 shadow-md" >
      <div>
        <h1 className="text-2xl font-semibold">Hello<br /> <span className="text-emerald-100" >{user?.name || "User"} 👋</span> </h1>
      </div>
      <button
        onClick={handleLogout}
        className="bg-white text-emerald-600 font-semibold px-4 py-2 rounded-md hover:bg-emerald-100 transition">Log out</button>
    </header>
  )
}

export default Header