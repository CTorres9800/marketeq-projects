import { useEffect, useState } from "react"
import { isNotUndefined } from "@/utils/functions"
import { useUncontrolledState } from "@/utils/hooks"
import { createContext } from "@/utils/react-utils"
import {
  AlertCircle,
  Archive,
  CornerUpLeft,
  DotsHorizontal,
  Edit03,
  EyeOff,
  Send03,
  Smile,
  Tag,
  Trash2,
} from "@blend-metrics/icons"
import { Meta } from "@storybook/react"
import { useIsomorphicLayoutEffect, useToggle } from "react-use"
import { Chat } from "@/components/chat"
import {
  Avatar,
  AvatarFallbackIcon,
  AvatarImage,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui"

const meta: Meta = {
  title: "Inbox",
}

export default meta

export const Bubble = ({ message }: { message: string }) => {
  const [value, setValue] = useState(message)
  const { onChatChange, chat, isSaved, onUnsave } = useEditContext()

  useIsomorphicLayoutEffect(() => {
    if (chat && isSaved) {
      console.log("YourBubble: useEffect", chat)

      setValue(chat)
      onUnsave()
    }
  }, [isSaved])

  return (
    <article className="group inline-flex flex-col items-start gap-y-2">
      <div className="p-5 pt-2.5 flex-auto rounded-xl flex flex-col gap-y-2 bg-primary-500/[.04]">
        <div className="flex items-end justify-between">
          <h3 className="text-sm leading-[16.8px] font-bold text-dark-blue-400">
            Me{" "}
            <span className="text-xs leading-[14.52px] font-normal">
              @uxguy297$
            </span>
          </h3>

          <div className="inline-flex transition duration-300 opacity-0 group-hover:opacity-100 items-center gap-x-0.5">
            <button className="size-7 inline-flex rounded-full focus-visible:outline-none text-gray-400 hover:bg-primary-50 hover:text-dark-blue-400 justify-center items-center shrink-0">
              <CornerUpLeft className="size-4" />
            </button>
            <button className="size-7 inline-flex rounded-full focus-visible:outline-none text-gray-400 hover:bg-primary-50 hover:text-dark-blue-400 justify-center items-center shrink-0">
              <Smile className="size-4" />
            </button>

            <DropdownMenu>
              <DropdownMenuTrigger className="size-7 inline-flex rounded-full focus-visible:outline-none text-gray-400 hover:bg-primary-50 hover:text-dark-blue-400 justify-center items-center shrink-0">
                <DotsHorizontal className="size-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="bottom"
                align="start"
                className="min-w-[142px]"
              >
                <DropdownMenuItem onSelect={() => onChatChange(value)}>
                  <Edit03 className="h-4 w-4" /> Edit
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Edit03 className="h-4 w-4" /> Pin
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Send03 className="h-4 w-4" /> Forward
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem visual="destructive">
                  <Trash2 className="h-4 w-4" /> Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <span className="text-sm leading-[16.94px] text-dark-blue-400">
          {value}
        </span>
      </div>

      <span className="inline-flex self-end text-[11px] leading-[15.47px] text-gray-500 items-center gap-x-1">
        Sent <span className="font-bold">12:01 AM</span>
      </span>
    </article>
  )
}

export const [EditContextProvider, useEditContext] = createContext<{
  chat: string
  onChatChange: (value: string) => void
  isSaved: boolean
  onSave: () => void
  onUnsave: () => void
}>({
  displayName: "EditContext",
})

export const YourBubble = ({ message }: { message: string }) => {
  return (
    <article className="inline-flex items-end gap-x-2">
      <Avatar
        size="md"
        className="hover:ring-0 active:ring-primary-100"
        isOnline
      >
        <AvatarImage src="/man.jpg" alt="Man" />
        <AvatarFallbackIcon />
      </Avatar>

      <div className="group inline-flex flex-col items-start gap-y-2">
        <div className="p-5 pt-2.5 flex-auto rounded-xl flex flex-col gap-y-2 bg-primary-500/[.04]">
          <div className="flex items-end justify-between">
            <h3 className="text-sm leading-[16.8px] font-bold text-dark-blue-400">
              Me{" "}
              <span className="text-xs leading-[14.52px] font-normal">
                @uxguy297$
              </span>
            </h3>

            <div className="inline-flex transition duration-300 opacity-0 group-hover:opacity-100 items-center gap-x-0.5">
              <button className="size-7 inline-flex rounded-full focus-visible:outline-none text-gray-400 hover:bg-primary-50 hover:text-dark-blue-400 justify-center items-center shrink-0">
                <CornerUpLeft className="size-4" />
              </button>
              <button className="size-7 inline-flex rounded-full focus-visible:outline-none text-gray-400 hover:bg-primary-50 hover:text-dark-blue-400 justify-center items-center shrink-0">
                <Smile className="size-4" />
              </button>

              <DropdownMenu>
                <DropdownMenuTrigger className="size-7 inline-flex rounded-full focus-visible:outline-none text-gray-400 hover:bg-primary-50 hover:text-dark-blue-400 justify-center items-center shrink-0">
                  <DotsHorizontal className="size-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  side="bottom"
                  align="start"
                  className="min-w-[142px]"
                >
                  <DropdownMenuItem>
                    <Edit03 className="h-4 w-4" /> Edit
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Edit03 className="h-4 w-4" /> Pin
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Send03 className="h-4 w-4" /> Forward
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem visual="destructive">
                    <Trash2 className="h-4 w-4" /> Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          <span className="text-sm leading-[16.94px] text-dark-blue-400">
            {message}
          </span>
        </div>

        <span className="inline-flex self-start text-[11px] leading-[15.47px] text-gray-500 items-center gap-x-1">
          Sent <span className="font-bold">12:01 AM</span>
        </span>
      </div>
    </article>
  )
}

export const ChatDefault = () => {
  return <Chat />
}

export const ChatActive = () => {
  return <Chat variant="active" />
}
