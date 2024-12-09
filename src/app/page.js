"use client";
import { useState } from "react";
import Head from "next/head";
import Uploader from "../components/FileUploader";
import Viewer from "../components/PdbViewer";
import NavigationMenu from "@/components/Nav";

export default function Home() {
  const [pdbData, setPdbData] = useState(null);

  return (
    <>
      <Head>
        <title>PDB Uploader and Viewer</title>
        <meta
          name="description"
          content="Upload and visualize PDB files using NGL in Next.js"
        />
      </Head>

      {/* Only purpose of this Nav is to utilise shadcn in the project */}
      <div className="flex bg-gray-900">
        <NavigationMenu />
      </div>

      <main className="min-h-screen bg-gray-900 text-white flex flex-col items-center pt-16">
        {/* Upload pdb file */}
        <div className="text-center mb-6">
          <h1 className="text-4xl font-semibold mb-4">PDB Uploader</h1>
          <Uploader onUpload={setPdbData} />
        </div>
        {/* Display uploaded file */}
        <div className="w-full px-6">
          {pdbData ? (
            <Viewer pdbData={pdbData} />
          ) : (
            <p className="text-gray-400 text-center">
              Please upload a PDB file to view its structure.
            </p>
          )}
        </div>
      </main>
    </>
  );
}
