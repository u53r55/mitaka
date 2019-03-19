import { buildURL } from "../url_builder";
import { SearchableType, Searcher } from "./searcher";

export class ONYPHE implements Searcher {
  public endpoint: string;
  public name: string;
  public supportedTypes: SearchableType[] = ["ip"];

  constructor() {
    this.endpoint = "https://www.onyphe.io";
    this.name = "ONYPHE";
  }

  public searchByIP(query: string) {
    return buildURL(this.endpoint, `/ip/${query}`);
  }
}
