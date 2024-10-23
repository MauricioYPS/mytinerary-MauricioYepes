import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../Props/Input.jsx";
import Cards from "../Props/Card.jsx";

export default function Cities() {
    const [cities, setCities] = useState([]); 
    const [searchTerm, setSearchTerm] = useState('');
    const [isLoading, setIsLoading] = useState(false); 

    useEffect(() => {
        setIsLoading(true); 
        let urlApi = `http://localhost:8080/api/cities/all?name=${searchTerm}`;

        fetch(urlApi)
            .then(response => response.json())
            .then(data => {
                setCities(data.response); 
            })
            .catch((error) => {
                console.error('Error fetching cities:', error);
            })
            .finally(() => {
                setIsLoading(false); 
            });

    }, [searchTerm]);

    return (
        <div>
            <Input onFilter={setSearchTerm} />
            {isLoading ? (
                <div className="w-full h-screen text-center flex mt-40 justify-center">
                <h1>Loading cities</h1>
            </div>
            ) : cities.length === 0 ? (
                
                <div className="w-full h-screen text-center flex mt-40 justify-center">
                    <h1>City not found</h1>
                </div>
            ) : (
                <Cards cities={cities} />
            )}
        </div>
    );
}