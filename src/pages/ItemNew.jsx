import { useCallback, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setMobile } from "../redux/reducer";

function ItemNew() {
  const [info, setInfo] = useState({
    thumbnail: "",
    name: "",
    ram: "",
    rom: "",
    rc: "",
    fc: "",
    sc: "",
    price: "",
  });

  const thumbnailInputRef = useRef();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onInputChange = useCallback((e) => {
    setInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }, []);

  const onUploadThumbnail = useCallback((e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = ({ target }) => {
      setInfo((prev) => ({ ...prev, thumbnail: target.result }));
    };
    reader.readAsDataURL(file);
  }, []);

  const onAdd = () => {
    dispatch(setMobile(info));
    navigate("/home", { replace: true });
  };

  return (
    <div className="wrapper flex flex-col items-center justify-center">
      <div
        className="border rounded-full w-32 h-32 mb-4 cursor-pointer"
        onClick={() => thumbnailInputRef.current?.click()}
      >
        <input
          type="file"
          hidden
          ref={thumbnailInputRef}
          accept="image/*"
          onChange={onUploadThumbnail}
        />
        <img
          src={info.thumbnail ? info.thumbnail : "/images/noThumbnail.png"}
          alt="Mobile-Thumbnail"
          className="rounded-full w-full h-full"
        />
      </div>
      <input
        type={"text"}
        placeholder="Name"
        className="input"
        autoFocus
        name="name"
        value={info.name}
        onChange={onInputChange}
      />
      <input
        type={"text"}
        placeholder="RAM (GB)"
        className="input"
        name="ram"
        value={info.ram}
        onChange={onInputChange}
      />
      <input
        type={"text"}
        placeholder="ROM (MB)"
        className="input"
        name="rom"
        value={info.rom}
        onChange={onInputChange}
      />
      <input
        type={"text"}
        placeholder="Rear Camera (MP)"
        className="input"
        name="rc"
        value={info.rc}
        onChange={onInputChange}
      />
      <input
        type={"text"}
        placeholder="Front Camera (MP)"
        className="input"
        name="fc"
        value={info.fc}
        onChange={onInputChange}
      />
      <input
        type={"text"}
        placeholder="Screen Size (in)"
        className="input"
        name="sc"
        value={info.sc}
        onChange={onInputChange}
      />
      <input
        type={"text"}
        placeholder="₹ Price"
        className="input"
        name="price"
        value={info.price}
        onChange={onInputChange}
      />
      <div className="w-1/2 p-2">
        <button
          onClick={onAdd}
          className="button mr-2 border-green-500 text-green-500"
        >
          Add
        </button>
        <Link
          to={"/home"}
          replace
          className="button border-red-500 text-red-500"
        >
          Cancel
        </Link>
      </div>
    </div>
  );
}

export default ItemNew;
