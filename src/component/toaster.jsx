import React from "react";
import { Toaster } from "react-hot-toast";

const AppToaster = () => {
  return (
    <Toaster
      position="top-right"
      reverseOrder={false}
      containerStyle={{ zIndex: 999999 }}
      toastOptions={{
        duration: 3500,
        style: {
          fontWeight: "700",
          borderRadius: "14px",
          padding: "12px 16px",
        },
      }}
    />
  );
};

export default AppToaster;
