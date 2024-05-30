'use client'
import { useGetCookie } from "@/lib/hooks/useGetCookie";
import { getRandomNumberInRange } from "@/lib/randoms";
import { ICoconut } from "@/models/Coconut";
import setCookie from "@/lib/setCookie";
import { createContext, useState, useCallback, MouseEventHandler } from "react";

type ICoconutAttributes = {
  title: string;
  content: string;
  users: string[];
}

interface ICoconutProvider {
  coconuts: ICoconut[];
  addCoconut: (coconut: ICoconutAttributes) => void;
  formActive: boolean;
  toggleCoconutForm: MouseEventHandler<HTMLButtonElement>,
}

export const CoconutContext = createContext<ICoconutProvider>({
  coconuts: [],
  addCoconut: () => {},
  formActive: false,
  toggleCoconutForm: () => {}
});

export const CoconutsProvider = ({ children }: { children: React.ReactNode }) => {
  const [coconuts, setCoconuts] = useState<ICoconut[]>([]);
  const [messageTitle, setMessageTitle] = useState<string>('');
  const [messageContent, setMessageContent] = useState<string>('');
  const [messageReceiverID, setMessageReceiverID] = useState<string>('');
  const [formActive, setFormActive] = useState<boolean>(false);
  const coconutCountCookie = useGetCookie('dc-coconut-count');

  const toggleCoconutForm = useCallback(() => {
    setFormActive(!formActive);
  }, [formActive]);

  const createNewCoconut = useCallback(({ title, content, users }) => {
    const windowWidth = global.window.innerWidth;
    const windowHeight = global.window.innerHeight;
    const randomPosition = getRandomNumberInRange(-40, windowWidth);
    const randomTiming = `${(Math.random() + 1)}s`;
    const coconut: ICoconut = {
      xPosition: randomPosition,
      yPosition: windowHeight,
      animationDuration: randomTiming,
      id: randomPosition,
      name: 'Coconut',
      content,
      title,
      users,
      image: '/images/coconut.png',
      alt: 'Image of a coconut'
    };
    return coconut;
  }, [coconuts]);

  const addCoconut = useCallback(({ title, content, users }) => {
    const newCoconut = createNewCoconut({ title, content, users });
    const newCoconuts = [...coconuts, newCoconut];
    setCoconuts(newCoconuts);
    console.log('coconuts', coconuts, newCoconut)
    // setCookie('dc-coconut-count', newCoconuts.length);
  }, [coconuts, createNewCoconut]);

  const handleReceiverID = () => {

  };

  const handleMessageTitle = (e) => {
    setMessageTitle(e.target.value);
  };

  const handleMessageContent = (e) => {
    setMessageContent(e.target.value);
  };

  const resetForm = () => {
    setMessageContent('');
    setMessageTitle('');
    setMessageReceiverID('');
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
        messageReceiverID, handleReceiverID, resetForm
      }}>
      {children}
    </CoconutContext.Provider>
  )
};
