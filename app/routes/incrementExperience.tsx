// src/routes/api/incrementExperience.tsx
import { prisma } from '~/db.server'; // データベースの設定に応じて適切にインポートします
import { json, LoaderFunction,LoaderArgs,ActionArgs } from '@remix-run/node';
import { createUserSession, getUserId } from "~/session.server";

export let action = async ({ request }: LoaderArgs) => {
  const userId = await getUserId(request);
  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (!user) {
    return json({ error: "User not found" }, { status: 404 });
  }

  const updatedUser = await prisma.user.update({
    where: { id: userId },
    data: { experiencePoint: user.experiencePoint + 1 },
  });

  return json(updatedUser);
}
