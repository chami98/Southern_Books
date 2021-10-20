import React from "react";
import Layout from "./../../common/layout";
import { Link } from "react-router-dom";

const Faq = () => {
  return (
    <Layout hideSideBar>
      <div className="row">
        <div className="col-md-5" style={{ marginTop: "50px" }}>
          <img
            src="https://res.cloudinary.com/practicaldev/image/fetch/s--LRm4c4D9--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/x6a5u4a4t9gyz20kif70.png"
            alt=""
            style={{ width: "90%", marginTop: "10vh" }}
          />
        </div>
        {/* https://www.powrsale.com/images/faq.png */}
        <div
          className="col-md-7"
          style={{ marginTop: "4vh", paddingRight: "50px" }}
        >
          <h2
            style={{
              textAlign: "center",
              fontFamily: "Comfortaa",
              marginBottom: "25px",
            }}
          >
            Southern Books FAQS
          </h2>

          <h5 style={{ textAlign: "left", fontFamily: "Roboto" }}>
            Why do I need to register on the site before I can place an order?
          </h5>

          <p style={{ textAlign: "left" }}>
            <i>
              Establishing an online account with "Southern Books" assures you
              that your purchasing information is secure, confidential and
              accessible to you. Once you establish an account, you will only
              need to sign-in to place an order in the future, check on the
              status of your current order, view past purchases or update your
              profile information.
            </i>
          </p>

          <h5 style={{ textAlign: "left", fontFamily: "Roboto" }}>
            What if I can't find what I'm looking for?
          </h5>
          <p style={{ textAlign: "left" }}>
            <i>
              The best way to locate a product in the "Southern Books" is to use
              the Product Search functions located in the top navigation area of
              the bookstore. If you need further help, call us at +94 77
              0346393.
            </i>
          </p>
          <h5 style={{ textAlign: "left", fontFamily: "Roboto" }}>
            How long does it take for delivery to destinations?
          </h5>
          <p style={{ textAlign: "left" }}>
            <i>
              For domestic shipments, please allow 3 to 7 days - for delivery.
            </i>
          </p>

          <h5 style={{ textAlign: "left", fontFamily: "Roboto" }}>
            My shopping cart has disappeared. What's wrong?
          </h5>
          <p style={{ textAlign: "left" }}>
            <i>
              If you are experiencing difficulty retaining your shopping cart,
              you may have cookies disabled on your browser settings.
            </i>
          </p>
          <h5 style={{ textAlign: "left", fontFamily: "Roboto" }}>
            Do I have to use a credit card to order online?
          </h5>
          <p style={{ textAlign: "left" }}>
            <i>
              Most online orders require the use of a credit card. We accept
              Visa, MasterCard, American Express and Discover.
            </i>
          </p>

          <h5 style={{ textAlign: "left", fontFamily: "Roboto" }}>
            Are transactions safe?
          </h5>
          <p style={{ textAlign: "left" }}>
            <i>
              YES. Southern Books provides Internet security by: hosting our
              site on a secure server. No other company or organization shares
              the server we use to store information. Creating secure areas of
              the Web site for the transfer of confidential information such as
              your credit card number in our online bookstore. When using Google
              Chrome, for example, you'll know an area of the site is secure
              when you see a lock in the bottom left order of your screen.
            </i>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Faq;
