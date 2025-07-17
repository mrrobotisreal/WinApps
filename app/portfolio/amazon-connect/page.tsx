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
import { ExternalLink } from "lucide-react";
import RollingGallery from "@/components/blocks/Components/RollingGallery/RollingGallery";
import Link from "next/link";
import Image from "next/image";

const screenshots: string[] = [
  // "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/amazon-connect/ac01.webp",
  // "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/amazon-connect/ac02.webp",
  // "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/amazon-connect/ac03.webp",
  // "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/amazon-connect/ac04.webp",
  // "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/amazon-connect/ac05.webp",
  // "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/amazon-connect/ac06.webp",
  // "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/amazon-connect/ac07.webp",
  // "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/amazon-connect/ac08.webp",
  // "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/amazon-connect/ac09.webp",
];

export default function AmazonConnectCustomerProfilesPage() {
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
                  Amazon Connect Customer Profiles
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
                Amazon Connect
              </span>{" "}
              <span className="bg-gradient-to-b from-purple-300 to-purple-900 bg-clip-text text-transparent">
                Customer Profiles
              </span>
            </h1>
          </div>

          {/* Main Content Card */}
          <Card>
            <CardContent className="p-6 space-y-8">
              {/* Banner Image */}
              <div className="w-full">
                <Image
                  src="https://pub-c0247ba91a4a415a9ff6d54583d7667c.r2.dev/WinApps_AmazonConnectBanner.webp"
                  alt="Amazon Connect Customer Profiles Cover"
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
                    Software Development Engineer (L4 Front End Engineer)
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-2">Start & End Dates</h2>
                  <p className="text-muted-foreground">
                    {new Date("2022-08-16T00:00:00Z").toLocaleDateString()} -{" "}
                    {new Date("2024-12-16T00:00:00Z").toLocaleDateString()}
                  </p>
                </div>
              </div>

              {/* Responsibilities */}
              <div>
                <h2 className="text-2xl font-bold mb-4">Responsibilities</h2>
                <p className="text-muted-foreground mb-4">
                  Some of my responsibilities as an L4 Front End Engineer at
                  Amazon Connect Customer Profiles included:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>
                      Take feature specifications and deliver working code that
                      is maintainable, scalable, and extensible.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>
                      Make improvements to existing software features
                      autonomously with minimal guidance.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>
                      Participate in code reviews and provide feedback to other
                      engineers.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>
                      Work with product managers to understand customer
                      requirements and deliver solutions that meet customer
                      needs.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>
                      Provide operational support and work to ensure that root
                      causes are identified and resolved.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>
                      Improve development processes and tools to maximize the
                      team&apos;s efficiency, and conduct knowledge sharing
                      lessons.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>
                      Train new front end engineers and give supporting feedback
                      for their growth.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Contributions */}
              <div>
                <h2 className="text-2xl font-bold mb-4">Contributions</h2>
                <p className="text-muted-foreground mb-6">
                  Some of my contributions in this role included:
                </p>

                <Accordion type="multiple" className="w-full">
                  {/* AWS Console */}
                  <AccordionItem value="aws-console">
                    <AccordionTrigger className="text-xl font-semibold">
                      AWS Console (Amazon Connect Customer Profiles)
                    </AccordionTrigger>
                    <AccordionContent>
                      <Accordion type="multiple" className="w-full">
                        <AccordionItem value="ctr-template">
                          <AccordionTrigger>
                            Create CTR-AutoAssociateOnly Contact Trace Record
                            template
                          </AccordionTrigger>
                          <AccordionContent>
                            <p className="text-muted-foreground">
                              I implemented a new Contact Trace Record template
                              on the backend that gives customers the ability to
                              look-up a customer&apos;s unified profile in
                              real-time based on the incoming phone number,
                              without automatically creating a new profile.
                              Before I began this project, the existing Contact
                              Trace Record templates would both automatically
                              create a new customer profile, which was leading
                              to duplicate profiles and data inconsistencies.
                              Many customers had expressed their frustration
                              with this issue, so I took the initiative to solve
                              this problem and created the{" "}
                              <Badge variant="secondary">
                                CTR-AutoAssociateOnly
                              </Badge>{" "}
                              template that still allowed for phone number
                              look-ups on the backend, but prevented duplicate
                              profiles from being created unnecessarily.
                            </p>
                          </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="documentation">
                          <AccordionTrigger>
                            Update public documentation for new CTR template and
                            existing CTR templates
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="space-y-4">
                              <p className="text-muted-foreground">
                                After successfully implementing the above
                                mentioned CTR template on the backend, I took
                                the initiative to update our public
                                documentation to reflect the new changes and to
                                provide a clear explanation of how the new
                                template works. I also created a new section in
                                the documentation that explains how to use the
                                new template and how it differs from the
                                existing templates as well as helpful diagrams
                                to explain CTR flows.
                              </p>
                              <p className="text-muted-foreground">
                                In addition to this, I also re-wrote the
                                existing public documentation relating to the
                                original CTR templates to make it more
                                user-friendly and easier to understand,
                                addressing the &quot;confusing
                                documentation&quot; issue mentioned by numerous
                                customers.
                              </p>
                              <div className="space-y-2">
                                <p className="font-semibold">
                                  Updated documentation sections:
                                </p>
                                <ul className="space-y-1">
                                  <li>
                                    <Link
                                      href="https://docs.aws.amazon.com/connect/latest/adminguide/inferred-profiles.html"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-orange-600 hover:text-purple-800 dark:text-orange-400 dark:hover:text-purple-300 font-semibold inline-flex items-center gap-1"
                                    >
                                      Inferred Profiles
                                      <ExternalLink className="w-4 h-4" />
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      href="https://docs.aws.amazon.com/connect/latest/adminguide/ctr-contact-record-template.html"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-orange-600 hover:text-purple-800 dark:text-orange-400 dark:hover:text-purple-300 font-semibold inline-flex items-center gap-1"
                                    >
                                      Contact record templates
                                      <ExternalLink className="w-4 h-4" />
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      href="https://docs.aws.amazon.com/connect/latest/adminguide/inferred-profiles.html"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-orange-600 hover:text-purple-800 dark:text-orange-400 dark:hover:text-purple-300 font-semibold inline-flex items-center gap-1"
                                    >
                                      Associate the Contact Record using _phone
                                      key... (New section I created)
                                      <ExternalLink className="w-4 h-4" />
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="ui-configuration">
                          <AccordionTrigger>
                            Build Contact Trace Record Configuration section in
                            the UI
                          </AccordionTrigger>
                          <AccordionContent>
                            <p className="text-muted-foreground">
                              Once the backend implementation was complete and
                              the public documentation was updated, I built the
                              front end UI for the{" "}
                              <Badge variant="secondary">
                                Profile creation and auto-association
                              </Badge>{" "}
                              section that allows customers to make an informed
                              decision on which CTR template they want to apply
                              to their Customer Profiles domain. This section is
                              available on the <em>Create domain</em> page, and
                              it is available on the <em>Domain details</em>{" "}
                              page where it displays the currently applied CTR
                              template and provides an option to edit and update
                              the applied template. In addition to this section,
                              I also created the <em>Help panel (info)</em> that
                              provides helpful information to customers on how
                              to use the CTR templates and what each template
                              does, and includes links to the documentation I
                              wrote.
                            </p>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Connect Admin Website */}
                  <AccordionItem value="connect-admin">
                    <AccordionTrigger className="text-xl font-semibold">
                      Connect Admin Website (Customer Segments)
                    </AccordionTrigger>
                    <AccordionContent>
                      <Accordion type="multiple" className="w-full">
                        <AccordionItem value="list-segments">
                          <AccordionTrigger>
                            Build the List Segments page and Segments table in
                            the UI
                          </AccordionTrigger>
                          <AccordionContent>
                            <p className="text-muted-foreground">
                              Within the Customer Segments page in the Connect
                              Admin Website, I designed the initial landing page
                              customers are taken to when navigating there and
                              all of its features. This page shows customers a
                              table of all the segments they have created with
                              some brief details of each, or an empty table with
                              a Create Segment button if they have not yet
                              created any. From here customers can view, delete,
                              and export any segment, as well as search and
                              filter the segments. Segments are fetched from a
                              paginated API endpoint and the results are cached
                              via <Badge variant="secondary">React Query</Badge>{" "}
                              in order to improve performance, stay in sync with
                              the server data, and reduce the number of API
                              calls. I&apos;ll be detailed the Export feature in
                              its own section, but segments can be exported from
                              here as well as the Segment Details page.
                            </p>
                          </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="segment-details">
                          <AccordionTrigger>
                            Build the View Segment Details page in the UI
                          </AccordionTrigger>
                          <AccordionContent>
                            <p className="text-muted-foreground">
                              When a customer clicks on a segment in the List
                              Segments table, they are taken to the Segment
                              Details page where they can view all the details
                              of the segment they selected. This page shows the
                              number of profiles in the segment, the
                              segment&apos;s name, ID, description, and creation
                              date, and the audience definition (consisting of
                              Audience groups, Filter groups, and Operators like
                              include/exclude/etc.). From here customers can
                              delete the segment, export the segment as a CSV
                              file, duplicate the segment, and more.
                            </p>
                          </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="export-csv">
                          <AccordionTrigger>
                            Build the Export Segment as CSV feature in the UI
                          </AccordionTrigger>
                          <AccordionContent>
                            <p className="text-muted-foreground">
                              Whether a customer is viewing the List Segments
                              page or the Segment Details page, they have the
                              ability to export the segment they are viewing as
                              a CSV file. This feature was built to allow
                              customers to easily download the segment data and
                              use it in other applications or export it to
                              another CRM or customer service application. The
                              exported CSV file contains up to 350,000 profiles
                              in the segment, however, they can download all of
                              the profiles from the segment via the AWS Console
                              if they exceed 350,000. The reason for this
                              constraint is to prevent excessive wait times for
                              the CSV file to be downloaded as it could be
                              several gigabytes in size depending on how much
                              information is in each profile, and any mass
                              exporting of data is better suited to be handled
                              within the AWS Console which has more advanced
                              configurations for an IT admin to work with, as
                              opposed to the Call Center Admin that will be
                              using the Connect Admin Website Customer Segments
                              feature.
                            </p>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Operational Support */}
                  <AccordionItem value="operational-support">
                    <AccordionTrigger className="text-xl font-semibold">
                      Operational Support and Development Process Improvements
                    </AccordionTrigger>
                    <AccordionContent>
                      <Accordion type="multiple" className="w-full">
                        <AccordionItem value="demo-script">
                          <AccordionTrigger>
                            Create a Customer Profiles Demo Script
                          </AccordionTrigger>
                          <AccordionContent>
                            <p className="text-muted-foreground">
                              A frequent pain point for both engineers and
                              product managers alike was the amount of time and
                              effort needed to set up a brand new Customer
                              Profiles domain, enable all of the features
                              properly, and upload large amounts of realistic
                              mock data to simulate how businesses are actually
                              using Customer Profiles within Amazon Connect. I
                              took the initiative to write a{" "}
                              <Badge variant="secondary">
                                BASH/Powershell/Cmd/Python
                              </Badge>{" "}
                              script that automates the entire process of
                              setting up a new domain, enabling all the
                              features, and uploading a large amount of
                              realistic mock data to the domain. Regardless of
                              the operating system environment, a developer or
                              product manager can run either the BASH script on
                              Mac/Linux or they can run either the Powershell or
                              the Cmd script on Windows, and the script
                              automatically detects if Python is installed,
                              installs the correct version of Python if
                              it&apos;s not there or the wrong version, and then
                              it automatically starts the Python script that
                              uses the user&apos;s AWS credentials in the
                              environment to set up all of the necessary AWS
                              services, generate 1,000,000 mock profiles and
                              products, upload them, and then integrate them
                              into Customer Profiles. This script was shared
                              with the team and is now used by engineers and
                              product managers to quickly set up a new domain
                              for testing and development purposes as well as to
                              show potential new customers the value of using
                              Customer Profiles.
                            </p>
                          </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="anomaly-detection">
                          <AccordionTrigger>
                            Implement 4xx Anomaly Detection for Dashboards and
                            Alarms
                          </AccordionTrigger>
                          <AccordionContent>
                            <p className="text-muted-foreground">
                              When working on-call shifts, our 4xx dashboards
                              and alarms were acting as a catch-all for any 4xx
                              and this was causing on-call engineers to
                              frequently check out false alarms due to customers
                              simply not having the correct permissions set up,
                              which causes a spike in 403s specifically.
                              Additionally, it&apos;s possible for frequent 404s
                              to occur if a customer is trying to access a
                              resource that doesn&apos;t exist, and this is not
                              necessarily a problem that needs immediate
                              attention. I took the initiative to implement a
                              new anomaly detection system with{" "}
                              <Badge variant="secondary">CloudWatch</Badge> that
                              would detect when a 4xx spike was occurring that
                              exceeded normal or expected spikes. Additionally,
                              the 403s were routed into their own dashboard and
                              alarm with its own anomaly detection as well so we
                              could better track when customers are having
                              trouble setting up the correct permissions for
                              their account. This change reduced the number of
                              false alarms and allowed on-call engineers to
                              focus on real issues that needed immediate
                              attention.
                            </p>
                          </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="test-coverage">
                          <AccordionTrigger>
                            Increase Test Coverage from 64% to 91% and Configure
                            Code Review Rules to Require At Least 90% Coverage
                          </AccordionTrigger>
                          <AccordionContent>
                            <p className="text-muted-foreground">
                              I noticed that in our code bases we did not have a
                              test coverage rule in place for submitting code
                              reviews, and instead it was more of a verbal
                              agreement to make sure your code reviews have test
                              cases. Due to a number of simple bugs that were
                              making it to production, I took the initiative to
                              implement a new rule that required all code
                              reviews to have at least{" "}
                              <Badge variant="secondary">
                                90% test coverage
                              </Badge>{" "}
                              before they could be merged into the main branch.
                              I also took the initiative to increase the test
                              coverage of our code bases from{" "}
                              <Badge variant="outline">64%</Badge> to{" "}
                              <Badge variant="secondary">91%</Badge> by writing
                              new test cases for existing code and writing test
                              cases for new code that was being written. This
                              change has significantly reduced the number of
                              bugs that make it to production and has increased
                              the overall quality of our code bases.
                            </p>
                          </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="translation-script">
                          <AccordionTrigger>
                            Create a Script to Automatically Insert All
                            Translation Strings into each Language File
                          </AccordionTrigger>
                          <AccordionContent>
                            <p className="text-muted-foreground">
                              Something that bothered me in particular, but was
                              a shared pain among all of us front end engineers,
                              was the fact that for all new strings added into
                              the code, we had to make sure they were all
                              correctly copied into each language file in the
                              exact same place. This was always such a tedious
                              and error-prone process that I took the initiative
                              to write a{" "}
                              <Badge variant="secondary">Node.js script</Badge>{" "}
                              that would automatically insert all new
                              translation strings into each language file in the
                              correct place. With this script, now we only had
                              to put all new translation strings into the
                              English locale file then run this script and it
                              would automatically insert the new strings into
                              each locale file in the correct places. This
                              script was shared with the team and is now used by
                              all front end engineers to save time and reduce
                              the number of errors that could occur when
                              manually copying and pasting translation strings.
                            </p>
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
                  Screenshots demonstrating the features and interfaces I built
                  during my time at Amazon Connect Customer Profiles:
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
