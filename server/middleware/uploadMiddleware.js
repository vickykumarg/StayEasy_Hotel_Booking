// import multer from "multer";

// const upload=multer({storage:multer.diskStorage({})})

// export default upload;


import multer from "multer";
import path from "path";

// Save files in "uploads/" folder with unique names
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // make sure this folder exists
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const ext = path.extname(file.originalname);
    cb(null, uniqueSuffix + ext);
  }
});

const upload = multer({ storage });

export default upload;
