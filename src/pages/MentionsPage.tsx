import { FiArrowLeft } from "react-icons/fi";
import { useHistory } from "react-router-dom";
import TextInput from "../components/TextInput";

export function MentionsPage() {
  const history = useHistory();

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

      <TextInput />

      <button className="save" onClick={() => console.log("click")}>
        Salve
      </button>
    </div>
  );
}
