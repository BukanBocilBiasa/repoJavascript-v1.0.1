//buat instansiasi nya
import axios from "axios";
export const apiInstance = axios.create({
  baseURL: "",
  headers: {
    "Content-Type": "application/json",
  },
});

//cara ambil data
import { apiInstance } from "../utils/apiInstance";
const [getMovie, setMovie] = useState(null);

const fetchMyMovies = async () => {
  const response = await apiInstance.get("/my-movies");
  setMovie(response.data);
};

useEffect(() => {
  fetchMyMovies();
}, []);

//message from API : {getMovie?.movies}
