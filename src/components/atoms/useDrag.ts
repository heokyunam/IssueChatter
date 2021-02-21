import { useState, useCallback, useEffect, useRef } from "react";

interface useDragParams {
    id: string,
    effect: "none" | "copy" | "link" | "move",
    ref: React.RefObject<HTMLDivElement>,
    onDragStart(e:DragEvent): void,
    onDragOver(e:DragEvent): void,
    onDragEnd(e:DragEvent): void,
}

const useDrag = ({ id, effect, ref, onDragStart, onDragOver, onDragEnd }: useDragParams) => {
  const [dragState, updateDragState] = useState("draggable");
  const dragStartCb = (e:DragEvent) => {
    updateDragState("dragStart");
    if(e.dataTransfer != null) {
        e.dataTransfer.dropEffect = effect;
        e.dataTransfer.setData("id", id);
    }
    onDragStart && onDragStart(e);
  };
  const dragOverCb = (e:DragEvent) => {
    updateDragState("dragging");
    onDragOver && onDragOver(e);
  };

  const dragEndCb = (e:DragEvent) => {
    updateDragState("draggable");
    // if (effect === "move") {
    //   updateDragState("moved");
    // }
    onDragEnd && onDragEnd(e);
  };
  useEffect(() => {
    const elem = ref.current;
    if (elem) {
      elem.setAttribute("draggable", "true");
      elem.addEventListener("dragstart", dragStartCb);
      elem.addEventListener("dragover", dragOverCb);
      elem.addEventListener("dragend", dragEndCb);
      return () => {
        elem.removeEventListener("dragstart", dragStartCb);
        elem.removeEventListener("dragover", dragOverCb);
        elem.removeEventListener("dragend", dragEndCb);
      };
    }
  }, []);
  return {
    dragState: dragState
  };
};

export default useDrag;
