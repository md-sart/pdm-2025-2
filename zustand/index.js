import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export const useStore = create(
  persist(
    (set) => ({
      isEnabled: false,
      toggleIsEnabled: () => set((state) => ({ isEnabled: !state.isEnabled })),
    }),
    { name: "enabled-store", storage: createJSONStorage(() => AsyncStorage) }
  )
);
