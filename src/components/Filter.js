import { useState } from 'react';
import './Filter.css';

function Filter() {
    const [filter, setFilter] = useState("all");
    const onFilterChange = (e) => {
        setFilter(e.target.value)
    }

    return (
        <div className='filter'>
            <form>
            <div className="radio">
                    <h2>Filters</h2>
                    <label>
                        <input type="radio" name="filter" value="all" checked={filter==="all"} onChange={onFilterChange}/>
                        All
                    </label>
                </div>
                <div className="radio">
                    <label>
                        <input type="radio" name="filter" value="complete" checked={filter==="complete"} onChange={onFilterChange} />
                        Complete
                    </label>
                </div>
                <div className="radio">
                    <label>
                        <input type="radio" name="filter" value="incomplete" checked={filter==="incomplete"} onChange={onFilterChange} />
                        Incomplete
                    </label>
                </div>

            </form>
        </div>
    )


}

export default Filter;