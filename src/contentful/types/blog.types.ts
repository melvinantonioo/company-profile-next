import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeHeroContentFields {
    title: EntryFieldTypes.Symbol;
    slug?: EntryFieldTypes.Symbol;
    body?: EntryFieldTypes.RichText;
    image?: EntryFieldTypes.AssetLink;
}

export interface IAsset {
    sys: {id: string};
    fields: {
        file: {
            url: string;
            details?: any;
            fileName?: string;
            contentType?: string;
        }
    }
}

export type TypeHeroContentSkeleton = EntrySkeletonType<TypeHeroContentFields, "heroContent">;
export type TypeHeroContent<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeHeroContentSkeleton, Modifiers, Locales>;

export interface TypeCultureCompanyFields {
    title?: EntryFieldTypes.Symbol;
    slug?: EntryFieldTypes.Symbol;
    body?: EntryFieldTypes.RichText;
    image?: EntryFieldTypes.AssetLink;
}

export type TypeCultureCompanySkeleton = EntrySkeletonType<TypeCultureCompanyFields, "cultureCompany">;
export type TypeCultureCompany<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeCultureCompanySkeleton, Modifiers, Locales>;