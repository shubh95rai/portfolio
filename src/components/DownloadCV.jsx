import { Download } from "lucide-react";

export default function DownloadCV() {
  return (
    <a
      href="./Shubham Rai - Resume.pdf"
      download="Shubham Rai - Resume.pdf"
      className="rounded border border-blue-500/50 px-6 py-3 font-medium text-blue-500 transition-all hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]"
    >
      <button className="flex items-center gap-2">
        <Download size={18} /> Download CV
      </button>
    </a>
  );
}
