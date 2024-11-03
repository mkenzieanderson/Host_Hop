import { useEffect, useState } from "react";
import ItemDetails from '../components/ItemDetails/ItemDetails';


const Home = () => {
    const [items, setItems] = useState(null);

    useEffect( () => {
        const fetchItems = async () => {
            const response = await fetch('/home');

            if (response.ok) {
                const json = await response.json();
                setItems(json);
            }  else {
                console.error("Received non-JSON response:", await response.text());
            }
        }
        fetchItems()
    }, []);

    return (
        <div className="home">
            <div className="available_items">
                {items && items.map((item) => (
                    <ItemDetails key={item._id} item={item}/>
                ))}
            </div>
        </div>
    );
};

export default Home;