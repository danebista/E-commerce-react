import {createSelector} from 'reselect';
const directoryUser  = state => state.directory;

export const selectDirectory = createSelector(
    [directoryUser],
    (directory)=> directory.section
)
