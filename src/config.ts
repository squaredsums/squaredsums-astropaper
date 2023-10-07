import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://squaredsums.com/",
  author: "Matthias Ragus",
  desc: "Pioneers in Data-Driven Business Transformation",
  title: "Squared Sums",
  ogImage: "squaredsums-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 3,
};

export const LOCALE = ["en-EN"]; // set to [] to use the environment default

export const LOGO_IMAGE = {
  enable: true,
  svg: true,
  width: 235,
  height: 35,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/squaredsums",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/squaredsums/",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:dev@squaredsums.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
  {
    name: "Twitter",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Twitter`,
    active: false,
  },
];
