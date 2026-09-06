import {
  Database,
  Cloud,
  GitBranch,
  BarChart3,
  Table2,
  Server,
  FileSpreadsheet,
  Cpu,
  Brain,
  Layers,
  Workflow,
  Boxes,
} from 'lucide-react';

export const personalInfo = {
  name: 'Mahesh',
  role: 'Data Engineer',
  tagline:
    'Building scalable data pipelines and analytics solutions with Azure Data Factory, Microsoft Fabric, Databricks, and Power BI.',
  email: 'sharmamahesh@gmail.com',
  phone: '+91 8607458275',
  location: 'Hyderabad, Telangana',
  github: 'https://github.com/Integration-Hub-DE',
  linkedin: 'https://www.linkedin.com/in/mahesh-sharma-00897b1a3/',
  resumeUrl: '',
  bio: 'I am a passionate Data Engineer with 5 years of experience and deep expertise in the Microsoft data platform, specializing in designing, developing, and optimizing scalable data solutions using Azure and Microsoft Fabric. I architect end-to-end data solutions from ingestion and transformation to analytics and reporting using Azure Data Factory, Microsoft Fabric, Databricks, and Power BI. I love turning raw data into actionable insights that drive business decisions.',
};

export const skillCategories = [
  {
    title: 'Data Orchestration',
    icon: Workflow,
    skills: [
      { name: 'Azure Data Factory' },
      { name: 'Microsoft Fabric' },
      { name: 'Pyspark' },
      { name: 'Notebook' },
    ],
  },
  {
    title: 'Analytics & Visualization',
    icon: BarChart3,
    skills: [
      { name: 'Power BI' },
      { name: 'Microsoft Fabric' },
      { name: 'Warehouse' },
      { name: 'Data Visualization' },
    ],
  },
  {
    title: 'Storage & Databases',
    icon: Database,
    skills: [
      { name: 'Azure Storage Account' },
      { name: 'SQL Server - Azure/On-prem' },
      { name: 'Lakehouse' },
      { name: 'Warehouse' },
      { name: 'Onelake' },
    ],
  },
  {
    title: 'Big Data & Processing',
    icon: Cpu,
    skills: [
      { name: 'Databricks' },
      { name: 'Mirroring' },
      { name: 'Data Integration' },
      { name: 'SQL' },
      { name: 'Pyspark' },
    ],
  },
];

export const techStack = [
  { name: 'Azure Data Factory', icon: Cloud },
  { name: 'Microsoft Fabric', icon: Layers },
  { name: 'Storage Account', icon: Database },
  { name: 'SQL Server', icon: Server },
  { name: 'Databricks', icon: GitBranch },
  { name: 'Pyspark', icon: Cpu },
  { name: 'Notebook', icon: FileSpreadsheet },
  { name: 'Lakehouse', icon: Database },
  { name: 'Warehouse', icon: Table2 },
  { name: 'Mirroring', icon: GitBranch },
  { name: 'Power BI', icon: BarChart3 },
  { name: 'Data Integration', icon: Boxes },
];

export const experiences = [
  {
    role: 'Azure Big Data Engineer',
    company: 'Microsoft',
    period: '2023 — Present',
    location: 'Hyderabad, Telangana',
    description:
      'Supported the design and implementation of enterprise-grade data pipelines using Azure Data Factory and Microsoft Fabric. Architected Microsoft Fabric solutions for real-time analytics.',
    achievements: [
      'Successfully contributed to the go-live of 30+ enterprise data integration and analytics projects for Philips, leveraging Azure Data Factory and SAP integration.',
      "Collaborated with Optum's client to improve pipeline orchestration efficiency by 30%, optimizing ETL/ELT workflow execution, monitoring, and operational reliability.",
      'Supported HDFC Bank in enhancing data workload performance by 20% through workload optimization, query tuning, and performance troubleshooting.',
      'Designed, troubleshot, supported and optimized large-scale analytics and data integration workloads across Microsoft Fabric, Azure Data Factory, Azure Data Lake Storage Gen2, Azure SQL, Power BI, and cloud-native data platforms.',
      'Enabled customers to implement Azure DevOps and Git-based CI/CD frameworks, including deployment automation, source control strategies, release management, and DataOps best practices for enterprise data platforms.',
    ],
  },
  {
    role: 'Data Engineer',
    company: 'fifthnote- An Ensemble Health Partners Company',
    period: '2022 — 2023',
    location: 'Mohali, Chandigarh',
    description:
      'Designed and maintained data integration solutions using Azure Data Factory, SQL Server, and Power BI. Collaborated with cross-functional teams to deliver data-driven insights.',
    achievements: [
      'Developed, tested, and validated ETL pipelines to deliver enterprise reporting and analytics requirements.',
      'Optimized SQL Server stored procedures, improving query performance by 50%.',
      'Performed data validation, SQL-based testing, and issue resolution to ensure reliable and accurate data processing.',
      'Built Power BI semantic models for executive-level reporting and decision-making.',
      'Implemented data quality checks and monitoring across all pipeline stages.',
    ],
  },
  {
    role: 'Data Engineer',
    company: 'CodeQuotient',
    period: '2021 — 2022',
    location: 'Mohali, Chandigarh',
    description:
      'Started my data journey building Power BI reports and SQL queries. Grew into data engineering through hands-on ETL development.',
    achievements: [
      'Assisted in ETL development, troubleshooting, and production support to ensure data quality and process reliability',
      'Developed SQL queries, stored procedures, and business logic while supporting database design and data validation activities.',
      'Collaborated with senior engineers to learn Azure Data Factory and ETL patterns.',
      'Gained hands-on experience in smoke, regression, and performance testing of enterprise application & ETL workflows.'
    ],
  },
];

