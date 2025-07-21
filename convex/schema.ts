import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

// v means values from the Convex dataBase
export default defineSchema({
  users: defineTable({
    name: v.string(),
    email: v.string(),
    image: v.optional(v.string()),
    role: v.union(v.literal("candidate"), v.literal("interviewer")), // role means interviewer (admin) and candidatess
    clerkId: v.string() // other service of clerk
  }).index("by_clerk_id", ["clerkId"]),
});

