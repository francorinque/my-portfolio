import Image from "next/image"
import Nav from "../components/Nav"
import Favicon from "/public/images/Metadata/favicon.ico"

import "./globals.css"

export const metadata = {
  title: "FR - Home",
  description: "Portfolio created with nextjs",
  icons: [{ rel: "icon", url: Favicon.src }],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>

        <main className="app">
          <Nav />
          {children}
        </main>
      </body>
    </html>
  )
}
