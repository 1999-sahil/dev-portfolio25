/**
 * BLOG SCHEMA WILL HAVE FOLLOWING FIELDS:
 * title, slug, coverImage, shortDescription, content, tags, createdAt, readTime
 */

export default {
  name: 'blog',
  type: 'document',
  title: 'Blog',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title of Blog Article',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug of Blog Article',
      options: {source: 'title'},
    },
    {
      name: 'coverImage',
      type: 'image',
      title: 'Cover Image of Blog Article',
      options: {hotspot: true},
    },
    {
      name: 'shortDescription',
      type: 'text',
      title: 'Short Description of Blog Article',
    },
    {
      name: 'content',
      type: 'array',
      title: 'Content of Blog Article',
      of: [
        {
          type: 'block'
        },
        {
          type: 'code',
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
      name: 'tags',
      type: 'array',
      title: 'Tags related to Blog Article',
      of: [{type: 'string'}],
      options: {
        layout: 'tags',
      },
    },
    {
      name: 'createdAt',
      title: 'Created At',
      type: 'datetime',
    },
    {
      name: 'readTime',
      title: 'Read Time (minutes)',
      type: 'number',
    },
  ],
}
