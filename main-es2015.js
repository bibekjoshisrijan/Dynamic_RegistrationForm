(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/admin.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/admin.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <table>\n    <thead>\n      <tr>\n        <th>Name</th>\n        <th>Date</th>\n        <th>Category</th>\n\n      </tr>\n    </thead>\n  </table>\n  <table>\n    <thead>\n\n      <tr>\n        <th></th>\n        <th></th>\n        <th></th>\n      </tr>\n    </thead>\n\n    <tbody>\n      <tr>\n        <mat-accordion>\n          <mat-expansion-panel *ngFor=\"let data of userdata ; let i=index\" [attr.id]=\"'Location' + i\">\n            <mat-expansion-panel-header *ngIf=\"data['category'] !=='0';else other\">\n\n\n              <mat-panel-title>\n                {{data['name'] | titlecase}}\n              </mat-panel-title>\n              <mat-panel-title>\n                {{data['date']|date}}\n              </mat-panel-title>\n              <mat-panel-title>\n                {{categories[data['category']]}}\n              </mat-panel-title>\n\n\n            <!-- <mat-panel-title>\n              \n                <p style=\"margin: 0\" class=\"btn btn-primary\">Accept</p>\n\n\n              </mat-panel-title> \n              <mat-panel-title (click)=\"removePanel(i)\">\n                  <p style=\"margin: 0\" class=\"btn btn-danger\">Reject</p>\n              </mat-panel-title> -->\n\n            </mat-expansion-panel-header>\n\n            <ng-template #other>\n              <mat-expansion-panel-header>\n                <mat-panel-title>\n                  {{data['name']['first_name'] + ' '+ data['name']['last_name'] | titlecase}}\n                </mat-panel-title>\n                <mat-panel-title>\n                  {{data['date']|date}}\n                </mat-panel-title>\n                <mat-panel-title>\n                  {{categories[data['category']]}}\n                </mat-panel-title>\n\n                <!-- <mat-panel-title  (click)=\"Accepted(i)\">\n                    <p style=\"margin: 0\" class=\"btn btn-primary\">Accept</p>\n                </mat-panel-title>\n\n                <mat-panel-title  (click)=\"removePanel(i)\">\n                    <p style=\"margin: 0\" class=\"btn btn-danger\">Reject</p>\n                </mat-panel-title> -->\n      \n\n              </mat-expansion-panel-header>\n            </ng-template>\n\n\n            <app-otherexpander [userdata]=\"data\" *ngIf=\"data['category'] !=='0' ;else bexpander\"></app-otherexpander>\n            <ng-template #bexpander>\n              <app-bexpander [userdata]=\"data\"></app-bexpander>\n            </ng-template>\n\n\n            <div class=\"row\">\n              <div class=\"col-sm-4 offset-md-10\">\n                <button class=\"btn  btn-primary\" type=\"submit\" name=\"action\">Accept\n                </button>\n\n                <button\n                 class=\"btn  btn-danger\" style=\"margin-left: 2%;\"\n                  (click)=\"removePanel(i)\" type=\"submit\" name=\"action\">Reject\n                </button>\n              </div>\n            </div>\n            <!-- <div class=\"row\">\n\n  \n                <button class=\"btn-primary\" >Accept</button>\n                <button  class=\"btn-danger\" (click)=\"removePanel(i)\" >Reject</button>\n    \n            </div> -->\n            \n\n          </mat-expansion-panel>\n          <!-- <mat-expansion-panel (opened)=\"panelOpenState = true\" (closed)=\"panelOpenState = false\">\n                <mat-expansion-panel-header>\n                  <mat-panel-title>\n                    Self aware panel\n                  </mat-panel-title>\n                  <mat-panel-description>\n                    Currently I am {{panelOpenState ? 'open' : 'closed'}}\n                  </mat-panel-description>\n                </mat-expansion-panel-header>\n                <p>I'm visible because I am open</p>\n              </mat-expansion-panel> -->\n        </mat-accordion>\n      </tr>\n    </tbody>\n  </table>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/beekeeper/beekeeper.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/beekeeper/beekeeper.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"beekeeper\" (ngSubmit)=\"onSubmit()\">\n    <div formGroupName=\"name\">\n        <div class=\"form-group\">\n            <label for=\"first_name\">First Name</label>\n            <input class=\"form-control\" id=\"first_name\" name=\"first_name\" formControlName=\"first_name\" type=\"text\">\n            <!-- <input type=\"text\" class=\"form-control\" id=\"firstName\" /> -->\n            <div class=\"invalid\" *ngIf=\"first_name.errors && (first_name.dirty || first_name.touched)\">\n                <p *ngIf=\"first_name.errors.required\">First Name is required</p>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"last_name\">Last Name</label>\n            <input id=\"last_name\" name=\"last_name\" formControlName=\"last_name\" type=\"text\" class=\"form-control\">\n            <div class=\"red-text test-darken-2\" *ngIf=\"last_name.errors && (last_name.dirty || last_name.touched)\">\n                <p *ngIf=\"last_name.errors.required\">Last Name is required</p>\n            </div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <input type=\"text\" formControlName=\"address\" id=\"address\" class=\"form-control\">\n        <label for=\"address\">Address</label>\n        <div class=\"red-text test-darken-2\" *ngIf=\"address.errors && (address.dirty || address.touched)\">\n            <p *ngIf=\"address.errors.required\">Address is required</p>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <input type=\"text\" formControlName=\"state\" id=\"state\" class=\"form-control\">\n        <label for=\"state\">State</label>\n        <div class=\"red-text test-darken-2\" *ngIf=\"state.errors && (state.dirty || state.touched)\">\n            <p *ngIf=\"state.errors.required\">State is required</p>\n        </div>\n    </div>\n\n    <div class=\"form-group\">\n        <input formControlName=\"city\" type=\"text\" id=\"city\" class=\"form-control\">\n        <label for=\"city\">City</label>\n        <div class=\"red-text test-darken-2\" *ngIf=\"city.errors && (state.dirty || state.touched)\">\n            <p *ngIf=\"city.errors.required\">City is required</p>\n        </div>\n    </div>\n\n    <div class=\"form-group\">\n        <input type=\"text\" id=\"colony\" formControlName=\"colony\" class=\"form-control\">\n        <label for=\"colony\">Colony</label>\n        <div class=\"red-text test-darken-2\" *ngIf=\"colony.errors && (colony.dirty || colony.touched)\">\n            <p *ngIf=\"colony.errors.required\">Colony is required</p>\n        </div>\n    </div>\n\n    <div class=\"form-group\">\n        <mat-radio-group aria-label=\"Select an option\" [(ngModel)]=\"migrate\" [ngModelOptions]=\"{standalone: true}\">\n            <mat-label id=\"mat-lable\">Do you Migrate ?</mat-label>\n            <mat-radio-button value=\"1\">Yes</mat-radio-button>\n            <mat-radio-button value=\"0\">No</mat-radio-button>\n        </mat-radio-group>\n    </div>\n\n\n\n    <div class=\"form-group\" *ngIf=\"migrate==='1' \">\n        <table style=\" border-collapse: separate;border-spacing: 1em;\">\n            <thead>\n\n                <tr>\n                    <td style=\"text-align: center\">State</td>\n                    <td style=\"text-align: center\">Crop</td>\n                </tr>\n            </thead>\n\n            <tbody>\n                <tr *ngFor=\"let field of fields;let i=index;let first = first;\">\n                    <td>\n                        <!-- <div class=\"input-field col s4\"> -->\n                        <input type=\"text\" id=\"state\" placeholder=\"Enter City\" class=\"form-control\" name=\"state\"\n                            [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"field['state']\">\n                        <!-- </div> -->\n                    </td>\n\n                    <td>\n                        <!-- <div class=\"input-field col s4\"> -->\n                        <input type=\"text\" id=\"crop\" placeholder=\"Enter Crop\" class=\"form-control\" name=\"crop\"\n                            [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"field['crop']\">\n                        <!-- </div> -->\n                    </td>\n\n                    <td>\n\n                        <!-- <a class=\"btn-floating btn-large waves-effect waves-light red  btn-small\"\n                            (click)=\"removeFields()\">\n                            <i class=\"material-icons\">remove</i>\n                        </a> -->\n\n                        <span *ngIf=\"!first\" class=\"icon-input-btn\">\n                            <span class=\"glyphicon glyphicon-search\">\n                            </span>\n                            <input type=\"submit\" class=\"btn btn-danger btn-sm\" value=\"Remove Fields\"\n                                (click)=\"removeFields()\">\n                        </span>\n                    </td>\n                </tr>\n\n            </tbody>\n            <!-- <div style=\"padding: 2rem 0;\">\n            <a class=\"btn btn-primary\" (click)=\"addFields()\">\n                <i class=\"material-icons\">add</i>\n            </a>\n        </div> -->\n            <span class=\"icon-input-btn\">\n                <span class=\"glyphicon glyphicon-search\">\n                </span>\n                <input type=\"submit\" class=\"btn btn-primary btn-sm\" value=\"Add Fields\" (click)=\"addFields()\">\n            </span>\n\n        </table>\n\n    </div>\n\n    <div class=\"form-group\">\n        <input id=\"aadhar\" type=\"text\" class=\"form-control\" formControlName=\"aadhar_number\">\n        <label for=\"aadhar\">Aadhar Number</label>\n        <div class=\"red-text test-darken-2\"\n            *ngIf=\"aadhar_number.errors && (aadhar_number.dirty || aadhar_number.touched)\">\n            <p *ngIf=\"aadhar_number.errors.required\">Aadhar is required</p>\n            <p *ngIf=\" aadhar_number.errors.minlength\">Enter 16 Digit Aadhar Number</p>\n            <p *ngIf=\"aadhar_number.errors.pattern\">Please Enter Digit Only</p>\n        </div>\n    </div>\n\n    <div class=\"form-group\">\n        <input id=\"quantity\" type=\"text\" class=\"form-control\" formControlName=\"quantity\">\n        <label for=\"quantity\">Quantity of Honey Produced Last year.</label>\n        <div class=\"red-text test-darken-2\" *ngIf=\"quantity.errors && (quantity.dirty || quantity.touched)\">\n            <p *ngIf=\"quantity.errors.required\">Quantity is required</p>\n        </div>\n    </div>\n\n    <div class=\"form-group\">\n        <input type=\"text\" formControlName=\"amount\" class=\"form-control\" readonly>\n        <label for=\"amount\">Amount</label>\n        <div class=\"red-text test-darken-2\" *ngIf=\"amount.errors && (amount.dirty || amount.touched)\">\n            <p *ngIf=\"amount.errors.required\">Amount is required</p>\n        </div>\n    </div>\n\n    <div class=\"form-group\">\n        <input type=\"text\" class=\"form-control\" formControlName=\"demand_draft\">\n        <label for=\"dd\">Demand Draft Number</label>\n        <div class=\"red-text test-darken-2\" *ngIf=\"demand_draft.errors && (demand_draft.dirty || demand_draft.touched)\">\n            <p *ngIf=\"demand_draft.errors.required\">Demand Draft is required</p>\n        </div>\n    </div>\n    <!-- \n    <div class=\"custom-file\">\n        <input type=\"file\" class=\"custom-file-input\" id=\"customFile\">\n        <label class=\"custom-file-label\" for=\"customFile\">Upload Aadhar</label>\n    </div> -->\n\n\n    <div class=\"form-group\">\n        <label>Aadhar</label>\n        <div class=\"custom-file reg-upload\">\n            <input type=\"file\" class=\"custom-file-input\" id=\"customFile\" (change)=\"aadharUpload($event)\" />\n            <label id=\"aadhar_upload\" class=\"custom-file-label\" for=\"customFile\">Upload Aadhar</label>\n        </div>\n    </div>\n\n    <div class=\"form-group\">\n        <label>Passport Size Photo</label>\n        <div class=\"custom-file reg-upload\">\n            <input type=\"file\" class=\"custom-file-input\" id=\"customFile\" (change)=\"photoUpload($event)\" />\n            <label id=\"photo_upload\" class=\"custom-file-label\" for=\"customFile\">Upload Photo</label>\n\n        </div>\n    </div>\n\n\n\n    <div style=\"padding: 2rem 0;\">\n        <button type=\"submit\" name=\"action\" data-toggle=\"modal\" data-target=\"#myModal\" [disabled]=\"beekeeper.invalid\"\n            class=\"btn btn-primary\">\n            Submit\n        </button>\n\n        <!-- The Modal -->\n        <div class=\"modal fade\" id=\"myModal\">\n            <div class=\"modal-dialog\">\n                <div class=\"modal-content\">\n                    <!-- Modal Header -->\n                    <div class=\"modal-header\">\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">\n                            &times;\n                        </button>\n                    </div>\n\n                    <!-- Modal body -->\n                    <div class=\"modal-body\" style=\"text-align: center\">\n                        <i class=\"fa fa-check-circle\" style=\"color: green; font-size: 5rem; text-align: center\"\n                            aria-hidden=\"true\"></i>\n                        <div>Successfully Registered</div>\n                        <div>Your Unique ID is {{uuid}}.</div>\n                    </div>\n\n                    <!-- Modal footer -->\n                    <div class=\"modal-footer\">\n                        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"to_home()\">\n                            Close\n                        </button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</form>\n\n<!-- <form [formGroup]=\"beekeeper\" (ngSubmit)=\"onSubmit()\" enctype=\"multipart/form-data\" >\n<div class=\"row\">\n    <div formGroupName=\"name\">\n            <div class=\"input-field col s6\">\n                    <input id=\"first_name\" name=\"first_name\"\n                    formControlName=\"first_name\" type=\"text\" class=\"validate\" >\n                    <label for=\"first_name\">First Name</label>\n            \n                    <div class=\"red-text test-darken-2\"\n                    *ngIf=\"first_name.errors && (first_name.dirty || first_name.touched)\">\n                 <p *ngIf=\"first_name.errors.required\">First Name is required</p>\n                </div>\n                </div>\n               \n                <div class=\"input-field col s6\">\n                    <input id=\"last_name\" name=\"last_name\" \n                    formControlName=\"last_name\" type=\"text\" class=\"validate\">\n                    <label for=\"last_name\">Last Name</label>\n                    <div class=\"red-text test-darken-2\"\n                    *ngIf=\"last_name.errors && (last_name.dirty || last_name.touched)\">\n                 <p *ngIf=\"last_name.errors.required\">Last Name is required</p>\n                </div>\n                </div>\n            </div>\n    \n</div>\n\n<div class=\"row\">\n    <div class=\"input-field col s4\">\n        <input type=\"text\"\n        formControlName=\"address\" id=\"address\" class=\"validate\">\n        <label for=\"address\">Address</label>\n        <div class=\"red-text test-darken-2\"\n        *ngIf=\"address.errors && (address.dirty || address.touched)\">\n     <p *ngIf=\"address.errors.required\">Address is required</p>\n    </div>\n    </div>\n    <div class=\"input-field col s4\">\n        <input type=\"text\" \n        formControlName=\"state\" id=\"state\" class=\"validate\">\n        <label for=\"state\">State</label>\n        <div class=\"red-text test-darken-2\"\n        *ngIf=\"state.errors && (state.dirty || state.touched)\">\n     <p *ngIf=\"state.errors.required\">State is required</p>\n    </div>\n    </div>\n    <div class=\"input-field col s4\">\n        <input formControlName=\"city\" type=\"text\" id=\"city\" class=\"validate\">\n        <label for=\"city\">City</label>\n        <div class=\"red-text test-darken-2\"\n        *ngIf=\"city.errors && (state.dirty || state.touched)\">\n     <p *ngIf=\"city.errors.required\">City is required</p>\n    </div>\n    </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"input-field col s4\">\n        <input type=\"text\" id=\"colony\" formControlName=\"colony\" class=\"validate\">\n        <label for=\"colony\">Colony</label>\n        <div class=\"red-text test-darken-2\"\n        *ngIf=\"colony.errors && (colony.dirty || colony.touched)\">\n     <p *ngIf=\"colony.errors.required\">Colony is required</p>\n    </div>\n    </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"input-field col-s12\">\n        <mat-radio-group aria-label=\"Select an option\" [(ngModel)]=\"migrate\" \n        [ngModelOptions]=\"{standalone: true}\" >\n            <mat-label id=\"mat-lable\">Do you Migrate ?</mat-label>\n            <mat-radio-button value=\"1\">Yes</mat-radio-button>\n            <mat-radio-button value=\"0\">No</mat-radio-button>\n        </mat-radio-group>\n    </div>\n</div>\n\n\n<div class=\"row\" *ngIf=\"migrate==='1' \">\n    <table>\n        <thead>\n            \n            <tr>\n                <th>State</th>\n                <th>Crop</th>\n            </tr>\n        </thead>\n\n        <tbody>\n            <tr *ngFor=\"let field of fields;let i=index\">\n                <td>\n                    <div class=\"input-field col s4\">\n                        <input type=\"text\" id=\"state\" \n                        placeholder=\"Enter City\"\n                        class=\"validate\" name=\"state\" \n                        [ngModelOptions]=\"{standalone: true}\"\n                         [(ngModel)]=\"field['state']\">\n                    </div>\n                </td>\n                <td>\n                    <div class=\"input-field col s4\">\n                        <input type=\"text\" id=\"crop\" \n                        placeholder=\"Enter Crop\"\n\n                        class=\"validate\" name=\"crop\"\n                        [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"field['crop']\">\n                    </div>\n                </td>\n            </tr>\n\n        </tbody>\n        <a class=\"btn-floating btn-large waves-effect waves-light red  btn-small\" (click)=\"addFields()\">\n            <i class=\"material-icons\">add</i>\n        </a>\n\n        <a class=\"btn-floating btn-large waves-effect waves-light red  btn-small\" (click)=\"removeFields()\">\n            <i class=\"material-icons\">remove</i>\n        </a>\n\n    </table>\n\n</div>\n\n<div class=\"row\">\n    <div class=\"input-field col s6\">\n        <input id=\"aadhar\" type=\"text\" class=\"validate\" formControlName=\"aadhar_number\">\n        <label for=\"aadhar\">Aadhar Number</label>\n        <div class=\"red-text test-darken-2\"\n        *ngIf=\"aadhar_number.errors && (aadhar_number.dirty || aadhar_number.touched)\">\n     <p *ngIf=\"aadhar_number.errors.required\">Aadhar is required</p>\n     <p *ngIf=\" aadhar_number.errors.minlength\">Enter 16 Digit Aadhar Number</p>\n     <p *ngIf=\"aadhar_number.errors.pattern\">Please Enter Digit Only</p>\n    </div>\n    </div>\n    <div class=\"input-field col s6\">\n            <input id=\"quantity\" type=\"text\" class=\"validate\" formControlName=\"quantity\">\n            <label for=\"quantity\">Quantity of Honey Produced Last year.</label>\n            <div class=\"red-text test-darken-2\"\n            *ngIf=\"quantity.errors && (quantity.dirty || quantity.touched)\">\n         <p *ngIf=\"quantity.errors.required\">Quantity is required</p>\n        </div>\n        </div>\n\n\n      <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <input type=\"text\" formControlName=\"amount\" readonly>\n              <label for=\"amount\">Amount</label>\n              <div class=\"red-text test-darken-2\"\n              *ngIf=\"amount.errors && (amount.dirty || amount.touched)\">\n           <p *ngIf=\"amount.errors.required\">Amount is required</p>\n          </div>\n            </div>\n            <div class=\"input-field col s6\">\n                <input type=\"text\" formControlName=\"demand_draft\">\n                <label for=\"dd\">Demand Draft Number</label>\n                <div class=\"red-text test-darken-2\"\n                *ngIf=\"demand_draft.errors && (demand_draft.dirty || demand_draft.touched)\">\n             <p *ngIf=\"demand_draft.errors.required\">Demand Draft is required</p>\n            </div>\n              </div>\n          </div>\n          <div class=\"row\">\n                <div class=\"file-field input-field col s6\">\n                        <div class=\"btn  btn-small\">\n                          <span>Upload Aadhar</span>\n                          <input id=\"image\" type=\"file\" (change)=\"onSelectFile($event)\">\n                        </div>\n                        <div class=\"file-path-wrapper\">\n                          <input class=\"file-path validate\"   type=\"text\">\n                        </div>\n                      </div>\n\n                      <div class=\"file-field input-field col s6\">\n                            <div class=\"btn  btn-small\">\n                              <span>Passport size photo</span>\n                              <input type=\"file\" (change)=\"onSelectFile($event)\">\n                            </div>\n                            <div class=\"file-path-wrapper\">\n                              <input class=\"file-path validate\"   type=\"text\">\n                            </div>\n                          </div>\n                   \n          </div>\n          \n          <button class=\"btn waves-effect waves-light  btn-small\"\n          [disabled]=\"beekeeper.invalid\"\n           type=\"submit\" name=\"action\" >Submit\n            <i class=\"material-icons right\">send</i>\n          </button>\n    \n</div>\n</form> -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/bexpander/bexpander.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/bexpander/bexpander.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field>\n        <input matInput placeholder=\"Name\" [value]=\"userdata['name']['first_name'] + ' ' \n        + userdata['name']['last_name']\" readonly>\n      </mat-form-field>\n      <mat-form-field>\n          <input matInput placeholder=\"Address\" [value]=\"userdata['address']\" readonly>\n        </mat-form-field>\n        <mat-form-field>\n          <input matInput placeholder=\"State\" [value]=\"userdata['state']\" readonly >\n        </mat-form-field>\n        <mat-form-field>\n            <input matInput placeholder=\"City\" [value]=\"userdata['city']\" readonly>\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput placeholder=\"Aadhar Number\" [value]=\"userdata['aadhar_number']\" readonly>\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput placeholder=\"Colony\" [value]=\"userdata['colony']\" readonly>\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput placeholder=\"Demand Draft\" [value]=\"userdata['demand_draft']\" readonly>\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput placeholder=\"Quantity\" [value]=\"userdata['quantity']\" readonly>\n          </mat-form-field>\n          <mat-form-field>\n                <input matInput placeholder=\"Term\" [value]=\"userdata['term']\" readonly>\n              </mat-form-field>\n  \n\n              <!-- <form >\n                  <div class=\"form-row\">\n\n                    <div class=\"form-group col-offset-8 \">\n                      \n                      <label for=\"first_name\">Name</label>\n                      \n                      <input class=\"form-control\" id=\"first_name\" name=\"first_name\"\n                      [value]=\"userdata['name']['first_name'] + ' ' \n                      + userdata['name']['last_name']\" readonly  type=\"text\">\n                      \n                       <input type=\"text\" class=\"form-control\" id=\"firstName\" /> -->\n                      \n                      \n                    <!-- </div>\n                  </div>\n\n                  <div class=\"form-group\">\n                    <div class=\"col-sm-4\">\n                        <label for=\"address\">Address</label>\n                        <input type=\"text\" [value]=\"userdata['address']\" readonly id=\"address\" class=\"form-control\">\n                    </div>\n                     \n                    \n                     \n                  </div>\n                  <div class=\"form-group\">\n                    <div class=\"col-sm-4\">\n                      \n                      <label for=\"state\">State</label>\n                      \n                      <input type=\"text\"  [value]=\"userdata['state']\" readonly  id=\"state\" class=\"form-control\">\n                    </div>\n                      \n                  </div>\n              \n                  <div class=\"form-group\">\n                    <div class=\"col-sm-4\">\n                      \n                      <label for=\"city\">City</label>\n                      <input  type=\"text\"  [value]=\"userdata['city']\" readonly  id=\"city\" class=\"form-control\">\n                      \n                    </div> \n                  </div>\n              \n                  <div class=\"form-group\">\n                    <div class=\"col-sm-4\">\n\n                      <label for=\"colony\">Colony</label>\n                      <input type=\"text\" id=\"colony\"  [value]=\"userdata['colony']\" readonly  class=\"form-control\">\n                    </div>\n                    \n                  </div>\n               -->\n\n\n\n<div class=\"row\" *ngIf=\"userdata['migrate'] ==='1' \">\n  <table>\n      <thead>\n          \n          <tr>\n              <th>State</th>\n              <th>Crop</th>\n          </tr>\n      </thead>\n\n      <tbody>\n          <tr *ngFor=\"let data of userdata['state_crop'];let i=index\">\n              <td>\n                  <mat-form-field>\n                      <input type=\"text\" id=\"state\" \n                      class=\"validate\" name=\"state\" \n                      readonly matInput\n                       [value]=\"data['state']\">\n                    </mat-form-field>\n                  <!-- <div class=\"input-field col s4\">\n                      <input type=\"text\" id=\"state\" \n                      class=\"validate\" name=\"state\" \n                      readonly\n                       [value]=\"data['state']\">\n                  </div> -->\n              </td>\n              <td>\n                  <mat-form-field>\n                      <input type=\" text\" id=\"crop\" \n                      readonly matInput\n                    class=\"validate\" name=\"crop\"\n    [value]=\"data['crop']\">\n                    </mat-form-field>\n                  <!-- <div class=\"input-field col s4\">\n                      <input type=\"text\" id=\"crop\" \n                        readonly\n                      class=\"validate\" name=\"crop\"\n      [value]=\"data['crop']\">\n                  </div> -->\n              </td>\n          </tr>\n\n      </tbody>\n     \n  </table>\n\n</div>\n\n  "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/expander/expander.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/expander/expander.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field>\n        <input matInput placeholder=\"Name\" [value]=\"userdata['name']\" readonly>\n      </mat-form-field>\n      <mat-form-field>\n          <input matInput placeholder=\"Address\" [value]=\"userdata['address']\" readonly>\n        </mat-form-field>\n        <mat-form-field>\n          <input matInput placeholder=\"State\" [value]=\"userdata['state']\" readonly >\n        </mat-form-field>\n        <mat-form-field>\n            <input matInput placeholder=\"City\" [value]=\"userdata['city']\" readonly>\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput placeholder=\"CIN Number\" [value]=\"userdata['cin_number']\" readonly>\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput placeholder=\"Colony\" [value]=\"userdata['colony']\" readonly>\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput placeholder=\"Demand Draft\" [value]=\"userdata['demand_draft']\" readonly>\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput placeholder=\"Quantity\" [value]=\"userdata['quantity']\" readonly>\n          </mat-form-field>\n          <mat-form-field>\n              <input matInput placeholder=\"Term\" [value]=\"userdata['term']\" readonly>\n            </mat-form-field>\n        \n\n            "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n   \n      <div class=\"main-body row\">\n        <div id=\"leftPanel\" class=\"tab-panel col-sm-2\">\n        </div>\n\n        <div class=\"login-container col-sm-10\">\n            <div id=\"login\" class=\"tabcontent card login-card\">\n                <div class=\"card-body ne-card-body\">\n                  <form autocomplete=\"off\">\n                    <div class=\"form-group\">\n                      <label for=\"username\">Username</label>\n                      <input type=\"text\" class=\"form-control\" id=\"username\" [(ngModel)]=\"username\" [ngModelOptions]=\"{standalone: true}\"/>\n                    </div>\n                    <div class=\"form-group\">\n                      <label for=\"email\">Password</label>\n                      <input type=\"password\" class=\"form-control\" id=\"password\" [(ngModel)]=\"password\" [ngModelOptions]=\"{standalone: true}\" />\n                    </div>\n                    <button type=\"button\" (click)=\"loginUser()\" class=\"btn btn-info bt-login\">\n                      Login\n                    </button>\n                  </form>\n                  <span>New User? <a [routerLink]=\"[ '/register' ]\">Register</a></span>\n                </div>\n            </div>\n        </div>\n      </div>\n\n    <script src=\"index.js\"></script>\n    <!-- Optional JavaScript -->\n    <!-- jQuery first, then Popper.js, then Bootstrap JS -->\n   \n \n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/navbar/navbar.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/navbar/navbar.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <nav class=\"white\">\n        <div class=\"nav-wrapper\">\n          <a [routerLink]=\"['']\" class=\"brand-logo\">\n                <img style=\"width: 50%;\" src=\"https://www.srijan.net/hubfs/logo/srijan_logo.png\">\n          </a>\n          <ul id=\"nav-mobile\" class=\"right hide-on-med-and-down\">\n            <li><a class=\"black-text text-darken-2\" href=\"#\">About Us</a></li>\n            <li><a  class=\"black-text text-darken-2\" href=\"#\">Contact</a></li>\n          </ul>\n        </div>\n      </nav> -->\n            \n      <div>\n          <nav class=\"d-flex flex-row \">\n            <div class=\"honey-icon col-sm-2\">\n              <img class=\"center-block\" src=\"assets/honey_icon.png\" />\n            </div>\n            <div class=\"custom-nav col-sm-10\">\n              <div class=\"honeycomb-bg\"></div>\n              <div class=\"app-title\">Bee Keeper Registration</div>\n              </div>\n            </nav>\n    \n            </div>\n    "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/other/other.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/other/other.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"other_individual\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"form-group\">\n        <input id=\"nname\" name=\"name\" formControlName=\"name\" type=\"text\" class=\"form-control\">\n        <label for=\"name\">Tender/Director/President Name</label>\n\n        <div class=\"red-text test-darken-2\" *ngIf=\"name.errors && (name.dirty || name.touched)\">\n            <p *ngIf=\"name.errors.required\">First Name is required</p>\n        </div>\n\n    </div>\n\n\n    <div class=\"form-group\">\n        <div class=\"form-group\">\n            <input type=\"text\" formControlName=\"address\" id=\"address\" class=\"form-control\">\n            <label for=\"address\">Address</label>\n            <div class=\"red-text test-darken-2\" *ngIf=\"address.errors && (address.dirty || address.touched)\">\n                <p *ngIf=\"address.errors.required\">Address is required</p>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <input type=\"text\" formControlName=\"state\" id=\"state\" class=\"form-control\">\n            <label for=\"state\">State</label>\n            <div class=\"red-text test-darken-2\" *ngIf=\"state.errors && (state.dirty || state.touched)\">\n                <p *ngIf=\"state.errors.required\">State is required</p>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <input formControlName=\"city\" type=\"text\" id=\"city\" class=\"form-control\">\n            <label for=\"city\">City</label>\n            <div class=\"red-text test-darken-2\" *ngIf=\"city.errors && (state.dirty || state.touched)\">\n                <p *ngIf=\"city.errors.required\">City is required</p>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"form-group\">\n        <div class=\"form-group\">\n            <input type=\"text\" formControlName=\"cin_number\" id=\"cin_number\" class=\"form-control\">\n            <label for=\"cin_number\">Registration/CIN Number</label>\n            <div class=\"red-text test-darken-2\" *ngIf=\"cin_number.errors && (cin_number.dirty || cin_number.touched)\">\n                <p *ngIf=\"cin_number.errors.required\">Address is required</p>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <input type=\"text\" id=\"colony\" formControlName=\"colony\" class=\"form-control\">\n            <label for=\"colony\">Colony</label>\n            <div class=\"red-text test-darken-2\" *ngIf=\"colony.errors && (colony.dirty || colony.touched)\">\n                <p *ngIf=\"colony.errors.required\">Colony is required</p>\n            </div>\n        </div>\n\n        <div class=\"form-group\">\n            <input id=\"quantity\" type=\"text\" class=\"form-control\" formControlName=\"quantity\">\n            <label for=\"quantity\">Quantity of Honey Produced Last year.</label>\n            <div class=\"red-text test-darken-2\" *ngIf=\"quantity.errors && (quantity.dirty || quantity.touched)\">\n                <p *ngIf=\"quantity.errors.required\">Quantity is required</p>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"form-group\">\n        <div class=\"form-group\">\n            <input type=\"text\" class=\"form-control\" formControlName=\"amount\" readonly>\n            <label for=\"amount\">Amount</label>\n            <div class=\"red-text test-darken-2\" *ngIf=\"amount.errors && (amount.dirty || amount.touched)\">\n                <p *ngIf=\"amount.errors.required\">Amount is required</p>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <input type=\"text\" class=\"form-control\" formControlName=\"demand_draft\">\n            <label for=\"dd\">Demand Draft Number</label>\n            <div class=\"red-text test-darken-2\"\n                *ngIf=\"demand_draft.errors && (demand_draft.dirty || demand_draft.touched)\">\n                <p *ngIf=\"demand_draft.errors.required\">Demand Draft is required</p>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"form-group\">\n        <div class=\"form-group\">\n            <label>Aadhar</label>\n            <div class=\"custom-file reg-upload\">\n                <input type=\"file\" class=\"custom-file-input\" id=\"customFile\" (change)=\"aadharUpload($event)\" />\n                <label id=\"aadhar_upload\" class=\"custom-file-label\" for=\"customFile\">Upload Aadhar</label>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label>Passport size photo</label>\n            <div class=\"custom-file reg-upload\">\n                <input type=\"file\" class=\"custom-file-input\" id=\"customFile\" (change)=\"photoUpload($event)\" />\n                <label id=\"photo_upload\" class=\"custom-file-label\" for=\"customFile\">Choose Passport size photo</label>\n            </div>\n        </div>\n\n\n\n    </div>\n\n    <div class=\"form-group\">\n        <div class=\"form-group\">\n            <label>Registration Certificate</label>\n            <div class=\"custom-file reg-upload\">\n                <input type=\"file\" class=\"custom-file-input\" id=\"customFile\" (change)=\"certUpload($event)\" />\n                <label id=\"cert_upload\" class=\"custom-file-label\" for=\"customFile\">Upload Registration\n                    Certificate</label>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label>CIN Certificate</label>\n            <div class=\"custom-file reg-upload\">\n                <input type=\"file\" class=\"custom-file-input\" id=\"customFile\" (change)=\"cinUpload($event)\" />\n                <label id=\"cin_upload\" class=\"custom-file-label\" for=\"customFile\">Upload CIN Certificate</label>\n            </div>\n        </div>\n    </div>\n    <!-- <div class=\"file-field input-field col s6\">\n                        <div class=\"btn  btn-small\">\n                          <span>Registration Certificate</span>\n                          <input id=\"image\" type=\"file\"\n                         \n                          (change)=\"onSelectFile($event)\">\n                        </div>\n                        <div class=\"file-path-wrapper\">\n                          <input class=\"file-path validate\"  placeholder=\"Upload Certificate\"  type=\"text\">\n                        </div>\n                      </div> -->\n\n    <!-- <div class=\"file-field input-field col s6\">\n                            <div class=\"btn  btn-small\">\n                              <span>CIN Certificate</span>\n                              <input type=\"file\" \n                             \n                              (change)=\"onSelectFile($event)\">\n                            </div>\n                            <div class=\"file-path-wrapper\">\n                              <input class=\"file-path validate\"  placeholder=\" Upload CIN Certificate\"   type=\"text\">\n                            </div>\n                          </div> -->\n\n    <!-- <button class=\"btn waves-effect waves-light\" \n    [disabled] = \"other_individual.invalid\"\n    type=\"submit\" name=\"action\">Submit\n        <i class=\"material-icons right\">send</i>\n    </button> -->\n\n    <div style=\"padding: 2rem 0;\">\n        <button type=\"submit\" name=\"action\" [disabled]=\"other_individual.invalid\" data-toggle=\"modal\"\n            data-target=\"#myModal\" class=\"btn btn-primary\">\n            Submit\n        </button>\n    </div>\n\n\n    <!-- The Modal -->\n    <div class=\"modal fade\" id=\"myModal\">\n            <div class=\"modal-dialog\">\n                <div class=\"modal-content\">\n                    <!-- Modal Header -->\n                    <div class=\"modal-header\">\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">\n                            &times;\n                        </button>\n                    </div>\n\n                    <!-- Modal body -->\n                    <div class=\"modal-body\" style=\"text-align: center\">\n                        <i class=\"fa fa-check-circle\" style=\"color: green; font-size: 5rem; text-align: center\"\n                            aria-hidden=\"true\"></i>\n                        <div>Successfully Registered</div>\n                        <div>Your Unique ID is {{uuid}}.</div>\n                    </div>\n\n                    <!-- Modal footer -->\n                    <div class=\"modal-footer\">\n                        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"to_home()\">\n                            Close\n                        </button>\n                    </div>\n                </div>\n            </div>\n        </div>\n</form>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/register/register.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/register/register.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-body row\">\n  <div id=\"leftPanel\" class=\"tab-panel col-sm-2\"></div>\n\n  <div class=\"content-container col-sm-10\">\n    <div id=\"newEntry\" class=\"tabcontent card ne-card\">\n      <div class=\"card-header ne-card-header\">Registration</div>\n      <div class=\"card-body ne-card-body\">\n        <form>\n          <div class=\"form-group\">\n              <mat-form-field>\n                  <mat-label >Choose Type</mat-label>\n                  <mat-select (selectionChange)=\"Selected($event)\" [(ngModel)]=\"selected_type\"\n                    [ngModelOptions]=\"{standalone: true}\">\n                    <mat-option *ngFor=\"let type of application_type\" [value]=\"type.value\">\n                      {{type.viewValue}}\n                    </mat-option>\n                  </mat-select>\n                </mat-form-field>\n          </div>\n          <div class=\"form-group\">\n              <mat-radio-group aria-label=\"Select an option\" [(ngModel)]=\"selected_term\"\n              [ngModelOptions]=\"{standalone: true}\">\n              <mat-label id=\"mat-lable\">Choose Term</mat-label>\n              <mat-radio-button value=\"Annual\">Annual</mat-radio-button>\n              <mat-radio-button value=\"Life term\">Life term</mat-radio-button>\n            </mat-radio-group>\n          </div>\n          <div class=\"form-group\">\n              <mat-form-field>\n                  <mat-label>Choose Category</mat-label>\n                  <mat-select (selectionChange)=\"Selected($event)\" [(ngModel)]=\"selected_category\"\n                    [ngModelOptions]=\"{standalone: true}\">\n                    <mat-option *ngFor=\"let category of categories\" [value]=\"category.value\">\n                      {{category.viewValue}}\n                    </mat-option>\n                  </mat-select>\n                </mat-form-field>\n          </div>\n\n          <app-beekeeper (submitted)=\"formSubmitted($event)\"[term]=\"selected_term\" [category]=\"selected_category\"\n          [type]=\"selected_type\" *ngIf=\"selected_category==='0'\"></app-beekeeper>\n    \n       \n    \n            <app-other  (othersubmitted)=\"otherSubmit($event)\" [term]=\"selected_term\"  *ngIf=\"(selected_category !== '0') && (selected_category !== undefined)\" [category]=\"selected_category\"\n            [type]=\"selected_type\" ></app-other>\n    \n        </form>\n      </div>\n    </div>\n\n    <!-- <div id=\"track\" class=\"tabcontent\">\n              <h3>Track</h3>\n              <p>Paris is the capital of France.</p>\n            </div>\n  \n            <div id=\"farmer\" class=\"tabcontent\">\n              <h3>Farmer</h3>\n              <p>Tokyo is the capital of Japan.</p>\n            </div> -->\n  </div>\n</div>\n\n<!-- <div class=\"container \">\n  <div class=\"row\" >\n    <div class=\"row green\" *ngIf=\"formSubmit || IndividualSubmit\">\n      <p>Beekeeper Form is Submitted</p>\n    </div>\n    \n    <form class=\"col s10\" (ngSubmit)=\"onSubmit()\" style=\"border: 2px solid black\">\n      <div class=\"row\">\n        <div class=\"input-field col-s4\">\n          <mat-form-field>\n            <mat-label>Choose Type</mat-label>\n            <mat-select (selectionChange)=\"Selected($event)\" [(ngModel)]=\"selected_type\"\n              [ngModelOptions]=\"{standalone: true}\">\n              <mat-option *ngFor=\"let type of application_type\" [value]=\"type.value\">\n                {{type.viewValue}}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n        </div>\n\n      </div>\n      <div class=\"row\">\n        <div class=\"input-field col-s4\">\n          <mat-radio-group aria-label=\"Select an option\" [(ngModel)]=\"selected_term\"\n            [ngModelOptions]=\"{standalone: true}\">\n            <mat-label id=\"mat-lable\">Choose Term</mat-label>\n            <mat-radio-button value=\"Annual\">Annual</mat-radio-button>\n            <mat-radio-button value=\"Life term\">Life term</mat-radio-button>\n          </mat-radio-group>\n        </div>\n      </div>\n      <div class=\"row\">\n\n        <div class=\"input-field col-s4\">\n          <mat-form-field>\n            <mat-label>Choose Category</mat-label>\n            <mat-select (selectionChange)=\"Selected($event)\" [(ngModel)]=\"selected_category\"\n              [ngModelOptions]=\"{standalone: true}\">\n              <mat-option *ngFor=\"let category of categories\" [value]=\"category.value\">\n                {{category.viewValue}}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n        </div>\n\n      </div>\n      <app-beekeeper (submitted)=\"formSubmitted($event)\"[term]=\"selected_term\" [category]=\"selected_category\"\n      [type]=\"selected_type\" *ngIf=\"selected_category==='0'\"></app-beekeeper>\n\n   \n\n        <app-other  (othersubmitted)=\"otherSubmit($event)\" [term]=\"selected_term\"  *ngIf=\"(selected_category !== '0') && (selected_category !== undefined)\" [category]=\"selected_category\"\n        [type]=\"selected_type\" ></app-other>\n\n    \n    \n\n      \n    </form>\n  </div>\n\n</div> -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/renew/renew.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/renew/renew.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>renew works!</p>\n"

/***/ }),

