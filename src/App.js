import { useState } from "react";
import "./App.css";
import Forms from "./components/Forms";
import MyProgressBar from "./components/MyProgressBar";
import NextButton from "./components/NextButton";

function App() {
  const [page, setPage] = useState(1);

  return (
    <div className="mt-5">
      <h1 className="text-center">
        <i className="fas fa-leaf text-primary"></i> Eden
      </h1>
      <MyProgressBar page={page} />
      <Forms page={page} />
      <NextButton page={page} setPage={setPage} />
    </div>
  );
}

export default App;
