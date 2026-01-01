import { mapUserToStoreUser } from "@/domains/users/user.mapper";
import { fetchUser } from "@/domains/users/user.service";
import { User } from "@/domains/users/user.type";
import { create } from "zustand";

type AsyncStatus = "idle" | "loading" | "success" | "error";

export type UserStore = {
  user: User | null;
  status: AsyncStatus;
  error: string | null;
  loadUser: () => Promise<void>;
  clearUser: () => void;
};

let currentRequestID: number = 0;

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  status: "idle",
  error: null,
  loadUser: async () => {
    // Check if user is already loaded
    const { user } = useUserStore.getState();
    if (user) return;

    // Increment request ID to track the latest request
    const requestId = ++currentRequestID;

    set({ status: "loading" });

    try {
      const user = await fetchUser();

      // If a newer request has been made, ignore this result
      if (requestId !== currentRequestID) return;

      set({ status: "success", user: mapUserToStoreUser(user) });
    } catch (err) {
      // If a newer request has been made, ignore this error
      if (requestId !== currentRequestID) return;

      set({
        status: "error",
        error: err instanceof Error ? err.message : String(err),
      });
    }
  },
  clearUser: () => set({ user: null }),
}));
