//const { API_KEY } = process.env
const axios = require("axios");
const { Dog, Temperament } = require("../db");
const { API_KEY } = process.env;

const getApiInfo = async () => {
  const api = await axios.get(`https://api.thedogapi.com/v1/breeds?${API_KEY}`);

  const dogInfo = await api.data.map((perro) => {
    const newTemperament = [];
    perro.temperament !== undefined ? perro.temperament.split(",").forEach((element) => {
      newTemperament.push({name:element.trim()});
    }) : newTemperament.push({name:'no existe'});

    const heightMM = [];
    perro.height.metric.split("-")?.forEach((element) => {
      heightMM.push(parseInt(element.trim()));
    });

    if (!heightMM[1]) {
      heightMM.push(heightMM[0]);
    }

    const weightMM = [];
    perro.weight.metric.split("-")?.forEach((element) => {
      weightMM.push(parseInt(element.trim()));
    });
    if (!weightMM[1]) {
      weightMM.push(weightMM[0]);
    }

    const life_SpanAA = [];
    perro.life_span.split("-")?.forEach((element) => {
      life_SpanAA.push(parseInt(element.trim()));
    });
    if (!life_SpanAA[1]) {
      life_SpanAA.push(life_SpanAA[0]);
    }

    

    return {
      id: perro.id,
      name: perro.name,
      height: heightMM,
      weight: weightMM,
      lifeSpan: life_SpanAA,
      image: perro.image.url,
      temperament: newTemperament,
      origin: perro.origin,
    };
  });

  return dogInfo;
};

const getDBinfo = async () => {
  const dogInDB = await Dog.findAll({
    include: {
      model: Temperament,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });

  const dogInfo = await dogInDB.map((d) => {
    const weightMM = [];

    d.dataValues.weight.forEach((element) => {
      weightMM.push(element);
    });
    if (!weightMM[1]) {
      weightMM.push(weightMM[0]);
    }

    return {
      id: d.dataValues.id,
      name: d.dataValues.name,
      weight: weightMM,
      image: d.dataValues.image,
      temperament: d.dataValues.temperaments,
      createdAtDb: d.dataValues.createdAtDb,
    };
  });

  return dogInfo;
};

const getAllDogs = async () => {
  const apiInfo = await getApiInfo();
  const dbInfo = await getDBinfo();
  const allInfo = apiInfo.concat(dbInfo);

  return allInfo;
};

module.exports = {
  getAllDogs,
};
