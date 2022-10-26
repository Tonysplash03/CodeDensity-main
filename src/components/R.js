import './R.css';


function R(props) {
    const { color } = props;
    if (color.k <= 5) {
        return (
            <div className='G'>
                <p>Couples of people</p>
                <p>{color.k}</p>
            </div>
        );
    }
    else if(color.k <= 10 ){
        return (
            <div className='Y'>
                <p>Fews people</p>
                <p>{color.k}</p>
            </div>
        );
    }
    else {
        return (
            <div className='R'>
                <p>Crowded people</p>
                <p>{color.k}</p>
            </div>
        );

    }

}
export default R;