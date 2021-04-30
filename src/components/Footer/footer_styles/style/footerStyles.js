import styled from 'styled-components';

export const Container = styled.div`
  padding: 80px 60px;
  background-color: #212121;

  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
   
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
`

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 20px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const Link = styled.a`
  color: #D4D4D4;
  margin-bottom: 20px;
  font-size: 13px;
  text-decoration: none;
  font-family: "Helvetica Neue","Arial Nova",Helvetica,Arial,sans-serif;

  &:hover {
      color: #ff9c00;
      transition: 200ms ease-in;
  }
`;

export const Title = styled.p`
  font-size: 20px;
  color: #D4D4D4;
  margin-bottom: 40px;
  font-family: var(--heading-font-family);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

