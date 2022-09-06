import { useEffect, useState } from "react";
import { FiFileText } from "react-icons/fi";
import { NoteList } from "../components/NoteList";
import api from "../services/api";

import "../global.css";
import { hash } from "../App";

export interface Note {
  id: string;
  body: string;
}

export function Dashboard() {

  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    api.get(`${hash}/notes`).then((res) => {
      setNotes(res.data);
    });

    localStorage.clear();
  }, []);

  return (
    <>
      <div className="wrapper">
        <div className="create-note">
          <a href="/create-note">
            <FiFileText size={20} />
            Create new note
          </a>
        </div>
        <NoteList notes={notes} />
      </div>
    </>
  );
}
