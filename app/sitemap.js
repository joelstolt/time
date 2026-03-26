export default function sitemap() {
  const baseUrl = "https://timeoutservice.se";

  const pages = [
    { url: "/", changeFrequency: "weekly", priority: 1.0 },
    { url: "/tjanster", changeFrequency: "monthly", priority: 0.9 },
    { url: "/foretag", changeFrequency: "monthly", priority: 0.9 },
    { url: "/hemstadning", changeFrequency: "monthly", priority: 0.9 },
    { url: "/flyttstadning", changeFrequency: "monthly", priority: 0.9 },
    { url: "/fonsterputs", changeFrequency: "monthly", priority: 0.8 },
    { url: "/storstadning", changeFrequency: "monthly", priority: 0.8 },
    { url: "/visningsstadning", changeFrequency: "monthly", priority: 0.8 },
    { url: "/koksstadning", changeFrequency: "monthly", priority: 0.7 },
    { url: "/badrumsstadning", changeFrequency: "monthly", priority: 0.7 },
    { url: "/mattvatt", changeFrequency: "monthly", priority: 0.7 },
    { url: "/kontorstadning", changeFrequency: "monthly", priority: 0.8 },
    { url: "/fonsterputs-foretag", changeFrequency: "monthly", priority: 0.7 },
    { url: "/fonsterputs-butik", changeFrequency: "monthly", priority: 0.7 },
    { url: "/butiksservice", changeFrequency: "monthly", priority: 0.7 },
    { url: "/storstadning-foretag", changeFrequency: "monthly", priority: 0.7 },
    { url: "/flyttstadning-foretag", changeFrequency: "monthly", priority: 0.7 },
    { url: "/golvvard", changeFrequency: "monthly", priority: 0.7 },
    { url: "/mattvatt-foretag", changeFrequency: "monthly", priority: 0.7 },
    { url: "/trappstadning", changeFrequency: "monthly", priority: 0.7 },
    { url: "/om-oss", changeFrequency: "monthly", priority: 0.6 },
    { url: "/personal", changeFrequency: "yearly", priority: 0.5 },
    { url: "/sakerhet", changeFrequency: "yearly", priority: 0.5 },
    { url: "/miljopolicy", changeFrequency: "yearly", priority: 0.5 },
    { url: "/kontakt", changeFrequency: "monthly", priority: 0.8 },
    { url: "/boka", changeFrequency: "monthly", priority: 0.9 },
    { url: "/integritetspolicy", changeFrequency: "yearly", priority: 0.3 },
    { url: "/villkor", changeFrequency: "yearly", priority: 0.3 },
  ];

  return pages.map((page) => ({
    url: `${baseUrl}${page.url}`,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
