import MainContent from "./components/MainContent";
import MyMap from "./components/MyMap";

function App() {
  return (
    <>
      <div style={{backgroundColor:"aquamarine"}}>
      <div className="container-fluid p-0">
        <MyMap />
      </div>

      <div  className="container mt-5">
        <MainContent/>
      </div>
</div>
    </>
  );
}

export default App;