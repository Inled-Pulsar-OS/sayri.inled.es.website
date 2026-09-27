// Documentation metadata for the pages generated from
// pulsar/PKG/sayri/docs/*.md. Titles here override the H1 of each file.
export interface DocMeta {
    slug: string;
    title: string;
    description: string;
}

export const DOC_ORDER: DocMeta[] = [
    {
        slug: "getting-started",
        title: "Introduction and setup",
        description: "Run Sayri, configure a provider, find every file it writes.",
    },
    {
        slug: "architecture",
        title: "Architecture",
        description: "The headless core, the domain layer, the IPC protocol and the agent loop.",
    },
    {
        slug: "security",
        title: "Sandbox and security",
        description: "Five sandbox levels, permission rules, policies and the secrets vault.",
    },
    {
        slug: "skills",
        title: "Skills",
        description: "Write a SKILL.md that the model actually uses.",
    },
    {
        slug: "plugins",
        title: "Plugins",
        description: "Manifests, declarative settings and managed services.",
    },
    {
        slug: "gateways",
        title: "Gateways",
        description: "Connect Sayri to Telegram, Discord or any channel.",
    },
    {
        slug: "uis",
        title: "User interfaces",
        description: "Build a front-end over IPC, xui and the settings schema.",
    },
    {
        slug: "store",
        title: "Publishing to the store",
        description: "Package skills and plugins and get them into the Pulsar OS store.",
    },
];

export function docMeta(slug: string): DocMeta {
    return (
        DOC_ORDER.find((d) => d.slug === slug) ?? {
            slug,
            title: slug,
            description: "",
        }
    );
}

export function neighborDocs(slug: string): { prev: DocMeta | null; next: DocMeta | null } {
    const i = DOC_ORDER.findIndex((d) => d.slug === slug);
    return {
        prev: i > 0 ? DOC_ORDER[i - 1] : null,
        next: i >= 0 && i < DOC_ORDER.length - 1 ? DOC_ORDER[i + 1] : null,
    };
}
