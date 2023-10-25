import styled from 'styled-components';
import Logo from '../assets/ajedrez.jpg';

const ParentComponent = styled.div`
  align-items: center;
  border-radius: 20px;
  border: 1px solid pink;
  display: flex;
  flex-direction: column;
  height: auto;
  justify-content: center;
  margin: 0 auto;
  padding: 20px;
  width: 350px;
`;

const LogoContainer = styled.div`
  width: 350px;
`;

const Image = styled.img`
  width: 100%;
  `

  export default function FormComponent() {
  return (
    <ParentComponent>
      <LogoContainer>
        <Image src={Logo} alt='form_Logo'/>
      </LogoContainer>
    </ParentComponent>
    )
  
}
