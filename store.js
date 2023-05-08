import { createStore } from 'zustand/vanilla'
import { persist, createJSONStorage } from 'zustand/middleware'

const DEFAULT_CARD = {"name":"Night Witches","year":1941,"era":"C.E.","image":"./night-witches.jpg","text":"\"Night Witches\" (German: die Nachthexen; Russian: Ночные ведьмы, Nochnyye Vedmy) was a World War II German nickname for the all-female military aviators of the 588th Night Bomber Regiment, known later as the 46th \"Taman\" Guards Night Bomber Aviation Regiment, of the Soviet Air Forces."}

export const store = createStore(
  persist(
    (set, get) => ({
      cards: [DEFAULT_CARD],
      addACard: async (card) => {
        const cards = await get().cards;
        cards.push(card);
        console.log(cards, card)
        set({ cards: cards })
      },
      removeAll: () => {
        set({ cards: [DEFAULT_CARD] })
      },
    }),
    {
      name: 'card-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
)


