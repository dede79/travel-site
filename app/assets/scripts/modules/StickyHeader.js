import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';

class StickyHeader{
  constructor(){
    this.siteHeader = $(".site-header");
    this.headerTriggerElement = $(".large-hero__title");
    this.createHeaderWaypoint();//run function below
    //when creating methods as below remember to always call them up here in the constructor function!
    this.pageSections = $(".page-section");
    this.headerLinks = $(".primary-nav a");
    this.createPageSectionWaypoints();
    this.addSmoothScrolling(); 
   }
  
//smooth scroll method
addSmoothScrolling(){
  this.headerLinks.smoothScroll(); //headerlinks var already has all nav links collected
}

//waypoint header method
createHeaderWaypoint(){
  var that = this; //to point towards the main class above
  new Waypoint({
    element: this.headerTriggerElement[0],
    handler: function(direction){
      if(direction == "down"){//if scrolling down
        that.siteHeader.addClass("site-header--dark");
      }else {//whe scrolling back to top header goes light again
        that.siteHeader.removeClass("site-header--dark");
      }
    }
  });
 }
  
  //waypoint page-sections method
  createPageSectionWaypoints(){
    var that = this; //define this outside the event handler below so it can point to this keyword in constructor function
    this.pageSections.each(function(){
      var currentPageSection = this;
      new Waypoint({
        element: currentPageSection,
        handler: function(direction){
          if (direction == "down"){
            var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
            //remove class first to go to next link:
            that.headerLinks.removeClass("is-current-link");
            //when removed can be added again:
            $(matchingHeaderLink).addClass("is-current-link");
          }
        },
        offset: "18%"
      });
      
      new Waypoint({
        element: currentPageSection,
        handler: function(direction){
          if (direction == "up"){
            var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
            //remove class first to go to next link:
            that.headerLinks.removeClass("is-current-link");
            //when removed can be added again:
            $(matchingHeaderLink).addClass("is-current-link");
          }
        },
        offset: "-40%"
      });
    });
  }
  
}// end of StickyHeader class
export default StickyHeader;

