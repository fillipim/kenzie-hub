import styled from "styled-components";

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid var(--grey-3);
    padding: calc(1rem + 10px) 0;
    img{
      width: 101px;
    }

    @media (min-width: 1024px) {
      padding: calc(1rem + 10px) 334px;
      
    }
`

const Dashboard = styled.main`
    padding: 0 calc(1rem - 3px);
`

const ProfileInfo = styled.section`
  padding: 2rem 0;
  border-bottom: 1px solid var(--grey-3);
  span{
      display: block;
      padding-top: 1rem ;
    }
    @media (min-width: 1024px) {
      padding: 2rem 334px;
      display: flex;
      justify-content: space-between;
    }
`

const UserTechs = styled.div`
  @media (min-width: 1024px) {
    padding: 0 334px;
  }
`
const TechsHeader = styled.div`
    padding:  calc(1rem - 3px) 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    button{
      color: #fff;
      background-color: var(--grey-3);
      padding: 0 .3rem;
      font-size: 20px;
      border-radius: 4px;
   }
   @media (min-width: 1024px) {
      padding: 2rem 334px;
    }
`

export { 
  Dashboard, 
  ProfileInfo, 
  Header,
  UserTechs,
  TechsHeader
};