/***/ "./src/app/admin/admin.component.css":
/*!*******************************************!*\
  !*** ./src/app/admin/admin.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var _services_static_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/static.service */ "./src/app/services/static.service.ts");




let AdminComponent = class AdminComponent {
    constructor(storage, staticData) {
        this.storage = storage;
        this.staticData = staticData;
        this.categories = { '0': 'Individual Beekeeper', '1': 'BeeKeeping and Honey Society/KVIC/SKVIC',
            '2': 'Company/Firm', '3': 'SHG,Self Help Group', '4': 'SFAC Nominated' };
    }
    ngOnInit() {
        this.userdata = this.storage.getItem();
        console.log(this.userdata);
        this.userdata.forEach(element => {
            element['category'];
        });
    }
    removePanel(i) {
        document.getElementById('Location' + i).remove();
        console.log(this.userdata[i]);
        this.storage.removeData(i);
    }
};
AdminComponent.ctorParameters = () => [
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"] },
    { type: _services_static_service__WEBPACK_IMPORTED_MODULE_3__["StaticService"] }
];
AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin',
        template: __webpack_require__(/*! raw-loader!./admin.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/admin.component.html"),
        styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/admin/admin.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"], _services_static_service__WEBPACK_IMPORTED_MODULE_3__["StaticService"]])
], AdminComponent);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'mockUi';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _app_material_module_material_module_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app/material-module/material-module.module */ "./src/app/material-module/material-module.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _beekeeper_beekeeper_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./beekeeper/beekeeper.component */ "./src/app/beekeeper/beekeeper.component.ts");
/* harmony import */ var _other_other_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./other/other.component */ "./src/app/other/other.component.ts");
/* harmony import */ var _app_services_static_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../app/services/static.service */ "./src/app/services/static.service.ts");
/* harmony import */ var _app_services_storage_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../app/services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var _renew_renew_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./renew/renew.component */ "./src/app/renew/renew.component.ts");
/* harmony import */ var _expander_expander_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./expander/expander.component */ "./src/app/expander/expander.component.ts");
/* harmony import */ var _bexpander_bexpander_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./bexpander/bexpander.component */ "./src/app/bexpander/bexpander.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");



















