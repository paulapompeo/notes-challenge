// import { Note } from "../App";
import { NoteItem } from "./NoteItem";

export interface Note {
  id: string,
  body: string,
}

interface NoteListProps {
  notes: Note[]
}

export function NoteList({ notes }: NoteListProps) {
  return (
    <div className='notes-list'>
      {notes.map((note) => {
        console.log(note)
        return (
          <NoteItem
            key={note.id}
            body={note.body}
            id={note.id}
          />
        )
      })}
    </div>
  );
}
