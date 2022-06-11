// import React, { useEffect }  from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getDogs } from "../../actions";
// // import "./pagination.css";
// import "./paginationprueba.scss"

// export default function Pagination({  setDataForPage,handleChangePage }) {




//   // console.log('===state===>',state)
//   const pageNumbers = [];
//   const dogsOnPage = 9;
  
//   const totalPages = Math.ceil(state.length / dogsOnPage);

  

//   for (let i = 0; i < totalPages; i++) {
//     pageNumbers.push(i + 1);
//   }


//   var statetenuevp = state && state.slice(pageNumbers[0], pageNumbers[pageNumbers.length -1]);

//   React.useEffect(()=>{
//     console.log('====>',state)
//     setDataForPage(statetenuevp)
//   },[])

  
//   // console.log('===array con paginas===>',statetenuevp)
  

//   return (
//     <div>
//       <ul className="container-pagination">
//         {pageNumbers.map((n) => (
//           <button className="button-pagination" key={n} onClick={()=>console.log('hola')}>
//             {n}
//           </button>
//         ))}
//       </ul>
//     </div>
//   );
// }
