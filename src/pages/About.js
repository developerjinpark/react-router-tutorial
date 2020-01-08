import React from 'react';
// using Query String
import queryString from 'query-string';


const About = ({location, match}) => {
    const query = queryString.parse(location.search);
    console.log(query);
    const { color } = query;

    return (
        <div>
            <h2 style={{color}}>About</h2>
            <p>Hello{match.params.name ? ', ' + match.params.name : '!!'}</p>
            {match.params.age ? <p>Age : {match.params.age}</p> : ''}
        </div>
    )
}

export default About;