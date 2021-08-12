

type ClientOptions = {
    env?: string;
    emulator?: {
        port?: number;
        host?: string;
        url?: string;
    },
    engine?: {
        url?: string;
    }
}
type EngineConfig = {
    env?: string;
    accessKey?: string;
    emulator?: {
        port?: number;
        host?: string;
        url?: string;
    },
    engine?: {
        url?: string;
    }
    bid?: string;
    sbu?: string;
}


declare class Warper {
    warp: {
        internal: {
            getEngineConfig(): EngineConfig;
            version: string;
        };
        ping(): void;
    };
    constructor(clientOptions?: ClientOptions);
}

export default Warper;
