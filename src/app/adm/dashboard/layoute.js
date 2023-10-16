import '../globals.css'

export const metadata = {
  title: 'Início IEL',
  description: 'Início Frequência',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  )
}