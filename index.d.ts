// Type definitions for QCObjects 2.4
// Project: https://qcobjects.dev
// Definitions by: Jean Machuca <https://github.com/jeanmachuca>
// Definitions: https://qcobjects.dev

import { ClientRequest } from "http";
import { Http2SecureServer, Http2Server, Http2ServerRequest, Http2Stream } from "http2";
import { type QCObjectsElement, type QCObjectsShadowedElement, type InheritClass } from ".";
import { Stream } from "stream";

declare namespace QCObjects {
    type Microservice = {
        domain:string;
        basePath:string;
        body:any;
        stream?:Http2Stream | Stream;
        request?:Http2ServerRequest | ClientRequest;
    }
      
    class Route {
        name:string;
        description:string;
        microservice:string;
        redirect_to?:string;
        headers:any;
        responseHeaders:any;
        cors:any;
    }

    class BackendMicroservice extends InheritClass{
        domain:string;
        body:QCObjectsElement | QCObjectsShadowedElement | HTMLElement | string | undefined;
        basePath:string;
        route:Route;
        projectPath?:string;
        stream?:Http2Stream | Stream;
        request?:Http2ServerRequest | ClientRequest;
        routeParams?:any;
        server: Http2SecureServer | Http2Server;

        constructor(microservice:Microservice);

        cors():void;
        head(formData?:object|string):void;
        get(formData?:object|string):void;
        post(formData?:object|string):void;
        put(formData?:object|string):void;
        delete(formData?:object|string):void;
        connect(formData?:object|string):void;
        options(formData?:object|string):void;
        trace(formData?:object|string):void;
        patch(formData?:object|string):void;
        finishWithBody(stream?:Http2Stream | Stream):void;
        done():void;

    }


    class QCObjectsElement extends HTMLElement{
        subelements(query:string):Array<HTMLElement|QCObjectsElement>;
    }
    class QCObjectsShadowedElement extends ShadowRoot{
        style:any;
        subelements(query:string):Array<ShadowRoot|HTMLElement|QCObjectsShadowedElement|QCObjectsElement>;
    }

    class Logger {
        debugEnabled: Boolean;
        infoEnabled: Boolean;
        warnEnabled: Boolean;
        debug(message: any): string;
        warn(message: any): string;
        info(message: any): string;

    }
    function Class(className: string, extendsFrom: any, definition: any): any;
    class _Crypt{
        last_string:string;
        last_key:string;
        construct:Boolean;
        _new_(o:any):void;
        _encrypt():string;
        _decrypt():string;
        encrypt(_string_:string, key:string):string;
        decrypt(_string_:string, key:string):string;

    }
    class TagElements {
        show():void;
        hide():void;
        effect():void;
        findElements(elementName:string):TagElements;
    }
    class DefaultTemplateHandler {
        template:string;
        __definition:any;
        constructor ({component, template});
        assign(data:any):any;
    }
    class SourceJS {
        domain:string;
        basePath:string;
        body:QCObjectsElement | HTMLElement;
        type:string;
        containerTag:string;
        url:string;
        data:any;
        async:Boolean;
        external:Boolean;
        set(name:string, value:any):void;
        get(name:string):any;
        status:Boolean;
        done():void;
        fail():void;
        rebuild():void;
        Cast(o:any):any;
        _new_(properties:any):void;

    }
    class SourceCSS {
        domain:string;
        basePath:string;
        body:QCObjectsElement | HTMLElement;
        url:string;
        data:any;
        async:Boolean;
        external:Boolean;
        set(name:string, value:any):void;
        get(name:string):any;
        done():void;
        fail():void;
        rebuild():void;
        Cast(o:any):any;
        _new_(properties:any):void;

    }
    class ArrayList extends Array {}
    class ArrayCollection {
        source: ArrayList;
        changed(prop:string, value:any):any;
        push(value:any):void;
        pop(value:any):void;
        _new_(source:ArrayList):void;
    }
    class GlobalSettings {
        _GLOBAL:any;
        set(name:string,value:any):void;
        get(name:string,_default:any):any;
        __start__():Promise<any>;
    }
    class GLOBAL extends GlobalSettings{}
    class DDO {
        constructor({
            instance,
            name:string,
            fget,
            fset,
            value:any
          });
    }
    class ComplexStorageCache {
        object:any;
        index:string;
        load(cacheController:ComplexStorageCache):void;
        alternate(cacheController:ComplexStorageCache):void;
        clear():void;
        getCached(object:any):any;
        getID(object:any):any;
        getItem(cachedObjectID:string):JSON | null;
        setItem(cachedObjectID:string, value:any):void;
        isEmpty(object:any):Boolean;
        save(object:any, cachedNewResponse:string):void;

    }
    class _ComponentWidget_ extends HTMLElement{}

