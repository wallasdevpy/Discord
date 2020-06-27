import React from 'react';
import ChannelButton from '../ChannelButton';

import { Container, Category, AddCategoryIcon } from './styles';


const ChannelList: React.FC =() => {
    return (
    <Container>
        <Category>
            <span>Text Channel</span>
            <AddCategoryIcon/>
        </Category>
            <ChannelButton channelName="CloneDiscord" />
            <ChannelButton channelName="Free Chat" />
            <ChannelButton channelName="Business" />
            <ChannelButton channelName="Projets" />
            <ChannelButton channelName="Rect Native" />
            <ChannelButton channelName="RectJS" />
            <ChannelButton channelName="NodeJS" />
            <ChannelButton channelName="Jobs" />        
        
    </Container>
    );
};

export default ChannelList;