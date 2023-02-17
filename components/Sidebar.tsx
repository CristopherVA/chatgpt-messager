"use client";
import NewChat from "./NewChat";
import { useSession, signOut } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";
import ChatRow from "./ChatRow";
import ModelSelection from "./ModelSelection";
import Skeleton from "./Skeleton";

function Sidebar() {

  const { data: session } = useSession();

  const [chats, loading, error] = useCollection(
    session &&
      query(
        collection(db, "users", session?.user?.email!, "chats"),
        orderBy("createdAt", "asc")
      )
  );

  console.log(chats);

  return (
    <div className="p-2 flex flex-col h-screen">
      <div className="flex-1">
        <div>
          <NewChat />

          <div className="hidden sm:inline">
            <ModelSelection />
          </div>

          {loading && <Skeleton />}

          <div className="flex flex-col space-y-2 my-2">
            {chats?.docs.map((chat) => (
              <ChatRow key={chat.id} id={chat.id} />
            ))}
          </div>
        </div>
      </div>

      {session && (
        <div
          onClick={() => signOut()}
          className="flex justify-center items-center cursor-pointer"
        >
          <img
            className="w-12 h-12 rounded-full mx-auto mb-2 hover:opacity-50"
            src={`${session.user?.image!}`}
            alt={`${session.user?.name}`}
          />
          <p className={`mx-2 font-bold text-white hidden md:block`}>
            {session.user?.name}
          </p>
        </div>
      )}
    </div>
  );
}

export default Sidebar;
