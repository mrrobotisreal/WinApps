// @vitest-environment jsdom
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  attachClient,
  drainQueue,
  trackExternalLink,
  trackFeatureUsage,
  trackPageView,
  trackProjectView,
  trackPromoClick,
  trackPromoImpression,
  trackResumeDownload,
  type AnalyticsClient,
  type EventProperties,
} from "@/lib/analytics";

const sent: Array<[string, EventProperties | undefined]> = [];
const fake: AnalyticsClient = {
  capture: (event, props) => void sent.push([event, props]),
  setPersonProperties: () => {},
};

beforeEach(() => {
  sent.length = 0;
  drainQueue();
  attachClient(null);
});
afterEach(() => attachClient(null));

describe("analytics", () => {
  it("queues events until PostHog attaches, then flushes them in order", () => {
    trackPageView("Home");
    trackProjectView("sumrak", "hero");
    expect(sent).toEqual([]);
    attachClient(fake);
    expect(sent.map(([e]) => e)).toEqual(["page_view", "project_view"]);
    expect(drainQueue()).toEqual([]);
  });

  it("keeps the dashboard event names and payload keys", () => {
    attachClient(fake);
    trackPageView("About");
    trackExternalLink("https://www.media-manipulator.com/", "Visit media-manipulator.com");
    trackResumeDownload("pdf");
    trackFeatureUsage("winny", { action: "open" });
    expect(sent.map(([e]) => e)).toEqual(["page_view", "external_link_click", "resume_download", "feature_usage"]);
    expect(sent[0][1]).toMatchObject({ page_title: "About", page_path: "/" });
    expect(sent[1][1]).toMatchObject({ link_domain: "www.media-manipulator.com", link_text: "Visit media-manipulator.com" });
    expect(sent[3][1]).toMatchObject({ feature_name: "winny", action: "open" });
    for (const [, props] of sent) expect(props?.timestamp).toBeTypeOf("string");
  });

  it("sends promo impressions and clicks with slot and product", () => {
    attachClient(fake);
    trackPromoImpression("home-top", "creatv");
    trackPromoClick("home-top", "creatv");
    expect(sent).toEqual([
      ["promo_impression", expect.objectContaining({ slot: "home-top", product: "creatv" })],
      ["promo_click", expect.objectContaining({ slot: "home-top", product: "creatv" })],
    ]);
  });
});
