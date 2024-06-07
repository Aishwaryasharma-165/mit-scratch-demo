import React from "react";
import CatSprite from "./CatSprite";

export default function PreviewArea() {
  return (
    <div className="flex-none h-full overflow-y-auto p-2" style={{width:'100%'}}>
      <CatSprite />
    </div>
  );
}
