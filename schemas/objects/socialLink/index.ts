import { defineField, defineType } from 'sanity'
import IconPreview from './IconifyPreview'

export default defineType({
  name: 'socialLink',
  title: 'Social Link',
  type: 'object',
  fields: [
    defineField({
      type: 'string',
      name: 'tooltip',
      title: 'Tooltip',
    }),
    defineField({
      name: 'url',
      title: 'Url',
      type: 'url',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'icon',
    }),
  ],
  preview: {
    select: {
      tooltip: 'tooltip',
      url: 'url',
      icon: 'icon.name',
    },
    prepare({ tooltip, url, icon }) {
      return {
        subtitle: url,
        title: tooltip,
        media: IconPreview({ icon }),
      }
    },
  },
});
