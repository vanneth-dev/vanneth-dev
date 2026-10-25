import React from "react";

const HomeLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <style>
        {`
          * {
            transition: all 0.3s ease;
          }

          ::selection {
            background: rgba(255, 255, 255, 0.2);
            color: white;
          }
        `}
      </style>
      <div>{children}</div>
    </>
  );
};

export default HomeLayout;
