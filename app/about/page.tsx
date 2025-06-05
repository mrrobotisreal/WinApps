import Layout from "@/components/layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export default function AboutPage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center space-y-6 mb-12">
          <h1 className="text-4xl md:text-6xl font-bold">About Mitchell Wintrow</h1>
          <div className="max-w-4xl mx-auto">
            <Image
              src="https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/LinkedIn_ProfilePic.png"
              alt="Mitchell Wintrow"
              width={200}
              height={200}
              className="rounded-full mx-auto mb-8 shadow-lg"
            />
            <p className="text-lg text-muted-foreground leading-relaxed">
              Software Engineer passionate about creating innovative mobile apps, web applications,
              and cloud solutions. With experience at major tech companies and a drive for continuous
              learning, I specialize in full-stack development using modern technologies.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Professional Experience</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Software Engineer at Amazon Web Services</li>
                <li>• Software Engineer at VMware</li>
                <li>• Freelance Developer at Double Raven Solutions LLC</li>
                <li>• Full-stack Development Specialist</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Technical Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Mobile Development (iOS, Android, React Native)</li>
                <li>• Web Development (React, Next.js, TypeScript)</li>
                <li>• Backend Development (Java, Python, Go)</li>
                <li>• Cloud Services (AWS, Docker, Kubernetes)</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Current Projects</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Journey App - iOS journaling application</li>
                <li>• Voizy - Android voice translation app</li>
                <li>• Various web tools and utilities</li>
                <li>• Open source contributions</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Education & Learning</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Continuous learner in emerging technologies</li>
                <li>• Active in the developer community</li>
                <li>• Technical blog writer and educator</li>
                <li>• Conference attendee and participant</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <Card>
            <CardHeader>
              <CardTitle>Get In Touch</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                I&apos;m always interested in discussing new opportunities, collaborations,
                or just connecting with fellow developers and tech enthusiasts.
              </p>
              <div className="space-y-2">
                <p>Email: mitchellwintrow@gmail.com</p>
                <p>Contact: contact@winapps.io</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  )
}