export const education = [
  {
    degree: 'Master of Computer Applications',
    university: 'Kurukshetra University, Kurukshetra',
    institution: 'Panipat Institute Of Engineering & Technology, Panipat',
    period: '2019 — 2021',
    description:
      'Advanced studies in computer applications, software engineering, database systems, and data technologies, with a focus on developing scalable and efficient software and data-driven solutions.',
  },
  {
    degree: 'Bachelor of Computer Applications',
    university: 'Kurukshetra University, Kurukshetra',
    institution: 'Arya P.G. College, Panipat',
    period: '2015 — 2018',
    description:
      'Comprehensive foundation in computer science, programming, database systems, data structures, algorithms, and software development, establishing the core technical foundation for a career in data engineering and technology.',
  },
];

export const projects = [
  {
    title: 'Real-Time Sales Analytics Platform',
    category: 'Azure Data Factory · Databricks · Power BI',
    description:
      'Built an end-to-end real-time analytics platform ingesting streaming sales data through Azure Data Factory, processing with Databricks and Pyspark, and visualizing in Power BI dashboards with sub-second latency.',
    tech: ['Azure Data Factory', 'Databricks', 'Pyspark', 'Power BI', 'SQL Server'],
    highlights: [
      'Processes 5M+ events per day with 99.9% uptime',
      'Reduced reporting latency from hours to seconds',
      'Serves 200+ business users across 3 departments',
    ],
    gradient: 'from-sky-500 to-blue-600',
  },
  {
    title: 'Microsoft Fabric Lakehouse Migration',
    category: 'Microsoft Fabric · Lakehouse · Mirroring',
    description:
      'Led the migration of legacy on-premises data warehouse to Microsoft Fabric Lakehouse. Implemented medallion architecture and configured mirroring for near real-time replication from SQL Server.',
    tech: ['Microsoft Fabric', 'Lakehouse', 'Mirroring', 'Warehouse', 'Notebook'],
    highlights: [
      'Migrated 15TB of historical data with zero downtime',
      'Achieved 40% cost reduction vs. legacy infrastructure',
      'Enabled self-service analytics for 500+ users',
    ],
    gradient: 'from-teal-500 to-emerald-600',
  },
  {
    title: 'Enterprise Data Integration Hub',
    category: 'Azure Data Factory · Storage Account · SQL Server',
    description:
      'Designed a centralized data integration hub using Azure Data Factory to orchestrate ingestion from 20+ source systems into Azure Storage Account, with downstream processing in SQL Server and Databricks.',
    tech: ['Azure Data Factory', 'Storage Account', 'SQL Server', 'Databricks'],
    highlights: [
      'Integrated 20+ disparate source systems into a unified data layer',
      'Automated 50+ pipelines with dependency management and alerting',
      'Reduced data ingestion errors by 85%',
    ],
    gradient: 'from-indigo-500 to-blue-600',
  },
  {
    title: 'Customer 360 Analytics Solution',
    category: 'Databricks · Pyspark · Power BI',
    description:
      'Developed a Customer 360 analytics solution combining transactional, behavioral, and demographic data. Used Databricks and Pyspark for large-scale processing and Power BI for executive dashboards.',
    tech: ['Databricks', 'Pyspark', 'Notebook', 'Power BI', 'Lakehouse'],
    highlights: [
      'Unified customer data from 8 source systems into a single view',
      'Enabled targeted marketing campaigns increasing conversion by 25%',
      'Processed 3TB+ of customer interaction data monthly',
    ],
    gradient: 'from-amber-500 to-orange-600',
  },
  {
    title: 'Financial Reporting Automation',
    category: 'Microsoft Fabric · Warehouse · Power BI',
    description:
      'Automated financial reporting workflows using Microsoft Fabric Warehouse and Power BI. Replaced manual month-end Excel processes with automated, auditable data pipelines.',
    tech: ['Microsoft Fabric', 'Warehouse', 'Power BI', 'Data Integration'],
    highlights: [
      'Eliminated 120+ hours of manual monthly reporting effort',
      'Achieved 100% audit compliance with automated lineage tracking',
      'Reduced reporting errors from 5% to under 0.1%',
    ],
    gradient: 'from-rose-500 to-pink-600',
  },
  {
    title: 'IoT Telemetry Processing Pipeline',
    category: 'Azure Data Factory · Databricks · Storage Account',
    description:
      'Built a scalable IoT telemetry pipeline handling millions of sensor events per hour. Used Azure Storage Account for raw ingestion, Databricks for stream processing, and SQL Server for curated analytics.',
    tech: ['Azure Data Factory', 'Databricks', 'Storage Account', 'SQL Server', 'Pyspark'],
    highlights: [
      'Handles 3M+ sensor events per hour with horizontal scaling',
      'Reduced anomaly detection time from minutes to seconds',
      'Supports 10,000+ connected IoT devices',
    ],
    gradient: 'from-cyan-500 to-sky-600',
  },
];

