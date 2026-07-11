import { describe, it, expect } from "vitest";
import { imageHelpers } from "./image-helpers";

describe("imageHelpers", () => {
  it("formatModelId keeps only the final path segment", () => {
    expect(imageHelpers.formatModelId("fal-ai/flux/dev")).toBe("dev");
    expect(imageHelpers.formatModelId("plain-model")).toBe("plain-model");
  });

  it("generateImageFileName is provider-prefixed and url-safe", () => {
    const name = imageHelpers.generateImageFileName("fal");
    expect(name).toMatch(/^fal-[a-z0-9]+$/i);
  });

  it("base64ToBlob round-trips bytes with the given type", () => {
    const blob = imageHelpers.base64ToBlob(btoa("hello"), "image/png");
    expect(blob.type).toBe("image/png");
    expect(blob.size).toBe(5);
  });
});
