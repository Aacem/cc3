import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import { getUser } from "./redux/userslice";
import { getPostSlice } from "./redux/postsslice";
import { BrowserRouter as Router } from "react-router-dom";
import Accueil from "./components/accueil";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
    dispatch(getPostSlice());
  }, [dispatch]);
  return (
    <Router>
      <div className="app">
        <Accueil />
      </div>
    </Router>
  );
}

export default App;
