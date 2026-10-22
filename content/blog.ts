import { banner, R2_LEGACY } from "./cdn";
import { BlogPost } from "./schema";

// Posts stay on Medium for now; in-repo migration is deferred (D02).
const posts = [
  {
    title: 'The React Files: What "They" Don\'t Want You to Know',
    href: "https://javascript.plainenglish.io/the-react-files-what-they-dont-want-you-to-know-318fb8b11374",
    publisher: "JavaScript in Plain English",
    date: "2025-06",
    summary: 'A lighthearted look at React and what "they" don\'t want you to know.',
    image: banner(`${R2_LEGACY}/WinApps_TheReactFilesBanner.webp`, "The React Files"),
  },
  {
    title: "11 JavaScript Power-Ups You Probably Aren't Using (Yet)",
    href: "https://medium.com/@90mitchwintrow/11-javascript-power-ups-you-probably-arent-using-yet-and-how-they-ll-turbo-boost-your-code-718e52c670a7",
    publisher: "Medium",
    date: "2025-05",
    summary: "Lesser-known JavaScript features and techniques that make everyday code better.",
    image: banner(`${R2_LEGACY}/WinApps_PepeSilviaBanner.webp`, "11 JavaScript Power-Ups"),
  },
  {
    title: "Optimize Your Multimedia and Make Your READMEs Pop on GitHub",
    href: "https://medium.com/@90mitchwintrow/optimize-your-multimedia-and-make-your-readmes-pop-on-github-866a018c1e13",
    publisher: "Medium",
    date: "2025-04",
    summary: "How to make GitHub READMEs engaging with optimized images, GIFs and video.",
    image: banner(`${R2_LEGACY}/WinApps_OptimizeMultimediaBanner.webp`, "Optimize Your Multimedia"),
  },
  {
    title: "How to Set Up an EC2 Instance With TLS/SSL to Securely Serve HTTPS",
    href: "https://medium.com/@90mitchwintrow/how-to-set-up-an-ec2-instance-with-tls-ssl-to-securely-serve-https-ea15f8399273",
    publisher: "Medium",
    date: "2025-04",
    summary: "A step-by-step guide to serving HTTPS from an EC2 instance with a TLS certificate.",
    image: banner(`${R2_LEGACY}/WinApps_EC2LetsEncryptBanner.webp`, "EC2 with TLS/SSL"),
  },
];

/** Blog posts, newest first. */
export const blog: BlogPost[] = posts
  .map((post) => BlogPost.parse(post))
  .sort((a, b) => b.date.localeCompare(a.date));
