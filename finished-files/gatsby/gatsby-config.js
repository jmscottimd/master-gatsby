import dotenv from 'dotenv';

dotenv.config({
  path: `.env`,
});

const config = {
  siteMetadata: {
    title: `Slick's Slices`,
    description: `The Best Pizza Ever`,
    twitter: `@slicks`,
  },
  plugins: [
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'q8tcrnkv',
        dataset: 'development',
        token: process.env.SANITY_TOKEN,
        watchMode: true,
      },
    },
  ],
};

export default config;