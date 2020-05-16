import AccentTypography from './accent-typography';

const ScreenStory = document.querySelector(`.screen--story`);
const HistoryTitle = ScreenStory.querySelector(`.slider__item-title`);

const HistoryTitleAccentTypography = new AccentTypography(
    HistoryTitle,
    650,
    {min: 0, max: 150},
    `active`,
    `transform`,
);

export {
  HistoryTitleAccentTypography
};
