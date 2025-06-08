"use client"

import Layout from "@/components/layout"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"

export default function VMwarePage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        <nav className="flex mb-8" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link href="/" className="text-orange-600 hover:text-purple-800 dark:text-orange-400 dark:hover:text-purple-300">
                Home
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <span className="mx-2">/</span>
                <Link href="/portfolio" className="text-orange-600 hover:text-purple-800 dark:text-orange-400 dark:hover:text-purple-300">
                  Portfolio
                </Link>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <span className="mx-2">/</span>
                <span className="text-muted-foreground">VMware</span>
              </div>
            </li>
          </ol>
        </nav>

        <div className="space-y-8">
          {/* Header */}
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-b from-orange-300 to-orange-900 bg-clip-text text-transparent">
                VM
              </span>
              <span className="bg-gradient-to-b from-purple-300 to-purple-900 bg-clip-text text-transparent">
                ware
              </span>
            </h1>
          </div>

          {/* Main Content Card */}
          <Card>
            <CardContent className="p-6 space-y-8">
              <Image
                src="https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/vmware/VMwareBanner.webp"
                alt="VMware Cover"
                width={1200}
                height={600}
                className="w-full rounded-lg"
              />

              {/* Job Details */}
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Position</h2>
                  <p className="text-muted-foreground">
                    Software Engineer
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-2">Start & End Dates</h2>
                  <p className="text-muted-foreground">
                    {new Date("2022-05-30T00:00:00Z").toLocaleDateString()} - {new Date("2022-08-05T00:00:00Z").toLocaleDateString()}
                  </p>
                </div>
              </div>

              {/* Responsibilities */}
              <div>
                <h2 className="text-2xl font-bold mb-4">Responsibilities</h2>
                <p className="text-muted-foreground mb-4">
                  During my time at VMware, I focused on backend development and DevOps practices, with key responsibilities including:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Build and maintain RESTful API servers using modern Java development practices and enterprise-grade frameworks.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Implement Test Driven Development (TDD) methodologies to ensure code quality and reliability.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Develop comprehensive unit tests and integration tests to maintain high code coverage and system reliability.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Create and optimize Docker container images for application deployment and distribution.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Configure and manage Kubernetes clusters with auto-scaling capabilities to handle variable workloads.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Collaborate with team members on enterprise software solutions and best practices for scalable applications.</span>
                  </li>
                </ul>
              </div>

              {/* Contributions */}
              <div>
                <h2 className="text-2xl font-bold mb-4">Contributions</h2>
                <p className="text-muted-foreground mb-6">
                  My key contributions during my tenure at VMware focused on backend development excellence and modern DevOps practices:
                </p>

                <Accordion type="multiple" className="w-full">
                  {/* Backend Development */}
                  <AccordionItem value="backend-development">
                    <AccordionTrigger className="text-xl font-semibold">
                      Backend Development & APIs
                    </AccordionTrigger>
                    <AccordionContent>
                      <Accordion type="multiple" className="w-full">
                        <AccordionItem value="restful-apis">
                          <AccordionTrigger>
                            RESTful API Development with Enterprise Java Stack
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="space-y-4">
                              <p className="text-muted-foreground">
                                Focused on building robust, scalable RESTful API servers using modern Java development practices and enterprise-grade frameworks.
                              </p>

                              <div className="space-y-4">
                                <div>
                                  <h4 className="font-semibold mb-2">Core Java Technologies:</h4>
                                  <div className="flex flex-wrap gap-2 mb-3">
                                    <Badge variant="secondary">Java 17</Badge>
                                    <Badge variant="secondary">Spring Boot</Badge>
                                    <Badge variant="secondary">Hibernate</Badge>
                                  </div>
                                  <p className="text-sm text-muted-foreground">
                                    Leveraged <strong>Java 17</strong> features and best practices with <strong>Spring Boot</strong> for rapid application development and <strong>Hibernate</strong> for robust object-relational mapping and database interactions.
                                  </p>
                                </div>

                                <div>
                                  <h4 className="font-semibold mb-2">Database Technologies:</h4>
                                  <div className="flex flex-wrap gap-2 mb-3">
                                    <Badge variant="secondary">PostgreSQL</Badge>
                                    <Badge variant="secondary">H2</Badge>
                                  </div>
                                  <p className="text-sm text-muted-foreground">
                                    Utilized <strong>PostgreSQL</strong> for production database requirements and <strong>H2</strong> for development and testing environments, ensuring seamless database operations across different deployment stages.
                                  </p>
                                </div>

                                <div className="p-4 bg-muted rounded-lg">
                                  <h4 className="font-semibold mb-2">API Design Principles:</h4>
                                  <ul className="text-sm text-muted-foreground space-y-1">
                                    <li>• RESTful architecture following HTTP standards and best practices</li>
                                    <li>• Proper HTTP status codes and error handling</li>
                                    <li>• JSON-based request/response formats</li>
                                    <li>• Stateless design for scalability</li>
                                    <li>• Comprehensive API documentation</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Testing & Quality Assurance */}
                  <AccordionItem value="testing-qa">
                    <AccordionTrigger className="text-xl font-semibold">
                      Testing & Quality Assurance
                    </AccordionTrigger>
                    <AccordionContent>
                      <Accordion type="multiple" className="w-full">
                        <AccordionItem value="tdd-practices">
                          <AccordionTrigger>
                            Test Driven Development (TDD) Implementation
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="space-y-4">
                              <p className="text-muted-foreground">
                                Practiced Test Driven Development methodologies to ensure high code quality, reliability, and maintainability throughout the development lifecycle.
                              </p>

                              <div className="space-y-4">
                                <div>
                                  <h4 className="font-semibold mb-2">Testing Frameworks:</h4>
                                  <div className="flex flex-wrap gap-2 mb-3">
                                    <Badge variant="secondary">JUnit</Badge>
                                    <Badge variant="secondary">Mockito</Badge>
                                  </div>
                                  <p className="text-sm text-muted-foreground">
                                    Implemented comprehensive testing suites using <strong>JUnit</strong> for unit testing framework and <strong>Mockito</strong> for mocking dependencies and creating isolated test environments.
                                  </p>
                                </div>

                                <div className="p-4 bg-muted rounded-lg">
                                  <h4 className="font-semibold mb-2">TDD Workflow:</h4>
                                  <div className="space-y-2 text-sm text-muted-foreground">
                                    <div className="flex items-center">
                                      <span className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center mr-2 text-xs">1</span>
                                      <span><strong>Red:</strong> Write failing tests first to define expected behavior</span>
                                    </div>
                                    <div className="flex items-center">
                                      <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center mr-2 text-xs">2</span>
                                      <span><strong>Green:</strong> Write minimal code to make tests pass</span>
                                    </div>
                                    <div className="flex items-center">
                                      <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center mr-2 text-xs">3</span>
                                      <span><strong>Refactor:</strong> Improve code quality while maintaining test coverage</span>
                                    </div>
                                  </div>
                                </div>

                                <div>
                                  <h4 className="font-semibold mb-2">Testing Coverage:</h4>
                                  <ul className="text-sm text-muted-foreground space-y-1">
                                    <li>• <strong>Unit Tests:</strong> Individual component and method testing</li>
                                    <li>• <strong>Integration Tests:</strong> End-to-end API and database interaction testing</li>
                                    <li>• <strong>Mock Testing:</strong> Isolated testing with external dependency mocking</li>
                                    <li>• <strong>Edge Case Testing:</strong> Boundary conditions and error scenarios</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </AccordionContent>
                  </AccordionItem>

                  {/* DevOps & Infrastructure */}
                  <AccordionItem value="devops-infrastructure">
                    <AccordionTrigger className="text-xl font-semibold">
                      DevOps & Infrastructure
                    </AccordionTrigger>
                    <AccordionContent>
                      <Accordion type="multiple" className="w-full">
                        <AccordionItem value="containerization-orchestration">
                          <AccordionTrigger>
                            Containerization and Kubernetes Orchestration
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="space-y-4">
                              <p className="text-muted-foreground">
                                Developed and configured containerized applications with Kubernetes orchestration for scalable, reliable deployments in enterprise environments.
                              </p>

                              <div className="space-y-4">
                                <div>
                                  <h4 className="font-semibold mb-2">Container Technologies:</h4>
                                  <div className="flex flex-wrap gap-2 mb-3">
                                    <Badge variant="secondary">Docker</Badge>
                                    <Badge variant="secondary">Kubernetes</Badge>
                                  </div>
                                  <p className="text-sm text-muted-foreground">
                                    Created optimized <strong>Docker</strong> images for application packaging and deployment, and configured <strong>Kubernetes</strong> clusters for automated scaling and orchestration.
                                  </p>
                                </div>

                                <div className="p-4 bg-muted rounded-lg">
                                  <h4 className="font-semibold mb-2">Kubernetes Features Implemented:</h4>
                                  <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                                    <div>
                                      <h5 className="font-medium mb-1">Auto-scaling:</h5>
                                      <ul className="space-y-1">
                                        <li>• Horizontal Pod Autoscaler (HPA)</li>
                                        <li>• Resource-based scaling policies</li>
                                        <li>• Dynamic workload management</li>
                                      </ul>
                                    </div>
                                    <div>
                                      <h5 className="font-medium mb-1">Cluster Management:</h5>
                                      <ul className="space-y-1">
                                        <li>• Pod lifecycle management</li>
                                        <li>• Service discovery and load balancing</li>
                                        <li>• Health checks and monitoring</li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>

                                <div>
                                  <h4 className="font-semibold mb-2">Docker Optimization:</h4>
                                  <ul className="text-sm text-muted-foreground space-y-1">
                                    <li>• <strong>Multi-stage builds:</strong> Reduced image size and improved security</li>
                                    <li>• <strong>Layer optimization:</strong> Efficient caching and faster builds</li>
                                    <li>• <strong>Security scanning:</strong> Vulnerability assessment and remediation</li>
                                    <li>• <strong>Resource limits:</strong> Proper CPU and memory constraints</li>
                                  </ul>
                                </div>

                                <div className="p-4 bg-muted rounded-lg">
                                  <h4 className="font-semibold mb-2">Deployment Benefits:</h4>
                                  <p className="text-sm text-muted-foreground">
                                    The containerized approach enabled consistent deployments across environments, improved resource utilization through auto-scaling, and enhanced application reliability through Kubernetes&apos; self-healing capabilities.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              {/* Key Technologies Summary */}
              <div>
                <h2 className="text-2xl font-bold mb-4">Technology Stack</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-3">
                    <h3 className="font-semibold">Backend Development</h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Java 17</Badge>
                      <Badge variant="secondary">Spring Boot</Badge>
                      <Badge variant="secondary">Hibernate</Badge>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h3 className="font-semibold">Database & Testing</h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">PostgreSQL</Badge>
                      <Badge variant="secondary">H2</Badge>
                      <Badge variant="secondary">JUnit</Badge>
                      <Badge variant="secondary">Mockito</Badge>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h3 className="font-semibold">DevOps & Infrastructure</h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Docker</Badge>
                      <Badge variant="secondary">Kubernetes</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  )
}
