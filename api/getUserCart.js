import { doc, getDoc } from "firebase/firestore";
import { db } from "@/db/firebase"; // Adjust the import path if needed

export const getUserCart = async (userEmail) => {
    try {
        // Reference the user document by email
        const userDocRef = doc(db, "user", userEmail);

        // Fetch the document
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists()) {
            // Retrieve the cart data
            const userCart = userDoc.data().cart;
            console.log("User's cart:", userCart);
            return userCart || [];
        } else {
            console.log("User document does not exist");
            return [];
        }
    } catch (error) {
        console.error("Error fetching user cart:", error);
        return [];
    }
};
