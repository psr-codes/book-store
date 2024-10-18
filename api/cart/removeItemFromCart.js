import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "@/db/firebase"; // Adjust the import path if needed

export const removeItemFromCart = async (userEmail, itemId) => {
    try {
        if (!userEmail || !itemId) {
            console.log("Invalid input parameters");
            return [];
        }
        // Reference the user document by email
        const userDocRef = doc(db, "user", userEmail);

        // Fetch the document
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists()) {
            // Retrieve the cart data
            const userCart = userDoc.data().cart || [];

            // Filter out the item to be removed by its id
            const updatedCart = userCart.filter((item) => item.id !== itemId);

            // Update the user's cart in Firestore
            await updateDoc(userDocRef, { cart: updatedCart });

            console.log("Item removed from cart:", updatedCart);
            return { success: true, message: "Item removed from cart" };
        } else {
            console.log("User document does not exist");
            return [];
        }
    } catch (error) {
        console.error("Error removing item from cart:", error);
        return { success: false, message: "Error removing item from cart" };
    }
};
