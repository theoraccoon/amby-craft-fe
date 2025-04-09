"use client";

import { useRouter } from "next/navigation";
import CustomButton from "@/components/ui/button/customButton";
import InputField from "@/components/ui/input/input";
import { paths } from "@/config/path"; 

console.log(paths, "gsg");  // Logging outside of the component will avoid re-renders

export default function Home() {
  const router = useRouter();

  const goToAbout = () => {
    router.push(paths.app.about.getHref());
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Home Page</h1>

      <nav className="mt-4 space-x-4">
        <button
          onClick={goToAbout}
          className="text-blue-500 hover:underline"
        >
          About
        </button>

        <CustomButton>Hey</CustomButton>

        <InputField
          label="Email"
          placeholder="Enter your email"
        />
      </nav>
    </div>
  );
}
