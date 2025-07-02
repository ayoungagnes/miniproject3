import EachRoom from "./EachRoom";
import { Box } from "@mui/material";
import useRoomsFetching from "../hooks/useRoomsFetching";
import { useEffect, useState } from "react";

function EscapeRooms() {
  const { rooms } = useRoomsFetching(
    "http://localhost:8080/api/rooms"
  );
  const [currentRooms, setCurrentRooms] = useState([]);

  useEffect(() => {
    if (rooms.length > 0) {
      setCurrentRooms(rooms);
    }
  }, [rooms]);

  function handleSortByTheme(e) {
    const selectedTheme = e.target.value;
    if (selectedTheme == "all") {
      setCurrentRooms(rooms);
    } else {
      const filtered = rooms.filter((room) => room.theme == selectedTheme);
      setCurrentRooms(filtered);
    }
  }

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          textAlign: "center",
          gap: "5px",
        }}
      >
        <label htmlFor="theme">Sort by theme</label>
        <select name="title" id="theme" onChange={handleSortByTheme}>
          <option value="all">All</option>
          <option value="horror">Horror</option>
          <option value="fantasy">Fantasy</option>
          <option value="adventure">Adventure</option>
        </select>
      </Box>
      <ul style={{ listStyleType: "none" }}>
        {currentRooms.map((room) => (
          <li key={room.id}>
            <EachRoom
              title={room.title}
              imgURL={room.imgURL}
              theme={room.theme}
            ></EachRoom>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default EscapeRooms;
