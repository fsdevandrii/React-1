import Heading from "../heading";
import ListItem from "../list-item";
import Box from "../box";
import "./index.css";

import airplan from "./airplan.svg";
import baby from "./baby.svg";
import breackfast from "./breackfast.svg";
import car from "./car.svg";
import group from "./group.svg";
import gym from "./gym.svg";
import meeting from "./meeting.svg";
import petpaw from "./petpaw.svg";
import swim from "./swim.svg";
import wifi from "./wifi.svg";

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
        {hasAirportShuttle && (
          <ListItem imageSrc={airplan}>Трансфер до/з аеропорту</ListItem>
        )}
        {hasChildFriendly && (
          <ListItem imageSrc={baby}>Підходить для дітей</ListItem>
        )}

        {hasFreeBreakfast && (
          <ListItem imageSrc={breackfast}>Безкоштовний сніданок</ListItem>
        )}
        {hasParking && (
          <ListItem imageSrc={car}>Безкоштовний вуличний паркінг</ListItem>
        )}
        {hasConciergeService && (
          <ListItem imageSrc={group}>Консьєрж-сервіс</ListItem>
        )}

        {hasGym && <ListItem imageSrc={gym}>Спортивний зал</ListItem>}

        {hasRoomService && (
          <ListItem imageSrc={meeting}>Обслуговування номерів</ListItem>
        )}

        {hasPetsAllowed && (
          <ListItem imageSrc={petpaw}>
            Дозволено розміщення з домашніми тваринами
          </ListItem>
        )}

        {hasPool && <ListItem imageSrc={swim}>Басейн</ListItem>}
        {hasFreeWiFi && <ListItem imageSrc={wifi}>Безкоштовний Wi-Fi</ListItem>}
      </ul>
    </Box>
  );
}
