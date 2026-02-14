"use client";

import React, { useState } from "react";


export default function Formdemo() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");

  const [nameError, setNameError] = useState("");
  const [mobileError, setMobileError] = useState("");

  const validateForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let isValid = true;

    if (name.trim() === "") {
      setNameError("Name is required");
      isValid = false;
    } else {
      setNameError("");
    }

    const pattern = /^[0-9]{10}$/;
    if (!pattern.test(mobile)) {
      setMobileError("Enter valid 10-digit number");
      isValid = false;
    } else {
      setMobileError("");
    }

    if (isValid) {
      alert("Form submitted successfully");
    }
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f3f4f6",
      }}
    >
      <form
        onSubmit={validateForm}
        style={{
          backgroundColor: "#fff",
          padding: "25px",
          width: "320px",
          borderRadius: "8px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "15px" }}>
          Form Validation
        </h2>

        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{
            width: "100%",
            padding: "8px",
            marginBottom: "5px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
        <p style={{ color: "red", fontSize: "12px" }}>{nameError}</p>

        <input
          type="text"
          placeholder="Enter Mobile"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          style={{
            width: "100%",
            padding: "8px",
            marginTop: "10px",
            marginBottom: "5px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
        <p style={{ color: "red", fontSize: "12px" }}>{mobileError}</p>

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "15px",
            backgroundColor: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </form>
    </main>
  );
}
