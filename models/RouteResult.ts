export enum RouteResultType {
    Information,
    Success,
    Redirection,
    Error,
    Other
}

export class RouteResult {
    public readonly id?: number;
    public LinkedPropertyKey?: string;
    public code: number;
    public title: string;
    public description: string;
    public type: RouteResultType;

    public constructor(init?: Partial<RouteResult>) {
        Object.assign(this, init);

        let uid: number = 0;
        for (let i: number = 0; i < 8; i++) {
            uid *= 10;
            uid += Math.ceil(Math.random()*10);
        }
        this.id = uid;
    }
}

/// 1XX Informational response
// tslint:disable-next-line:max-line-length
export const Continue:RouteResult = new RouteResult({ code: 100, title: "Continue", description: "The server has received the request headers and the client should proceed to send the request body.", type: RouteResultType.Information });
// tslint:disable-next-line:max-line-length
export const SwitchingProtocols:RouteResult = new RouteResult({ code: 101, title: "Switching Protocols", description: "The requester has asked the server to switch protocols and the server has agreed to do so.", type: RouteResultType.Information });
// tslint:disable-next-line:max-line-length
export const Processing:RouteResult = new RouteResult({ code: 102, title: "Processing", description: "This code indicates that the server has received and is processing the request, but no response is available yet.[7] This prevents the client from timing out and assuming the request was lost.", type: RouteResultType.Information });
// tslint:disable-next-line:max-line-length
export const EarlyHints:RouteResult = new RouteResult({ code: 103, title: "Early Hints", description: "Used to return some response headers before final HTTP message.", type: RouteResultType.Information });

/// 2XX Success
// tslint:disable-next-line:max-line-length
export const Ok:RouteResult = new RouteResult({ code: 200, title: "OK", description: "Request complete successfuly.", type: RouteResultType.Success });
// tslint:disable-next-line:max-line-length
export const Created:RouteResult = new RouteResult({ code: 201, title: "Created", description: "The request has been fulfilled, resulting in the creation of a new resource.", type: RouteResultType.Success });
// tslint:disable-next-line:max-line-length
export const Accepted:RouteResult = new RouteResult({ code: 202, title: "Accepted", description: "The request has been accepted for processing, but the processing has not been completed.", type: RouteResultType.Success });
// tslint:disable-next-line:max-line-length
export const NoContent:RouteResult = new RouteResult({ code: 204, title: "No Content", description: "The server successfully processed the request and is not returning any content.", type: RouteResultType.Success });
// tslint:disable-next-line:max-line-length
export const ResetContent:RouteResult = new RouteResult({ code: 205, title: "Reset Content", description: "The server successfully processed the request, but is not returning any content.", type: RouteResultType.Success });
// tslint:disable-next-line:max-line-length
export const PartialContent:RouteResult = new RouteResult({ code: 206, title: "Partial Content", description: "The server is delivering only part of the resource (byte serving) due to a range header sent by the client.", type: RouteResultType.Success });
// tslint:disable-next-line:max-line-length
export const MultiStatus:RouteResult = new RouteResult({ code: 207, title: "Multi-Status", description: "The message body that follows is by default an XML message and can contain a number of separate response codes, depending on how many sub-requests were made.", type: RouteResultType.Success });
// tslint:disable-next-line:max-line-length
export const AlreadyReported:RouteResult = new RouteResult({ code: 208, title: "Already Reported", description: "The members of a DAV binding have already been enumerated in a preceding part of the (multistatus) response, and are not being included again.", type: RouteResultType.Success });
// tslint:disable-next-line:max-line-length
export const IMUsed:RouteResult = new RouteResult({ code: 226, title: "IM Used", description: "The server has fulfilled a request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance.", type: RouteResultType.Success });

