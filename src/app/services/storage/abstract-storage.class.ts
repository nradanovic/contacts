export abstract class AbstractStorage {
	readonly length: number;
	public abstract clear(): void;
	public abstract getItem(key: string): string | null;
	public abstract key(index: number): string | null;
	public abstract removeItem(key: string): void;
	public abstract setItem(key: string, data: string): void;
}
