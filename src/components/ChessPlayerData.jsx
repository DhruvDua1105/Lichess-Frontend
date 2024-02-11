import React, { useState, useEffect } from 'react';
import api from '../Utils/api';
import RatingHistoryTable from './RatingHistoryTable';
import Sidebar from './Sidebar';
import Loader from './Loader';
import showAlert from '../Utils/Alert';


const ChessPlayerData = () => {
    const [selectedPlayer, setSelectedPlayer] = useState(null);
    const [topPlayers, setTopPlayers] = useState([]);
    const [ratingHistory, setRatingHistory] = useState([]);
    const [error, setError] = useState(null);
    const [isVisible, setIsVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        let timer;
        if (error) {
            setIsVisible(true);
            timer = setTimeout(() => {
                setIsVisible(false);
                setError(null);
            }, 2000);
        }
        return () => clearTimeout(timer);
    }, [error]);

    const fetchData = async () => {
        try {
            const topPlayersResponse = await api.get('/topClassical', { headers: { token: localStorage.getItem("token") } });
            setTopPlayers(topPlayersResponse.data.users);
            setIsLoading(false); 
        } catch (error) {
            setError(error.message);
            showAlert('error', 'Server Error, Please try again');
        }
    };

    const fetchRatingHistory = async (username) => {
        try {
            setIsLoading(true); 
            const ratingHistoryResponse = await api.get(`/${username.username}/ratinghistory`, { headers: { token: localStorage.getItem("token") } });
            setRatingHistory(ratingHistoryResponse.data);
        } catch (error) {
            setError(error.message);
            showAlert('error', 'Server Error, Please try again');
        } finally {
            setIsLoading(false);
        }
    }

    const handlePlayerClick = (player) => {
        setSelectedPlayer(player);
        setIsLoading(true); 
        fetchRatingHistory(player);
    };

    const logoutHandler = () => {
        localStorage.removeItem("token");
        window.location.href = '/';
    }

    useEffect(() => {
        fetchData()
    }, []);

    return (
        <div className="container flex background">
            {!isLoading && (
                <Sidebar players={topPlayers} onPlayerClick={handlePlayerClick} />
            )}
            {isVisible && (
                    showAlert('error', 'API limit reached, please try again.')
            )}
            {isLoading ? (<Loader isLoading={isLoading} />) : (
                <div className="main-content flex-grow font-montserrat text-lg font-semibold mt-4 px-4 py-4 text-white">
                    <div className="relative">
                        <h2>{selectedPlayer ? `${selectedPlayer.username}'s Rating History of last 30 days` : 'Select a player from the sidebar to see the top ratings'}</h2>
                        {selectedPlayer && <RatingHistoryTable ratingHistory={ratingHistory} />}
                        <button
                            className="absolute top-0 right-0 gradient-background font-montserrat text-center text-black px-4 py-2 rounded-md text-xs font-semibold"
                            onClick={logoutHandler}
                        >
                            Logout
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ChessPlayerData;
