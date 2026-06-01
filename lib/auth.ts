import { cookies } from "next/headers";
import { createHmac, timingSafeEqual } from "crypto";

const cookieName = "px_admin_session";

function secret() {
  return process.env.ADMIN_SESSION_SECRET || "development-secret-change-me";
}

export function signSession(value: string) {
  return createHmac("sha256", secret()).update(value).digest("hex");
}

export async function createAdminSession() {
  const value = `admin.${Date.now()}`;
  const token = `${value}.${signSession(value)}`;
  (await cookies()).set(cookieName, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 8,
    path: "/"
  });
}

export async function clearAdminSession() {
  (await cookies()).delete(cookieName);
}

export async function isAdminAuthenticated() {
  const token = (await cookies()).get(cookieName)?.value;
  if (!token) return false;
  const lastDot = token.lastIndexOf(".");
  if (lastDot === -1) return false;
  const value = token.slice(0, lastDot);
  const signature = token.slice(lastDot + 1);
  if (!value || !signature) return false;
  const expected = signSession(value);
  try {
    return timingSafeEqual(Buffer.from(signature), Buffer.from(expected));
  } catch {
    return false;
  }
}
