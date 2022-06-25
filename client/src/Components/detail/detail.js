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

  if (dog.length === 0) {
    return (
      <div className="loader">
        <img src={loader} alt="loader" />
      </div>
    );
  }

  return (
    <>
      <div className="container-detail">
        <div className="card-detail">
          <div className="divImgDetail">
            <img src={dog[0].image ?? img} alt="" className="pictureDetalle" />
          </div>
          <div className="content-detail">
            <h1 className="name-detail">{dog[0].name} </h1>
            <div className="body-container">
              <div className="wapper-body">
                <p className="subtaitel-body"> Altura:</p>
                <p className="container-body">{`de ${dog[0].height[0]} a ${dog[0].height[1]} kg`}</p>
              </div>
              <div className="wapper-body">
                <p className="subtaitel-body">Peso:</p>
                <p className="container-body">{`de ${dog[0]?.weight[0]} a ${dog[0]?.weight[1]} kg`}</p>
              </div>
              <div className="wapper-body">
                <p className="subtaitel-body">Esperanza de vida: </p>
                <p className="container-body">
                  {`de ${dog[0].lifeSpan[0]} a ${dog[0].lifeSpan[1]} años`}
                </p>
              </div>
              <div className="wapper-body">
                <p className="subtaitel-body">Temperamentos: </p>
                <div className="container-body-temperament">
                  {dog[0].temperament.length > 0 &&
                    dog[0].temperament.map((d, i) => (
                      <p key={i} className="temperament">
                        {d.name}
                      </p>
                    ))}
                </div>
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
      </div>
    </>
  );
}
