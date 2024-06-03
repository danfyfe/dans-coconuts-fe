'use client'
import { useGetCookie } from "@/lib/hooks/useGetCookie";
import { getRandomNumberInRange } from "@/lib/randoms";
import { ICoconut } from "@/models/coconuts/Coconut";
import { createContext, useState, useCallback, MouseEventHandler, ChangeEventHandler } from "react";
import { IUser } from "@/models/User";

type ICoconutAttributes = {
  title: string;
  content: string;
  users: Partial<IUser>[];
}

interface ICoconutProvider {
  coconuts: ICoconut[];
  addCoconut: (coconut: ICoconutAttributes) => void;
  formActive: boolean;
  toggleCoconutForm: () => void;
  messageTitle: string;
  handleMessageTitle: ChangeEventHandler<HTMLInputElement>,
  messageContent: string;
  handleMessageContent: ChangeEventHandler<HTMLTextAreaElement>,
  messageReceiver: Partial<IUser>;
  handleMessageReceiver: (user: Partial<IUser>) => void,
  resetForm: () => void
}

export const CoconutContext = createContext<ICoconutProvider>({
  coconuts: [],
  addCoconut: () => {},
  formActive: false,
  toggleCoconutForm: () => {},
  messageTitle: '',
  handleMessageTitle: () => {},
  messageContent: '',
  handleMessageContent: () => {},
  messageReceiver: {},
  handleMessageReceiver: (user: Partial<IUser>) => {},
  resetForm: () => {}
});

export const CoconutsProvider = ({ children }: { children: React.ReactNode }) => {
  const [coconuts, setCoconuts] = useState<ICoconut[]>([]);
  const [messageTitle, setMessageTitle] = useState<string>('');
  const [messageContent, setMessageContent] = useState<string>('');
  const [messageReceiver, setMessageReceiver] = useState<Partial<IUser>>({});
  const [formActive, setFormActive] = useState<boolean>(false);
  const coconutCountCookie = useGetCookie('dc-coconut-count');

  const toggleCoconutForm = useCallback(() => {
    setFormActive(!formActive);
  }, [formActive]);

  const createNewCoconut = useCallback(({ title, content, users } : ICoconutAttributes) => {
    const windowWidth = global.window.innerWidth;
    const windowHeight = global.window.innerHeight;
    const randomPosition = getRandomNumberInRange(-40, windowWidth);
    const randomTiming = `${(Math.random() + 1)}s`;
    const coconut: ICoconut = {
      xPosition: randomPosition,
      yPosition: windowHeight,
      animationDuration: randomTiming,
      id: `${randomPosition}`
    };
    return coconut;
  }, [coconuts]);

  const addCoconut = useCallback(({ title, content, users }: ICoconutAttributes) => {
    const newCoconut = createNewCoconut({ title, content, users });
    const newCoconuts = [...coconuts, newCoconut];
    setCoconuts(newCoconuts);
    console.log('coconuts', coconuts, newCoconut)
    // setCookie('dc-coconut-count', newCoconuts.length);
  }, [coconuts, createNewCoconut]);

  const handleMessageReceiver = (user: Partial<IUser>) => {
    setMessageReceiver(user);
  };

  const handleMessageTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessageTitle(e.target.value);
  };

  const handleMessageContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessageContent(e.target.value);
  };

  const resetForm = () => {
    setMessageContent('');
    setMessageTitle('');
    setMessageReceiver({});
  };

  // useEffect(() => {
  //   // re-create amount of coconuts from cookie on load
  //   if (coconutCountCookie && coconuts.length === 0) {
  //     let count = +coconutCountCookie;
  //     let newCoconuts: ICoconut[] = [];
  //     while (count > 0) {
  //       const newCoconut = createNewCoconut();
  //       newCoconuts = [...newCoconuts, newCoconut];
  //       count --;
  //     }
  //     setCoconuts(newCoconuts);
  //   }
  // }, [coconutCountCookie, createNewCoconut, coconuts]);

  return (
    <CoconutContext.Provider
      value={{
        coconuts, addCoconut, formActive, toggleCoconutForm,
        messageTitle, handleMessageTitle, messageContent, handleMessageContent,
        messageReceiver, handleMessageReceiver, resetForm
      }}>
      {children}
    </CoconutContext.Provider>
  )
};
