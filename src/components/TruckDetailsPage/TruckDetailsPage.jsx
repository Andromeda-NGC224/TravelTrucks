import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchTruckDetails } from "../../redux/operations";
import { selectStatus, selectCurrentTruck } from "../../redux/secectors.js";
import Loader from "../Loader/Loader.jsx";
import TrackDetailsComponent from "../TrackDetailsComponent/TrackDetailsComponent.jsx";

export default function TruckDetailsPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTruckDetails(id));
  }, [dispatch, id]);

  const truck = useSelector(selectCurrentTruck);
  const status = useSelector(selectStatus);
  console.log(truck);

  return <>{status === "loading" ? <Loader /> : <TrackDetailsComponent />}</>;
}
