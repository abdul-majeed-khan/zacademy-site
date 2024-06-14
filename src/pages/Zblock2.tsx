// src/App.tsx
import React from "react";
import ZBlock2Modules from "../modules/Zblock2/zBlock2";
import Footer from "../modules/Footer";

export default function ZblockPage() {
  return (
    <>
      <div className="p-8 my-16 lg:mx-32">
        <ZBlock2Modules />
      </div>
      <Footer />
    </>
  );
}
