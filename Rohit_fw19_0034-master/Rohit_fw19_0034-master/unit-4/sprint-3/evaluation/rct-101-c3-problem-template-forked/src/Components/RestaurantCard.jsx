

export function RestaurantCard({
    name,type,number_of_votes,price_starts_from,rating
}){
    return (
        <tr data-testid="item">
            <td data-testid="name">
                {name}
            </td>
            <td data-testid="rating">
                {rating}
            </td>
            <td data-testid="type">
                {type}
            </td>
            <td data-testid="votes">
                {number_of_votes}
            </td>
            <td data-testid="price">
                {price_starts_from}
            </td>
        </tr>
    );
}
