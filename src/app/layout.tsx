import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>
        <div className="min-h-screen bg-zinc-900 pb-5 text-white dark:bg-zinc-100 dark:text-gray-900">
          <div className="m-auto w-[1000px]">{children}</div>
        </div>
      </body>
    </html>
  )
}
