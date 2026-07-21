const BRANDS = [
  "Adani",
  "NDTV",
  "Swiggy",
  "Meesho",
  "Cars24",
  "Country Delight",
  "Kedarnath",
  "Revision",
];

export default function Marquee() {
  return (
    <div className="mq rv">
      <div className="mq-in">
        {[...BRANDS, ...BRANDS].map((b, i) => (
          <span key={`${b}-${i}`}>{b}</span>
        ))}
      </div>
    </div>
  );
}
