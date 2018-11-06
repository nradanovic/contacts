export interface IPhones {
	number: string;
	label: string;
}

export class Contact {
	private id: number;
	private firstName?: string;
	private lastName?: string;
	private photo: Blob;
	private email: string;
	private favorite: boolean;
	private image: string;
	private phones: IPhones[] = [];

	constructor() {
		this.id = Math.floor(Math.random() * 100000) + 1;
	}

	public get ID() {
		return this.id;
	}

	public get FirstName() {
		return this.firstName;
	}

	public set FirstName(name: string) {
		this.firstName = name;
	}
	public get LastName() {
		return this.lastName;
	}

	public set LastName(lastName: string) {
		this.lastName = lastName;
	}
	public get Photo() {
		return this.photo;
	}

	public set Photo(photo: Blob) {
		this.photo = photo;
	}
	public get Email() {
		return this.email;
	}

	public set Email(email: string) {
		this.email = email;
	}
	public get Favorite() {
		return this.favorite;
	}

	public set Favorite(favorite: boolean) {
		this.favorite = favorite;
	}

	public get FullName() {
		return this.FirstName + ' ' + this.LastName;
	}
	public set FullName(s) {
		this.FirstName = s;
	}

	public get Phones() {
		return this.phones;
	}
	public set Phones(s) {
		this.phones = s;
	}

	public get Image() {
		return this.image;
	}

	public set Image(image: string) {
		this.image = image;
	}
}
