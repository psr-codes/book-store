import {
    doc,
    updateDoc,
    getDoc,
    arrayUnion,
    arrayRemove,
} from "firebase/firestore";
import { db } from "@/db/firebase"; // adjust import path as needed

export const handleFirebaseCartUpdate = async (
    userEmail,
    productData,
    orderCount
) => {
    const userDocRef = doc(db, "user", userEmail);

    try {
        const userDoc = await getDoc(userDocRef);
        if (!userDoc.exists()) {
            console.log("User document does not exist");
            return;
        }

        const userCart = userDoc.data().cart || [];
        const existingItem = userCart.find(
            (item) => item.id === productData.id
        );

        if (existingItem) {
            // Remove item from Firebase cart
            await updateDoc(userDocRef, {
                cart: arrayRemove(existingItem),
            });
            console.log("Item removed from Firebase cart");
            return {
                success: true,

                message: "Item removed from cart",
            };
        } else {
            // Add new item to Firebase cart
            const newItem = {
                id: productData.id,
                category: productData.product.category,
                name: productData.product.name,
                price: productData.product.price,
                discountPrice: productData.product.strikePrice,
                image: productData.imageUrls[0],
                quantity: orderCount,
            };
            await updateDoc(userDocRef, {
                cart: arrayUnion(newItem),
            });
            console.log("Item added to Firebase cart");
            return { success: true, message: "Item added to cart" };
        }
    } catch (error) {
        return {
            success: false,

            message: "Error updating Firebase cart",
        };
        console.error("Error updating Firebase cart:", error);
    }
};
