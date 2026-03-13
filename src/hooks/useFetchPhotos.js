import { useEffect, useState } from "react";

export default function useFetchPhotos() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const res = await fetch("https://picsum.photos/v2/list?limit=30");

        if (!res.ok) {
          throw new Error("Failed to fetch photos");
        }

        const data = await res.json();
        setPhotos(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPhotos();
  }, []);

  return { photos, loading, error };
}