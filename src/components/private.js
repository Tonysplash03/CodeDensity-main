import './private.css';

function Private(props) {
    const {private_room} = props;
    if (private_room.pp == 0) {
        return (
            <div className='private-none'>
                <p>Empty</p>
                <p>Private room</p>
            </div>
        );
    }
    
    else {
        return (
            <div className='private-booked'>
                <p>Full</p>
                <p>Private room</p>
            </div>
        );
    }
}


export default Private;