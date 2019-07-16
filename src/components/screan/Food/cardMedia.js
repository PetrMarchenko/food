import React from 'react';
import { styled } from '@material-ui/styles';
import CardMedia from '@material-ui/core/CardMedia';

const StyledCardMedia = styled(CardMedia)({
    height: 0,
    paddingTop: '56.25%', // 16:9,
});

export default function StyledComponents(props) {
    return <StyledCardMedia
             image={props.image}
             title={props.title}
           />;
}