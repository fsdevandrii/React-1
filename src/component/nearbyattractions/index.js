import "./index.css";
import Heading from "../heading";
import Box from "../box";
import ListItem from "../list-item";

export default function NearbyAttractions({ title, attractions }) {
  return (
    <Box>
      <div className="attrack__block">
        <Heading>{title}</Heading>

        {attractions.map((attractions) => (
          <ul key={attractions.id}>
            <ListItem>
              <a className="attractions__link" href={attractions.link}>
                {attractions.name}
              </a>
            </ListItem>
          </ul>
        ))}
      </div>
    </Box>
  );
}
