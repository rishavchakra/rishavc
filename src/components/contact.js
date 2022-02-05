import { useRef, useState } from "react";

function ContactForm(props) {
  const fieldName = useRef();
  const fieldEmail = useRef();
  const fieldMessage = useRef();
  const butSubmit = useRef();

  const [isValid, setValid] = useState(false);

  const handleInput = () => {
    // Shows the submit button as valid if the fields are filled in
    let msgLen = fieldMessage.current.textContent.length
    if(!isValid && msgLen > 0) {
      butSubmit.current.classList.remove('contact-send-invalid');
      butSubmit.current.classList.add('contact-send-valid');
      setValid(true);
    }
    if(isValid && msgLen == 0) {
      butSubmit.current.classList.remove('contact-send-valid');
      butSubmit.current.classList.add('contact-send-invalid');
      setValid(false);
    }
  }

  const handleSubmitMessage = () => {
    let [name, email, msg] = [
      fieldName.current.value,
      fieldEmail.current.value,
      fieldMessage.current.value,
    ];
    alert(name + " at " + email + " says " + msg);
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
