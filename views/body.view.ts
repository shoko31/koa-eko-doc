import { externalIncludes, RenderScript } from "./externalIncludes";
import { EkoApiDoc } from "../models/EkoApiDoc";
import RenderNavbar from "./navbar.view";
import RenderSideNavbar from "./side-navbar/side-navbar.view";
import RenderContent from "./content/content.view";

export default function RenderBody(api: EkoApiDoc): string {
    let body: string = "";
    body += "<body style=\"padding-top: 80px\">";

    body += RenderNavbar(api.title, [api.version]);

    body += "<div class=\"container-fluid\">";
    body += "<div class=\"row flex-xl-nowrap\">";
    // tslint:disable-next-line:max-line-length
    body += "<div class=\"col-12 col-md-3 col-xl-2 bd-sidebar pr-0\" style=\"border-right: 1px solid rgba(0,0,0,.1); position: sticky; z-index: 1000; top: 80px; height: calc(100vh - 85px);\">";
    body += RenderSideNavbar(api);
    body += "</div>";
    body += "<div class=\"col-12 col-md-9 col-xl-10\" style=\"padding-top: 40px;\">";
    body += RenderContent(api);
    body += "</div>";
    body += "</div>";
    body += "</div>";

    externalIncludes.js.forEach(js => {
        body += RenderScript(js);
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
