"use server";

import { eq } from "drizzle-orm";
import { db } from "../../database/DB";
import { usersTable } from "../../database/schema";
import { compare } from "bcryptjs";

interface SignInParams {
  email: string;
  password: string;
}

export const signInCredentials = async ({ email, password }: SignInParams) => {
  // 1. Find the user by email
  const users = await db
    .select()
    .from(usersTable)
    .where(eq(usersTable.email, email))
    .limit(1);

  if (users.length === 0) {
    return { success: false, error: "User not found" };
  }

  const user = users[0];

  // 2. Check the password
  const passwordMatch = await compare(password, user.passwordHash);

  if (!passwordMatch) {
    return { success: false, error: "Invalid password" };
  }

  // 3. Optional: Create session/token here
  // For now, just return success
  return { success: true };
};
