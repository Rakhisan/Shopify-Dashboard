"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
// import Signup from "./auth/sign-up/Signup";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/dashboard");
  }, [router]);

  // return <Signup />;
}
