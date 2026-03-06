import MapView from "../component/map/MapView"

export default function Explore() {

  return (
    <div className="pb-24">

      <div className="p-6">

        <h1 className="text-2xl font-bold mb-6">
          Explore
        </h1>

        <MapView places={[]}/>

      </div>

    

    </div>
  )
}