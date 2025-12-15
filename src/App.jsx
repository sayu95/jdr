import JiwonConProvider from "./context/JiwonConProvider";
import JiwonRouteProvider from "./routes/JiwonRouteProvider";

function App() {
  return (
    <>
      <JiwonConProvider>
        <JiwonRouteProvider />
      </JiwonConProvider>
    </>
  );
}

export default App;
