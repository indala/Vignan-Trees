import type { Metadata } from "next";
import sheetData from "@/data/plants";
import Plant from "./Plant"; // Client component

// ✅ Helper: Get plant data by sno
function getPlantData(snoString: string) {
  const sno = Number(snoString);
  return sheetData.find((p) => p.sno === sno);
}

// ✅ Metadata for SEO and Social
export async function generateMetadata({ params }: { params: Promise<{ sno: string }> }): Promise<Metadata> {
  const { sno } = await params; // ✅ must await params in Next.js 15+
  const plant = getPlantData(sno);
  const siteUrl = "https://vignantrees.vercel.app";

  if (!plant) {
    return {
      title: "Plant Not Found | Vignan Plants",
      description: "The requested plant does not exist in our database.",
    };
  }

  const title = `${plant.CommonName} | Vignan Plants`;
  const description = `${plant.CommonName} (${plant.ScientificName}) - Uses: ${plant.uses}. Habitat: ${plant.Habitat}.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${siteUrl}/plants/${plant.sno}`,
      siteName: "Vignan Plants",
      images: [{ url: plant.url, width: 800, height: 800, alt: plant.CommonName }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [plant.url],
      creator: "@Mr_Indala",
    },
  };
}

// ✅ Main page component
export default async function PlantPage({ params }: { params: Promise<{ sno: string }> }) {
  const { sno } = await params; // ✅ await required here too
  const plant = getPlantData(sno);

  if (!plant) {
    return <div className="text-center py-5 fw-bold">Plant not found.</div>;
  }

  const plantWithDefaults = { ...plant, Habitat: plant.Habitat ?? "Unknown" };

  return <Plant plant={plantWithDefaults} />;
}
