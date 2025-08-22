/**
 * PROJECT SCHEMA WILL HAVE FOLLOWING FIELDS:
 * title, slug, coverImage, shortDescription, content, techStack, createdAt, liveUrl, repoUrl, projectImages, features.
 */

export default {
  name: 'project',
  type: 'document',
  title: 'Project',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title of Project',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug of Project',
      options: {source: 'title'},
    },
    {
      name: 'coverImage',
      type: 'image',
      title: 'Cover Image of Project',
      options: {hotspot: true},
    },
    {
      name: 'projectDescription',
      type: 'text',
      title: 'Short Description of Project',
    },
    {
      name: 'images',
      title: 'Add Project Images',
      type: 'array',
      of: [{type: 'image'}],
      options: {
        hotspot: true,
      },
    },
    {
      name: 'liveUrl',
      title: 'Live Demo URL',
      type: 'url',
    },
    {
      name: 'gitRepoUrl',
      title: 'GitHub Repository URL',
      type: 'url',
    },
    {
      name: 'features',
      title: 'Project Features',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        sortable: true,
      },
      description: 'Add key features of the project',
    },
    {
      name: 'content',
      type: 'array',
      title: 'Content of Project',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image', // ✅ Add image support
          title: 'Image',
          options: {
            hotspot: true, // Allow cropping & better image focus
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alt Text',
              description: 'Describe the image for better SEO & accessibility',
            },
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
              description: 'Optional caption for the image',
            },
          ],
        },
        {
          type: 'code', // ✅ Add code block support
          title: 'Code Block',
          options: {
            language: 'javascript',
            languageAlternatives: [
              {title: 'JavaScript', value: 'javascript'},
              {title: 'TypeScript', value: 'typescript'},
              {title: 'HTML', value: 'html'},
              {title: 'CSS', value: 'css'},
              {title: 'JSON', value: 'json'},
              {title: 'Python', value: 'python'},
              {title: 'Node.js', value: 'nodejs'},
              {title: 'React.js', value: 'reactjs'},
            ],
            withFilename: true,
          },
        },
      ],
    },
    {
      name: 'techStack',
      type: 'array',
      title: 'Tech Stack used in the Project',
      of: [{type: 'string'}],
      options: {
        layout: 'techStack',
      },
    },
    {
      name: 'createdAt',
      title: 'Created At',
      type: 'datetime',
    },
  ],
}
