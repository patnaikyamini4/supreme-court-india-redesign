export interface CourtService {
  id: string;
  title: string;
  description: string;
  category: string;
  href: string;
}

export const courtServices: CourtService[] = [
  {
    id: "case-status",
    title: "Case Status",
    description:
      "Check the current status and basic information of cases before the Court.",
    category: "Cases",
    href: "#",
  },
  {
    id: "case-number",
    title: "Case Number Search",
    description:
      "Find case information using the available case number details.",
    category: "Cases",
    href: "#",
  },
  {
    id: "judgments",
    title: "Judgments",
    description:
      "Search and explore judgments published by the Supreme Court.",
    category: "Judicial",
    href: "#",
  },
  {
    id: "orders",
    title: "Orders",
    description:
      "Access court orders and related judicial information.",
    category: "Judicial",
    href: "#",
  },
  {
    id: "cause-list",
    title: "Cause List",
    description:
      "View daily listings and information about matters scheduled before the Court.",
    category: "Listings",
    href: "#",
  },
  {
    id: "notices",
    title: "Notices & Circulars",
    description:
      "Find important notices, circulars and administrative announcements.",
    category: "Information",
    href: "#",
  },
  {
    id: "certified-copies",
    title: "Certified Copies",
    description:
      "Access information relating to certified copies and court documentation.",
    category: "Registry",
    href: "#",
  },
  {
    id: "e-services",
    title: "Online Services",
    description:
      "Explore digital services available to litigants, advocates and court users.",
    category: "Digital",
    href: "#",
  },
];