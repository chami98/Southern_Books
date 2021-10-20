import React from "react";
import Layout from "./../../common/layout";
import { Link } from "react-router-dom";
import FaqDetails from "./faqDetails";

const Faq = () => {
  return (
    <Layout hideSideBar>
      <div className="row">
        <div className="col-md-4" style={{ marginTop: "50px" }}>
          <img
            src=" https://www.pngkit.com/png/full/119-1192030_freshers-ribbon-faq-faq-png.png
            "
            alt=""
            style={{ width: "65%", marginTop: "6vh ", paddingLeft: "15px" }}
          />
          <img
            src="https://res.cloudinary.com/practicaldev/image/fetch/s--LRm4c4D9--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/x6a5u4a4t9gyz20kif70.png"
            alt=""
            style={{ width: "80%", marginTop: "6vh ", paddingLeft: "15px" }}
          />
        </div>

        <div
          className="col-md-8"
          style={{ marginTop: "4vh", paddingRight: "70px" }}
        >
          <h1
            style={{
              textAlign: "center",
              fontFamily: "Comfortaa",
              marginBottom: "30px",
            }}
          >
            Southern Books FAQS
          </h1>
          <FaqDetails
            header={
              "Why do I need to register on the site before I can place an order?"
            }
            body={
              '  Establishing an online account with "Southern Books" assures you that your purchasing information is secure, confidential and accessible to you. Once you establish an account, you will only need to sign-in to place an order in the future, check on the status of your current order, view past purchases or update your profile information.'
            }
          />
          <FaqDetails
            header={" What if I can't find what I'm looking for?"}
            body={
              ' The best way to locate a product in the "Southern Books" is to use the Product Search functions located in the top navigation area of the bookstore. If you need further help, call us at +94 77 0346393.'
            }
          />
          <FaqDetails
            header={" How long does it take for delivery to destinations?"}
            body={
              "  For domestic shipments, please allow 3 to 7 days - for delivery."
            }
          />
          <FaqDetails
            header={" My shopping cart has disappeared. What's wrong?"}
            body={
              " If you are experiencing difficulty retaining your shopping cart, you may have cookies disabled on your browser settings."
            }
          />
          <FaqDetails
            header={
              " My order hasn't arrived yet; can I check the status of my order online? "
            }
            body={
              " My order hasn't arrived yet; can I check the status of my order online? Yes. If you are Signed In to your account, click on Orders in the header above to review open order status."
            }
          />
          <FaqDetails
            header={"I've been signed out of my user session. What's wrong?"}
            body={
              " If you cannot stay Signed In, you may have cookies disabled on your browser settings. See information above on Cookies. Notice: you will be unable to place your order until you register your account and Sign In."
            }
          />

          <FaqDetails
            header={"  Do I have to use a credit card to order online?"}
            body={
              " Most online orders require the use of a credit card. We accept Visa, MasterCard, American Express and Discover."
            }
          />
          <FaqDetails
            header={"   Are transactions safe?"}
            body={
              " YES. Southern Books provides Internet security by: hosting our site on a secure server. No other company or organization shares the server we use to store information. Creating secure areas of the Web site for the transfer of confidential information such as your credit card number in our online bookstore. When using Google Chrome, for example, you'll know an area of the site is secure when you see a lock in the bottom left order of your screen."
            }
          />
        </div>
      </div>
    </Layout>
  );
};

export default Faq;
