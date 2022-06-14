const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const PORT = 4000;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', router);

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));

router.post('/', (req, res) => {
   console.log(req.body.test);
   res.status(200);
   res.end('ok');
})
