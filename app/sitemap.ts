import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { blogPosts } from "@/data/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://portfolio-rouge-nine-10.vercel.app";

  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/skills",
    "/projects",
    "/contact",
    "/blog",
    "/impressum",
    "/datenschutz",
  ];

  const projectRoutes = projects.map((project) => `/projects/${project.slug}`);
  const blogRoutes = blogPosts.map((post) => `/blog/${post.slug}`);

  return [...staticRoutes, ...projectRoutes, ...blogRoutes].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}