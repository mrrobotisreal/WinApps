import { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Shield,
  Mail,
  Globe,
  Lock,
  Eye,
  Database,
  Server,
  Users,
  FileText,
  Calendar,
} from "lucide-react";
import Layout from "@/components/layout";

export const metadata: Metadata = {
  title: "Privacy Policy - Text Formatter",
  description:
    "Privacy policy for Text Formatter browser extension. We don't collect, store, or transmit any personal data.",
  robots: "index, follow",
};

export default function PrivacyPolicyPage() {
  return (
    <Layout>
      <div className="min-h-screen py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-xl border-0 bg-gray-800/80 backdrop-blur-sm">
            <CardContent className="p-8 md:p-12">
              {/* Header */}
              <div className="text-center mb-12">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Shield className="h-8 w-8 text-blue-600" />
                  <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Privacy Policy
                  </h1>
                </div>

                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-8">
                  <Calendar className="h-4 w-4" />
                  <span className="font-medium">Last Updated:</span>
                  <Badge variant="outline">June 2025</Badge>
                </div>

                <Alert className="border-green-200 bg-green-300">
                  {/* <Shield className="h-5 w-5 text-blue-600" /> */}
                  <AlertDescription className="text-green-800 font-medium">
                    <strong>🎯Bottom Line:</strong> Text Formatter doesn&apos;t
                    collect, store, or transmit any of your personal data.
                    Everything happens locally on your device. Your privacy is
                    our top priority.
                  </AlertDescription>
                </Alert>
              </div>

              {/* Information We Don't Collect */}
              <section className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <Eye className="h-6 w-6 text-red-500" />
                  <h2 className="text-2xl font-semibold text-slate-200">
                    Information We Do NOT Collect
                  </h2>
                </div>

                <p className="text-slate-400 mb-6 leading-relaxed">
                  Text Formatter is designed with privacy by design. We do not
                  collect, store, or transmit:
                </p>

                <div className="grid gap-3">
                  {[
                    {
                      icon: Users,
                      text: "Personal Information: No names, emails, or contact details",
                    },
                    {
                      icon: Globe,
                      text: "Browsing Data: No browsing history, visited websites, or web activity",
                    },
                    {
                      icon: FileText,
                      text: "Text Content: No text you select, format, or type",
                    },
                    {
                      icon: Database,
                      text: "Usage Analytics: No tracking of how you use the extension",
                    },
                    {
                      icon: Globe,
                      text: "Location Data: No geographic information",
                    },
                    {
                      icon: Server,
                      text: "Device Information: No device fingerprinting or system details",
                    },
                    {
                      icon: Lock,
                      text: "Login Credentials: No passwords or authentication tokens",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-3 rounded-lg bg-slate-50/50 border border-slate-200/50"
                    >
                      <item.icon className="h-5 w-5 text-slate-500 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700 text-sm leading-relaxed">
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              </section>

              <Separator className="my-8" />

              {/* How Extension Works */}
              <section className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <Server className="h-6 w-6 text-blue-500" />
                  <h2 className="text-2xl font-semibold text-slate-200">
                    How the Extension Works
                  </h2>
                </div>

                <p className="text-slate-400 mb-4 leading-relaxed">
                  Text Formatter operates entirely on your local device:
                </p>

                <div className="space-y-3">
                  {[
                    "When you select text, the extension detects the selection locally",
                    "Formatting is applied using Unicode characters processed on your device",
                    "No data is sent to external servers or third parties",
                    "All processing happens in your browser's memory",
                    "No persistent storage of your content",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="h-2 w-2 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                      <span className="text-slate-400 leading-relaxed">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </section>

              <Separator className="my-8" />

              {/* Permissions */}
              <section className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <Lock className="h-6 w-6 text-purple-500" />
                  <h2 className="text-2xl font-semibold text-slate-200">
                    Permissions Explanation
                  </h2>
                </div>

                <p className="text-slate-400 mb-6 leading-relaxed">
                  Text Formatter requests the following permissions for
                  legitimate functionality:
                </p>

                <div className="grid gap-6 md:grid-cols-2">
                  <Card className="border-purple-200 bg-purple-50/50">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-3 text-purple-800">
                        activeTab Permission
                      </h3>
                      <div className="space-y-2 text-sm">
                        <div>
                          <strong className="text-purple-700">Purpose:</strong>{" "}
                          Access the current tab to detect text selection and
                          show formatting options
                        </div>
                        <div>
                          <strong className="text-purple-700">Scope:</strong>{" "}
                          Only when you actively use the extension
                        </div>
                        <div>
                          <strong className="text-purple-700">
                            Data Access:
                          </strong>{" "}
                          Limited to detecting text selection events
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-blue-200 bg-blue-50/50">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-3 text-blue-800">
                        Host Permissions
                      </h3>
                      <div className="space-y-2 text-sm">
                        <div>
                          <strong className="text-blue-700">Purpose:</strong>{" "}
                          Enable text formatting across websites (LinkedIn,
                          Twitter, Facebook, etc.)
                        </div>
                        <div>
                          <strong className="text-blue-700">Scope:</strong> Only
                          to inject formatting functionality
                        </div>
                        <div>
                          <strong className="text-blue-700">
                            Data Access:
                          </strong>{" "}
                          No reading of page content, only modification of your
                          selected text
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </section>

              <Separator className="my-8" />

              {/* No Third Party Services */}
              <section className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <Server className="h-6 w-6 text-red-500" />
                  <h2 className="text-2xl font-semibold text-slate-200">
                    No Third-Party Services
                  </h2>
                </div>

                <Alert className="border-red-200 bg-red-200">
                  <Server className="h-5 w-5 text-red-600" />
                  <AlertDescription className="text-red-800">
                    <strong>Text Formatter does not:</strong>
                    <div className="mt-2 grid gap-1 text-sm">
                      <div>
                        • Use analytics services (Google Analytics, etc.)
                      </div>
                      <div>• Connect to external APIs or servers</div>
                      <div>• Include tracking pixels or beacons</div>
                      <div>• Share data with advertising networks</div>
                      <div>• Use social media tracking tools</div>
                    </div>
                  </AlertDescription>
                </Alert>
              </section>

              <Separator className="my-8" />

              {/* Data Storage */}
              <section className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <Database className="h-6 w-6 text-green-500" />
                  <h2 className="text-2xl font-semibold text-slate-200">
                    Data Storage
                  </h2>
                </div>

                <Alert className="border-green-200 bg-green-200">
                  <Database className="h-5 w-5 text-green-600" />
                  <AlertDescription className="text-green-800">
                    <strong>
                      Text Formatter does not store any user data:
                    </strong>
                    <div className="mt-2 grid gap-1 text-sm">
                      <div>
                        • <strong>No Local Storage:</strong> No data saved to
                        your device
                      </div>
                      <div>
                        • <strong>No Cloud Storage:</strong> No remote storage
                        of any kind
                      </div>
                      <div>
                        • <strong>No Cookies:</strong> No tracking cookies or
                        persistent identifiers
                      </div>
                      <div>
                        • <strong>No Cache:</strong> No caching of user content
                        or behavior
                      </div>
                    </div>
                  </AlertDescription>
                </Alert>
              </section>

              <Separator className="my-8" />

              {/* Security */}
              <section className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <Shield className="h-6 w-6 text-blue-500" />
                  <h2 className="text-2xl font-semibold text-slate-200">
                    Security
                  </h2>
                </div>

                <div className="grid gap-3 md:grid-cols-2">
                  {[
                    "Minimal permission requests (only what's necessary for functionality)",
                    "No external network connections",
                    "Open-source approach for transparency",
                    "Regular security reviews and updates",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-3 rounded-lg bg-blue-50/50 border border-blue-200/50"
                    >
                      <Shield className="h-4 w-4 text-blue-500 mt-1 flex-shrink-0" />
                      <span className="text-slate-700 text-sm leading-relaxed">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </section>

              <Separator className="my-8" />

              {/* Additional Sections */}
              <div className="grid gap-8 md:grid-cols-2">
                <Card className="border-slate-200">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-3 text-slate-200">
                      👶 Children&apos;s Privacy
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      Text Formatter is safe for users of all ages. Since we
                      don&apos;t collect any personal information, there are no
                      special considerations for children under 13.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-slate-200">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-3 text-slate-200">
                      🌍 International Users
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      This privacy policy applies to all users worldwide. Since
                      we don&apos;t collect or process personal data, there are
                      no geographic restrictions or data transfer concerns.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-slate-200">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-3 text-slate-200">
                      ⚖️ GDPR Compliance
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      For users in the European Union, our legal basis is
                      legitimate interest for providing text formatting
                      functionality. No consent required since we don&apos;t
                      process personal data.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-slate-200">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-3 text-slate-200">
                      🔄 Policy Changes
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      Any changes to this policy will be announced via extension
                      updates. You can always find the current version at this
                      URL.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <Separator className="my-8" />

              {/* Contact Section */}
              <Card className="border-blue-200 bg-gradient-to-r from-blue-50 to-purple-50">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Mail className="h-6 w-6 text-blue-600" />
                    <h2 className="text-2xl font-semibold text-slate-600">
                      Contact Us
                    </h2>
                  </div>

                  <p className="text-slate-600 mb-4 leading-relaxed">
                    If you have any questions about this privacy policy or Text
                    Formatter:
                  </p>

                  <div className="grid gap-3 md:grid-cols-3">
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-white/60">
                      <Mail className="h-4 w-4 text-blue-500" />
                      <div>
                        <div className="font-medium text-sm text-slate-600">
                          Email
                        </div>
                        <div className="text-xs text-slate-400">{`mitchellwintrow@gmail.com`}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 rounded-lg bg-white/60">
                      <Globe className="h-4 w-4 text-purple-500" />
                      <div>
                        <div className="font-medium text-sm text-slate-600">
                          Website
                        </div>
                        <div className="text-xs text-slate-400">{`https://www.winapps.io`}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 rounded-lg bg-white/60">
                      <Shield className="h-4 w-4 text-green-500" />
                      <div>
                        <div className="font-medium text-sm text-slate-600">
                          Response Time
                        </div>
                        <div className="text-xs text-slate-400">
                          Within 48 hours
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Final CTA */}
              <Alert className="mt-8 border-green-200 bg-gradient-to-r from-green-400 to-blue-400">
                <Shield className="h-5 w-5 text-green-600" />
                <AlertDescription className="text-slate-700 font-medium">
                  <strong>🎉 Remember:</strong> Text Formatter is built to
                  respect your privacy completely. We believe powerful tools
                  shouldn&apos;t come at the cost of your personal data. Format
                  your text with confidence!
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
