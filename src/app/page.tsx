
import Home from "./Home";

// Page-specific metadata
import type { Metadata } from "next";

export const generateMetadata = (): Metadata => {
  return {
    title: "Vignan Plants | Home",
    description:
      "Explore over 140 plant species on Vignan University campus. Discover medicinal, fruit-bearing, rare & exotic plants.",
    openGraph: {
      title: "Vignan Plants | Explore University Flora",
      description:
        "Discover 140+ plant species at Vignan University. Learn their scientific names, uses, and habitats.",
      url: "https://vignantrees.vercel.app",
      siteName: "Vignan Plants",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: "Vignan Trees - Explore University Flora",
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Vignan Plants | Explore University Flora",
      description:
        "Explore over 140 unique plant species growing on the Vignan University campus.",
      images: ["/og-image.png"],
      creator: "@Mr_Indala",
    },
  };
};

export default function Page() {
  return <Home />;
}