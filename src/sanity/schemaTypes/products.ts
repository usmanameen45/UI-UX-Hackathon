// schemas/products.ts

import { defineField, defineType } from "sanity";

export const products = defineType({
  name: "products",
  title: "Products",
  type: "document",
  fields: [
    // Image field
    defineField({
      name: "src",
      title: "Image",
      type: "image",
      options: {
        hotspot: true, // Allows you to crop and focus on the image
      },
      fields: [
        {
          name: "alt",
          title: "Alt text",
          type: "string",
          description: "Text description for accessibility",
        },
      ],
    }),

    // Title field
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required().min(3).max(150),
    }),

    // Slug field (auto-generated)
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        slugify: (input) => {
          const ti = input.replace(/\s+/g, "-").toLowerCase();
          const randomDigits = Math.floor(10000000 + Math.random() * 90000000);
          return `${ti}-${randomDigits}`;
        }
      }
    }),

    // Price field
    defineField({
      name: "price",
      title: "Price",
      type: "number",
      validation: (Rule) => Rule.required().min(0),
    }),

    // Description field
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      description: "A detailed description of the product",
      validation: (Rule) => Rule.max(500),
    })
  ],
});
