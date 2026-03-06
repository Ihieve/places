import { useNavigate } from "react-router-dom"

export default function Onboarding() {

  const navigate = useNavigate()

  return (
    <div className="flex flex-col justify-center items-center h-screen px-6 text-center">

      <h2 className="text-3xl font-bold mb-4">
        Discover beautiful parks near you
      </h2>

      <p className="text-gray-600 mb-10">
        Find recreational centers and outdoor activities around your location.
      </p>

      <button
        onClick={() => navigate("/home")}
        className="btn-primary"
      >
        Enable Location
      </button>

    </div>
  )
}