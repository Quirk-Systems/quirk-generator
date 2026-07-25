import { describe, it, expect } from "vitest";
import { getRandomSuggestions } from "./suggestions";

describe("getRandomSuggestions", () => {
  it("returns the requested number of suggestions", () => {
    expect(getRandomSuggestions(3)).toHaveLength(3);
    expect(getRandomSuggestions()).toHaveLength(5);
  });

  it("appends an art style to every prompt", () => {
    for (const suggestion of getRandomSuggestions(5)) {
      expect(suggestion.prompt).toMatch(/, in the style of .+$/);
    }
  });

  it("returns unique suggestion texts", () => {
    const texts = getRandomSuggestions(5).map((s) => s.text);
    expect(new Set(texts).size).toBe(texts.length);
  });
});
