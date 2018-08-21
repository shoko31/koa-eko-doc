import { RouteBody } from "../../../models/RouteBody";

export default function RenderRouteBody(body: RouteBody): string {
    let bodyDisplay: string = "";

    bodyDisplay += "<div class=\"card mt-3\">";
    bodyDisplay += "<div style=\"cursor: pointer;\" class=\"card-header\" data-toggle=\"collapse\" data-target=\"#b" + body.id + "\">";
    // tslint:disable-next-line:max-line-length
    bodyDisplay += "<h6>Body" + (body.name === undefined ? "" : ": " + body.name) + "<span class=\"badge badge-info float-right\">" + body.type + "</span></h6>";
    bodyDisplay += "</div>";
    bodyDisplay += "<div id=\"b" + body.id + "\" class=\"card-body collapse show p-0\">";

    bodyDisplay += "<table class=\"table table-striped table-borderless table-hover mb-0\">";
    bodyDisplay += "<thead class=\"thead-dark\">";
    bodyDisplay += "<tr>";
    bodyDisplay += "<th scope=\"col\">Name</td>";
    bodyDisplay += "<th scope=\"col\">Type</td>";
    bodyDisplay += "<th scope=\"col\">Description</td>";
    bodyDisplay += "<th scope=\"col\">Exemple</td>";
    bodyDisplay += "</tr>";
    bodyDisplay += "</thead>";
    bodyDisplay += "<tbody>";
    body.params.forEach(param => {
        bodyDisplay += "<tr>";
        bodyDisplay += "<td>" + param.name + "</td>";
        bodyDisplay += "<td>" + param.type + "</td>";
        bodyDisplay += "<td>" + (param.description === undefined ? "" : param.description) + "</td>";
        bodyDisplay += "<td>" + (param.exemple === undefined ? "" : param.exemple) + "</td>";
        bodyDisplay += "</tr>";
    });
    bodyDisplay += "</tbody>";
    bodyDisplay += "</table>";

    bodyDisplay += "</div>";
    bodyDisplay += "</div>";

    return bodyDisplay;
}