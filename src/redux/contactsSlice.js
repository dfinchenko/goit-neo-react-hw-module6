import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { createSlice, nanoid } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
  },
  reducers: {
    addContact: {
      reducer(state, action) {
        const isDuplicate = state.items.some(
          ({ name, number }) =>
            name === action.payload.name || number === action.payload.number
        );

        if (isDuplicate) {
          iziToast.warning({
            position: "topRight",
            message: "This name or number already exists",
          });
          return;
        }

        state.items.push(action.payload);
      },
      prepare({ name, number }) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    deleteContact(state, action) {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload
      );
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const selectContacts = (state) => state.contacts.items;
export const contactsReducer = contactsSlice.reducer;
