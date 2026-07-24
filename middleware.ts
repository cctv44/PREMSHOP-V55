import { NextResponse, type NextRequest } from 'next/server';
const buckets=new Map<string,{count:number;reset:number}>();
export function middleware(req:NextRequest){const key=req.headers.get('x-forwarded-for')??'local';const now=Date.now();const bucket=buckets.get(key)??{count:0,reset:now+60_000};if(bucket.reset<now){bucket.count=0;bucket.reset=now+60_000}bucket.count++;buckets.set(key,bucket);if(bucket.count>120)return NextResponse.json({error:'Rate limit exceeded'},{status:429});return NextResponse.next()}
export const config={matcher:'/api/:path*'};
