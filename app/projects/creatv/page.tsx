// import Layout from "@/components/layout";
// import Link from "next/link";
// import Image from "next/image";
// import { Card, CardContent } from "@/components/ui/card";

// export default function CreaTVPage() {
//   return (
//     <Layout>
//       <div className="container mx-auto px-4 py-8">
//         {/* Breadcrumbs */}
//         <nav className="flex mb-8" aria-label="Breadcrumb">
//           <ol className="inline-flex items-center space-x-1 md:space-x-3">
//             <li className="inline-flex items-center">
//               <Link
//                 href="/"
//                 className="text-orange-600 hover:text-purple-800 dark:text-orange-400 dark:hover:text-purple-300"
//               >
//                 Home
//               </Link>
//             </li>
//             <li>
//               <div className="flex items-center">
//                 <span className="mx-2">/</span>
//                 <Link
//                   href="/projects"
//                   className="text-orange-600 hover:text-purple-800 dark:text-orange-400 dark:hover:text-purple-300"
//                 >
//                   Projects
//                 </Link>
//               </div>
//             </li>
//             <li>
//               <div className="flex items-center">
//                 <span className="mx-2">/</span>
//                 <span className="text-muted-foreground">CreaTV</span>
//               </div>
//             </li>
//           </ol>
//         </nav>

//         <div className="space-y-8">
//           {/* Header */}
//           <div className="text-center">
//             <h1 className="text-4xl md:text-6xl font-bold mb-4">
//               <span className="bg-gradient-to-b from-orange-300 to-orange-900 bg-clip-text text-transparent">
//                 Crea
//               </span>
//               <span className="bg-gradient-to-b from-purple-300 to-purple-900 bg-clip-text text-transparent">
//                 TV
//               </span>
//             </h1>

//             {/* Main Content Card */}
//             <Card>
//               <CardContent className="p-6 space-y-8">
//                 {/* Banner Image */}
//                 <div className="w-full">
//                   <Image
//                     src="https://pub-5e3f5f69f6bd4f2fb6bc741e03f34851.r2.dev/CreaTV_WinAppsProjectCard.png"
//                     alt="CreaTV Banner"
//                     width={1500}
//                     height={300}
//                     className="w-full rounded-lg"
//                   />
//                 </div>

//                 {/* Job Details */}
//                 <div className="grid md:grid-cols-2 gap-8">
//                   <div>
//                     <h2 className="text-2xl font-bold mb-2">Position</h2>
//                     <p className="text-muted-foreground">
//                       Founder, CEO, Lead Principle Engineer
//                     </p>
//                   </div>

//                   <div>
//                     <h2 className="text-2xl font-bold mb-2">
//                       Start & End Dates
//                     </h2>
//                     <p className="text-muted-foreground">
//                       November 2025 - Present
//                     </p>
//                   </div>
//                 </div>

//                 <div>
//                   <h2 className="text-2xl font-bold mb-4">
//                     🚧 Coming Soon... 🚧
//                   </h2>
//                 </div>

//                 <div className="max-w-4xl mx-auto flex flex-col items-center justify-center">
//                   <h2 className="text-2xl font-bold mb-4">Demo Video</h2>
//                   <iframe
//                     width="1120"
//                     height="630"
//                     src="https://creatv.io/e/fad5cf92-ab75-4de9-9e18-4a44f58dadc2"
//                     title="CreaTV video player"
//                     frameBorder="0"
//                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//                     referrerPolicy="strict-origin-when-cross-origin"
//                     allowFullScreen
//                     loading="lazy"
//                   ></iframe>
//                 </div>

//                 <div>
//                   <h2 className="text-2xl font-bold mb-2">Visit Website</h2>
//                   <Link
//                     href="https://www.creatv.io/"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-orange-600 hover:text-purple-800 dark:text-orange-400 dark:hover:text-purple-300 font-semibold hover:underline"
//                   >
//                     Visit CreaTV →
//                   </Link>
//                 </div>

//                 {/* Responsibilities */}
//                 <div>
//                   <h2 className="text-2xl font-bold mb-4">Responsibilities</h2>
//                   <p className="text-muted-foreground mb-4">
//                     Some of my responsibilities here include:
//                   </p>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// }

"use client";

import Layout from "@/components/layout";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

