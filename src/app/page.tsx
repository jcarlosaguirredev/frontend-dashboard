"use client";

import { useEffect } from "react";
import {
  User,
  UserProfile,
  userRegisterFormConfig,
  useUserStore,
} from "@/domains/users";
import { DynamicForm } from "@/shared/ui/forms";

export default function Home() {
  const setUser = useUserStore((s) => s.setUser);
  console.log("Page -> Rendering Home Component");

  useEffect(() => {
    console.log("Page -> Home Component Mounted");
  });

  const onSubmit = (data: any) => {
    console.log("Page -> Form submitted with data:", data);
    setUser(data as User);
  };

  return (
    <main className="p-6 space-y-4">
      <UserProfile />
      <DynamicForm formConfig={userRegisterFormConfig} onSubmit={onSubmit} />
    </main>
  );
}
