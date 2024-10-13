// fetchAllCollectionsData.js (or .ts)
import { db } from "@/db/firebase";
import { collection, getDocs } from "firebase/firestore";

export async function fetchAllCollectionsData() {
  const categories = [
    "Buddhism",
    "Jainism",
    "Psychology",
    "Literature",
    "Bhagavad Gita",
    "Purana",
    "Mathematics",
    "Vedic Maths",
    "Vedanta",
    "Spirituality",
    "Alternative Medicine",
    "Art & Culture",
    "Art and Architecture",
    "History",
    "Ayurveda",
    "Philosophy",
    "Tantra",
    "Astrology",
    "Religious",
    "Sanskrit",
  ];

  const allCollectionsData = {};

  try {
    for (const category of categories) {
      const collectionRef = collection(db, category);
      const querySnapshot = await getDocs(collectionRef);

      if (!querySnapshot.empty) {
        const categoryData = querySnapshot.docs.map((doc) => ({
          category: category,
          id: doc.id,
          ...doc.data(),
        }));
        allCollectionsData[category] = categoryData;
      }
    }

    return allCollectionsData;
  } catch (error) {
    console.error("Error fetching collections data:", error.message);
    throw error;
  }
}