export default function CreaTVPage() {
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
                  href="/projects"
                  className="text-orange-600 hover:text-purple-800 dark:text-orange-400 dark:hover:text-purple-300"
                >
                  Projects
                </Link>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <span className="mx-2">/</span>
                <span className="text-muted-foreground">CreaTV</span>
              </div>
            </li>
          </ol>
        </nav>

        <div className="space-y-8">
          {/* Header */}
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-b from-orange-300 to-orange-900 bg-clip-text text-transparent">
                Crea
              </span>
              <span className="bg-gradient-to-b from-purple-300 to-purple-900 bg-clip-text text-transparent">
                TV
              </span>
            </h1>

            <p className="text-muted-foreground max-w-3xl mx-auto">
              CreaTV is my “build the platform I wish existed” project: a
              modern, creator-first video platform with serious attention paid
              to performance, observability, and scalable media pipelines. Yes,
              it’s ambitious. No, I’m not scared (okay… only a normal, healthy
              amount).
            </p>
          </div>

          {/* Main Content Card */}
          <Card>
            <CardContent className="p-6 space-y-10">
              {/* Banner Image */}
              <div className="w-full">
                <Image
                  src="https://pub-5e3f5f69f6bd4f2fb6bc741e03f34851.r2.dev/CreaTV_WinAppsProjectCard.png"
                  alt="CreaTV Banner"
                  width={1500}
                  height={300}
                  className="w-full rounded-lg"
                  priority
                />
              </div>

              {/* Job Details */}
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Position</h2>
                  <p className="text-muted-foreground">
                    Founder, CEO, Lead Principal Engineer
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-2">Start & End Dates</h2>
                  <p className="text-muted-foreground">
                    November 2025 - Present
                  </p>
                </div>
              </div>

              {/* Quick Links */}
              <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-6">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Links</h2>
                  <div className="flex flex-wrap items-center gap-4">
                    <Link
                      href="https://www.creatv.io/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-600 hover:text-purple-800 dark:text-orange-400 dark:hover:text-purple-300 font-semibold hover:underline inline-flex items-center gap-1"
                    >
                      Visit CreaTV <ExternalLink className="w-4 h-4" />
                    </Link>

                    <Link
                      href="https://creatv.io/e/fad5cf92-ab75-4de9-9e18-4a44f58dadc2"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-600 hover:text-purple-800 dark:text-orange-400 dark:hover:text-purple-300 font-semibold hover:underline inline-flex items-center gap-1"
                    >
                      Open demo embed directly{" "}
                      <ExternalLink className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Tech Stack */}
              <div>
                <h2 className="text-2xl font-bold mb-4">
                  Tech Stack (high level)
                </h2>
                <p className="text-muted-foreground mb-4">
                  I intentionally designed CreaTV as a “real platform” instead
                  of a toy app: media processing, discovery, analytics, and
                  policy are first-class citizens.
                </p>

                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Go microservices</Badge>
                  <Badge variant="secondary">Postgres</Badge>
                  <Badge variant="secondary">Redis</Badge>
                  <Badge variant="secondary">S3-compatible storage</Badge>
                  <Badge variant="secondary">CDN</Badge>
                  <Badge variant="secondary">FFmpeg pipeline</Badge>
                  <Badge variant="secondary">HLS streaming</Badge>
                  <Badge variant="secondary">Captions / VTT</Badge>
                  <Badge variant="secondary">Search + ranking</Badge>
                  <Badge variant="secondary">Ads + targeting</Badge>
                  <Badge variant="secondary">Analytics surfaces</Badge>
                  <Badge variant="secondary">DMCA + policy tooling</Badge>
                </div>
              </div>

              {/* Demo Video */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Demo Video</h2>
                <p className="text-muted-foreground">
                  This demo shows the current state of the core watch experience
                  (player, playback flow, and the foundation for discovery +
                  tracking).
                </p>
                <p className="text-muted-foreground">
                  Oh yeah, and guess what? The embedded video below is actually
                  a working embedded video example that I got directly from the
                  CreaTV platform itself! (Notice the custom controls and setup
                  that I built for it 😎)
                </p>

                {/* Responsive 16:9 embed */}
                <div className="w-full max-w-5xl mx-auto">
                  <div className="relative w-full overflow-hidden rounded-lg bg-black aspect-video">
                    <iframe
                      className="absolute inset-0 w-full h-full"
                      src="https://creatv.io/e/fad5cf92-ab75-4de9-9e18-4a44f58dadc2"
                      title="CreaTV video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

              {/* Responsibilities */}
              <div>
                <h2 className="text-2xl font-bold mb-4">Responsibilities</h2>
                <p className="text-muted-foreground mb-4">
                  As the founder/sole builder (and occasional therapist for my
                  own production incidents), my responsibilities include:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span>
                      Define product vision, UX strategy, and platform
                      principles (creator-first, performance-first, data-first).
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span>
                      Architect and build the end-to-end system: upload →
                      transcode → stream → discover → monetize → measure.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span>
                      Design database schemas and contracts that support scale,
                      extensibility, and analytics correctness.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span>
                      Build the web UX (watch pages, creator flows, share/embed
                      behavior) with a strong focus on responsiveness and
                      perceived performance.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span>
                      Operate infrastructure and cost controls: storage
                      lifecycle, CDN performance, queue/worker throughput, and
                      “don’t melt the CPU” transcoding strategies.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Contributions / Deep Dive */}
              <div>
                <h2 className="text-2xl font-bold mb-4">
                  Contributions (Deep Dive)
                </h2>
                <p className="text-muted-foreground mb-6">
                  The fun part: the technical decisions, trade-offs, and the
                  stuff you only learn after shipping something that moves
                  actual bytes around the internet.
                </p>

                <Accordion type="multiple" className="w-full">
                  <AccordionItem value="product-scope">
                    <AccordionTrigger className="text-xl font-semibold">
                      Product Scope and Platform Philosophy
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4 text-muted-foreground">
                        <p>
                          CreaTV is built around a simple premise: creators
                          deserve a platform that treats video as a first-class
                          engineering problem (not an afterthought), and treats
                          analytics and monetization as transparent, measurable
                          systems.
                        </p>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                            <span>
                              Two content formats: long-form videos and
                              short-form “snippets,” with distinct metadata,
                              processing, and engagement models.
                            </span>
                          </li>
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                            <span>
                              Discovery built on structured categorization +
                              search + ranking primitives (not vibes and
                              prayers).
                            </span>
                          </li>
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                            <span>
                              Policy and compliance baked into the data model
                              (copyright, kid-safe flags, embeddability,
                              visibility, and moderation tooling).
                            </span>
                          </li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="media-pipeline">
                    <AccordionTrigger className="text-xl font-semibold">
                      Media Pipeline: Upload, Processing Jobs, Qualities,
                      Streaming
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4 text-muted-foreground">
                        <p>
                          The core engineering challenge is reliable video
                          processing at scale. The platform data model supports:
                          multi-quality encodes, job tracking, streaming
                          protocol flexibility (HLS today, with room for DASH
                          variants), and media metadata required for stable
                          playback and analytics.
                        </p>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                            <span>
                              Per-video processing state machine: uploading →
                              queued → processing → ready/failed.
                            </span>
                          </li>
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                            <span>
                              Video qualities table for adaptive streaming
                              variants (bitrate, resolution, playlist keys,
                              readiness flags).
                            </span>
                          </li>
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                            <span>
                              Processing jobs with progress, retries, worker
                              IDs, and error capture to make operations
                              debuggable.
                            </span>
                          </li>
                        </ul>
                        <p>
                          The result is a pipeline that can be scaled
                          horizontally: more workers when backlog grows, more
                          encoding lanes when creators upload 4K content at 2am
                          because of course they do.
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="captions-ai">
                    <AccordionTrigger className="text-xl font-semibold">
                      Captions + NLP Foundations for Search and Recommendations
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4 text-muted-foreground">
                        <p>
                          CreaTV’s schema includes first-class caption tracks
                          and a dedicated analysis surface for extracting
                          structured signals from content: language, keywords,
                          safety labels, and embeddings.
                        </p>

                        <div className="flex flex-wrap gap-2">
                          <Badge variant="secondary">
                            Caption tracks (VTT/SRT)
                          </Badge>
                          <Badge variant="secondary">
                            Full-text search vectors
                          </Badge>
                          <Badge variant="secondary">
                            Embeddings for similarity
                          </Badge>
                          <Badge variant="secondary">
                            Safety labels & rating
                          </Badge>
                        </div>

                        <p>
                          This is the backbone for “search that actually works,”
                          plus future personalization that doesn’t require
                          magic—just good signals, good storage, and sane
                          ranking.
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="discovery-trending">
                    <AccordionTrigger className="text-xl font-semibold">
                      Discovery: Search, Trending, and Structured Taxonomy
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4 text-muted-foreground">
                        <p>
                          Discovery is treated as a product surface with
                          measurable outcomes. The schema supports:
                        </p>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                            <span>
                              Categories + topics, with room for multiple tags
                              and localization-friendly metadata.
                            </span>
                          </li>
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                            <span>
                              A dedicated trending table with rank positions,
                              country targeting, validity windows, and growth
                              signals.
                            </span>
                          </li>
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                            <span>
                              Search indexes optimized for relevance, not just
                              “LIKE %query%” and optimism.
                            </span>
                          </li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="engagement">
                    <AccordionTrigger className="text-xl font-semibold">
                      Engagement: Comments, Reactions, Subscriptions,
                      Notifications
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4 text-muted-foreground">
                        <p>
                          Community features are modeled explicitly so they’re
                          easy to scale and easy to moderate:
                        </p>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                            <span>
                              Threaded comments with reactions, pinning, edit
                              history, and soft deletes for moderation
                              workflows.
                            </span>
                          </li>
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                            <span>
                              Subscriptions with notification levels (all /
                              personalized / none).
                            </span>
                          </li>
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                            <span>
                              Notifications designed as first-class objects
                              (type, actor, target video/comment, action URL).
                            </span>
                          </li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="analytics">
                    <AccordionTrigger className="text-xl font-semibold">
                      Analytics: Views, Watch History, Referrers, Playback
                      Context
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4 text-muted-foreground">
                        <p>
                          I’m building analytics as an engineering system, not
                          an afterthought. The schema includes primitives to
                          attribute view events to surfaces and referrers (home,
                          search, suggested, etc.), and track watch behavior
                          over time.
                        </p>
                        <p>
                          This supports creator-facing dashboards later, but it
                          also improves product decisions now (e.g., “is this
                          feature helping people find videos, or just making me
                          feel better emotionally?”).
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="monetization-ads">
                    <AccordionTrigger className="text-xl font-semibold">
                      Monetization: Video Ads, Campaigns, Events, Targeting
                      (foundation)
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4 text-muted-foreground">
                        <p>
                          Monetization is designed into the platform with
                          explicit configuration per video (pre/mid/post-roll
                          toggles) and a campaign model that supports creatives,
                          targeting rules, and event tracking
                          (impression/click/skip/complete).
                        </p>
                        <p>
                          The intent is to keep monetization transparent and
                          measurable for both creators and advertisers, while
                          still giving the product team room to tune the
                          experience without rewriting half the platform.
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="trust-safety">
                    <AccordionTrigger className="text-xl font-semibold">
                      Trust, Safety, and Compliance: DMCA, Copyright, Visibility
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4 text-muted-foreground">
                        <p>
                          Policy tooling is part of the platform contract. The
                          data model includes DMCA notices/counter-notices,
                          copyright status flags, strike tracking, visibility
                          states, and “embeddable” controls—because platforms
                          that ignore this stuff eventually learn the hard way
                          (and I prefer learning the normal way).
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="next-up">
                    <AccordionTrigger className="text-xl font-semibold">
                      What’s Next (near-term roadmap)
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4 text-muted-foreground">
                        <p>
                          The platform is actively evolving. The next milestones
                          are focused on deepening the watch experience and
                          tightening the creator loop:
                        </p>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                            <span>
                              Expand player UX (theater mode, better recommended
                              rail behavior, tighter keyboard shortcuts).
                            </span>
                          </li>
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                            <span>
                              Improve discovery quality (better ranking signals,
                              category/topic tuning, stronger search relevance).
                            </span>
                          </li>
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                            <span>
                              Creator analytics dashboards (views, watch time,
                              retention, and referrer breakdowns).
                            </span>
                          </li>
                        </ul>
                        <p>
                          Translation: more shipping, fewer “maybe someday”
                          sections.
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
