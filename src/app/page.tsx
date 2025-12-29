"use client";

import { useEffect } from "react";
import { DynamicForm } from "../shared/components/forms/FormRHF";
import { userRegisterFormConfig } from "@/domains/users/components/forms/user-register.config";
import { useUserStore } from "@/domains/users/user.store";

export default function Home() {
  const user = useUserStore((state) => state.user);
  console.log("Page -> Rendering Home Component");

  useEffect(() => {
    console.log("Page -> Home Component Mounted");
  });

  return (
    <main className="p-6 space-y-4">
      {user && (
        <div className="p-4 border">
          <h2 className="text-lg font-bold mb-2">User Info</h2>
          <pre>{JSON.stringify(user, null, 2)}</pre>
        </div>
      )}
      <DynamicForm formConfig={userRegisterFormConfig} />
    </main>
  );
}
