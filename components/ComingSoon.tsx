import Image from "next/image";
import React from "react";

export default function ComingSoon() {
  return (
    <div className="coming-soon-container">
      <div className="container mx-auto">
        <div className="flex justify-center flex-col items-center h-dvh gap-4">
          <Image
            src="/images/agg-logo.svg"
            alt="agg facilities management"
            height={1080}
            width={1920}
            className="logo"
          />
          <p className="font-bold">We are still</p>
          <h1 className="text-7xl font-bold" style={{ color: "#1176BB" }}>
            Cooking Our Website
          </h1>
          <p className="font-bold">
            We are going to launch our website very soon. Stay Tune
          </p>
        </div>
      </div>
    </div>
  );
}
