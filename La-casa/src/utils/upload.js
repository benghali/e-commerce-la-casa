import axios from "axios";

const upload = async (file) => {
//da1mkpgfd : cloudinary name
//https://api.cloudinary.com/v1_1/ :API FOR CLOUDINARY 
//LaCasa : fileName
 
const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", "LaCasa");

  try {
    const res = await axios.post("https://api.cloudinary.com/v1_1/da1mkpgfd/image/upload", data);

    const { url } = res.data;
    return url;
  } catch (err) {
    console.log(err);
  }
};

export default upload;