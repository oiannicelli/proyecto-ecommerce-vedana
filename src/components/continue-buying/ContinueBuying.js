import React from 'react';
import { Link } from "react-router-dom";

const ContinueBuying = () => {
    return (
        <div>
            <Link to={"/"}>
                <button type="button">
                    Seguir comprando
                </button>
            </Link>
        </div>
    )
}

export default ContinueBuying;