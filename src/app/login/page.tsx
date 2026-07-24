"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (res?.error) {
      setError("อีเมลหรือรหัสผ่านไม่ถูกต้อง");
    } else {
      router.push("/dashboard");
      router.refresh();
    }
  };

  return (
    <main className="mx-auto max-w-md px-4 py-20">
      <div className="glass p-8 rounded-3xl border border-white/10">
        <h1 className="text-3xl font-black neon mb-6">เข้าสู่ระบบ</h1>
        {error && <p className="text-red-400 mb-4 text-sm">{error}</p>}
        <form onSubmit={handleSubmit} className="grid gap-4">
          <input 
            type="email" 
            placeholder="อีเมล" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
          />
          <input 
            type="password" 
            placeholder="รหัสผ่าน" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
          />
          <button className="btn w-full mt-2" type="submit">ล็อกอิน</button>
        </form>
        <p className="mt-6 text-center text-white/60 text-sm">
          ยังไม่มีบัญชี? <a href="/register" className="text-fuchsia-400">สมัครสมาชิก</a>
        </p>
      </div>
    </main>
  );
}
