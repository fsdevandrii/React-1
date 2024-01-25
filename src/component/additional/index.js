import "./index.css";
import Box from "../box";
import Heading from "../heading";
import ListItem from "../list-item";

export default function Additional({
  title,
  house,
  cancellation,
  local,
  host,
  special,
}) {
  return (
    <Box className="additional">
      <Heading>{title}</Heading>
      <ul className="additional__list">
        <ListItem title="Правила дому">{house}</ListItem>
        <ListItem title="Політика скасування">{cancellation}</ListItem>
        <ListItem title="Місцевий транспорт">{local}</ListItem>
        <ListItem title="Мови хоста">{host}</ListItem>
        <ListItem title="Спеціальні пропозиції:">{special}</ListItem>
      </ul>
    </Box>
  );
}
