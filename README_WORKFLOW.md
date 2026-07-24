# คู่มือการติดตั้งและใช้งานระบบ PREMSHOP-V5 (Digital Marketplace)

ระบบนี้ถูกพัฒนาขึ้นเพื่อเป็นร้านค้าสินค้าดิจิทัลที่สามารถซื้อขายและส่งมอบสินค้า (เช่น Credentials) ได้อัตโนมัติ

## 1. การเตรียมฐานข้อมูล (Supabase)
1.  นำโค้ด SQL จากไฟล์ `prisma/schema.sql` ไปรันใน SQL Editor ของ Supabase เพื่อสร้างตารางที่จำเป็น
2.  ตั้งค่า `DATABASE_URL` ในไฟล์ `.env.local` ให้ตรงกับ Connection String ของ Supabase (แนะนำให้ใช้ค่าจาก `Transaction Mode` สำหรับ Connection Pooling)

## 2. ขั้นตอนการตั้งค่าโปรเจค (Development)
1.  **ติดตั้ง dependencies:**
    ```bash
    npm install
    ```
2.  **อัปเดต Schema ของ Prisma:**
    ```bash
    npx prisma generate
    ```
3.  **นำเข้าข้อมูลสินค้า (Seeding):**
    ```bash
    npx prisma db seed
    ```

## 3. ขั้นตอนการใช้งานระบบ (Workflow)
1.  **สมัครสมาชิก/เข้าสู่ระบบ:** ผู้ใช้เข้าสู่ระบบผ่าน NextAuth (ตามที่โปรเจคเดิมวางไว้)
2.  **เติมเครดิต:** ผู้ใช้เข้าสู่หน้าเติมเครดิต (ใช้ API `/api/topup`) เพื่อเพิ่มยอด `balance` ในฐานข้อมูล
3.  **เลือกซื้อสินค้า:**
    *   ไปที่หน้า `/products` เพื่อดูสินค้า
    *   คลิกดูรายละเอียดสินค้าที่ `/products/[id]`
    *   กดปุ่ม "ซื้อสินค้าทันที" เพื่อยิง Request ไปที่ `/api/purchase`
4.  **ระบบหลังบ้าน (Purchase Logic):**
    *   ระบบตรวจสอบยอดเงินคงเหลือของผู้ใช้
    *   ถ้าเงินพอ: ตัดเงิน -> สร้างบันทึกในตาราง `Purchase` (พร้อมจำลองข้อมูลสินค้า) -> ผู้ใช้ได้รับสินค้าทันที
5.  **ดูสินค้าที่ซื้อแล้ว:**
    *   ไปที่หน้า `/dashboard` เพื่อดูสินค้าที่ซื้อแล้ว (Credentials จะแสดงที่นี่)

## 4. โครงสร้างไฟล์ที่สำคัญ
*   `prisma/schema.prisma`: โครงสร้างฐานข้อมูล
*   `prisma/seed.ts`: สคริปต์เพิ่มข้อมูลสินค้าเริ่มต้น
*   `src/app/api/purchase/route.ts`: ตรรกะการซื้อสินค้าและการตัดเงิน
*   `src/app/api/topup/route.ts`: API สำหรับเติมเงิน
*   `src/app/products/[id]/page.tsx`: หน้าแสดงรายละเอียดสินค้า
*   `src/app/dashboard/page.tsx`: หน้าคลังสินค้าของฉัน
