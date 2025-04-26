import ChatWindow from "@/components/ChatWindow";
import MessageInbox from "@/components/MessageInbox";
import { useState } from "react";

export default function MessagesPage() {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <>
      <h1 className="text-2xl font-bold tracking-tighter lg:text-3xl m-4">
        Messages
      </h1>
      <div className="flex flex-col md:flex-row p-4 h-[500px]">
        {/* Inbox */}
        <aside className="w-full md:w-1/3">
          <MessageInbox onSelectUser={setSelectedUser} />
        </aside>

        {/* Chat */}
        <main className="flex flex-col w-full md:w-2/3 h-[800px] border overflow-hidden shadow">
          {selectedUser ? (
            <ChatWindow user={selectedUser} />
          ) : (
            <div className="text-muted-foreground text-center pt-20">
              Select a user to start chatting 💬
            </div>
          )}
        </main>
      </div>
    </>
  );
}
