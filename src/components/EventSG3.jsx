import React from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  WhatsappIcon,
  TwitterIcon,
} from "react-share";

function EventSG3() {
  const currentPageUrl = window.location.href;
  return (
    <div className="flex-col w-1/5 p-3">
      <div className=" bg-gray-300 m-1 p-2">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.0541796492585!2d72.53652201175936!3d23.058475179061592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e855d754079cd%3A0x56eb1329773be8e8!2sSolaris%20Business%20Hub!5e0!3m2!1sen!2sin!4v1703418166823!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className=" bg-gray-300 m-1 p-2 px-4 flex items-center justify-around">
        <span>Share:</span>
        <FacebookShareButton url={currentPageUrl}>
          <FacebookIcon className="max-h-10" />
        </FacebookShareButton>
        <TwitterShareButton url={currentPageUrl}>
          <TwitterIcon className="max-h-10" />
        </TwitterShareButton>
        <WhatsappShareButton url={currentPageUrl}>
          <WhatsappIcon className="max-h-10" />
        </WhatsappShareButton>
      </div>
    </div>
  );
}

export default EventSG3;
