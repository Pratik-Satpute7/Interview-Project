"use client"; //"Dashbord button is only for the interviewer"

import Link from "next/link";
import { Button } from "./ui/button";
import { SparklesIcon } from "lucide-react";
import { useUserRole } from "@/hooks/useUserRole";

function DasboardBtn() {

// let isCandidate=false;
// let isInterviewer=true;


 const { isCandidate, isLoading } = useUserRole();

 //if (isCandidate) return null;  

  if (isCandidate || isLoading) return null;

  return (
    <Link href={"/dashboard"}>
      <Button className="gap-2 font-medium" size={"sm"}>
        <SparklesIcon className="size-4" />
        Dashboard
      </Button>
    </Link>
  );
}
export default DasboardBtn;
 