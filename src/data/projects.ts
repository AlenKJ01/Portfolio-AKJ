export interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string[];
  tech: string;
  github: string;
  featured: boolean;
  image: string | null
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Vision-Based Floor Plan Analytics',
    subtitle: 'Floor Plan Analysis for PropMarker, UK',
    description: [
      'Processed 500+ floor plans with lightweight OCR to extract structured spatial features.',
      'Avoided heavy detection models while maintaining accurate spatial extraction.',
      'Enabled analytics-ready datasets for downstream modeling.',
    ],
    tech: 'Image Processing · OpenCV · OCR · TesseractOCR · Object Detection',
    github: '#',
    featured: true,
    image: 'projects/1.png',
  },
  {
    id: 2,
    title: 'Spec Drift Radar',
    subtitle: 'Automated specification drift detection system',
    description: [
      'Built an AI system using Python, Flask, local Mistral, and Chroma to detect silent requirement violations.',
      'Used constrained LLM reasoning with deterministic scoring to generate explainable pre-deployment drift reports.',
    ],
    tech: 'Python · Flask · Mistral · ChromaDB · Pydantic · SentenceTransformers',
    github: 'https://github.com/AlenKJ01/Spec-Drift-Radar.git',
    featured: true,
    image: 'projects/2.png',
  },
  {
    id: 3,
    title: 'LLM-Based Resume Matcher & ATS Builder',
    subtitle: 'AI resume matching and ATS optimization tool',
    description: [
      'Analyzes resume and job description alignment using vector similarity.',
      'Generates ATS-friendly resumes with structured parsing and contextual rewriting.',
    ],
    tech: 'Python · FastAPI · FAISS · Reportlab · Gemini · Vector Similarity',
    github: '#',
    featured: true,
    image: 'projects/3.png',
  },
  {
    id: 4,
    title: 'Real Estate Price Factor Mining & Prediction',
    subtitle: 'ML-driven property price analysis and forecasting',
    description: [
      'Extracted and analyzed real estate signals at postcode level using web scraping and NLP.',
      'Generated structured datasets to support price prediction and trend analysis.',
    ],
    tech: 'Python · Streamlit · Gemini · Serper · MongoDB',
    github: 'https://github.com/AlenKJ01/Real-Estate-Price-Factor-Mining-Prediction-Engine.git',
    featured: true,
    image: 'projects/4.png',
  },
  {
    id: 5,
    title: 'RAGLine',
    subtitle: 'Retrieval-augmented pipeline for contextual AI responses',
    description: [
      'Built a RAG pipeline that retrieves relevant documents and augments LLM responses with contextual knowledge.',
      'Implemented embedding-based retrieval and structured query flow for accurate question answering.',
    ],
    tech: 'Python · LangChain · ChromaDB · HuggingFace · Streamlit · LLM API',
    github: 'https://github.com/AlenKJ01/RAGLine.git',
    featured: false,
    image: 'projects/5.png',
  },
  {
    id: 6,
    title: 'ContextFlow',
    subtitle: 'Conversational memory extraction and tone-controlled response system',
    description: [
      'Built a conversational pipeline that extracts user preferences and context from chat history into persistent memory.',
      'Implemented a tone-control engine that rewrites responses and visualizes each processing stage in a web interface.',
    ],
    tech: 'Python · Flask · Gemini Flash Lite API · SQLite · HTML · JavaScript',
    github: 'https://github.com/AlenKJ01/ContextFlow.git',
    featured: false,
    image: 'projects/6.png',
  },
  {
    id: 7,
    title: 'GeminiDocQA',
    subtitle: 'Ask questions over documents using Gemini',
    description: [
      'Built a document question-answering system that extracts text from files and enables natural language queries.',
      'Implemented Gemini-based response generation to retrieve relevant information from document content.',
    ],
    tech: 'Python · Gemini API · Streamlit · LangChain · FAISS · PyPDF',
    github: 'https://github.com/AlenKJ01/GeminiDocQA.git',
    featured: false,
    image: 'projects/7.png',
  },
  {
    id: 8,
    title: 'Notes Versions',
    subtitle: 'Version-controlled note tracking and comparison system',
    description: [
      'Built a system to track multiple versions of notes with structured history and change management.',
      'Implemented version comparison to identify edits and maintain an organized revision timeline.',
    ],
    tech: 'Python · Flask · SQLite · HTML · CSS · JavaScript',
    github: 'https://github.com/AlenKJ01/Notes-Versions.git',
    featured: false,
    image: 'projects/8.png',
  },
  {
    id: 9,
    title: 'NASA Data Explorer',
    subtitle: 'Explore NASA space data using APIs',
    description: [
      'Built a web application to fetch and display space data using NASA public APIs.',
      'Implemented interactive visualization of astronomical images and related metadata.',
    ],
    tech: 'Python · Flask · NASA API · HTML · CSS · JavaScript',
    github: 'https://github.com/AlenKJ01/nasa.git',
    featured: false,
    image: 'projects/9.png',
  },
  {
    id: 10,
    title: 'Mediconnect',
    subtitle: 'Healthcare appointment and patient interaction platform',
    description: [
      'Built a web platform enabling patients to connect with doctors and manage appointments digitally.',
      'Implemented structured patient data handling and an interface for streamlined healthcare communication.',
    ],
    tech: 'Python · Flask · SQLite · HTML · CSS · JavaScript',
    github: 'https://github.com/AlenKJ01/Mediconnect.git',
    featured: false,
    image: 'projects/10.png',
  },
];
