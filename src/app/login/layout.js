import '../globals.css'

export const metadata = {
  title: 'Login',
  description: 'Login app Iel ce bater ponto',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  )
}
