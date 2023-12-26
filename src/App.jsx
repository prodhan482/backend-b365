import NavBar from "./Components/NavBar";
import SideBar from "./Components/SideBar";
import Routes from "./Routes/routes";

function App() {
  return (
    <>
      <div className="app flex ">
        <SideBar />
        <div className="flex flex-col h-full w-full pl-[250px] ">
          <NavBar />
          <div className="mt-20 ">
            <Routes />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
