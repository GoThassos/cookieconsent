import { _state, _config } from "../global";
import { _createNode, _setAttribute, _inArray } from "./general";

/**
 * Global user configuration object
 */
const scriptTagSelector = 'data-cookiecategory';

/**
 * This function handles the loading/activation logic of the already
 * existing scripts based on the current accepted cookie categories
 *
 * @param {string[]} [mustEnableCategories]
 */
export const _manageExistingScripts = function(mustEnableCategories){

    if(!_config.manageScriptTags) return;

    // get all the scripts with "cookie-category" attribute
    var scripts = document.querySelectorAll('script[' + scriptTagSelector + ']');
    var acceptedCategories = mustEnableCategories || _state.savedCookieContent['categories'] || [];

    /**
     * Load scripts (sequentially), using a recursive function
     * which loops through the scripts array
     * @param {Element[]} scripts scripts to load
     * @param {number} index current script to load
     */
    var _loadScripts = function(scripts, index){
        if(index < scripts.length){

            var currScript = scripts[index];
            var currScript_category = currScript.getAttribute(scriptTagSelector);

            /**
             * If current script's category is on the array of categories
             * accepted by the user => load script
             */
            if(_inArray(acceptedCategories, currScript_category) > -1){

                currScript.type = 'text/javascript';
                currScript.removeAttribute(scriptTagSelector);

                // get current script data-src
                var src = currScript.getAttribute('data-src');

                // some scripts (like ga) might throw warning if data-src is present
                src && currScript.removeAttribute('data-src');

                // create fresh script (with the same code)
                var freshScript = _createNode('script');
                freshScript.textContent = currScript.innerHTML;

                // Copy attributes over to the new "revived" script
                (function(destination, source){
                    var attributes = source.attributes;
                    var len = attributes.length;
                    for(var i=0; i<len; i++){
                        var attrName = attributes[i].nodeName;
                        _setAttribute(destination, attrName , source[attrName] || source.getAttribute(attrName));
                    }
                })(freshScript, currScript);

                // set src (if data-src found)
                src ? (freshScript.src = src) : (src = currScript.src);

                // if script has "src" attribute
                // try loading it sequentially
                if(src){
                    // load script sequentially => the next script will not be loaded
                    // until the current's script onload event triggers
                    if(freshScript.readyState) {  // only required for IE <9
                        freshScript.onreadystatechange = function() {
                            if (freshScript.readyState === "loaded" || freshScript.readyState === "complete" ) {
                                freshScript.onreadystatechange = null;
                                _loadScripts(scripts, ++index);
                            }
                        };
                    }else{  // others
                        freshScript.onload = function(){
                            freshScript.onload = null;
                            _loadScripts(scripts, ++index);
                        };
                    }
                }

                // Replace current "sleeping" script with the new "revived" one
                currScript.parentNode.replaceChild(freshScript, currScript);

                /**
                 * If we managed to get here and scr is still set, it means that
                 * the script is loading/loaded sequentially so don't go any further
                 */
                if(src) return;
            }

            // Go to next script right away
            _loadScripts(scripts, ++index);
        }
    }

    _loadScripts(scripts, 0);
}