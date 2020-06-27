import React from 'react';

import { Container, Role, User, Avatar } from './styles';


interface UserProps {
    nicname: string;
    isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({
    nicname,
    isBot
}) => {
    return (
        <User>
            <Avatar 
                className={isBot ? 'bot' : ''}
            />

            <strong>{nicname}</strong>

            {isBot && <span>Bot</span>}
        </User>
    )
}

const UserList: React.FC =() => {
    return (
    <Container>
        <Role>Disponível - 1</Role>
        <UserRow nicname="Wanny" />

        <Role>Offline 20</Role>
        <UserRow nicname="Anny" />
        <UserRow nicname="Wacy" isBot />
        <UserRow nicname="Rozeli" />
        <UserRow nicname="Raphaela" />
        <UserRow nicname="Jefferson" />
        <UserRow nicname="Janaína" isBot />
        <UserRow nicname="Sônia" />
        <UserRow nicname="Lúcia" />
        <UserRow nicname="Luiz" />
        <UserRow nicname="Alberto" isBot />
        <UserRow nicname="Jorge" />
        <UserRow nicname="Jose" />
        <UserRow nicname="Nicolas" />
        <UserRow nicname="Samuca" />
        <UserRow nicname="Julia" />
        <UserRow nicname="Carol" isBot />
        <UserRow nicname="Lourenço" />
        <UserRow nicname="Sandro" />
        <UserRow nicname="Patrícia" />
        <UserRow nicname="Kamile" />
        <UserRow nicname="Alexandra" />
        
    </Container>
    );
};

export default UserList;