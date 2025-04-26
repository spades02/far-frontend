import React, { useRef, useState } from "react";

const FileUploadIconField = ({ label, name, accept, onFileChange }) => {
  const inputRef = useRef(null);
  const [fileName, setFileName] = useState(null);

  const handleImageClick = () => {
    inputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
      onFileChange(name, file);
    }
  };

  return (
    <div className="mb-6">
      <label className="block mb-2 font-semibold">{label}</label>
      <div
        onClick={handleImageClick}
        className="w-32 h-32 border-2 border-dashed rounded cursor-pointer flex items-center justify-center hover:bg-gray-50"
      >
        <img
          src="/upload-icon.png" // Replace this with your upload icon path
          alt="Upload"
          className="w-10 h-10 opacity-60"
        />
      </div>
      {fileName && <p className="text-sm mt-2 text-gray-700">{fileName}</p>}
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        name={name}
        onChange={handleFileChange}
        className="hidden"
      />
    </div>
  );
};

export default function UploadSection() {
  const [files, setFiles] = useState({});

  const handleFileChange = (fieldName, file) => {
    setFiles((prev) => ({ ...prev, [fieldName]: file }));
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
      <FileUploadIconField
        label="CV / Resume"
        name="resume"
        accept=".pdf,.jpg,.png"
        onFileChange={handleFileChange}
      />
      <FileUploadIconField
        label="Drug Screening"
        name="drugScreening"
        accept=".pdf,.jpg,.png"
        onFileChange={handleFileChange}
      />
      <FileUploadIconField
        label="Transcript"
        name="transcript"
        accept=".pdf,.jpg,.png"
        onFileChange={handleFileChange}
      />
    </div>
  );
}
