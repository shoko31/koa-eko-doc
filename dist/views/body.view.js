"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const externalIncludes_1 = require("./externalIncludes");
const navbar_view_1 = require("./navbar.view");
const side_navbar_view_1 = require("./side-navbar/side-navbar.view");
const content_view_1 = require("./content/content.view");
function RenderBody(api) {
    let body = "";
    body += "<body style=\"padding-top: 80px\">";
    body += navbar_view_1.default(api.title, [api.version]);
    body += "<div class=\"container-fluid\">";
    body += "<div class=\"row flex-xl-nowrap\">";
    // tslint:disable-next-line:max-line-length
    body += "<div class=\"col-12 col-md-3 col-xl-2 bd-sidebar pr-0\" style=\"border-right: 1px solid rgba(0,0,0,.1); position: sticky; z-index: 1000; top: 80px; height: calc(100vh - 85px);\">";
    body += side_navbar_view_1.default(api);
    body += "</div>";
    body += "<div class=\"col-12 col-md-9 col-xl-10\" style=\"padding-top: 40px;\">";
    body += content_view_1.default(api);
    body += "</div>";
    body += "</div>";
    body += "</div>";
    externalIncludes_1.externalIncludes.js.forEach(js => {
        body += externalIncludes_1.RenderScript(js);
    });
    body += `<script type="text/javascript">
    (function($) {
    $('.anchor-link').click(function(){
        console.log('MDR');
        var divId = $(this).attr('href');
         $('html, body').animate({
          scrollTop: $(divId).offset().top - 85
        }, 100);
      });
    })(jQuery);</script>`;
    body += "</body>";
    return body;
}
exports.default = RenderBody;
//# sourceMappingURL=body.view.js.map