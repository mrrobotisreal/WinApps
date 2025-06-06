import Layout from "@/components/layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export default function AboutPage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center space-y-6 mb-12">
          <h1 className="text-4xl md:text-6xl font-bold">
          <span className="bg-gradient-to-b dark:from-white dark:to-gray-400 from-gray-400 to-black bg-clip-text text-transparent">
              About{" "}
            </span>
            <span className="bg-gradient-to-b from-orange-300 to-orange-900 bg-clip-text text-transparent">
              Mitchell{" "}
            </span>
            <span className="bg-gradient-to-b from-purple-300 to-purple-900 bg-clip-text text-transparent">
              Wintrow
            </span>
          </h1>
          <div className="max-w-4xl mx-auto">
            <Image
              src="https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/mitchProfilePic.webp"
              alt="Mitchell Wintrow"
              width={256}
              height={256}
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
                <li>• Software Engineer at Double Raven Solutions LLC</li>
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
                <li>• Mobile Development (iOS, Android, React Native, Expo, Kotlin, Swift, Flutter)</li>
                <li>• Web Development (React, Next.js, TypeScript, Svelte, Tailwind CSS)</li>
                <li>• Backend Development (Java, Python, Go, Node.js, MySQL, PostgreSQL, MongoDB, Redis, RabbitMQ, Kafka)</li>
                <li>• Cloud Services (AWS, Docker, Kubernetes, Google Cloud Platform, Vercel)</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Current Projects</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Journey App - iOS journaling application and website</li>
                <li>• Voizy - Android social media app</li>
                <li>• RSS Today - RSS news reader web app and mobile app</li>
                <li>• Various web tools and utilities</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Education & Learning</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Bachelor of Science in Computer Science from WGU</li>
                <li>• Active in the developer community</li>
                <li>• Technical blog writer and educator</li>
                <li>• Conference attendee and participant (AWS re:Invent, Web Summit, etc.)</li>
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
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  )
}