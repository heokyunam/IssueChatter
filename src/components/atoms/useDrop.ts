import React from "react";
import { useState, useEffect } from "react";

interface useDropParams {
    ref: React.RefObject<HTMLDivElement>,
    onDrop(id:string): void
}

const useDrop = ({ ref, onDrop }: useDropParams) => {
  const [dropState, updateDropState] = useState("droppable");
  const dropOverCb = (ev:DragEvent) => {
    ev.preventDefault();
    updateDropState("dragging over");
  };

  const dropCb = (ev:DragEvent) => {
    ev.preventDefault();

    if(ev.dataTransfer != null) {
        onDrop(ev.dataTransfer.getData("id"));
    }

    updateDropState("dropped");
  };
  useEffect(() => {
    const elem = ref.current;
    if (elem) {
      elem.addEventListener("dragover", dropOverCb);
      elem.addEventListener("drop", dropCb);
      return () => {
        elem.removeEventListener("dragover", dropOverCb);
        elem.removeEventListener("drop", dropCb);
      };
    }
  });
  return {
    dropState
  };
};

export default useDrop;
