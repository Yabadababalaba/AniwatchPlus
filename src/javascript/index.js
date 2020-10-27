// core
import { initCore } from './utils/aniwatchCore';
// helper
import { initHelpers } from './utils/helpers';
// enhancements
import { init as animeRequests } from './enhancements/animeRequests';
import { init as languageDisplay } from './enhancements/languageDisplay';
import { init as profile } from './enhancements/profile';
import { init as quickSearch } from './enhancements/quickSearch';

// core
initCore();

//helper
initHelpers();

// enhancements
animeRequests();
languageDisplay();
profile();
quickSearch();