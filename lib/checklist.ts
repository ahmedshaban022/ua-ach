export type CheckItem = {
  id: string;
  title: string;
  detail: string;
  category: "Structure" | "Interaction" | "Content" | "Resilience";
  level: "Essential" | "Recommended";
};

export const checklist: CheckItem[] = [
  {
    id: "heading-order",
    title: "Headings form a useful outline",
    detail: "Use one clear page title, then descend through heading levels without skipping context.",
    category: "Structure",
    level: "Essential",
  },
  {
    id: "landmarks",
    title: "Landmarks describe the page",
    detail: "Use header, nav, main, aside, and footer elements so assistive technology can navigate quickly.",
    category: "Structure",
    level: "Essential",
  },
  {
    id: "page-title",
    title: "The page title is specific",
    detail: "Give every route a concise title that identifies both the page and the product.",
    category: "Structure",
    level: "Recommended",
  },
  {
    id: "keyboard",
    title: "Every action works by keyboard",
    detail: "Tab through the entire flow and verify that every control can be reached and operated.",
    category: "Interaction",
    level: "Essential",
  },
  {
    id: "focus-visible",
    title: "Focus is always visible",
    detail: "Interactive elements need a high-contrast focus indicator that is not hidden by sticky content.",
    category: "Interaction",
    level: "Essential",
  },
  {
    id: "focus-order",
    title: "Focus order follows the interface",
    detail: "Keyboard navigation should follow the visual and logical reading order.",
    category: "Interaction",
    level: "Essential",
  },
  {
    id: "target-size",
    title: "Targets are comfortable to activate",
    detail: "Give pointer targets enough size and separation for users with limited dexterity.",
    category: "Interaction",
    level: "Recommended",
  },
  {
    id: "labels",
    title: "Inputs have persistent labels",
    detail: "Associate every field with a visible label; placeholder text is not a replacement.",
    category: "Content",
    level: "Essential",
  },
  {
    id: "alt-text",
    title: "Images have the right alternative",
    detail: "Describe meaningful images and use empty alt text for decorative images.",
    category: "Content",
    level: "Essential",
  },
  {
    id: "link-purpose",
    title: "Links make sense out of context",
    detail: "Replace vague labels such as “click here” with text that describes the destination.",
    category: "Content",
    level: "Recommended",
  },
  {
    id: "contrast",
    title: "Text contrast passes AA",
    detail: "Check normal text at 4.5:1 and large text at 3:1 against every background state.",
    category: "Content",
    level: "Essential",
  },
  {
    id: "errors",
    title: "Errors explain how to recover",
    detail: "Identify the affected field, explain the issue, and provide a useful correction.",
    category: "Resilience",
    level: "Essential",
  },
  {
    id: "zoom",
    title: "The layout survives 200% zoom",
    detail: "Content must remain readable and operable without two-dimensional scrolling.",
    category: "Resilience",
    level: "Essential",
  },
  {
    id: "motion",
    title: "Reduced-motion preferences are respected",
    detail: "Remove non-essential movement when prefers-reduced-motion is enabled.",
    category: "Resilience",
    level: "Recommended",
  },
  {
    id: "status",
    title: "Async updates are announced",
    detail: "Expose loading, success, and error states to assistive technology without moving focus unexpectedly.",
    category: "Resilience",
    level: "Recommended",
  },
];

export const categories = ["All", "Structure", "Interaction", "Content", "Resilience"] as const;
export type CategoryFilter = (typeof categories)[number];

