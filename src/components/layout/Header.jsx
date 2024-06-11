// Header components is
const Header = () => {
  return (
    <header className="header ml-4">
      <div className="flex items-center justify-start text-xl">
        <h1 className="font-bold">Admin </h1>
        <h1 className="font-normal text-gray-500">Dashboard</h1>
      </div>

      {console.log("hello inside header")}
    </header>
  );
};

export default Header;
