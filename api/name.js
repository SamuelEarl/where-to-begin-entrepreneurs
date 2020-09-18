module.exports = async (req, res) => {
  console.log("API NODE_ENV:", process.env.NODE_ENV);

  try {
    // You can access values from `req.body` in any
    // of the following ways:
    const payload = JSON.parse(req.body);
    console.log("PAYLOAD:", payload);

    const { firstName } = JSON.parse(req.body);
    console.log("FIRST NAME:", firstName);

    const { lastName } = JSON.parse(req.body);
    console.log("LAST NAME:", lastName);

    // If there are no errors, then return your data as a
    // JSON object and give it a status code of 200.
    res.status(200).json({
      body: req.body,
    });
  }
  catch(err) {
    console.log("name.js Error:", err);
    // If there are errors, then return the error object
    // as a JSON object with a 500 status code.
    res.status(500).json(err);
  }
};
