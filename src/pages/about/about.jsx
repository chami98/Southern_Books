import React from "react";
import Layout from "./../../common/layout";

const About = () => {
  return (
    <Layout hideSideBar>
      <div className="row">
        <div className="col-md-5">
          <img
            style={{ paddingTop: "10vh", width: "100%" }}
            src="https://media.istockphoto.com/vectors/about-us-flat-design-style-colorful-illustration-vector-id1086341762?k=6&m=1086341762&s=612x612&w=0&h=xZ6lLKZGU6bNq3ZxGTdN9nXyPu6eFti5x3UhbbnO_F4="
            alt=""
          />
        </div>
        <div
          className="col-md-7"
          style={{ marginTop: "20vh", textAlign: "left", paddingRight: "50px" }}
        >
          <p>
            We offer tremendous gathering of books in various classification of
            Fiction, Non-fiction, Biographies, History, Religions, Self – Help,
            Children. We likewise move in immense accumulation of Investments
            and Management, Computers, Engineering, Medical, College and School
            content references books proposed by various foundations as schedule
            the nation over. Other than to this, we likewise offer an expansive
            gathering of E-Books at reasonable valuing.We earnestly trust that
            books can be an extraordinary wellspring of motivation with the
            ability to impact and shape youthful personalities. Our books not
            simply go for building up the scholarly capacities of youngsters,
            rather they are made with the aim of contributing towards their all
            encompassing improvement.
          </p>
          <p>
            Our point is to give significant, charming and also animating
            substance to youngsters that goes much past their normal course
            books.With this point in view, we treat each book as a work of
            adoration. Every one of our books are broadly examined, attentively
            composed and delightfully planned.Development and experimentation
            are indispensable to our methodology towards books. Our broad
            gathering of books– picture books, sticker books, story and sticker
            books, 3D Books, spring up books, innovative idea books, curiosity
            books, topic based books, movement books, and so on – are a
            declaration to this methodology. This encourages us in making
            energizing and testing items for youngsters.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
