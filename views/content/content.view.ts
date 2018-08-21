import { EkoApiDoc } from "../../models/EkoApiDoc";
import RenderGroup from "./group.view";

export default function RenderContent(api: EkoApiDoc): string {
    let docBody: string = "";

    docBody += "<p class=\"lead\">" + api.description + "</p>";
    api.groups.forEach(group => {
        docBody += RenderGroup(group);
    });

    return docBody;
}
