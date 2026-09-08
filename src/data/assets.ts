// Auto-discovers files placed in src/data/resume/ and src/data/project-images/
// No code changes needed — just drop files in the folders and they appear.

const resumeFiles = import.meta.glob('./resume/*.{pdf,doc,docx}', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>;

const imageFiles = import.meta.glob(
  './project-images/*.{png,jpg,jpeg,webp,gif,svg}',
  {
    eager: true,
    query: '?url',
    import: 'default',
  },
) as Record<string, string>;

const resumeUrls = Object.values(resumeFiles).sort();
const imageUrls = Object.values(imageFiles).sort();

export const resumeUrl: string = resumeUrls[0] ?? '';

export const projectImages: string[] = imageUrls;
