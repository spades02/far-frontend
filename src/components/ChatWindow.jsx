import { useRef, useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import dayjs from "dayjs";
import { Paperclip } from "lucide-react";
import { CiPaperplane } from "react-icons/ci";

export default function ChatWindow({ user }) {
  const bottomRef = useRef(null);

  const currentUserId = "me";
  const [message, setMessage] = useState("");
  const [chatLog, setChatLog] = useState([
    {
      id: 1,
      from: "john123",
      content: "Hey, how are you?",
      time: "10:32 AM",
    },
    {
      id: 2,
      from: "me",
      content: "I'm good! What about you?",
      time: "10:34 AM",
    },
  ]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatLog]);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const fileUrl = URL.createObjectURL(file);

    const newMsg = {
      id: Date.now(),
      from: currentUserId,
      content: file.name,
      fileUrl,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setChatLog((prev) => [...prev, newMsg]);
  };

  const handleSend = () => {
    if (message.trim()) {
      setChatLog((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          from: "me",
          content: message,
          time: dayjs().format("hh:mm A"),
        },
      ]);
      setMessage("");
    }
  };

  return (
    <div className="w-full h-full border p-4 flex flex-col">
      {/* Chat Header */}
      <div className="flex items-center gap-3 mb-4">
        <div className="relative">
          <img
            src={user.avatar}
            alt={user.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          {user.online && (
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full" />
          )}
        </div>

        <h3 className="text-lg font-medium">{user.name}</h3>
      </div>

      {/* Chat messages */}
      <div className="flex-1 overflow-y-auto space-y-4 pr-2">
        {chatLog.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${
              msg.from === currentUserId ? "justify-end" : "justify-start"
            }`}
          >
            <div className="max-w-xs flex flex-col space-y-1">
              {msg.from !== currentUserId && (
                <div className="flex items-center gap-2">
                  <img src={user.avatar} className="w-6 h-6 rounded-full" />
                  <span className="text-sm text-muted-foreground">
                    {user.name}
                  </span>
                </div>
              )}
              <div className="bg-muted px-3 py-2 rounded-lg text-sm break-words">
                {msg.fileUrl ? (
                  <a
                    href={msg.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                  >
                    📎 {msg.content}
                  </a>
                ) : (
                  msg.content
                )}
              </div>

              <span className="text-xs text-muted-foreground text-right">
                {msg.time}
              </span>
            </div>
          </div>
        ))}
        {/* Invisible bottom anchor for scrolling */}
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div className="mt-4 flex space-x-2 items-center">
        <label className="cursor-pointer">
          <input type="file" onChange={handleFileUpload} className="hidden" />
          <Paperclip className="w-5 h-5 text-muted-foreground hover:text-primary" />
        </label>

        <Input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              handleSend();
            }
          }}
          placeholder="Type a message..."
        />

        <Button onClick={handleSend}>
          <CiPaperplane />
        </Button>
      </div>
    </div>
  );
}