const routes = [
    { path: "", component: _home_home_component__WEBPACK_IMPORTED_MODULE_18__["HomeComponent"] },
    { path: "admin", component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_10__["AdminComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"] }
];
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
            _register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"],
            _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"],
            _admin_admin_component__WEBPACK_IMPORTED_MODULE_10__["AdminComponent"],
            _beekeeper_beekeeper_component__WEBPACK_IMPORTED_MODULE_11__["BeekeeperComponent"],
            _other_other_component__WEBPACK_IMPORTED_MODULE_12__["OtherComponent"],
            _renew_renew_component__WEBPACK_IMPORTED_MODULE_15__["RenewComponent"],
            _expander_expander_component__WEBPACK_IMPORTED_MODULE_16__["ExpanderComponent"],
            _bexpander_bexpander_component__WEBPACK_IMPORTED_MODULE_17__["BexpanderComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_18__["HomeComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _app_material_module_material_module_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModuleModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)
        ],
        providers: [_app_services_static_service__WEBPACK_IMPORTED_MODULE_13__["StaticService"], _app_services_storage_service__WEBPACK_IMPORTED_MODULE_14__["StorageService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/beekeeper/beekeeper.component.css":
/*!***************************************************!*\
  !*** ./src/app/beekeeper/beekeeper.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-radio-button ~ .mat-radio-button {\n    margin-left: 20px;\n  }\n\n  #mat-lable{\n    margin-right: 2%;\n}\n\n  .custom-nav {\n  height: 70px;\n  width: 100%;\n  background: linear-gradient(to right, #edd252, #f09a2e);\n  display: flex !important; \n}\n\n  .custom-nav .honeycomb-bg {\n  background-position: right;\n  background-image: url('honey_comb.png');\n  background-size: 50%;\n  background-repeat: no-repeat;\n  height: inherit;\n  width: 96%;\n  position: absolute;\n}\n\n  .login-container {\n  padding: 2rem 15rem;\n}\n\n  .bt-login {\n  margin: 2rem auto 1rem;\n  display: block;\n  width: 100%;\n}\n\n  .honey-icon {\n  /* width: 12rem; */\n  background: white;    \n}\n\n  .custom-nav .app-title{\n  font-size: 26px;\n  color: white;\n  /* padding: 1.15rem; */\n  padding-left: 2rem;\n  margin: auto 0;\n}\n\n  .honey-icon img {\n  display: block;\n  margin-left: auto;\n  margin-top: 14px;\n  margin-right: auto;\n  width: 45px;\n  height: 45px;\n}\n\n  .main-body {\n  margin-left: 0;\n  margin-right: 0;\n}\n\n  .tab-panel {\n  background: #555555;\n  padding: 2.5rem 0;\n}\n\n  .tab-panel .button-container {\n  position: relative;\n  padding-bottom: 0.4rem; \n}\n\n  .tab-panel .button-container button {\n  display: block;\n  background-color: inherit;\n  padding: 12px 16px;\n  width: 100%;\n  border: none;\n  outline: none;\n  text-align: center;\n  cursor: pointer;\n  transition: 0.3s;\n  font-size: 14px;\n  color: white;\n}\n\n  .tab-panel .button-container button:hover {\n  background-color: #767676cf;\n}\n\n  .tab-panel .button-container button.active {\n  background-color: #767676;\n  border-left: 8px solid #eed857;\n}\n\n  .tab-panel .button-container button p {\n  margin-bottom: 0;\n  font-size: 29px;\n}\n\n  .arrow-right {\n  width: 0;\n  height: 0;\n  border-left: 17px solid #767676;\n  /* border-right: 0px solid transparent; */\n  border-bottom: 45px solid transparent;\n  border-top: 45px solid transparent;\n  position: absolute;\n  top: 0;\n  right: -17px;\n}\n\n  .hide {\n  display: none;\n}\n\n  .content-container {\n  padding: 2rem;\n}\n\n  .profile-section {\n  position: absolute;\n  right: 0;\n  display: flex;\n  padding-top: 1rem;\n  padding-right: 2rem;\n}\n\n  .profile-section  a {\n  color: white;\n  position: relative;\n}\n\n  .profile-section  .dropdown-menu a {\n  color: black;\n\n}\n\n  .fa-bell {\n  font-size: 25px;\n}\n\n  .badge {\n  background: red;\n  border-radius: 54%;\n  width: 19px;\n  height: 19px;\n  position: absolute;\n  left: 29px;\n  top: 0px;\n  padding: 4px 4px;\n}\n\n  .ne-card {\n  padding-bottom: 2rem;\n  border-radius: 0;\n  border: none;\n  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2), 0 4px 9px 0 rgba(0, 0, 0, 0.19);\n}\n\n  .ne-card .ne-card-header {\n  background: #eed857;\n  color: white;\n  font-size: 1.2rem;\n  border-radius: 0;\n  border: none;\n  padding: 0.5rem 1.25rem;\n}\n\n  .ne-card .ne-card-body, .ne-card .track-card-body {\n  font-size: 0.8rem;\n}\n\n  .ne-card .ne-card-body .qr-icon, .ne-card .ne-card-body .ne-sliders {\n  font-size: 24px;\n  padding: 7px 1.5rem;\n}\n\n  .ne-card .ne-card-body button.scan {\n  color: white;\n  width: 7rem;\n  border: none;  \n}\n\n  .ne-card .ne-card-body button.scan {\n  background: #f09c2e;    \n}\n\n  .ne-card-body button.bt-white {\n  color: #4a4a4a;  \n  width: 7rem;\n  margin-left: 3rem;\n}\n\n  .ne-card .form-control, .ne-card .honey-source {\n  width: 75%;\n}\n\n  .ne-card .volume-unit {\n  display: block;\n  width: 7rem;\n  font-size: 14px;\n}\n\n  .ne-card  .track-card-body {\n  display: flex;\n  justify-content: space-between;\n}\n\n  .ne-card  .track-card-body  form input{\n  border-right: none;\n  border-radius: 0;\n}\n\n  .ne-card  .track-card-body form button {\n  border-radius: 0;\n  border: 1px solid #ced4da;\n  border-left: none;\n}\n\n  /* .form-inline {\n  display: inline-block;\n}\n.navbar-header.col {\n  padding: 0 !important;\n}\t */\n\n  .navbar {    \n  padding: 0;\n  background: #fff;\n  border-bottom: 1px solid #d6d6d6;\n  box-shadow: 0 0 4px rgba(0,0,0,.1);\n}\n\n  .nav-link img {\n  border-radius: 50%;\n  width: 36px;\n  height: 36px;\n  margin: -8px 0;\n  float: left;\n  margin-right: 10px;\n}\n\n  .navbar .dropdown-menu li a:hover, .navbar .dropdown-menu li a:active {\n  color: #333;\n}\n\n  .navbar .dropdown-item .material-icons {\n  font-size: 21px;\n  line-height: 16px;\n  vertical-align: middle;\n  margin-top: -2px;\n}\n\n  .navbar .badge {\n  background: #f44336;\n  font-size: 11px;\n  border-radius: 20px;\n  position: absolute;\n  min-width: 10px;\n  padding: 4px 6px 0;\n  min-height: 18px;\n  top: 5px;\n}\n\n  .navbar ul.nav li a.notifications, .navbar ul.nav li a.messages {\n  position: relative;\n  margin-right: 10px;\n}\n\n  .navbar ul.nav li a.messages {\n  margin-right: 20px;\n}\n\n  .navbar a.notifications .badge {\n  margin-left: -8px;\n}\n\n  /* .navbar a.messages .badge {\n  margin-left: -4px;\n}\t */\n\n  .navbar .active a, .navbar .active a:hover, .navbar .active a:focus {\n  background: transparent !important;\n}\n\n  .reg-upload {\n  width: 75%;\n  display: block;\n}\n\n  .counterContainer {\n  display: flex;\n  position: relative;\n}\n\n  .counter {\n  font-size: 2.5rem;\n  position: absolute;\n  right: 5rem;\n  top: -0.6rem;\n}\n\n  #displayBy  {\n  color: white;\n  font-size: 14px;\n}\n\n  #displayBy .selected {\n  background: #f09c2e;\n  color: white;\n}\n\n  #displayBy .btn-outline-secondary:hover {\n  background: white;\n  color: black;\n}\n\n  .trace-id-row {\n  display: flex;\n  background: #f8f8f8;\n  padding: 0.3rem;\n  font-size: 13px;\n  border-bottom: 1px solid white;\n}\n\n  .trace-id-row .fa{\n  color: #f09d2f;\n  padding: 1rem 2rem;\n  cursor: pointer;\n}\n\n  .trace-id-row .row{\n  width: -webkit-fill-available;\n  margin-left: 0;\n  margin-right: 0;\n}\n\n  .trace-id-row .row .col-sm-2 div:first-child {\n  font-weight: bold;\n}\n\n  .child {\n  padding-left: 2%;\n}\n\n  .child .trace-id-row {\n  background: none;\n}\n\n  .trace-id {\n  cursor: pointer;\n  color: blue;\n  text-decoration: underline;\n\n}\n\n  .modal .more-width {\n  max-width: 700px !important;\n}\n\n  .track-card-body .search-form {\n  width: 75%;\n  margin: 0 auto;\n}\n\n  .farmer-detail-container {\n  margin: 2rem 0;\n}\n\n  .farmer-detail-container .farmer-detail {\n  border: 1px solid;\n  background: #f8f8f8;\n  padding: 15px;\n  margin: auto;\n  width: 90%;\n}\n\n  .farmer-detail-container .farmer-detail .header {\n  margin-bottom: 2.5rem;\n}\n\n  .farmer-detail-container .farmer-detail .header h5 {\n  font-size: 0.97rem;\n  font-weight: bold;\n}\n\n  .farmer-detail-container .farmer-detail h6 {\n  font-size: 0.9rem;\n}\n\n  .farmer-detail-container .farmer-detail .body {\n  margin-bottom: 2rem;\n}\n\n  .farmer-detail-container .farmer-detail .body h6 {\n  padding-top: 1rem;\n}\n\n  .farmer-detail-container .farmer-detail .body > div {\n  display: flex;\n  font-size: 0.8rem;\n  margin-bottom: 0.5rem;\n}\n\n  .farmer-detail-container .farmer-detail .body > div div:first-child {\n  width: 40%;\n}\n\n  .previous-transactions {\n  border-top: 1px dashed;\n  margin-top: 2rem;\n  padding-top: 1rem;\n  font-size: 0.8rem;\n}\n\n  .previous-transactions .row {\n  margin: 1rem 0.5rem;\n}\n\n  .previous-transactions .col-sm-2 {\n  padding: 0 5px;\n  text-align: center;\n}\n\n  .farmer-detail .signature {\n  text-align: center;\n  font-size: 0.8rem;\n  margin: 0;\n}\n\n  .signature .farmer-sign,  .signature .aggregator-sign {\n  height: 80px;\n  margin: 0 auto;\n  border-bottom: 1px dashed;\n}\n\n  .chit-container {\n  /* display: flex; */\n  background: #e9ecef;\n  width: 75%;\n  margin: 1% 0;\n  /* border: 1px solid #d2dbde; */\n  /* flex-wrap: wrap; */\n}\n\n  .chit-container .chits {\n  text-align: center;\n  margin: 0;\n  padding: 1%;\n  border-bottom: 2px solid white;\n  /* width: fit-content;\n  background: #555555;\n  color: white;\n  padding: 3px 12px;\n  border-radius: 16px;\n  margin: 1%; */\n}\n\n  .chit-container .chits div:last-child {\n  position: relative;\n}\n\n  .chit-container .chits div:last-child div {\n  position: absolute;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  left: 32px;\n}\n\n  .chit-container .chits div:last-child div span:first-child {\n  color: #10657e;\n  cursor: pointer;\n}\n\n  .chit-container .chits div:last-child div span:nth-child(2) {\n  color: #b81f1f;\n  cursor: pointer;\n}\n\n  .chit-container .chits .fa-times{\n  cursor: pointer;\n}\n\n  .form-check {\n  margin-left: 2%;\n}\n\n  #editForm {\n  padding-right: 0;\n}\n\n  #editForm .modal-dialog {\n  max-width: 70%;\n  margin: 3% auto;\n}\n\n  #searchResult {\n  display: none;\n}\n\n  /* Here */\n\n  datalist{\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  text-indent: 1px;\n  text-overflow: '';\n  -moz-appearance: none;\n  /* for Chrome */\n  -webkit-appearance: none;\n  display: none;\n}\n\n  select {\n  /* for Firefox */\n  -moz-appearance: none;\n  /* for Chrome */\n  -webkit-appearance: none;\n}\n\n  /* For IE10 */\n\n  select::-ms-expand {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmVla2VlcGVyL2JlZWtlZXBlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsZ0JBQWdCO0FBQ3BCOztFQUdBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCx1REFBdUQ7RUFDdkQsd0JBQXdCO0FBQzFCOztFQUNBO0VBQ0UsMEJBQTBCO0VBQzFCLHVDQUFrRDtFQUNsRCxvQkFBb0I7RUFDcEIsNEJBQTRCO0VBQzVCLGVBQWU7RUFDZixVQUFVO0VBQ1Ysa0JBQWtCO0FBQ3BCOztFQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztFQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGNBQWM7RUFDZCxXQUFXO0FBQ2I7O0VBR0E7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztFQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7O0VBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7QUFDZDs7RUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0FBQ2pCOztFQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjs7RUFFQTtFQUNFLGtCQUFrQjtFQUNsQixzQkFBc0I7QUFDeEI7O0VBRUE7RUFDRSxjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsWUFBWTtBQUNkOztFQUNBO0VBQ0UsMkJBQTJCO0FBQzdCOztFQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLDhCQUE4QjtBQUNoQzs7RUFDQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztFQUdBO0VBQ0UsUUFBUTtFQUNSLFNBQVM7RUFDVCwrQkFBK0I7RUFDL0IseUNBQXlDO0VBQ3pDLHFDQUFxQztFQUNyQyxrQ0FBa0M7RUFDbEMsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixZQUFZO0FBQ2Q7O0VBQ0E7RUFDRSxhQUFhO0FBQ2Y7O0VBRUE7RUFDRSxhQUFhO0FBQ2Y7O0VBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCOztFQUNBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7RUFDQTtFQUNFLFlBQVk7O0FBRWQ7O0VBQ0E7RUFDRSxlQUFlO0FBQ2pCOztFQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsUUFBUTtFQUNSLGdCQUFnQjtBQUNsQjs7RUFFQTtFQUNFLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLDJFQUEyRTtBQUM3RTs7RUFFQTtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osdUJBQXVCO0FBQ3pCOztFQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztFQUVBO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7RUFDQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsWUFBWTtBQUNkOztFQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCOztFQUNBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxpQkFBaUI7QUFDbkI7O0VBQ0E7RUFDRSxVQUFVO0FBQ1o7O0VBRUE7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLGVBQWU7QUFDakI7O0VBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDOztFQUFDO0VBQ0Msa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7RUFDQTtFQUNFLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsaUJBQWlCO0FBQ25COztFQUtBOzs7OztJQUtJOztFQUNKO0VBQ0UsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixnQ0FBZ0M7RUFDaEMsa0NBQWtDO0FBQ3BDOztFQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYztFQUNkLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0VBQ0E7RUFDRSxXQUFXO0FBQ2I7O0VBQ0E7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QixnQkFBZ0I7QUFDbEI7O0VBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsUUFBUTtBQUNWOztFQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7RUFDQTtFQUNFLGtCQUFrQjtBQUNwQjs7RUFDQTtFQUNFLGlCQUFpQjtBQUNuQjs7RUFDQTs7SUFFSTs7RUFDSjtFQUNFLGtDQUFrQztBQUNwQzs7RUFFQTtFQUNFLFVBQVU7RUFDVixjQUFjO0FBQ2hCOztFQUVBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjs7RUFDQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7QUFDZDs7RUFFQTtFQUNFLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztFQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDs7RUFDQTtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2Q7O0VBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixlQUFlO0VBQ2YsOEJBQThCO0FBQ2hDOztFQUNBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztFQUNBO0VBQ0UsNkJBQTZCO0VBQzdCLGNBQWM7RUFDZCxlQUFlO0FBQ2pCOztFQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztFQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztFQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztFQUNBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCwwQkFBMEI7O0FBRTVCOztFQUNBO0VBQ0UsMkJBQTJCO0FBQzdCOztFQUdBO0VBQ0UsVUFBVTtFQUNWLGNBQWM7QUFDaEI7O0VBRUE7RUFDRSxjQUFjO0FBQ2hCOztFQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsWUFBWTtFQUNaLFVBQVU7QUFDWjs7RUFDQTtFQUNFLHFCQUFxQjtBQUN2Qjs7RUFDQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0VBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7O0VBQ0E7RUFDRSxtQkFBbUI7QUFDckI7O0VBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7O0VBQ0E7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLHFCQUFxQjtBQUN2Qjs7RUFDQTtFQUNFLFVBQVU7QUFDWjs7RUFFQTtFQUNFLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjs7RUFDQTtFQUNFLG1CQUFtQjtBQUNyQjs7RUFDQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7O0VBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLFNBQVM7QUFDWDs7RUFFQTtFQUNFLFlBQVk7RUFDWixjQUFjO0VBQ2QseUJBQXlCO0FBQzNCOztFQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsWUFBWTtFQUNaLCtCQUErQjtFQUMvQixxQkFBcUI7QUFDdkI7O0VBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFdBQVc7RUFDWCw4QkFBOEI7RUFDOUI7Ozs7O2VBS2E7QUFDZjs7RUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7RUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsbUNBQTJCO1VBQTNCLDJCQUEyQjtFQUMzQixVQUFVO0FBQ1o7O0VBQ0E7RUFDRSxjQUFjO0VBQ2QsZUFBZTtBQUNqQjs7RUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0FBQ2pCOztFQUlBO0VBQ0UsZUFBZTtBQUNqQjs7RUFFQTtFQUNFLGVBQWU7QUFDakI7O0VBR0E7RUFDRSxnQkFBZ0I7QUFDbEI7O0VBQ0E7RUFDRSxjQUFjO0VBQ2QsZUFBZTtBQUNqQjs7RUFFQTtFQUNFLGFBQWE7QUFDZjs7RUFHQSxTQUFTOztFQUNUO0VBQ0Usd0JBQXdCO0VBQ3hCLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2Ysd0JBQXdCO0VBQ3hCLGFBQWE7QUFDZjs7RUFFQTtFQUNFLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLHdCQUF3QjtBQUMxQjs7RUFFQSxhQUFhOztFQUNiO0VBQ0UsYUFBYTtBQUNmIiwiZmlsZSI6InNyYy9hcHAvYmVla2VlcGVyL2JlZWtlZXBlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1yYWRpby1idXR0b24gfiAubWF0LXJhZGlvLWJ1dHRvbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIH1cblxuICAjbWF0LWxhYmxle1xuICAgIG1hcmdpbi1yaWdodDogMiU7XG59XG5cblxuLmN1c3RvbS1uYXYge1xuICBoZWlnaHQ6IDcwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNlZGQyNTIsICNmMDlhMmUpO1xuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7IFxufVxuLmN1c3RvbS1uYXYgLmhvbmV5Y29tYi1iZyB7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL2hvbmV5X2NvbWIucG5nKTtcbiAgYmFja2dyb3VuZC1zaXplOiA1MCU7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGhlaWdodDogaW5oZXJpdDtcbiAgd2lkdGg6IDk2JTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4ubG9naW4tY29udGFpbmVyIHtcbiAgcGFkZGluZzogMnJlbSAxNXJlbTtcbn1cblxuLmJ0LWxvZ2luIHtcbiAgbWFyZ2luOiAycmVtIGF1dG8gMXJlbTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5cbi5ob25leS1pY29uIHtcbiAgLyogd2lkdGg6IDEycmVtOyAqL1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTsgICAgXG59XG5cbi5jdXN0b20tbmF2IC5hcHAtdGl0bGV7XG4gIGZvbnQtc2l6ZTogMjZweDtcbiAgY29sb3I6IHdoaXRlO1xuICAvKiBwYWRkaW5nOiAxLjE1cmVtOyAqL1xuICBwYWRkaW5nLWxlZnQ6IDJyZW07XG4gIG1hcmdpbjogYXV0byAwO1xufVxuXG4uaG9uZXktaWNvbiBpbWcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi10b3A6IDE0cHg7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgd2lkdGg6IDQ1cHg7XG4gIGhlaWdodDogNDVweDtcbn1cblxuLm1haW4tYm9keSB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBtYXJnaW4tcmlnaHQ6IDA7XG59XG4udGFiLXBhbmVsIHtcbiAgYmFja2dyb3VuZDogIzU1NTU1NTtcbiAgcGFkZGluZzogMi41cmVtIDA7XG59XG5cbi50YWItcGFuZWwgLmJ1dHRvbi1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctYm90dG9tOiAwLjRyZW07IFxufVxuXG4udGFiLXBhbmVsIC5idXR0b24tY29udGFpbmVyIGJ1dHRvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuICBwYWRkaW5nOiAxMnB4IDE2cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiAwLjNzO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi50YWItcGFuZWwgLmJ1dHRvbi1jb250YWluZXIgYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc2NzY3NmNmO1xufVxuLnRhYi1wYW5lbCAuYnV0dG9uLWNvbnRhaW5lciBidXR0b24uYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc2NzY3NjtcbiAgYm9yZGVyLWxlZnQ6IDhweCBzb2xpZCAjZWVkODU3O1xufVxuLnRhYi1wYW5lbCAuYnV0dG9uLWNvbnRhaW5lciBidXR0b24gcCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGZvbnQtc2l6ZTogMjlweDtcbn1cblxuXG4uYXJyb3ctcmlnaHQge1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBib3JkZXItbGVmdDogMTdweCBzb2xpZCAjNzY3Njc2O1xuICAvKiBib3JkZXItcmlnaHQ6IDBweCBzb2xpZCB0cmFuc3BhcmVudDsgKi9cbiAgYm9yZGVyLWJvdHRvbTogNDVweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXRvcDogNDVweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAtMTdweDtcbn1cbi5oaWRlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmNvbnRlbnQtY29udGFpbmVyIHtcbiAgcGFkZGluZzogMnJlbTtcbn1cblxuLnByb2ZpbGUtc2VjdGlvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmctdG9wOiAxcmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xufVxuLnByb2ZpbGUtc2VjdGlvbiAgYSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnByb2ZpbGUtc2VjdGlvbiAgLmRyb3Bkb3duLW1lbnUgYSB7XG4gIGNvbG9yOiBibGFjaztcblxufVxuLmZhLWJlbGwge1xuICBmb250LXNpemU6IDI1cHg7XG59XG5cbi5iYWRnZSB7XG4gIGJhY2tncm91bmQ6IHJlZDtcbiAgYm9yZGVyLXJhZGl1czogNTQlO1xuICB3aWR0aDogMTlweDtcbiAgaGVpZ2h0OiAxOXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDI5cHg7XG4gIHRvcDogMHB4O1xuICBwYWRkaW5nOiA0cHggNHB4O1xufVxuXG4ubmUtY2FyZCB7XG4gIHBhZGRpbmctYm90dG9tOiAycmVtO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBib3JkZXI6IG5vbmU7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA0cHggOXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbn1cblxuLm5lLWNhcmQgLm5lLWNhcmQtaGVhZGVyIHtcbiAgYmFja2dyb3VuZDogI2VlZDg1NztcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiAwLjVyZW0gMS4yNXJlbTtcbn1cblxuLm5lLWNhcmQgLm5lLWNhcmQtYm9keSwgLm5lLWNhcmQgLnRyYWNrLWNhcmQtYm9keSB7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xufVxuXG4ubmUtY2FyZCAubmUtY2FyZC1ib2R5IC5xci1pY29uLCAubmUtY2FyZCAubmUtY2FyZC1ib2R5IC5uZS1zbGlkZXJzIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBwYWRkaW5nOiA3cHggMS41cmVtO1xufVxuLm5lLWNhcmQgLm5lLWNhcmQtYm9keSBidXR0b24uc2NhbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDdyZW07XG4gIGJvcmRlcjogbm9uZTsgIFxufVxuLm5lLWNhcmQgLm5lLWNhcmQtYm9keSBidXR0b24uc2NhbiB7XG4gIGJhY2tncm91bmQ6ICNmMDljMmU7ICAgIFxufVxuLm5lLWNhcmQtYm9keSBidXR0b24uYnQtd2hpdGUge1xuICBjb2xvcjogIzRhNGE0YTsgIFxuICB3aWR0aDogN3JlbTtcbiAgbWFyZ2luLWxlZnQ6IDNyZW07XG59XG4ubmUtY2FyZCAuZm9ybS1jb250cm9sLCAubmUtY2FyZCAuaG9uZXktc291cmNlIHtcbiAgd2lkdGg6IDc1JTtcbn1cblxuLm5lLWNhcmQgLnZvbHVtZS11bml0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiA3cmVtO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5uZS1jYXJkICAudHJhY2stY2FyZC1ib2R5IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufS5uZS1jYXJkICAudHJhY2stY2FyZC1ib2R5ICBmb3JtIGlucHV0e1xuICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG4ubmUtY2FyZCAgLnRyYWNrLWNhcmQtYm9keSBmb3JtIGJ1dHRvbiB7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjZWQ0ZGE7XG4gIGJvcmRlci1sZWZ0OiBub25lO1xufVxuXG5cblxuXG4vKiAuZm9ybS1pbmxpbmUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4ubmF2YmFyLWhlYWRlci5jb2wge1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG59XHQgKi9cbi5uYXZiYXIgeyAgICBcbiAgcGFkZGluZzogMDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkNmQ2ZDY7XG4gIGJveC1zaGFkb3c6IDAgMCA0cHggcmdiYSgwLDAsMCwuMSk7XG59XG4ubmF2LWxpbmsgaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogMzZweDtcbiAgaGVpZ2h0OiAzNnB4O1xuICBtYXJnaW46IC04cHggMDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5uYXZiYXIgLmRyb3Bkb3duLW1lbnUgbGkgYTpob3ZlciwgLm5hdmJhciAuZHJvcGRvd24tbWVudSBsaSBhOmFjdGl2ZSB7XG4gIGNvbG9yOiAjMzMzO1xufVx0XG4ubmF2YmFyIC5kcm9wZG93bi1pdGVtIC5tYXRlcmlhbC1pY29ucyB7XG4gIGZvbnQtc2l6ZTogMjFweDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIG1hcmdpbi10b3A6IC0ycHg7XG59XG4ubmF2YmFyIC5iYWRnZSB7XG4gIGJhY2tncm91bmQ6ICNmNDQzMzY7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtaW4td2lkdGg6IDEwcHg7XG4gIHBhZGRpbmc6IDRweCA2cHggMDtcbiAgbWluLWhlaWdodDogMThweDtcbiAgdG9wOiA1cHg7XG59XG4ubmF2YmFyIHVsLm5hdiBsaSBhLm5vdGlmaWNhdGlvbnMsIC5uYXZiYXIgdWwubmF2IGxpIGEubWVzc2FnZXMge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5uYXZiYXIgdWwubmF2IGxpIGEubWVzc2FnZXMge1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG4ubmF2YmFyIGEubm90aWZpY2F0aW9ucyAuYmFkZ2Uge1xuICBtYXJnaW4tbGVmdDogLThweDtcbn1cbi8qIC5uYXZiYXIgYS5tZXNzYWdlcyAuYmFkZ2Uge1xuICBtYXJnaW4tbGVmdDogLTRweDtcbn1cdCAqL1xuLm5hdmJhciAuYWN0aXZlIGEsIC5uYXZiYXIgLmFjdGl2ZSBhOmhvdmVyLCAubmF2YmFyIC5hY3RpdmUgYTpmb2N1cyB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbi5yZWctdXBsb2FkIHtcbiAgd2lkdGg6IDc1JTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5jb3VudGVyQ29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmNvdW50ZXIge1xuICBmb250LXNpemU6IDIuNXJlbTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogNXJlbTtcbiAgdG9wOiAtMC42cmVtO1xufVxuXG4jZGlzcGxheUJ5ICB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuI2Rpc3BsYXlCeSAuc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kOiAjZjA5YzJlO1xuICBjb2xvcjogd2hpdGU7XG59XG4jZGlzcGxheUJ5IC5idG4tb3V0bGluZS1zZWNvbmRhcnk6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4udHJhY2UtaWQtcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYmFja2dyb3VuZDogI2Y4ZjhmODtcbiAgcGFkZGluZzogMC4zcmVtO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcbn1cbi50cmFjZS1pZC1yb3cgLmZhe1xuICBjb2xvcjogI2YwOWQyZjtcbiAgcGFkZGluZzogMXJlbSAycmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4udHJhY2UtaWQtcm93IC5yb3d7XG4gIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xuICBtYXJnaW4tbGVmdDogMDtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xufVxuLnRyYWNlLWlkLXJvdyAucm93IC5jb2wtc20tMiBkaXY6Zmlyc3QtY2hpbGQge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmNoaWxkIHtcbiAgcGFkZGluZy1sZWZ0OiAyJTtcbn1cbi5jaGlsZCAudHJhY2UtaWQtcm93IHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbn1cbi50cmFjZS1pZCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6IGJsdWU7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuXG59XG4ubW9kYWwgLm1vcmUtd2lkdGgge1xuICBtYXgtd2lkdGg6IDcwMHB4ICFpbXBvcnRhbnQ7XG59XG5cblxuLnRyYWNrLWNhcmQtYm9keSAuc2VhcmNoLWZvcm0ge1xuICB3aWR0aDogNzUlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmZhcm1lci1kZXRhaWwtY29udGFpbmVyIHtcbiAgbWFyZ2luOiAycmVtIDA7XG59XG5cbi5mYXJtZXItZGV0YWlsLWNvbnRhaW5lciAuZmFybWVyLWRldGFpbCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xuICBiYWNrZ3JvdW5kOiAjZjhmOGY4O1xuICBwYWRkaW5nOiAxNXB4O1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiA5MCU7XG59XG4uZmFybWVyLWRldGFpbC1jb250YWluZXIgLmZhcm1lci1kZXRhaWwgLmhlYWRlciB7XG4gIG1hcmdpbi1ib3R0b206IDIuNXJlbTtcbn1cbi5mYXJtZXItZGV0YWlsLWNvbnRhaW5lciAuZmFybWVyLWRldGFpbCAuaGVhZGVyIGg1IHtcbiAgZm9udC1zaXplOiAwLjk3cmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5mYXJtZXItZGV0YWlsLWNvbnRhaW5lciAuZmFybWVyLWRldGFpbCBoNiB7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xufVxuLmZhcm1lci1kZXRhaWwtY29udGFpbmVyIC5mYXJtZXItZGV0YWlsIC5ib2R5IHtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cbi5mYXJtZXItZGV0YWlsLWNvbnRhaW5lciAuZmFybWVyLWRldGFpbCAuYm9keSBoNiB7XG4gIHBhZGRpbmctdG9wOiAxcmVtO1xufVxuLmZhcm1lci1kZXRhaWwtY29udGFpbmVyIC5mYXJtZXItZGV0YWlsIC5ib2R5ID4gZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbn1cbi5mYXJtZXItZGV0YWlsLWNvbnRhaW5lciAuZmFybWVyLWRldGFpbCAuYm9keSA+IGRpdiBkaXY6Zmlyc3QtY2hpbGQge1xuICB3aWR0aDogNDAlO1xufVxuXG4ucHJldmlvdXMtdHJhbnNhY3Rpb25zIHtcbiAgYm9yZGVyLXRvcDogMXB4IGRhc2hlZDtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbiAgcGFkZGluZy10b3A6IDFyZW07XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xufVxuLnByZXZpb3VzLXRyYW5zYWN0aW9ucyAucm93IHtcbiAgbWFyZ2luOiAxcmVtIDAuNXJlbTtcbn1cbi5wcmV2aW91cy10cmFuc2FjdGlvbnMgLmNvbC1zbS0yIHtcbiAgcGFkZGluZzogMCA1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5mYXJtZXItZGV0YWlsIC5zaWduYXR1cmUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBtYXJnaW46IDA7XG59XG5cbi5zaWduYXR1cmUgLmZhcm1lci1zaWduLCAgLnNpZ25hdHVyZSAuYWdncmVnYXRvci1zaWduIHtcbiAgaGVpZ2h0OiA4MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZDtcbn1cblxuLmNoaXQtY29udGFpbmVyIHtcbiAgLyogZGlzcGxheTogZmxleDsgKi9cbiAgYmFja2dyb3VuZDogI2U5ZWNlZjtcbiAgd2lkdGg6IDc1JTtcbiAgbWFyZ2luOiAxJSAwO1xuICAvKiBib3JkZXI6IDFweCBzb2xpZCAjZDJkYmRlOyAqL1xuICAvKiBmbGV4LXdyYXA6IHdyYXA7ICovXG59XG4uY2hpdC1jb250YWluZXIgLmNoaXRzIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDElO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgd2hpdGU7XG4gIC8qIHdpZHRoOiBmaXQtY29udGVudDtcbiAgYmFja2dyb3VuZDogIzU1NTU1NTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAzcHggMTJweDtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgbWFyZ2luOiAxJTsgKi9cbn1cblxuLmNoaXQtY29udGFpbmVyIC5jaGl0cyBkaXY6bGFzdC1jaGlsZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmNoaXQtY29udGFpbmVyIC5jaGl0cyBkaXY6bGFzdC1jaGlsZCBkaXYge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIGxlZnQ6IDMycHg7XG59XG4uY2hpdC1jb250YWluZXIgLmNoaXRzIGRpdjpsYXN0LWNoaWxkIGRpdiBzcGFuOmZpcnN0LWNoaWxkIHtcbiAgY29sb3I6ICMxMDY1N2U7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNoaXQtY29udGFpbmVyIC5jaGl0cyBkaXY6bGFzdC1jaGlsZCBkaXYgc3BhbjpudGgtY2hpbGQoMikge1xuICBjb2xvcjogI2I4MWYxZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5cblxuLmNoaXQtY29udGFpbmVyIC5jaGl0cyAuZmEtdGltZXN7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmZvcm0tY2hlY2sge1xuICBtYXJnaW4tbGVmdDogMiU7XG59XG5cblxuI2VkaXRGb3JtIHtcbiAgcGFkZGluZy1yaWdodDogMDtcbn1cbiNlZGl0Rm9ybSAubW9kYWwtZGlhbG9nIHtcbiAgbWF4LXdpZHRoOiA3MCU7XG4gIG1hcmdpbjogMyUgYXV0bztcbn1cblxuI3NlYXJjaFJlc3VsdCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cblxuLyogSGVyZSAqL1xuZGF0YWxpc3R7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICB0ZXh0LWluZGVudDogMXB4O1xuICB0ZXh0LW92ZXJmbG93OiAnJztcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICAvKiBmb3IgQ2hyb21lICovXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuc2VsZWN0IHtcbiAgLyogZm9yIEZpcmVmb3ggKi9cbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICAvKiBmb3IgQ2hyb21lICovXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbn1cblxuLyogRm9yIElFMTAgKi9cbnNlbGVjdDo6LW1zLWV4cGFuZCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59Il19 */"

/***/ }),

