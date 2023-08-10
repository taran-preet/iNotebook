//G2
import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";
import emailjs from "@emailjs/browser";
import "./style.css";
const Noteitem = (props) => {
  const { note, updateNote, crediantials } = props;
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const emailSend = (name, email, title, description, tag) => {
    try {
      var templateParams = {
        name: crediantials.name,
        email: crediantials.email,
        title: note.title,
        description: note.description,
        tag: note.tag,
      };

      emailjs
        .send(
          "service_5ptwuoe",
          "template_3z5e3xb",
          templateParams,
          "-WMc5C05xxofeFTFc"
        )
        .then(
          function (response) {
            console.log("SUCCESS!", response.status, response.text);
            props.showAlert("Email Send Successfully", "success");
          },
          function (error) {
            console.log("FAILED...", error);
            props.showAlert("Email not delivered", "danger");
          }
        );
    } catch (error) {
      console.log("FAILED...", error);
      props.showAlert("Email not delivered", "danger");
    }
  };

  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <div className="d-flex align-items-center">
            <h5 className="card-title">{note.title}</h5>
            <i
              className="fa-solid fa-trash mx-2"
              id="delete"
              onClick={() => {
                deleteNote(note._id);
                props.showAlert("Deleted Successfully", "success");
              }}
            ></i>
            <i
              className="fa-regular fa-pen-to-square mx-2"
              id="update"
              onClick={() => {
                updateNote(note);
              }}
            ></i>
            <i
              className="fa-solid fa-envelope"
              id="email"
              onClick={() => {
                emailSend();
              }}
            ></i>
          </div>

          <p className="card-text">{note.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
