import { useState } from "react";
import { generateNotes } from "../services/gemini";
import { FaSpinner } from "react-icons/fa";

function TopicForm({
  setNotes,
  setCurrentTopic,
}) {  const [topic, setTopic] = useState("");
  const [format, setFormat] = useState("Short");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!topic.trim()) {
      alert("Please enter a topic");
      return;
    }

    try {
      setLoading(true);

      const response = await generateNotes(
        topic,
        format
      );

setNotes(response);
setCurrentTopic(topic);
    } catch (error) {
      console.error(error);
      setNotes("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#151030] p-8 rounded-2xl w-full max-w-3xl shadow-lg">

      <h2 className="text-white text-2xl font-bold mb-6">
        Generate Notes
      </h2>

      <input
        type="text"
        placeholder="Enter any topic..."
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        className="w-full p-4 rounded-lg bg-[#0f172a] text-white outline-none"
      />

      <select
        value={format}
        onChange={(e) => setFormat(e.target.value)}
        className="w-full mt-4 p-4 rounded-lg bg-[#0f172a] text-white"
      >
        <option>One Line</option>
        <option>Short</option>
        <option>Detailed</option>
        <option>1 Page</option>
      </select>

<button
  onClick={handleGenerate}
  disabled={loading}
  className="w-full mt-6 bg-[#915EFF] text-white font-semibold py-4 rounded-lg flex items-center justify-center gap-2 disabled:opacity-50"
>
  {loading ? (
    <>
      <FaSpinner className="animate-spin" />
      Generating Notes...
    </>
  ) : (
    "Generate Notes"
  )}
</button>
    </div>
  );
}

export default TopicForm;