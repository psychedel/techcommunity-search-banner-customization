import { apiInitializer } from "discourse/lib/api";
import discourseComputed, { observes } from "discourse-common/utils/decorators";

export default apiInitializer("0.8", (api) => {
    api.modifyClass('component:search-banner', {
        @discourseComputed("router.currentRouteName")
        displayForRoute(currentRouteName) {
          var url = window.location.pathname;
          if (url === "/" ) {
              document.querySelector("html").classList.add("home-search-banner");
          }
          else {
              document.querySelector("html").classList.remove("home-search-banner");
          }
          return this._super(...arguments);
        }
    });

    api.onPageChange((url) => {
        // Check if we're on the homepage add the "home-search-banner" css class to html tag
        if (url != "/" ){
            document.querySelector("html").classList.remove("home-search-banner");
        }
    });
});
