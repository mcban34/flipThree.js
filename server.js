const express = require('express');
const app = express();

const port = 3000;

app.use(express.static('public/index.html'));

app.listen(port, () => {
  console.log(`Sunucu çalışıyor: http://localhost:${port}`);
});
