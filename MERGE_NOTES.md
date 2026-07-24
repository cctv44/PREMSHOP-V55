# Merge Notes — main + cctv44-patch-2 → v2 (final)

วันที่รวม: 2026-07-24

## สรุปสั้นๆ
เวอร์ชันนี้ใช้ **cctv44-patch-2 เป็นฐานหลัก** เพราะเป็นเวอร์ชันเดียวที่มีระบบซื้อของทำงานจริงครบวงจร
(เลือกสินค้า → ตัดยอดเงินในกระเป๋า → บันทึกการซื้อ → แสดงในหน้า dashboard) ส่วน branch `main` เดิม
มี Prisma schema ที่ใหญ่กว่ามาก (Order, Payment, Transaction, Wishlist, CartItem, Coupon, Review,
Notification, Setting, Log) แต่ตรวจสอบแล้วพบว่า**ไม่มีหน้าเว็บหน้าไหนต่อกับโมเดลเหล่านี้จริง** —
เป็นแค่หน้า placeholder (`PageShell` + ฟอร์มเปล่า) ทั้งหมด จึงตัดสินใจไม่ดึง schema ส่วนนั้นเข้ามา
เพื่อไม่ให้ฐานข้อมูลซับซ้อนเกินกว่าที่แอปใช้งานจริง

## สิ่งที่แก้ไปแล้ว (สำคัญ — เคยทำให้ deploy บน Vercel พังแบบสุ่ม)
1. **`next-auth`**: เปลี่ยนจาก `"latest"` (ซึ่ง resolve เป็น v4.24.15) เป็น `"^5.0.0-beta.32"` ให้ตรงกับ
   syntax v5 ที่โค้ดใช้อยู่แล้ว (`NextAuth({...})` ที่ return `{handlers, auth, signIn, signOut}`)
   — นี่คือสาเหตุหลักที่ deploy พัง
2. แก้ `src/app/api/auth/[...nextauth]/route.ts` ให้ export handler แบบ v5 (`export const {GET, POST} = handlers`)
3. แก้ชื่อ env var ไม่ตรงกัน: โค้ดเดิมอ่าน `AUTH_GOOGLE_ID/SECRET` แต่ `.env.example` ใช้
   `GOOGLE_CLIENT_ID/SECRET` → แก้ให้ตรงกันแล้ว (เดิม Google login จะใช้ไม่ได้เงียบๆ)
4. แก้ TypeScript narrowing error ของ `session.user.email` ใน `orders/route.ts` และ `purchase/route.ts`
5. **ลบรหัสผ่าน Supabase จริง + NEXTAUTH_SECRET จริงที่หลุดอยู่ใน `.env.example`** ออก
   → **ต้องไปเปลี่ยนรหัสผ่าน Supabase และสร้าง secret ใหม่ก่อน deploy จริง**
6. เพิ่ม `package-lock.json` เข้าไปในโปรเจกต์ (ของเดิมไม่มีเลยทั้ง main และ patch) เพื่อ pin เวอร์ชัน
   dependency ทั้งหมดให้ deploy ซ้ำได้ผลลัพธ์เดิมทุกครั้ง

## สิ่งที่ "หายไป" จาก main (ตั้งใจตัดออก ไม่ใช่ตกหล่น)
โมเดลต่อไปนี้เอาออกจาก `prisma/schema.prisma` เพราะไม่มีโค้ดฝั่งไหนเรียกใช้จริง:
`Profile`, `Order`, `Transaction`, `Payment`, `Wishlist`, `CartItem`, `Coupon`, `Review`,
`Notification`, `Setting`, `Log`

หน้าเว็บต่อไปนี้ยังอยู่ในโปรเจกต์ (มาจาก patch v2 อยู่แล้ว) แต่**ยังเป็น static/placeholder**
ยังไม่ได้ต่อฐานข้อมูล รอพัฒนาต่อเมื่อพร้อม:
`/wishlist`, `/reviews`, `/notifications`, `/settings`, `/purchase-history`, `/profile`

## ถ้าอนาคตอยากทำฟีเจอร์พวกนี้กลับมา
แนะนำให้เพิ่มโมเดลกลับเข้า schema ทีละตัวตามฟีเจอร์ที่จะทำจริง (ไม่ต้องเอากลับมาทั้งหมดทีเดียว)
แล้วต่อ Prisma query เข้าไปในหน้าที่เกี่ยวข้องตามที่ patch v2 ทำกับหน้า dashboard/products เป็นตัวอย่าง
