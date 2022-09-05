import { ChangeEvent, useState } from "react";
import api from "../services/api";

export function CreateNote() {

  const [noteText, setNoteText] = useState('');

  const hash = "419ddd5d26e49e9d69d7cf7699a8b3ac";

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setNoteText(event.target.value);
  };

  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      const note = {
        body: noteText
      }

      api.post(`${hash}/notes`, note)
      setNoteText('');
    }
  };

  return (
    <div className='wrapper'>
      <textarea
        placeholder='Type your note here...'
        value={noteText}
        onChange={handleChange}
      ></textarea>
      <button className='save' onClick={handleSaveClick}>
        Save
      </button>
    </div>
  );
}