/***/ "./src/app/beekeeper/beekeeper.component.ts":
/*!**************************************************!*\
  !*** ./src/app/beekeeper/beekeeper.component.ts ***!
  \**************************************************/
/*! exports provided: BeekeeperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeekeeperComponent", function() { return BeekeeperComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let BeekeeperComponent = class BeekeeperComponent {
    constructor(formBuilder, storage, route) {
        this.formBuilder = formBuilder;
        this.storage = storage;
        this.route = route;
        this.fields = [{ state: '', crop: '' }];
        this.formData = new FormData();
        this.submitted = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        this.first_name = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('Abhay', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.last_name = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('Katiyar', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        this.address = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('g1-83', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        this.state = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('u.p', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        this.city = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('kanpur', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        this.aadhar_number = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('1234567890123456', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^[0-9]*$"),
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(16)]);
        this.quantity = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('123', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        this.Migrate = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        this.colony = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('213', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        this.demand_draft = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('123124134', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^[0-9]*$")]);
        this.amount = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('1000', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^[0-9]*$")]);
        this.beekeeper = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                first_name: this.first_name,
                last_name: this.last_name,
            }),
            address: this.address,
            city: this.city,
            state: this.state,
            aadhar_number: this.aadhar_number,
            quantity: this.quantity,
            // Migrate:this.Migrate,
            colony: this.colony,
            demand_draft: this.demand_draft,
            amount: this.amount
        });
        // document.getElementById('image').files[0]
    }
    toggle() {
        this.migrate = !this.migrate;
        console.log(this.migrate);
    }
    addFields() {
        this.fields.push({ state: '', crop: '' });
    }
    removeFields() {
        if (this.fields.length > 1) {
            this.fields.pop();
        }
    }
    create_UUID() {
        var dt = new Date().getTime();
        var uuid = 'xx-xxx'.replace(/[xy]/g, function (c) {
            var r = (dt + Math.random() * 5) % 5 | 0;
            dt = Math.floor(dt / 5);
            return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(5);
        });
        return uuid;
    }
    onSubmit() {
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        if (this.beekeeper.invalid) {
            const controls = this.beekeeper.controls;
            for (const name in controls) {
                if (controls[name].invalid) {
                    console.log(name);
                }
            }
        }
        else {
            let submit = this.beekeeper.value;
            this.uuid = this.create_UUID();
            submit['migrate'] = this.migrate;
            submit['state_crop'] = this.fields;
            submit['type'] = this.type;
            submit['category'] = this.category;
            submit['term'] = this.term;
            submit['date'] = date;
            submit['uuid'] = this.uuid;
            submit['aadhar'] = this.aadhar_url;
            submit['pp'] = this.pp_url;
            submit = JSON.stringify(submit);
            this.storage.setItem(this.uuid, submit);
            this.submitted.emit(true);
            // this.route.navigate(['admin'])
            console.log(submit);
        }
    }
    aadharUpload(fileInput) {
        let aadhar = fileInput.target.files[0];
        console.log(fileInput.target.files);
        var reader = new FileReader();
        reader.readAsDataURL(fileInput.target.files[0]);
        //  To show the input image
        reader.onload = (event) => {
            // Url for the input image
            this.aadhar_url = reader.result;
            // console.log(this.url)
        };
        document.getElementById("aadhar_upload").innerText = aadhar.name;
    }
    photoUpload(fileInput) {
        let photo = fileInput.target.files[0];
        var reader = new FileReader();
        reader.readAsDataURL(fileInput.target.files[0]);
        //  To show the input image
        reader.onload = (event) => {
            // Url for the input image
            this.pp_url = reader.result;
            // console.log(this.url)
        };
        document.getElementById("photo_upload").innerText = photo.name;
    }
    to_home() {
        this.route.navigate(['/']);
    }
};
BeekeeperComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('term'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], BeekeeperComponent.prototype, "term", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('category'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], BeekeeperComponent.prototype, "category", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('type'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], BeekeeperComponent.prototype, "type", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('submitted'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], BeekeeperComponent.prototype, "submitted", void 0);
BeekeeperComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-beekeeper',
        template: __webpack_require__(/*! raw-loader!./beekeeper.component.html */ "./node_modules/raw-loader/index.js!./src/app/beekeeper/beekeeper.component.html"),
        styles: [__webpack_require__(/*! ./beekeeper.component.css */ "./src/app/beekeeper/beekeeper.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _services_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], BeekeeperComponent);



/***/ }),

/***/ "./src/app/bexpander/bexpander.component.css":
/*!***************************************************!*\
  !*** ./src/app/bexpander/bexpander.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JleHBhbmRlci9iZXhwYW5kZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/bexpander/bexpander.component.ts":
/*!**************************************************!*\
  !*** ./src/app/bexpander/bexpander.component.ts ***!
  \**************************************************/
/*! exports provided: BexpanderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BexpanderComponent", function() { return BexpanderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BexpanderComponent = class BexpanderComponent {
    constructor() { }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('userdata'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], BexpanderComponent.prototype, "userdata", void 0);
BexpanderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bexpander',
        template: __webpack_require__(/*! raw-loader!./bexpander.component.html */ "./node_modules/raw-loader/index.js!./src/app/bexpander/bexpander.component.html"),
        styles: [__webpack_require__(/*! ./bexpander.component.css */ "./src/app/bexpander/bexpander.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], BexpanderComponent);



/***/ }),

/***/ "./src/app/expander/expander.component.css":
/*!*************************************************!*\
  !*** ./src/app/expander/expander.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4cGFuZGVyL2V4cGFuZGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/expander/expander.component.ts":
/*!************************************************!*\
  !*** ./src/app/expander/expander.component.ts ***!
  \************************************************/
