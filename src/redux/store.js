import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { contactsReducer } from "./contactsSlice";
import { filtersReducer } from "./filtersSlice";

const contactsConfig = {
	key: "contacts",
	storage,
	whitelist: ["items"],
};

const persistContactsReducer = persistReducer(contactsConfig, contactsReducer);

export const store = configureStore({
	reducer: {
		contacts: persistContactsReducer,
		filters: filtersReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});

export const persistor = persistStore(store);
