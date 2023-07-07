import { React, useState } from "react";
import Button from "./Button";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleChange = (event) => {
    if (!isValidEmail(event.target.value)) {
      setError("please insert a valid email");
    } else {
      setError(null);
    }

    setEmail(event.target.value);
  };

  return (
    <div className="px-6 py-[50px] bg-vd-blue text-white text-center">
      <div>
        <div className="flex items-center justify-center gap-2">
          <input
            type="email"
            className="border-none outline-none rounded-full h-11 text-xs px-6 w-full text-bright-red"
            placeholder="Updates in your inbox..."
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
          <Button>Go</Button>
        </div>
        {error && (
          <p className="text-left text-[.6rem] text-bright-red mt-2 italic ml-5">
            {error}
          </p>
        )}
      </div>

      <div>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Products</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
          <li>
            <a href="#">Community</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
        </ul>
      </div>
      <div></div>
    </div>
  );
};

export default Footer;
