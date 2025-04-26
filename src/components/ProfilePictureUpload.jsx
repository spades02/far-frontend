import { useState, useEffect } from "react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function ProfilePictureUpload({ field }) {
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    if (field.value && field.value.length > 0) {
      const file = field.value[0];
      const objectUrl = URL.createObjectURL(file);
      setPreview(objectUrl);

      return () => URL.revokeObjectURL(objectUrl);
    }
  }, [field.value]);

  const handleChange = (e) => {
    field.onChange(e.target.files);
  };

  return (
    <div className="flex items-center gap-4">
      {preview ? (
        <img
          src={preview}
          alt="Profile Preview"
          className="w-16 h-16 rounded-full object-cover"
        />
      ) : (
        <div className="w-16 h-16 rounded-full bg-gray-200" />
      )}
      <div>
        <Label
          htmlFor="profilePicture"
          className="cursor-pointer border border-black rounded-lg px-4 py-2 transition"
        >
          Upload a new photo
        </Label>
        <input
          id="profilePicture"
          type="file"
          accept="image/*"
          onChange={handleChange}
          className="hidden"
        />
      </div>
    </div>
  );
}
