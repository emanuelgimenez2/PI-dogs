import React, { Fragment, useEffect } from "react";
import "./detail.scss";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { getDogDetail } from "../../actions/index";
import img from "../../assets/img/404.jpg";
import { getDogDetail } from "../../actions";
import loader from "../../assets/gifloader.gif";

export default function Detail() {
  var history = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  // console.log('====id====>',id)

  useEffect(() => {
    dispatch(getDogDetail(id));
  }, [dispatch, id]);

  const dog = useSelector((state) => state.detail);

  console.log("====dog===>", dog);

  if (dog.length === 0) {
    return (
      <div className="loader">
        <img src={loader} alt="loader" />
      </div>
    );
  }

  // const tempLifeSpan = dog[0].lifeSpan.split(',')

  return (
    <>
      <div className="container-detail">
        <div className="card-detail">
          <div className="content-detail">
            <h1 className="name-detail">{dog[0].name} </h1>
            <div className="wightHeight">
              <h3 className="wightHeightLifeSpan">
                Altura minimo:{dog[0].height[0] ?? "no existe"}{" "}
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
              {dog[0].lifeSpan}
              {/* Esperanza de vida:{lifeSpan.length>0 ?`de ${lifeSpan[0]} a ${lifeSpan[1]} años` : "no existe"} */}
            </h3>

            <h2 className="temperamentDetalle">
              Temperamentos:{" "}
              {dog[0].temperament.length > 0 &&
                dog[0].temperament.map((d) => d.name)}
            </h2>
            <div className="divImgDetail">
              <img
                src={dog[0].image ?? img}
                alt=""
                className="pictureDetalle"
              />
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
      </div>
    </>
  );
}
