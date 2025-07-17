"use client";

import Layout from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import RollingGallery from "@/components/blocks/Components/RollingGallery/RollingGallery";
import Link from "next/link";
import Image from "next/image";

const screenshots: string[] = [
  // "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/double-raven/dr1.webp",
  // "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/double-raven/dr2.webp",
  // "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/double-raven/dr3.webp",
  // "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/double-raven/dr4.webp",
  // "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/double-raven/dr5.webp",
  // "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/double-raven/drWeb1.webp",
  // "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/double-raven/drWeb2.webp",
  // "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/double-raven/drWeb3.webp",
  // "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/double-raven/drWeb4.webp",
  // "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/double-raven/drWeb5.webp",
  // "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/double-raven/drWeb6.webp",
];

export default function DoubleRavenSolutionsLLCPage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        <nav className="flex mb-8" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link
                href="/"
                className="text-orange-600 hover:text-purple-800 dark:text-orange-400 dark:hover:text-purple-300"
              >
                Home
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <span className="mx-2">/</span>
                <Link
                  href="/portfolio"
                  className="text-orange-600 hover:text-purple-800 dark:text-orange-400 dark:hover:text-purple-300"
                >
                  Portfolio
                </Link>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <span className="mx-2">/</span>
                <span className="text-muted-foreground">
                  Double Raven Solutions LLC
                </span>
              </div>
            </li>
          </ol>
        </nav>

        <div className="space-y-8">
          {/* Header */}
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-b from-orange-300 to-orange-900 bg-clip-text text-transparent">
                Double Raven
              </span>{" "}
              <span className="bg-gradient-to-b from-purple-300 to-purple-900 bg-clip-text text-transparent">
                Solutions LLC
              </span>
            </h1>
          </div>

          {/* Main Content Card */}
          <Card>
            <CardContent className="p-6 space-y-8">
              {/* Banner Image */}
              <div className="w-full">
                <Image
                  // src="https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/double-raven/DoubleRavenBanner.webp"
                  src="https://pub-c0247ba91a4a415a9ff6d54583d7667c.r2.dev/WinApps_DoubleRavenBanner.webp"
                  alt="Double Raven Solutions LLC Cover"
                  width={1200}
                  height={600}
                  className="w-full rounded-lg"
                />
              </div>

              {/* Job Details */}
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Position</h2>
                  <p className="text-muted-foreground">
                    Fullstack Engineer (Front End, Back End, Mobile)
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-2">Start & End Dates</h2>
                  <p className="text-muted-foreground">
                    {new Date("2020-06-02T00:00:00Z").toLocaleDateString()} -{" "}
                    {new Date("2022-01-02T00:00:00Z").toLocaleDateString()}
                  </p>
                </div>
              </div>

              {/* Responsibilities */}
              <div>
                <h2 className="text-2xl font-bold mb-4">Responsibilities</h2>
                <p className="text-muted-foreground mb-4">
                  Some of my responsibilities as the sole engineer on this
                  project include:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>
                      Research Cutting Edge OSINT Techniques/Technologies and
                      Learn Mass Data-Visualization Techniques, Geomapping, and
                      Identity Resolution.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>
                      Take Feature Specifications and Architecture Diagrams and
                      Create a Simple 1-Click UI Design for Detectives/Law
                      Enforcement.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>
                      Build a Scalable Backend API Control Plane System for
                      Orchestrating Data Collection and Analysis.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>
                      Create Seamless Integrations with 3rd-Party Technologies
                      and Services.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>
                      Build a Secure, Integrated UI for Handling Mass Data
                      Interactions and Visualizations.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>
                      Implement a System for Pushing Real-Time Case Update
                      Notifications.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Contributions */}
              <div>
                <h2 className="text-2xl font-bold mb-4">Contributions</h2>
                <p className="text-muted-foreground mb-6">
                  Some of my contributions in this project include, but are not
                  limited to (I will continue to add more):
                </p>

                <Accordion type="multiple" className="w-full">
                  {/* Back End Systems */}
                  <AccordionItem value="backend-systems">
                    <AccordionTrigger className="text-xl font-semibold">
                      Back End Systems
                    </AccordionTrigger>
                    <AccordionContent>
                      <Accordion type="multiple" className="w-full">
                        <AccordionItem value="tech-stack">
                          <AccordionTrigger>
                            Identify appropriate tech stacks for the given
                            microservice requirements
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="space-y-4">
                              <p className="text-muted-foreground">
                                Given that almost all of the back end
                                microservices would be handling very large
                                amounts of data, I determined that speed and
                                efficiency were the most important factors in
                                choosing the tech stack.
                              </p>

                              <div className="space-y-4">
                                <div>
                                  <h4 className="font-semibold mb-2">
                                    Core Technologies:
                                  </h4>
                                  <div className="flex flex-wrap gap-2 mb-3">
                                    <Badge variant="secondary">Golang</Badge>
                                    <Badge variant="secondary">
                                      PostgreSQL
                                    </Badge>
                                    <Badge variant="secondary">MongoDB</Badge>
                                    <Badge variant="secondary">Redis</Badge>
                                    <Badge variant="secondary">Kafka</Badge>
                                  </div>
                                  <p className="text-sm text-muted-foreground">
                                    For most back end microservices, I chose{" "}
                                    <strong>Golang</strong> as the primary
                                    language for speed and efficiency,{" "}
                                    <strong>PostgreSQL</strong> for structured
                                    data, and <strong>MongoDB</strong> for
                                    semi-structured and unstructured data.{" "}
                                    <strong>Redis</strong> for caching and{" "}
                                    <strong>Kafka</strong> for message queuing.
                                  </p>
                                </div>

                                <div>
                                  <h4 className="font-semibold mb-2">
                                    DevOps & Infrastructure:
                                  </h4>
                                  <div className="flex flex-wrap gap-2 mb-3">
                                    <Badge variant="secondary">Docker</Badge>
                                    <Badge variant="secondary">
                                      Kubernetes
                                    </Badge>
                                    <Badge variant="secondary">
                                      GitHub Actions
                                    </Badge>
                                    <Badge variant="secondary">GraphQL</Badge>
                                  </div>
                                  <p className="text-sm text-muted-foreground">
                                    <strong>Docker</strong> for
                                    containerization,{" "}
                                    <strong>Kubernetes</strong> for
                                    orchestration, and{" "}
                                    <strong>GitHub Actions</strong> for CI/CD.
                                    For the API, I used <strong>GraphQL</strong>{" "}
                                    to allow for more flexible queries and
                                    mutations, and to reduce the amount of data
                                    sent over the network.
                                  </p>
                                </div>

                                <div>
                                  <h4 className="font-semibold mb-2">
                                    AI & Machine Learning:
                                  </h4>
                                  <div className="flex flex-wrap gap-2 mb-3">
                                    <Badge variant="outline">Python</Badge>
                                    <Badge variant="outline">NLTK</Badge>
                                    <Badge variant="outline">spaCy</Badge>
                                    <Badge variant="outline">TensorFlow</Badge>
                                  </div>
                                  <p className="text-sm text-muted-foreground">
                                    For the NLP and AI components, I used{" "}
                                    <strong>Python</strong> with libraries such
                                    as <em>NLTK</em>, <em>spaCy</em>, and{" "}
                                    <em>TensorFlow</em> for natural language
                                    processing and machine learning tasks, while
                                    integrating with other 3rd party services.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </AccordionContent>
                  </AccordionItem>

                  {/* UI/UX Design */}
                  <AccordionItem value="ui-ux-design">
                    <AccordionTrigger className="text-xl font-semibold">
                      UI/UX Design
                    </AccordionTrigger>
                    <AccordionContent>
                      <Accordion type="multiple" className="w-full">
                        <AccordionItem value="user-friendly-design">
                          <AccordionTrigger>
                            Design a user-friendly UI following a minimum 1-2
                            click rule
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="space-y-4">
                              <p className="text-muted-foreground">
                                The UI was designed to be intuitive and
                                user-friendly, following a minimum 1-2 click
                                rule. This means that users can access the most
                                important features and functionalities with just
                                one or two clicks, reducing the time and effort
                                required to complete tasks.
                              </p>

                              <div className="p-4 bg-muted rounded-lg">
                                <h4 className="font-semibold mb-2">
                                  Target Users:
                                </h4>
                                <div className="flex flex-wrap gap-2 mb-3">
                                  <Badge variant="outline">
                                    Law Enforcement Officers
                                  </Badge>
                                  <Badge variant="outline">Detectives</Badge>
                                  <Badge variant="outline">
                                    Private Investigators
                                  </Badge>
                                </div>
                                <p className="text-sm text-muted-foreground">
                                  This is important because the personas using
                                  this application may not have the level of
                                  technical expertise usually associated with
                                  such powerful big data and data visualization
                                  tools that are notoriously difficult to use.
                                </p>
                              </div>

                              <div>
                                <h4 className="font-semibold mb-2">
                                  Frontend Technologies:
                                </h4>
                                <div className="flex flex-wrap gap-2 mb-3">
                                  <Badge variant="secondary">TypeScript</Badge>
                                  <Badge variant="secondary">React</Badge>
                                  <Badge variant="secondary">React Query</Badge>
                                  <Badge variant="secondary">Next.js</Badge>
                                  <Badge variant="secondary">D3.js</Badge>
                                </div>
                                <p className="text-sm text-muted-foreground">
                                  The UI was built using modern web
                                  technologies, with <strong>D3.js</strong>{" "}
                                  specifically for creating powerful and
                                  interactive data visualizations.
                                </p>
                              </div>

                              <p className="text-muted-foreground">
                                The design also incorporates best practices for
                                usability and accessibility, ensuring that all
                                users can easily navigate and interact with the
                                application.
                              </p>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              {/* Evidence Section */}
              <div>
                <h2 className="text-2xl font-bold mb-4">Evidence</h2>
                <div className="flex justify-center mb-6">
                  <span className="text-yellow-300 font-bold text-lg">
                    Note: There are currently issues accessing these images,
                    they will be back up soon.
                  </span>
                </div>
                <p className="text-muted-foreground mb-6">
                  Screenshots from the Double Raven Solutions LLC website
                  showcasing the project and services:
                </p>

                <div className="w-full h-full">
                  <RollingGallery
                    images={screenshots}
                    autoplay={true}
                    pauseOnHover={true}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
