import styled from "styled-components";

export const Styls = styled.div`
  .contsainer {
    margin: auto;
    margin-top: 110px;
    width: 30%;
    text-align: center;
  }
  .imagee {
    width: 100px;
  }

  .newicon1 {
    position: absolute;
    border: 1px solid rgba(0, 0, 0, 0.15);

    border-radius: 6px 0px 0px 6px;
    margin-top: 10px;

    padding: 12px;
    padding-left: 14px;
    padding-right: 14px;
    color: #495057;
    background: #f1f3f4;
  }

  .navbar {
    @media (max-width: 920px) {
      display: none;
    }
    background-color: #323e4d;
    flex: 2;
  }

  input[type="email"] {
    font-size: 18px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
      "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    width: 70%;
    height: auto;
    padding: 2px 0px;
    padding-left: 57px;
    font-weight: 400;
    padding-top: 10px;
    padding-bottom: 8px;
    margin-top: 10px;
    border: 1px solid rgba(0, 0, 0, 0.15);

    border-radius: 7px 6px 6px 7px;
  }
  input[type="password"] {
    font-size: 18px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
      "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    width: 70%;
    height: auto;
    padding: 2px 0px;
    padding-left: 57px;
    padding-top: 10px;
    padding-bottom: 8px;
    font-weight: 400;
    margin-top: 10px;
    border: 1px solid rgba(0, 0, 0, 0.15);

    border-radius: 7px 6px 6px 7px;
  }
  p {
    color: gray;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
      "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  }
  button {
    font-size: 17px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
      "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    width: 84%;
    font-weight: 500;
    color: white;
    cursor: pointer;
    height: auto;
    padding: 2px 0px;
    text-align: center;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-top: 10px;
    border: 1px solid rgba(0, 0, 0, 0.15);
    background: #37beff;
    border-radius: 7px 6px 6px 7px;
  }
  .reda {
    color: red;
    margin: 5px;
  }
`;
