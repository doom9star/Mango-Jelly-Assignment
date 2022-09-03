import { Link } from "react-router-dom";
import formatPrice from "../utils/formatPrice";

function ItemCard({ mobile, view }) {
  return view === "gallery" ? (
    <Link
      to={`/item/${mobile.id}`}
      className="flex flex-col w-64 border h-64 hover:bg-gray-50"
    >
      <img
        src={mobile.thumbnail ? mobile.thumbnail : "/images/noThumbnail.png"}
        alt="Mobile-Thumbnail"
        className="h-3/4"
      />
      <div className="h-1/4 flex justify-between items-center px-4">
        <span className="text-xs" style={{ fontFamily: "cursive" }}>
          {mobile.name}
        </span>
        <span className="text-xs">₹ {formatPrice(mobile.price)}</span>
      </div>
    </Link>
  ) : (
    <Link
      to={`/item/${mobile.id}`}
      className="w-full flex justify-between items-center mb-4 hover:bg-gray-50 py-2 px-4"
    >
      <div className="flex items-center">
        <img
          src={mobile.thumbnail ? mobile.thumbnail : "/images/noThumbnail.png"}
          alt="Mobile-Thumbnail"
          className="w-32 h-32 border rounded-full mr-4"
        />
        <span className="text-xs" style={{ fontFamily: "cursive" }}>
          {mobile.name}
        </span>
      </div>
      <span className="text-xs">₹ {formatPrice(mobile.price)}</span>
    </Link>
  );
}

export default ItemCard;
