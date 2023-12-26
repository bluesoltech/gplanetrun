// import { useEffect } from "react";

import React from "react";
import { Helmet } from "react-helmet";

// function Razorpay() {
//   useEffect(() => {
//     const script = document.createElement("script");

//     script.src = url;
//     script.async = true;

//     document.body.appendChild(script);

//     return () => {
//       document.body.removeChild(script);
//     };
//   }, [url]);
//   return <form></form>;
// }

// export default Razorpay;

function razorpay() {
  return (
    <div>
      <Helmet>
        <form>
          <script
            src="https://checkout.razorpay.com/v1/payment-button.js"
            data-payment_button_id="pl_NGXVLS3SdS6uy2"
            async
          >
            {" "}
          </script>{" "}
        </form>
      </Helmet>
    </div>
  );
}

export default razorpay;
