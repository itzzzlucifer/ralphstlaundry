export type ReactNode = import("react").ReactNode;

export interface Service {
    num: string;
    slug: string;
    title: string;
    desc: string;
    icon: ReactNode;
    inclusions: string[];
    detail: string;
}

export interface Feature {
    title: string;
    desc: string;
}

export interface ProcessStep {
    num: string;
    title: string;
    desc: string;
}

export interface Stat {
    value: string;
    suffix: string;
    label: string;
}

export interface GalleryItem {
    id: number;
    aspect: "landscape" | "portrait";
    caption: string;
    dataSrc: string;
}
