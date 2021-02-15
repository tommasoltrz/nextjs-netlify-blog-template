import fs from "fs";
import yaml from "js-yaml";

export function geAboutData(): any {
  let doc: any;
  try {
    doc = yaml.load(fs.readFileSync("site/content/about.yml", "utf8"));
  } catch (e) {
    console.log(e);
  }
  return doc;
}

export function gePageData(pageName: string): any {
  let doc: any;
  try {
    doc = yaml.load(fs.readFileSync(`src/pages/files/${pageName}.yml`, "utf8"));
  } catch (e) {
    console.log(e);
  }
  return doc;
}
