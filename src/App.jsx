import "./App.css";
import AppRouter from "./routers/AppRouter";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app-layout">
      <header>
        <h1 className="title">🎬 Películas</h1>
      </header>
      <main className="main-content">
        <AppRouter />
      </main>
      <Footer />
    </div>
  );
}

export default App;