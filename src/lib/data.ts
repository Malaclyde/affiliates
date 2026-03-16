import fs from 'fs';
import path from 'path';
import { AboutMe, Account, Product } from './types';

const pagesDir = path.join(process.cwd(), '_pages');

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