    function asyncLoad(callback:Function, args:Array<any>):any;
    function RegisterClass(_class_:any, namespace:string):void;
    function ComponentURI({COMPONENTS_BASE_PATH,COMPONENT_NAME,TPLEXTENSION,TPL_SOURCE}):string;
    function waitUntil(func:Function, exp:Function):void;
    function _super_(className:string, classMethodName: string, params:Array<any>):any;
    function _DOMCreateElement(elementName:string):QCObjectsElement|HTMLElement;
    function shortCode():string;
    function __getType__(_class_:any):string;
    function is_a(obj:any, typeName:string):Boolean;
    function _DataStringify(data:any):string;
    function serviceLoader(service:Service, _async:Boolean):Promise<any>;
    function componentLoader(component:Component, _async:Boolean):Promise<any>;
    function ObjectName(o:any):string;
    function isQCObjects_Class(_:any):Boolean;
    function isQCObjects_Object(_:any):Boolean;
    function NamespaceRef(namespace:string):any;
    function RegisterWidget(widgetName:string):void;
    function RegisterWidgets(...widgetList:Array<string>):void;
    function range(start:number, stop:number, step:number):Array<any>;
    function getDocumentLayout():string;
    function Export(fn:Function):Function;
    function New(__class__:any, args:any):any;
    function Tag(tagName:string, innerHTML:string):TagElements;
    function Ready(e:Function):void;
    function _methods_(_:any):Array<any>;
    function set(_:any, _value_:any):any;
    function get(_:any, _defaultValue_:any):any;
    function __start__():void;



    class InheritClass {
        __classType?: string;
        __definition?: any;
        __new__?():void;
        __namespace?:string;
        body?:QCObjectsElement |QCObjectsShadowedElement |HTMLElement | string | null | undefined;

    }

    class Processor extends InheritClass{
        component:Component;
        processors:Array<any>;
        process(template:string,component:Component):any;
        processObject(obj:any, component:Component):any;
        setProcessor(proc:Function):any;
        constructor (...args:Array<any>);

    }

    class Component extends InheritClass {
        name: string;
        _body:QCObjectsElement;
        templateURI:string;
        tplsource:string;
        template:string;
        validRoutingWays:Array<string>;
        basePath:string;
        domain:string;
        templateHandler:string;
        processorHandler:Processor;
        routingWay:string;
        routingNodes:Array<QCObjectsElement|HTMLElement>;
        routings:Array<any>;
        routingPath:string;
        routingPaths:Array<string>;
        _componentHelpers:Array<any>;
        subcomponents:Array<Component>;
        splashScreenComponent?:Component;
        controller:Controller | null;
        view:View | null;
        effect:Effect;
        effectClass:string;
        method:string;
        static cached:Boolean;
        __promise__?:Promise<any>;
        data:any;
        shadowed?:Boolean;
        shadowRoot?:QCObjectsShadowedElement;
        constructor (...args:Array<any>);
        done(...args:Array<any>);
        fail(...args:Array<any>);
    }

    class CONFIG extends InheritClass {
        _CONFIG_ENC:string;
        _CONFIG:any;
        static set(_:any, _value_:any):any;
        static get(_:any, _defaultValue_:any):any;
        __definition:any;
    }

    class Controller {
        __classType:string;
        __definition:any;
        __new__():any;
        __namespace:string;
        body?:QCObjectsElement|HTMLElement;
        component:Component;
        dependencies?:Array<any>;
        constructor (...args:Array<any>);
        done(...args:Array<any>);
        fail(...args:Array<any>);
    }

    class View {
        __classType:string;
        __definition:any;
        __new__():any;
        __namespace:string;
        body:QCObjectsElement|HTMLElement;
        component:Component;
        constructor (...args:Array<any>);
        done(...args:Array<any>);
        fail(...args:Array<any>);
    }

    class Service extends InheritClass {
        kind:string;
        domain:string;
        basePath:string;
        url:string;
        method:string;
        data:any;
        reload:Boolean;
        cached:Boolean;
        headers:any;
        template:any;
        done(...args:Array<any>);
        fail(...args:Array<any>);
    }
    class JSONService extends Service {
        JSONresponse:JSON;
    }
    class ConfigService extends JSONService{
        configFileName:string;
    }
    class VO {}
    class Effect extends InheritClass {
        duration:number;
        apply(...args:Array<any>):any;
    }
    class TransitionEffect extends Effect{
        component:Component;
        defaultParams:{
            alphaFrom?: number,
            alphaTo?: number,
            angleFrom?: number,
            angleTo?: number,
            radiusFrom?: number,
            radiusTo?: number,
            scaleFrom?: number,
            scaleTo?: number
          };
        duration:number;
        fitToHeight:Boolean;
        fitToWidth:Boolean;
        effects:Array<string>;

    }
    class Timer extends InheritClass{
        duration:number;
        alive:Boolean;
    }
    class Toggle {
        _toggle:Boolean
        _inverse:Boolean;
        _positive:Function;
        _negative:Function;
        _dispatched?:Boolean;
        _args:Array<any>;

        constructor (positive:Function, negative:Function, args:Array<any>);

    }

    let logger: Logger;
    let _sdk_: Promise<any>;
    let global:GLOBAL;

    function ClassFactory(className: string): any;
    function Package(packageName: string, classesList: Array<any> |undefined): Array<any> | undefined;
    function Import(packageName: string, ready?:Function, external?:Boolean): any;

}

export = QCObjects;