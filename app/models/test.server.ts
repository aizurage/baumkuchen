import { prisma } from "~/db.server";
import type { Post, Event, EventUserInterface } from "@prisma/client";
import { s } from "vitest/dist/types-63abf2e0";

export async function getEvents() {
  return prisma.event.findMany();
}

export async function getlist(
  eventId :EventUserInterface["postid"] 
) {
  return prisma.eventUserInterface.findMany({
    where: { postid: eventId}
  });
}


export async function createEvent(
      event: Pick<Event, "title"| "description" | "creatorid">
){ 
  return prisma.event.create({data : event});
}

export async function joinEvent(
      eventUserInterface: Pick<EventUserInterface, "id" |"postid" | "userid">
){
  return prisma.eventUserInterface.create({data : eventUserInterface})
}

export async function deleteEvent(
  eventId: Event['id'] // 引数を Event の ID として受け取る
) {
  return prisma.event.delete({
    where: { id: eventId } // eventId を直接使用
  });
}

// export async function deleteJoin(
//   postId: EventUserInterface['postid'], userId :EventUserInterface['userid']
// ) {
//   return prisma.eventUserInterface.delete({
//     where: {
//       AND: [
//         { postid: postId },
//         { userid: userId }
//       ]
//     } 
//   })
// }
export async function getEvent(id : number) {
  const eventID = Math.floor(id);
  return prisma.event.findUnique({ where: { id : eventID } });
}

export async function getParticipantsFromEventId(eventID : EventUserInterface["id"] ){
  return prisma.eventUserInterface.findMany({
    where : {id :eventID}
  })
}
