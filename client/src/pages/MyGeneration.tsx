import { useState } from "react";
import SoftBackdrop from "../components/SoftBackdrop";

const MyGeneration = () => {
  const [thumbnails, setThumbnail] = useState([]);

  return (
    <>
      <SoftBackdrop />

      <div className="mt-32 min-h-screen px-6 md:px-16 lg:px-24 xl:px-32">
        {/* HEADER */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-zinc-200">
            My Generations
          </h1>
          <p className="text-sm text-zinc-400 mt-1">
            View and manage all your AI-generated thumbnails
          </p>
        </div>
      </div>
    </>
  );
};

export default MyGeneration;
