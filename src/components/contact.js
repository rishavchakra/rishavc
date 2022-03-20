import { useRef, useState } from "react";

function ContactForm(props) {
  const fieldName = useRef();
  const fieldEmail = useRef();
  const fieldMessage = useRef();
  const butSubmit = useRef();

  const [isValid, setValid] = useState(false);

  // Function to send an email to my email address
  const sendEmail = (name, message, email) => {
    console.log("beep boop sending emails");
    console.log(name);
    console.log(message);
    console.log(email);
    // event.preventDefault();

    // TODO: Make a new email and add it to the SMTP token instead of spamming my personal
    if (message !== "") {
      console.log(name + ": " + message);
      window.Email.send({
        SecureToken: "7e8247b6-325b-4f55-9c02-2ba66da71c9b",
        To: "rishavchakra@gmail.com",
        From: "rishavchakra@gmail.com",
        Subject: "WEBSITE Message from: " + (name || "Anonymous"),
        Body:
          (name || "Anonymous: ") + (email || "no email provided  \n  ") + message,
      }).then((message) => console.log(message));

      // grecaptcha.execute();
    } else {
      console.log("Can't send empty email");
    }
  };

  // Callback for editing the contents of the contact form
  const handleInput = () => {
    // Shows the submit button as valid if the fields are filled in
    let msgLen = fieldMessage.current.textContent.length;
    if (!isValid && msgLen > 0) {
      butSubmit.current.classList.remove("contact-send-invalid");
      butSubmit.current.classList.add("contact-send-valid");
      setValid(true);
    }
    if (isValid && msgLen == 0) {
      butSubmit.current.classList.remove("contact-send-valid");
      butSubmit.current.classList.add("contact-send-invalid");
      setValid(false);
    }
  };

  // Callback for sending the message
  const handleSubmitMessage = (event) => {
    event.preventDefault();
    let [name, email, msg] = [
      fieldName.current.value,
      fieldEmail.current.value,
      fieldMessage.current.innerHTML,
    ];
    sendEmail(name, msg, email);
  };

  return (
    <div id="contact">
      <form id="contact-form">
        <input
          placeholder="Name"
          className="contact-item"
          ref={fieldName}
        ></input>
        <input
          placeholder="Email"
          className="contact-item"
          ref={fieldEmail}
        ></input>
        {/* Message field; expands to fit text */}
        <span
          className="contact-item contact-message"
          role="textbox"
          onKeyUp={handleInput}
          contentEditable
          ref={fieldMessage}
        ></span>
        <button
          className="contact-item contact-send contact-send-invalid"
          onClick={handleSubmitMessage}
          ref={butSubmit}
        >
          <span>Send</span>
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
