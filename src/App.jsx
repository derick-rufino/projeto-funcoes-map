import Filmes from "./components/Filmes";
import Produtos from "./components/Produtos";

function App() {
  return (
    <div className="root bg-slate-800 min-h-screen py-8 px-8 flex gap-4 flex-wrap sm:px-12">
      <Filmes />
      <Produtos />
    </div>
  );
}

export default App;
