import fs from 'fs';
import path from 'path';
import { AboutMe, Account, Product, BlogPost } from './types';

const pagesDir = path.join(process.cwd(), '_pages');
const blogDir = path.join(pagesDir, 'blog');

export function getAboutMe(): AboutMe {
    const filePath = path.join(pagesDir, 'about-me.json');
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

export function getProducts(): Product[] {
    const filePath = path.join(pagesDir, 'products.json');
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

export function getAccounts(): Account[] {
    const filePath = path.join(pagesDir, 'accounts.json');
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

export function getProductById(id: string): Product | undefined {
    return getProducts().find(p => p.id === id);
}

export function getAccountById(id: string): Account | undefined {
    return getAccounts().find(a => a.id === id);
}

export function getBlogPosts(): BlogPost[] {
    if (!fs.existsSync(blogDir)) return [];
    const files = fs.readdirSync(blogDir).filter(f => f.endsWith('.json'));
    return files
        .map(f => JSON.parse(fs.readFileSync(path.join(blogDir, f), 'utf8')))
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
    return getBlogPosts().find(p => p.slug === slug);
}

export function getBlogPostsByTag(tag: string): BlogPost[] {
    return getBlogPosts().filter(p => p.tags.includes(tag));
}
