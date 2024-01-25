import "./index.css";
import Heading from "../heading";
import Box from "../box";
import { Fragment } from "react";

export default function GuestReviews({ title, reviews }) {
  return (
    <div>
      <div className="guest__block">
        <Heading>{title}</Heading>

        <div className="guest__list">
          {reviews.map(({ id, ...rest }) => (
            <Fragment key={id}>
              <Item {...rest} />
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

function Item({ id, guestName, rating, review }) {
  return (
    <Box className="guest">
      <span className="guest__title">{guestName}</span>
      <span className="guest__">Рейтинг: {rating}</span>
      <span className="guest__review">{review}</span>
    </Box>
  );
}
