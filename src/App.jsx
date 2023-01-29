import { useEffect } from "react";
import "./assets/css/App.css";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const authToken = localStorage.getItem("auth_token");
    if (!authToken) navigate("/auth");
  });

  return (
    <div>
      <button>Go Auth</button>
    </div>
  );
}
export default App;
