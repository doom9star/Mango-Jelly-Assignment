import Navbar from "../components/Navbar";
import useStore from "../hooks/useStore";
import ItemCard from "../components/ItemCard";
import { useEffect, useState } from "react";

function Home() {
  const store = useStore();

  const [sortOrder, setSortOrder] = useState("created at");
  const [mobiles, setMobiles] = useState([...store.mobiles]);
  const [view, setView] = useState("gallery");
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (sortOrder === "price(l)") {
      setMobiles((prev) => [
        ...prev.sort((m1, m2) => Number(m1.price) - Number(m2.price)),
      ]);
    } else if (sortOrder === "price(h)") {
      setMobiles((prev) => [
        ...prev.sort((m1, m2) => Number(m2.price) - Number(m1.price)),
      ]);
    } else {
      setMobiles((prev) => [
        ...prev.sort((m1, m2) => m2.createdAt - m1.createdAt),
      ]);
    }
  }, [sortOrder]);

  useEffect(() => {
    if (query.trim().length > 0) {
      setMobiles((prev) => [
        ...prev.filter((m) =>
          m.name.toLowerCase().includes(query.toLowerCase())
        ),
      ]);
    } else {
      setMobiles([...store.mobiles]);
    }
  }, [query, store.mobiles]);

  return (
    <div className="wrapper px-10">
      <Navbar />
      <div className="my-4 flex items-center">
        <div className="mr-10">
          <span className="mr-4 text-xs">View :</span>
          <select
            name="view"
            className="border px-4 py-2 text-xs outline-none"
            value={view}
            onChange={(e) => setView(e.target.value)}
          >
            <option value={"gallery"}>Gallery</option>
            <option value={"list"}>List</option>
          </select>
        </div>
        <div className="mr-10">
          <span className="mr-4 text-xs">Sort By :</span>
          <select
            name="sort-order"
            className="border px-4 py-2 text-xs outline-none"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value={"created at"}>Created At</option>
            <option value={"price(l)"}>Price (L)</option>
            <option value={"price(h)"}>Price (H)</option>
          </select>
        </div>
        <input
          type={"text"}
          placeholder="Search for Mobiles..."
          className="input mb-0"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div
        style={
          view === "gallery"
            ? {
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, 256px)",
                gridGap: "40px",
              }
            : {
                display: "flex",
                flexDirection: "column",
              }
        }
      >
        {mobiles.map((m) => (
          <ItemCard key={m.id} mobile={m} view={view} />
        ))}
      </div>
    </div>
  );
}

export default Home;
