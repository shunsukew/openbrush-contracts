"use strict";(self.webpackChunkopenbrush=self.webpackChunkopenbrush||[]).push([[389],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return P}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=p(n),P=o,f=m["".concat(c,".").concat(P)]||m[P]||u[P]||i;return n?r.createElement(f,a(a({ref:t},l),{},{components:n})):r.createElement(f,a({ref:t},l))}));function P(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},638:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return l},default:function(){return m}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],s={sidebar_position:2,title:"PSP721 Mintable"},c=void 0,p={unversionedId:"smart-contracts/PSP721/Extensions/mintable",id:"smart-contracts/PSP721/Extensions/mintable",isDocsHomePage:!1,title:"PSP721 Mintable",description:"This example shows how you can reuse the implementation of PSP721 token with PSP721Mintable extension.",source:"@site/docs/smart-contracts/PSP721/Extensions/mintable.md",sourceDirName:"smart-contracts/PSP721/Extensions",slug:"/smart-contracts/PSP721/Extensions/mintable",permalink:"/smart-contracts/PSP721/Extensions/mintable",editUrl:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/docs/docs/smart-contracts/PSP721/Extensions/mintable.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"PSP721 Mintable"},sidebar:"tutorialSidebar",previous:{title:"PSP721 Metadata",permalink:"/smart-contracts/PSP721/Extensions/metadata"},next:{title:"PSP721 Burnable",permalink:"/smart-contracts/PSP721/Extensions/burnable"}},l=[{value:"How to use this extension",id:"how-to-use-this-extension",children:[]}],u={toc:l};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This example shows how you can reuse the implementation of ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/contracts/token/psp721"},"PSP721")," token with ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/contracts/token/psp721/src/extensions/mintable.rs"},"PSP721Mintable")," extension."),(0,i.kt)("h2",{id:"how-to-use-this-extension"},"How to use this extension"),(0,i.kt)("p",null,"For your smart contract to use this extension, you only need to implement the ",(0,i.kt)("inlineCode",{parentName:"p"},"PSP721Mintable")," trait in your ",(0,i.kt)("inlineCode",{parentName:"p"},"PSP721")," smart contract. Add import for  ",(0,i.kt)("inlineCode",{parentName:"p"},"psp721::extensions::mintable::*"),", inherit the implementation for ",(0,i.kt)("inlineCode",{parentName:"p"},"PSP721Mintable")," trait, where you can also customize (override) the original functions from ",(0,i.kt)("inlineCode",{parentName:"p"},"PSP721Mintable"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"use psp721::extensions::mintable::*;\n\nimpl PSP721Mintable for MyPSP721 {}\n")),(0,i.kt)("p",null,"And that's it! Your ",(0,i.kt)("inlineCode",{parentName:"p"},"PSP721")," is now extended by the ",(0,i.kt)("inlineCode",{parentName:"p"},"PSP721Mintable")," extension and ready to use its functions!"),(0,i.kt)("p",null,"You can also check the documentation for the basic implementation of ",(0,i.kt)("a",{parentName:"p",href:"/smart-contracts/PSP721/psp721"},"PSP721"),"."))}m.isMDXComponent=!0}}]);