"use client";

import { Member } from "@prisma/client";
import { ChatWelcome } from "./chat-welcome";

interface ChatMessageProps {
    name: string;
    member: Member;
    chatId: string;
    apiUrl: string;
    socketUrl: string;
    socketQuery: Record<string, string>;
    paramKey: "channelId" | "conversationId";
    paramValue: string;
    type: "channel" | "conversation";
}

export const ChatMessages = ({
    name, member, chatId, apiUrl, socketQuery, paramKey, paramValue, type
}: ChatMessageProps) => {
    return(
        <div className="flex-1 flex flex-col py-4 overflow-y-auto">
            <div className="flex-1"/>
            <ChatWelcome 
                type={type}
                name={name}
            />
        </div>
    )
}