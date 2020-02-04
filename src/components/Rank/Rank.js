import React from 'react';

const Rank = ({name, entries}) => {
    return (
        <div className='pa3'>
            <div className='white f3'>
              {`Hello ${name},`}
            </div>
            <div className='white f3'>
              {`your current image entry count is ...`}
            </div>
            <div className='white f1'>
              {entries}
            </div>
        </div>
    );
}

export default Rank;