
import PlaceCard from "../component/places/PlaceCard";

export default function Home() {

  return (
    <div className="pb-24">

      <div className="p-6">

        <h1 className="text-2xl font-bold mb-6">
          Hello 👋
        </h1>

        <input
          placeholder="Search parks, trails..."
          className="w-full border rounded-lg px-4 py-3 mb-6"
        />

        <h2 className="font-semibold mb-3">
          Categories
        </h2>

        <div className="flex gap-3 mb-8">

          <span className="px-4 py-2 bg-green-100 rounded-full">
            Parks
          </span>

          <span className="px-4 py-2 bg-green-100 rounded-full">
            Beaches
          </span>

          <span className="px-4 py-2 bg-green-100 rounded-full">
            Trails
          </span>

        </div>

        <h2 className="font-semibold mb-4">
          Popular Nearby
        </h2>

        <div className="grid gap-4">
          <PlaceCard title={""} location={""} price={""} image={""} beds={0} baths={0}/>
          <PlaceCard title={""} location={""} price={""} image={""} beds={0} baths={0}/>
        </div>

      </div>

    

    </div>
  )
}