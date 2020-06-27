import React from 'react';

import Logo from '../../assets/discord.jpg';

import { Button } from './styles';


// import { Container } from './styles';

export interface Props {
    selected?: boolean;
    isHome?: boolean;
    hasNotifications?: boolean;
    mentions?: number;
}

const ServerButton: React.FC<Props> = ({
    selected,
    isHome,
    hasNotifications,
    mentions
}) => {
    return(
        <Button
            isHome={isHome}
            hasNotifications={hasNotifications}
            mentions={mentions}
            className={selected ? 'active' : ''}
        >
            {isHome && <img src={Logo} alt="Wallas Sampaio" title="Wallas Sampaio" />}
        </Button>
    );
};

export default ServerButton;