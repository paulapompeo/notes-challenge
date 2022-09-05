import { FiEdit } from "react-icons/fi";
import { useHistory } from "react-router-dom";

interface NoteItemProps {
  id: string;
  body: string;
}

export function NoteItem({ body, id }: NoteItemProps) {
  const history = useHistory();

  const handleEditNote = (id: string) => {
    history.push(`edit-note/${id}`);
  };

  return (
    <div className="note-item">
      <span>{body}</span>
      <div className="note-footer">
        <button onClick={() => handleEditNote(id)}>
          <FiEdit size="1.3em" />
        </button>
      </div>
    </div>
  );
}
