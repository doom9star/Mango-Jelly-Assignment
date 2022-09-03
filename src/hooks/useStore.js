import { useSelector } from "react-redux";

function useStore() {
  const store = useSelector((store) => store);
  return store;
}

export default useStore;
