export interface Judgment {
  id: string;
  caseNumber: string;
  title: string;
  court: string;
  date: string;
  category: string;
  summary: string;
}

export const latestJudgments: Judgment[] = [
  {
    id: "judgment-001",
    caseNumber: "Civil Appeal No. 1842 of 2026",
    title: "Constitutional interpretation and administrative law",
    court: "Supreme Court of India",
    date: "26 August 2026",
    category: "Constitution",
    summary:
      "A decision concerning principles of constitutional interpretation, administrative fairness and the scope of judicial review.",
  },
  {
    id: "judgment-002",
    caseNumber: "Criminal Appeal No. 927 of 2026",
    title: "Principles governing criminal proceedings",
    court: "Supreme Court of India",
    date: "25 August 2026",
    category: "Criminal Law",
    summary:
      "The Court considered procedural safeguards and the principles applicable to criminal proceedings.",
  },
  {
    id: "judgment-003",
    caseNumber: "Civil Appeal No. 1650 of 2026",
    title: "Rights, obligations and statutory interpretation",
    court: "Supreme Court of India",
    date: "24 August 2026",
    category: "Civil Law",
    summary:
      "The judgment examines statutory interpretation and the relationship between legal rights and corresponding obligations.",
  },
  {
    id: "judgment-004",
    caseNumber: "Writ Petition (Civil) No. 412 of 2026",
    title: "Public law remedies and fundamental rights",
    court: "Supreme Court of India",
    date: "22 August 2026",
    category: "Fundamental Rights",
    summary:
      "The Court examined the availability of constitutional remedies in a public law dispute.",
  },
];