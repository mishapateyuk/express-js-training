import express from 'express';

let router = express.Router();

router.post('/', (req, res) => {
  res.status(200).json();
});

export default router;
