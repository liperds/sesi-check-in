import './globals.css'

export const metadata = {
  title: 'IEL',
  description: 'Home Do app de Registrar Frequência Iel Ce',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  )
}
