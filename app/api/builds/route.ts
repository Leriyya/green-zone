import { NextResponse } from 'next/server'
import { API_BASE_URL } from '@/lib/builds'

export async function GET() {
  const res = await fetch(`${API_BASE_URL}/builds`, { cache: 'no-store' })
  if (!res.ok) return NextResponse.json({ builds: [] }, { status: res.status })
  const data = await res.json()
  return NextResponse.json(data)
}
