import { prisma } from "~/db.server";
import type { Post, Event, EventUserInterface } from "@prisma/client";

export async function getEvents() {
  return prisma.event.findMany();
}

export async function createEvent(
      event: Pick<Event, "title"| "description" | "creatorid">
){ 
  return prisma.event.create({data : event});
}

export async function joinEvent(
      eventUserInterface: Pick<EventUserInterface, "id" | "userid">
){
  return prisma.eventUserInterface.create({data : eventUserInterface})
}

export async function getParticipantsFromEventId(eventID : EventUserInterface["id"] ){
  return prisma.eventUserInterface.findMany({
    where : {id :eventID}
  })
}
