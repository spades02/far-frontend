import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Trash, UploadCloud, RotateCw } from "lucide-react";

const initialDocs = [
  { id: 1, label: "Curriculum Vitae" },
  { id: 2, label: "Passport" },
  { id: 3, label: "Malpractice Insurance" },
  { id: 4, label: "Malpractice Insurance" },
  { id: 5, label: "Malpractice Insurance" },
  { id: 6, label: "Malpractice Insurance" },
];

let docIdCounter = 7; // to assign new unique IDs to extra uploaded files

const Documents = () => {
  const [uploadedDocs, setUploadedDocs] = useState({});
  const [extraDocs, setExtraDocs] = useState([]);

  const handleFileChange = (e, docId, isNew = false) => {
    const file = e.target.files[0];
    if (!file) return;

    const newDoc = {
      file,
      uploadedAt: new Date().toLocaleDateString(),
    };

    if (isNew) {
      const newId = docIdCounter++;
      setExtraDocs((prev) => [
        ...prev,
        { id: newId, label: "Uploaded Document" },
      ]);
      setUploadedDocs((prev) => ({
        ...prev,
        [newId]: newDoc,
      }));
    } else {
      setUploadedDocs((prev) => ({
        ...prev,
        [docId]: newDoc,
      }));
    }
  };

  const handleDelete = (docId) => {
    setUploadedDocs((prev) => {
      const updated = { ...prev };
      delete updated[docId];
      return updated;
    });
    setExtraDocs((prev) => prev.filter((doc) => doc.id !== docId));
  };

  const allDocs = [...initialDocs, ...extraDocs];

  return (
    <div className="space-y-6">
      <p className="text-sm text-muted-foreground">
        These documents are required by most preceptors. If preceptors require
        additional documents, they will be added to this list and you can reuse
        them for other institutions.
      </p>

      <div className="space-y-4">
        {allDocs.map((doc) => {
          const uploaded = uploadedDocs[doc.id];
          return (
            <div
              key={doc.id}
              className="flex items-start justify-between p-4 border rounded-md"
            >
              <div className="space-y-1">
                <div className="font-medium">
                  {uploaded ? (
                    uploaded.file.name
                  ) : (
                    <span className="text-muted-foreground">Not Submitted</span>
                  )}
                </div>
                <div className="text-sm text-muted-foreground">
                  Document: {doc.label}
                </div>
                <div className="text-xs text-muted-foreground">
                  Uploaded: {uploaded ? uploaded.uploadedAt : "10.04.20"}
                </div>
              </div>

              <div className="flex items-center gap-2">
                {uploaded ? (
                  <>
                    <Label className="cursor-pointer text-primary hover:underline">
                      <RotateCw className="inline mr-1" size={16} />
                      Upload the latest version
                      <Input
                        type="file"
                        onChange={(e) => handleFileChange(e, doc.id)}
                        className="hidden"
                      />
                    </Label>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleDelete(doc.id)}
                    >
                      <Trash className="text-red-500" size={18} />
                    </Button>
                  </>
                ) : (
                  <Label className="cursor-pointer text-primary hover:underline">
                    <UploadCloud className="inline mr-1" size={16} />
                    Upload
                    <Input
                      type="file"
                      onChange={(e) => handleFileChange(e, doc.id)}
                      className="hidden"
                    />
                  </Label>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Drag & Drop or Browse Area */}
      <div className="mt-6">
        <Label className="block text-sm font-medium">Upload file</Label>
        <Label className="mt-2 block p-6 border border-dashed border-teal-300 bg-teal-50 text-center rounded-md text-sm text-muted-foreground cursor-pointer hover:bg-teal-100 transition">
          <UploadCloud className="mx-auto mb-2 text-teal-400" />
          Drag and drop files, or{" "}
          <span className="text-teal-600 font-medium">Browse</span>
          <Input
            type="file"
            onChange={(e) => handleFileChange(e, null, true)}
            className="hidden"
          />
        </Label>
      </div>
    </div>
  );
};

export default Documents;
