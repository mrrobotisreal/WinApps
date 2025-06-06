import Layout from "@/components/layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ProjectsPage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center space-y-6 mb-12">
          <h1 className="text-4xl md:text-6xl font-bold">Current Projects</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore my latest mobile apps and web applications that I&apos;m currently working on.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Journey App</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                iOS journaling app for personal growth and reflection.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Voizy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Android social media app.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Aspire To Expand</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Language learning platform on desktop, web, and mobile.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Media Manipulator Pro</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Web app for multimedia conversions and editing.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quantum River</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Web app for generating custom QR codes.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Text Formatter</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Web app for formatting text that stays formatted across websites like LinkedIn, Twitter, Facebook, etc.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>RSS Today</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                RSS news reader web app.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  )
}