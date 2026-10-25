import React from "react";

const Blocked: React.FC = () => (
  <div
    style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      background: "#f5f6fa",
      color: "#333",
      padding: "24px",
    }}
  >
    <div
      style={{
        background: "#fff",
        borderRadius: "24px",
        boxShadow: "0 8px 32px rgba(44,62,80,0.07)",
        padding: "48px 32px",
        textAlign: "center",
        maxWidth: "400px",
        width: "100%",
      }}
    >
      <div style={{ fontSize: "64px", marginBottom: "16px" }}>🚫</div>
      <h1 style={{ fontSize: "2rem", marginBottom: "12px" }}>Access Blocked</h1>
      <p style={{ fontSize: "1.1rem", lineHeight: "1.7" }}>
        For security reasons, your access to this site is temporarily
        restricted.
        <br />
        <br />
        If you believe this is a mistake, please contact support.
      </p>
      <div style={{ marginTop: "24px", fontSize: "0.9rem", color: "#888" }}>
        Error Code: <b>403</b>
      </div>
    </div>
  </div>
);

export default Blocked;
