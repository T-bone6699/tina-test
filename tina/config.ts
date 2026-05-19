import { defineConfig } from "tinacms";

const isLocal = process.env.TINA_PUBLIC_IS_LOCAL === "true" || !process.env.TINA_PUBLIC_CLIENT_ID;

export default defineConfig({
  branch: process.env.TINA_BRANCH || process.env.HEAD || "main",
  clientId: process.env.TINA_PUBLIC_CLIENT_ID || "local",
  token: process.env.TINA_TOKEN || "local",

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },

  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public",
    },
  },

  schema: {
    collections: [
      {
        name: "homepage",
        label: "Homepage",
        path: "content/homepage",
        format: "mdx",
        fields: [
          {
            type: "string",
            name: "heroText",
            label: "Hero Text",
            isTitle: true,
            required: true,
          },
          {
            type: "image",
            name: "image",
            label: "Hero Image",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
    ],
  },
});