export const certifications = [
  {
    title: 'Microsoft Certified: Azure Data Engineer Associate',
    issuer: 'Microsoft',
    year: '2023',
    credentialId: 'AZ-204-2023',
  },
  {
    title: 'Microsoft Certified: Fabric Analytics Engineer Associate',
    issuer: 'Microsoft',
    year: '2023',
    credentialId: 'DP-600',
  },
  {
    title: 'Databricks Certified Data Engineer Professional',
    issuer: 'Databricks',
    year: '2022',
    credentialId: 'DB-PRO-2022',
  },
  {
    title: 'Microsoft Certified: Power BI Data Analyst Associate',
    issuer: 'Microsoft',
    year: '2021',
    credentialId: 'PL-300',
  },
  {
    title: 'Azure Fundamentals (AZ-900)',
    issuer: 'Microsoft',
    year: '2020',
    credentialId: 'AZ-900',
  },
  {
    title: 'Google Cloud Professional Data Engineer',
    issuer: 'Google Cloud',
    year: '2021',
    credentialId: 'GCP-DE-2021',
  },
];

export const githubRepos = [
  {
    name: 'datafactory-automate-deployments',
    description:
      'Designed and implemented a scalable, reusable, and production-ready CI/CD framework for Azure Data Factory using GitHub Actions, ARM Templates, Microsoft Entra ID Federated Credentials (OIDC), and Azure RBAC. Eliminates manual deployments and enables repeatable, secure, and automated promotion of ADF resources across environments.',
    language: 'Yaml',
    // stars: 189,
    // forks: 42,
    url: 'https://github.com/Integration-Hub-DE/datafactory-automate-deployments',
  },
  {
    name: 'datafactory-linkedtemplates-automate-deployments',
    description:
      'Built an enterprise-grade Azure Data Factory CI/CD automation solution using GitHub Actions, ARM Templates, Microsoft Entra ID Federated Authentication (OIDC), Azure Resource Manager, and Azure RBAC. The framework automates validation, template generation, and deployment of Azure Data Factory resources, enabling secure, scalable, and repeatable releases across environments.',
    language: 'Yaml',
    // stars: 189,
    // forks: 42,
    url: 'https://github.com/Integration-Hub-DE/datafactory-linkedtemplates-automate-deployments',
  },
  {
    name: 'datafactory-automate-deployments-with-prepostscript',
    description:
      "End-to-end CI/CD implementation for Azure Data Factory using GitHub Actions, ARM Templates, OpenID Connect (OIDC) authentication, deployment approvals, and Microsoft's PrePostDeploymentScript for automated trigger management during deployments. Built to provide a repeatable, secure, and production-ready deployment process across environments.",
    language: 'Yaml',
    // stars: 189,
    // forks: 42,
    url: 'https://github.com/Integration-Hub-DE/datafactory-automate-deployments-with-prepostscript',
  },
];

export const stats = [
  { label: 'Years of Experience', value: '5' },
  { label: 'Projects Delivered', value: '40+' },
  { label: 'Pipelines Built, Troubleshooted', value: '200+' },
  { label: 'Data Processed', value: '50TB+' },
];
