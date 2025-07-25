"use server";

import { eq } from "drizzle-orm";
import { db } from "../../database/DB";
import { usersTable } from "../../database/schema";
import { hash } from "bcryptjs";
import { signInCredentials } from "./signin";

interface ClimbScopeUser {
  name: string;
  email: string;
  password: string;
}

const signUp = async (params: ClimbScopeUser) => {
  const { name, email, password } = params;

  // Check if the user already exists
  const existingUser = await db
    .select()
    .from(usersTable)
    .where(eq(usersTable.email, email))
    .limit(1);

  if (existingUser.length > 0) {
    return { success: false, error: "User already exists" };
  }

  const hashedPassword = await hash(password, 10);

  try {
    await db.insert(usersTable).values({
      name,
      email,
      passwordHash: hashedPassword,
    });
    await signInCredentials({ email, password });

    return { success: true };
  } catch (error) {
    return { success: false, error: "Signup failed" };
  }
};

export default signUp;