import { useEffect, useState } from "react";
import { FiFileText } from "react-icons/fi";
import { NoteList } from "../components/NoteList";
import api from "../services/api";

import "../global.css";

export interface Note {
  id: string;
  body: string;
}

export function Dashboard() {
  const hash = "419ddd5d26e49e9d69d7cf7699a8b3ac";

  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    api.get(`${hash}/notes`).then((res) => {
      setNotes(res.data);
    });
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
