import { useState } from "react";
import './SortDirection.css'

function SortDirection() {

    const [sortDirection, setSortDirection] = useState("ascending");
    const onSortDirectionChange = (e) => {
        setSortDirection(e.target.value)
    }

    return (
        <div className="sortDirection">
            <h2>Sort Date Direction</h2>
                <div className="radio">
                    <label>
                        <input type="radio" name="sortDirection" value="ascending" checked={sortDirection==="ascending"} onChange={onSortDirectionChange} />
                        Ascending
                    </label>
                </div>
                <div className="radio">
                    <label>
                        <input type="radio" name="sortDirection" value="descending" checked={sortDirection==="descending"} onChange={onSortDirectionChange} />
                        Descending
                    </label>
                </div>
        </div>
    )
}

export default SortDirection;