import { IConfig } from '../interfaces';
declare global {
    interface Console {
        success(message: string, title?: string): void;
        error(message: string, title?: string): void;
        info(message: string, title?: string): void;
        warn(message: string, title?: string): void;
        debug(message: string, title?: string): void;
        setConfig(config: IConfig): void;
        getConfig(): IConfig;
    }
}