/*! exports provided: ExpanderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpanderComponent", function() { return ExpanderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ExpanderComponent = class ExpanderComponent {
    constructor() { }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('userdata'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], ExpanderComponent.prototype, "userdata", void 0);
ExpanderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-otherexpander',
        template: __webpack_require__(/*! raw-loader!./expander.component.html */ "./node_modules/raw-loader/index.js!./src/app/expander/expander.component.html"),
        styles: [__webpack_require__(/*! ./expander.component.css */ "./src/app/expander/expander.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ExpanderComponent);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".custom-nav {\n    height: 70px;\n    width: 100%;\n    background: linear-gradient(to right, #edd252, #f09a2e);\n    display: flex !important; \n }\n.custom-nav .honeycomb-bg {\n    background-position: right;\n    background-image: url('honey_comb.png');\n    background-size: 50%;\n    background-repeat: no-repeat;\n    height: inherit;\n    width: 96%;\n    position: absolute;\n}\n.login-container {\n    padding: 2rem 15rem;\n}\n.bt-login {\n    margin: 2rem auto 1rem;\n    display: block;\n    width: 100%;\n}\n.honey-icon {\n    /* width: 12rem; */\n    background: white;    \n}\n.custom-nav .app-title{\n    font-size: 26px;\n    color: white;\n    /* padding: 1.15rem; */\n    padding-left: 2rem;\n    margin: auto 0;\n}\n.honey-icon img {\n    display: block;\n    margin-left: auto;\n    margin-top: 14px;\n    margin-right: auto;\n    width: 45px;\n    height: 45px;\n}\n.main-body {\n    margin-left: 0;\n    margin-right: 0;\n}\n.tab-panel {\n    background: #555555;\n    padding: 2.5rem 0;\n}\n.tab-panel .button-container {\n    position: relative;\n    padding-bottom: 0.4rem; \n}\n.tab-panel .button-container button {\n    display: block;\n    background-color: inherit;\n    padding: 12px 16px;\n    width: 100%;\n    border: none;\n    outline: none;\n    text-align: center;\n    cursor: pointer;\n    transition: 0.3s;\n    font-size: 14px;\n    color: white;\n}\n.tab-panel .button-container button:hover {\n    background-color: #767676cf;\n}\n.tab-panel .button-container button.active {\n    background-color: #767676;\n    border-left: 8px solid #eed857;\n}\n.tab-panel .button-container button p {\n    margin-bottom: 0;\n    font-size: 29px;\n}\n.arrow-right {\n    width: 0;\n    height: 0;\n    border-left: 17px solid #767676;\n    /* border-right: 0px solid transparent; */\n    border-bottom: 45px solid transparent;\n    border-top: 45px solid transparent;\n    position: absolute;\n    top: 0;\n    right: -17px;\n}\n.hide {\n    display: none;\n}\n.content-container {\n    padding: 2rem;\n}\n.profile-section {\n    position: absolute;\n    right: 0;\n    display: flex;\n    padding-top: 1rem;\n    padding-right: 2rem;\n}\n.profile-section  a {\n    color: white;\n    position: relative;\n}\n.profile-section  .dropdown-menu a {\n    color: black;\n\n}\n.fa-bell {\n    font-size: 25px;\n}\n.badge {\n    background: red;\n    border-radius: 54%;\n    width: 19px;\n    height: 19px;\n    position: absolute;\n    left: 29px;\n    top: 0px;\n    padding: 4px 4px;\n}\n.ne-card {\n    padding-bottom: 2rem;\n    border-radius: 0;\n    border: none;\n    box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2), 0 4px 9px 0 rgba(0, 0, 0, 0.19);\n}\n.ne-card .ne-card-header {\n    background: #eed857;\n    color: white;\n    font-size: 1.2rem;\n    border-radius: 0;\n    border: none;\n    padding: 0.5rem 1.25rem;\n}\n.ne-card .ne-card-body, .ne-card .track-card-body {\n    font-size: 0.8rem;\n}\n.ne-card .ne-card-body .qr-icon, .ne-card .ne-card-body .ne-sliders {\n    font-size: 24px;\n    padding: 7px 1.5rem;\n}\n.ne-card .ne-card-body button.scan {\n    color: white;\n    width: 7rem;\n    border: none;  \n}\n.ne-card .ne-card-body button.scan {\n    background: #f09c2e;    \n}\n.ne-card-body button.bt-white {\n    color: #4a4a4a;  \n    width: 7rem;\n    margin-left: 3rem;\n}\n.ne-card .form-control, .ne-card .honey-source {\n    width: 75%;\n}\n.ne-card .volume-unit {\n    display: block;\n    width: 7rem;\n    font-size: 14px;\n}\n.ne-card  .track-card-body {\n    display: flex;\n    justify-content: space-between;\n}\n.ne-card  .track-card-body  form input{\n    border-right: none;\n    border-radius: 0;\n}\n.ne-card  .track-card-body form button {\n    border-radius: 0;\n    border: 1px solid #ced4da;\n    border-left: none;\n}\n/* .form-inline {\n    display: inline-block;\n}\n.navbar-header.col {\n    padding: 0 !important;\n}\t */\n.navbar {    \n    padding: 0;\n    background: #fff;\n    border-bottom: 1px solid #d6d6d6;\n    box-shadow: 0 0 4px rgba(0,0,0,.1);\n}\n.nav-link img {\n    border-radius: 50%;\n    width: 36px;\n    height: 36px;\n    margin: -8px 0;\n    float: left;\n    margin-right: 10px;\n}\n.navbar .dropdown-menu li a:hover, .navbar .dropdown-menu li a:active {\n    color: #333;\n}\n.navbar .dropdown-item .material-icons {\n    font-size: 21px;\n    line-height: 16px;\n    vertical-align: middle;\n    margin-top: -2px;\n}\n.navbar .badge {\n    background: #f44336;\n    font-size: 11px;\n    border-radius: 20px;\n    position: absolute;\n    min-width: 10px;\n    padding: 4px 6px 0;\n    min-height: 18px;\n    top: 5px;\n}\n.navbar ul.nav li a.notifications, .navbar ul.nav li a.messages {\n    position: relative;\n    margin-right: 10px;\n}\n.navbar ul.nav li a.messages {\n    margin-right: 20px;\n}\n.navbar a.notifications .badge {\n    margin-left: -8px;\n}\n/* .navbar a.messages .badge {\n    margin-left: -4px;\n}\t */\n.navbar .active a, .navbar .active a:hover, .navbar .active a:focus {\n    background: transparent !important;\n}\n.reg-upload {\n    width: 75%;\n    display: block;\n}\n.counterContainer {\n    display: flex;\n    position: relative;\n}\n.counter {\n    font-size: 2.5rem;\n    position: absolute;\n    right: 5rem;\n    top: -0.6rem;\n}\n#displayBy  {\n    color: white;\n    font-size: 14px;\n}\n#displayBy .selected {\n    background: #f09c2e;\n    color: white;\n}\n#displayBy .btn-outline-secondary:hover {\n    background: white;\n    color: black;\n}\n.trace-id-row {\n    display: flex;\n    background: #f8f8f8;\n    padding: 0.3rem;\n    font-size: 13px;\n    border-bottom: 1px solid white;\n}\n.trace-id-row .fa{\n    color: #f09d2f;\n    padding: 1rem 2rem;\n    cursor: pointer;\n}\n.trace-id-row .row{\n    width: -webkit-fill-available;\n    margin-left: 0;\n    margin-right: 0;\n}\n.trace-id-row .row .col-sm-2 div:first-child {\n    font-weight: bold;\n}\n.child {\n    padding-left: 2%;\n}\n.child .trace-id-row {\n    background: none;\n}\n.trace-id {\n    cursor: pointer;\n    color: blue;\n    text-decoration: underline;\n\n}\n.modal .more-width {\n    max-width: 700px !important;\n}\n.track-card-body .search-form {\n    width: 75%;\n    margin: 0 auto;\n}\n.farmer-detail-container {\n    margin: 2rem 0;\n}\n.farmer-detail-container .farmer-detail {\n    border: 1px solid;\n    background: #f8f8f8;\n    padding: 15px;\n    margin: auto;\n    width: 90%;\n}\n.farmer-detail-container .farmer-detail .header {\n    margin-bottom: 2.5rem;\n}\n.farmer-detail-container .farmer-detail .header h5 {\n    font-size: 0.97rem;\n    font-weight: bold;\n}\n.farmer-detail-container .farmer-detail h6 {\n    font-size: 0.9rem;\n}\n.farmer-detail-container .farmer-detail .body {\n    margin-bottom: 2rem;\n}\n.farmer-detail-container .farmer-detail .body h6 {\n    padding-top: 1rem;\n}\n.farmer-detail-container .farmer-detail .body > div {\n    display: flex;\n    font-size: 0.8rem;\n    margin-bottom: 0.5rem;\n}\n.farmer-detail-container .farmer-detail .body > div div:first-child {\n    width: 40%;\n}\n.previous-transactions {\n    border-top: 1px dashed;\n    margin-top: 2rem;\n    padding-top: 1rem;\n    font-size: 0.8rem;\n}\n.previous-transactions .row {\n    margin: 1rem 0.5rem;\n}\n.previous-transactions .col-sm-2 {\n    padding: 0 5px;\n    text-align: center;\n}\n.farmer-detail .signature {\n    text-align: center;\n    font-size: 0.8rem;\n    margin: 0;\n}\n.signature .farmer-sign,  .signature .aggregator-sign {\n    height: 80px;\n    margin: 0 auto;\n    border-bottom: 1px dashed;\n}\n.chit-container {\n    /* display: flex; */\n    background: #e9ecef;\n    width: 75%;\n    margin: 1% 0;\n    /* border: 1px solid #d2dbde; */\n    /* flex-wrap: wrap; */\n}\n.chit-container .chits {\n    text-align: center;\n    margin: 0;\n    padding: 1%;\n    border-bottom: 2px solid white;\n    /* width: fit-content;\n    background: #555555;\n    color: white;\n    padding: 3px 12px;\n    border-radius: 16px;\n    margin: 1%; */\n}\n.chit-container .chits div:last-child {\n    position: relative;\n}\n.chit-container .chits div:last-child div {\n    position: absolute;\n    top: 50%;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n    left: 32px;\n}\n.chit-container .chits div:last-child div span:first-child {\n    color: #10657e;\n    cursor: pointer;\n}\n.chit-container .chits div:last-child div span:nth-child(2) {\n    color: #b81f1f;\n    cursor: pointer;\n}\n.chit-container .chits .fa-times{\n    cursor: pointer;\n}\n.form-check {\n    margin-left: 2%;\n}\n#editForm {\n    padding-right: 0;\n}\n#editForm .modal-dialog {\n    max-width: 70%;\n    margin: 3% auto;\n}\n#searchResult {\n    display: none;\n}\n/* Here */\ndatalist{\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    text-indent: 1px;\n    text-overflow: '';\n    -moz-appearance: none;\n    /* for Chrome */\n    -webkit-appearance: none;\n    display: none;\n}\nselect {\n    /* for Firefox */\n    -moz-appearance: none;\n    /* for Chrome */\n    -webkit-appearance: none;\n  }\n/* For IE10 */\nselect::-ms-expand {\n    display: none;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLHVEQUF1RDtJQUN2RCx3QkFBd0I7Q0FDM0I7QUFDRDtJQUNJLDBCQUEwQjtJQUMxQix1Q0FBa0Q7SUFDbEQsb0JBQW9CO0lBQ3BCLDRCQUE0QjtJQUM1QixlQUFlO0lBQ2YsVUFBVTtJQUNWLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsY0FBYztJQUNkLFdBQVc7QUFDZjtBQUdBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjtBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGNBQWM7QUFDbEI7QUFFQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtBQUNoQjtBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7QUFDbkI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixzQkFBc0I7QUFDMUI7QUFFQTtJQUNJLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSwyQkFBMkI7QUFDL0I7QUFDQTtJQUNJLHlCQUF5QjtJQUN6Qiw4QkFBOEI7QUFDbEM7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25CO0FBR0E7SUFDSSxRQUFRO0lBQ1IsU0FBUztJQUNULCtCQUErQjtJQUMvQix5Q0FBeUM7SUFDekMscUNBQXFDO0lBQ3JDLGtDQUFrQztJQUNsQyxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFFQTtJQUNJLGFBQWE7QUFDakI7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFlBQVk7O0FBRWhCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixRQUFRO0lBQ1IsZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWiwyRUFBMkU7QUFDL0U7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osdUJBQXVCO0FBQzNCO0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7QUFFQTtJQUNJLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsV0FBVztJQUNYLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksVUFBVTtBQUNkO0FBRUE7SUFDSSxjQUFjO0lBQ2QsV0FBVztJQUNYLGVBQWU7QUFDbkI7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7QUFBQztJQUNHLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsaUJBQWlCO0FBQ3JCO0FBS0E7Ozs7O0lBS0k7QUFDSjtJQUNJLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsZ0NBQWdDO0lBQ2hDLGtDQUFrQztBQUN0QztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osY0FBYztJQUNkLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixzQkFBc0I7SUFDdEIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsUUFBUTtBQUNaO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBOztJQUVJO0FBQ0o7SUFDSSxrQ0FBa0M7QUFDdEM7QUFFQTtJQUNJLFVBQVU7SUFDVixjQUFjO0FBQ2xCO0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0FBQ2hCO0FBRUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtBQUNuQjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0FBQ2hCO0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixlQUFlO0lBQ2YsOEJBQThCO0FBQ2xDO0FBQ0E7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLDZCQUE2QjtJQUM3QixjQUFjO0lBQ2QsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCwwQkFBMEI7O0FBRTlCO0FBQ0E7SUFDSSwyQkFBMkI7QUFDL0I7QUFHQTtJQUNJLFVBQVU7SUFDVixjQUFjO0FBQ2xCO0FBRUE7SUFDSSxjQUFjO0FBQ2xCO0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixZQUFZO0lBQ1osVUFBVTtBQUNkO0FBQ0E7SUFDSSxxQkFBcUI7QUFDekI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGFBQWE7SUFDYixpQkFBaUI7SUFDakIscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxVQUFVO0FBQ2Q7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLFNBQVM7QUFDYjtBQUVBO0lBQ0ksWUFBWTtJQUNaLGNBQWM7SUFDZCx5QkFBeUI7QUFDN0I7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLFlBQVk7SUFDWiwrQkFBK0I7SUFDL0IscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFdBQVc7SUFDWCw4QkFBOEI7SUFDOUI7Ozs7O2lCQUthO0FBQ2pCO0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsbUNBQTJCO1lBQTNCLDJCQUEyQjtJQUMzQixVQUFVO0FBQ2Q7QUFDQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0FBQ25CO0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtBQUNuQjtBQUlBO0lBQ0ksZUFBZTtBQUNuQjtBQUVBO0lBQ0ksZUFBZTtBQUNuQjtBQUdBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsZUFBZTtBQUNuQjtBQUVBO0lBQ0ksYUFBYTtBQUNqQjtBQUdBLFNBQVM7QUFDVDtJQUNJLHdCQUF3QjtJQUN4QixxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLHdCQUF3QjtJQUN4QixhQUFhO0FBQ2pCO0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZix3QkFBd0I7RUFDMUI7QUFFQSxhQUFhO0FBQ2I7SUFDRSxhQUFhO0VBQ2YiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jdXN0b20tbmF2IHtcbiAgICBoZWlnaHQ6IDcwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZWRkMjUyLCAjZjA5YTJlKTtcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7IFxuIH1cbi5jdXN0b20tbmF2IC5ob25leWNvbWItYmcge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvaG9uZXlfY29tYi5wbmcpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogNTAlO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgaGVpZ2h0OiBpbmhlcml0O1xuICAgIHdpZHRoOiA5NiU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4ubG9naW4tY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAycmVtIDE1cmVtO1xufVxuXG4uYnQtbG9naW4ge1xuICAgIG1hcmdpbjogMnJlbSBhdXRvIDFyZW07XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cblxuLmhvbmV5LWljb24ge1xuICAgIC8qIHdpZHRoOiAxMnJlbTsgKi9cbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTsgICAgXG59XG5cbi5jdXN0b20tbmF2IC5hcHAtdGl0bGV7XG4gICAgZm9udC1zaXplOiAyNnB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAvKiBwYWRkaW5nOiAxLjE1cmVtOyAqL1xuICAgIHBhZGRpbmctbGVmdDogMnJlbTtcbiAgICBtYXJnaW46IGF1dG8gMDtcbn1cblxuLmhvbmV5LWljb24gaW1nIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tdG9wOiAxNHB4O1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICB3aWR0aDogNDVweDtcbiAgICBoZWlnaHQ6IDQ1cHg7XG59XG5cbi5tYWluLWJvZHkge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIG1hcmdpbi1yaWdodDogMDtcbn1cbi50YWItcGFuZWwge1xuICAgIGJhY2tncm91bmQ6ICM1NTU1NTU7XG4gICAgcGFkZGluZzogMi41cmVtIDA7XG59XG5cbi50YWItcGFuZWwgLmJ1dHRvbi1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMC40cmVtOyBcbn1cblxuLnRhYi1wYW5lbCAuYnV0dG9uLWNvbnRhaW5lciBidXR0b24ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gICAgcGFkZGluZzogMTJweCAxNnB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogMC4zcztcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuLnRhYi1wYW5lbCAuYnV0dG9uLWNvbnRhaW5lciBidXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM3Njc2NzZjZjtcbn1cbi50YWItcGFuZWwgLmJ1dHRvbi1jb250YWluZXIgYnV0dG9uLmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc2NzY3NjtcbiAgICBib3JkZXItbGVmdDogOHB4IHNvbGlkICNlZWQ4NTc7XG59XG4udGFiLXBhbmVsIC5idXR0b24tY29udGFpbmVyIGJ1dHRvbiBwIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIGZvbnQtc2l6ZTogMjlweDtcbn1cblxuXG4uYXJyb3ctcmlnaHQge1xuICAgIHdpZHRoOiAwO1xuICAgIGhlaWdodDogMDtcbiAgICBib3JkZXItbGVmdDogMTdweCBzb2xpZCAjNzY3Njc2O1xuICAgIC8qIGJvcmRlci1yaWdodDogMHB4IHNvbGlkIHRyYW5zcGFyZW50OyAqL1xuICAgIGJvcmRlci1ib3R0b206IDQ1cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXRvcDogNDVweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAtMTdweDtcbn1cbi5oaWRlIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4uY29udGVudC1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDJyZW07XG59XG5cbi5wcm9maWxlLXNlY3Rpb24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xuICAgIHBhZGRpbmctcmlnaHQ6IDJyZW07XG59XG4ucHJvZmlsZS1zZWN0aW9uICBhIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnByb2ZpbGUtc2VjdGlvbiAgLmRyb3Bkb3duLW1lbnUgYSB7XG4gICAgY29sb3I6IGJsYWNrO1xuXG59XG4uZmEtYmVsbCB7XG4gICAgZm9udC1zaXplOiAyNXB4O1xufVxuXG4uYmFkZ2Uge1xuICAgIGJhY2tncm91bmQ6IHJlZDtcbiAgICBib3JkZXItcmFkaXVzOiA1NCU7XG4gICAgd2lkdGg6IDE5cHg7XG4gICAgaGVpZ2h0OiAxOXB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAyOXB4O1xuICAgIHRvcDogMHB4O1xuICAgIHBhZGRpbmc6IDRweCA0cHg7XG59XG5cbi5uZS1jYXJkIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3gtc2hhZG93OiAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNHB4IDlweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG59XG5cbi5uZS1jYXJkIC5uZS1jYXJkLWhlYWRlciB7XG4gICAgYmFja2dyb3VuZDogI2VlZDg1NztcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgcGFkZGluZzogMC41cmVtIDEuMjVyZW07XG59XG5cbi5uZS1jYXJkIC5uZS1jYXJkLWJvZHksIC5uZS1jYXJkIC50cmFjay1jYXJkLWJvZHkge1xuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xufVxuXG4ubmUtY2FyZCAubmUtY2FyZC1ib2R5IC5xci1pY29uLCAubmUtY2FyZCAubmUtY2FyZC1ib2R5IC5uZS1zbGlkZXJzIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgcGFkZGluZzogN3B4IDEuNXJlbTtcbn1cbi5uZS1jYXJkIC5uZS1jYXJkLWJvZHkgYnV0dG9uLnNjYW4ge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB3aWR0aDogN3JlbTtcbiAgICBib3JkZXI6IG5vbmU7ICBcbn1cbi5uZS1jYXJkIC5uZS1jYXJkLWJvZHkgYnV0dG9uLnNjYW4ge1xuICAgIGJhY2tncm91bmQ6ICNmMDljMmU7ICAgIFxufVxuLm5lLWNhcmQtYm9keSBidXR0b24uYnQtd2hpdGUge1xuICAgIGNvbG9yOiAjNGE0YTRhOyAgXG4gICAgd2lkdGg6IDdyZW07XG4gICAgbWFyZ2luLWxlZnQ6IDNyZW07XG59XG4ubmUtY2FyZCAuZm9ybS1jb250cm9sLCAubmUtY2FyZCAuaG9uZXktc291cmNlIHtcbiAgICB3aWR0aDogNzUlO1xufVxuXG4ubmUtY2FyZCAudm9sdW1lLXVuaXQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiA3cmVtO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLm5lLWNhcmQgIC50cmFjay1jYXJkLWJvZHkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufS5uZS1jYXJkICAudHJhY2stY2FyZC1ib2R5ICBmb3JtIGlucHV0e1xuICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xufVxuLm5lLWNhcmQgIC50cmFjay1jYXJkLWJvZHkgZm9ybSBidXR0b24ge1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NlZDRkYTtcbiAgICBib3JkZXItbGVmdDogbm9uZTtcbn1cblxuXG5cblxuLyogLmZvcm0taW5saW5lIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4ubmF2YmFyLWhlYWRlci5jb2wge1xuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbn1cdCAqL1xuLm5hdmJhciB7ICAgIFxuICAgIHBhZGRpbmc6IDA7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Q2ZDZkNjtcbiAgICBib3gtc2hhZG93OiAwIDAgNHB4IHJnYmEoMCwwLDAsLjEpO1xufVxuLm5hdi1saW5rIGltZyB7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHdpZHRoOiAzNnB4O1xuICAgIGhlaWdodDogMzZweDtcbiAgICBtYXJnaW46IC04cHggMDtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4ubmF2YmFyIC5kcm9wZG93bi1tZW51IGxpIGE6aG92ZXIsIC5uYXZiYXIgLmRyb3Bkb3duLW1lbnUgbGkgYTphY3RpdmUge1xuICAgIGNvbG9yOiAjMzMzO1xufVx0XG4ubmF2YmFyIC5kcm9wZG93bi1pdGVtIC5tYXRlcmlhbC1pY29ucyB7XG4gICAgZm9udC1zaXplOiAyMXB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgbWFyZ2luLXRvcDogLTJweDtcbn1cbi5uYXZiYXIgLmJhZGdlIHtcbiAgICBiYWNrZ3JvdW5kOiAjZjQ0MzM2O1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBtaW4td2lkdGg6IDEwcHg7XG4gICAgcGFkZGluZzogNHB4IDZweCAwO1xuICAgIG1pbi1oZWlnaHQ6IDE4cHg7XG4gICAgdG9wOiA1cHg7XG59XG4ubmF2YmFyIHVsLm5hdiBsaSBhLm5vdGlmaWNhdGlvbnMsIC5uYXZiYXIgdWwubmF2IGxpIGEubWVzc2FnZXMge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4ubmF2YmFyIHVsLm5hdiBsaSBhLm1lc3NhZ2VzIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG4ubmF2YmFyIGEubm90aWZpY2F0aW9ucyAuYmFkZ2Uge1xuICAgIG1hcmdpbi1sZWZ0OiAtOHB4O1xufVxuLyogLm5hdmJhciBhLm1lc3NhZ2VzIC5iYWRnZSB7XG4gICAgbWFyZ2luLWxlZnQ6IC00cHg7XG59XHQgKi9cbi5uYXZiYXIgLmFjdGl2ZSBhLCAubmF2YmFyIC5hY3RpdmUgYTpob3ZlciwgLm5hdmJhciAuYWN0aXZlIGE6Zm9jdXMge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbi5yZWctdXBsb2FkIHtcbiAgICB3aWR0aDogNzUlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uY291bnRlckNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uY291bnRlciB7XG4gICAgZm9udC1zaXplOiAyLjVyZW07XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiA1cmVtO1xuICAgIHRvcDogLTAuNnJlbTtcbn1cblxuI2Rpc3BsYXlCeSAge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG4jZGlzcGxheUJ5IC5zZWxlY3RlZCB7XG4gICAgYmFja2dyb3VuZDogI2YwOWMyZTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG4jZGlzcGxheUJ5IC5idG4tb3V0bGluZS1zZWNvbmRhcnk6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxuLnRyYWNlLWlkLXJvdyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBiYWNrZ3JvdW5kOiAjZjhmOGY4O1xuICAgIHBhZGRpbmc6IDAuM3JlbTtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xufVxuLnRyYWNlLWlkLXJvdyAuZmF7XG4gICAgY29sb3I6ICNmMDlkMmY7XG4gICAgcGFkZGluZzogMXJlbSAycmVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbi50cmFjZS1pZC1yb3cgLnJvd3tcbiAgICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG59XG4udHJhY2UtaWQtcm93IC5yb3cgLmNvbC1zbS0yIGRpdjpmaXJzdC1jaGlsZCB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5jaGlsZCB7XG4gICAgcGFkZGluZy1sZWZ0OiAyJTtcbn1cbi5jaGlsZCAudHJhY2UtaWQtcm93IHtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xufVxuLnRyYWNlLWlkIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgY29sb3I6IGJsdWU7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG5cbn1cbi5tb2RhbCAubW9yZS13aWR0aCB7XG4gICAgbWF4LXdpZHRoOiA3MDBweCAhaW1wb3J0YW50O1xufVxuXG5cbi50cmFjay1jYXJkLWJvZHkgLnNlYXJjaC1mb3JtIHtcbiAgICB3aWR0aDogNzUlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uZmFybWVyLWRldGFpbC1jb250YWluZXIge1xuICAgIG1hcmdpbjogMnJlbSAwO1xufVxuXG4uZmFybWVyLWRldGFpbC1jb250YWluZXIgLmZhcm1lci1kZXRhaWwge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xuICAgIGJhY2tncm91bmQ6ICNmOGY4Zjg7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgd2lkdGg6IDkwJTtcbn1cbi5mYXJtZXItZGV0YWlsLWNvbnRhaW5lciAuZmFybWVyLWRldGFpbCAuaGVhZGVyIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyLjVyZW07XG59XG4uZmFybWVyLWRldGFpbC1jb250YWluZXIgLmZhcm1lci1kZXRhaWwgLmhlYWRlciBoNSB7XG4gICAgZm9udC1zaXplOiAwLjk3cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmZhcm1lci1kZXRhaWwtY29udGFpbmVyIC5mYXJtZXItZGV0YWlsIGg2IHtcbiAgICBmb250LXNpemU6IDAuOXJlbTtcbn1cbi5mYXJtZXItZGV0YWlsLWNvbnRhaW5lciAuZmFybWVyLWRldGFpbCAuYm9keSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cbi5mYXJtZXItZGV0YWlsLWNvbnRhaW5lciAuZmFybWVyLWRldGFpbCAuYm9keSBoNiB7XG4gICAgcGFkZGluZy10b3A6IDFyZW07XG59XG4uZmFybWVyLWRldGFpbC1jb250YWluZXIgLmZhcm1lci1kZXRhaWwgLmJvZHkgPiBkaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xufVxuLmZhcm1lci1kZXRhaWwtY29udGFpbmVyIC5mYXJtZXItZGV0YWlsIC5ib2R5ID4gZGl2IGRpdjpmaXJzdC1jaGlsZCB7XG4gICAgd2lkdGg6IDQwJTtcbn1cblxuLnByZXZpb3VzLXRyYW5zYWN0aW9ucyB7XG4gICAgYm9yZGVyLXRvcDogMXB4IGRhc2hlZDtcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xufVxuLnByZXZpb3VzLXRyYW5zYWN0aW9ucyAucm93IHtcbiAgICBtYXJnaW46IDFyZW0gMC41cmVtO1xufVxuLnByZXZpb3VzLXRyYW5zYWN0aW9ucyAuY29sLXNtLTIge1xuICAgIHBhZGRpbmc6IDAgNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5mYXJtZXItZGV0YWlsIC5zaWduYXR1cmUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICBtYXJnaW46IDA7XG59XG5cbi5zaWduYXR1cmUgLmZhcm1lci1zaWduLCAgLnNpZ25hdHVyZSAuYWdncmVnYXRvci1zaWduIHtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZDtcbn1cblxuLmNoaXQtY29udGFpbmVyIHtcbiAgICAvKiBkaXNwbGF5OiBmbGV4OyAqL1xuICAgIGJhY2tncm91bmQ6ICNlOWVjZWY7XG4gICAgd2lkdGg6IDc1JTtcbiAgICBtYXJnaW46IDElIDA7XG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgI2QyZGJkZTsgKi9cbiAgICAvKiBmbGV4LXdyYXA6IHdyYXA7ICovXG59XG4uY2hpdC1jb250YWluZXIgLmNoaXRzIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDElO1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB3aGl0ZTtcbiAgICAvKiB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgYmFja2dyb3VuZDogIzU1NTU1NTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogM3B4IDEycHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgICBtYXJnaW46IDElOyAqL1xufVxuXG4uY2hpdC1jb250YWluZXIgLmNoaXRzIGRpdjpsYXN0LWNoaWxkIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5jaGl0LWNvbnRhaW5lciAuY2hpdHMgZGl2Omxhc3QtY2hpbGQgZGl2IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgIGxlZnQ6IDMycHg7XG59XG4uY2hpdC1jb250YWluZXIgLmNoaXRzIGRpdjpsYXN0LWNoaWxkIGRpdiBzcGFuOmZpcnN0LWNoaWxkIHtcbiAgICBjb2xvcjogIzEwNjU3ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jaGl0LWNvbnRhaW5lciAuY2hpdHMgZGl2Omxhc3QtY2hpbGQgZGl2IHNwYW46bnRoLWNoaWxkKDIpIHtcbiAgICBjb2xvcjogI2I4MWYxZjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cblxuXG4uY2hpdC1jb250YWluZXIgLmNoaXRzIC5mYS10aW1lc3tcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5mb3JtLWNoZWNrIHtcbiAgICBtYXJnaW4tbGVmdDogMiU7XG59XG5cblxuI2VkaXRGb3JtIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xufVxuI2VkaXRGb3JtIC5tb2RhbC1kaWFsb2cge1xuICAgIG1heC13aWR0aDogNzAlO1xuICAgIG1hcmdpbjogMyUgYXV0bztcbn1cblxuI3NlYXJjaFJlc3VsdCB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuXG4vKiBIZXJlICovXG5kYXRhbGlzdHtcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICAgIHRleHQtaW5kZW50OiAxcHg7XG4gICAgdGV4dC1vdmVyZmxvdzogJyc7XG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICAgIC8qIGZvciBDaHJvbWUgKi9cbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuc2VsZWN0IHtcbiAgICAvKiBmb3IgRmlyZWZveCAqL1xuICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgICAvKiBmb3IgQ2hyb21lICovXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICB9XG4gIFxuICAvKiBGb3IgSUUxMCAqL1xuICBzZWxlY3Q6Oi1tcy1leHBhbmQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let HomeComponent = class HomeComponent {
    constructor(route) {
        this.route = route;
    }
    ngOnInit() {
    }
    loginUser() {
        if (this.username === 'admin' && this.password === 'admin') {
            console.log('pass');
            this.route.navigate(['admin']);
        }
        console.log(this.username, this.password);
        console.log('fail');
    }
};
HomeComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], HomeComponent);



/***/ }),

