import React, { Fragment, Link, useEffect } from "react";
import "./detail.scss"
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { getDetail } from "../../actions/index";

export default function Detail() {
  var history = useNavigate();
  // const dispatch = useDispatch()
  //   const { id } = useParams()

    
  //   useEffect(() => {
  //       dispatch(getDetail(id));
  //   }, [dispatch, id])

  //   const selectedDog = useSelector((state) => state.detailsDog)

  
  return (
    <Fragment>

    <div className="container-detail">
      <div className="card-detail">
        <div className="content-detail">
          
          {/* <h1 className="name-detail">{name ??"no existe"} </h1>
          <div className="wightHeight">
            <h3 className="wightHeightLifeSpan">Peso:{weight[0]??"no existe"} </h3>
            <h3 className="wightHeightLifeSpan">Tamaño:{height[0]??"no existe"} </h3>
          </div> */}
          <h3 className="wightHeightLifeSpan">Esperanza de vida: </h3>
          <h3 className="wightHeightLifeSpan">Origen:</h3>
          <h2 className="temperamentDetalle">Temperamentos: </h2>
          <div className="divImgDetail">
            <img src={""} alt="" className="pictureDetalle" />
          </div>
        </div>
      </div>

      <div>
        <button onClick={()=>{history("/home")}}>Volver</button>
      </div>
    </div>
    </Fragment>
  );
}
