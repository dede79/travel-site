//bring in jquery file
import $ from 'jquery';
//bring in waypoints file, go up 3 folders first
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
  constructor(els, offset) {
    this.itemsToReveal = els;
    this.offsetPercentage = offset;
    this.hideInitially();
    this.createWaypoints();
  }

  hideInitially() {
    this.itemsToReveal.addClass("reveal-item");
  }

  createWaypoints() {
    var that = this; //so js can point to the this keyword in RevealOnScroll class
    this.itemsToReveal.each(function() {
      var currentItem = this;
      new Waypoint({
        element: currentItem,
        handler: function() {
          $(currentItem).addClass("reveal-item--is-visible");
        },
        offset: that.offsetPercentage //offset when to appear when scrolling from bottom of browser (100% is the very bottom and 0 is the very top of window browser), use that var to point to the offset Percentage porperty.
      });
    });
  }
}

export default RevealOnScroll;