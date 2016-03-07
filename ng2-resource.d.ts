import { Http, Response } from 'angular2/http';
import { Observable } from 'rxjs/Observable';
export interface Return {
    $promise: Promise<any>;
    $observables: Observable<Response>;
}
export declare class RestProvider {
    private _http;
    protected url: string;
    protected params: Object;
    protected methods: Object;
    private _request;
    constructor(_http: Http);
    private buildParams(data);
    private buildUrl(data?);
    private createRequest(type, data?);
    sendResponse(): Return;
    query(data?: Object): Return;
    save(data?: Object): Return;
    update(data?: Object): Return;
    delete(data?: Object): Return;
}
