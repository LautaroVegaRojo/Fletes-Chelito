import MainContent from "./components/MainContent";
import MyMap from "./components/MyMap";

function App() {
  return (
    <>
      <div style={{backgroundColor:"aquamarine", paddingTop:"6svh"}}>
     
      <div  className="container mt-5">
        <MainContent/>
      </div>
       <div className="container-fluid p-0">
        <MyMap />
      </div>
 <footer style={{backgroundColor:"aquamarine", height:"30svh"}}>
        caca
      </footer>
</div>
    </>
  );
}

export default App;