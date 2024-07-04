import React from "react";

function TemplateCard({ img, text }: { img: string; text: string }) {
  return (
    <div className="flex flex-col justify-center items-center mb-4 bg-white p-4 border rounded-lg ">
      <img src={img} className="w-16 mb-2"></img>
      <p className="text-lg">{text}</p>
    </div>
  );
}

export default TemplateCard;
