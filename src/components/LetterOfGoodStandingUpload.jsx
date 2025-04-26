import { Controller } from "react-hook-form";
import { useRef, useState } from "react";
import { X } from "lucide-react";
import { Button } from "./ui/button";

export default function LetterOfGoodStandingUpload({ control }) {
  const fileInputRef = useRef(null);
  const [fileName, setFileName] = useState(null);

  return (
    <div className="border border-gray-300 rounded-md p-4 bg-white shadow-sm">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-2">
          <img src="/pdf-icon.svg" alt="PDF" className="w-6 h-6" />
          <h3 className="font-semibold text-sm md:text-base">
            Letter of Good Standing
          </h3>
        </div>

        <div className="flex items-center space-x-2">
          <Button
            type="button"
            className="bg-orange-100 text-orange-600 text-xs md:text-sm font-semibold px-3 py-1 rounded hover:bg-orange-200"
          >
            📄 Download Template
          </Button>

          <Controller
            control={control}
            name="letterOfGoodStanding"
            render={({ field, fieldState }) => (
              <div className="flex flex-col items-end">
                {/* Hidden Input */}
                <input
                  type="file"
                  accept=".pdf,.docx"
                  ref={fileInputRef}
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      setFileName(file.name);
                      field.onChange(e.target.files);
                    }
                  }}
                  className="hidden"
                />

                {/* Only show attach button if no file is selected */}
                {!fileName && (
                  <Button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="bg-blue-100 text-blue-600 text-xs md:text-sm font-semibold px-3 py-1 rounded hover:bg-blue-200"
                  >
                    📎 Attach File
                  </Button>
                )}

                {/* File name and remove button */}
                {fileName && (
                  <div className="flex items-center gap-2 mt-2">
                    <Button
                      className="text-sm font-medium "
                      variant="destructive"
                      disabled
                    >
                      {fileName}
                    </Button>
                    <button
                      type="button"
                      className="text-red-500 hover:text-red-700"
                      onClick={() => {
                        setFileName(null);
                        if (fileInputRef.current) {
                          fileInputRef.current.value = "";
                        }
                        field.onChange(null);
                      }}
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                )}

                {/* Show error if needed */}
                {fieldState?.error && (
                  <p className="text-red-500 text-sm mt-1">
                    {fieldState.error.message}
                  </p>
                )}
              </div>
            )}
          />
        </div>
      </div>

      <p className="text-sm text-gray-600 mb-3">
        To complete this document you must order a vaccine test from your local
        vaccine testing location. Along with your vaccine results, you must
        append your ALS and BLS certificate on the 2nd and 3rd page.
      </p>
    </div>
  );
}
