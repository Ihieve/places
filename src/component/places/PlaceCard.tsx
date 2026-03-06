
import { MapPin } from "lucide-react";

interface PlaceCardProps {
  title: string;
  location: string;
  price: string;
  image: string; // URL or public folder path
  beds: number;
  baths: number;
}

export default function PlaceCard({
  title,
  location,
  price,
  image,
  beds,
  baths,
}: PlaceCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition">
      {/* Image */}
      

      {/* Content */}
      <div className="p-4 space-y-2">
        <h3 className="font-semibold text-lg">{title}</h3>

        <div className="flex items-center text-gray-500 text-sm">
          <MapPin size={16} className="mr-1" />
          {location}
        </div>

        <div className="flex justify-between items-center mt-3">
          <span className="text-orange-600 font-bold text-lg">{price}</span>
          <span className="text-sm text-gray-500">
            {beds} beds • {baths} baths
          </span>
        </div>
      </div>
    </div>
  );
}