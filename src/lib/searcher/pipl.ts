import { buildURL } from "../url_builder";
import { SearchableType, Searcher } from "./searcher";

export class Pipl implements Searcher {
  public endpoint: string;
  public name: string;
  public supportedTypes: SearchableType[] = ["email"];

  public constructor() {
    this.endpoint = "https://pipl.com";
    this.name = "Pipl";
  }

  public searchByEmail(query: string): string {
    return buildURL(this.endpoint, "/search/", { q: query });
  }
}
