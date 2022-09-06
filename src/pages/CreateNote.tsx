import { ChangeEvent, useEffect, useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { useHistory } from "react-router-dom";
import { hash } from "../App";
import { NoteBox } from "../components/NoteBox";
import api from "../services/api";

export function CreateNote() {
  const [noteText, setNoteText] = useState("");

  const history = useHistory();

  useEffect(() => {
    setNoteText(localStorage.getItem("inputValue")!);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      const note = {
        body: noteText,
      };

      if (noteText.trim().length > 0) {
        api.post(`${hash}/notes`, note);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [noteText]);

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setNoteText(event.target.value);
    localStorage.setItem("inputValue", event.target.value);
  };

  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      const note = {
        body: noteText,
      };

      api.post(`${hash}/notes`, note);
      setNoteText("");
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
      <NoteBox noteText={noteText} handleChange={handleChange} />
      <button className="save" onClick={handleSaveClick}>
        Save
      </button>
    </div>
  );
}
