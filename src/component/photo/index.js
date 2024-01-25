import "./index.css";

export default function Photo({ frame, src, name }) {
  return (
    <img src={src} alt={name} className={!frame ? "photo" : "photo__sm"} />
  );
}
