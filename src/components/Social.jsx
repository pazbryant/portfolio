import React from 'react';

const SocialShare = [
    {
        iconName: 'github',
        link: 'https://github.com/pazbryant',
    },
    {
        iconName: 'linkedin',
        link: 'https://www.linkedin.com/in/bryant-paz-53a9471b1/',
    },
];
const Social = () => {
    return (
        <>
            <ul className="social">
                {SocialShare.map((val, i) => (
                    <li key={i}>
                        <a
                            href={`${val.link}`}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                className="svg"
                                src={`assets/img/svg/social/${val.iconName}.svg`}
                                alt="social"
                            ></img>
                        </a>
                    </li>
                ))}
            </ul>
            {/* END SOCIAL */}
        </>
    );
};

export default Social;