export default function PlaceDetails() {

  return (
    <div className="p-6">

      <img
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
        className="rounded-xl mb-6"
      />

      <h1 className="text-2xl font-bold mb-2">
        Greenwood Park
      </h1>

      <p className="text-gray-600 mb-6">
        Beautiful park with picnic areas and walking trails.
      </p>

      <button className="btn-primary w-full mb-3">
        Get Directions
      </button>

      <button className="btn-secondary w-full">
        Save
      </button>

    </div>
  )
}