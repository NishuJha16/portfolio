import { useEffect, useRef, useState } from "react";
import contactImg from "../../assets/contact-img.svg";
import useOnScreen from "../../hooks/userOnscreen";
import "./index.style.scss";
import { toast } from "react-toastify";

const ContactUs = ({ setActive }: any) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref);
  const [isVisited, setIsVisited] = useState<boolean>(isVisible);

  useEffect(() => {
    isVisible && setActive("contact");
  }, [isVisible, setActive]);

  useEffect(() => {
    isVisible && setIsVisited(isVisible);
  }, [isVisible]);

  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");

  const { firstName, lastName, email, phone, message } = formDetails;

  const onFormUpdate = (category: string, value: string) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setButtonText("Sending...");
    sendDetails({
      message: message,
      phone: phone,
      to_name: "Nishu",
      from_name: `${firstName} ${lastName}`,
      reply_to: email,
    });
  };
  const sendDetails = (variables: any) => {
    (window as any).emailjs
      .send("service_ny439ot", "template_eqepw1a", variables)
      .then((res: any) => {
        setButtonText("Send");
        toast('Submitted succesfully!!', {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          type:"success"
          });
        setFormDetails(formInitialDetails);
      })
      .catch((err: any) =>
        console.error(
          "Oh well, you failed. Here some thoughts on the error that occured:",
          err
        )
      );
  };

  const isDisabled = !(firstName&& lastName&& email&& phone&& message);
  return (
    <div className="page-section" id="contact" ref={ref}>
      <div className={`about-title ${isVisited ? "slide-in" : ""}`}>
        CONTACT
      </div>
      <div className={`contact-card ${isVisited ? "slide-up" : ""}`}>
        <img src={contactImg} alt="" className="contact-image" />
        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            value={formDetails.firstName}
            placeholder="First Name"
            onChange={(e) => onFormUpdate("firstName", e.target.value)}
          />
          <input
            type="text"
            value={formDetails.lastName}
            placeholder="Last Name"
            onChange={(e) => onFormUpdate("lastName", e.target.value)}
          />
          <input
            type="email"
            value={formDetails.email}
            placeholder="Email Address"
            onChange={(e) => onFormUpdate("email", e.target.value)}
          />
          <input
            type="tel"
            value={formDetails.phone}
            placeholder="Phone No."
            onChange={(e) => onFormUpdate("phone", e.target.value)}
          />
          <textarea
            rows={6}
            value={formDetails.message}
            placeholder="Message"
            onChange={(e) => onFormUpdate("message", e.target.value)}
          ></textarea>
          <button type="submit" disabled={isDisabled}>
            <span>{buttonText}</span>
          </button>
        </form>
      </div>
    </div>
  );
};
export default ContactUs;
