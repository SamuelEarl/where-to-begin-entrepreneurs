module.exports = (req, res) => {
  try {
    res.json({
      body: req.body,
      query: req.query,
    });
  }
  catch(err) {
    console.log("test.js Error:", err);
    res.status(500).json(err);
  }
};
