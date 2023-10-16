import '../globals.css'

export const metadata = {
  title: 'QR Code Iel-ce',
  description: 'App QR Code Iel-ce',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  )
}