function FlashcardCard({ flashcards }) {
  return (
    <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl w-full max-w-3xl mt-8">
      <h2 className="text-2xl font-bold text-white mb-4">
        🃏 AI Flashcards
      </h2>

      <pre className="text-gray-300 whitespace-pre-wrap">
        {flashcards}
      </pre>
    </div>
  );
}

export default FlashcardCard;