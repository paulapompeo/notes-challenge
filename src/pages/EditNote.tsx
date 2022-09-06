import { ChangeEvent, useEffect, useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { useHistory, useParams } from "react-router-dom";
import { hash } from "../App";
import { NoteBox } from "../components/NoteBox";
import api from "../services/api";

export interface Note {
  id: string;
  body: string;
}

export function EditNote() {
  const history = useHistory();
  const { id } = useParams<{ id: string }>();

  const [noteToBeEdited, setNoteToBeEdited] = useState<Note>({
    id: "",
    body: "",
  });

  useEffect(() => {
    api.get(`${hash}/notes/${id}`).then((res) => {
      setNoteToBeEdited(res.data);
    });
  }, [id]);

  useEffect(() => {
    setNoteToBeEdited({
      id,
      body: localStorage.getItem("inputValue")!,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      const note = {
        body: noteToBeEdited.body,
      };

      if (noteToBeEdited.body.trim().length > 0) {
        api.put(`${hash}/notes/${id}`, note);
        // localStorage.clear();
      }
    }, 3000);

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [noteToBeEdited]);

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setNoteToBeEdited({
      id,
      body: event.target.value,
    });

    localStorage.setItem("inputValue", event.target.value);
  };

  const handleSaveClick = () => {
    if (noteToBeEdited.body.trim().length > 0) {
      const note = {
        body: noteToBeEdited.body,
      };

      api.put(`${hash}/notes/${id}`, note);
      // localStorage.clear();
      handleGoBack();
    }
  };

  const handleGoBack = () => {
    history.goBack();
  };

  return (
    <div className="wrapper">
      <div className="back-button">
        <button onClick={handleGoBack}>
          <FiArrowLeft size="1.3em" />
          Dashboard
        </button>
      </div>

      <NoteBox noteText={noteToBeEdited?.body} handleChange={handleChange} />

      <button className="save" onClick={handleSaveClick}>
        Edit
      </button>
    </div>
  );
}
