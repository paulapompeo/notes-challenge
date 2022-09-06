import { ChangeEvent } from "react";

interface NoteBoxProps {
  noteText: string | undefined
  handleChange: (event: ChangeEvent<HTMLTextAreaElement>) => void
}

export function NoteBox({ noteText, handleChange }: NoteBoxProps) {
  return (
    <textarea
      placeholder="Type your note here..."
      value={noteText}
      onChange={handleChange}
    ></textarea>
  );
}
