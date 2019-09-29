// @ts-ignore
import PluralRules from 'intl-pluralrules/plural-rules'

export enum PluralType {
    ZERO = "zero",
    ONE = "one",
    TWO = "two",
    FEW = "few",
    MANY = "many",
    OTHER = "other",
}

export default function getPluralType(locales: string | string[] | PluralRules, number: number): PluralType {
    return (typeof locales === "string" || Array.isArray(locales) ? new PluralRules(locales) : locales).select(number) as PluralType
}

export function getDefaultEnPlural(locales: string | string[] | PluralRules, number: number, one: string, many: string) {
    switch(getPluralType(locales, number)) {
        case PluralType.ZERO:
        case PluralType.ONE:
            return one
        case PluralType.TWO:
        case PluralType.FEW:
        case PluralType.MANY:
        case PluralType.OTHER:
            return many
    }
}

export function getDefaultRuPlural(locales: string | string[] | PluralRules, number: number, one: string, few: string, many: string) {
    switch(getPluralType(locales, number)) {
        case PluralType.ZERO:
        case PluralType.MANY:
        case PluralType.OTHER:
            return many
        case PluralType.ONE:
            return one
        case PluralType.TWO:
        case PluralType.FEW:
            return few
    }
}