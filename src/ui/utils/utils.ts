import { IResumeItem } from "./type";

export class ResumeItem extends HTMLElement implements IResumeItem{
    constructor(){
        super();
    }
    create() {}
}


export default class Utils {
    templateContent: string;
    constructor(templateContent: string) {
        this.templateContent = templateContent;
    }

    static replaceTokens(str: string, replaceWith:string) {
        let replaceDoubleBraces = (str:string, result:string) => {
            return str.replace(/{{(.+?)}}/g, (_, g1) => result[g1] || g1)
        }
        const replacedStr = replaceDoubleBraces(str, replaceWith);
        return replacedStr;
    }
}
