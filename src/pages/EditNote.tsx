import { ChangeEvent, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import api from "../services/api";

export interface Note {
  id: string;
  body: string;
}

export function EditNote() {
  const hash = "419ddd5d26e49e9d69d7cf7699a8b3ac";
  const { id } = useParams<{ id: string }>();

  const [noteToBeEdited, setNoteToBeEdited] = useState<Note>();
  const [editedNote, setEditedNote] = useState<string>();
  console.log({ noteToBeEdited });

  useEffect(() => {
    api.get(`${hash}/notes/${id}`).then((res) => {
      setNoteToBeEdited(res.data);
    });
  }, [id]);

  // if (!noteToBeEdited) {
  //   return "error..."
  // }

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    // if (characterLimit - event.target.value.length >= 0) {
    // }

    const test = event.target.value
    setNoteToBeEdited({
      id,
      body: test
    })

    setEditedNote(test)
    // setNoteToBeEdited({
    //   ...noteToBeEdited,
    //   body: test
    // })
    // setEditedNote(event.target.value);
  };

  const handleSaveClick = () => {
    // if (noteToBeEdited.trim().length > 0) {
    //   // handleAddNote(noteText);

    const note = {
      body: editedNote
    }

    api.put(`${hash}/notes/${id}`, note)

  }

  // const history = useHistory();
  return (
    <div className="wrapper">
      <textarea
        placeholder="Type to add a note..."
        value={noteToBeEdited?.body}
        onChange={handleChange}
      ></textarea>
      <button className='save' onClick={handleSaveClick}>
        Edit
      </button>
    </div>
  );
}
