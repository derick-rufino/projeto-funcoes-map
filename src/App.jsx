import Filmes from "./components/Filmes";
import Produtos from "./components/Produtos";

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden px-4 py-10 sm:px-8">
      <main className="relative mx-auto flex w-full max-w-6xl flex-col gap-8">
        <section className="grid gap-6 lg:grid-cols-[0.95fr_1.25fr]">
          <Filmes />
          <Produtos />
        </section>
      </main>
    </div>
  );
}

export default App;
