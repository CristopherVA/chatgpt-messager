import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ChatBubbleLeftIcon, TrashIcon } from "@heroicons/react/24/outline";
import { usePathname, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, deleteDoc, doc, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";

type Props = {
  id: string;
};

function ChatRow({ id }: Props) {
  const pathname = usePathname();
  const router = useRouter();
  const { data: session } = useSession();
  const [active, setActive] = useState(false)

  const [messages] = useCollection(query(
    collection(db, "users", session?.user?.email!, 'chats', id, 'messages'), orderBy('createdAt', 'asc')))

  useEffect(() => {
    if (!pathname) return;

    setActive(pathname.includes(id))

  }, [pathname])

  const removeChat = async () => {
    await deleteDoc(doc(db, 'users', session?.user?.email!, 'chats', id))
    router.replace('/')
  }

  return (
    <Link className={`chatRow justify-center ${active && 'bg-gray-700/50'}`} href={`/chat/${id}`}>
      <ChatBubbleLeftIcon className="w-5 h-5 text-white" />
      <p className="flex-1 hidden md:inline-block truncate text-white">
        {messages?.docs[messages.docs.length - 1]?.data().text || "New Chat"}
      </p>
      <TrashIcon onClick={removeChat} className="w-5 h-5 text-gray-700 hover:text-red-700" />
    </Link>
  );
}

export default ChatRow;
