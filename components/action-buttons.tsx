"use client"

import { Button } from "@/components/ui/button"
import { Download, Mail } from "lucide-react"

export function ActionButtons() {
  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = "/MitchellWintrow_Resume.pdf";
    link.setAttribute("download", "Mitchell_Wintrow_CV_Resume.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  const handleContactClick = () => {
    // This can be expanded to open a contact modal or navigate to contact page
    window.location.href = '/contact';
  }

  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <Button
        variant="secondary"
        className="min-w-[200px] font-bold"
        onClick={handleResumeDownload}
      >
        <Download className="mr-2 h-4 w-4" />
        My Resumé
      </Button>
      <Button
        variant="secondary"
        className="min-w-[200px] font-bold"
        onClick={handleContactClick}
      >
        <Mail className="mr-2 h-4 w-4" />
        Contact Me
      </Button>
    </div>
  )
}