"use client";
import { useEffect, useRef } from "react";
import * as NGL from "ngl";

const Viewer = ({ pdbData }) => {
  const viewerContainer = useRef(null);
  const stageRef = useRef(null);

  useEffect(() => {
    if (!viewerContainer.current) return;

    if (!stageRef.current) {
      stageRef.current = new NGL.Stage(viewerContainer.current);
    }

    const stage = stageRef.current;
    stage.removeAllComponents();

    if (pdbData) {
      stage
        .loadFile(
          new Blob([pdbData], { type: "text/plain" }), // Create a Blob for the PDB data
          { ext: "pdb", defaultRepresentation: true } // Specify the extension explicitly
        )
        .catch(console.error);
    }

    const handleResize = () => stage.handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [pdbData]);

  return (
    <div
      ref={viewerContainer}
      className="w-full h-[500px] rounded-lg border border-gray-300"></div>
  );
};

export default Viewer;
