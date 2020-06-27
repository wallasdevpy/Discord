import React from 'react';

import { Container, Profile, Avatar, UserData, Icon, MicIcon, HeadphoneIcon, SettingsIcon } from './styles';


const UserInfo: React.FC =() => {
    return (
    <Container>
        <Profile>
            <Avatar />
            <UserData>
                <strong>Wallas Sampaio</strong>
                <span>#0112358</span>
            </UserData>
        </Profile>

        <Icon>
            <MicIcon />
            <HeadphoneIcon />
            <SettingsIcon />
        </Icon>
    </Container>
    );
};

export default UserInfo;