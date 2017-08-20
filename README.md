# How to create an Angular 4 NPM module ?

> *Reference :*
> - https://medium.com/@cyrilletuzi/how-to-build-and-publish-an-angular-module-7ad19c0b4464
> - http://blog.mgechev.com/2017/01/21/distributing-an-angular-library-aot-ngc-types/
> - http://www.dzurico.com/how-to-create-an-angular-library/
> - Using angular-cli to generate a component library for angular 2 https://github.com/angular/angular-cli/issues/3580
> - Angular CLI Creating npm projects/modules https://github.com/angular/angular-cli/issues/2978
> - How do I publish an Angular-CLI project as an NPM module? https://stackoverflow.com/questions/40342797/how-do-i-publish-an-angular-cli-project-as-an-npm-module
> - official Angular Package Format : https://docs.google.com/document/d/1CZC2rcpxffTDfRDs6p1cfbmKNLA6x5O-NtkJglDaBVs/preview
> - examples with Angular Material https://github.com/angular/material2/blob/master/src/lib/core/index.ts


# Full Angular Building Process with Angular CLI

## Prepare the project

### [Terminal] cd to the projects folder

```bash
cd ~/Documents/WebStormProjects2017
```

### [Terminal] create the remote GitHub repository 

**NB :** Change to what is relevant for you. Here, we have :
 - username is FranckVE, 
 - repo name is angular-module-example-v1234, 
 - repo is public (`"private": false`)

*NB :* Your GitHub password will be required after the command is launched.
`Enter host password for user 'FranckVE':` 

```bash
curl -u 'FranckVE' https://api.github.com/user/repos -d '{"name":"angular-module-example-v1234", "private": false, "has_issues": true, "has_projects": true, "has_wiki": true}'
```

### [Terminal] create the project locally with Angular CLI 

```bash
ng new angular-module-example-v1234
```

### [Terminal] cd to the new project locally

```bash
cd angular-module-example-v1234
```

### [Terminal] add the newly created remote GitHub repository to the project 

```bash
git remote add origin https://github.com/FranckVE/angular-module-example-v1234
```

## Open the project in WebStorm

### [WS] open the folder

WS Menu :

```
File > Open...
```

And just select/open the project folder `angular-module-example-v1234`.

## Create the two reusable modules + components from WebStorm

### [WS Terminal] create a module & component called `square-oak`

```bash
ng g module square-oak
ng g component square-oak
```

### [WS] add the new files to git

On the `square-oak` folder in the project view, right-click to show the contextual menu :

```
Git > Add
```

### [WS Terminal] create a module & component called `triangle-steel`

```bash
ng g module triangle-steel
ng g component triangle-steel
```

### [WS] add the new files to git

On the `triangle-steel` folder in the project view, right-click to show the contextual menu :

```
Git > Add
```

## Minimal turning the project into a reusable Angular Module

### Summary of first steps and next steps preview

We have created a standard Angular project with standard Angular CLI commands.
The only thing we have made sure is to create modules along with components.

Now it is time to modify the standard code and add the necessary files to turn this standard project into an Angular NPM module project.

### add `index.ts` and export exposed modules

#### add `index.ts` in the main module folder

In `src/app/` : add a file called `index.ts`

#### in `index.ts` just export the exposed modules

In `src/app/index.ts` :

```javascript
export * from './banana-orange/banana-orange.module';
export * from './cherry-chocolate/cherry-chocolate.module';
```

### change the module set version in the main `package.json`

E.g. change `"version": "0.0.0",` to :

```json
{
  "name": "angular-module-example-v3",
  "version": "0.0.1",
  "license": "MIT",
  "scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "test": "ng test",
    "lint": "ng lint",
    "e2e": "ng e2e"
  },
...
}
```

**NB :** beware the version setting rule should follow semantic versioning (see http://semver.org)
Here is a summary on v2.0.0 :

```
Given a version number MAJOR.MINOR.PATCH, increment the:

MAJOR version when you make incompatible API changes,
MINOR version when you add functionality in a backwards-compatible manner, and
PATCH version when you make backwards-compatible bug fixes.
Additional labels for pre-release and build metadata are available as extensions to the MAJOR.MINOR.PATCH format.
```

### In each module, export the related component

In `xxx.module.ts`, you should export `xxx.component`.

In `square-oak.module.ts` you already have the component declared but not exported :
Modify ...

```
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SquareOakComponent } from './square-oak.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SquareOakComponent]
})
export class SquareOakModule { }
```

Into...
 
```
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SquareOakComponent } from './square-oak.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    SquareOakComponent
  ],
  declarations: [SquareOakComponent]
})
export class SquareOakModule { }
```

And modify ...

```
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TriangleSteelComponent } from './triangle-steel.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TriangleSteelComponent]
})
export class TriangleSteelModule { }
```

Into...
 
```
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TriangleSteelComponent } from './triangle-steel.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    TriangleSteelComponent
  ],
  declarations: [TriangleSteelComponent]
})
export class TriangleSteelModule { }
```






# More infos on AngularModuleExampleV3

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.7.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
