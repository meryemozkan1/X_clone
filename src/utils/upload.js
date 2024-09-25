import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../firebase";
import { v4 } from "uuid";

// This function takes a file, uploads it to Firebase Storage, and returns the download URL
const upload = async (file) => {
  try {
    // 1) If the file is not an image or doesn't exist, stop the function
    if (!file?.type?.startsWith("image") || !file) {
      console.error("Invalid file or not an image:", file);
      return null;
    }

    console.log("File received:", file.name, file.type);

    // 2) Create a reference to the location where the file will be uploaded
    const fileName = v4() + file.name;
    console.log("Generated file name:", fileName);

    let imageRef;
    try {
      imageRef = ref(storage, fileName);
      console.log("Storage reference created successfully");
    } catch (refError) {
      console.error("Error creating storage reference:", refError);
      return null;
    }

    // 3) Upload the file to the created reference
    try {
      await uploadBytes(imageRef, file);
      console.log("File uploaded successfully");
    } catch (uploadError) {
      console.error("Error uploading file:", uploadError);
      return null;
    }

    // 4) Get the download URL of the uploaded file and return it
    try {
      const downloadURL = await getDownloadURL(imageRef);
      console.log("Download URL obtained:", downloadURL);
      return downloadURL;
    } catch (urlError) {
      console.error("Error getting download URL:", urlError);
      return null;
    }
  } catch (error) {
    console.error("Unexpected error in upload function:", error);
    return null;
  }
};

export default upload;
