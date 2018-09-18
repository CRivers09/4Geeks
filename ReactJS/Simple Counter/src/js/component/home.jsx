import PropTypes from 'prop-types';
import React from 'react';

//create your first component
function Counter(props) {
    let sec = props.seconds;
        return (
            <div className="container">
                <div className="row mt-2">
                    <div className="col-12 bg-dark">
                        <div className="row justify-content-md-center">
                            <div className="col-2 my-2 mr-2 py-3 bg-secondary rounded text-center">
                                <i className="far fa-clock text-light"></i>
                            </div>
                            <div className="col-1 my-2 mr-2 py-2 bg-secondary rounded">
                                <p className="m-0 text-center text-light" id="h-thousands">{Math.floor((sec / 100000) % 10)}</p>
                            </div>
                            <div className="col-1 my-2 mr-2 py-2 bg-secondary rounded">
                                <p className="m-0 text-center text-light" id="t-thousands">{Math.floor((sec / 10000) % 10)}</p>
                            </div>
                            <div className="col-1 my-2 mr-2 py-2 bg-secondary rounded">
                                <p className="m-0 text-center text-light" id="thousands">{Math.floor((sec / 1000) % 10)}</p>
                            </div>
                            <div className="col-1 my-2 mr-2 py-2 bg-secondary rounded">
                                <p className="m-0 text-center text-light" id="hundreds">{Math.floor((sec / 100) % 10)}</p>
                            </div>
                            <div className="col-1 my-2 mr-2 py-2 bg-secondary rounded">
                                <p className="m-0 text-center text-light" id="tens">{Math.floor((sec / 10) % 10)}</p>
                            </div>
                            <div className="col-1 my-2 mr-2 py-2 bg-secondary rounded">
                                <p className="m-0 text-center text-light" id="ones">{sec % 10}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
}

Counter.propTypes = {
    seconds: PropTypes.number
};
Counter.defaultProps = {
    seconds: 0
};

export default Counter;
