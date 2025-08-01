// /app/api/mapdata/route.ts
import { NextResponse } from 'next/server'
import { db } from '../../../../database/DB'
import { eventsTable } from '../../../../database/schema'

export const GET = async () => {
  const events = await db.select().from(eventsTable)
  return NextResponse.json(events)
}
