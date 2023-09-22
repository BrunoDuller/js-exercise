
export default function Home() {
  const objetos = [
    { nome: "João", idade: 30 },
    { nome: "Maria", idade: 25 },
    { nome: "Carlos", idade: 35 },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Next.js</h1> 
      <ul> 
        {objetos.map((objeto) => (
          <li key={objeto.nome}>
            {objeto.nome} - {objeto.idade}
          </li>
        ))}
      </ul>
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
      </div>
    </main>
  );
}