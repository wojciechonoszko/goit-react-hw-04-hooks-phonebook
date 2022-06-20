import React from 'react';
import PropTypes from 'prop-types';
import {InputContainer, LabelContainer} from '../contactForm/ContactFormStyles';


export default function Filter({ data }) {
    return(
        <>
            <LabelContainer htmlFor="filter">Find contacts by name</LabelContainer>
            <InputContainer
                id="filter"
                type="text"
                onChange={data}
                name="filter"
                
            />
        </>
    );
}

Filter.propTypes = {
    data: PropTypes.func.isRequired,
};

// const Filter = ({handleChange, filter}) => {

//     return(
//         <>
//             <LabelContainer htmlFor="filter">Find contacts by name</LabelContainer>
//             <InputContainer
//                 id="filter"
//                 type="text"
//                 onChange={handleChange}
//                 name="filter"
//                 value={filter}
//             />
//         </>
//     );
// };

// Filter.propTypes = {
//     handleChange: PropTypes.func.isRequired,
//     filter: PropTypes.string.isRequired
// };

// export default Filter;