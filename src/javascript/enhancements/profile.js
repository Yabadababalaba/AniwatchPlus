import * as core from '../utils/aniwatchCore';
import * as helper from '../utils/helpers';

export function init() {
    core.registerScript(node => {
      
    }, "^/profile/[0-9]*$");
}