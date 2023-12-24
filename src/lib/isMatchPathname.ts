import { usePathname } from "next/navigation";
import { match } from "path-to-regexp";

// prerequisites
// npm install path-to-regexp

// eg. patterns:
// ["/posts", "/posts/:id"]

// isMatchPathName: checks to see if any of the patterns match the current url pathname
export default function isMatchPathName(patterns: string[]): boolean {

    const pathname = usePathname();

    for (let i = 0; i < patterns.length; i++) {
        const pattern = patterns[i];
        const matcher = match(pattern);
        if (matcher(pathname)) {
            return true;
        }
    }

    return false;
}