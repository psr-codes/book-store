// uploadProduct.js
import { doc, setDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export async function uploadProduct(
  product,
  images,
  userData,
  tempFields,
  db,
  storage,
  showFieldEmptyToast,
  showSuccessToast,
  showErrorToast,
  getRandomId
) {
  if (product.name === "") {
    showFieldEmptyToast("Name");
    return { success: false, message: "Name is required" };
  }
  if (product.price === "") {
    showFieldEmptyToast("Price");
    return { success: false, message: "Price is required" };
  }
  if (product.strikePrice === "") {
    showFieldEmptyToast("Strike Price");
    return { success: false, message: "Strike Price is required" };
  }
  if (product.shortDescription === "") {
    showFieldEmptyToast("Short Description");
    return { success: false, message: "Short Description is required" };
  }
  if (product.description === "") {
    showFieldEmptyToast("Description");
    return { success: false, message: "Description is required" };
  }
  if (images.length === 0) {
    showFieldEmptyToast("Images are required");
    return { success: false, message: "Images are required" };
  }

  try {
    const productId = product.name + getRandomId();
    const userFolder = `${userData.userName}-${userData.id}`;
    const productFolder = productId;

    const imageUrls = await Promise.all(
      images.map(async (image, index) => {
        const imageRef = ref(
          storage,
          `${userFolder}/${productFolder}/image${index + 1}.jpg`
        );
        await uploadBytes(imageRef, image);
        return await getDownloadURL(imageRef);
      })
    );

    const getCurrentDate = () => {
      const today = new Date();
      const day = String(today.getDate()).padStart(2, "0");
      const month = String(today.getMonth() + 1).padStart(2, "0");
      const year = today.getFullYear();
      return `${day}/${month}/${year}`;
    };

    const productRef = doc(db, `allBooks`, productId);

    await setDoc(productRef, {
      imageUrls,
      name: product.name,
      price: product.price,
      strikePrice: product.strikePrice,
      currency: userData.countryCurrency,
      availability: product.availability,
      category: product.category || "none",
      shortDescription: product.shortDescription,
      description: product.description,
      categoryFields: tempFields,
      date: getCurrentDate(),
      sales: 0,
      businessContact: {
        ph: userData.phoneNumber,
        email: userData.email,
      },
    });

    showSuccessToast();
    return { success: true, message: "Product uploaded successfully" };
  } catch (error) {
    console.error(error);
    showErrorToast(error.message || "An error occurred");
    return { success: false, message: error.message || "An error occurred" };
  }
}
