import { useState } from "react";
import './Sort.css';

function Sort() {

    const [sort, setSort] = useState("due");
    const onSortChange = (e) => {
        setSort(e.target.value)
    }

    return (
        <div className="sort">
            <h2>Sort By</h2>
                <div className="radio">
                    <label>
                        <input type="radio" name="sort" value="due" checked={sort==="due"} onChange={onSortChange}/>
                        Due
                    </label>
                </div>
                <div className="radio">
                    <label>
                        <input type="radio" name="sort" value="created" checked={sort==="created"} onChange={onSortChange} />
                        Created
                    </label>
                </div>
        </div>
    )
}

export default Sort;