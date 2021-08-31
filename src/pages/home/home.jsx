import React, { Component } from "react";
import Header from "./../../common/header";
import SideBar from "../../common/sideBar";
import { dummyCategories } from "../../dummyData/dummyCategories";
import BookTilesSection from "./bookTilesSection";
import axios from "axios";

class Home extends Component {
  state = {
    categories: [],
  };

  componentDidMount() {
    axios.get("http://localhost:3005/categories").then((result) => {
      this.setState({
        categories: [
          { name: "All categories", id: "ALL_CATEGORIES" },
          ...result.data,
        ],
        selectedCategoryId: "ALL_CATEGORIES",
      });
    });
  }

  handleSelectedId = (id) =>
    this.setState({
      selectedCategoryId: id,
    });


  render() {
    const selectedCategory = this.state.categories.find(
      (c) => c.id === this.state.selectedCategoryId
    );
    const selectedCategoryName = selectedCategory ? selectedCategory.name : "Loading.....";

    return (
      <div>
        <Header />
        <div className="row">
          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 ">
            <SideBar
              onChangeCategoryId={this.handleSelectedId}
              onChangeCategoryName={this.handleSelectedName}
              selectedCategoryId={this.state.selectedCategoryId}
              selectedCategoryName={this.state.selectedCategoryName}
              categories={this.state.categories}
            />
          </div>
          <div className="col-xl-9 col-lg-9 col-md-8 col-sm-6 ">
            <h2 style={{ padding: "20px" }}> {selectedCategoryName}</h2>
            <BookTilesSection />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
