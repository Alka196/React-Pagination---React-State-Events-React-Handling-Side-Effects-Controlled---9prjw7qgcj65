import React, { useState } from 'react'
const PaginationButtonsList = ({handler, numOfButtons = 20}) => {
    const [active, setActive] = useState(0);
    const buttonClick = (e) => {
        handler(+e.target.innerText)
        setActive(+e.target.innerText-1)
    }

    return (
        <div className="pagination-buttons-list">
            {Array(numOfButtons).fill(0).map((a, idx) =>
                <button onClick={buttonClick}
                key={idx}
                id={`button-${idx+1}`}
                className={active === idx ? 'active-btn' : null}
                >
                    {idx+1}
                </button>
            )}

        </div>
    )
}

export { PaginationButtonsList }