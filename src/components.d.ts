/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface AppHome {
    }
    interface AppProfile {
        "name": string;
    }
    interface AppRoot {
    }
    interface AppVideoCapacitor {
        "vtype": string;
    }
}
declare global {
    interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {
    }
    var HTMLAppHomeElement: {
        prototype: HTMLAppHomeElement;
        new (): HTMLAppHomeElement;
    };
    interface HTMLAppProfileElement extends Components.AppProfile, HTMLStencilElement {
    }
    var HTMLAppProfileElement: {
        prototype: HTMLAppProfileElement;
        new (): HTMLAppProfileElement;
    };
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLAppVideoCapacitorElement extends Components.AppVideoCapacitor, HTMLStencilElement {
    }
    var HTMLAppVideoCapacitorElement: {
        prototype: HTMLAppVideoCapacitorElement;
        new (): HTMLAppVideoCapacitorElement;
    };
    interface HTMLElementTagNameMap {
        "app-home": HTMLAppHomeElement;
        "app-profile": HTMLAppProfileElement;
        "app-root": HTMLAppRootElement;
        "app-video-capacitor": HTMLAppVideoCapacitorElement;
    }
}
declare namespace LocalJSX {
    interface AppHome {
    }
    interface AppProfile {
        "name"?: string;
    }
    interface AppRoot {
    }
    interface AppVideoCapacitor {
        "vtype"?: string;
    }
    interface IntrinsicElements {
        "app-home": AppHome;
        "app-profile": AppProfile;
        "app-root": AppRoot;
        "app-video-capacitor": AppVideoCapacitor;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-home": LocalJSX.AppHome & JSXBase.HTMLAttributes<HTMLAppHomeElement>;
            "app-profile": LocalJSX.AppProfile & JSXBase.HTMLAttributes<HTMLAppProfileElement>;
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "app-video-capacitor": LocalJSX.AppVideoCapacitor & JSXBase.HTMLAttributes<HTMLAppVideoCapacitorElement>;
        }
    }
}
