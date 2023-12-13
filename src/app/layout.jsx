import Image from "next/image"
import Nav from "../components/Nav"
import Template from "../components/Template"
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
        <div className="absolute top-0 left-0 z-[-1] inset-0 max-md:w-[90%] mx-auto ">
          <Image
            src="/arrows.png"
            alt="arrows"
            fill
            className="object-cover max-md:object-contain"
          />
        </div>
        <Nav />
        <Template>{children}</Template>
      </body>
    </html>
  )
}
