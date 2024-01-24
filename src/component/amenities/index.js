import Heading from "../heading";
import ListItem from "../list-item";
import Box from "../box";
import "./index.css";

export default function Amenities({
  title,
  hasPool,
  hasGym,
  hasFreeBreakfast,
  hasFreeWiFi,
  hasParking,
  hasPetsAllowed,
  hasAirportShuttle,
  hasConciergeService,
  hasRoomService,
  hasChildFriendly,
}) {
  return (
    <Box className="amenities">
      <Heading>{title}</Heading>
      <ul className="amenities__list">
        <ListItem></ListItem>
      </ul>
    </Box>
  );
}
