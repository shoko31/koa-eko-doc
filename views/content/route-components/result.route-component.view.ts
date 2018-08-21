import { RouteResult, RouteResultType } from "../../../models/RouteResult";

export default function RenderRouteResults(results: RouteResult[], id: number): string {
    let outputDisplay: string = "";

    outputDisplay += "<div class=\"card border-info mt-3\">";
    // tslint:disable-next-line:max-line-length
    outputDisplay += "<div style=\"cursor: pointer;\" class=\"card-header\" data-toggle=\"collapse\" data-target=\"#res" + id + "\">";
    // tslint:disable-next-line:max-line-length
    outputDisplay += "<h6>Results <span class=\"badge badge-light float-right\">" + results.length + "</span></h6>";
    outputDisplay += "</div>";
    outputDisplay += "<div id=\"res" + id + "\" class=\"card-body collapse show p-0\">";

    outputDisplay += "<table class=\"table table-striped table-borderless table-hover mb-0\">";
    outputDisplay += "<thead class=\"thead-dark\">";
    outputDisplay += "<tr>";
    outputDisplay += "<th scope=\"col\">Code</td>";
    outputDisplay += "<th scope=\"col\">Name</td>";
    outputDisplay += "<th scope=\"col\">Description</td>";
    outputDisplay += "</tr>";
    outputDisplay += "</thead>";
    outputDisplay += "<tbody>";
    results.forEach(result => {
        let bagdeClass: string = "";

        switch (result.type) {
            case RouteResultType.Success:
                bagdeClass = "badge-success";
                break;
            case RouteResultType.Error:
                bagdeClass = "badge-danger";
                break;
            case RouteResultType.Other:
                bagdeClass = "badge-dark";
                break;
        }

        outputDisplay += "<tr>";
        outputDisplay += "<td><span class=\"badge " + bagdeClass + "\">" + result.code + "</span></td>";
        outputDisplay += "<td>" + result.title + "</td>";
        outputDisplay += "<td>" + (result.description === undefined ? "" : result.description) + "</td>";
        outputDisplay += "</tr>";
    });
    outputDisplay += "</tbody>";
    outputDisplay += "</table>";

    outputDisplay += "</div>";
    outputDisplay += "</div>";

    return outputDisplay;
}