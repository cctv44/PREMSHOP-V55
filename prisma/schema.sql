-- สร้างตาราง Category
CREATE TABLE "Category" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL UNIQUE,
    "icon" TEXT
);

-- สร้างตาราง Product
CREATE TABLE "Product" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "price" DECIMAL(12,2) NOT NULL,
    "categoryId" TEXT NOT NULL REFERENCES "Category"("id"),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL
);

-- เพิ่มคอลัมน์ balance ให้ตาราง User (สมมติว่าตาราง User มีอยู่แล้ว)
ALTER TABLE "User" ADD COLUMN "balance" DECIMAL(12,2) NOT NULL DEFAULT 0.00;

-- สร้างตาราง Purchase
CREATE TABLE "Purchase" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL REFERENCES "User"("id"),
    "productId" TEXT NOT NULL REFERENCES "Product"("id"),
    "credentials" TEXT NOT NULL,
    "purchasedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);
