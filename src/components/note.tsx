export function Note() {
  return (
    <button
      className="bg-gradient-to-t from-slate-800 to-gray-950 p-5 rounded-lg drop-shadow-xl w-[348px] h-[250px] text-start 
    focus:ring-2 focus:ring-lime-400 hover:outline hover:outline-slate-400 hover:outline-2"
    >
      <div className="flex flex-col gap-3 align-top">
        <strong id="title" className="text-sm font-medium text-slate-300">
          há 2 dias
        </strong>
        <p id="text-note" className="text-slate-400 text-sm font-normal">
          O Drizzle possui um plugin do ESLint para evitar que realizemos updates ou deletes sem where... Para
          configurar o plugin, é preciso instalar como abaixo:
        </p>
      </div>
    </button>
  )
}
