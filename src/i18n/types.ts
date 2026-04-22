import type { Lang } from "@/types/common";

export type TranslationEntry = Record<Lang, string>;
export type TranslationDictionary = Record<string, TranslationEntry>;
