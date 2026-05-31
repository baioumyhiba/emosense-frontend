export default function ConfidenceBar({ emotion, value, barClass, emoji }) {
  return (
    <div className="confidence-row">
      <span className="conf-label">
        {emoji} {emotion}
      </span>
      <div className="conf-bar-wrap">
        <div
          className={`conf-bar ${barClass}`}
          style={{ width: `${value}%` }}
        />
      </div>
      <span className="conf-pct">{value}%</span>
    </div>
  );
}