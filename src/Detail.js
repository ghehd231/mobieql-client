import React from "react";
import { Query } from "react-apollo";

const Detail = ({
    match : {
        params: { movieId }
    }
}) => {
    console.log(movieId);
    console.log('branch test');
    return <div>Detail</div>
};

export default Detail;