"use client";

import { useEffect } from "react";
import { userRegisterFormConfig, useUserStore } from "@/domains/users";
import { DynamicForm } from "@/shared/ui/forms";

export default function Home() {
  const user = useUserStore((state) => state.user);
  console.log("Page -> Rendering Home Component");

  useEffect(() => {
    console.log("Page -> Home Component Mounted");
  });

  const onSubmit = (data: any) => {
    console.log("Page -> Form submitted with data:", data);
  };

  return (
    <main className="p-6 space-y-4">
      {user && (
        <div className="p-4 border">
          <h2 className="text-lg font-bold mb-2">User Info</h2>
          <pre>{JSON.stringify(user, null, 2)}</pre>
        </div>
      )}
      {user && <p>Welcome back, {user.name}!</p>}
      <DynamicForm formConfig={userRegisterFormConfig} onSubmit={onSubmit} />
    </main>
  );
}
