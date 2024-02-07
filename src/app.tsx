import { NewNote } from './components/new-note'
import { Note } from './components/note'
import { Search } from './components/search'

export function App() {
  return (
    <div className="w-[1092px] mx-auto mt-16 ">
      <Search />
      <div className="w-full border border-slate-700 my-6" />
      <div className="flex gap-6 flex-wrap" >
        <NewNote />
        <Note />
        <Note />
        <Note />
      </div>
    </div>
  )
}
