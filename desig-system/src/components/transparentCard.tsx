import React from "react";

function TCard({
  nStep,
  title,
  context,
}: {
  nStep: string;
  title: string;
  context: string;
}) {
  return (
    <div className="flex flex-col items-start text-center max-w-xs">
      <span className="text-4xl font-bold mb-4">{nStep}</span>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-500">{context}</p>
    </div>
  );
}
export default TCard;
