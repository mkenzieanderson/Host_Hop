import './ItemDetails.css';

const ItemDetails = ({ item }) => {
    return (
        <div className="item-details">
            <h4>{item.title}</h4>
            <p><strong>Quantity: </strong>{item.quantity}</p>
            <p><strong>Price: </strong>{item.price}</p>
            <p><strong>Description: </strong>{(item.description ? item.description : " ")}</p>
            <p><strong>Condition: </strong>{item.condition}</p>
            <p><strong>Seller: </strong>{item.seller}</p>
        </div>
    )
}

export default ItemDetails;