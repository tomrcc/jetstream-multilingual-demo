// Blog posts can use any building block or page section in their MDX without an
// import. The key is the PascalCase filename, which is the tag name post authors
// write — <CtaCenter /> resolves to core-elements/../CtaCenter.astro.
const modules = {
  ...import.meta.glob("../building-blocks/**/*.astro", { eager: true }),
  ...import.meta.glob("../page-sections/**/*.astro", { eager: true }),
};

export const mdxComponents: Record<string, any> = Object.fromEntries(
  Object.entries(modules).map(([path, module]) => {
    const parts = path.split("/");

    return [parts[parts.length - 1].replace(".astro", ""), (module as any).default];
  })
);