/***/ "./src/app/material-module/material-module.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/material-module/material-module.module.ts ***!
  \***********************************************************/
/*! exports provided: MaterialModuleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModuleModule", function() { return MaterialModuleModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm2015/a11y.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm2015/drag-drop.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm2015/portal.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm2015/scrolling.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/esm2015/stepper.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm2015/table.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm2015/tree.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm2015/autocomplete.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/esm2015/badge.js");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/esm2015/bottom-sheet.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm2015/button-toggle.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm2015/checkbox.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm2015/chips.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm2015/stepper.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm2015/datepicker.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm2015/divider.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm2015/expansion.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm2015/grid-list.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm2015/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm2015/progress-bar.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm2015/progress-spinner.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm2015/radio.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm2015/sidenav.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm2015/slider.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm2015/slide-toggle.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm2015/tabs.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/esm2015/tree.js");












































let MaterialModuleModule = class MaterialModuleModule {
};
MaterialModuleModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        exports: [
            _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["A11yModule"],
            _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_7__["CdkStepperModule"],
            _angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__["CdkTableModule"],
            _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_9__["CdkTreeModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__["DragDropModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__["MatAutocompleteModule"],
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_11__["MatBadgeModule"],
            _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_12__["MatBottomSheetModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_14__["MatButtonToggleModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__["MatCheckboxModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_17__["MatChipsModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_18__["MatStepperModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__["MatDatepickerModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__["MatDialogModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__["MatDividerModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_22__["MatExpansionModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_23__["MatGridListModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__["MatIconModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_25__["MatInputModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_26__["MatListModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_27__["MatMenuModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_28__["MatNativeDateModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_29__["MatPaginatorModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_30__["MatProgressBarModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_31__["MatProgressSpinnerModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_32__["MatRadioModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_28__["MatRippleModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_33__["MatSelectModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_34__["MatSidenavModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_35__["MatSliderModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_36__["MatSlideToggleModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_37__["MatSnackBarModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_38__["MatSortModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_39__["MatTableModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_40__["MatTabsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_41__["MatToolbarModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_42__["MatTooltipModule"],
            _angular_material_tree__WEBPACK_IMPORTED_MODULE_43__["MatTreeModule"],
            _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__["PortalModule"],
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__["ScrollingModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ]
    })
], MaterialModuleModule);



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".custom-nav {\n    height: 70px;\n    width: 100%;\n    background: linear-gradient(to right, #edd252, #f09a2e);\n    display: flex !important; \n }\n.custom-nav .honeycomb-bg {\n    background-position: right;\n    background-image: url('honey_comb.png');\n    background-size: 50%;\n    background-repeat: no-repeat;\n    height: inherit;\n    width: 96%;\n    position: absolute;\n}\n.login-container {\n    padding: 2rem 15rem;\n}\n.bt-login {\n    margin: 2rem auto 1rem;\n    display: block;\n    width: 100%;\n}\n.honey-icon {\n    /* width: 12rem; */\n    background: white;    \n}\n.custom-nav .app-title{\n    font-size: 26px;\n    color: white;\n    /* padding: 1.15rem; */\n    padding-left: 2rem;\n    margin: auto 0;\n}\n.honey-icon img {\n    display: block;\n    margin-left: auto;\n    margin-top: 14px;\n    margin-right: auto;\n    width: 45px;\n    height: 45px;\n}\n.main-body {\n    margin-left: 0;\n    margin-right: 0;\n}\n.tab-panel {\n    background: #555555;\n    padding: 2.5rem 0;\n}\n.tab-panel .button-container {\n    position: relative;\n    padding-bottom: 0.4rem; \n}\n.tab-panel .button-container button {\n    display: block;\n    background-color: inherit;\n    padding: 12px 16px;\n    width: 100%;\n    border: none;\n    outline: none;\n    text-align: center;\n    cursor: pointer;\n    transition: 0.3s;\n    font-size: 14px;\n    color: white;\n}\n.tab-panel .button-container button:hover {\n    background-color: #767676cf;\n}\n.tab-panel .button-container button.active {\n    background-color: #767676;\n    border-left: 8px solid #eed857;\n}\n.tab-panel .button-container button p {\n    margin-bottom: 0;\n    font-size: 29px;\n}\n.arrow-right {\n    width: 0;\n    height: 0;\n    border-left: 17px solid #767676;\n    /* border-right: 0px solid transparent; */\n    border-bottom: 45px solid transparent;\n    border-top: 45px solid transparent;\n    position: absolute;\n    top: 0;\n    right: -17px;\n}\n.hide {\n    display: none;\n}\n.content-container {\n    padding: 2rem;\n}\n.profile-section {\n    position: absolute;\n    right: 0;\n    display: flex;\n    padding-top: 1rem;\n    padding-right: 2rem;\n}\n.profile-section  a {\n    color: white;\n    position: relative;\n}\n.profile-section  .dropdown-menu a {\n    color: black;\n\n}\n.fa-bell {\n    font-size: 25px;\n}\n.badge {\n    background: red;\n    border-radius: 54%;\n    width: 19px;\n    height: 19px;\n    position: absolute;\n    left: 29px;\n    top: 0px;\n    padding: 4px 4px;\n}\n.ne-card {\n    padding-bottom: 2rem;\n    border-radius: 0;\n    border: none;\n    box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2), 0 4px 9px 0 rgba(0, 0, 0, 0.19);\n}\n.ne-card .ne-card-header {\n    background: #eed857;\n    color: white;\n    font-size: 1.2rem;\n    border-radius: 0;\n    border: none;\n    padding: 0.5rem 1.25rem;\n}\n.ne-card .ne-card-body, .ne-card .track-card-body {\n    font-size: 0.8rem;\n}\n.ne-card .ne-card-body .qr-icon, .ne-card .ne-card-body .ne-sliders {\n    font-size: 24px;\n    padding: 7px 1.5rem;\n}\n.ne-card .ne-card-body button.scan {\n    color: white;\n    width: 7rem;\n    border: none;  \n}\n.ne-card .ne-card-body button.scan {\n    background: #f09c2e;    \n}\n.ne-card-body button.bt-white {\n    color: #4a4a4a;  \n    width: 7rem;\n    margin-left: 3rem;\n}\n.ne-card .form-control, .ne-card .honey-source {\n    width: 75%;\n}\n.ne-card .volume-unit {\n    display: block;\n    width: 7rem;\n    font-size: 14px;\n}\n.ne-card  .track-card-body {\n    display: flex;\n    justify-content: space-between;\n}\n.ne-card  .track-card-body  form input{\n    border-right: none;\n    border-radius: 0;\n}\n.ne-card  .track-card-body form button {\n    border-radius: 0;\n    border: 1px solid #ced4da;\n    border-left: none;\n}\n/* .form-inline {\n    display: inline-block;\n}\n.navbar-header.col {\n    padding: 0 !important;\n}\t */\n.navbar {    \n    padding: 0;\n    background: #fff;\n    border-bottom: 1px solid #d6d6d6;\n    box-shadow: 0 0 4px rgba(0,0,0,.1);\n}\n.nav-link img {\n    border-radius: 50%;\n    width: 36px;\n    height: 36px;\n    margin: -8px 0;\n    float: left;\n    margin-right: 10px;\n}\n.navbar .dropdown-menu li a:hover, .navbar .dropdown-menu li a:active {\n    color: #333;\n}\n.navbar .dropdown-item .material-icons {\n    font-size: 21px;\n    line-height: 16px;\n    vertical-align: middle;\n    margin-top: -2px;\n}\n.navbar .badge {\n    background: #f44336;\n    font-size: 11px;\n    border-radius: 20px;\n    position: absolute;\n    min-width: 10px;\n    padding: 4px 6px 0;\n    min-height: 18px;\n    top: 5px;\n}\n.navbar ul.nav li a.notifications, .navbar ul.nav li a.messages {\n    position: relative;\n    margin-right: 10px;\n}\n.navbar ul.nav li a.messages {\n    margin-right: 20px;\n}\n.navbar a.notifications .badge {\n    margin-left: -8px;\n}\n/* .navbar a.messages .badge {\n    margin-left: -4px;\n}\t */\n.navbar .active a, .navbar .active a:hover, .navbar .active a:focus {\n    background: transparent !important;\n}\n.reg-upload {\n    width: 75%;\n    display: block;\n}\n.counterContainer {\n    display: flex;\n    position: relative;\n}\n.counter {\n    font-size: 2.5rem;\n    position: absolute;\n    right: 5rem;\n    top: -0.6rem;\n}\n#displayBy  {\n    color: white;\n    font-size: 14px;\n}\n#displayBy .selected {\n    background: #f09c2e;\n    color: white;\n}\n#displayBy .btn-outline-secondary:hover {\n    background: white;\n    color: black;\n}\n.trace-id-row {\n    display: flex;\n    background: #f8f8f8;\n    padding: 0.3rem;\n    font-size: 13px;\n    border-bottom: 1px solid white;\n}\n.trace-id-row .fa{\n    color: #f09d2f;\n    padding: 1rem 2rem;\n    cursor: pointer;\n}\n.trace-id-row .row{\n    width: -webkit-fill-available;\n    margin-left: 0;\n    margin-right: 0;\n}\n.trace-id-row .row .col-sm-2 div:first-child {\n    font-weight: bold;\n}\n.child {\n    padding-left: 2%;\n}\n.child .trace-id-row {\n    background: none;\n}\n.trace-id {\n    cursor: pointer;\n    color: blue;\n    text-decoration: underline;\n\n}\n.modal .more-width {\n    max-width: 700px !important;\n}\n.track-card-body .search-form {\n    width: 75%;\n    margin: 0 auto;\n}\n.farmer-detail-container {\n    margin: 2rem 0;\n}\n.farmer-detail-container .farmer-detail {\n    border: 1px solid;\n    background: #f8f8f8;\n    padding: 15px;\n    margin: auto;\n    width: 90%;\n}\n.farmer-detail-container .farmer-detail .header {\n    margin-bottom: 2.5rem;\n}\n.farmer-detail-container .farmer-detail .header h5 {\n    font-size: 0.97rem;\n    font-weight: bold;\n}\n.farmer-detail-container .farmer-detail h6 {\n    font-size: 0.9rem;\n}\n.farmer-detail-container .farmer-detail .body {\n    margin-bottom: 2rem;\n}\n.farmer-detail-container .farmer-detail .body h6 {\n    padding-top: 1rem;\n}\n.farmer-detail-container .farmer-detail .body > div {\n    display: flex;\n    font-size: 0.8rem;\n    margin-bottom: 0.5rem;\n}\n.farmer-detail-container .farmer-detail .body > div div:first-child {\n    width: 40%;\n}\n.previous-transactions {\n    border-top: 1px dashed;\n    margin-top: 2rem;\n    padding-top: 1rem;\n    font-size: 0.8rem;\n}\n.previous-transactions .row {\n    margin: 1rem 0.5rem;\n}\n.previous-transactions .col-sm-2 {\n    padding: 0 5px;\n    text-align: center;\n}\n.farmer-detail .signature {\n    text-align: center;\n    font-size: 0.8rem;\n    margin: 0;\n}\n.signature .farmer-sign,  .signature .aggregator-sign {\n    height: 80px;\n    margin: 0 auto;\n    border-bottom: 1px dashed;\n}\n.chit-container {\n    /* display: flex; */\n    background: #e9ecef;\n    width: 75%;\n    margin: 1% 0;\n    /* border: 1px solid #d2dbde; */\n    /* flex-wrap: wrap; */\n}\n.chit-container .chits {\n    text-align: center;\n    margin: 0;\n    padding: 1%;\n    border-bottom: 2px solid white;\n    /* width: fit-content;\n    background: #555555;\n    color: white;\n    padding: 3px 12px;\n    border-radius: 16px;\n    margin: 1%; */\n}\n.chit-container .chits div:last-child {\n    position: relative;\n}\n.chit-container .chits div:last-child div {\n    position: absolute;\n    top: 50%;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n    left: 32px;\n}\n.chit-container .chits div:last-child div span:first-child {\n    color: #10657e;\n    cursor: pointer;\n}\n.chit-container .chits div:last-child div span:nth-child(2) {\n    color: #b81f1f;\n    cursor: pointer;\n}\n.chit-container .chits .fa-times{\n    cursor: pointer;\n}\n.form-check {\n    margin-left: 2%;\n}\n#editForm {\n    padding-right: 0;\n}\n#editForm .modal-dialog {\n    max-width: 70%;\n    margin: 3% auto;\n}\n#searchResult {\n    display: none;\n}\n/* Here */\ndatalist{\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    text-indent: 1px;\n    text-overflow: '';\n    -moz-appearance: none;\n    /* for Chrome */\n    -webkit-appearance: none;\n    display: none;\n}\nselect {\n    /* for Firefox */\n    -moz-appearance: none;\n    /* for Chrome */\n    -webkit-appearance: none;\n  }\n/* For IE10 */\nselect::-ms-expand {\n    display: none;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCx1REFBdUQ7SUFDdkQsd0JBQXdCO0NBQzNCO0FBQ0Q7SUFDSSwwQkFBMEI7SUFDMUIsdUNBQWtEO0lBQ2xELG9CQUFvQjtJQUNwQiw0QkFBNEI7SUFDNUIsZUFBZTtJQUNmLFVBQVU7SUFDVixrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGNBQWM7SUFDZCxXQUFXO0FBQ2Y7QUFHQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7QUFFQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixjQUFjO0FBQ2xCO0FBRUE7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7QUFDaEI7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JCO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsc0JBQXNCO0FBQzFCO0FBRUE7SUFDSSxjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksMkJBQTJCO0FBQy9CO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsOEJBQThCO0FBQ2xDO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjtBQUdBO0lBQ0ksUUFBUTtJQUNSLFNBQVM7SUFDVCwrQkFBK0I7SUFDL0IseUNBQXlDO0lBQ3pDLHFDQUFxQztJQUNyQyxrQ0FBa0M7SUFDbEMsa0JB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akI7QUFHQSxTQUFTO0FBQ1Q7SUFDSSx3QkFBd0I7SUFDeEIscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZix3QkFBd0I7SUFDeEIsYUFBYTtBQUNqQjtBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2Ysd0JBQXdCO0VBQzFCO0FBRUEsYUFBYTtBQUNiO0lBQ0UsYUFBYTtFQUNmIiwiZmlsZSI6InNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmN1c3RvbS1uYXYge1xuICAgIGhlaWdodDogNzBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNlZGQyNTIsICNmMDlhMmUpO1xuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDsgXG4gfVxuLmN1c3RvbS1uYXYgLmhvbmV5Y29tYi1iZyB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQ7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9ob25leV9jb21iLnBuZyk7XG4gICAgYmFja2dyb3VuZC1zaXplOiA1MCU7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XG4gICAgd2lkdGg6IDk2JTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5sb2dpbi1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDJyZW0gMTVyZW07XG59XG5cbi5idC1sb2dpbiB7XG4gICAgbWFyZ2luOiAycmVtIGF1dG8gMXJlbTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuXG4uaG9uZXktaWNvbiB7XG4gICAgLyogd2lkdGg6IDEycmVtOyAqL1xuICAgIGJhY2tncm91bmQ6IHdoaXRlOyAgICBcbn1cblxuLmN1c3RvbS1uYXYgLmFwcC10aXRsZXtcbiAgICBmb250LXNpemU6IDI2cHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIC8qIHBhZGRpbmc6IDEuMTVyZW07ICovXG4gICAgcGFkZGluZy1sZWZ0OiAycmVtO1xuICAgIG1hcmdpbjogYXV0byAwO1xufVxuXG4uaG9uZXktaWNvbiBpbWcge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi10b3A6IDE0cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIHdpZHRoOiA0NXB4O1xuICAgIGhlaWdodDogNDVweDtcbn1cblxuLm1haW4tYm9keSB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xufVxuLnRhYi1wYW5lbCB7XG4gICAgYmFja2dyb3VuZDogIzU1NTU1NTtcbiAgICBwYWRkaW5nOiAyLjVyZW0gMDtcbn1cblxuLnRhYi1wYW5lbCAuYnV0dG9uLWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmctYm90dG9tOiAwLjRyZW07IFxufVxuXG4udGFiLXBhbmVsIC5idXR0b24tY29udGFpbmVyIGJ1dHRvbiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgICBwYWRkaW5nOiAxMnB4IDE2cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogd2hpdGU7XG59XG4udGFiLXBhbmVsIC5idXR0b24tY29udGFpbmVyIGJ1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc2NzY3NmNmO1xufVxuLnRhYi1wYW5lbCAuYnV0dG9uLWNvbnRhaW5lciBidXR0b24uYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzY3Njc2O1xuICAgIGJvcmRlci1sZWZ0OiA4cHggc29saWQgI2VlZDg1Nztcbn1cbi50YWItcGFuZWwgLmJ1dHRvbi1jb250YWluZXIgYnV0dG9uIHAge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgZm9udC1zaXplOiAyOXB4O1xufVxuXG5cbi5hcnJvdy1yaWdodCB7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAwO1xuICAgIGJvcmRlci1sZWZ0OiAxN3B4IHNvbGlkICM3Njc2NzY7XG4gICAgLyogYm9yZGVyLXJpZ2h0OiAwcHggc29saWQgdHJhbnNwYXJlbnQ7ICovXG4gICAgYm9yZGVyLWJvdHRvbTogNDVweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItdG9wOiA0NXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IC0xN3B4O1xufVxuLmhpZGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5jb250ZW50LWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMnJlbTtcbn1cblxuLnByb2ZpbGUtc2VjdGlvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcGFkZGluZy10b3A6IDFyZW07XG4gICAgcGFkZGluZy1yaWdodDogMnJlbTtcbn1cbi5wcm9maWxlLXNlY3Rpb24gIGEge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ucHJvZmlsZS1zZWN0aW9uICAuZHJvcGRvd24tbWVudSBhIHtcbiAgICBjb2xvcjogYmxhY2s7XG5cbn1cbi5mYS1iZWxsIHtcbiAgICBmb250LXNpemU6IDI1cHg7XG59XG5cbi5iYWRnZSB7XG4gICAgYmFja2dyb3VuZDogcmVkO1xuICAgIGJvcmRlci1yYWRpdXM6IDU0JTtcbiAgICB3aWR0aDogMTlweDtcbiAgICBoZWlnaHQ6IDE5cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDI5cHg7XG4gICAgdG9wOiAwcHg7XG4gICAgcGFkZGluZzogNHB4IDRweDtcbn1cblxuLm5lLWNhcmQge1xuICAgIHBhZGRpbmctYm90dG9tOiAycmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA0cHggOXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbn1cblxuLm5lLWNhcmQgLm5lLWNhcmQtaGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjZWVkODU3O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBwYWRkaW5nOiAwLjVyZW0gMS4yNXJlbTtcbn1cblxuLm5lLWNhcmQgLm5lLWNhcmQtYm9keSwgLm5lLWNhcmQgLnRyYWNrLWNhcmQtYm9keSB7XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG59XG5cbi5uZS1jYXJkIC5uZS1jYXJkLWJvZHkgLnFyLWljb24sIC5uZS1jYXJkIC5uZS1jYXJkLWJvZHkgLm5lLXNsaWRlcnMge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBwYWRkaW5nOiA3cHggMS41cmVtO1xufVxuLm5lLWNhcmQgLm5lLWNhcmQtYm9keSBidXR0b24uc2NhbiB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHdpZHRoOiA3cmVtO1xuICAgIGJvcmRlcjogbm9uZTsgIFxufVxuLm5lLWNhcmQgLm5lLWNhcmQtYm9keSBidXR0b24uc2NhbiB7XG4gICAgYmFja2dyb3VuZDogI2YwOWMyZTsgICAgXG59XG4ubmUtY2FyZC1ib2R5IGJ1dHRvbi5idC13aGl0ZSB7XG4gICAgY29sb3I6ICM0YTRhNGE7ICBcbiAgICB3aWR0aDogN3JlbTtcbiAgICBtYXJnaW4tbGVmdDogM3JlbTtcbn1cbi5uZS1jYXJkIC5mb3JtLWNvbnRyb2wsIC5uZS1jYXJkIC5ob25leS1zb3VyY2Uge1xuICAgIHdpZHRoOiA3NSU7XG59XG5cbi5uZS1jYXJkIC52b2x1bWUtdW5pdCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDdyZW07XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4ubmUtY2FyZCAgLnRyYWNrLWNhcmQtYm9keSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59Lm5lLWNhcmQgIC50cmFjay1jYXJkLWJvZHkgIGZvcm0gaW5wdXR7XG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG59XG4ubmUtY2FyZCAgLnRyYWNrLWNhcmQtYm9keSBmb3JtIGJ1dHRvbiB7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2VkNGRhO1xuICAgIGJvcmRlci1sZWZ0OiBub25lO1xufVxuXG5cblxuXG4vKiAuZm9ybS1pbmxpbmUge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5uYXZiYXItaGVhZGVyLmNvbCB7XG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xufVx0ICovXG4ubmF2YmFyIHsgICAgXG4gICAgcGFkZGluZzogMDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDZkNmQ2O1xuICAgIGJveC1zaGFkb3c6IDAgMCA0cHggcmdiYSgwLDAsMCwuMSk7XG59XG4ubmF2LWxpbmsgaW1nIHtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgd2lkdGg6IDM2cHg7XG4gICAgaGVpZ2h0OiAzNnB4O1xuICAgIG1hcmdpbjogLThweCAwO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5uYXZiYXIgLmRyb3Bkb3duLW1lbnUgbGkgYTpob3ZlciwgLm5hdmJhciAuZHJvcGRvd24tbWVudSBsaSBhOmFjdGl2ZSB7XG4gICAgY29sb3I6ICMzMzM7XG59XHRcbi5uYXZiYXIgLmRyb3Bkb3duLWl0ZW0gLm1hdGVyaWFsLWljb25zIHtcbiAgICBmb250LXNpemU6IDIxcHg7XG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBtYXJnaW4tdG9wOiAtMnB4O1xufVxuLm5hdmJhciAuYmFkZ2Uge1xuICAgIGJhY2tncm91bmQ6ICNmNDQzMzY7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG1pbi13aWR0aDogMTBweDtcbiAgICBwYWRkaW5nOiA0cHggNnB4IDA7XG4gICAgbWluLWhlaWdodDogMThweDtcbiAgICB0b3A6IDVweDtcbn1cbi5uYXZiYXIgdWwubmF2IGxpIGEubm90aWZpY2F0aW9ucywgLm5hdmJhciB1bC5uYXYgbGkgYS5tZXNzYWdlcyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5uYXZiYXIgdWwubmF2IGxpIGEubWVzc2FnZXMge1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbn1cbi5uYXZiYXIgYS5ub3RpZmljYXRpb25zIC5iYWRnZSB7XG4gICAgbWFyZ2luLWxlZnQ6IC04cHg7XG59XG4vKiAubmF2YmFyIGEubWVzc2FnZXMgLmJhZGdlIHtcbiAgICBtYXJnaW4tbGVmdDogLTRweDtcbn1cdCAqL1xuLm5hdmJhciAuYWN0aXZlIGEsIC5uYXZiYXIgLmFjdGl2ZSBhOmhvdmVyLCAubmF2YmFyIC5hY3RpdmUgYTpmb2N1cyB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuLnJlZy11cGxvYWQge1xuICAgIHdpZHRoOiA3NSU7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5jb3VudGVyQ29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5jb3VudGVyIHtcbiAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDVyZW07XG4gICAgdG9wOiAtMC42cmVtO1xufVxuXG4jZGlzcGxheUJ5ICB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cbiNkaXNwbGF5QnkgLnNlbGVjdGVkIHtcbiAgICBiYWNrZ3JvdW5kOiAjZjA5YzJlO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbiNkaXNwbGF5QnkgLmJ0bi1vdXRsaW5lLXNlY29uZGFyeTpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuXG4udHJhY2UtaWQtcm93IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJhY2tncm91bmQ6ICNmOGY4Zjg7XG4gICAgcGFkZGluZzogMC4zcmVtO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGU7XG59XG4udHJhY2UtaWQtcm93IC5mYXtcbiAgICBjb2xvcjogI2YwOWQyZjtcbiAgICBwYWRkaW5nOiAxcmVtIDJyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnRyYWNlLWlkLXJvdyAucm93e1xuICAgIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIG1hcmdpbi1yaWdodDogMDtcbn1cbi50cmFjZS1pZC1yb3cgLnJvdyAuY29sLXNtLTIgZGl2OmZpcnN0LWNoaWxkIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmNoaWxkIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDIlO1xufVxuLmNoaWxkIC50cmFjZS1pZC1yb3cge1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG59XG4udHJhY2UtaWQge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBjb2xvcjogYmx1ZTtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcblxufVxuLm1vZGFsIC5tb3JlLXdpZHRoIHtcbiAgICBtYXgtd2lkdGg6IDcwMHB4ICFpbXBvcnRhbnQ7XG59XG5cblxuLnRyYWNrLWNhcmQtYm9keSAuc2VhcmNoLWZvcm0ge1xuICAgIHdpZHRoOiA3NSU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5mYXJtZXItZGV0YWlsLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luOiAycmVtIDA7XG59XG5cbi5mYXJtZXItZGV0YWlsLWNvbnRhaW5lciAuZmFybWVyLWRldGFpbCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQ7XG4gICAgYmFja2dyb3VuZDogI2Y4ZjhmODtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB3aWR0aDogOTAlO1xufVxuLmZhcm1lci1kZXRhaWwtY29udGFpbmVyIC5mYXJtZXItZGV0YWlsIC5oZWFkZXIge1xuICAgIG1hcmdpbi1ib3R0b206IDIuNXJlbTtcbn1cbi5mYXJtZXItZGV0YWlsLWNvbnRhaW5lciAuZmFybWVyLWRldGFpbCAuaGVhZGVyIGg1IHtcbiAgICBmb250LXNpemU6IDAuOTdyZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uZmFybWVyLWRldGFpbC1jb250YWluZXIgLmZhcm1lci1kZXRhaWwgaDYge1xuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xufVxuLmZhcm1lci1kZXRhaWwtY29udGFpbmVyIC5mYXJtZXItZGV0YWlsIC5ib2R5IHtcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuLmZhcm1lci1kZXRhaWwtY29udGFpbmVyIC5mYXJtZXItZGV0YWlsIC5ib2R5IGg2IHtcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcbn1cbi5mYXJtZXItZGV0YWlsLWNvbnRhaW5lciAuZmFybWVyLWRldGFpbCAuYm9keSA+IGRpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG59XG4uZmFybWVyLWRldGFpbC1jb250YWluZXIgLmZhcm1lci1kZXRhaWwgLmJvZHkgPiBkaXYgZGl2OmZpcnN0LWNoaWxkIHtcbiAgICB3aWR0aDogNDAlO1xufVxuXG4ucHJldmlvdXMtdHJhbnNhY3Rpb25zIHtcbiAgICBib3JkZXItdG9wOiAxcHggZGFzaGVkO1xuICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgcGFkZGluZy10b3A6IDFyZW07XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG59XG4ucHJldmlvdXMtdHJhbnNhY3Rpb25zIC5yb3cge1xuICAgIG1hcmdpbjogMXJlbSAwLjVyZW07XG59XG4ucHJldmlvdXMtdHJhbnNhY3Rpb25zIC5jb2wtc20tMiB7XG4gICAgcGFkZGluZzogMCA1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmZhcm1lci1kZXRhaWwgLnNpZ25hdHVyZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgIG1hcmdpbjogMDtcbn1cblxuLnNpZ25hdHVyZSAuZmFybWVyLXNpZ24sICAuc2lnbmF0dXJlIC5hZ2dyZWdhdG9yLXNpZ24ge1xuICAgIGhlaWdodDogODBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkO1xufVxuXG4uY2hpdC1jb250YWluZXIge1xuICAgIC8qIGRpc3BsYXk6IGZsZXg7ICovXG4gICAgYmFja2dyb3VuZDogI2U5ZWNlZjtcbiAgICB3aWR0aDogNzUlO1xuICAgIG1hcmdpbjogMSUgMDtcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCAjZDJkYmRlOyAqL1xuICAgIC8qIGZsZXgtd3JhcDogd3JhcDsgKi9cbn1cbi5jaGl0LWNvbnRhaW5lciAuY2hpdHMge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMSU7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHdoaXRlO1xuICAgIC8qIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICBiYWNrZ3JvdW5kOiAjNTU1NTU1O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAzcHggMTJweDtcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICAgIG1hcmdpbjogMSU7ICovXG59XG5cbi5jaGl0LWNvbnRhaW5lciAuY2hpdHMgZGl2Omxhc3QtY2hpbGQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmNoaXQtY29udGFpbmVyIC5jaGl0cyBkaXY6bGFzdC1jaGlsZCBkaXYge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgbGVmdDogMzJweDtcbn1cbi5jaGl0LWNvbnRhaW5lciAuY2hpdHMgZGl2Omxhc3QtY2hpbGQgZGl2IHNwYW46Zmlyc3QtY2hpbGQge1xuICAgIGNvbG9yOiAjMTA2NTdlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNoaXQtY29udGFpbmVyIC5jaGl0cyBkaXY6bGFzdC1jaGlsZCBkaXYgc3BhbjpudGgtY2hpbGQoMikge1xuICAgIGNvbG9yOiAjYjgxZjFmO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuXG5cbi5jaGl0LWNvbnRhaW5lciAuY2hpdHMgLmZhLXRpbWVze1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmZvcm0tY2hlY2sge1xuICAgIG1hcmdpbi1sZWZ0OiAyJTtcbn1cblxuXG4jZWRpdEZvcm0ge1xuICAgIHBhZGRpbmctcmlnaHQ6IDA7XG59XG4jZWRpdEZvcm0gLm1vZGFsLWRpYWxvZyB7XG4gICAgbWF4LXdpZHRoOiA3MCU7XG4gICAgbWFyZ2luOiAzJSBhdXRvO1xufVxuXG4jc2VhcmNoUmVzdWx0IHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG5cbi8qIEhlcmUgKi9cbmRhdGFsaXN0e1xuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgdGV4dC1pbmRlbnQ6IDFweDtcbiAgICB0ZXh0LW92ZXJmbG93OiAnJztcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgLyogZm9yIENocm9tZSAqL1xuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG5zZWxlY3Qge1xuICAgIC8qIGZvciBGaXJlZm94ICovXG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICAgIC8qIGZvciBDaHJvbWUgKi9cbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIH1cbiAgXG4gIC8qIEZvciBJRTEwICovXG4gIHNlbGVjdDo6LW1zLWV4cGFuZCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NavbarComponent = class NavbarComponent {
    constructor() { }
    ngOnInit() {
    }
};
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/navbar/navbar.component.html"),
        styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], NavbarComponent);



