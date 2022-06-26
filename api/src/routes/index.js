require("dotenv").config();
const { Router } = require("express");
const { Dog, Temperament } = require("../db");
const { getAllDogs } = require("../controller/dog");
const { getTemperament } = require("../controller/temperament");
const router = Router();

router.get("/dogs", async function (req, res) {
  const { name } = req.query;
  const dogTotal = await getAllDogs();

  if (name) {
    const dogName = dogTotal.filter((d) =>
      d.name.toLowerCase().includes(name.toLowerCase())
    );
    dogName.length
      ? res.status(200).send(dogName)
      : res.status(400).send("no se encontro el perro");
  } else {
    res.status(200).send(dogTotal);
  }
});

router.get("/dogs/name", async (req, res) => {
  const { name } = req.query;
  const allDogs = await getAllDogs();
  const dogName = await allDogs.filter((d) =>
    d.name.toLowerCase().includes(name.toLowerCase())
  );
  dogName.length
    ? res.status(200).send(dogName)
    : res.status(400).send("no se encontro el perro");
}
 )
router.get("/dogs/:id", async (req, res) => {

 

  const { id } = req.params;
  const allDogs = await getAllDogs(); //obtiene todos los datos de la base de datos

  if (id) {
    let dogId = await allDogs.filter((obj) => obj.id == id);
    dogId.length
      ? res.status(200).send(dogId)
      : res.status(404).send("Perro no encontrado");
  }




});

router.get("/temperament", async (req, res) => {
  await getTemperament();

  const allTemperaments = await Temperament.findAll();
  const filteredTemperaments = await allTemperaments.map((obj) => obj.name);
  res.status(200).send(filteredTemperaments);
});

router.post("/dog", async (req, res) => {
  let { name, height, weight, life_span, image, temperament } = req.body;

  let dog = await Dog.create({//crea un nuevo perro
    name,
    height,
    weight,
    life_span,
    image: image
      ? image
      : "https://flyclipart.com/thumb2/perro-animado-png-png-image-137089.png",
  });

  for (let i = 0; i < temperament.length; i++) {// un ciclo para crear los temperamentos  con su perro asociado
    await Temperament.findOrCreate({//busca si existe el temperamento en la base de datos
      where: {//si no existe lo crea
        name: temperament[i],
      },
      defaults: {//si existe lo asocia al perro
        name: temperament[i],
      },
    });

    let temperamentDb = await Temperament.findAll({//obtiene todos los temperamentos de la base de datos
      where: { name: temperament[i] },//busca el temperamento que se creo
    });

    await dog.addTemperaments(temperamentDb); // guardo el temperamento en la base de datos
  }

  res.status(200).send("Perrito creado! :D");
});

module.exports = router;
