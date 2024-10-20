/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";

interface AppStored {
  data: any;
  setData: (data: any) => void;
}

const appStored = create<AppStored>((set: any) => ({
  data: null,
  setData: (data: any) => set({ data: data }),
}));

export default appStored;
