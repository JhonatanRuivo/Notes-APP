export function Note() {
  return (
    <button
      className=" text-left bg-slate-800 p-5 rounded-lg drop-shadow-xl w-auto h-[250px] outline-none
    focus-visible:ring-2 focus-visible:ring-lime-400 hover:ring-2 hover:ring-slate-600 relative overflow-hidden"
    >
      <div className="flex flex-col gap-3 h-full">
        <strong id="title" className="text-sm font-medium text-slate-300">
          há 2 dias
        </strong>
        <p id="text-note" className="text-slate-400 text-sm font-normal">
          O Drizzle possui um plugin do ESLint para evitar que realizemos updates ou deletes sem where... Para
          configurar o plugin, é preciso instalar como abaixo:
        </p>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none"></div>
    </button>
  )
}
