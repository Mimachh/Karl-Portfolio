import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "Mimach",
  DESCRIPTION: "Welcome to my portfolio, I'm Mimach and I'm full stack developer.",
  AUTHOR: "Mimach",
}

// Work Page
export const WORK: Page = {
  TITLE: "Work",
  DESCRIPTION: "Places I have worked.",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Writing on topics I am passionate about.",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Recent projects I have worked on.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
}

// Links
export const LINKS: Links = [
  { 
    TEXT: "Home", 
    HREF: "/", 
  },
  { 
    TEXT: "Projects", 
    HREF: "/projects", 
  },
]

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "Email",
    ICON: "email", 
    TEXT: "mimach.dev@gmail.com",
    HREF: "mailto:mimach.dev@gmail.com",
  },
  { 
    NAME: "Github",
    ICON: "github",
    TEXT: "mimach",
    HREF: "https://github.com/Mimachh"
  },
  { 
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "Karl Muller",
    HREF: "https://www.linkedin.com/in/karl-muller-4536121b8/",
  },
]

