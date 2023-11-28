const Item = require('../models/item');

// Obtener todos los elementos
exports.getItems = (req, res) => {
  Item.find()
    .then((items) => {
      res.json(items);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
};

// Obtener un elemento por su ID
exports.getItemById = (req, res) => {
  Item.findById(req.params.id)
    .then((item) => {
      if (!item) {
        return res.status(404).json({ message: 'Elemento no encontrado' });
      }
      res.json(item);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
};

// Crear un nuevo elemento
exports.createItem = (req, res) => {
  const newItem = new Item({
    title: req.body.title,
    description: req.body.description,
    genre: req.body.genre,
    platform: req.body.platform,
    releaseDate: req.body.releaseDate,
    imageUrl: req.body.imageUrl
    // Otros campos que desees para tu modelo
  });

  newItem.save()
    .then((item) => {
      res.status(201).json(item);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
};

// Actualizar un elemento existente
exports.updateItem = (req, res) => {
  Item.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((item) => {
      if (!item) {
        return res.status(404).json({ message: 'Elemento no encontrado' });
      }
      res.json(item);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
};

// Eliminar un elemento existente
exports.deleteItem = (req, res) => {
  Item.findByIdAndDelete(req.params.id)
    .then((item) => {
      if (!item) {
        return res.status(404).json({ message: 'Elemento no encontrado' });
      }
      res.json({ message: 'Elemento eliminado correctamente' });
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
};
