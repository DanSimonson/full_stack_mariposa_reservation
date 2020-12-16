const express = require("express");
const router = express.Router();

//Item model
const Item = require("../../models/Item");

// @route GET api/items
// @desc Get all Items
// @access Public
router.get("/", (req, res) => {
  Item.find().then((items) => res.json(items));
});

// @route POST api/items
// @desc Create an item
// @access Public
/*router.post('/', (req, res) => {
  const newItem = new Item({
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    url: req.body.url
  })
  newItem.save().then(item => res.json(item))
})*/

// @route delete api/items/:id
// @desc delete a item
// @access Public
/*router.delete('/:id', (req, res) => {
  Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({success: true})))
    .catch(err => res.status(404).json({success: true}))
  })*/
module.exports = router;
