import fs from "fs";
import yaml from "js-yaml";

export function geAboutData(): any {
  let doc: any;
  try {
    doc = yaml.load(fs.readFileSync("site/content/about.yml", "utf8"));
    console.log(doc);
  } catch (e) {
    console.log(e);
  }

  return doc;
}
