
import { useState, useEffect } from 'react';
import * as Location from 'expo-location';
import { OPEN_WEATHERMAP_API_KEY } from '@env'

export const useGetWeather = () => {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [weather, setWeather] = useState(null);
    const [lat, setLat] = useState([]);
    const [lon, setLon] = useState([]);


    const fetchWeather = async () => {
        try {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${OPEN_WEATHERMAP_API_KEY}&units=metrics`);
            const data = await response.json();
            setWeather(data);
            setLoading(false);
        } catch (error) {
            setError('Error getting weather data');
        } finally {
            setLoading(false);
        }

    }

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setError('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLat(location.coords.latitude);
            setLon(location.coords.longitude);
            await fetchWeather();
        })()
    }, [lat, lon]);

    return [loading, weather, error];


}