/***/ }),

/***/ "./src/app/other/other.component.css":
/*!*******************************************!*\
  !*** ./src/app/other/other.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL290aGVyL290aGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/other/other.component.ts":
/*!******************************************!*\
  !*** ./src/app/other/other.component.ts ***!
  \******************************************/
/*! exports provided: OtherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtherComponent", function() { return OtherComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let OtherComponent = class OtherComponent {
    constructor(storage, route) {
        this.storage = storage;
        this.route = route;
        this.othersubmitted = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        this.state = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('u.p', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        this.city = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('kanpur', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        this.name = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('Abhay Katiyar', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        this.cin_number = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('1234567890123456', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^[0-9]*$"),
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(16)]);
        this.address = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('g1-83', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        this.colony = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('213', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        this.quantity = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('123', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        this.amount = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('1000', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^[0-9]*$")]);
        this.demand_draft = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('123124134', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^[0-9]*$")]);
        this.other_individual = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: this.name,
            address: this.address,
            city: this.city,
            state: this.state,
            quantity: this.quantity,
            colony: this.colony,
            demand_draft: this.demand_draft,
            amount: this.amount,
            cin_number: this.cin_number
        });
    }
    create_UUID() {
        var dt = new Date().getTime();
        // var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        //     var r = (dt + Math.random()*16)%16 | 0;
        //     dt = Math.floor(dt/16);
        //     return (c=='x' ? r :(r&0x3|0x8)).toString(16);
        var uuid = 'xx-xxx'.replace(/[xy]/g, function (c) {
            var r = (dt + Math.random() * 5) % 5 | 0;
            dt = Math.floor(dt / 5);
            return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(5);
        });
        return uuid;
    }
    onSubmit() {
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        if (this.other_individual.invalid) {
            const controls = this.other_individual.controls;
            for (const name in controls) {
                if (controls[name].invalid) {
                    console.log(name);
                }
            }
        }
        else {
            let submit = this.other_individual.value;
            this.uuid = this.create_UUID();
            submit['type'] = this.type;
            submit['category'] = this.category;
            submit['term'] = this.term;
            submit['date'] = date;
            submit['aadhar_url'] = this.aadhar_url;
            submit['pp_url'] = this.pp_url;
            submit['cert_url'] = this.cret_utl;
            submit['cin_url'] = this.cin_url;
            submit['uuid'] = this.uuid;
            submit = JSON.stringify(submit);
            this.storage.setItem(this.uuid, submit);
            console.log(submit);
            this.othersubmitted.emit(true);
            // console.log(this.fields)
        }
    }
    onSelectFile(event) {
        console.log(event.value);
    }
    aadharUpload(fileInput) {
        let aadhar = fileInput.target.files[0];
        console.log(fileInput.target.files);
        var reader = new FileReader();
        reader.readAsDataURL(fileInput.target.files[0]);
        //  To show the input image
        reader.onload = (event) => {
            // Url for the input image
            this.aadhar_url = reader.result;
            // console.log(this.url)
        };
        document.getElementById("aadhar_upload").innerText = aadhar.name;
    }
    photoUpload(fileInput) {
        let aadhar = fileInput.target.files[0];
        console.log(fileInput.target.files);
        var reader = new FileReader();
        reader.readAsDataURL(fileInput.target.files[0]);
        //  To show the input image
        reader.onload = (event) => {
            // Url for the input image
            this.pp_url = reader.result;
            // console.log(this.url)
        };
        document.getElementById("photo_upload").innerText = aadhar.name;
    }
    certUpload(fileInput) {
        let aadhar = fileInput.target.files[0];
        console.log(fileInput.target.files);
        var reader = new FileReader();
        reader.readAsDataURL(fileInput.target.files[0]);
        //  To show the input image
        reader.onload = (event) => {
            // Url for the input image
            this.cret_utl = reader.result;
            // console.log(this.url)
        };
        document.getElementById("cert_upload").innerText = aadhar.name;
    }
    cinUpload(fileInput) {
        let aadhar = fileInput.target.files[0];
        console.log(fileInput.target.files);
        var reader = new FileReader();
        reader.readAsDataURL(fileInput.target.files[0]);
        //  To show the input image
        reader.onload = (event) => {
            // Url for the input image
            this.cin_url = reader.result;
            // console.log(this.url)
        };
        document.getElementById("cin_upload").innerText = aadhar.name;
    }
    to_home() {
        this.route.navigate(['/']);
    }
};
OtherComponent.ctorParameters = () => [
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('term'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], OtherComponent.prototype, "term", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('category'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], OtherComponent.prototype, "category", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('type'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], OtherComponent.prototype, "type", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('submitted'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], OtherComponent.prototype, "othersubmitted", void 0);
OtherComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-other',
        template: __webpack_require__(/*! raw-loader!./other.component.html */ "./node_modules/raw-loader/index.js!./src/app/other/other.component.html"),
        styles: [__webpack_require__(/*! ./other.component.css */ "./src/app/other/other.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], OtherComponent);



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-radio-button ~ .mat-radio-button {\n    margin-left: 20px;\n  }\n\n  #mat-lable{\n      margin-right: 2%;\n  }\n\n  .custom-nav {\n    height: 70px;\n    width: 100%;\n    background: linear-gradient(to right, #edd252, #f09a2e);\n    display: flex !important; \n }\n\n  .custom-nav .honeycomb-bg {\n    background-position: right;\n    background-image: url('honey_comb.png');\n    background-size: 50%;\n    background-repeat: no-repeat;\n    height: inherit;\n    width: 96%;\n    position: absolute;\n}\n\n  .login-container {\n    padding: 2rem 15rem;\n}\n\n  .bt-login {\n    margin: 2rem auto 1rem;\n    display: block;\n    width: 100%;\n}\n\n  .honey-icon {\n    /* width: 12rem; */\n    background: white;    \n}\n\n  .custom-nav .app-title{\n    font-size: 26px;\n    color: white;\n    /* padding: 1.15rem; */\n    padding-left: 2rem;\n    margin: auto 0;\n}\n\n  .honey-icon img {\n    display: block;\n    margin-left: auto;\n    margin-top: 14px;\n    margin-right: auto;\n    width: 45px;\n    height: 45px;\n}\n\n  .main-body {\n    margin-left: 0;\n    margin-right: 0;\n}\n\n  .tab-panel {\n    background: #555555;\n    padding: 2.5rem 0;\n}\n\n  .tab-panel .button-container {\n    position: relative;\n    padding-bottom: 0.4rem; \n}\n\n  .tab-panel .button-container button {\n    display: block;\n    background-color: inherit;\n    padding: 12px 16px;\n    width: 100%;\n    border: none;\n    outline: none;\n    text-align: center;\n    cursor: pointer;\n    transition: 0.3s;\n    font-size: 14px;\n    color: white;\n}\n\n  .tab-panel .button-container button:hover {\n    background-color: #767676cf;\n}\n\n  .tab-panel .button-container button.active {\n    background-color: #767676;\n    border-left: 8px solid #eed857;\n}\n\n  .tab-panel .button-container button p {\n    margin-bottom: 0;\n    font-size: 29px;\n}\n\n  .arrow-right {\n    width: 0;\n    height: 0;\n    border-left: 17px solid #767676;\n    /* border-right: 0px solid transparent; */\n    border-bottom: 45px solid transparent;\n    border-top: 45px solid transparent;\n    position: absolute;\n    top: 0;\n    right: -17px;\n}\n\n  .hide {\n    display: none;\n}\n\n  .content-container {\n    padding: 2rem;\n}\n\n  .profile-section {\n    position: absolute;\n    right: 0;\n    display: flex;\n    padding-top: 1rem;\n    padding-right: 2rem;\n}\n\n  .profile-section  a {\n    color: white;\n    position: relative;\n}\n\n  .profile-section  .dropdown-menu a {\n    color: black;\n\n}\n\n  .fa-bell {\n    font-size: 25px;\n}\n\n  .badge {\n    background: red;\n    border-radius: 54%;\n    width: 19px;\n    height: 19px;\n    position: absolute;\n    left: 29px;\n    top: 0px;\n    padding: 4px 4px;\n}\n\n  .ne-card {\n    padding-bottom: 2rem;\n    border-radius: 0;\n    border: none;\n    box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2), 0 4px 9px 0 rgba(0, 0, 0, 0.19);\n}\n\n  .ne-card .ne-card-header {\n    background: #eed857;\n    color: white;\n    font-size: 1.2rem;\n    border-radius: 0;\n    border: none;\n    padding: 0.5rem 1.25rem;\n}\n\n  .ne-card .ne-card-body, .ne-card .track-card-body {\n    font-size: 0.8rem;\n}\n\n  .ne-card .ne-card-body .qr-icon, .ne-card .ne-card-body .ne-sliders {\n    font-size: 24px;\n    padding: 7px 1.5rem;\n}\n\n  .ne-card .ne-card-body button.scan {\n    color: white;\n    width: 7rem;\n    border: none;  \n}\n\n  .ne-card .ne-card-body button.scan {\n    background: #f09c2e;    \n}\n\n  .ne-card-body button.bt-white {\n    color: #4a4a4a;  \n    width: 7rem;\n    margin-left: 3rem;\n}\n\n  .ne-card .form-control, .ne-card .honey-source {\n    width: 75%;\n}\n\n  .ne-card .volume-unit {\n    display: block;\n    width: 7rem;\n    font-size: 14px;\n}\n\n  .ne-card  .track-card-body {\n    display: flex;\n    justify-content: space-between;\n}\n\n  .ne-card  .track-card-body  form input{\n    border-right: none;\n    border-radius: 0;\n}\n\n  .ne-card  .track-card-body form button {\n    border-radius: 0;\n    border: 1px solid #ced4da;\n    border-left: none;\n}\n\n  /* .form-inline {\n    display: inline-block;\n}\n.navbar-header.col {\n    padding: 0 !important;\n}\t */\n\n  .navbar {    \n    padding: 0;\n    background: #fff;\n    border-bottom: 1px solid #d6d6d6;\n    box-shadow: 0 0 4px rgba(0,0,0,.1);\n}\n\n  .nav-link img {\n    border-radius: 50%;\n    width: 36px;\n    height: 36px;\n    margin: -8px 0;\n    float: left;\n    margin-right: 10px;\n}\n\n  .navbar .dropdown-menu li a:hover, .navbar .dropdown-menu li a:active {\n    color: #333;\n}\n\n  .navbar .dropdown-item .material-icons {\n    font-size: 21px;\n    line-height: 16px;\n    vertical-align: middle;\n    margin-top: -2px;\n}\n\n  .navbar .badge {\n    background: #f44336;\n    font-size: 11px;\n    border-radius: 20px;\n    position: absolute;\n    min-width: 10px;\n    padding: 4px 6px 0;\n    min-height: 18px;\n    top: 5px;\n}\n\n  .navbar ul.nav li a.notifications, .navbar ul.nav li a.messages {\n    position: relative;\n    margin-right: 10px;\n}\n\n  .navbar ul.nav li a.messages {\n    margin-right: 20px;\n}\n\n  .navbar a.notifications .badge {\n    margin-left: -8px;\n}\n\n  /* .navbar a.messages .badge {\n    margin-left: -4px;\n}\t */\n\n  .navbar .active a, .navbar .active a:hover, .navbar .active a:focus {\n    background: transparent !important;\n}\n\n  .reg-upload {\n    width: 75%;\n    display: block;\n}\n\n  .counterContainer {\n    display: flex;\n    position: relative;\n}\n\n  .counter {\n    font-size: 2.5rem;\n    position: absolute;\n    right: 5rem;\n    top: -0.6rem;\n}\n\n  #displayBy  {\n    color: white;\n    font-size: 14px;\n}\n\n  #displayBy .selected {\n    background: #f09c2e;\n    color: white;\n}\n\n  #displayBy .btn-outline-secondary:hover {\n    background: white;\n    color: black;\n}\n\n  .trace-id-row {\n    display: flex;\n    background: #f8f8f8;\n    padding: 0.3rem;\n    font-size: 13px;\n    border-bottom: 1px solid white;\n}\n\n  .trace-id-row .fa{\n    color: #f09d2f;\n    padding: 1rem 2rem;\n    cursor: pointer;\n}\n\n  .trace-id-row .row{\n    width: -webkit-fill-available;\n    margin-left: 0;\n    margin-right: 0;\n}\n\n  .trace-id-row .row .col-sm-2 div:first-child {\n    font-weight: bold;\n}\n\n  .child {\n    padding-left: 2%;\n}\n\n  .child .trace-id-row {\n    background: none;\n}\n\n  .trace-id {\n    cursor: pointer;\n    color: blue;\n    text-decoration: underline;\n\n}\n\n  .modal .more-width {\n    max-width: 700px !important;\n}\n\n  .track-card-body .search-form {\n    width: 75%;\n    margin: 0 auto;\n}\n\n  .farmer-detail-container {\n    margin: 2rem 0;\n}\n\n  .farmer-detail-container .farmer-detail {\n    border: 1px solid;\n    background: #f8f8f8;\n    padding: 15px;\n    margin: auto;\n    width: 90%;\n}\n\n  .farmer-detail-container .farmer-detail .header {\n    margin-bottom: 2.5rem;\n}\n\n  .farmer-detail-container .farmer-detail .header h5 {\n    font-size: 0.97rem;\n    font-weight: bold;\n}\n\n  .farmer-detail-container .farmer-detail h6 {\n    font-size: 0.9rem;\n}\n\n  .farmer-detail-container .farmer-detail .body {\n    margin-bottom: 2rem;\n}\n\n  .farmer-detail-container .farmer-detail .body h6 {\n    padding-top: 1rem;\n}\n\n  .farmer-detail-container .farmer-detail .body > div {\n    display: flex;\n    font-size: 0.8rem;\n    margin-bottom: 0.5rem;\n}\n\n  .farmer-detail-container .farmer-detail .body > div div:first-child {\n    width: 40%;\n}\n\n  .previous-transactions {\n    border-top: 1px dashed;\n    margin-top: 2rem;\n    padding-top: 1rem;\n    font-size: 0.8rem;\n}\n\n  .previous-transactions .row {\n    margin: 1rem 0.5rem;\n}\n\n  .previous-transactions .col-sm-2 {\n    padding: 0 5px;\n    text-align: center;\n}\n\n  .farmer-detail .signature {\n    text-align: center;\n    font-size: 0.8rem;\n    margin: 0;\n}\n\n  .signature .farmer-sign,  .signature .aggregator-sign {\n    height: 80px;\n    margin: 0 auto;\n    border-bottom: 1px dashed;\n}\n\n  .chit-container {\n    /* display: flex; */\n    background: #e9ecef;\n    width: 75%;\n    margin: 1% 0;\n    /* border: 1px solid #d2dbde; */\n    /* flex-wrap: wrap; */\n}\n\n  .chit-container .chits {\n    text-align: center;\n    margin: 0;\n    padding: 1%;\n    border-bottom: 2px solid white;\n    /* width: fit-content;\n    background: #555555;\n    color: white;\n    padding: 3px 12px;\n    border-radius: 16px;\n    margin: 1%; */\n}\n\n  .chit-container .chits div:last-child {\n    position: relative;\n}\n\n  .chit-container .chits div:last-child div {\n    position: absolute;\n    top: 50%;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n    left: 32px;\n}\n\n  .chit-container .chits div:last-child div span:first-child {\n    color: #10657e;\n    cursor: pointer;\n}\n\n  .chit-container .chits div:last-child div span:nth-child(2) {\n    color: #b81f1f;\n    cursor: pointer;\n}\n\n  .chit-container .chits .fa-times{\n    cursor: pointer;\n}\n\n  .form-check {\n    margin-left: 2%;\n}\n\n  #editForm {\n    padding-right: 0;\n}\n\n  #editForm .modal-dialog {\n    max-width: 70%;\n    margin: 3% auto;\n}\n\n  #searchResult {\n    display: none;\n}\n\n  /* Here */\n\n  datalist{\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    text-indent: 1px;\n    text-overflow: '';\n    -moz-appearance: none;\n    /* for Chrome */\n    -webkit-appearance: none;\n    display: none;\n}\n\n  select {\n    /* for Firefox */\n    -moz-appearance: none;\n    /* for Chrome */\n    -webkit-appearance: none;\n  }\n\n  /* For IE10 */\n\n  select::-ms-expand {\n    display: none;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtFQUNuQjs7RUFFQTtNQUNJLGdCQUFnQjtFQUNwQjs7RUFFQTtJQUNFLFlBQVk7SUFDWixXQUFXO0lBQ1gsdURBQXVEO0lBQ3ZELHdCQUF3QjtDQUMzQjs7RUFDRDtJQUNJLDBCQUEwQjtJQUMxQix1Q0FBa0Q7SUFDbEQsb0JBQW9CO0lBQ3BCLDRCQUE0QjtJQUM1QixlQUFlO0lBQ2YsVUFBVTtJQUNWLGtCQUFrQjtBQUN0Qjs7RUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7RUFFQTtJQUNJLHNCQUFzQjtJQUN0QixjQUFjO0lBQ2QsV0FBVztBQUNmOztFQUdBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7RUFFQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixjQUFjO0FBQ2xCOztFQUVBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztFQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7QUFDbkI7O0VBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JCOztFQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHNCQUFzQjtBQUMxQjs7RUFFQTtJQUNJLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixZQUFZO0FBQ2hCOztFQUNBO0lBQ0ksMkJBQTJCO0FBQy9COztFQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLDhCQUE4QjtBQUNsQzs7RUFDQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztFQUdBO0lBQ0ksUUFBUTtJQUNS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O0lBQ2QsZUFBZTtBQUNuQjs7RUFJQTtJQUNJLGVBQWU7QUFDbkI7O0VBRUE7SUFDSSxlQUFlO0FBQ25COztFQUdBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztFQUNBO0lBQ0ksY0FBYztJQUNkLGVBQWU7QUFDbkI7O0VBRUE7SUFDSSxhQUFhO0FBQ2pCOztFQUdBLFNBQVM7O0VBQ1Q7SUFDSSx3QkFBd0I7SUFDeEIscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZix3QkFBd0I7SUFDeEIsYUFBYTtBQUNqQjs7RUFFQTtJQUNJLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLHdCQUF3QjtFQUMxQjs7RUFFQSxhQUFhOztFQUNiO0lBQ0UsYUFBYTtFQUNmIiwiZmlsZSI6InNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtcmFkaW8tYnV0dG9uIH4gLm1hdC1yYWRpby1idXR0b24ge1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICB9XG5cbiAgI21hdC1sYWJsZXtcbiAgICAgIG1hcmdpbi1yaWdodDogMiU7XG4gIH1cblxuICAuY3VzdG9tLW5hdiB7XG4gICAgaGVpZ2h0OiA3MHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2VkZDI1MiwgI2YwOWEyZSk7XG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50OyBcbiB9XG4uY3VzdG9tLW5hdiAuaG9uZXljb21iLWJnIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL2hvbmV5X2NvbWIucG5nKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDUwJTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGhlaWdodDogaW5oZXJpdDtcbiAgICB3aWR0aDogOTYlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLmxvZ2luLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMnJlbSAxNXJlbTtcbn1cblxuLmJ0LWxvZ2luIHtcbiAgICBtYXJnaW46IDJyZW0gYXV0byAxcmVtO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG5cbi5ob25leS1pY29uIHtcbiAgICAvKiB3aWR0aDogMTJyZW07ICovXG4gICAgYmFja2dyb3VuZDogd2hpdGU7ICAgIFxufVxuXG4uY3VzdG9tLW5hdiAuYXBwLXRpdGxle1xuICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgLyogcGFkZGluZzogMS4xNXJlbTsgKi9cbiAgICBwYWRkaW5nLWxlZnQ6IDJyZW07XG4gICAgbWFyZ2luOiBhdXRvIDA7XG59XG5cbi5ob25leS1pY29uIGltZyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXRvcDogMTRweDtcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgd2lkdGg6IDQ1cHg7XG4gICAgaGVpZ2h0OiA0NXB4O1xufVxuXG4ubWFpbi1ib2R5IHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG59XG4udGFiLXBhbmVsIHtcbiAgICBiYWNrZ3JvdW5kOiAjNTU1NTU1O1xuICAgIHBhZGRpbmc6IDIuNXJlbSAwO1xufVxuXG4udGFiLXBhbmVsIC5idXR0b24tY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZy1ib3R0b206IDAuNHJlbTsgXG59XG5cbi50YWItcGFuZWwgLmJ1dHRvbi1jb250YWluZXIgYnV0dG9uIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuICAgIHBhZGRpbmc6IDEycHggMTZweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IDAuM3M7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbi50YWItcGFuZWwgLmJ1dHRvbi1jb250YWluZXIgYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzY3Njc2Y2Y7XG59XG4udGFiLXBhbmVsIC5idXR0b24tY29udGFpbmVyIGJ1dHRvbi5hY3RpdmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM3Njc2NzY7XG4gICAgYm9yZGVyLWxlZnQ6IDhweCBzb2xpZCAjZWVkODU3O1xufVxuLnRhYi1wYW5lbCAuYnV0dG9uLWNvbnRhaW5lciBidXR0b24gcCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBmb250LXNpemU6IDI5cHg7XG59XG5cblxuLmFycm93LXJpZ2h0IHtcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDA7XG4gICAgYm9yZGVyLWxlZnQ6IDE3cHggc29saWQgIzc2NzY3NjtcbiAgICAvKiBib3JkZXItcmlnaHQ6IDBweCBzb2xpZCB0cmFuc3BhcmVudDsgKi9cbiAgICBib3JkZXItYm90dG9tOiA0NXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci10b3A6IDQ1cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICByaWdodDogLTE3cHg7XG59XG4uaGlkZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLmNvbnRlbnQtY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAycmVtO1xufVxuXG4ucHJvZmlsZS1zZWN0aW9uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xufVxuLnByb2ZpbGUtc2VjdGlvbiAgYSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5wcm9maWxlLXNlY3Rpb24gIC5kcm9wZG93bi1tZW51IGEge1xuICAgIGNvbG9yOiBibGFjaztcblxufVxuLmZhLWJlbGwge1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbn1cblxuLmJhZGdlIHtcbiAgICBiYWNrZ3JvdW5kOiByZWQ7XG4gICAgYm9yZGVyLXJhZGl1czogNTQlO1xuICAgIHdpZHRoOiAxOXB4O1xuICAgIGhlaWdodDogMTlweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMjlweDtcbiAgICB0b3A6IDBweDtcbiAgICBwYWRkaW5nOiA0cHggNHB4O1xufVxuXG4ubmUtY2FyZCB7XG4gICAgcGFkZGluZy1ib3R0b206IDJyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm94LXNoYWRvdzogMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDRweCA5cHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xufVxuXG4ubmUtY2FyZCAubmUtY2FyZC1oZWFkZXIge1xuICAgIGJhY2tncm91bmQ6ICNlZWQ4NTc7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHBhZGRpbmc6IDAuNXJlbSAxLjI1cmVtO1xufVxuXG4ubmUtY2FyZCAubmUtY2FyZC1ib2R5LCAubmUtY2FyZCAudHJhY2stY2FyZC1ib2R5IHtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbn1cblxuLm5lLWNhcmQgLm5lLWNhcmQtYm9keSAucXItaWNvbiwgLm5lLWNhcmQgLm5lLWNhcmQtYm9keSAubmUtc2xpZGVycyB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIHBhZGRpbmc6IDdweCAxLjVyZW07XG59XG4ubmUtY2FyZCAubmUtY2FyZC1ib2R5IGJ1dHRvbi5zY2FuIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgd2lkdGg6IDdyZW07XG4gICAgYm9yZGVyOiBub25lOyAgXG59XG4ubmUtY2FyZCAubmUtY2FyZC1ib2R5IGJ1dHRvbi5zY2FuIHtcbiAgICBiYWNrZ3JvdW5kOiAjZjA5YzJlOyAgICBcbn1cbi5uZS1jYXJkLWJvZHkgYnV0dG9uLmJ0LXdoaXRlIHtcbiAgICBjb2xvcjogIzRhNGE0YTsgIFxuICAgIHdpZHRoOiA3cmVtO1xuICAgIG1hcmdpbi1sZWZ0OiAzcmVtO1xufVxuLm5lLWNhcmQgLmZvcm0tY29udHJvbCwgLm5lLWNhcmQgLmhvbmV5LXNvdXJjZSB7XG4gICAgd2lkdGg6IDc1JTtcbn1cblxuLm5lLWNhcmQgLnZvbHVtZS11bml0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogN3JlbTtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5uZS1jYXJkICAudHJhY2stY2FyZC1ib2R5IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn0ubmUtY2FyZCAgLnRyYWNrLWNhcmQtYm9keSAgZm9ybSBpbnB1dHtcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbn1cbi5uZS1jYXJkICAudHJhY2stY2FyZC1ib2R5IGZvcm0gYnV0dG9uIHtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjZWQ0ZGE7XG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XG59XG5cblxuXG5cbi8qIC5mb3JtLWlubGluZSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLm5hdmJhci1oZWFkZXIuY29sIHtcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG59XHQgKi9cbi5uYXZiYXIgeyAgICBcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkNmQ2ZDY7XG4gICAgYm94LXNoYWRvdzogMCAwIDRweCByZ2JhKDAsMCwwLC4xKTtcbn1cbi5uYXYtbGluayBpbWcge1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB3aWR0aDogMzZweDtcbiAgICBoZWlnaHQ6IDM2cHg7XG4gICAgbWFyZ2luOiAtOHB4IDA7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLm5hdmJhciAuZHJvcGRvd24tbWVudSBsaSBhOmhvdmVyLCAubmF2YmFyIC5kcm9wZG93bi1tZW51IGxpIGE6YWN0aXZlIHtcbiAgICBjb2xvcjogIzMzMztcbn1cdFxuLm5hdmJhciAuZHJvcGRvd24taXRlbSAubWF0ZXJpYWwtaWNvbnMge1xuICAgIGZvbnQtc2l6ZTogMjFweDtcbiAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIG1hcmdpbi10b3A6IC0ycHg7XG59XG4ubmF2YmFyIC5iYWRnZSB7XG4gICAgYmFja2dyb3VuZDogI2Y0NDMzNjtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbWluLXdpZHRoOiAxMHB4O1xuICAgIHBhZGRpbmc6IDRweCA2cHggMDtcbiAgICBtaW4taGVpZ2h0OiAxOHB4O1xuICAgIHRvcDogNXB4O1xufVxuLm5hdmJhciB1bC5uYXYgbGkgYS5ub3RpZmljYXRpb25zLCAubmF2YmFyIHVsLm5hdiBsaSBhLm1lc3NhZ2VzIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLm5hdmJhciB1bC5uYXYgbGkgYS5tZXNzYWdlcyB7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuLm5hdmJhciBhLm5vdGlmaWNhdGlvbnMgLmJhZGdlIHtcbiAgICBtYXJnaW4tbGVmdDogLThweDtcbn1cbi8qIC5uYXZiYXIgYS5tZXNzYWdlcyAuYmFkZ2Uge1xuICAgIG1hcmdpbi1sZWZ0OiAtNHB4O1xufVx0ICovXG4ubmF2YmFyIC5hY3RpdmUgYSwgLm5hdmJhciAuYWN0aXZlIGE6aG92ZXIsIC5uYXZiYXIgLmFjdGl2ZSBhOmZvY3VzIHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG4ucmVnLXVwbG9hZCB7XG4gICAgd2lkdGg6IDc1JTtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmNvdW50ZXJDb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmNvdW50ZXIge1xuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogNXJlbTtcbiAgICB0b3A6IC0wLjZyZW07XG59XG5cbiNkaXNwbGF5QnkgIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuI2Rpc3BsYXlCeSAuc2VsZWN0ZWQge1xuICAgIGJhY2tncm91bmQ6ICNmMDljMmU7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuI2Rpc3BsYXlCeSAuYnRuLW91dGxpbmUtc2Vjb25kYXJ5OmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbi50cmFjZS1pZC1yb3cge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYmFja2dyb3VuZDogI2Y4ZjhmODtcbiAgICBwYWRkaW5nOiAwLjNyZW07XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcbn1cbi50cmFjZS1pZC1yb3cgLmZhe1xuICAgIGNvbG9yOiAjZjA5ZDJmO1xuICAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4udHJhY2UtaWQtcm93IC5yb3d7XG4gICAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xufVxuLnRyYWNlLWlkLXJvdyAucm93IC5jb2wtc20tMiBkaXY6Zmlyc3QtY2hpbGQge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uY2hpbGQge1xuICAgIHBhZGRpbmctbGVmdDogMiU7XG59XG4uY2hpbGQgLnRyYWNlLWlkLXJvdyB7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbn1cbi50cmFjZS1pZCB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGNvbG9yOiBibHVlO1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuXG59XG4ubW9kYWwgLm1vcmUtd2lkdGgge1xuICAgIG1heC13aWR0aDogNzAwcHggIWltcG9ydGFudDtcbn1cblxuXG4udHJhY2stY2FyZC1ib2R5IC5zZWFyY2gtZm9ybSB7XG4gICAgd2lkdGg6IDc1JTtcbiAgICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmZhcm1lci1kZXRhaWwtY29udGFpbmVyIHtcbiAgICBtYXJnaW46IDJyZW0gMDtcbn1cblxuLmZhcm1lci1kZXRhaWwtY29udGFpbmVyIC5mYXJtZXItZGV0YWlsIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcbiAgICBiYWNrZ3JvdW5kOiAjZjhmOGY4O1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHdpZHRoOiA5MCU7XG59XG4uZmFybWVyLWRldGFpbC1jb250YWluZXIgLmZhcm1lci1kZXRhaWwgLmhlYWRlciB7XG4gICAgbWFyZ2luLWJvdHRvbTogMi41cmVtO1xufVxuLmZhcm1lci1kZXRhaWwtY29udGFpbmVyIC5mYXJtZXItZGV0YWlsIC5oZWFkZXIgaDUge1xuICAgIGZvbnQtc2l6ZTogMC45N3JlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5mYXJtZXItZGV0YWlsLWNvbnRhaW5lciAuZmFybWVyLWRldGFpbCBoNiB7XG4gICAgZm9udC1zaXplOiAwLjlyZW07XG59XG4uZmFybWVyLWRldGFpbC1jb250YWluZXIgLmZhcm1lci1kZXRhaWwgLmJvZHkge1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG4uZmFybWVyLWRldGFpbC1jb250YWluZXIgLmZhcm1lci1kZXRhaWwgLmJvZHkgaDYge1xuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xufVxuLmZhcm1lci1kZXRhaWwtY29udGFpbmVyIC5mYXJtZXItZGV0YWlsIC5ib2R5ID4gZGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbn1cbi5mYXJtZXItZGV0YWlsLWNvbnRhaW5lciAuZmFybWVyLWRldGFpbCAuYm9keSA+IGRpdiBkaXY6Zmlyc3QtY2hpbGQge1xuICAgIHdpZHRoOiA0MCU7XG59XG5cbi5wcmV2aW91cy10cmFuc2FjdGlvbnMge1xuICAgIGJvcmRlci10b3A6IDFweCBkYXNoZWQ7XG4gICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbn1cbi5wcmV2aW91cy10cmFuc2FjdGlvbnMgLnJvdyB7XG4gICAgbWFyZ2luOiAxcmVtIDAuNXJlbTtcbn1cbi5wcmV2aW91cy10cmFuc2FjdGlvbnMgLmNvbC1zbS0yIHtcbiAgICBwYWRkaW5nOiAwIDVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZmFybWVyLWRldGFpbCAuc2lnbmF0dXJlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgbWFyZ2luOiAwO1xufVxuXG4uc2lnbmF0dXJlIC5mYXJtZXItc2lnbiwgIC5zaWduYXR1cmUgLmFnZ3JlZ2F0b3Itc2lnbiB7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQ7XG59XG5cbi5jaGl0LWNvbnRhaW5lciB7XG4gICAgLyogZGlzcGxheTogZmxleDsgKi9cbiAgICBiYWNrZ3JvdW5kOiAjZTllY2VmO1xuICAgIHdpZHRoOiA3NSU7XG4gICAgbWFyZ2luOiAxJSAwO1xuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkICNkMmRiZGU7ICovXG4gICAgLyogZmxleC13cmFwOiB3cmFwOyAqL1xufVxuLmNoaXQtY29udGFpbmVyIC5jaGl0cyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAxJTtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgd2hpdGU7XG4gICAgLyogd2lkdGg6IGZpdC1jb250ZW50O1xuICAgIGJhY2tncm91bmQ6ICM1NTU1NTU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDNweCAxMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gICAgbWFyZ2luOiAxJTsgKi9cbn1cblxuLmNoaXQtY29udGFpbmVyIC5jaGl0cyBkaXY6bGFzdC1jaGlsZCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uY2hpdC1jb250YWluZXIgLmNoaXRzIGRpdjpsYXN0LWNoaWxkIGRpdiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICBsZWZ0OiAzMnB4O1xufVxuLmNoaXQtY29udGFpbmVyIC5jaGl0cyBkaXY6bGFzdC1jaGlsZCBkaXYgc3BhbjpmaXJzdC1jaGlsZCB7XG4gICAgY29sb3I6ICMxMDY1N2U7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY2hpdC1jb250YWluZXIgLmNoaXRzIGRpdjpsYXN0LWNoaWxkIGRpdiBzcGFuOm50aC1jaGlsZCgyKSB7XG4gICAgY29sb3I6ICNiODFmMWY7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5cblxuLmNoaXQtY29udGFpbmVyIC5jaGl0cyAuZmEtdGltZXN7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZm9ybS1jaGVjayB7XG4gICAgbWFyZ2luLWxlZnQ6IDIlO1xufVxuXG5cbiNlZGl0Rm9ybSB7XG4gICAgcGFkZGluZy1yaWdodDogMDtcbn1cbiNlZGl0Rm9ybSAubW9kYWwtZGlhbG9nIHtcbiAgICBtYXgtd2lkdGg6IDcwJTtcbiAgICBtYXJnaW46IDMlIGF1dG87XG59XG5cbiNzZWFyY2hSZXN1bHQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cblxuLyogSGVyZSAqL1xuZGF0YWxpc3R7XG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgICB0ZXh0LWluZGVudDogMXB4O1xuICAgIHRleHQtb3ZlcmZsb3c6ICcnO1xuICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgICAvKiBmb3IgQ2hyb21lICovXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbnNlbGVjdCB7XG4gICAgLyogZm9yIEZpcmVmb3ggKi9cbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgLyogZm9yIENocm9tZSAqL1xuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgfVxuICBcbiAgLyogRm9yIElFMTAgKi9cbiAgc2VsZWN0OjotbXMtZXhwYW5kIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9Il19 */"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_static_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/static.service */ "./src/app/services/static.service.ts");





let RegisterComponent = class RegisterComponent {
    constructor(formBuilder, staticData) {
        this.formBuilder = formBuilder;
        this.staticData = staticData;
        this.submitted = false;
        this.application_type = this.staticData.applicationType();
        this.categories = this.staticData.category();
    }
    ngOnInit() {
        //  console.log(this.staticData.application_type)
        //  console.log( this.staticData.categories)
        // console.log(this.selected_category,this.selected_type)
        // console.log(this.term)
        this.registerForm = this.formBuilder.group({
            category: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            type: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            term: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        // console.log(this.form.value)
        this.registerForm.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(400), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])()).subscribe(res => {
        });
    }
    get form() { return this.registerForm.controls; }
    otherSubmit(status) {
        this.IndividualSubmit = status;
    }
    formSubmitted(status) {
        this.formSubmit = status;
    }
    onSubmit() {
        console.log(this.selected_category, this.selected_type, this.selected_term);
    }
    Selected(event) {
        console.log(this.selected_category, this.selected_type, this.selected_term);
        //   let target = event.source.selected._element.nativeElement;
        //   let selectedData = {
        //     value: event.value,
        //     text: target.innerText.trim()
        //   };
        //   console.log(selectedData);
    }
};
RegisterComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_static_service__WEBPACK_IMPORTED_MODULE_4__["StaticService"] }
];
RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: __webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/index.js!./src/app/register/register.component.html"),
        styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _services_static_service__WEBPACK_IMPORTED_MODULE_4__["StaticService"]])
], RegisterComponent);



