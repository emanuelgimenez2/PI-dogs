//const { API_KEY } = process.env
const axios = require("axios");
const { Dog, Temperament } = require("../db");
const { API_KEY } = process.env;// importacion del key del archivo .env

 const getApiInfo = async () => {//pedido a la api de los datos
  const api = await axios.get(`https://api.thedogapi.com/v1/breeds?${API_KEY}`);


  

  const dogInfo = await api.data.map((perro) => {
    const newTemperament = [];
    perro.temperament !== undefined// si el temperament no esta vacio
      ? perro.temperament.split(",").forEach((element) => {//separa los temperamentos en un array
          newTemperament.push({ name: element.trim() });//agrega el nombre del temperamento a un objeto
        })
      : newTemperament.push({ name: "no existe" });

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

/* const getApiInfo = fetch(`https://api.thedogapi.com/v1/breeds?${API_KEY}`)
  .then((response) => response.json())
  .then((data) => {

    const dogInfo = data.map((perro) => {
      const newTemperament = [];
      perro.temperament !== undefined

        ? perro.temperament.split(",").forEach((element) => {
            newTemperament.push({ name: element.trim() });
          })
        : newTemperament.push({ name: "no existe" });     
    

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
  }
}
  );*/
 


const getDBinfo = async () => {
  const dogInDB = await Dog.findAll({//busca todos los datos de la base de datos
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
    const life_SpanAA = [];
    d.life_span.split("-")?.forEach((element) => {
      life_SpanAA.push(parseInt(element.trim()));
    });
    if (!life_SpanAA[1]) {
      life_SpanAA.push(life_SpanAA[0]);
    }

    return {
      id: d.dataValues.id,
      name: d.dataValues.name,
      height: d.dataValues.height,
      lifeSpan: life_SpanAA,
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
  const allInfo = apiInfo.concat(dbInfo);//concatena los datos de la api y la base de datos

  return allInfo;
};

module.exports = {
  getAllDogs,
};
