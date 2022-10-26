import './self.css';

function Self(props) {
    const {self_study} = props;
    if (self_study.pri == 0) {
        return (
            <div className='student-none'>
                <img src='/images/person.png'></img>
            </div>
        );
    }
    
    else {
        return (
            <div className='student-booked'>
                <img src='/images/person.png'></img>
            </div>
        );
    }
}


export default Self;