const router = require("express").Router()
const { isValidObjectId } = require("mongoose")
const Coaster = require("../models/Coaster.model")
const { handleMongooseError } = require("../utils")


router.get("/allCoasters", (req, res) => {
  Coaster.find()
    .then(allCoasters => res.json(allCoasters))
    .catch(err => res.json({ err, errMessage: "Problema buscando Coasters" }))
})

router.get("/coaster/:id", (req, res) => {
  const { id } = req.params

  if (!isValidObjectId(id)) {
    res.status(500).json({ err: "ID Invalido" })
    return
  }

  Coaster.findById(id)
    .then(theCoaster => res.json(theCoaster))
    .catch(err => res.json({ err, errMessage: "Problema buscando un Coaster" }))
})


router.post("/newCoaster", (req, res) => {
  const { title, description, inversions, length, imageUrl } = req.body


  Coaster.create({ title, description, inversions, length, imageUrl, owner: req.session.currentUser._id })
    .then(newCoaster => res.json(newCoaster))
    .catch(err => res.status(500).json({ errors: handleMongooseError(err) }))
})

router.put("/editCoaster/:id", (req, res) => {
  const { id } = req.params
  const { title, description, inversions, length, imageUrl } = req.body

  Coaster.findByIdAndUpdate(id, { title, description, inversions, length, imageUrl }, { new: true })
    .then(updatedCoaster => res.json(updatedCoaster))
    .catch(err => res.json({ err, errMessage: "Problema editando Coaster" }))
})

router.delete("/deleteCoaster/:id", (req, res) => {
  const { id } = req.params

  Coaster.findByIdAndDelete(id)
    .then(deletedCoaster => res.json({ deletedCoaster }))
    .catch(err => res.json({ err, errMessage: "Problema borrando Coaster" }))
})

module.exports = router