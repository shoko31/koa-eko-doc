"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RouteResult_1 = require("../../../models/RouteResult");
function RenderRouteResults(results, id) {
    let outputDisplay = "";
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
        let bagdeClass = "";
        switch (result.type) {
            case RouteResult_1.RouteResultType.Success:
                bagdeClass = "badge-success";
                break;
            case RouteResult_1.RouteResultType.Error:
                bagdeClass = "badge-danger";
                break;
            case RouteResult_1.RouteResultType.Other:
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
exports.default = RenderRouteResults;
//# sourceMappingURL=result.route-component.view.js.map