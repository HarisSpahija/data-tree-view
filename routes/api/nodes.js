const express = require('express');

const NodeData = require('../../models/NodeData');

const router = express.Router();

// @route GET api/node-data
// @desc Get tree data
// @access Public
router.get('/', async (req, res) => {
  try {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Header', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
    const nodes = await NodeData.find();
    res.json(nodes);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

// @route POST api/node-data
// @desc Post node data
// @access Public
router.post('/setnodes', async (req, res) => {
  const { name, description, parent } = req.body;
  try {
    const nodeData = new NodeData({
      name,
      description,
      parent,
    });
    await nodeData.save();
    res.send('Data saved');
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
