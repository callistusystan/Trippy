import React, { Component } from 'react';
import firebase from 'firebase';
import { Card, CardActions } from 'material-ui';
import Like from '../icons/like.svg';
import LikeShadow from '../icons/like_shadow.svg';
import { vote } from '../utils';
import Rating from 'react-rating';
import GiraffeHead from '../images/giraffe-head.svg';

class VotingCard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            voted: false
        };
    }

    render() {
        const { voted } = this.state;
        const { children, path, rating, style } = this.props;
        return (
            <div
                style={{
                    background: 'rgba(255,255,255,1)',
                    boxShadow: '0 0 0 0',
                    width: '98%',
                    height: '95%',
                    maxHeight: 400,
                    minWidth: 300,
                    padding: 10,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    ...style
                }}
            >
                {children}
                <div className={'pointer'} style={{
                    position: 'relative',
                    bottom: 0,
                    right: 0,
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: 8
                }}>
                    {
                        voted ?
                            <img
                                onClick={() => {
                                    this.setState({ voted: !voted });
                                    vote({ path, delta: -1 });
                                }}
                                src={Like}
                                style={{ width: 32, height: 32, cursor: 'pointer' }}
                            /> :
                            <img
                                onClick={() => {
                                    this.setState({ voted: !voted });
                                    vote({ path, delta: 1 });
                                }}
                                src={LikeShadow}
                                style={{ width: 32, height: 32, cursor: 'pointer' }}
                            />
                    }
                    {rating &&

                    <div className='rating'>
                        <Rating
                            initialRating={Math.min(rating, 5)}
                            stop={Math.min(rating, 5)}
                            readonly
                            fullSymbol={
                                <img
                                    src={GiraffeHead}
                                    style={{ padding: '2px 0px', width: 32, height: 32, cursor: 'default' }}
                                />
                            }
                        />
                    </div>
                    }
                </div>
            </div>
        );
    }
}

export default VotingCard;