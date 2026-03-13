import { useReducer, useState, useCallback, useMemo } from "react";
import useFetchPhotos from "../hooks/useFetchPhotos";
import PhotoCard from "./PhotoCard";
import { favouritesReducer, initialState } from "../reducer/favouritesReducer";

export default function Gallery() {
  const { photos, loading, error } = useFetchPhotos();

  const [search, setSearch] = useState("");

  const [state, dispatch] = useReducer(favouritesReducer, initialState);

  const handleSearch = useCallback((e) => {
    setSearch(e.target.value);
  }, []);

  const filteredPhotos = useMemo(() => {
    return photos.filter((photo) =>
      photo.author.toLowerCase().includes(search.toLowerCase())
    );
  }, [photos, search]);

  const toggleFav = (id) => {
    dispatch({ type: "TOGGLE_FAV", payload: id });
  };

  if (loading)
    return (
      <div className="flex justify-center mt-20">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
      </div>
    );

  if (error)
    return <p className="text-center text-red-500">{error}</p>;

  return (
    <div>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search by author..."
        className="border rounded-lg p-3 mb-8 w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        value={search}
        onChange={handleSearch}
      />

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        {filteredPhotos.map((photo) => (
          <PhotoCard
            key={photo.id}
            photo={photo}
            isFav={state.favourites.includes(photo.id)}
            toggleFav={toggleFav}
          />
        ))}

      </div>

    </div>
  );
}