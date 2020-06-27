import React from 'react';

import { Container, HashtagIcon, Title, Separator, Description } from './styles';


const ChannelInfo: React.FC =() => {
    return (
    <Container>
        <HashtagIcon />
        <Title>CloneDiscord</Title>
        <Separator />
        <Description>Open Channel</Description>
    </Container>
    );
};

export default ChannelInfo;