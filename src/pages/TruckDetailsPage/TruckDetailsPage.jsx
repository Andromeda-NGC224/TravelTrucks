import { useCallback, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchTruckDetails } from "../../redux/operations.js";
import { selectCurrentTruck } from "../../redux/secectors.js";
import Loader from "../../components/Loader/Loader.jsx";
import TrackDetailsComponent from "../../components/TrackDetailsComponent/TrackDetailsComponent.jsx";

export default function TruckDetailsPage() {
  const { id } = useParams();
  const currentTruck = useSelector(selectCurrentTruck);
  const dispatch = useDispatch();

  const fetchTruckData = useCallback(() => {
    if (!currentTruck || currentTruck.id !== id) {
      dispatch(fetchTruckDetails(id));
    }
  }, [currentTruck, dispatch, id]);

  useEffect(() => {
    fetchTruckData();
  }, [fetchTruckData]);
  console.log(currentTruck);

  return <>{!currentTruck ? <Loader /> : <TrackDetailsComponent />}</>;
}
