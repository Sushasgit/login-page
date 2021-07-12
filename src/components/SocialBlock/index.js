import React from 'react';
import styled from 'styled-components';
import Facebook from '../icons/Facebook';
import Instagram from '../icons/Instagram';
import Mail from '../icons/Mail';
import Phone from '../icons/Phone';
import Telegram from '../icons/Telegram';
import Vk from '../icons/Vk';
import WhatsApp from '../icons/WhatsApp';
import Youtube from '../icons/Youtube';
import StyledTooltip from '../Tooltip';

const Link = styled.a`
    background-color: transparent;
    padding-top: 8px;
`;

const SocialList = styled.ul`
    list-style: none;
    padding: 0 0 0 100px;
    display: flex;
    align-items: center;

    & li:not(:last-child) {
        margin-right: 10px;
    }
`;

const socialLinksData = [
    {
        id: 1,
        type: 'phone',
        tooltip: '+1-1245-123-547-12-55',
        icon: <Phone />,
    },
    {
        id: 1,
        type: 'social',
        icon: <WhatsApp />,
        linkTo: '',
    },
    {
        id: 1,
        type: 'mail',
        icon: <Mail />,
        linkTo: '@mail',
    },
    {
        id: 1,
        type: 'social',
        icon: <Facebook />,
        linkTo: 'https://www.facebook.com/',
    },
    {
        id: 1,
        type: 'social',
        icon: <Vk />,
        linkTo: 'http://vk.com',
    },
    {
        id: 1,
        type: 'social',
        icon: <Instagram />,
        linkTo: '',
    },
    {
        id: 1,
        type: 'social',
        icon: <Youtube />,
        linkTo: 'https://www.youtube.com/',
    },
    {
        id: 1,
        type: 'social',
        icon: <Telegram />,
        linkTo: '@telegram',
    },
];

const renderSocial = (social) => {
    switch (social.type) {
        case 'phone':
            return (
                <StyledTooltip bgColor="#fff" arrow title={social.tooltip}>
                    <Link href={`tel:${social.linkTo}`}>{social.icon}</Link>
                </StyledTooltip>
            );
        case 'mail':
            return <Link href={`mailto:${social.linkTo}`}>{social.icon}</Link>;
        case 'social':
            return <Link href={social.linkTo}>{social.icon}</Link>;
        default:
            return null;
    }
};

const SocialBlock = () => {
    return (
        <SocialList>
            {socialLinksData.map((social) => {
                return <li>{renderSocial(social)}</li>;
            })}
        </SocialList>
    );
};

export default SocialBlock;
