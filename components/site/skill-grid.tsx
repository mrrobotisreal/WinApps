import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import type { Profile } from "@/content/schema";

/** Grouped skill badges with their logos (Backend / Frontend / Mobile). */
export function SkillGrid({ skills }: { skills: Profile["skills"] }) {
  return (
    <div className="space-y-12">
      {skills.map((group) => (
        <div key={group.group} className="space-y-6 text-center">
          <h3 className="text-2xl font-bold">{group.group}</h3>
          <ul className="flex flex-wrap justify-center gap-3">
            {group.items.map((item) => (
              <li key={item.name}>
                <Badge className="px-4 py-2 text-sm">
                  <span className="relative mr-2 h-6 w-6">
                    <Image src={item.icon} alt="" fill sizes="24px" className="object-contain" />
                  </span>
                  {item.name}
                </Badge>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
