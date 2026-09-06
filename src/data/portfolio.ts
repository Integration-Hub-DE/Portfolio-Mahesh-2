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
  email: 'sharmamahesh@email.com',
  phone: '+91 8607458275',
  location: 'Hyderabad, Telangana',
  github: 'https://github.com/Integration-Hub-DE',
  linkedin: 'https://www.linkedin.com/in/mahesh-sharma-00897b1a3/',
  resumeUrl: '',
  bio: 'I am a passionate Data Engineer with 5 years of experience and deep expertise in the Microsoft data platform, specializing in designing, developing, and optimizing scalable data solutions using Azure and Microsoft Fabric. I architect end-to-end data solutions — from ingestion and transformation to analytics and reporting — using Azure Data Factory, Microsoft Fabric, Databricks, and Power BI. I love turning raw data into actionable insights that drive business decisions.',
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
    role: 'Senior Data Engineer',
    company: 'Tech Solutions Inc.',
    period: '2022 — Present',
    location: 'Remote, US',
    description:
      'Lead the design and implementation of enterprise-grade data pipelines using Azure Data Factory and Databricks. Architected Microsoft Fabric solutions for real-time analytics.',
    achievements: [
      'Built 50+ ADF pipelines processing 2TB+ of data daily across multiple source systems',
      'Migrated legacy ETL workflows to Microsoft Fabric, reducing processing time by 40%',
      'Implemented medallion architecture (Bronze/Silver/Gold) in Databricks Lakehouse',
      'Developed Power BI dashboards serving 500+ business users with sub-second refresh',
    ],
  },
  {
    role: 'Data Engineer',
    company: 'DataVision Technologies',
    period: '2020 — 2022',
    location: 'Austin, TX',
    description:
      'Designed and maintained data integration solutions using Azure Data Factory, SQL Server, and Power BI. Collaborated with cross-functional teams to deliver data-driven insights.',
    achievements: [
      'Created automated ETL pipelines ingesting data from 15+ disparate sources',
      'Optimized SQL Server stored procedures, improving query performance by 60%',
      'Built Power BI semantic models for executive-level reporting and decision-making',
      'Implemented data quality checks and monitoring across all pipeline stages',
    ],
  },
  {
    role: 'Junior Data Analyst',
    company: 'Insight Analytics',
    period: '2018 — 2020',
    location: 'Dallas, TX',
    description:
      'Started my data journey building Power BI reports and SQL queries. Grew into data engineering through hands-on ETL development.',
    achievements: [
      'Developed 30+ Power BI dashboards for sales, finance, and operations teams',
      'Wrote complex T-SQL queries for ad-hoc business analysis and reporting',
      'Automated manual Excel reporting processes, saving 20+ hours per week',
      'Collaborated with senior engineers to learn Azure Data Factory and ETL patterns',
    ],
  },
];

export const education = [
  {
    degree: 'Master of Science in Computer Science',
    institution: 'University of Technology',
    period: '2016 — 2018',
    description:
      'Specialized in Database Systems and Big Data Analytics. Thesis on distributed data processing using Apache Spark.',
  },
  {
    degree: 'Bachelor of Technology in Computer Science',
    institution: 'State University',
    period: '2012 — 2016',
    description:
      'Graduated with honors. Coursework focused on data structures, algorithms, and database management systems.',
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
    name: 'azure-data-pipeline-templates',
    description:
      'Reusable Azure Data Factory pipeline templates for common ETL patterns — incremental loads, SCD-Type2, and metadata-driven orchestration.',
    language: 'Python',
    stars: 342,
    forks: 87,
    url: 'https://github.com/mahesh-data/azure-data-pipeline-templates',
  },
  {
    name: 'fabric-lakehouse-medallion',
    description:
      'Microsoft Fabric Lakehouse medallion architecture reference implementation with Notebook-based transformations and Warehouse integration.',
    language: 'Python',
    stars: 218,
    forks: 54,
    url: 'https://github.com/mahesh-data/fabric-lakehouse-medallion',
  },
  {
    name: 'databricks-pyspark-toolkit',
    description:
      'A collection of Pyspark utility functions for Databricks — data quality checks, schema validation, and performance optimization helpers.',
    language: 'Python',
    stars: 189,
    forks: 42,
    url: 'https://github.com/mahesh-data/databricks-pyspark-toolkit',
  },
  {
    name: 'powerbi-semantic-models',
    description:
      'Pre-built Power BI semantic models and DAX measures for common business analytics scenarios — sales, finance, and operations.',
    language: 'DAX',
    stars: 156,
    forks: 38,
    url: 'https://github.com/mahesh-data/powerbi-semantic-models',
  },
  {
    name: 'sql-server-optimization-playbook',
    description:
      'A comprehensive guide to SQL Server query optimization — indexing strategies, execution plan analysis, and stored procedure tuning.',
    language: 'T-SQL',
    stars: 274,
    forks: 61,
    url: 'https://github.com/mahesh-data/sql-server-optimization-playbook',
  },
  {
    name: 'data-integration-patterns',
    description:
      'Documentation and code samples for enterprise data integration patterns using Azure Data Factory and Microsoft Fabric.',
    language: 'Python',
    stars: 132,
    forks: 29,
    url: 'https://github.com/mahesh-data/data-integration-patterns',
  },
];

export const stats = [
  { label: 'Years of Experience', value: '7+' },
  { label: 'Projects Delivered', value: '40+' },
  { label: 'Pipelines Built', value: '200+' },
  { label: 'Data Processed', value: '50TB+' },
];
