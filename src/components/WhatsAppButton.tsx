import React from "react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/41784004166" // Replace with your WhatsApp number
    target="_blank"
    rel="noopener noreferrer"
    style={{
      position: "fixed",
      bottom: "24px",
      right: "24px",
      zIndex: 1000,
      background: "#25D366",
      color: "white",
      borderRadius: "50%",
      width: "56px",
      height: "56px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
      fontSize: "32px",
      textDecoration: "none",
    }}
    aria-label="Contactez-nous sur WhatsApp"
  >
    <svg width="32" height="32" viewBox="0 0 32 32" fill="white">
      <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.832 4.584 2.236 6.364L4 29l7.818-2.05A11.94 11.94 0 0016 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-1.89 0-3.68-.52-5.207-1.42l-.37-.22-4.64 1.22 1.24-4.52-.24-.38A9.94 9.94 0 016 15c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.07-7.75c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.43-2.25-1.37-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.62-.47-.16-.01-.36-.01-.56-.01-.19 0-.5.07-.76.34-.26.27-1 1-.99 2.43.01 1.43 1.03 2.81 1.18 3.01.15.2 2.03 3.1 4.93 4.22.69.24 1.23.38 1.65.49.69.18 1.32.16 1.82.1.56-.07 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z"/>
    </svg>
  </a>
);

export default WhatsAppButton; 