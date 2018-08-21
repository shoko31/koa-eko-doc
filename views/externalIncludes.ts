export class ExternalFile {
    public link: string;
    public integrity?: string;
    public origin?: string;

    public constructor(init?: Partial<ExternalFile>) {
        Object.assign(this, init);
    }
}

export class ExternalLib {
    public js: ExternalFile[];
    public css: ExternalFile[];

    public constructor(init?:Partial<ExternalLib>) {
        Object.assign(this, init);
    }
}

export const externalIncludes: ExternalLib = new ExternalLib({
    css: [
        new ExternalFile({
            link: "https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css",
            integrity: "sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB",
            origin: "anonymous"
        }),
        new ExternalFile({
            link: "https://bootswatch.com/4/materia/bootstrap.min.css"
        }),
        new ExternalFile({
            link: "https://use.fontawesome.com/releases/v5.2.0/css/all.css",
            integrity: "sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ",
            origin: "anonymous"
        })
    ],
    js: [
        new ExternalFile({
            link: "https://code.jquery.com/jquery-3.3.1.min.js",
            integrity: "sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=",
            origin: "anonymous"
        }),
        new ExternalFile({
            link: "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js",
            integrity: "sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49",
            origin: "anonymous"
        }),
        new ExternalFile({
            link: "https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js",
            integrity: "sha384-smHYKdLADwkXOn1EmN1qk/HfnUcbVRZyYmZ4qpPea6sjB/pTJ0euyQp0Mk8ck+5T",
            origin: "anonymous"
        })
    ]
});

export function RenderCss(file: ExternalFile): string {
    let link: string = "<link rel=\"stylesheet\" href=\"" + file.link + "\"";
    if (file.integrity !== null && file.integrity !== undefined) {
        link += " integrity=\"" + file.integrity + "\"";
    }
    if (file.origin !== null && file.origin !== undefined) {
        link += " crossorigin=\"" + file.origin + "\"";
    }
    link += " />";
    return  link;
}

export function RenderScript(file: ExternalFile): string {
    let script: string = "<script src=\"" + file.link + "\"";
    if (file.integrity !== null && file.integrity !== undefined) {
        script += " integrity=\"" + file.integrity + "\"";
    }
    if (file.origin !== null && file.origin !== undefined) {
        script += " crossorigin=\"" + file.origin + "\"";
    }
    script += "></script>";
    return  script;
}
