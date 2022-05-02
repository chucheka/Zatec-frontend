import { Link } from "react-router-dom";

export default function Category(props) {
    const { category } = props;
    return (
        <div>
            <Link to={{
                pathname:"/jokes/joke",
                search:`?category=${category}`
            }}>{category}</Link>
        </div>
    )
}