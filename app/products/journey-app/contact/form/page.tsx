/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Layout from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { Check, ChevronsUpDown, X, ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

// Contact form schema
const contactFormSchema = z.object({
  type: z.enum(
    ["feature_request", "general_feedback", "general_support", "urgent_issue"],
    {
      required_error: "Please select a contact type.",
    }
  ),
  title: z
    .string()
    .min(1, "Title is required")
    .max(500, "Title must be less than 500 characters"),
  description: z
    .string()
    .min(10, "Description must be at least 10 characters")
    .max(2000, "Description must be less than 2000 characters"),
  email: z.string().email("Please enter a valid email address"),
  name: z.string().optional(),
  phone: z.string().optional(),
  categories: z.array(z.string()).optional(),
  subCategories: z.array(z.string()).optional(),
  files: z
    .array(z.instanceof(File))
    .max(6, "You can upload up to 6 files")
    .optional(),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

// Category and sub-category data structure
const categoryData = {
  feature_request: {
    Authentication: [
      "Providers (Facebook, Twitter, etc.)",
      "Session Management",
      "Password Security",
      "Email Verification",
      "Username",
      "Two-Factor Authentication",
      "Other",
    ],
    "Search & Filters": [
      "Search Text",
      "Filters",
      "Sorting Options",
      "Timeframe Filters",
      "Advanced Search",
      "Search Results",
      "Other",
    ],
    "Journal Entry List": [
      "Image Thumbnails",
      "Video Thumbnails",
      "Audio Thumbnails",
      "Title Display",
      "Description Preview",
      "Location Tags",
      "Entry Tags",
      "List Formatting",
      "Pagination",
      "Other",
    ],
    "Create New Journal Entry": [
      "Markdown Syntax",
      "Markdown Preview",
      "Character Limit",
      "Added Images",
      "Added Videos",
      "Added Audio",
      "Tags Input",
      "Location Selection",
      "Map & Location",
      "Image/Video Gallery",
      "Camera Integration",
      "Audio Recording",
      "Help Documentation",
      "Auto-save",
      "Other",
    ],
    "View Journal Entry": [
      "Images/Videos/Audio Display",
      "Image Viewer",
      "Video Player",
      "Audio Player",
      "Markdown Rendering",
      "Title Display",
      "Description Display",
      "Location Display",
      "Tags Display",
      "Share Options",
      "Export Options",
      "Other",
    ],
    "Edit Journal Entry": [
      "Image Editing",
      "Video Editing",
      "Audio Editing",
      "Tags Management",
      "Location Editing",
      "Title Editing",
      "Description Editing",
      "Markdown Editing",
      "Version History",
      "Other",
    ],
    "Delete Journal Entry": [
      "Local Deletion",
      "Server Deletion",
      "Bulk Delete",
      "Confirmation Dialog",
      "Trash/Recovery",
      "Permanent Delete",
      "Other",
    ],
    Settings: [
      "Profile Management",
      "Privacy Controls",
      "Notification Settings",
      "Theme Mode (Light/Dark)",
      "Theme Customization",
      "Account Settings",
      "Data Export",
      "Sign Out",
      "Other",
    ],
    "Sync & Backup": [
      "Cloud Sync",
      "Local Backup",
      "Data Recovery",
      "Sync Conflicts",
      "Offline Mode",
      "Cross-device Sync",
      "Other",
    ],
    Performance: [
      "App Speed",
      "Loading Times",
      "Memory Usage",
      "Battery Optimization",
      "Storage Management",
      "Network Usage",
      "Other",
    ],
  },
  general_support: {
    "Getting Started": [
      "Installation",
      "Account Setup",
      "First Entry",
      "Navigation",
      "Basic Features",
      "Tutorial",
      "Other",
    ],
    "Account & Profile": [
      "Login Issues",
      "Password Reset",
      "Profile Settings",
      "Account Recovery",
      "Email Verification",
      "Account Deletion",
      "Other",
    ],
    "Journal Entries": [
      "Creating Entries",
      "Editing Entries",
      "Deleting Entries",
      "Adding Media",
      "Tags & Categories",
      "Location Services",
      "Search & Find",
      "Other",
    ],
    "Sync & Data": [
      "Data Not Syncing",
      "Missing Entries",
      "Duplicate Entries",
      "Data Recovery",
      "Export Data",
      "Import Data",
      "Other",
    ],
    "App Behavior": [
      "App Won't Open",
      "App Crashes",
      "Slow Performance",
      "Features Not Working",
      "Display Issues",
      "Navigation Problems",
      "Other",
    ],
    "Premium Features": [
      "Subscription Issues",
      "Premium Features",
      "Billing Questions",
      "Upgrade/Downgrade",
      "Refund Requests",
      "Other",
    ],
  },
  general_feedback: {
    "User Experience": [
      "App Design",
      "Navigation Flow",
      "Ease of Use",
      "Accessibility",
      "User Interface",
      "Overall Experience",
      "Other",
    ],
    Features: [
      "Existing Features",
      "Missing Features",
      "Feature Improvements",
      "Feature Requests",
      "Feature Usability",
      "Other",
    ],
    Performance: [
      "App Speed",
      "Responsiveness",
      "Battery Usage",
      "Storage Usage",
      "Network Performance",
      "Other",
    ],
    "Content & Media": [
      "Image Quality",
      "Video Playback",
      "Audio Quality",
      "Media Organization",
      "Media Export",
      "Other",
    ],
    "Overall Satisfaction": [
      "General Satisfaction",
      "Recommendation",
      "Comparison to Competitors",
      "Value for Money",
      "Customer Support",
      "Other",
    ],
  },
  urgent_issue: {
    "Data Loss": [
      "Lost Entries",
      "Missing Media",
      "Sync Failure",
      "Corruption",
      "Accidental Deletion",
      "Other",
    ],
    "App Crashes": [
      "Startup Crash",
      "During Use",
      "When Saving",
      "When Loading",
      "When Syncing",
      "Other",
    ],
    "Login Issues": [
      "Cannot Login",
      "Account Locked",
      "Authentication Failed",
      "Session Expired",
      "Password Issues",
      "Other",
    ],
    "Payment Issues": [
      "Billing Problems",
      "Subscription Not Working",
      "Refund Issues",
      "Payment Failed",
      "Unauthorized Charges",
      "Other",
    ],
    "Security Concerns": [
      "Account Compromised",
      "Unauthorized Access",
      "Data Breach",
      "Privacy Violation",
      "Security Vulnerability",
      "Other",
    ],
    "Critical Functionality": [
      "Cannot Create Entries",
      "Cannot Save Work",
      "Cannot Access Data",
      "Core Features Broken",
      "Data Corruption",
      "Other",
    ],
  },
};

interface CategoryComboboxProps {
  value: string[];
  onChange: (categories: string[]) => void;
  placeholder?: string;
  supportType: string;
  disabled?: boolean;
}

function CategoryCombobox({
  value = [],
  onChange,
  placeholder = "Select categories...",
  supportType,
  disabled = false,
}: CategoryComboboxProps) {
  const [open, setOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const availableCategories = supportType
    ? Object.keys(categoryData[supportType as keyof typeof categoryData] || {})
    : [];

  const filteredCategories = availableCategories.filter(
    (category) =>
      category.toLowerCase().includes(searchValue.toLowerCase()) &&
      !value.includes(category)
  );

  const handleSelect = (category: string) => {
    if (!value.includes(category)) {
      onChange([...value, category]);
    }
    setSearchValue("");
  };

  const handleRemove = (category: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onChange(value.filter((item) => item !== category));
  };

  return (
    <div className="space-y-2">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            disabled={disabled}
            className={cn(
              "w-full justify-between text-left font-normal",
              !value.length && "text-muted-foreground"
            )}
          >
            <span className="truncate flex-1 text-left">
              {value.length > 0
                ? `${value.length} categories selected`
                : placeholder}
            </span>
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0" align="start">
          <Command shouldFilter={false}>
            <CommandInput
              placeholder="Search categories..."
              value={searchValue}
              onValueChange={setSearchValue}
            />
            <CommandList>
              <CommandEmpty>
                <div className="py-4 text-center">
                  <p className="text-sm text-muted-foreground">
                    {supportType
                      ? "No categories found."
                      : "Please select a support type first."}
                  </p>
                </div>
              </CommandEmpty>
              {filteredCategories.length > 0 && (
                <CommandGroup>
                  {filteredCategories.map((category) => (
                    <CommandItem
                      key={category}
                      value={category}
                      onSelect={() => handleSelect(category)}
                      className="flex items-center"
                    >
                      <Check className="mr-2 h-4 w-4 opacity-0" />
                      <span>{category}</span>
                    </CommandItem>
                  ))}
                </CommandGroup>
              )}
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>

      {/* Selected categories */}
      {value.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {value.map((category) => (
            <div
              key={category}
              className="inline-flex items-center gap-1 px-2 py-1 bg-orange-100 dark:bg-orange-900/20 text-orange-700 dark:text-orange-300 rounded-md text-sm border border-orange-200 dark:border-orange-800"
            >
              <span>{category}</span>
              <Button
                variant="ghost"
                size="sm"
                className="h-4 w-4 p-0 hover:bg-orange-200 dark:hover:bg-orange-800"
                onClick={(e) => handleRemove(category, e)}
              >
                <X className="h-3 w-3" />
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

interface SubCategoryComboboxProps {
  value: string[];
  onChange: (subCategories: string[]) => void;
  placeholder?: string;
  supportType: string;
  selectedCategories: string[];
  disabled?: boolean;
}

function SubCategoryCombobox({
  value = [],
  onChange,
  placeholder = "Select sub-categories...",
  supportType,
  selectedCategories,
  disabled = false,
}: SubCategoryComboboxProps) {
  const [open, setOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const availableSubCategories = selectedCategories.reduce(
    (acc: string[], category) => {
      const categoryData_ =
        categoryData[supportType as keyof typeof categoryData];
      if (categoryData_ && (categoryData_ as any)[category]) {
        acc.push(...((categoryData_ as any)[category] as string[]));
      }
      return acc;
    },
    []
  );

  // Remove duplicates
  const uniqueSubCategories = [...new Set(availableSubCategories)];

  const filteredSubCategories = uniqueSubCategories.filter(
    (subCategory) =>
      subCategory.toLowerCase().includes(searchValue.toLowerCase()) &&
      !value.includes(subCategory)
  );

  const handleSelect = (subCategory: string) => {
    if (!value.includes(subCategory)) {
      onChange([...value, subCategory]);
    }
    setSearchValue("");
  };

  const handleRemove = (subCategory: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onChange(value.filter((item) => item !== subCategory));
  };

  return (
    <div className="space-y-2">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            disabled={disabled || selectedCategories.length === 0}
            className={cn(
              "w-full justify-between text-left font-normal",
              !value.length && "text-muted-foreground"
            )}
          >
            <span className="truncate flex-1 text-left">
              {value.length > 0
                ? `${value.length} sub-categories selected`
                : placeholder}
            </span>
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0" align="start">
          <Command shouldFilter={false}>
            <CommandInput
              placeholder="Search sub-categories..."
              value={searchValue}
              onValueChange={setSearchValue}
            />
            <CommandList>
              <CommandEmpty>
                <div className="py-4 text-center">
                  <p className="text-sm text-muted-foreground">
                    {selectedCategories.length === 0
                      ? "Please select categories first."
                      : "No sub-categories found."}
                  </p>
                </div>
              </CommandEmpty>
              {filteredSubCategories.length > 0 && (
                <CommandGroup>
                  {filteredSubCategories.map((subCategory) => (
                    <CommandItem
                      key={subCategory}
                      value={subCategory}
                      onSelect={() => handleSelect(subCategory)}
                      className="flex items-center"
                    >
                      <Check className="mr-2 h-4 w-4 opacity-0" />
                      <span>{subCategory}</span>
                    </CommandItem>
                  ))}
                </CommandGroup>
              )}
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>

      {/* Selected sub-categories */}
      {value.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {value.map((subCategory) => (
            <div
              key={subCategory}
              className="inline-flex items-center gap-1 px-2 py-1 bg-purple-100 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 rounded-md text-sm border border-purple-200 dark:border-purple-800"
            >
              <span>{subCategory}</span>
              <Button
                variant="ghost"
                size="sm"
                className="h-4 w-4 p-0 hover:bg-purple-200 dark:hover:bg-purple-800"
                onClick={(e) => handleRemove(subCategory, e)}
              >
                <X className="h-3 w-3" />
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function ContactFormPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [filePreviews, setFilePreviews] = useState<{ [key: string]: string }>(
    {}
  );

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      type: undefined,
      title: "",
      description: "",
      email: "",
      name: "",
      phone: "",
      categories: [],
      subCategories: [],
      files: [],
    },
  });

  const watchedType = form.watch("type");
  const watchedCategories = form.watch("categories") || [];

  // Reset categories and sub-categories when type changes
  const handleTypeChange = (newType: string) => {
    form.setValue(
      "type",
      newType as
        | "feature_request"
        | "general_feedback"
        | "general_support"
        | "urgent_issue"
    );
    form.setValue("categories", []);
    form.setValue("subCategories", []);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    const totalFiles = selectedFiles.length + files.length;

    if (totalFiles > 6) {
      toast.error("You can only upload up to 6 files total");
      // Reset the input to allow re-selecting the same files
      event.target.value = "";
      return;
    }

    // Validate file types and sizes
    const validFiles = files.filter((file) => {
      // Check file type
      const isValidType =
        file.type.startsWith("image/") || file.type.startsWith("video/");
      if (!isValidType) {
        toast.error(`${file.name} is not a valid image or video file`);
        return false;
      }

      // Check file size (10MB limit)
      const maxSize = 10 * 1024 * 1024; // 10MB in bytes
      if (file.size > maxSize) {
        const fileSizeMB = (file.size / 1024 / 1024).toFixed(1);
        const suggestedFormats = file.type.startsWith("image/")
          ? "jpg or webp for images"
          : "mp4 or webm for videos";

        toast.error(
          <div className="space-y-2">
            <p>
              <strong>Oops!</strong> The file &quot;{file.name}&quot; is{" "}
              {fileSizeMB} MB, but the max individual file size allowed is 10
              MB.
            </p>
            <p>
              Please select another file, trim the video, or convert it to a
              lighter format such as {suggestedFormats}.
            </p>
            <p>
              You can do this easily for free at{" "}
              <a
                href="https://www.media-manipulator.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 hover:text-orange-700 dark:text-orange-400 dark:hover:text-orange-300 font-medium inline-flex items-center gap-1 underline cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  window.open(
                    "https://www.media-manipulator.com",
                    "_blank",
                    "noopener,noreferrer"
                  );
                }}
              >
                media-manipulator.com
                <svg
                  className="w-3 h-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
              . They also have helpful tutorials if you&apos;re not familiar
              with performing conversions!
            </p>
          </div>,
          {
            duration: 12000, // Show for 12 seconds since it's a longer message
          }
        );
        return false;
      }

      return true;
    });

    const newFiles = [...selectedFiles, ...validFiles];
    setSelectedFiles(newFiles);
    form.setValue("files", newFiles);

    // Create previews for new files
    validFiles.forEach((file) => {
      const fileKey = `${file.name}-${file.size}-${file.lastModified}`;

      if (file.type.startsWith("image/")) {
        // Create image preview
        const reader = new FileReader();
        reader.onload = (e) => {
          if (e.target?.result) {
            setFilePreviews((prev) => ({
              ...prev,
              [fileKey]: e.target!.result as string,
            }));
          }
        };
        reader.readAsDataURL(file);
      } else if (file.type.startsWith("video/")) {
        // Create video thumbnail
        const video = document.createElement("video");
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        video.onloadeddata = () => {
          canvas.width = video.videoWidth;
          canvas.height = video.videoHeight;
          video.currentTime = 1; // Seek to 1 second for thumbnail
        };

        video.onseeked = () => {
          if (ctx) {
            ctx.drawImage(video, 0, 0);
            const thumbnail = canvas.toDataURL("image/jpeg", 0.7);
            setFilePreviews((prev) => ({
              ...prev,
              [fileKey]: thumbnail,
            }));
          }
          // Clean up
          video.src = "";
          URL.revokeObjectURL(video.src);
        };

        video.src = URL.createObjectURL(file);
        video.load();
      }
    });

    // Reset the input to allow re-selecting the same files
    event.target.value = "";
  };

  const removeFile = (index: number) => {
    const fileToRemove = selectedFiles[index];
    const fileKey = `${fileToRemove.name}-${fileToRemove.size}-${fileToRemove.lastModified}`;

    // Remove file from list
    const newFiles = selectedFiles.filter((_, i) => i !== index);
    setSelectedFiles(newFiles);
    form.setValue("files", newFiles);

    // Clean up preview
    setFilePreviews((prev) => {
      const newPreviews = { ...prev };
      delete newPreviews[fileKey];
      return newPreviews;
    });
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "urgent_issue":
        return "Urgent Issue";
      case "general_support":
        return "General Support";
      case "feature_request":
        return "Feature Request";
      case "general_feedback":
        return "General Feedback";
      default:
        return "";
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "urgent_issue":
        return "text-red-600 dark:text-red-400";
      case "general_support":
        return "text-blue-600 dark:text-blue-400";
      case "feature_request":
        return "text-purple-600 dark:text-purple-400";
      case "general_feedback":
        return "text-green-600 dark:text-green-400";
      default:
        return "";
    }
  };

  const onSubmit = async (values: ContactFormValues) => {
    setIsSubmitting(true);

    try {
      const formData = new FormData();
      formData.append("type", values.type);
      formData.append("title", values.title);
      formData.append("description", values.description);
      formData.append("email", values.email);

      if (values.name) formData.append("name", values.name);
      if (values.phone) formData.append("phone", values.phone);

      // Join categories and sub-categories with comma-space delimiter
      if (values.categories && values.categories.length > 0) {
        formData.append("category", values.categories.join(", "));
      }
      if (values.subCategories && values.subCategories.length > 0) {
        formData.append("sub_category", values.subCategories.join(", "));
      }

      // Append files
      selectedFiles.forEach((file) => {
        formData.append("media", file);
      });

      const response = await fetch(
        "https://journey-app-support.winapps.dev/api/v1/support/create-support-request",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit support request");
      }

      toast.success(
        "Your support request has been submitted successfully! We'll get back to you soon."
      );

      // Reset form
      form.reset();
      setSelectedFiles([]);
      setFilePreviews({});
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error(
        "Failed to send your message. Please try again or email us directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

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
                <Link
                  href="/products/journey-app/contact"
                  className="text-orange-600 hover:text-purple-800 dark:text-orange-400 dark:hover:text-purple-300"
                >
                  JourneyApp.me Contact
                </Link>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <span className="mx-2">/</span>
                <span className="text-muted-foreground">Contact Form</span>
              </div>
            </li>
          </ol>
        </nav>

        <div className="space-y-8">
          {/* Header */}
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-b from-orange-300 to-orange-900 bg-clip-text text-transparent">
                Journey
              </span>
              <span className="bg-gradient-to-b from-purple-300 to-purple-900 bg-clip-text text-transparent">
                App.me
              </span>
              <span className="text-muted-foreground"> Support</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Submit your support request, feature suggestion, or feedback
            </p>
          </div>

          {/* Back to Contact Button */}
          <div className="flex justify-center">
            <Link
              href="/products/journey-app/contact"
              className="inline-flex items-center space-x-2 text-orange-600 hover:text-purple-600 dark:text-orange-400 dark:hover:text-purple-400 font-medium transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Contact Info</span>
            </Link>
          </div>

          {/* Form Card */}
          <Card className="mx-auto">
            <CardContent className="p-6 space-y-8">
              {/* Banner Image */}
              <div className="w-full mb-8">
                <Image
                  src="https://pub-c0247ba91a4a415a9ff6d54583d7667c.r2.dev/WinApps_JourneyAppBanner.webp"
                  alt="JourneyApp Banner"
                  width={1200}
                  height={600}
                  className="w-full rounded-lg"
                />
              </div>

              <div className="space-y-6">
                <div className="text-center">
                  <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">
                    Contact JourneyApp.me Support
                  </h2>
                  <p className="text-muted-foreground">
                    Fill out the form below and we&apos;ll get back to you as
                    soon as possible
                  </p>
                </div>

                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    {/* Contact Type */}
                    <FormField
                      control={form.control}
                      name="type"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base font-medium">
                            Support Type
                          </FormLabel>
                          <Select
                            onValueChange={handleTypeChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select the type of support you need" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="urgent_issue">
                                <div className="flex items-center space-x-2">
                                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                  <span>Urgent Issue</span>
                                  <span className="text-xs text-muted-foreground">
                                    (crashes, data loss, payments)
                                  </span>
                                </div>
                              </SelectItem>
                              <SelectItem value="general_support">
                                <div className="flex items-center space-x-2">
                                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                                  <span>General Support</span>
                                  <span className="text-xs text-muted-foreground">
                                    (questions, troubleshooting)
                                  </span>
                                </div>
                              </SelectItem>
                              <SelectItem value="feature_request">
                                <div className="flex items-center space-x-2">
                                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                                  <span>Feature Request</span>
                                  <span className="text-xs text-muted-foreground">
                                    (suggestions, ideas)
                                  </span>
                                </div>
                              </SelectItem>
                              <SelectItem value="general_feedback">
                                <div className="flex items-center space-x-2">
                                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                  <span>General Feedback</span>
                                  <span className="text-xs text-muted-foreground">
                                    (compliments, general thoughts)
                                  </span>
                                </div>
                              </SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Personal Information Row */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-base font-medium">
                              Email *
                            </FormLabel>
                            <FormControl>
                              <Input
                                type="email"
                                placeholder="your.email@example.com"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-base font-medium">
                              Name
                            </FormLabel>
                            <FormControl>
                              <Input placeholder="Your full name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-base font-medium">
                              Phone
                            </FormLabel>
                            <FormControl>
                              <Input
                                type="tel"
                                placeholder="+1 (555) 123-4567"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* Categories */}
                    <FormField
                      control={form.control}
                      name="categories"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base font-medium">
                            Categories
                          </FormLabel>
                          <FormControl>
                            <CategoryCombobox
                              value={field.value || []}
                              onChange={field.onChange}
                              supportType={watchedType}
                              disabled={!watchedType}
                              placeholder={
                                watchedType
                                  ? "Select relevant categories..."
                                  : "Please select a support type first"
                              }
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Sub-Categories */}
                    <FormField
                      control={form.control}
                      name="subCategories"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base font-medium">
                            Sub-Categories
                          </FormLabel>
                          <FormControl>
                            <SubCategoryCombobox
                              value={field.value || []}
                              onChange={field.onChange}
                              supportType={watchedType}
                              selectedCategories={watchedCategories}
                              disabled={
                                !watchedType || watchedCategories.length === 0
                              }
                              placeholder={
                                watchedCategories.length === 0
                                  ? "Please select categories first"
                                  : "Select relevant sub-categories..."
                              }
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Title */}
                    <FormField
                      control={form.control}
                      name="title"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base font-medium">
                            Title *
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Brief description of your request..."
                              {...field}
                              className="w-full"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Description */}
                    <FormField
                      control={form.control}
                      name="description"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base font-medium">
                            Description *
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Please provide detailed information about your request, issue, or feedback. Include any relevant information that might help us assist you better..."
                              className="min-h-[120px] w-full resize-none"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                          <div className="text-sm text-muted-foreground">
                            {field.value?.length || 0}/2000 characters
                          </div>
                        </FormItem>
                      )}
                    />

                    {/* File Upload */}
                    <div className="space-y-3">
                      <FormLabel className="text-base font-medium">
                        Screenshots & Screen Recordings (Optional)
                      </FormLabel>
                      <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-4">
                        <div className="text-center">
                          <svg
                            className="mx-auto h-12 w-12 text-gray-400"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 48 48"
                          >
                            <path
                              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <div className="mt-2">
                            <label
                              htmlFor="file-upload"
                              className="cursor-pointer"
                            >
                              <span className="text-orange-600 hover:text-orange-500 font-medium">
                                Upload files
                              </span>
                              <span className="text-muted-foreground">
                                {" "}
                                or drag and drop
                              </span>
                            </label>
                            <input
                              id="file-upload"
                              name="file-upload"
                              type="file"
                              multiple
                              accept="image/*,video/*"
                              className="sr-only"
                              onChange={handleFileChange}
                            />
                          </div>
                          <p className="text-xs text-muted-foreground mt-1">
                            PNG, JPG, WEBP, GIF, MP4, MOV, WEBM up to 10MB each
                            (max 6 files)
                          </p>
                        </div>
                      </div>

                      {/* Selected Files */}
                      {selectedFiles.length > 0 && (
                        <div className="space-y-2">
                          <p className="text-sm font-medium">
                            Selected Files ({selectedFiles.length}/6):
                          </p>
                          <div className="grid grid-cols-1 gap-2">
                            {selectedFiles.map((file, index) => {
                              const fileKey = `${file.name}-${file.size}-${file.lastModified}`;
                              const preview = filePreviews[fileKey];

                              return (
                                <div
                                  key={index}
                                  className="flex items-center justify-between bg-gray-50 dark:bg-gray-800 rounded-md p-2"
                                >
                                  <div className="flex items-center space-x-3">
                                    {/* Thumbnail Preview */}
                                    <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-md flex items-center justify-center overflow-hidden flex-shrink-0">
                                      {preview ? (
                                        // eslint-disable-next-line @next/next/no-img-element
                                        <img
                                          src={preview}
                                          alt={file.name}
                                          className="w-full h-full object-cover rounded-md"
                                        />
                                      ) : (
                                        // Fallback icon while loading or if preview fails
                                        <div className="w-8 h-8 flex items-center justify-center">
                                          {file.type.startsWith("image/") ? (
                                            <svg
                                              className="w-6 h-6 text-orange-600"
                                              fill="currentColor"
                                              viewBox="0 0 20 20"
                                            >
                                              <path
                                                fillRule="evenodd"
                                                d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                                                clipRule="evenodd"
                                              />
                                            </svg>
                                          ) : (
                                            <svg
                                              className="w-6 h-6 text-purple-600"
                                              fill="currentColor"
                                              viewBox="0 0 20 20"
                                            >
                                              <path d="M2 6a2 2 0 012-2h6l2 2h6a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
                                              <path
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="m9 12 2 2 4-4"
                                              />
                                            </svg>
                                          )}
                                        </div>
                                      )}
                                    </div>

                                    {/* File Info */}
                                    <div className="min-w-0 flex-1">
                                      <p className="text-sm font-medium text-gray-900 dark:text-gray-100 truncate">
                                        {file.name}
                                      </p>
                                      <div className="flex items-center space-x-2 text-xs text-gray-500">
                                        <span>
                                          {(file.size / 1024 / 1024).toFixed(2)}{" "}
                                          MB
                                        </span>
                                        <span>•</span>
                                        <span className="capitalize">
                                          {file.type.startsWith("image/")
                                            ? "Image"
                                            : "Video"}
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <Button
                                    type="button"
                                    variant="outline"
                                    size="sm"
                                    onClick={() => removeFile(index)}
                                    className="ml-2 flex-shrink-0"
                                  >
                                    Remove
                                  </Button>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Response Time Indicator */}
                    {form.watch("type") && (
                      <div
                        className={`p-4 rounded-lg border ${
                          form.watch("type") === "urgent_issue"
                            ? "bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-800"
                            : form.watch("type") === "general_support"
                            ? "bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800"
                            : form.watch("type") === "feature_request"
                            ? "bg-purple-50 dark:bg-purple-950/20 border-purple-200 dark:border-purple-800"
                            : "bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800"
                        }`}
                      >
                        <div className="flex items-center space-x-2">
                          <div
                            className={`w-3 h-3 rounded-full ${
                              form.watch("type") === "urgent_issue"
                                ? "bg-red-500"
                                : form.watch("type") === "general_support"
                                ? "bg-blue-500"
                                : form.watch("type") === "feature_request"
                                ? "bg-purple-500"
                                : "bg-green-500"
                            }`}
                          ></div>
                          <span
                            className={`font-medium ${getTypeColor(
                              form.watch("type")
                            )}`}
                          >
                            Expected Response Time for{" "}
                            {getTypeLabel(form.watch("type"))}:
                          </span>
                          <span className="font-semibold">
                            {form.watch("type") === "urgent_issue"
                              ? "Within 24 hours"
                              : form.watch("type") === "general_support"
                              ? "1-2 business days"
                              : form.watch("type") === "feature_request"
                              ? "2-3 business days"
                              : "2-3 business days"}
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Submit Buttons */}
                    <div className="flex justify-end space-x-3 pt-4 border-t">
                      <Link href="/products/journey-app/contact">
                        <Button
                          type="button"
                          variant="outline"
                          disabled={isSubmitting}
                        >
                          Cancel
                        </Button>
                      </Link>
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white"
                      >
                        {isSubmitting ? (
                          <>
                            <svg
                              className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Submitting...
                          </>
                        ) : (
                          "Submit Request"
                        )}
                      </Button>
                    </div>
                  </form>
                </Form>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
