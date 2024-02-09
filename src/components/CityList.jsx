import styles from "./CityList.module.css"
import Spinner from "./Spinner";
import CityItem from "./CityItem";
import Message from "./Message"
import {useCities} from "./contexts/CitiesContext";

function CityList() {



  const {citites,isLoading} = useCities();


    if (isLoading)return <Spinner/>;

    if(!cities.length) return <Message message="Add your first city by clicking on a city on the map" />



  return (
    <div>
      <ul className ={styles.cityList}>
{cities.map((city) => <CityItem city={city} key={city.id}/> )}


      </ul>

    </div>
  );
}

export default CityList;
