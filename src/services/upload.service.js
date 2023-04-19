import axios from "axios";

class UploadService {
    constructor() {
        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/upload`,
        });
    }

    uploadImages(imageForm) {
        return this.api.post("/image", imageForm);
    }
}

const uploadService = new UploadService();
export default uploadService;
