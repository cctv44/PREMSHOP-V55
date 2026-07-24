"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/auth/register", {
      method: "POST",
      body: JSON.stringify(form),
    });
    if (res.ok) {
      alert("สมัครสมาชิกสำเร็จ!");
      router.push("/login");
    } else {
      alert("เกิดข้อผิดพลาดในการสมัคร");
    }
  };

  return (
    <main className="mx-auto max-w-md px-4 py-20">
      <div className="glass p-8 rounded-3xl border border-white/10">
        <h1 className="text-3xl font-black neon mb-6">สร้างบัญชีใหม่</h1>
        <form onSubmit={handleSubmit} className="grid gap-4">
          <input 
            type="text" 
            placeholder="ชื่อของคุณ" 
            onChange={(e) => setForm({...form, name: e.target.value})}
            required 
          />
          <input 
            type="email" 
            placeholder="อีเมล" 
            onChange={(e) => setForm({...form, email: e.target.value})}
            required 
          />
          <input 
            type="password" 
            placeholder="รหัสผ่าน (8 ตัวขึ้นไป)" 
            onChange={(e) => setForm({...form, password: e.target.value})}
            required 
          />
          <button className="btn w-full mt-2" type="submit">สมัครสมาชิก</button>
        </form>
      </div>
    </main>
  );
}
