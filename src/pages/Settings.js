import React, { useState } from "react";
import Filter from './../components/Filter.js';
import Sort from './../components/Sort.js';
import SortDirection from "./../components/SortDirection.js";
import "./Settings.css";


function Settings() {
    const [filter, setFilter] = useState("all");
    const [sort, setSort] = useState("due");
    const [sortDirection, setSortDirection] = useState("ascending");

    const handleFilterChange = (value) => {
        setFilter(value);
    };

    const handleSortChange = (value) => {
        setSort(value);
    };

    const handleSortDirectionChange = (value) => {
        setSortDirection(value);
    };

    return (
    <div className="settings">
            <h1>Settings</h1>
            <form>
                <Filter value={filter} onChange={handleFilterChange} />
                <Sort value={sort} onChange={handleSortChange} />
                <SortDirection value={sortDirection} onChange={handleSortDirectionChange} />
                <input className="submit" type="submit" value="Save" />
            </form>
        </div>
    )
}

export default Settings;