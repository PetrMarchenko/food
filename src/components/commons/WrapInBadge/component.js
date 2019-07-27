import React from 'react';
import Badge from '@material-ui/core/Badge';

const WrapInBadge = props => {
    const {
        badgeContent,
        badgeColor,
        children
    } = props;

    if (badgeContent > 0) {
        return (
            <Badge
                color={ badgeColor }
                badgeContent={ badgeContent } >
                {children}
            </Badge>
        );
    }

    return (
        <Badge>
            {children}
        </Badge>
    );

};

export default WrapInBadge;
