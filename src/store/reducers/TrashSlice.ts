import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { IPost } from "../../models/IPost"
import { WritableDraft } from "immer";


interface BasketState{
   items: IPost[],
   isLoading: boolean,
   error: string,
}


const initialState: BasketState = {
   items: [],
   isLoading: false,
   error: '',
}



export const TrashSlicer = createSlice({
   name: 'trash',
   initialState,
   reducers: {
      addItem: (state, action: PayloadAction<IPost>) => {
         const items = [...state.items, action.payload];
         localStorage.setItem('items', JSON.stringify(items));

         state.items = items;   
      },
      deleteItem: (state, action) => {
         const items = [...state.items.filter(item => item.id !== action.payload.id)];
         console.log(items)

         localStorage.setItem('items', JSON.stringify(items));
         state.items = items;          
      },
      deletAllItems: (state) => {
         const items: WritableDraft<IPost>[] = [];
         localStorage.setItem('items', JSON.stringify(items));
         state.items = items;
      },
    }
})


export const { addItem, deleteItem, deletAllItems } = TrashSlicer.actions

export default TrashSlicer.reducer