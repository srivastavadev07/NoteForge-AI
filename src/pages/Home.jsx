import { useState } from "react";
import TopicForm from "../components/TopicForm";
import NotesCard from "../components/NotesCard";

function Home() {
  const [notes, setNotes] = useState("");
  return (
    <div className="flex flex-col items-center mt-20 px-4">
      <TopicForm setNotes={setNotes} />
      <NotesCard notes={notes} />
    </div>
  );
}

export default Home;