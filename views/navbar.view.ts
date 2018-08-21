export default function RenderNavbar(title: string, versions?: string[]): string {
    let navbar: string= "";

    navbar += "<nav class=\"navbar fixed-top navbar-expand-lg navbar-dark bg-primary\">";
    navbar += "<a class=\"navbar-brand\"  href=\"#\">" + title + "</a>";
    // tslint:disable-next-line:max-line-length
    navbar += "<button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarColor01\" aria-controls=\"navbarColor01\" aria-expanded=\"false\" aria-label=\"Toggle navigation\" style=\"\">";
    navbar += "<span class=\"navbar-toggler-icon\"></span>";
    navbar += "</button>";
    navbar += "<div class=\"collapse navbar-collapse\" id=\"navbarColor01\">";
    navbar += "<div class=\"navbar-nav mr-auto\">";
    navbar += "</div>";
    navbar += "<form class=\"form-inline my-2 my-lg-0\">";
    navbar += ((versions !== null && versions !== undefined && versions.length > 0) ? versions[0] : "");
    navbar += "</form>";
    navbar += "</div>";
    navbar += "</nav>";

    return navbar;
}