/// 3XX Redirection
// tslint:disable-next-line:max-line-length
export const MultipleChoices:RouteResult = new RouteResult({code: 300, title: "Multiple Choices", description: "Indicates multiple options for the resource from which the client may choose (via agent-driven content negotiation).", type: RouteResultType.Redirection });
// tslint:disable-next-line:max-line-length
export const MovedPermanently:RouteResult = new RouteResult({code: 301, title: "Moved Permanently", description: "This and all future requests should be directed to the given URI.", type: RouteResultType.Redirection });
// tslint:disable-next-line:max-line-length
export const Found:RouteResult = new RouteResult({code: 302, title: "Found", description: "Tells the client to look at (browse to) another url. 302 has been superseded by 303 and 307.", type: RouteResultType.Redirection });
// tslint:disable-next-line:max-line-length
export const SeeOther:RouteResult = new RouteResult({code: 303, title: "See Other", description: "The response to the request can be found under another URI using the GET method.", type: RouteResultType.Redirection });
// tslint:disable-next-line:max-line-length
export const NotModified:RouteResult = new RouteResult({code: 304, title: "Not Modified", description: "Indicates that the resource has not been modified since the version specified by the request headers If-Modified-Since or If-None-Match.", type: RouteResultType.Redirection });
// tslint:disable-next-line:max-line-length
export const UseProxy:RouteResult = new RouteResult({code: 305, title: "Use Proxy", description: "The requested resource is available only through a proxy, the address for which is provided in the response.", type: RouteResultType.Redirection });
// tslint:disable-next-line:max-line-length
export const SwitchProxy:RouteResult = new RouteResult({code: 306, title: "Switch Proxy", description: "No longer used. Originally meant \"Subsequent requests should use the specified proxy.\"", type: RouteResultType.Redirection });
// tslint:disable-next-line:max-line-length
export const TemporaryRedirect:RouteResult = new RouteResult({code: 307, title: "Temporary Redirect", description: "In this case, the request should be repeated with another URI; however, future requests should still use the original URI.", type: RouteResultType.Redirection });
// tslint:disable-next-line:max-line-length
export const PermanentRedirect:RouteResult = new RouteResult({code: 308, title: "Permanent Redirect", description: "The request and all future requests should be repeated using another URI.", type: RouteResultType.Redirection });

/// 4XX Client errors
// tslint:disable-next-line:max-line-length
export const BadRequest:RouteResult = new RouteResult({code: 400, title: "Bad Request", description: "The server cannot proccess the request.", type: RouteResultType.Error });
// tslint:disable-next-line:max-line-length
export const Unauthorized:RouteResult = new RouteResult({code: 401, title: "Unauthorized", description: "Similar to 403 Forbidden, but specifically for use when authentication is required and has failed or has not yet been provided.", type: RouteResultType.Error });
// tslint:disable-next-line:max-line-length
export const Forbidden:RouteResult = new RouteResult({code: 403, title: "Forbbiden", description: "The request was valid, but the server is refusing action.", type: RouteResultType.Error });
// tslint:disable-next-line:max-line-length
export const NotFound:RouteResult = new RouteResult({code: 404, title: "Not Found", description: "The requested resource could not be found but may be available in the future.", type: RouteResultType.Error });
// tslint:disable-next-line:max-line-length
export const MethodNotAllowed:RouteResult = new RouteResult({code: 405, title: "Method Not Allowed", description: "The request method is not supported for the requested resource.", type: RouteResultType.Error });
// tslint:disable-next-line:max-line-length
export const NotAcceptable:RouteResult = new RouteResult({code: 406, title: "Not Acceptable", description: "The requested resource is capable of generating only content not acceptable according to the Accept headers sent in the request.", type: RouteResultType.Error });
// tslint:disable-next-line:max-line-length
export const BadProxyAuthenticationRequiredRequest:RouteResult = new RouteResult({code: 407, title: "Proxy Authentication Required", description: "The client must first authenticate itself with the proxy.", type: RouteResultType.Error });
// tslint:disable-next-line:max-line-length
export const RequestTimeout:RouteResult = new RouteResult({code: 408, title: "Request Timeout", description: "The server timed out waiting for the request.", type: RouteResultType.Error });
// tslint:disable-next-line:max-line-length
export const Conflict:RouteResult = new RouteResult({code: 409, title: "Conflict", description: "Indicates that the request could not be processed because of conflict in the current state of the resource, such as an edit conflict between multiple simultaneous updates.", type: RouteResultType.Error });
// tslint:disable-next-line:max-line-length
export const Gone:RouteResult = new RouteResult({code: 410, title: "Gone", description: "Indicates that the resource requested is no longer available and will not be available again.", type: RouteResultType.Error });
// tslint:disable-next-line:max-line-length
export const LengthRequired:RouteResult = new RouteResult({code: 411, title: "Length Required", description: "The request did not specify the length of its content, which is required by the requested resource.", type: RouteResultType.Error });
// tslint:disable-next-line:max-line-length
export const PreconditionFailed:RouteResult = new RouteResult({code: 412, title: "Precondition Failed", description: "The server does not meet one of the preconditions that the requester put on the request.", type: RouteResultType.Error });
// tslint:disable-next-line:max-line-length
export const PayloadTooLarge:RouteResult = new RouteResult({code: 413, title: "Payload Too Large", description: "The request is larger than the server is willing or able to process.", type: RouteResultType.Error });
// tslint:disable-next-line:max-line-length
export const URITooLong:RouteResult = new RouteResult({code: 414, title: "URI Too Long", description: "The URI provided was too long for the server to process.", type: RouteResultType.Error });
// tslint:disable-next-line:max-line-length
export const UnsupportedMediaType:RouteResult = new RouteResult({code: 415, title: "Unsupported Media Type", description: "The request entity has a media type which the server or resource does not support.", type: RouteResultType.Error });
// tslint:disable-next-line:max-line-length
export const RangeNotSatisfiable:RouteResult = new RouteResult({code: 416, title: "Range Not Satisfiable", description: "The client has asked for a portion of the file (byte serving), but the server cannot supply that portion.", type: RouteResultType.Error });
// tslint:disable-next-line:max-line-length
export const ExpectationFailed:RouteResult = new RouteResult({code: 417, title: "Expectation Failed", description: "The server cannot meet the requirements of the Expect request-header field.", type: RouteResultType.Error });
// tslint:disable-next-line:max-line-length
export const Teapot:RouteResult = new RouteResult({code: 418, title: "I'm a teapot", description: "The RFC specifies this code should be returned by teapots requested to brew coffee.", type: RouteResultType.Error });
// tslint:disable-next-line:max-line-length
export const MisdirectedRequest:RouteResult = new RouteResult({code: 421, title: "Misdirected Request", description: "The request was directed at a server that is not able to produce a response.", type: RouteResultType.Error});
// tslint:disable-next-line:max-line-length
export const UnprocessableEntity:RouteResult = new RouteResult({code: 422, title: "Unprocessable Entity", description: "The request was well-formed but was unable to be followed due to semantic errors.", type: RouteResultType.Error});
// tslint:disable-next-line:max-line-length
export const Locked:RouteResult = new RouteResult({code: 423, title: "Locked", description: "The resource that is being accessed is locked.", type: RouteResultType.Error});
// tslint:disable-next-line:max-line-length
export const FailedDependency:RouteResult = new RouteResult({code: 424, title: "Failed Dependency", description: "The request failed because it depended on another request and that request failed.", type: RouteResultType.Error});
// tslint:disable-next-line:max-line-length
export const UpgradeRequired:RouteResult = new RouteResult({code: 426, title: "Upgrade Required", description: "The client should switch to a different protocol such as TLS/1.0, given in the Upgrade header field.", type: RouteResultType.Error});
// tslint:disable-next-line:max-line-length
export const PreconditionRequired:RouteResult = new RouteResult({code: 428, title: "Precondition Required", description: "The origin server requires the request to be conditional.", type: RouteResultType.Error});
// tslint:disable-next-line:max-line-length
export const TooManyRequests:RouteResult = new RouteResult({code: 429, title: "Too Many Requests", description: "The user has sent too many requests in a given amount of time.", type: RouteResultType.Error});
// tslint:disable-next-line:max-line-length
export const RequestHeaderFieldsTooLarge:RouteResult = new RouteResult({code: 431, title: "Request Header Fields Too Large", description: "The server is unwilling to process the request because either an individual header field, or all the header fields collectively, are too large.", type: RouteResultType.Error});
// tslint:disable-next-line:max-line-length
export const UnavailableForLegalReasons:RouteResult = new RouteResult({code: 451, title: "Unavailable For Legal Reasons", description: "A server operator has received a legal demand to deny access to a resource or to a set of resources that includes the requested resource.", type: RouteResultType.Error});

