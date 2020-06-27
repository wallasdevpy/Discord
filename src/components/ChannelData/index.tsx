import React, { useRef, useEffect } from 'react';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

import ChannelMessage, { Mention } from "../ChannelMessage";

const ChannelData: React.FC =() => {
//O código abaixo coloca o chát na última conversa enviada
    const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

    useEffect(() => {
        const div = messagesRef.current;

        if (div) {
            div.scrollTop = div.scrollHeight;
        }
    }, [messagesRef])
//até aqui --/--
    return (
    <Container>

       <Messages ref={messagesRef}>
           <ChannelMessage
            author="Wallas Sampaio"
            date="25/06/2020"
            content="Dia em que eu terminarei esse app"
            />

            <ChannelMessage
            author="Anny"
            date="25/06/2020"
            content="Está difícil, amor?"
            />

            <ChannelMessage
            author="Janaína"
            date="25/06/2020"
            content={
                <>
                <Mention>@Wallas Sampaio</Mention>, Eu acho que não vai heim! kkk ;.)
                </>
            }
            hasMention
            isBot
            />

            <ChannelMessage
            author="Rozeli"
            date="25/06/2020"
            content={
                <>
                <Mention>@Wallas Sampaio</Mention>,Vai sim meu filhinho. Você é o meu filho mais inteligente e o mais lindo dos três. Te amo! kiss kiss kiss
                </>
            }
            hasMention
            />

            <ChannelMessage
            author="Jefferson"
            date="25/06/2020"
            content="Mano, deixa que eu te ensino depois. Ai que burro, dá zero pra ele professor!"
            />

            <ChannelMessage
            author="Raphaela"
            date="25/06/2020"
            content="Ai gente... estou com fome. Acreditam?"
            />

            <ChannelMessage
            author="Jefferson"
            date="25/06/2020"
            content="kkkk tava demorando muito para isso acontecer. Vou comprar um hamburguer para vc."
            />

            <ChannelMessage
            author="Raphaela"
            date="25/06/2020"
            content="Aiiii... meu irmão lindooo... Te aaaammmooo"
            />

            <ChannelMessage
            author="Raphaela"
            date="25/06/2020"
            content="Vou te comprar uma hamburguer com alface, tomate, picles e pão com gergelim. Nada de carne."
            />
            
            <ChannelMessage
            author="Raphaela"
            date="25/06/2020"
            content="kkkkk"
            />
            
            <ChannelMessage
            author="Wacy"
            date="25/06/2020"
            content={
                 <>
                 <Mention>@Wallas Sampaio</Mention>, mantenha seus usuários cnversando sobre os assuntos do canal!
                </>
            }
            hasMention
            isBot
            />

            <ChannelMessage
            author="Raphaela"
            date="25/06/2020"
            content="Na boa... não fui com a cara desse robozinho :-("
            />

            <ChannelMessage
            author="Jefferson"
            date="25/06/2020"
            content="Desde quando esse robozinho tem cara"
            />

            <ChannelMessage
            author="Raphaela"
            date="25/06/2020"
            content="Tem não?"
            />

        </Messages>

        
        <InputWrapper>
             <Input type="text" placeholder="Insert you message" />
             <InputIcon />

        </InputWrapper>
    </Container>
    );
};

export default ChannelData;