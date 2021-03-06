import { expect } from "chai";
import "mocha";
import { IPinfo } from "../../lib/searcher";

describe("IPinfo", () => {
  const subject = new IPinfo();

  it("should support IP & ASN type IOC", () => {
    expect(subject.supportedTypes).to.deep.equal(["ip", "asn"]);
  });

  describe("#searchByIP", () => {
    it("should return URL", () => {
      expect(subject.searchByIP("1.1.1.1")).to.equal(
        "https://ipinfo.io/1.1.1.1"
      );
    });
  });

  describe("#searchByASN", () => {
    it("should return URL", () => {
      expect(subject.searchByIP("AS13335")).to.equal(
        "https://ipinfo.io/AS13335"
      );
    });
  });
});
