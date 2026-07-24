import { NextRequest, NextResponse } from 'next/server';import { supplierApi } from '@/lib/supplier';
export async function GET(req:NextRequest){try{return NextResponse.json(await supplierApi.products(req.nextUrl.searchParams.get('q')??''))}catch(e){return NextResponse.json({error:e instanceof Error?e.message:'Supplier error'},{status:503})}}
