class FileServices {
  getIMG(img) {
    return "http://localhost:8000/file/?image_path=" + img;
  }
}

export default new FileServices();
