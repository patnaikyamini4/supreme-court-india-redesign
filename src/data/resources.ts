export interface CourtResource {
  id: string;
  title: string;
  description: string;
  label: string;
  href: string;
}

export const courtResources: CourtResource[] = [
  {
    id: "constitution",
    title: "Constitution of India",
    description:
      "Access the Constitution and explore the foundational legal framework of India.",
    label: "Constitution",
    href: "#",
  },
  {
    id: "supreme-court-rules",
    title: "Supreme Court Rules",
    description:
      "Information relating to rules, procedures and practice before the Supreme Court.",
    label: "Rules",
    href: "#",
  },
  {
    id: "legal-resources",
    title: "Legal Resources",
    description:
      "Explore legal materials and resources relevant to court users and legal professionals.",
    label: "Resources",
    href: "#",
  },
  {
    id: "acts-statutes",
    title: "Acts & Statutes",
    description:
      "Browse references to legislation and statutory materials used in legal proceedings.",
    label: "Legislation",
    href: "#",
  },
  {
    id: "forms-downloads",
    title: "Forms & Downloads",
    description:
      "Find commonly required forms, documents and downloadable court resources.",
    label: "Downloads",
    href: "#",
  },
  {
    id: "registry",
    title: "Registry Information",
    description:
      "Access information about registry processes, contacts and administrative services.",
    label: "Registry",
    href: "#",
  },
];