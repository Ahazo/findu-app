import { IBundle } from "../../components/Bundle";

export interface IUserData {
	id: string;
	username: string;
	description: string | null;
	follower_count: number;
	following_count: number;
	person: {
		first_name: string;
		last_name: string;
	}
	freelancer?: {
		areas: string[];
		skills: string[];
		title: string;
		bundles: IBundle[];
	} | null;
	activities: string[];
}