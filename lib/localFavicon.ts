export function makeLocalFavicon(domain: string, size = 64) {
    const cleaned = domain?.trim();
    if (!cleaned) return "";

    const parseHost = () => {
        try {
            const withProto = cleaned.startsWith("http") ? cleaned : `https://${cleaned}`;
            const host = new URL(withProto).hostname;
            return host.replace(/^www\./, "");
        } catch {
            const stripped = cleaned.replace(/^https?:\/\//, "").replace(/^www\./, "");
            return stripped.split("/")[0];
        }
    };

    const host = parseHost();
    if (!host) return "";

    return `https://www.google.com/s2/favicons?domain=${encodeURIComponent(host)}&sz=${size}`;
}


