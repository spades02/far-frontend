import { Paperclip } from "lucide-react";
import { useEffect, useRef } from "react";
import { Input } from "@/components/ui/input";

export function AttachFileButton({ accept = "*", field }) {
  const wrapperRef = useRef(null);
  const actualInputRef = useRef(null);

  useEffect(() => {
    const nativeInput = wrapperRef.current?.querySelector("input[type='file']");
    if (nativeInput) {
      actualInputRef.current = nativeInput;

      nativeInput.addEventListener("change", (e) => {
        const file = e.target.files[0];
        if (file) {
          field.onChange(file); // Send file to RHF
        }
      });
    }
  }, [field]);

  const handleAttachClick = () => {
    actualInputRef.current?.click(); // Trigger input on button click
  };

  return (
    <div className="flex items-center space-x-2">
      <button
        type="button"
        onClick={handleAttachClick}
        className="flex items-center px-3 py-1.5 text-sm border rounded-md bg-white hover:bg-gray-50 transition"
      >
        <Paperclip className="w-4 h-4 mr-2" />
        Attach
      </button>

      <div ref={wrapperRef} className="hidden">
        <Input type="file" accept={accept} />
      </div>
    </div>
  );
}
