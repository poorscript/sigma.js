'use strict';
let init = function(sigma) {

  if (typeof sigma === 'undefined')
    throw 'sigma is not declared';

  sigma.svg = sigma.svg || {};
  sigma.svg.utils = sigma.svg.utils || {};

  /**
   * Some useful functions used by sigma's SVG renderer.
   */
  sigma.svg.utils = {

    /**
     * SVG Element show.
     *
     * @param  {DOMElement}               element   The DOM element to show.
     */
    show: function(element) {
      element.style.display = '';
      return this;
    },

    /**
     * SVG Element hide.
     *
     * @param  {DOMElement}               element   The DOM element to hide.
     */
    hide: function(element) {
      element.style.display = 'none';
      return this;
    }
  };
};
module.exports = { init: init };
