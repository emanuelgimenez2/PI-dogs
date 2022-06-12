require("dotenv").config();
const { Router } = require("express");
const { Dog, Temperament } = require("../db");
const { getAllDogs, getDetailsDogs } = require("../controller/dog");
const { getTemperament } = require("../controller/temperament");
const router = Router();

(
    async () => {
        const dogsDataFromApi = await getAllDogs();

        // console.log('====dogsFromAPi===>',dogsDataFromApi)


        dogsDataFromApi.forEach((dog) => {
            Dog.findOrCreate({
              where: { name: dog.name },
              defaults: {
              id: dog.id,
              name: dog.name || 'no existe',
              height: dog.height || [1,1],
              weight: dog.weight || [ '7', '9' ],
              image: dog.image || 'no existe',
                //  temperament: dog.temperament,
              //    origin: dog.origin,
              //    life_span: dog.life_span,
              createdAtDb: dog.createdAtDb || false,
              }
            });
          });
    }
)()
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

router.get("/dogs/:id", async (req, res) => {
  const { id } = req.params;
  const allDogs = await getDetailsDogs();

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
  let {
    name,
    minimHeight,
    maximHeight,
    minimWeight,
    maximWeight,
    minLifeSpan,
    maxLifeSpan,
    image,
    createdAtDb,
    temperament,
  } = req.body;

  let height = minimHeight + " - " + maximHeight;
  let weight = minimWeight + " - " + maximWeight;
  let life_span = minLifeSpan + " - " + maxLifeSpan;

  let dog = await Dog.create({
    name,
    height,
    weight,
    life_span,
    image: image
      ? image
      : "https://ichef.bbci.co.uk/news/800/cpsprodpb/15665/production/_107435678_perro1.jpg.webp", //cambiar imagen por defecto
    createdAtDb,
  });

  let temperamentDb = await Temperament.findAll({
    where: {
      name: temperament,
    },
  });

  dog.addTemperament(temperamentDb);

  res.status(200).send("Perrito creado! :D");
});

module.exports = router;
