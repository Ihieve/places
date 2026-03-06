export default function Reviews() {

  return (
    <div className="p-6">

      <h1 className="text-2xl font-bold mb-6">
        Leave Review
      </h1>

      <textarea
        className="w-full border rounded-lg p-3 mb-4"
        placeholder="Write your review"
      />

      <button className="btn-primary w-full">
        Submit Review
      </button>

    </div>
  )
}