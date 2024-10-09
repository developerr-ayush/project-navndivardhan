import React from "react";

export const Address = () => {
  return (
    <div className="w-full mt-10">
      <div className="  text-black w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d943.1425093518072!2d72.82960046878388!3d18.994586978799745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cef37ecf30fd%3A0x5314b3eebd6ef91f!2sMarathon%20Futurex%2C%20BDD%20Chawl%2C%20Lower%20Parel%2C%20Mumbai%2C%20Maharashtra%20400013!5e0!3m2!1sen!2sin!4v1728004265909!5m2!1sen!2sin"
          width="100%"
          height="450"
          loading="lazy"
        ></iframe>
        <p className="mb-2">
          <b>Address:</b> 2403 A Wing, Marathon Futurex, N.M. Joshi Marg, Lower
          Parel, Mumbai 400013
        </p>
        <p>
          <b> Phone: </b> <a href="tel:+9102269038383 ">022 69038383 </a>
        </p>
        <p>
          <b> Email: </b>
          <a href="mailto:info@nandivardhan.com">info@nandivardhan.com</a>
        </p>
      </div>
    </div>
  );
};
