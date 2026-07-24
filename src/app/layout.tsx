import type { Metadata } from 'next';import './globals.css';import { Header } from '@/components/Header';import { Footer } from '@/components/Footer';
export const metadata:Metadata={title:'PREMSHOP - Premium Account Marketplace',description:'ซื้อบัญชีพรีเมียมออนไลน์ จัดส่งอัตโนมัติ ปลอดภัย รองรับ PromptPay TrueMoney โอนธนาคาร และบัตรเครดิต'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="th"><body><Header/>{children}<Footer/></body></html>}
