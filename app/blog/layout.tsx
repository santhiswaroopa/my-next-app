import Link from "next/link";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: "flex" }}>
      {/* Sidebar Menu */}
      <aside style={{ width: "200px", padding: "10px" }}>
        <h3>Courses</h3>
        <ul>
          <li><Link href="/blog/genai">GenAI</Link></li>
          <li><Link href="/blog/python">Python</Link></li>
          <li><Link href="/blog/data-science">Data Science</Link></li>
          <li><Link href="/blog/java">Java</Link></li>
        </ul>
      </aside>

      {/* Page Content */}
      <main style={{ padding: "10px" }}>
        {children}
      </main>
    </div>
  );
}
