
import TopicForm from "../components/TopicForm";
import NotesCard from "../components/NotesCard";
import QuizCard from "../components/QuizCard";
import FlashcardCard from "../components/FlashcardCard";
import {
  generateQuiz,
  generateFlashcards,
} from "../services/gemini";
import { useState, useEffect } from "react";


function Home() {
const [notes, setNotes] = useState(
  localStorage.getItem("notes") || ""
);
  const [quiz, setQuiz] = useState("");
  const [loadingQuiz, setLoadingQuiz] = useState(false);
const [flashcards, setFlashcards] = useState("");
const [loadingFlashcards, setLoadingFlashcards] = useState(false);
const [currentTopic, setCurrentTopic] = useState("");
const [history, setHistory] = useState(
  JSON.parse(
    localStorage.getItem("history")
  ) || []
);
const [searchTerm, setSearchTerm] = useState("");
const filteredHistory = history.filter((item) =>
  item.topic
    .toLowerCase()
    .includes(searchTerm.toLowerCase())
);

useEffect(() => {
  localStorage.setItem("notes", notes);
}, [notes]);

useEffect(() => {
  if (!notes || !currentTopic) return;

  const newItem = {
    topic: currentTopic,
    notes: notes,
  };

  const updatedHistory = [
    newItem,
    ...history,
  ].slice(0, 10);

  setHistory(updatedHistory);

  localStorage.setItem(
    "history",
    JSON.stringify(updatedHistory)
  );
}, [notes]);


  const handleQuiz = async () => {
    try {
      setLoadingQuiz(true);

      const result = await generateQuiz(notes);

      setQuiz(result);
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingQuiz(false);
    }
  };

  const handleFlashcards = async () => {
  try {
    setLoadingFlashcards(true);

    const result = await generateFlashcards(notes);

    setFlashcards(result);
  } catch (error) {
    console.log(error);
  } finally {
    setLoadingFlashcards(false);
  }
};

return (
  <div className="flex flex-col items-center mt-20 px-4">
<TopicForm
  setNotes={setNotes}
  setCurrentTopic={setCurrentTopic}
/>
    <NotesCard notes={notes} />

{history.length > 0 && (
  <div className="w-full max-w-3xl mt-6 bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-2xl">
    <h3 className="text-white text-xl font-bold mb-4">
      📚 Recent Notes
    </h3>
<input
  type="text"
  placeholder="Search notes..."
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
  className="w-full p-3 rounded-lg bg-[#0f172a] text-white mb-4 outline-none"
/>
    <div className="space-y-2">
{filteredHistory.map((item, index) => (
          <button
          key={index}
          onClick={() => setNotes(item.notes)}
          className="block w-full text-left text-gray-300 hover:text-white"
        >
          • {item.topic}
        </button>
      ))}
    </div>
  </div>
)}
    {notes && (
      <button
        onClick={handleQuiz}
        className="mt-6 bg-purple-600 px-6 py-3 rounded-xl text-white font-semibold hover:bg-purple-700"
      >
        {loadingQuiz ? "Generating Quiz..." : "🧠 Generate Quiz"}
      </button>
    )}

    {notes && (
  <button
    onClick={() => {
      setNotes("");
      localStorage.removeItem("notes");
    }}
    className="mt-4 bg-red-600 px-6 py-3 rounded-xl text-white font-semibold hover:bg-red-700"
  >
    🗑 Clear Notes
  </button>
)}

    {quiz && <QuizCard quiz={quiz} />}

    {notes && (
      <button
        onClick={handleFlashcards}
        className="mt-4 bg-pink-600 px-6 py-3 rounded-xl text-white font-semibold hover:bg-pink-700"
      >
        {loadingFlashcards
          ? "Generating Flashcards..."
          : "🃏 Generate Flashcards"}
      </button>
    )}

    {flashcards && (
      <FlashcardCard flashcards={flashcards} />
    )}
  </div>
);
}
export default Home;