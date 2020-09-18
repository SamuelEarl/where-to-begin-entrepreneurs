module.exports = async (req, res) => {
  console.log("API NODE_ENV:", process.env.NODE_ENV);

  try {
    // You can access values from the `req.query` object
    // in any of the following ways:
    const params = req.query;
    console.log("PARAMS:", params);

    let { name } = req.query;
    console.log("NAME:", name);

    name = req.query.name;
    console.log("NAME (AGAIN):", name);

    // If there are no errors, then return your data as a
    // JSON object and give it a status code of 200.
    res.status(200).json({
      query: req.query,
    });
  }
  catch(err) {
    console.log("[name].js Error:", err);
    // If there are errors, then return the error object
    // as a JSON object with a 500 status code.
    res.status(500).json(err);
  }
};
