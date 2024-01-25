import Heading from "../heading";
import ListItem from "../list-item";
import Box from "../box";
import "./index.css";

import guest from "./guest.svg";
import badroom from "./badroom.svg";
import bathroom from "./bathroom.svg";
import bad from "./bad.svg";

export default function Property({ title, guests, bedrooms, beds, baths }) {
  return (
    <Box className="property">
      <Heading>{title}</Heading>
      <ul className="property__list">
        <ListItem imageSrc={guest}>
          {guests}
          <span>гості</span>
        </ListItem>
        <ListItem imageSrc={badroom}>
          {bedrooms}
          <span>спальня</span>
        </ListItem>
        <ListItem imageSrc={bad}>
          {beds}
          <span>ліжко</span>
        </ListItem>
        <ListItem imageSrc={bathroom}>
          {baths}
          <span>ванна кімната</span>
        </ListItem>
      </ul>
    </Box>
  );
}
