import { useState } from "react";
import gameAPI from "../../../gameAPI";

export default () => {

    const [games, setGames] = useState([]);

    const [errorMes, setErrorMes] = useState('');

 
    const searchApi = async (searchTerm) => {

        try {
            const response = await gameAPI.get('/search', {
               
               params: {
                   client_id: 'lK9Pf5uKKr',
                   name: searchTerm,
                   limit: 50,
                   fuzzy_match: true,
               } 
            });

            setGames(response.data.games);
        } catch (error) {
          setErrorMes('Something went wrong')
        }
    };

   return [searchApi, games, errorMes];
}