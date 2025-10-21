

const Header = () => {
  return (
    <header className="flex items-center justify-between  bg-emerald-600 text-white px-8 py-4 shadow-md" >
      <div>
        <h1 className="text-2xl font-semibold">Hello<br /> <span className="text-emerald-100" >Vishant 👋</span> </h1>
      </div>
      <button className="bg-white text-emerald-600 font-semibold px-4 py-2 rounded-md hover:bg-emerald-100 transition">Log out</button>
    </header>
  )
}

export default Header