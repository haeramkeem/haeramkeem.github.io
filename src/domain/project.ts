export default interface Project {
    metadata: {
        name: string,
        label: string,
    };
    spec: {
        description: {
            short: string,
            full: string,
        },
        bannerImage: string,
        gitRepository: string,
        date: {
            from: string,
            to: string,
        },
        detail: {
            images: string[],
        },
    };
    status: {
        enum: string,
    };
}
