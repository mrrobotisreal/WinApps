import Layout from "@/components/layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function PortfolioPage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center space-y-6 mb-12">
          <h1 className="text-4xl md:text-6xl font-bold">Portfolio</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional work experience and contributions to various companies and projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Amazon Connect Customer Profiles</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Software Engineer at Amazon Web Services working on Customer Profiles service for Amazon Connect.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>VMware</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Software engineering work at VMware contributing to enterprise virtualization solutions.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Double Raven Solutions LLC</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Freelance development and consulting work for various clients and projects.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Personal Projects</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Various mobile apps, web applications, and open source contributions.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  )
}