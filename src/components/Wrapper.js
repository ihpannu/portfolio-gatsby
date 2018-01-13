// import styled from 'styled-components'

// const sizes = {
//   fullpage: 1170,
//   desktop: 992,
//   tablet: 768,
//   phone: 376
// }

// // Iterate through the sizes and create a media template

// const media = Object.keys(sizes).reduce((accumulator, label) => {
//   const emSize = sizes[label] / 16;
//   accumulator[label] = (...args) => css`
//     @media (min-width: ${emSize}em) {
//       ${css(...args)}
//     }
//   `;
//   return accumulator;
// }, {});




// const Wrapper = styled.section`
//   max-width: 1024px;
//   margin: auto;
//   padding: 0 1em;
//   color: #333233;
//   background: #FFFEFF;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-content: center;
// `;

// export {media, Wrapper};