import React from "react";
import MyHeader from "../components/MyHeader";
import MainBody from "../components/MainBody";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";

function Home() {
  return (
    <MainBody>
      <MyHeader />
      <Carousel />
      <div className="flex justify-center gap-4">
        <div className="card glass w-96">
          <figure>
            <img
              src="https://cdn.pixabay.com/photo/2020/03/30/07/18/nude-4983343_960_720.jpg"
              alt="car!"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Life hack</h2>
            <p>How to park your car at your garage?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Learn now!</button>
            </div>
          </div>
        </div>
        <div className="card glass w-96">
          <figure>
            <img
              src="https://cdn.pixabay.com/photo/2021/07/01/17/32/woman-6379931_1280.jpg"
              alt="car!"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Life hack</h2>
            <p>How to park your car at your garage?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Learn now!</button>
            </div>
          </div>
        </div>
        <div className="card glass w-96">
          <figure>
            <img
              src="https://cdn.pixabay.com/photo/2020/03/04/08/04/nude-4900779_1280.jpg"
              alt="car!"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Life hack</h2>
            <p>How to park your car at your garage?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Learn now!</button>
            </div>
          </div>
        </div>
        <div className="card glass w-96">
          <figure>
            <img
              src="https://cdn.pixabay.com/photo/2018/03/14/13/58/naked-3225267_1280.jpg"
              alt="car!"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Life hack</h2>
            <p>How to park your car at your garage?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Learn now!</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </MainBody>
  );
}

export default Home;
