import TopNav from "./top-nav"
import Footer from "./footer"

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <TopNav />
      <main className="pt-20">
        {children}
      </main>
      <Footer />
    </div>
  )
}