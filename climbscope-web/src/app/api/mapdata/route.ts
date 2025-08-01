// /app/api/mapdata/route.ts
import { NextResponse } from 'next/server'
import { db } from '../../../../database/DB'
import { routesTable } from '../../../../database/schema'

export const GET = async () => {
  const routes = await db.select().from(routesTable)
  return NextResponse.json(routes)
}
