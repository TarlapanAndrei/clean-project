import { createSelector } from 'reselect';

const selectLang = state => state.content;

export const selectAllContent = createSelector(
  [selectLang],
  content => content.allContent
);
export const selectLanguage = createSelector(
  [selectLang],
  content => content.selectedLanguage
);