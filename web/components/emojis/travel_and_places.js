import { useState, useEffect } from "react";
import { Box } from "../utilities/box";
const API =
  "https://api.github.com/repos/Tarikul-Islam-Anik/Microsoft-Teams-Animated-Emojis/contents/Emojis/Travel%20and%20places";

const fetchItems = async () => {
  const response = await fetch(API);
  const data = await response.json();
  return data;
};
export const TravelAndPlaces = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetchItems().then(
      (data) => {
        setItems(
          data.map((item) => [item.download_url, item.name.replace(".png", "")])
        );
      }
    );
  }, []);

  return items.map(([url, name]) => <Box key={name} url={url} alt={name} />);
};