/***/ }),

/***/ "./src/app/renew/renew.component.css":
/*!*******************************************!*\
  !*** ./src/app/renew/renew.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlbmV3L3JlbmV3LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/renew/renew.component.ts":
/*!******************************************!*\
  !*** ./src/app/renew/renew.component.ts ***!
  \******************************************/
/*! exports provided: RenewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenewComponent", function() { return RenewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RenewComponent = class RenewComponent {
    constructor() { }
    ngOnInit() {
    }
};
RenewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-renew',
        template: __webpack_require__(/*! raw-loader!./renew.component.html */ "./node_modules/raw-loader/index.js!./src/app/renew/renew.component.html"),
        styles: [__webpack_require__(/*! ./renew.component.css */ "./src/app/renew/renew.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], RenewComponent);



/***/ }),

/***/ "./src/app/services/static.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/static.service.ts ***!
  \********************************************/
/*! exports provided: StaticService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticService", function() { return StaticService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let StaticService = class StaticService {
    constructor() { }
    applicationType() {
        return this.application_type = [
            { value: '0', viewValue: 'New Application' },
            { value: '1', viewValue: 'Renew Application' },
        ];
    }
    category() {
        return this.categories = [
            { value: '0', viewValue: 'Individual Beekeeper' },
            { value: '1', viewValue: 'BeeKeeping and Honey Society/KVIC/SKVIC' },
            { value: '2', viewValue: 'Company/Firm' },
            { value: '3', viewValue: 'SHG,Self Help Group' },
            { value: '4', viewValue: 'SFAC Nominated' }
        ];
    }
};
StaticService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], StaticService);



/***/ }),

/***/ "./src/app/services/storage.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/storage.service.ts ***!
  \*********************************************/
/*! exports provided: StorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return StorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let StorageService = class StorageService {
    constructor() {
        this.uuid = [];
        this.submitted_data = [];
    }
    setItem(id, submit) {
        localStorage.setItem(id, submit);
        this.uuid.push(id);
        localStorage.setItem('uuids', JSON.stringify(this.uuid));
    }
    getItem() {
        let uuids = JSON.parse(localStorage.getItem('uuids'));
        for (let i = 0; i < uuids.length; i++) {
            this.submitted_data.push(JSON.parse(localStorage.getItem(uuids[i])));
        }
        console.log(this.submitted_data);
        return this.submitted_data;
    }
    getid() {
        // return localStorage.getItem('')
    }
    removeData(i) {
        let uuids = JSON.parse(localStorage.getItem('uuids'));
        console.log(uuids[i]);
        console.log(localStorage.removeItem(uuids[i]));
    }
};
StorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], StorageService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/Bibek_Joshi/Srijan/git/Dynamic_RegistrationForm/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map