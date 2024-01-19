import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useRouter } from "next/router";

const Searchbar = () => {
  const [city, setCity] = useState("");
  const router = useRouter();

  return (
    <div className="flex gap-4">
      <input type="text" className="flex w-96 h-20 bg-teal-100 border-none outline-none rounded-full pl-10 text-gray-700 text-lg" placeholder="Search your city" value={city} onChange={(e) => setCity(e.target.value)} />
      <button className="flex justify-center items-center w-20 h-20 bg-teal-100 rounded-full cursor-pointer" onClick={() => router.push(`/weather-result/${city}`)}>
        <span>
          <FaSearch />
        </span>
      </button>
    </div>
  );
};

export default Searchbar;
