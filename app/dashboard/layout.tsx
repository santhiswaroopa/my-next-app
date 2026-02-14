"use client";

import Link from "next/link";
import { useState } from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  // All closed by default
  const [openProducts, setOpenProducts] = useState(false);
  const [openElectronics, setOpenElectronics] = useState(false);
  const [openFurniture, setOpenFurniture] = useState(false);

  const [openBooks, setOpenBooks] = useState(false);
  const [openTechBooks, setOpenTechBooks] = useState(false);
  const [openKidsBooks, setOpenKidsBooks] = useState(false);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const closeSidebar = () => setIsSidebarOpen(false);




  return (
   <div className="dashboard-wrapper">


      {/* Sidebar */}
      <aside
  className={`sidebar ${isSidebarOpen ? "open" : ""}`}
>

        <h2>Main menu </h2>

        {/* Products */}
        <div>
          <h4 onClick={() => setOpenProducts(!openProducts)} style={menuTitle}>
            Products
          </h4>

          {openProducts && (
            <div style={{ marginLeft: "15px" }}>

              <h5 onClick={() => setOpenElectronics(!openElectronics)} style={subMenuTitle}>
                Electronics
              </h5>

              {openElectronics && (
                <div style={{ marginLeft: "15px" }}>
                  <Link href="/dashboard/products/electronics/tv" onClick={closeSidebar}>TV</Link>
                  <br />
                  <Link href="/dashboard/products/electronics/mobile" onClick={closeSidebar}>Mobile</Link>
                </div>
              )}

              <h5 onClick={() => setOpenFurniture(!openFurniture)} style={subMenuTitle}>
                Furniture
              </h5>

              {openFurniture && (
                <div style={{ marginLeft: "15px" }}>
                  <Link href="/dashboard/products/furniture/computer-tables" onClick={closeSidebar}>
                    Computer Tables
                  </Link>
                  <br />
                  <Link href="/dashboard/products/furniture/dining-tables" onClick={closeSidebar}>
                    Dining Tables
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>

        
        {/* Books */}
<div>
  <h4 onClick={() => setOpenBooks(!openBooks)} style={menuTitle}>
    Books
  </h4>

  {openBooks && (
    <div style={{ marginLeft: "15px" }}>

      <h5 onClick={() => setOpenTechBooks(!openTechBooks)} style={subMenuTitle}>
        Technology Books
      </h5>

      {openTechBooks && (
        <div style={{ marginLeft: "15px" }}>
          <Link href="/dashboard/books/technology-books/programming" onClick={closeSidebar}>
            Programming
          </Link>
          <br />
          <Link href="/dashboard/books/technology-books/ai-data-science" onClick={closeSidebar}>
            AI & Data Science
          </Link>
        </div>
      )}

      <h5 onClick={() => setOpenKidsBooks(!openKidsBooks)} style={subMenuTitle}>
        Kids Books
      </h5>

      {openKidsBooks && (
        <div style={{ marginLeft: "15px" }}>
          <Link href="/dashboard/books/kids-books/story-books" onClick={closeSidebar}>
            Story Books
          </Link>
          <br />
          <Link href="/dashboard/books/kids-books/activity-books" onClick={closeSidebar}>
            Activity Books
          </Link>
        </div>
      )}

    </div>
  )}
</div>
</aside>

      {/* Content */}
      <div className="dashboard-content">

        <header style={headerStyle}>
  <button
    className="menu-btn"
    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
  >
    ☰
  </button>
  <h3>Store Management System</h3>
</header>


        <main style={{ flex: 1, padding: "20px" }}>
          {children}
        </main>

        <footer style={footerStyle}>
          © 2026 My Store
        </footer>
      </div>
    </div>
  );
}

const sidebarStyle = {
  width: "250px",
  backgroundColor: "#1e293b",
  color: "white",
  padding: "20px",
  display: "flex",
  flexDirection: "column" as const,
  gap: "10px",
};

const headerStyle = {
  padding: "15px",
  backgroundColor: "#0f172a",
  color: "white",
  fontWeight: "600",
  display: "flex",
  alignItems: "center",
  gap: "15px",
};

const footerStyle = {
  padding: "12px",
  backgroundColor: "#0f172a",
  color: "white",
  textAlign: "center" as const,
};


const menuTitle = {
  cursor: "pointer",
};

const subMenuTitle = {
  cursor: "pointer",
};