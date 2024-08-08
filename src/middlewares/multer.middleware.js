import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/temp");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname + "-" + uniqueSuffix); // after completion you can add your file name insted of original name
  },
});

export const upload = multer({ storage });
