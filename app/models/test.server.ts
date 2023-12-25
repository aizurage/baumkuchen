import { prisma } from "~/db.server";
import type { Post, Event } from "@prisma/client";

export async function getEvents() {
  return prisma.event.findMany();
}

export async function createEvent(
      event: Pick<Event, "title"| "description" | "creatorid">
){ 
  return prisma.event.create({data : event});
}
