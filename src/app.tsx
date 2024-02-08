import { NewNote } from './components/new-note-card'
import { Note } from './components/note-card'

export function App() {
  return (
    <div className="max-w-6xl mx-auto my-12 ">
      <form className="w-full">
        <input
          type="text"
          placeholder="Busque em suas notas..."
          className="bg-transparent focus:outline-none text-3xl font-semibold placeholder:text-slate-500"
        />
      </form>
      <div className="w-full border border-slate-700 my-6" />
      <div className="grid grid-cols-3 gap-6 grid-rows-[250px]">
        <NewNote />
        <Note />
        <Note />
        <Note />
      </div>
    </div>
  )
}
