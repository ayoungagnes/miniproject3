import { useEffect, useState } from "react";

function useRoomsFetching(url) {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        console.log("Fetching from URL:", url);

        const res = await fetch(url);
        if (!res.ok) throw new Error(`HTTP error: ${res.status}`);

        const data = await res.json();

        setRooms(data.data);
      } catch (err) {
        console.error("Fetch error:", err);
        setError("Failed to load rooms.");
      } finally {
        setLoading(false);
      }
    };

    fetchRooms();
  }, [url]);

  return { rooms, loading, error };
}

export default useRoomsFetching;
