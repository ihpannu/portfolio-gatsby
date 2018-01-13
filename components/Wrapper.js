import styled from 'styled-components'

const sizes = {
  fullpage: 1170,
  desktop: 992,
  tablet: 768,
  phone: 376
}

// Iterate through the sizes and create a media template
const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `

  return acc
}, {})




const Wrapper = styled.section`
  max-width: 1024px;
  margin: auto;
  padding: 0 1em;
  color: #333233;
  background: #FFFEFF;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;

  ${media.tablet`background: green`}
`;

export {media, Wrapper}