import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
	private username:string;
	private client_id = 'dd0713c952075de22286';
	private client_secret = 'ca2f005e713ebb017647e9d62861c95cdb2e459d';

	constructor(private _http: Http){
			console.log('Github Service Ready...');
			this.username = 'pannujoe';
	}
	getUser(){
		return this._http.get('https://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret).map(res => res.json());
	}
		getRepos(){
		return this._http.get('https://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret).map(res => res.json());
	}

	updateUser(username:string){
		this.username = username;
	}

}