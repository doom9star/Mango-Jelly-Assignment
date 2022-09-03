import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setName } from "../redux/reducer";

function Index() {
  const [uname, setUName] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onJoin = () => {
    dispatch(setName(uname));
    navigate("/home", { replace: true });
  };

  return (
    <div className="wrapper flex">
      <div className="w-1/2">
        <img src="/images/logo.png" alt="MangoJelly-Logo" className="h-full" />
      </div>
      <div className="w-1/2 flex flex-col justify-center items-center">
        <div className="flex flex-col w-3/4">
          <span
            className="text-lg text-gray-700 mb-4 ml-4"
            style={{ fontFamily: "cursive", wordSpacing: "0.2rem" }}
          >
            What's your name?
          </span>
          <input
            type={"text"}
            placeholder="Name"
            required
            autoFocus
            className="input w-full"
            value={uname}
            onChange={(e) => setUName(e.target.value)}
            style={{ fontFamily: "cursive" }}
          />
          <button
            type="button"
            className="button self-end mt-4"
            onClick={onJoin}
          >
            Join
          </button>
        </div>
      </div>
    </div>
  );
}

export default Index;
