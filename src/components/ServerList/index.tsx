import React from 'react';

import ServerButton from '../ServerButton';


import { Container, Separator } from './styles';

// import { Container } from './styles';

const ServerList: React.FC = () => {
    return(
        <Container>
            <ServerButton isHome>

            </ServerButton>

            <Separator />

            <ServerButton hasNotifications mentions={20} />
            <ServerButton hasNotifications />
            <ServerButton mentions={2} />
            <ServerButton hasNotifications />
            <ServerButton mentions={5} />
            <ServerButton/>
            <ServerButton/>
            <ServerButton hasNotifications />
            <ServerButton hasNotifications mentions={1002} />
            <ServerButton/>
            <ServerButton mentions={102} />
            <ServerButton hasNotifications mentions={51} />
            <ServerButton hasNotifications />
            <ServerButton mentions={1} />
            <ServerButton hasNotifications />
            <ServerButton mentions={33} />
            <ServerButton/>
            <ServerButton/>
            <ServerButton hasNotifications />
            <ServerButton hasNotifications mentions={882} />
            <ServerButton/>
            <ServerButton mentions={10} />

        </Container>
    )
}

export default ServerList;