import React, { Component } from 'react';
import firebase from 'firebase';
import { Card, CardActions } from 'material-ui';
import Like from '../icons/like.svg';
import LikeShadow from '../icons/like_shadow.svg';
import { vote } from '../utils';

class VotingCard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            voted: false
        };
    }

    render() {
        const { voted } = this.state;
        const { children, path, style } = this.props;
        return (
            <Card
                style={{
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
                <CardActions>
                    {
                        voted ?
                            <img
                                onClick={() => vote({ path, delta: -1 })}
                                src={Like}
                                style={{ width: 32, height: 32 }}
                            /> :
                            <img
                                onClick={() => vote({ path, delta: 1 })}
                                src={LikeShadow}
                                style={{ width: 32, height: 32 }}
                            />
                    }
                </CardActions>
            </Card>
        );
    }
}

export default VotingCard;