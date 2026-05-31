const BLOBS = [
  { size: 320, top: "5%",  left: "75%",  color: "#fbd0e0", duration: "18s" },
  { size: 260, top: "60%", left: "5%",   color: "#d8b4e2", duration: "22s" },
  { size: 200, top: "35%", left: "45%",  color: "#b4ddd4", duration: "26s" },
  { size: 180, top: "80%", left: "70%",  color: "#f4c09a", duration: "20s" },
  { size: 140, top: "15%", left: "20%",  color: "#f8e4a0", duration: "30s" },
];

export default function FloatingBlobs() {
  return (
    <div className="blobs" aria-hidden="true">
      {BLOBS.map((b, i) => (
        <div
          key={i}
          className="blob"
          style={{
            width:  b.size,
            height: b.size,
            top:    b.top,
            left:   b.left,
            background: b.color,
            animationDuration: b.duration,
            animationDelay: `${i * 1.5}s`,
          }}
        />
      ))}
    </div>
  );
}