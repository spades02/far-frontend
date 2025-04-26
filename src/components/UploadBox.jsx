import { UploadCloud, CheckCircle, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useEffect, useRef, useState } from "react";

export function UploadBox({ label, accept = "*", field }) {
  const wrapperRef = useRef(null);
  const actualInputRef = useRef(null);
  const [fileName, setFileName] = useState(null);
  const [uploaded, setUploaded] = useState(false);

  useEffect(() => {
    const nativeInput = wrapperRef.current?.querySelector("input[type='file']");
    if (nativeInput) {
      actualInputRef.current = nativeInput;

      nativeInput.addEventListener("change", (e) => {
        const file = e.target.files[0];
        if (file) {
          setFileName(file.name);
          setUploaded(true);
          field.onChange(e.target.files); // send files to react-hook-form
        }
      });
    }
  }, [field]);

  const handleRemove = () => {
    if (actualInputRef.current) {
      actualInputRef.current.value = "";
    }
    setFileName(null);
    setUploaded(false);
    field.onChange(undefined); // reset in form
  };

  return (
    <div className="text-center space-y-2 w-42 md:w-1/3 lg:w-1/4">
      <div
        onClick={() => !uploaded && actualInputRef.current?.click()}
        className={`border-2 border-dashed rounded-xl p-6 cursor-pointer hover:bg-gray-50 transition ${
          uploaded ? "bg-green-50 border-green-400" : ""
        }`}
      >
        {uploaded ? (
          <CheckCircle className="mx-auto h-8 w-8 text-green-500" />
        ) : (
          <UploadCloud className="mx-auto h-8 w-8 text-gray-500" />
        )}

        <p className="text-sm mt-2 text-gray-600">{label}</p>

        <div ref={wrapperRef} className="hidden">
          <Input type="file" accept={accept} ref={field.ref} />
        </div>
      </div>

      {fileName && (
        <div className="flex items-center justify-center gap-2 text-sm text-green-700">
          <span>
            <strong>{fileName}</strong>
          </span>
          <button
            type="button"
            onClick={handleRemove}
            className="text-red-500 hover:text-red-700"
            title="Remove file"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
}
