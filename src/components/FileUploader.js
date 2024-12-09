"use client"
const Uploader = ({ onUpload }) => {
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        onUpload(e.target.result); // Pass PDB data to parent
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="mb-4">
      <label
        htmlFor="file-upload"
        className="inline-block px-4 py-2 bg-blue-500 text-white rounded-lg cursor-pointer hover:bg-blue-600">
        Upload PDB File
      </label>
      <input
        id="file-upload"
        type="file"
        accept=".pdb"
        className="hidden"
        onChange={handleFileUpload}
      />
    </div>
  );
};

export default Uploader;
