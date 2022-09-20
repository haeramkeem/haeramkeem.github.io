export default interface Project {
    metadata: {
        name: string,
        label: string,
        urlEscape: string,
    };
    spec: {
        description: {
            short: string,
            full: string,
        },
        images: {
            banner: string,
            additional: string[],
        },
        urls: {
            gitRepository: string,
            additional: string[],
        }
        date: {
            from: string,
            to: string,
        },
    };
    status: {
        enum: string,
    };
}
