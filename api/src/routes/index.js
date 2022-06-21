require("dotenv").config();
const { Router } = require("express");
const { Dog, Temperament } = require("../db");
const { getAllDogs, getDetailsDogs } = require("../controller/dog");
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

router.get("/dogs/:id", async (req, res) => {
  const { id } = req.params;
  const allDogs = await getAllDogs();//cambie getDetailsDogs por getAllDogs

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
  let { name, height, weight, life_span, image, temperament } =
    req.body;

    let dog = await Dog.create({
      name,
      height,
      weight,
      life_span,
      image: image ? image :"https://flyclipart.com/thumb2/perro-animado-png-png-image-137089.png",
    });


    let pepe=[]


    for (let i = 0; i < temperament.length; i++) {
      
      let temperamentDb =await Temperament.findOrCreate({
        where: {
          name: temperament[i],
        },
        defaults: {
          name: temperament[i],
        },
      });

    
    
      // let temperamentDb = await Temperament.findAll({
      //   where: { name: temperament[i] },
      // });
      // console.log('=====11111===>',temperamentDb)
      pepe.push(temperamentDb)
    
 
    
      // dog.setTemperaments(temperamentDb);
    }
  

    // console.log('=====22222===>',pepe)
    for (let index = 0; index < pepe.length; index++) {
      dog.setTemperaments(pepe[index]);
      
    }
    

  
 
  res.status(200).send("Perrito creado! :D");
});

module.exports = router;
