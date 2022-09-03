import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import useStore from "../hooks/useStore";
import formatPrice from "../utils/formatPrice";
import { deleteMobile } from "../redux/reducer";

function ItemDetail() {
  const store = useStore();
  const { id } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const mobile = useMemo(() => {
    return store.mobiles.find((m) => m.id === id);
  }, [id, store]);

  const onDelete = () => {
    dispatch(deleteMobile(id));
    navigate("/home", { replace: true });
  };

  return (
    <div className="wrapper flex items-center justify-around">
      <img
        src={mobile.thumbnail ? mobile.thumbnail : "/images/noThumbnail.png"}
        alt="Mobile-Thumbnail"
        className="border w-96"
      />
      <div className="flex flex-col">
        <span className="text-3xl mb-2">{mobile.name}</span>
        <span className="text-sm text-gray-500 mb-10">
          ₹ {formatPrice(mobile.price)}
        </span>
        <div className="flex justify-between w-80 text-xs mb-2">
          <span>RAM</span>
          <span className="font-bold">{mobile.ram} GB</span>
        </div>
        <div className="flex justify-between w-80 text-xs mb-2">
          <span>ROM</span>
          <span className="font-bold">{mobile.rom} MB</span>
        </div>
        <div className="flex justify-between w-80 text-xs mb-2">
          <span>Rear Camera</span>
          <span className="font-bold">{mobile.rc} MP</span>
        </div>
        <div className="flex justify-between w-80 text-xs mb-2">
          <span>Front Camera</span>
          <span className="font-bold">{mobile.fc} MP</span>
        </div>
        <div className="flex justify-between w-80 text-xs mb-2">
          <span>Screen Size</span>
          <span className="font-bold">{mobile.sc} inches</span>
        </div>
        <div className="mt-10">
          <button className="button border-green-500 text-green-500 mr-2">
            Order
          </button>
          <Link
            to={`/item/${id}/edit`}
            className="button border-blue-500 text-blue-500 mr-2"
          >
            Edit
          </Link>
          <button
            className="button border-red-500 text-red-500 mr-2"
            onClick={onDelete}
          >
            Delete
          </button>
          <Link to={"/home"} replace className="button">
            Back
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
