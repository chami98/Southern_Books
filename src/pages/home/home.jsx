import React from "react";
import BookTilesSection from "./bookTilesSection";

import Layout from "../../common/layout";
import { useSelector } from 'react-redux';


const Home = () => {

  const categories = useSelector((state) => state.app.categories);
  const selectedCategoryId = useSelector((state) => state.app.selectedCategoryId);

  const selectedCategory = categories.find(
    (c) => c.id === selectedCategoryId
  );
  const selectedCategoryName = selectedCategory ? selectedCategory.name : "";

  return (
    <Layout>
        <h2 style={{ padding: "20px" }}> {selectedCategoryName}</h2>
        <BookTilesSection />
    </Layout>
  );
}
 
export default Home;

