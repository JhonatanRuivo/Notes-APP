import { IconNote } from './icon-note'
import iconArrowUpRight from '../../public/arrow-up-right.svg'

export function NewNote() {
  return (
    <button
      className="bg-slate-700 relative p-5 rounded-lg drop-shadow-xl w-[348px] h-[250px] text-start 
    focus:ring-2 focus:ring-lime-400 hover:outline hover:outline-slate-400 hover: outline-2 overflow-hidden"
    >
      <div className="flex flex-col gap-3">
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
