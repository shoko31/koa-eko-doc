# KoaEko Doc
Documentation generation for koa-eko

# What is KoaEko Doc ?
KoaEko Doc is [**koa**](https://koajs.com/) module allowing you to generate an online KoaEko documentation using decorators

# Dependencies
KoaEko was built using multiple packages:
* **koa**: [Website](https://koajs.com/) | [GitHub](https://github.com/koajs/koa) | [**Npm**](https://www.npmjs.com/package/koa)
* **koa-router**: Website | [GitHub](https://github.com/alexmingoia/koa-router) | [**Npm**](https://www.npmjs.com/package/koa-router)
* **sequelize**: [Website](http://docs.sequelizejs.com/) | [GitHub](https://github.com/sequelize/sequelize) | [**Npm**](https://www.npmjs.com/package/sequelize)
* **sequelize-typescript**: Website | GitHub | [**Npm**](https://www.npmjs.com/package/sequelize-typescript)
* **reflect-metadata**: [Website](https://rbuckton.github.io/reflect-metadata/) | GitHub | [**Npm**](https://www.npmjs.com/package/reflect-metadata)

# Installation
You can install **KoaEko Doc** using **npm**:
```bash
npm i koa-eko-doc
```

# Reference

* Classes
    * [EkoDoc(title: string, description: string, version: string)](#ekodoctitle-string-description-string-version-string)
    * [RouteResult(init?: Partial<RouteResult>)](#routeresultinit-partial)
* Class decorators
    * [EkoDocController(name?: string, description?: string)](#ekodoccontrollername-string-description-string)
* Method decorators
    * [EkoDocRouteResponse(response: RouteResult)](#ekodocrouteresponseresponse-routeresult)
    * [EkoDocRouteOutput(type: RouteBodyType, output?: Object, name?: string)](#ekodocrouteoutputtype-routebodytype-output-object-name-string)
* Enums
    * [RouteBodyType](#routebodytype)
    * [RouteResultType](#routeresulttype)
* In-Built HTTP Codes
    * [Code list](#code-list)

## Classes
### EkoDoc(title: string, description: string, version: string)
* **title** (string): Name of the documentation
* **description** (string): Short description display on top of the documentation
* **version** (string): Version of the documentation. **must match with `@EkoVersion()` tags**

EkoDoc exposes `public Routes(): IMiddleware` and `public AllowedMethods(): IMiddleware`. You can find more on these functions on [koa-router documentation](https://github.com/alexmingoia/koa-router#api-reference)
```typescript
import { EkoDoc } from "koa-eko-doc";

let myDoc: EkoDoc = new EkoDoc("My API - documentation", "This documentation was generated using EkoKoa Doc", "1.0.0")
```

### RouteResult(init?: Partial<RouteResult>)
Route result class is useful for `@EkoDocRouteResponse`. There is a [list](#code-list) of in-built route results for you to use.
If you wish to create your own route result, here are the mandatory properties you must provide:
* **code** (number): Represent the HTTP code returned by the API
* **title** (string): Name of the HTTP code
* **description** (string): Description of the HTTP code (when / why it is returned)
* **type** (RouteResultType): The type of HTTP code
```typescript
export const Ok:RouteResult = new RouteResult({ code: 200, title: "OK", description: "Request complete successfuly.", type: RouteResultType.Success });
```

## Class decorators
### EkoDocController(name?: string, description?: string)
* **name** (string) *optional*: Provides a custom name to use for the controller in the documentation
* **description** (string) *optional*: Provides a description of the controller to use in the documentation

**EkoDocController** marks an KoaEko controller for documentation generation. Any controller without this class decorator will not be included in the generated documentation
```typescript
import { EkoController, EkoVersion } from "koa-eko";
import { EkoDocController } from "koa-eko-doc";

@EkoDocController()
@EkoVersion("1.0.0")
class MyController extends EkoController {}
```
***Order matters! EkoDocController must be the first class decorator***

## Method decorators

### EkoDocRouteResponse(response: RouteResult)
**EkoDocRouteResponse** adds a HTTP response code to the corresponding method.
* **response** (RouteResult): HTTP response the route can return
```typescript
import { IRouterContext } from "koa-router";
import { EkoGet } from "koa-eko";
import { EkoDocRouteResponse, Ok } from "koa-eko-doc";

@EkoDocRouteResponse(Ok)
@EkoGet(RouteType.GET, "/" "Get all users", "Returns all users with their personal informations")
public async MyGetRoute(ctx: IRouterContext): Promise<void> {
    // Do Stuff
}
```
***Order matters! EkoDocRouteResponse decorators must always be declared before @EkoRoute decorator!***

**KoaEkoDoc** has in-built HTTP responses that you can use ([complete list](#inbuilthttp-responses)).

### EkoDocRouteOutput(type: RouteBodyType, output?: Object, name?: string)
**EkoDocRouteResponse** adds an body response.
* **type** (RouteBodyType): Type of the response
* **output** (Object) *optional*: Sequelize object to describe
* **name** (string) *optional*: Name used in the documentation
```typescript
import { IRouterContext } from "koa-router";
import { EkoGet } from "koa-eko";
import { EkoDocRouteOutput, RouteBodyType } from "koa-eko-doc";

@EkoDocRouteOutput(RouteBodyType.JSON, Entity.prototyte, "Array [ Entity ]")
@EkoGet(RouteType.GET, "/" "Get all entities", "Returns an array containing all entities")
public async MyGetRoute(ctx: IRouterContext): Promise<void> {
    // Do Stuff
}
```
***Order matters! EkoDocRouteOutput decorator must always be declared before @EkoRoute decorator!***

## Enums
### RouteBodyType
RouteBodyType defines the route body's content type.
```typescript
export enum RouteBodyType {
    JSON = "JSON",
    XML = "XML",
    TEXT = "TEXT"
}
```

### RouteResultType
RouteResultType describes the HTTP code category.
```typescript
export enum RouteResultType {
    Information,
    Success,
    Redirection,
    Error,
    Other
}
```

## In-Built HTTP Codes
### Code list
Here is the list of in-builts HTTP code you can use with `@EkoDocRouteResponse`:
* **1XX**: Continue, SwitchingProtocols, Processing, EarlyHints
* **2XX**: Ok, Created, Accepted, NoContent, ResetContent, PartialContent, MultiStatus, AlreadyReported, IMUsed
* **3XX**: MultipleChoices, MovedPermanently, Found, SeeOther, NotModified, UseProxy, SwitchProxy, TemporaryRedirect, PermanentRedirect
* **4XX**: BadRequest, Unauthorized, Forbidden, NotFound, MethodNotAllowed, NotAcceptable, ProxyAuthenticationRequired, RequestTimeout, Conflict, Gone, LengthRequired, PreconditionFailed, PayloadTooLarge, URITooLong, UnsupportedMediaType, RangeNotSatisfiable, ExpectationFailed, Teapot, MisdirectedRequest, UnprocessableEntity, Locked, FailedDependency, UpgradeRequred, PreconditionRequired, TooManyRequests, RequestHeaderFieldsTooLarge, UnavailableForLegalReasons
* **5XX**: InternalServerError, NotImplemented, BadGateway, ServiceUnavailable, GatewayTimeout, HTTPVersionNotSupported, NetworkAuthenticationRequired

```typescript
import { IRouterContext } from "koa-router";
import { EkoGet } from "koa-eko";
import { EkoDocRouteResponse, Ok } from "koa-eko-doc";

@EkoDocRouteResponse(OK)
@EkoGet("/")
public async MyGetRoute(ctx: IRouterContext): Promise<void> {
    // Do Stuff
}
```

# Exemple
Here is a controller build using KoaEko and KoaEkoDoc
```typescript
import { IRouterContext } from "koa-router";
import { Comment } from "../../POCO/Comment";
import { EkoGet, EkoVersion } from "koa-eko";
imoort { EkoDocController, EkoDocRouteResponse, EkoDocRouteOutput, RouteBodyType } from "koa-eko-doc";
import { Ok, BadRequest } from "koa-eko-doc";


@EkoVersion("1.0.0")
export class CommentsController extends EkoController {

    public constructor() {
        super();
    }

    @EkoDocRouteOutput(RouteBodyType.JSON, Comment.prototype, "Array [ Comment ]")
    @EkoDocRouteResponse(BadRequest)
    @EkoDocRouteResponse(Ok)
    @EkoGet("/", "Get all comments", "Get all comments and / or associated users")
    public async GetAll(ctx: IRouterContext): Promise<void> {
        let comments: Comment[] = await Comment.scope(this.getScope()).all();
        ctx.body = comments;
    }

}

export default new CommentsController();
```
