import { useUser } from "@clerk/nextjs";
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

export const useUserRole = () => {
  const { user } = useUser();

  const userData = useQuery(api.users.getUserByClerkId, {
    clerkId: user?.id || "",
  });

  const isLoading = userData === undefined;

  return {
    isLoading,
    isInterviewer: userData?.role === "interviewer",
    isCandidate: userData?.role === "candidate",
  };
};

/*  BELOW !@#$%^&*()_++_)(*&^%$#@! ) IS GPT CODE SHOEING ALEASR Clerk ID:

export function useUserRole() {
  const { user, isLoaded } = useUser();

  const clerkId = user?.id;

  // Only call query if Clerk is loaded and we have user ID
  const userData = useQuery(
    api.users.getUserByClerkId,
    clerkId ? { clerkId } : "skip"
  );

  console.log("🧑 Clerk ID:", clerkId);
  console.log("📦 Fetched Convex user data:", userData);

  return {
    user: userData,
    role: userData?.role,
  };
}

*/