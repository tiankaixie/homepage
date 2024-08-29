export type Image = {
  src: string;
  alt?: string;
  caption?: string;
};

export type Link = {
  text: string;
  href: string;
};

export type Hero = {
  title?: string;
  text?: string;
  image?: Image;
  actions?: Link[];
};

export type Subscribe = {
  title?: string;
  text?: string;
  formUrl: string;
};

export type SiteConfig = {
  logo?: Image;
  title: string;
  subtitle?: string;
  description: string;
  image?: Image;
  headerNavLinks?: Link[];
  footerNavLinks?: Link[];
  socialLinks?: Link[];
  hero?: Hero;
  subscribe?: Subscribe;
  postsPerPage?: number;
  projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
  title: "Tiankai Xie",
  subtitle: "Visual Analytics / HCI / XAI",
  description: "Tiankai Xie's Homepage",
  // image: {
  //     src: '/dante-preview.jpg',
  //     alt: 'Dante - Astro.js and Tailwind CSS theme'
  // },
  headerNavLinks: [
    {
      text: "Home",
      href: "/",
    },
    {
      text: "Projects",
      href: "/projects",
    },
    {
      text: "Articles",
      href: "/blog",
    },
    {
      text: "Tags",
      href: "/tags",
    },
  ],
  footerNavLinks: [
    {
      text: "About",
      href: "/about",
    },
    {
      text: "Contact",
      href: "/contact",
    },
    {
      text: "Terms",
      href: "/terms",
    },
  ],
  socialLinks: [
    // {
    //     text: 'Dribbble',
    //     href: 'https://dribbble.com/'
    // },
    {
      text: "CV",
      href: "/CV.pdf",
    },
    {
      text: "Google Scholar",
      href:
        "https://scholar.google.com/citations?user=iGRSrJUAAAAJ&hl=en&inst=1960582506653781529&oi=ao",
    },
    {
      text: "Instagram",
      href: "https://instagram.com/tiankaixie",
    },
    {
      text: "X",
      href: "https://x.com/tiankaixie",
    },
  ],
  hero: {
    // title: 'Hi there, welcome to my homepage!',
    text:
      "I’m a postdoctoral researcher in the [VADER Lab](https://vader.lab.asu.edu) at [Arizona State University](https://www.asu.edu), focusing on visualization and explainable AI. My work centers on visualizing high-dimensional loss functions to improve the transparency and reliability of machine learning models, particularly in scientific applications. By integrating principles from visual analytics and AI, I develop tools that help researchers and practitioners better understand complex model behaviors, aiming to make advanced AI techniques more interpretable, trustworthy, and applicable in scientific domains.",
    // image: {
    //     src: '/hero.jpeg',
    //     alt: 'A person sitting at a desk in front of a computer'
    // },
    actions: [
      {
        text: "Get in Touch",
        href: "/contact",
      },
    ],
  },
  subscribe: {
    title: "Subscribe to Tiankai Newsletter",
    text: "All the latest articles directly in your inbox.",
    formUrl: "#",
  },
  postsPerPage: 8,
  projectsPerPage: 8,
};

export default siteConfig;
