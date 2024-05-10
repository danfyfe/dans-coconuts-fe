'use client';
import Image from "next/image";
import { useEffect, useRef, useState, useReducer, ReducerAction, ReducerState } from "react";

const IMAGES = {
  standing: '/images/coconut-dan/standing.png',
  waving: '/images/coconut-dan/waving.png'
};

enum CoconutDanKind {
  UPDATE_VISIBLE = 'UPDATE_VISIBLE',
  UPDATE_MESSAGE = 'UPDATE_MESSAGE',
  UPDATE_POSITION = 'UPDATE_POSITION'
}

interface ICoconutDanReducerState {
  message: string;
}

interface ICoconutDanAction {
  type: CoconutDanKind;
  payload: string;
}

const reducer = (state: ICoconutDanReducerState, action: ICoconutDanAction) => {
  switch (action.type) {
    case 'UPDATE_MESSAGE':  {
      return {
        ...state,
        message: action.payload
      }
    }
    default:
      return state;
  }
};

const initialState: ICoconutDanReducerState = {
  message: ''
}

const CoconutDan = () => {
  const coconutDanRef = useRef<HTMLDivElement>(null);
  const [src, setSource] = useState('waving');
  const [visible, setVisible] = useState(false);
  const [speechBubble, setSpeechBubble] = useReducer(reducer, initialState);


  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
    }, 100);

  }, []);

  return (
    <>
        <div
          className={`
            absolute h-52 w-52 z-[12000]
            top-2/3
            ${visible ? '-right-24' : '-right-52'}
            -rotate-[40deg]
            transition-all
            duration-200
          `}
          ref={coconutDanRef}
        >
          {/* <Image
            src={IMAGES[src]}
            alt="Coconut Dan character"
            width={500}
            height={500}
            priority
          /> */}
        </div>
    </>
  )
};

export default CoconutDan;
