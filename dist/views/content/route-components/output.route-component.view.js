"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("util");
function RenderRouteOutput(output) {
    let outputDisplay = "";
    outputDisplay += "<div class=\"card border-success mt-3\">";
    // tslint:disable-next-line:max-line-length
    outputDisplay += "<div style=\"cursor: pointer;\" class=\"card-header\" data-toggle=\"collapse\" data-target=\"#o" + output.id + "\">";
    // tslint:disable-next-line:max-line-length
    outputDisplay += "<h6>Output" + (output.name === undefined ? "" : ": " + output.name) + "<span class=\"badge badge-info float-right\">" + output.type + "</span></h6>";
    outputDisplay += "</div>";
    outputDisplay += "<div id=\"o" + output.id + "\" class=\"card-body collapse show p-0\">";
    outputDisplay += "<table class=\"table table-striped table-borderless table-hover mb-0\">";
    outputDisplay += "<thead class=\"thead-dark\">";
    outputDisplay += "<tr>";
    outputDisplay += "<th scope=\"col\">Name</td>";
    outputDisplay += "<th scope=\"col\">Type</td>";
    outputDisplay += "<th scope=\"col\">Can be null ?</td>";
    outputDisplay += "<th scope=\"col\">Description</td>";
    outputDisplay += "</tr>";
    outputDisplay += "</thead>";
    outputDisplay += "<tbody>";
    if (!util_1.isNullOrUndefined(output.params)) {
        output.params.forEach(param => {
            outputDisplay += "<tr>";
            outputDisplay += "<td>" + param.name + "</td>";
            outputDisplay += "<td>" + param.type + "</td>";
            outputDisplay += "<td>" + (param.allowNull ? "<i class=\"fas fa-check\"></i>" : "") + "</td>";
            outputDisplay += "<td>" + (param.description === undefined ? "" : param.description) + "</td>";
            outputDisplay += "</tr>";
        });
    }
    outputDisplay += "</tbody>";
    outputDisplay += "</table>";
    outputDisplay += "</div>";
    outputDisplay += "</div>";
    return outputDisplay;
}
exports.default = RenderRouteOutput;
//# sourceMappingURL=output.route-component.view.js.map