export interface AboutMe {
    name: string;
    description: string;
    email: string;
    [key: string]: string; // For future contact options
}

export interface Product {
    id: string;
    url: string;
    description: string;
    name: string;
    origin: string;
    thumbnail: string;
}

export interface AccountProduct {
    id: string;
}

export interface Account {
    id: string;
    platform: string;
    name: string;
    registeredEmail: string;
    advertisedProducts: AccountProduct[];
}

export interface BlogPost {
    slug: string;
    title: string;
    description: string;
    date: string;
    author: string;
    tags: string[];
    content: string;
    relatedProducts: string[]; // Product IDs
    image?: string;
}
