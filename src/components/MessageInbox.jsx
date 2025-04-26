import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const mockUsers = [
  {
    id: "user1",
    name: "Alice",
    avatar: "https://i.pravatar.cc/40?img=1",
    online: true,
  },
  {
    id: "user2",
    name: "Bob",
    avatar: "https://i.pravatar.cc/40?img=2",
    online: false,
  },
  {
    id: "user3",
    name: "Charlie",
    avatar: "https://i.pravatar.cc/40?img=3",
    online: true,
  },
  {
    id: "user4",
    name: "Diana",
    avatar: "https://i.pravatar.cc/40?img=4",
    online: true,
  },
  {
    id: "user5",
    name: "Evan",
    avatar: "https://i.pravatar.cc/40?img=5",
    online: false,
  },
  {
    id: "user6",
    name: "Fiona",
    avatar: "https://i.pravatar.cc/40?img=6",
    online: true,
  },
  {
    id: "user7",
    name: "George",
    avatar: "https://i.pravatar.cc/40?img=7",
    online: false,
  },
  {
    id: "user8",
    name: "Hannah",
    avatar: "https://i.pravatar.cc/40?img=8",
    online: true,
  },
  {
    id: "user9",
    name: "Isaac",
    avatar: "https://i.pravatar.cc/40?img=9",
    online: false,
  },
  {
    id: "user10",
    name: "Jane",
    avatar: "https://i.pravatar.cc/40?img=10",
    online: true,
  },
  {
    id: "user11",
    name: "Kevin",
    avatar: "https://i.pravatar.cc/40?img=11",
    online: true,
  },
  {
    id: "user12",
    name: "Luna",
    avatar: "https://i.pravatar.cc/40?img=12",
    online: false,
  },
  {
    id: "user13",
    name: "Mike",
    avatar: "https://i.pravatar.cc/40?img=13",
    online: true,
  },
  {
    id: "user14",
    name: "Nina",
    avatar: "https://i.pravatar.cc/40?img=14",
    online: true,
  },
  {
    id: "user15",
    name: "Oscar",
    avatar: "https://i.pravatar.cc/40?img=15",
    online: false,
  },
  {
    id: "user16",
    name: "Paula",
    avatar: "https://i.pravatar.cc/40?img=16",
    online: true,
  },
  {
    id: "user17",
    name: "Quinn",
    avatar: "https://i.pravatar.cc/40?img=17",
    online: false,
  },
  {
    id: "user18",
    name: "Rachel",
    avatar: "https://i.pravatar.cc/40?img=18",
    online: true,
  },
  {
    id: "user19",
    name: "Steve",
    avatar: "https://i.pravatar.cc/40?img=19",
    online: false,
  },
  {
    id: "user20",
    name: "Tina",
    avatar: "https://i.pravatar.cc/40?img=20",
    online: true,
  },
  {
    id: "user21",
    name: "Uma",
    avatar: "https://i.pravatar.cc/40?img=21",
    online: false,
  },
  {
    id: "user22",
    name: "Victor",
    avatar: "https://i.pravatar.cc/40?img=22",
    online: true,
  },
  {
    id: "user23",
    name: "Wendy",
    avatar: "https://i.pravatar.cc/40?img=23",
    online: true,
  },
  {
    id: "user24",
    name: "Xavier",
    avatar: "https://i.pravatar.cc/40?img=24",
    online: false,
  },
  {
    id: "user25",
    name: "Yara",
    avatar: "https://i.pravatar.cc/40?img=25",
    online: true,
  },
  {
    id: "user26",
    name: "Zane",
    avatar: "https://i.pravatar.cc/40?img=26",
    online: false,
  },
];

export default function MessageInbox({ onSelectUser }) {
  return (
    <div className="w-full border p-4 flex flex-col h-[90vh]">
      <div>
        <h2 className="text-lg font-semibold mb-4">Chats</h2>
      </div>
      <div>
        <ul className="overflow-y-auto max-h-[500px]">
          {mockUsers.map((user) => (
            <>
              <li
                key={user.id}
                className="flex items-center space-x-3 cursor-pointer hover:bg-muted p-2 rounded-lg"
                onClick={() => onSelectUser?.(user)}
              >
                <div className="relative">
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  {user.online && (
                    <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full" />
                  )}
                </div>
                <p className="text-sm font-medium">{user.name}</p>
              </li>
              <Separator className={"my-3"} />
            </>
          ))}
        </ul>
      </div>
    </div>
  );
}
