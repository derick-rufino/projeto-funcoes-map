export default function Filmes() {
  const filmes = [
    { id: 1, nome: "Interestelar", ano: 2014 },
    { id: 2, nome: "Parasita", ano: 2019 },
    { id: 3, nome: "Cidade de Deus", ano: 2002 },
  ];
  return (
    <ul className="flex flex-wrap gap-4 border border-slate-700 rounded-3xl p-6 max-w-120 max-h-60">
      <h1 className="text-2xl font-bold text-white w-full">Filmes</h1>
      {filmes.map((filme) => (
        <li
          key={filme.id}
          className="bg-slate-600 text-white py-4 px-6 rounded-full"
        >
          {filme.nome} ({filme.ano})
        </li>
      ))}
    </ul>
  );
}
