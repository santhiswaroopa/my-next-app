import Link from "next/link";

export default function BlogHome() {
  return (
    <div style={{ textAlign: "center", marginTop: "80px" }}>
      <h1 style={{ marginBottom: "20px" }}>Blog</h1>

      <Link
        href="/blog2/courses"
        style={{
          padding: "10px 20px",
          background: "#16a34a",
          color: "white",
          textDecoration: "none",
          borderRadius: "6px",
        }}
      >
        View Courses
      </Link>
    </div>
  );
}