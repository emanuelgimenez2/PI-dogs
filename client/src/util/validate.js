export const Validate = function (input) {
  let errors = {};
  const messajeError = (props) => {
    alert(props);
  };



  if (!input.name) {
    errors.name = "Ingresar un Nombre a la raza de perros";
    messajeError(errors.name);
    return errors;
  }
  if (!input.name.match(/^[A-Za-z\s]+$/)) {
    errors.name = "El nombre debe contener unicamente letras";
    messajeError(errors.name);
    return errors;
  }
  if (!input.weight[0]) {
  
    errors.minimWeight = "Ingresa un valor para el peso minimo de la raza";
    messajeError(errors.minimWeight);
    return errors;
  }
  if (!input.weight[1]) {
    errors.maximWeight = "Ingresa un valor para el peso maximo de la raza";
    messajeError(errors.maximWeight);
    return errors;
  }
  if (!input.height[0]) {
    errors.minimHeight = "Ingresa un valor para el tamaño minimo de la raza ";
    messajeError(errors.minimHeight);
    return errors;
  }
  if (!input.height[1]) {
    errors.maximHeight = "Ingresa un valor para el tamaño maximo de la raza ";
    messajeError(errors.maximHeight);
    return errors;
  }

  if (parseInt(input.height[0]) <= 10) {
    errors.minimHeight = "El tamaño minimo debe de ser mayor a 10cm";
    messajeError(errors.minimHeight);
    return errors;
  }
  if (parseInt(input.weight[1]) <= 2) {
    errors.maximWeight = "El peso maximo no puede ser menor a 2Kg";
    messajeError(errors.maximWeight);
    return errors;
  }
  if (parseInt(input.minLifeSpan) < 0) {
    errors.minLifeSpan = "La esperanza de vida debe de ser mayor a 1 año";
    messajeError(errors.minLifeSpan);
    return errors;
  }
  // if (parseInt(input.maxLifeSpan) > 21) {
  //   errors.maxLifeSpan =
  //     "Ingresar una esperaza de vida razonable (menos a 21 años)";
  //   messajeError(errors.maxLifeSpan);
  //   return errors;
  // }
  // if (parseInt(input.image) > 250) {
  //   errors.maxLifeSpan = "el link de la imagen es demaciado grande";
  //   messajeError(errors.maxLifeSpan);
  //   return errors;
  // }
  // if (parseInt(input.minLifeSpan) > parseInt(input.maxLifeSpan)) {
  //   errors.minLifeSpan = "La esperanza de vida Minima es mayor a su maxima";
  //   messajeError(errors.minLifeSpan);
  //   return errors;
  // }
  if (parseInt(input.weight[0]) > parseInt(input.weight[1])) {
    errors.minimWeight = "El peso Minimo es mayor a su peso maximo";
    messajeError(errors.minimWeight);
    return errors;
  }
  if (parseInt(input.height[0]) > parseInt(input.height[1])) {
    errors.minimHeight = "El Tamaño Minimo es mayor a su tamaño maximo";
    messajeError(errors.minimHeight);
    return errors;
  }

  return errors;
};
