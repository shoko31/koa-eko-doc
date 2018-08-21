import { EkoApiDoc } from "../models/EkoApiDoc";
import { externalIncludes, RenderCss } from "./externalIncludes";

const doctype: string = "<!DOCTYPE html>";
const charset: string = "<meta charset=\"utf-8\">";
const ua:string = "<meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">";
const vp:string = "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">";

export default function RenderHead(api: EkoApiDoc): string {
    let head: string = "";
    head += doctype;
    head += "<head>";
    head += charset;
    head += ua;
    head += vp;
    head += "<title>" + api.title + "</title>";
    externalIncludes.css.forEach(css => {
        head += RenderCss(css);
    });
    head += "</head>";

    return head;
}
