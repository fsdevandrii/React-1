import "./index.css";
import Heading from "../heading";
import Photo from "../photo";

export default function ContactInfo({
  name,
  image,
  response_rate,
  response_time,
  info,
  phone,
}) {
  return (
    <div className="contactinfo__wrap">
      <div className="contactinfo">
        <Photo src={image} frame />
        <div className="contactinfo__user">
          <Heading>Господар - {name}</Heading>
          <div className="contactinfo__user-block">
            <span className="contactinfo__user-value">{phone}</span>
            <span className="contactinfo__user-value">{response_time}</span>
            <span className="contactinfo__user-value">{response_rate}</span>
          </div>
        </div>
      </div>
      <div className="contactinfo__info">{info}</div>
    </div>
  );
}
