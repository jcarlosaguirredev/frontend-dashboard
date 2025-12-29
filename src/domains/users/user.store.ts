import { mapUserToStoreUser } from "@/domains/users/user.mapper";
import { User } from "@/domains/users/user.type";
import { create } from "zustand";

export type UserStore = {
  user: User | null;
  setUser: (user: User) => void;
  clearUser: () => void;
};

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  setUser: (user: User) => set({ user: mapUserToStoreUser(user) }),
  clearUser: () => set({ user: null }),
}));
