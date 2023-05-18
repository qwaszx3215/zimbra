import styled from "styled-components";

export const Styls = styled.div`
font-family: "Helvetica Neue",Helvetica,Arial,"Liberation Sans",sans-serif;
font-size: 12px;
@media (max-width: 920px) {
  width: 70%;
}
.inner{
  margin: auto;
  width:66%;
  margin-top: -20px;
  .stay{ 
     width:60%;
     margin-left: 80px;
    display: flex;
    justify-content: space-between;
  }
  .stay2{ 
    width:70%;
    margin: auto;
    margin-top: 20px;
    padding-bottom: 60px;
    display: flex;
    justify-content: space-between;
  }
}
select{
  margin-right: 20px;
}
margin: auto;
margin-top: 130px;
padding-left: 80px;
width: 40%;
  .formal{
    background:#007CC3;
    margin: auto;
    width: 95%;
    color:white;
  }
  .labcon{
    display: flex;
    span{
      margin: 13px;
      margin-top: 12px
    }
  }
  .imagee {
    width: 200px;
    margin: 35px;
 
  }
  label {
    font-family: "Open Sans",helvetica,arial,sans-serif;
    font-size: 13px;
    span {
      font-weight: 100;
      color: #435c72;
    }
  }

  .newicon1 {
    position: absolute;
    margin-top: 20px;
    margin-left: 15px;
    color: #bebebe;
  }

  .navbar {
    @media (max-width: 920px) {
      display: none;
    }
    background-color: #323e4d;
    flex: 2;
  }

  input[type="email"] {
    font-size: 12px;
    font-family: "Open Sans",helvetica,arial,sans-serif;
    width: 60%;
    height: auto;
    padding-left: 4px;
    font-weight: 100;
    padding-top: 4px;
    padding-bottom: 3px;
    margin-top: 5px;
    margin-bottom: 8px;
    border: 2px solid #bebebe;
    border-radius: 4px;
  }
  input[type="password"] {
    font-size: 12px;
    font-family: "Open Sans",helvetica,arial,sans-serif;
    width: 60%;
    height: auto;
    padding-left: 4px;
    font-weight: 100;
    padding-top: 4px;
    padding-bottom: 3px;
    margin-top: 5px;
    margin-bottom: 8px;
    margin-left: 3px;
    border: 2px solid #bebebe;
    border-radius: 4px;
  }

  button {
    font-size: 12px;
    font-family: "Open Sans",helvetica,arial,sans-serif;
    width: auto;
    color: white;
    cursor: pointer;
    height: auto;
    padding: 2px 0px;
    text-align: center;
    padding: 9px; 
    padding-top: 5px; 
    padding-bottom: 5px; 
    border: 1px solid white;
    background: transparent;
    border-radius:3px;
  }
  .reda {
    color: red;
    margin: 5px;
  }
  .labeltext {
    text-align: left;
  }
  ul {
    margin: auto;
    margin-top: 100px;
    @media (max-width: 720px) {
      width: 85%;
    }
    width: 35%;
    list-style-type: none;
    display flex;  
    justify-content: space-between; 
    a{
      font-size: 13.4px;
      font-family: "Open Sans",helvetica,arial,sans-serif;
      font-weight: 100;
      color: rgb(107, 97, 97);
      text-decoration: none;
    }
  }
.smaller{
  margin-top: 250px;
text-align: center;
  font-family: "Open Sans",helvetica,arial,sans-serif;
  font-size: 11px;
  color: rgb(107, 97, 97);
}
`;
