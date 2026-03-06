import { Link } from "react-router-dom"
import { Home, Compass, Heart, User } from "lucide-react"

export default function BottomNav() {

  return (
    <div className="fixed bottom-0 w-full bg-white border-t flex justify-around py-3">

      <Link to="/home"><Home/></Link>
      <Link to="/explore"><Compass/></Link>
      <Link to="/favorites"><Heart/></Link>
      <Link to="/profile"><User/></Link>

    </div>
  )
}