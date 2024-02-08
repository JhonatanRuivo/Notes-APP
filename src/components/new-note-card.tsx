import iconArrowUpRight from '../assets/arrow-up-right.svg'

export function NewNote() {
  return (
    <button
      className="bg-slate-700 relative p-5 rounded-lg drop-shadow-xl w-auto h-[250px] text-left  outline-none
      focus-visible:ring-2 focus-visible:ring-lime-400 hover:ring-2 hover:ring-slate-600 overflow-hidden"
    >
      <div className="flex flex-col gap-3 h-full">
        <strong id="title" className="text-sm font-medium text-slate-200">
          Adicionar nota
        </strong>
        <p id="text-note" className="text-slate-400 text-sm font-normal">
          Grave uma nota em áudio que será convertida para texto automaticamente.
        </p>
      </div>
      <div className="absolute top-0 right-0 overflow-hidden">
        <img src={iconArrowUpRight} alt="ícone de uma flecha para cima direita" />
      </div>
    </button>
  )
}
