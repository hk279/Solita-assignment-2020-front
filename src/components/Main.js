import { useState, useEffect } from "react";
import Search from "./Search";

const Main = () => {
    const [names, setNames] = useState([]);
    const [filter, setFilter] = useState("");
    // Alphabetical sorting by default
    const [sortType, setSortType] = useState("alphabetical");

    // Get data on component mount.
    useEffect(() => {
        const url = "/api/names";
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setNames(data.names);
            })
            .catch((err) => console.log(err));
    }, []);

    const sortNames = () => {
        if (sortType === "alphabetical") {
            return names.sort((a, b) => {
                if (a.name < b.name) {
                    return -1;
                }
                if (a.name > b.name) {
                    return 1;
                }
                return 0;
            });
        }
        if (sortType === "popularity") {
            return names.sort((a, b) => b.amount - a.amount);
        }
    };

    const filterNames = () => {
        return sortNames().filter((item) => item.name.toLowerCase().includes(filter));
    };

    const totalNames = () => {
        return filterNames().reduce((total, name) => {
            return total + name.amount;
        }, 0);
    };

    let content;

    if (filterNames().length === 0) {
        content = (
            <tr>
                <td>No matches found</td>
            </tr>
        );
    } else {
        content = filterNames().map((item) => (
            <tr key={item.name}>
                <td>{item.name}</td>
                <td>{item.amount}</td>
            </tr>
        ));
    }

    return (
        <>
            <Search onChange={(value) => setFilter(value.toLowerCase())} />
            <div className="main-content">
                <div className="sort">
                    <label>Sort: </label>
                    <select name="Sort by" onChange={(e) => setSortType(e.target.value)}>
                        <option value="alphabetical">Alphabetical</option>
                        <option value="popularity">Popularity</option>
                    </select>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {content}
                        <hr></hr>
                        <tr className="total-row">
                            <td>Total</td>
                            <td>{totalNames()}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Main;
