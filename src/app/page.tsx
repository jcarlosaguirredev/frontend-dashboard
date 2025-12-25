"use client";

import { useEffect } from "react";
import { DynamicForm } from "./forms/FormRHF";
import { formConfig } from "@/app/forms/form.config";

export default function Home() {
  console.log("Rendering Home Component");

  useEffect(() => {
    console.log("Home Component Mounted");
  });

  return (
    <main className="p-6 space-y-4">
      <DynamicForm formConfig={formConfig} />
    </main>
  );
}
