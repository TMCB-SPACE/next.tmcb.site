import { ComposeIcon, ImageIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  type: 'document',
  name: 'post',
  title: 'Post',
  icon: ComposeIcon,
  fields: [
    defineField({
      type: 'string',
      name: 'title',
      title: 'Title',
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'slug',
      name: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'datetime',
      name: 'publishedAt',
      title: 'Published at',
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'array',
      name: 'body',
      title: 'Body',
      description:
        "This is where you can write the page's content. Including custom blocks like timelines for more a more visual display of information.",
      of: [
        // Paragraphs
        defineArrayMember({
          type: 'block',
          marks: {
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'Url',
                  },
                ],
              },
            ],
          },
          styles: [],
        }),
        // Custom blocks
        defineArrayMember({
          name: 'timeline',
          type: 'timeline',
        }),
        defineField({
          type: 'image',
          icon: ImageIcon,
          name: 'image',
          title: 'Image',
          options: {
            hotspot: true,
          },
          preview: {
            select: {
              imageUrl: 'asset.url',
              title: 'caption',
            },
          },
          fields: [
            defineField({
              title: 'Caption',
              name: 'caption',
              type: 'string',
            }),
            defineField({
              name: 'alt',
              type: 'string',
              title: 'Alt text',
              description: 'Alternative text for screenreaders. Falls back on caption if not set',
            }),
          ],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        subtitle: 'Post',
        title,
      }
    },
  },
})
