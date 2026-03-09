import { Helmet } from "react-helmet-async";

interface SEOProps {
    title: string;
    description: string;
    keywords?: string;
    canonical?: string;
    ogImage?: string;
}

export default function SEO({
    title,
    description,
    keywords,
    canonical,
    ogImage = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80",
}: SEOProps) {
    const fullTitle = `${title} | Barium Academy`;
    const siteUrl = "https://bariumacademy.com";
    const canonicalUrl = canonical ? `${siteUrl}${canonical}` : siteUrl;

    return (
        <Helmet>
            {/* Primary meta */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            {keywords && <meta name="keywords" content={keywords} />}
            <meta name="robots" content="index, follow" />
            <link rel="canonical" href={canonicalUrl} />

            {/* Open Graph */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={ogImage} />
            <meta property="og:site_name" content="Barium Academy" />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={ogImage} />
        </Helmet>
    );
}
