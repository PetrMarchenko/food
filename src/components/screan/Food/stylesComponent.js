import React from 'react';
import {styled} from '@material-ui/styles';
import CardMediaMaterial from '@material-ui/core/CardMedia';
import ContainerMaterial from '@material-ui/core/Container';
import CardContentMaterial from '@material-ui/core/CardContent';
import CardMaterial from '@material-ui/core/Card';

const StyledCardMedia = styled(CardMediaMaterial)({
    height: 0,
    paddingTop: '56.25%', // 16:9,
});

export function CardMedia(props) {
    return <StyledCardMedia
            {...props}
           />;
}

const StyledContainer = styled(ContainerMaterial)({
    paddingTop: 24,
    paddingBottom: 24,
});

export function Container(props) {
    return <StyledContainer
        {...props}
    />;
}


const StyledCardContent = styled(CardContentMaterial)({
    flexGrow: 3,
});

export function CardContent(props) {
    return <StyledCardContent
        {...props}
    />;
}


const StyledCard = styled(CardMaterial)({
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
});

export function Card(props) {
    return <StyledCard
        {...props}
    />;
}


