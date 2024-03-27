const express = require('express');
const multer  = require('multer');
const path = require('path');

const app = express();
const upload = multer({ dest: 'public/img/' });

app.post('/upload', upload.single('image'), (req, res) => {
  // Kiểm tra nếu không có tệp hình ảnh được tải lên
  if (!req.file) {
    return res.status(400).json({ error: 'Không có hình ảnh được tải lên' });
  }

  // Trả về tên tệp hình ảnh đã tải lên
  res.json({ filename: req.file.filename });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
