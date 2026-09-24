export const researchStatement =
  "My research asks how information systems can support high-stakes health decisions faithfully: surfacing evidence that fits a person's context, preserving what the science actually says, and evaluating these systems rigorously enough to be trusted.";

export const projects = [
  {
    title: "Temporal State-Conditioned Retrieval for Sequential Protocols",
    status: "ongoing",
    period: "2026.03 – present",
    affiliation: "University of Washington",
    mentor: { role: "advisor", name: "Dr. Ankur Teredesai" },
    question:
      "Can a retrieval system return information that is correct for where a patient is in their treatment, not just topically relevant?",
    summary:
      "Patients moving through multi-step clinical protocols like IVF need information relevant to where they are right now, but standard search ignores that context. This project conditions retrieval on a patient's current protocol phase so results stay phase-appropriate.",
    contributions: [
      "Formulated temporal state-conditioned retrieval, treating a patient's position in a sequential clinical protocol as a first-class input to search rather than something the query must implicitly convey.",
      "Proposed an interpretable method that linearizes structured protocol state into BM25 query terms and enforces a hard phase constraint over the evidence corpus.",
      "Constructed a benchmark of 278 patient events from 261 r/IVF threads with a 52-passage evidence corpus spanning all nine IVF phases, evaluated with phase-aware metrics alongside standard IR measures.",
      "Characterized robustness and failure modes through phase-leakage, corrupted-state, and partial-state ablations, examining how the method behaves when patient state is leaked, corrupted, or incomplete.",
    ],
    results: [
      { metric: "nDCG@10 vs. stateless BM25", value: "+0.112" },
      { metric: "phase-valid precision", value: "0.161 → 1.000" },
      { metric: "wrong-phase retrievals", value: "eliminated" },
    ],
    tags: ["Information Retrieval", "BM25", "Clinical NLP", "Evaluation"],
    links: { paper: "/publications", code: "" },
  },
  {
    title: "Evidence-Grounded Health News Evaluation",
    status: "ongoing",
    period: "2026.06 – present",
    affiliation: "NSF National AI Research Resource Pilot",
    mentor: { role: "PI", name: "Dr. Naeemul Hassan" },
    question:
      "Where along the path from research paper to press release to news does scientific accuracy break down, and can LLMs reliably detect it?",
    summary:
      "Health news often distorts the science it reports by overstating benefits or dropping uncertainty. This project traces claims from peer-reviewed papers through press releases to news coverage to measure where accuracy breaks down.",
    contributions: [
      "Framing health-news accuracy as an evidence-grounding problem: each news claim is evaluated against the specific finding it originated from, rather than judged in isolation.",
      "Constructing a claim-level corpus aligning peer-reviewed papers, institutional press releases, and resulting news articles, enabling analysis of where distortion is introduced.",
      "Designing an annotation taxonomy spanning scientific accuracy, uncertainty, benefit–harm framing, and evidence support.",
      "Assessing whether LLM-assisted annotation can scale expert judgment by measuring agreement with expert labels and analyzing systematic disagreements.",
    ],
    results: [],
    tags: ["LLM Evaluation", "Annotation Design", "Health Communication", "Python"],
    links: {},
  },
  {
    title: "Automated Labeling for Multimodal Chest X-Ray Data",
    status: "completed",
    period: "2024.06 – 2025.06",
    affiliation: "University of Washington",
    mentor: { role: "advisor", name: "Dr. Juhua Hu" },
    question:
      "How reliable are labels derived automatically from clinical text, and where do language models misread medical language?",
    summary:
      "Training medical AI requires large labeled datasets, but expert annotation doesn't scale. This project built automated labeling for the MIMIC-CXR dataset and studied where language models misread clinical reports.",
    contributions: [
      "Curated a 200,000+ study multimodal MIMIC-CXR dataset with an automated CheXpert/CheXbert labeling pipeline, treating label quality as a measurable property rather than an assumption.",
      "Built distribution-level checks to detect label drift and data-quality failures before they propagate to downstream models.",
      "Identified systematic LLM failures on negation and diagnostic uncertainty in radiology reports; these findings informed the design of the MIRAGE retrieval architecture.",
      "Validated automated labels against radiologist annotations with clinical and ML collaborators, and presented the work as a guest lecture to CS students.",
    ],
    results: [{ metric: "studies curated", value: "200,000+" }],
    tags: ["Medical Imaging", "Multimodal Data", "LLM Error Analysis", "Data Curation"],
    links: {},
  },
];