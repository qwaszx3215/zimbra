import styled from "styled-components";

export const Styls = styled.div`
  .contsainer {
    
    font-family: "Open Sans",helvetica,arial,sans-serif;
    @media (max-width: 920px) {
      width: 70%;
    }
    margin: auto;
    margin-top: 130px;
    padding-left: 80px;
    width: 30%;
  }
  .imagee {
    width: 75%;
    margin-bottom: 35px;
    margin-left: -5px;
  }
  label {
    font-family: "Open Sans",helvetica,arial,sans-serif;
    font-size: 15px;
    span {
      font-weight: 600;
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
    font-size: 13.7px;
    font-family: "Open Sans",helvetica,arial,sans-serif;
    width: 60%;
    height: 18px;
    padding-left: 40px;
    font-weight: 500;
    padding-top: 8.5px;
    padding-bottom: 7.5px;
    margin-top: 10px;
    margin-bottom: 14px;
    border: 2px solid #bebebe;
    border-radius: 4px;
  }
  input[type="password"] {
    font-size: 13.7px;
    font-family: "Open Sans",helvetica,arial,sans-serif;
    width: 60%;
    height: 18px;
    padding-left: 40px;
    font-weight: 500;
    padding-top: 8.5px;
    padding-bottom: 7.5px;
    margin-top: 10px;
    border: 2px solid #bebebe;
    border-radius: 4px;
  }

  button {
    font-size: 14px;
    font-family: "Open Sans",helvetica,arial,sans-serif;
    width: 72%;
    font-weight: 600;
    color: white;
    cursor: pointer;
    height: auto;
    padding: 2px 0px;
    text-align: center;
    padding-top: 9px;
    padding-bottom: 9px;
    margin-top: 30px;
    border: 1px solid rgb(105, 103, 103);
    background: #179bd7;
    border-radius: 7px 6px 6px 7px;
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
      font-weight: 600;
      color: rgb(107, 97, 97);
      text-decoration: none;
    }
  }
.smaller{
  margin-top: 100px;
text-align: center;
  font-family: "Open Sans",helvetica,arial,sans-serif;
  font-size: 11px;
  color: rgb(107, 97, 97);
}
`;
