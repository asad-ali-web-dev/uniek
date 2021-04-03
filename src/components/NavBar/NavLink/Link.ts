export class Link {
    constructor(alias: string, href: string, newTab?: boolean) {
        this.alias = alias
        this.href = href
        this.newTab = newTab
    }

    alias: string
    href: string
    newTab?: boolean
}