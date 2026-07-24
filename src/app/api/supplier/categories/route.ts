import { NextResponse } from 'next/server';import { supplierApi } from '@/lib/supplier';
export async function GET(){try{return NextResponse.json(await supplierApi.categories())}catch(e){return NextResponse.json({error:e instanceof Error?e.message:'Supplier error'},{status:503})}}
