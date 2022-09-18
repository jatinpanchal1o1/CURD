import React from "react";
import MainLayout from "./components/mainLayout";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getPost } from "./actions/post";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPost());
  }, [dispatch]);
  return (
    <div>
      <MainLayout />
    </div>
  );
};

export default App;
