import React, { Fragment, useEffect } from "react";
import "./detail.scss";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDogDetail } from "../../actions/index";
import img from "../../assets/img/404.jpg";

export default function Detail() {
  var history = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getDogDetail(id));
  }, [dispatch,id]);

  const dog = useSelector((state) => state.detail);


  if (dog.length === 0) {
    return (
      <div>
        <p>Loading....</p>
      </div>
    );
  }

  return (
    <>
      <div className="container-detail">
        <div className="card-detail">
          <div className="content-detail">
            <h1 className="name-detail">{dog[0].name} </h1>
            <div className="wightHeight">
              <h3 className="wightHeightLifeSpan">
                Altura minimo:{dog[0]?.height[0] ?? "no existe"}{" "}
              </h3>
              <h3 className="wightHeightLifeSpan">
                Altura maximo:{dog[0]?.height[1] ?? "no existe"}{" "}
              </h3>
              <h3 className="wightHeightLifeSpan">
                Peso minimo:{dog[0]?.weight[0] ?? "no existe"}{" "}
              </h3>
              <h3 className="wightHeightLifeSpan">
                Peso maximo:{dog[0]?.weight[1] ?? "no existe"}{" "}
              </h3>
            </div>
            <h3 className="wightHeightLifeSpan">
              Esperanza de vida:{dog[0]?.lifeSpan[1] ?? "no existe"}{" "}
            </h3>

            <h2 className="temperamentDetalle">
              Temperamentos: {dog[0]?.temperament[1] ?? "no existe"}
            </h2>
            <div className="divImgDetail">
              <img
                src={dog[0].image ?? img}
                alt=""
                className="pictureDetalle"
              />
            </div>
          </div>
          <div>
            <button
              className="button-detail"
              onClick={() => {
                history("/home");
              }}
            >
              Volver
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
