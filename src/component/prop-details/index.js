import Heading from "../heading";
import ListItem from "../list-item";
import Box from "../box";
import "./index.css";

export default function Property({ title, guests, bedrooms, beds, baths }) {
  return (
    <Box className="property">
      <Heading>{title}</Heading>
      <ul className="property__list">
        <ListItem imageSrc={"./guest.svg"}>
          {guests}
          <span>гості</span>
        </ListItem>
        <ListItem imageSrc={"./badroom.svg"}>
          {bedrooms}
          <span>спальня</span>
        </ListItem>
        <ListItem imageSrc={"./bad.svg"}>
          {beds}
          <span>ліжко</span>
        </ListItem>
        <ListItem imageSrc={"./bathroom.svg"}>
          {baths}
          <span>ванна кімната</span>
        </ListItem>
      </ul>
    </Box>
  );
}
