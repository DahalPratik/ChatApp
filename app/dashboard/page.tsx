"use client";

import React, { useState } from "react";
import Link from "next/link";

interface Message {
  id: number;
  sender: string;
  content: string;
  timestamp: string;
  isOwn: boolean;
}

interface Contact {
  id: number;
  name: string;
  avatar: string;
  status: "online" | "offline" | "away";
  lastMessage?: string;
  unread?: number;
}

export default function Dashboard() {
  const [activeChat, setActiveChat] = useState<number | null>(1);
  const [message, setMessage] = useState("");

  // Mock data
  const contacts: Contact[] = [
    {
      id: 1,
      name: "Alex Johnson",
      avatar: "A",
      status: "online",
      lastMessage: "Hey, how's it going?",
      unread: 3,
    },
    {
      id: 2,
      name: "Sam Wilson",
      avatar: "S",
      status: "online",
      lastMessage: "Can we meet tomorrow?",
    },
    {
      id: 3,
      name: "Taylor Swift",
      avatar: "T",
      status: "offline",
      lastMessage: "I'll send you the files.",
    },
    {
      id: 4,
      name: "Morgan Freeman",
      avatar: "M",
      status: "away",
      lastMessage: "Sounds good!",
    },
  ];

  const messages: Message[] = [
    {
      id: 1,
      sender: "Alex Johnson",
      content: "Hey there! How are you doing?",
      timestamp: "10:30 AM",
      isOwn: false,
    },
    {
      id: 2,
      sender: "You",
      content: "I'm good, thanks! Just working on that project we discussed.",
      timestamp: "10:32 AM",
      isOwn: true,
    },
    {
      id: 3,
      sender: "Alex Johnson",
      content: "That's great! How's the progress?",
      timestamp: "10:33 AM",
      isOwn: false,
    },
    {
      id: 4,
      sender: "You",
      content: "It's coming along nicely. I should be done by tomorrow.",
      timestamp: "10:35 AM",
      isOwn: true,
    },
    {
      id: 5,
      sender: "Alex Johnson",
      content: "Perfect! Can't wait to see it.",
      timestamp: "10:36 AM",
      isOwn: false,
    },
    {
      id: 6,
      sender: "Alex Johnson",
      content: "By the way, are we still meeting for coffee this weekend?",
      timestamp: "10:38 AM",
      isOwn: false,
    },
  ];

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      // In a real app, this would send the message to the server
      console.log(`Sending message: ${message}`);
      setMessage("");
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "online":
        return "bg-green-500";
      case "away":
        return "bg-yellow-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="min-h-screen bg-[#0d0f13]">
      <div className="flex h-screen">
        {/* Sidebar */}
        <div className="w-80 border-r border-[#5d4260] flex flex-col">
          {/* User profile */}
          <div className="p-4 border-b border-[#5d4260]">
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-[#aa839b] flex items-center justify-center text-[#f0f1f4] font-bold">
                U
              </div>
              <div className="ml-3">
                <div className="text-[#a8b2c3] font-medium">User Name</div>
                <div className="text-[#f0f1f4]/60 text-sm">Active Now</div>
              </div>
            </div>
          </div>

          {/* Search */}
          <div className="p-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search contacts..."
                className="w-full px-4 py-2 rounded-full bg-[#161921] border border-[#5d4260] text-[#f0f1f4] 
                placeholder-[#f0f1f4]/50 focus:outline-none focus:ring-1 focus:ring-[#aa839b]"
              />
              <svg
                className="absolute right-3 top-2.5 h-5 w-5 text-[#f0f1f4]/60"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

          {/* Contacts */}
          <div className="flex-1 overflow-y-auto">
            {contacts.map((contact) => (
              <div
                key={contact.id}
                className={`p-4 flex items-center cursor-pointer hover:bg-[#161921] transition ${
                  activeChat === contact.id ? "bg-[#161921]" : ""
                }`}
                onClick={() => setActiveChat(contact.id)}
              >
                <div className="relative">
                  <div className="h-12 w-12 rounded-full bg-[#5d4260] flex items-center justify-center text-[#f0f1f4] font-bold">
                    {contact.avatar}
                  </div>
                  <div
                    className={`absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full border-2 border-[#0d0f13] ${getStatusColor(
                      contact.status
                    )}`}
                  ></div>
                </div>
                <div className="ml-3 flex-1">
                  <div className="flex justify-between items-center">
                    <div className="text-[#f0f1f4] font-medium">
                      {contact.name}
                    </div>
                    {contact.unread && (
                      <div className="h-5 w-5 rounded-full bg-[#aa839b] text-[#f0f1f4] text-xs flex items-center justify-center">
                        {contact.unread}
                      </div>
                    )}
                  </div>
                  <div className="text-[#f0f1f4]/60 text-sm truncate w-40">
                    {contact.lastMessage}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="p-4 border-t border-[#5d4260]">
            <div className="flex justify-around">
              <button className="text-[#a8b2c3] hover:text-[#aa839b]">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                  />
                </svg>
              </button>
              <button className="text-[#a8b2c3] hover:text-[#aa839b]">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </button>
              <button className="text-[#a8b2c3] hover:text-[#aa839b]">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </button>
              <Link
                href="/login"
                className="text-[#a8b2c3] hover:text-[#aa839b]"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Chat area */}
        <div className="flex-1 flex flex-col">
          {activeChat ? (
            <>
              {/* Chat header */}
              <div className="p-4 border-b border-[#5d4260] flex justify-between items-center">
                <div className="flex items-center">
                  <div className="relative">
                    <div className="h-10 w-10 rounded-full bg-[#5d4260] flex items-center justify-center text-[#f0f1f4] font-bold">
                      {contacts.find((c) => c.id === activeChat)?.avatar || "?"}
                    </div>
                    <div
                      className={`absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-[#0d0f13] ${getStatusColor(
                        contacts.find((c) => c.id === activeChat)?.status ||
                          "offline"
                      )}`}
                    ></div>
                  </div>
                  <div className="ml-3">
                    <div className="text-[#f0f1f4] font-medium">
                      {contacts.find((c) => c.id === activeChat)?.name ||
                        "Unknown"}
                    </div>
                    <div className="text-[#f0f1f4]/60 text-sm">
                      {contacts.find((c) => c.id === activeChat)?.status ||
                        "offline"}
                    </div>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <button className="text-[#a8b2c3] hover:text-[#aa839b]">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </button>
                  <button className="text-[#a8b2c3] hover:text-[#aa839b]">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                  </button>
                  <button className="text-[#a8b2c3] hover:text-[#aa839b]">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                <div className="text-center text-[#f0f1f4]/60 text-xs">
                  Today
                </div>

                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${
                      msg.isOwn ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-xs md:max-w-md rounded-xl px-4 py-2 ${
                        msg.isOwn
                          ? "bg-[#aa839b] text-[#f0f1f4]"
                          : "bg-[#161921] text-[#f0f1f4]"
                      }`}
                    >
                      {msg.content}
                      <div
                        className={`text-xs mt-1 ${
                          msg.isOwn ? "text-[#f0f1f4]/70" : "text-[#f0f1f4]/60"
                        }`}
                      >
                        {msg.timestamp}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Message input */}
              <div className="p-4 border-t border-[#5d4260]">
                <form
                  onSubmit={handleSendMessage}
                  className="flex items-center"
                >
                  <button
                    type="button"
                    className="text-[#a8b2c3] hover:text-[#aa839b] mr-2"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                      />
                    </svg>
                  </button>
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type a message..."
                    className="flex-1 px-4 py-2 rounded-full bg-[#161921] border border-[#5d4260] text-[#f0f1f4] 
                    placeholder-[#f0f1f4]/50 focus:outline-none focus:ring-1 focus:ring-[#aa839b]"
                  />
                  <button
                    type="submit"
                    className="ml-2 text-[#f0f1f4] bg-[#aa839b] rounded-full p-2 hover:bg-[#aa839b]/90"
                    disabled={!message.trim()}
                  >
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 12h14M12 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </form>
              </div>
            </>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center text-[#f0f1f4]/60">
              <svg
                className="h-16 w-16 mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              <p className="text-xl">Select a chat to start messaging</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
