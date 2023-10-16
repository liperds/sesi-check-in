import '../globals.css'

export const metadata = {
  title: 'Sucesso QR Code',
  description: 'Tela de Sucesso QR Code',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  )
}