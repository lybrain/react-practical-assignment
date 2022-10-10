import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { initPostState } from "../store/post/actions";

const useInitState = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(initPostState());
    };
  }, [dispatch]);
  return null;
};
export default useInitState;
