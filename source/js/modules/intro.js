import AccentTypography from './accent-typography';

const IntroNode = document.querySelector(`.intro`);
const IntroTitle = IntroNode.querySelector(`.intro__title`);
const IntroDate = IntroNode.querySelector(`.intro__date`);

const TitleAccentTypography = new AccentTypography(
    IntroTitle,
    650,
    {min: 0, max: 150},
    `active`,
    `transform`,
);

const DateAccentTypography = new AccentTypography(
    IntroDate,
    350,
    {min: 0, max: 200},
    `active`,
    `transform`,
);

export {TitleAccentTypography, DateAccentTypography};