/// 5XX Server errors
// tslint:disable-next-line:max-line-length
export const InternalServerError:RouteResult = new RouteResult({code: 500, title: "Internal Server Error", description: "A generic error message, given when an unexpected condition was encountered and no more specific message is suitable.", type: RouteResultType.Error});
// tslint:disable-next-line:max-line-length
export const NotImplemented:RouteResult = new RouteResult({code: 501, title: "Not Implemented", description: "The server either does not recognize the request method, or it lacks the ability to fulfil the request.", type: RouteResultType.Error});
// tslint:disable-next-line:max-line-length
export const BadGateway:RouteResult = new RouteResult({code: 502, title: "Bad Gateway", description: "The server was acting as a gateway or proxy and received an invalid response from the upstream server.", type: RouteResultType.Error});
// tslint:disable-next-line:max-line-length
export const ServiceUnavailable:RouteResult = new RouteResult({code: 503, title: "Service Unavailable", description: "The server is currently unavailable.", type: RouteResultType.Error});
// tslint:disable-next-line:max-line-length
export const GatewayTimeout:RouteResult = new RouteResult({code: 504, title: "Gateway Timeout", description: "The server was acting as a gateway or proxy and did not receive a timely response from the upstream server.", type: RouteResultType.Error});
// tslint:disable-next-line:max-line-length
export const HTTPVersionNotSupported:RouteResult = new RouteResult({code: 505, title: "HTTP Version Not Supported", description: "The server does not support the HTTP protocol version used in the request.", type: RouteResultType.Error});
// tslint:disable-next-line:max-line-length
export const NetworkAuthenticationRequired:RouteResult = new RouteResult({code: 511, title: "Network Authentication Required", description: "The client needs to authenticate to gain network access.", type: RouteResultType.Error});
