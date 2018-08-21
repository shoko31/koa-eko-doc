import { EkoApiDoc } from "../../models/EkoApiDoc";
import RenderSideNavbarGroup from "./side-navbar-group.view";

export default function RenderSideNavbar(api: EkoApiDoc): string {
    let docNav: string = "";

    // tslint:disable-next-line:max-line-length
    docNav += "<nav class=\"sidebar bd-links\" id=\"bd-docs-nav\" style=\"padding-top: 40px; max-height: calc(100vh - 85px); overflow-y: auto; display: block!important;\">";
    api.groups.forEach(group => {
        docNav += RenderSideNavbarGroup(group);
    });
    docNav += "</nav>";

    return docNav;
}
