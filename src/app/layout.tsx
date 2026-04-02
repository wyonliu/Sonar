import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Sonar · 声呐 — 你从未如此了解自己',
  description: 'AI驱动的关系自我发现平台，通过沉浸式场景测试，揭示你在亲密关系中的深层模式。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className="min-h-screen antialiased">
        <div className="starfield" />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  )
}
