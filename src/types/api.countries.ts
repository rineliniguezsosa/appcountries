export interface CountriesTypes {
    name:         Name;
    tld?:         string[];
    cca2:         string;
    ccn3?:        string;
    cca3:         string;
    independent?: boolean;
    status:       Status;
    unMember:     boolean;
    currencies?:  Currencies;
    idd:          Idd;
    capital?:     string[];
    altSpellings: string[];
    region:       Region;
    subregion?:   string;
    languages?:   { [key: string]: string };
    translations: { [key: string]: Translation };
    latlng:       number[];
    landlocked:   boolean;
    area:         number;
    demonyms?:    Demonyms;
    flag:         string;
    maps:         Maps;
    population:   number;
    car:          Car;
    timezones:    string[];
    continents:   Continent[];
    flags:        Flags;
    coatOfArms:   CoatOfArms;
    startOfWeek:  StartOfWeek;
    capitalInfo:  CapitalInfo;
    postalCode?:  PostalCode;
    cioc?:        string;
    gini?:        { [key: string]: number };
    fifa?:        string;
    borders?:     string[];
}

export interface CapitalInfo {
    latlng?: number[];
}

export interface Car {
    signs?: string[];
    side:   Side;
}

export enum Side {
    Left = "left",
    Right = "right",
}

export interface CoatOfArms {
    png?: string;
    svg?: string;
}

export enum Continent {
    Africa = "Africa",
    Antarctica = "Antarctica",
    Asia = "Asia",
    Europe = "Europe",
    NorthAmerica = "North America",
    Oceania = "Oceania",
    SouthAmerica = "South America",
}

export interface Currencies {
    XPF?: Aed;
    ISK?: Aed;
    EUR?: Aed;
    XOF?: Aed;
    KMF?: Aed;
    AUD?: Aed;
    CAD?: Aed;
    BYN?: Aed;
    GYD?: Aed;
    GMD?: Aed;
    TND?: Aed;
    XAF?: Aed;
    RWF?: Aed;
    KHR?: Aed;
    USD?: Aed;
    KRW?: Aed;
    MUR?: Aed;
    MVR?: Aed;
    VUV?: Aed;
    MWK?: Aed;
    EGP?: Aed;
    GEL?: Aed;
    NZD?: Aed;
    CVE?: Aed;
    UYU?: Aed;
    LAK?: Aed;
    DKK?: Aed;
    FOK?: Aed;
    MKD?: Aed;
    CLP?: Aed;
    MOP?: Aed;
    JOD?: Aed;
    JMD?: Aed;
    BBD?: Aed;
    DZD?: Aed;
    MAD?: Aed;
    MRU?: Aed;
    QAR?: Aed;
    GTQ?: Aed;
    XCD?: Aed;
    PGK?: Aed;
    BRL?: Aed;
    MDL?: Aed;
    KGS?: Aed;
    ANG?: Aed;
    VND?: Aed;
    AOA?: Aed;
    MYR?: Aed;
    CHF?: Aed;
    THB?: Aed;
    DOP?: Aed;
    UZS?: Aed;
    GNF?: Aed;
    BTN?: Aed;
    INR?: Aed;
    KYD?: Aed;
    NOK?: Aed;
    ILS?: Aed;
    BND?: Aed;
    SGD?: Aed;
    IQD?: Aed;
    JPY?: Aed;
    LSL?: Aed;
    ZAR?: Aed;
    TVD?: Aed;
    SSP?: Aed;
    GBP?: Aed;
    SHP?: Aed;
    AFN?: Aed;
    SBD?: Aed;
    CNY?: Aed;
    ERN?: Aed;
    RUB?: Aed;
    AMD?: Aed;
    SRD?: Aed;
    BSD?: Aed;
    BZD?: Aed;
    JEP?: Aed;
    SEK?: Aed;
    BWP?: Aed;
    IMP?: Aed;
    AED?: Aed;
    IRR?: Aed;
    STN?: Aed;
    BDT?: Aed;
    RON?: Aed;
    SDG?: BAM;
    BAM?: BAM;
    SCR?: Aed;
    LKR?: Aed;
    MXN?: Aed;
    YER?: Aed;
    PYG?: Aed;
    VES?: Aed;
    UAH?: Aed;
    PKR?: Aed;
    KPW?: Aed;
    ZWL?: Aed;
    TZS?: Aed;
    CKD?: Aed;
    PLN?: Aed;
    WST?: Aed;
    CZK?: Aed;
    IDR?: Aed;
    BOB?: Aed;
    COP?: Aed;
    HNL?: Aed;
    LYD?: Aed;
    MNT?: Aed;
    CDF?: Aed;
    FKP?: Aed;
    SYP?: Aed;
    ZMW?: Aed;
    MMK?: Aed;
    CRC?: Aed;
    SOS?: Aed;
    HUF?: Aed;
    TRY?: Aed;
    OMR?: Aed;
    NPR?: Aed;
    MGA?: Aed;
    KZT?: Aed;
    DJF?: Aed;
    GIP?: Aed;
    GGP?: Aed;
    NAD?: Aed;
    ALL?: Aed;
    HTG?: Aed;
    TOP?: Aed;
    HKD?: Aed;
    SAR?: Aed;
    CUC?: Aed;
    CUP?: Aed;
    PAB?: Aed;
    LRD?: Aed;
    AZN?: Aed;
    KID?: Aed;
    ETB?: Aed;
    TTD?: Aed;
    SLL?: Aed;
    MZN?: Aed;
    FJD?: Aed;
    TMT?: Aed;
    TJS?: Aed;
    LBP?: Aed;
    NGN?: Aed;
    ARS?: Aed;
    BMD?: Aed;
    NIO?: Aed;
    SZL?: Aed;
    BHD?: Aed;
    KES?: Aed;
    RSD?: Aed;
    PHP?: Aed;
    KWD?: Aed;
    TWD?: Aed;
    BIF?: Aed;
    BGN?: Aed;
    PEN?: Aed;
    AWG?: Aed;
    GHS?: Aed;
    UGX?: Aed;
}

export interface Aed {
    name:   string;
    symbol: string;
}

export interface BAM {
    name: string;
}

export interface Demonyms {
    eng:  Eng;
    fra?: Eng;
}

export interface Eng {
    f: string;
    m: string;
}

export interface Flags {
    png:  string;
    svg:  string;
    alt?: string;
}

export interface Idd {
    root?:     string;
    suffixes?: string[];
}

export interface Maps {
    googleMaps:     string;
    openStreetMaps: string;
}

export interface Name {
    common:      string;
    official:    string;
    nativeName?: { [key: string]: Translation };
}

export interface Translation {
    official: string;
    common:   string;
}

export interface PostalCode {
    format: string;
    regex?: string;
}

export enum Region {
    Africa = "Africa",
    Americas = "Americas",
    Antarctic = "Antarctic",
    Asia = "Asia",
    Europe = "Europe",
    Oceania = "Oceania",
}

export enum StartOfWeek {
    Monday = "monday",
    Saturday = "saturday",
    Sunday = "sunday",
}

export enum Status {
    OfficiallyAssigned = "officially-assigned",
    UserAssigned = "user-assigned",
}
