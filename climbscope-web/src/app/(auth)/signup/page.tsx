"use server";

import { eq } from "drizzle-orm";
import { db } from "../../../../database/DB";
import { usersTable } from "../../../../database/schema";
import { hash } from "bcryptjs";
import { signInCredentials } from "../../../../lib/actions/signin";

interface ClimbScopeUser {
  name: string;
  email: string;
  password: string;
}

const signUp = async ({ name, email, password }: ClimbScopeUser) => {
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

    // Optionally sign in right after
    await signInCredentials({ email, password });

    return {
      success: true,
      user: {
        name,
        email,
      },
    };
  } catch (error) {
    return { success: false, error: "Signup failed" };
  }
};

export default signUp;
