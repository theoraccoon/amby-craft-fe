import { ReactNode } from "react";

export interface FlashCardBlockData {
  type?:string;
  front:string;
  back:string;
}

export interface FlashCardIProps {
  front: ReactNode
  back: ReactNode
  className?: string
}

export interface CardsIProps {
  cards: FlashCardBlockData[]
}