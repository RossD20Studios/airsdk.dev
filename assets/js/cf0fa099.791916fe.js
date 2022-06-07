"use strict";(self.webpackChunkairsdk_dev=self.webpackChunkairsdk_dev||[]).push([[7273],{4137:function(e,t,i){i.d(t,{Zo:function(){return p},kt:function(){return u}});var a=i(7294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function s(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?s(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)i=s[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)i=s[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var r=a.createContext({}),c=function(e){var t=a.useContext(r),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},p=function(e){var t=c(e.components);return a.createElement(r.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,s=e.originalType,r=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=c(i),u=n,m=h["".concat(r,".").concat(u)]||h[u]||d[u]||s;return i?a.createElement(m,o(o({ref:t},p),{},{components:i})):a.createElement(m,o({ref:t},p))}));function u(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=i.length,o=new Array(s);o[0]=h;var l={};for(var r in t)hasOwnProperty.call(t,r)&&(l[r]=t[r]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var c=2;c<s;c++)o[c]=i[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,i)}h.displayName="MDXCreateElement"},5422:function(e,t,i){i.r(t),i.d(t,{frontMatter:function(){return l},contentTitle:function(){return r},metadata:function(){return c},toc:function(){return p},default:function(){return h}});var a=i(7462),n=i(3366),s=(i(7294),i(4137)),o=["components"],l={title:"Advantages of the display list approach",sidebar_position:4},r=void 0,c={unversionedId:"development/display/display-programming/advantages-of-the-display-list-approach",id:"development/display/display-programming/advantages-of-the-display-list-approach",isDocsHomePage:!1,title:"Advantages of the display list approach",description:"In ActionScript 3.0, there are separate classes for different types of display objects. In ActionScript 1.0 and 2.0, many of the same types of objects are all included in one class: the MovieClip class.",source:"@site/docs/development/display/display-programming/advantages-of-the-display-list-approach.md",sourceDirName:"development/display/display-programming",slug:"/development/display/display-programming/advantages-of-the-display-list-approach",permalink:"/docs/development/display/display-programming/advantages-of-the-display-list-approach",editUrl:"https://github.com/airsdk/airsdk.dev/edit/main/docs/development/display/display-programming/advantages-of-the-display-list-approach.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Advantages of the display list approach",sidebar_position:4},sidebar:"mainSidebar",previous:{title:"Core display classes",permalink:"/docs/development/display/display-programming/core-display-classes"},next:{title:"Overview",permalink:"/docs/development/display/display-programming/working-with-display-objects/index"}},p=[{value:"More efficient rendering and smaller file sizes",id:"more-efficient-rendering-and-smaller-file-sizes",children:[],level:2},{value:"Improved depth management",id:"improved-depth-management",children:[],level:2},{value:"Full traversal of the display list",id:"full-traversal-of-the-display-list",children:[],level:2},{value:"Off-list display objects",id:"off-list-display-objects",children:[],level:2},{value:"Easier subclassing of display objects",id:"easier-subclassing-of-display-objects",children:[],level:2}],d={toc:p};function h(e){var t=e.components,i=(0,n.Z)(e,o);return(0,s.kt)("wrapper",(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"In ActionScript 3.0, there are separate classes for different types of display objects. In ActionScript 1.0 and 2.0, many of the same types of objects are all included in one class: the MovieClip class."),(0,s.kt)("p",null,"This individualization of classes and the hierarchical structure of display lists have the following benefits:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"More efficient rendering and reduced memory usage"),(0,s.kt)("li",{parentName:"ul"},"Improved depth management"),(0,s.kt)("li",{parentName:"ul"},"Full traversal of the display list"),(0,s.kt)("li",{parentName:"ul"},"Off-list display objects"),(0,s.kt)("li",{parentName:"ul"},"Easier subclassing of display objects")),(0,s.kt)("h2",{id:"more-efficient-rendering-and-smaller-file-sizes"},"More efficient rendering and smaller file sizes"),(0,s.kt)("p",null,"In ActionScript 1.0 and 2.0, you could draw shapes only in a MovieClip object. In ActionScript 3.0, there are simpler display object classes in which you can draw shapes. Because these ActionScript 3.0 display object classes do not include the full set of methods and properties that a MovieClip object includes, they are less taxing on memory and processor resources."),(0,s.kt)("p",null,"For example, each MovieClip object includes properties for the timeline of the movie clip, whereas a Shape object does not. The properties for managing the timeline can use a lot of memory and processor resources. In ActionScript 3.0, using the Shape object results in better performance. The Shape object has less overhead than the more complex MovieClip object. Flash Player and AIR do not need to manage unused MovieClip properties, which improves speed and reduces the memory footprint the object uses."),(0,s.kt)("h2",{id:"improved-depth-management"},"Improved depth management"),(0,s.kt)("p",null,"In ActionScript 1.0 and 2.0, depth was managed through a linear depth management scheme and methods such as getNextHighestDepth() ."),(0,s.kt)("p",null,"ActionScript 3.0 includes the DisplayObjectContainer class, which has more convenient methods and properties for managing the depth of display objects."),(0,s.kt)("p",null,"In ActionScript 3.0, when you move a display object to a new position in the child list of a DisplayObjectContainer instance, the other children in the display object container are repositioned automatically and assigned appropriate child index positions in the display object container."),(0,s.kt)("p",null,"Also, in ActionScript 3.0 it is always possible to discover all of the child objects of any display object container. Every DisplayObjectContainer instance has a numChildren property, which lists the number of children in the display object container. And since the child list of a display object container is always an indexed list, you can examine every object in the list from index position 0 through the last index position ( numChildren - 1 ). This was not possible with the methods and properties of a MovieClip object in ActionScript 1.0 and 2.0."),(0,s.kt)("p",null,"In ActionScript 3.0, you can easily traverse the display list sequentially; there are no gaps in the index numbers of a child list of a display object container. Traversing the display list and managing the depth of objects is much easier than was possible in ActionScript 1.0 and 2.0. In ActionScript 1.0 and 2.0, a movie clip could contain objects with intermittent gaps in the depth order, which could make it difficult to traverse the list of object. In ActionScript 3.0, each child list of a display object container is cached internally as an array, resulting in very fast lookups (by index). Looping through all children of a display object container is also very fast."),(0,s.kt)("p",null,"In ActionScript 3.0, you can also access children in a display object container by using the getChildByName() method of the DisplayObjectContainer class."),(0,s.kt)("h2",{id:"full-traversal-of-the-display-list"},"Full traversal of the display list"),(0,s.kt)("p",null,"In ActionScript 1.0 and 2.0, you could not access some objects, such as vector shapes, that were drawn in the Flash authoring tool. In ActionScript 3.0, you can access all objects on the display list\u2014both those created using ActionScript and all display objects created in the Flash authoring tool. For details, see ",(0,s.kt)("a",{parentName:"p",href:"working-with-display-objects/traversing-the-display-list"},"Traversing the display list")," ."),(0,s.kt)("h2",{id:"off-list-display-objects"},"Off-list display objects"),(0,s.kt)("p",null,"In ActionScript 3.0, you can create display objects that are not on the visible display list. These are known as off-list display objects. A display object is added to the visible display list only when you call the ",(0,s.kt)("inlineCode",{parentName:"p"},"addChild()")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"addChildAt()")," method of a ",(0,s.kt)("inlineCode",{parentName:"p"},"DisplayObjectContainer")," instance that has already been added to the display list."),(0,s.kt)("p",null,"You can use off-list display objects to assemble complex display objects, such as those that have multiple display object containers containing multiple display objects. By keeping display objects off-list, you can assemble complicated objects without using the processing time to render these display objects. You can then add an off-list display object to the display list when it is needed. Also, you can move a child of a display object container on and off the display list and to any desired position in the display list at will."),(0,s.kt)("h2",{id:"easier-subclassing-of-display-objects"},"Easier subclassing of display objects"),(0,s.kt)("p",null,"In ActionScript 1.0 and 2.0, you would often have to add new ",(0,s.kt)("inlineCode",{parentName:"p"},"MovieClip")," objects to a SWF file to create basic shapes or to display bitmaps. In ActionScript 3.0, the DisplayObject class includes many built-in subclasses, including Shape and Bitmap. Because the classes in ActionScript 3.0 are more specialized for specific types of objects, it is easier to create basic subclasses of the built-in classes."),(0,s.kt)("p",null,"For example, in order to draw a circle in ActionScript 2.0, you could create a ",(0,s.kt)("inlineCode",{parentName:"p"},"CustomCircle")," class that extends the ",(0,s.kt)("inlineCode",{parentName:"p"},"MovieClip")," class when an object of the custom class is instantiated. However, that class would also include a number of properties and methods from the ",(0,s.kt)("inlineCode",{parentName:"p"},"MovieClip")," class (such as ",(0,s.kt)("inlineCode",{parentName:"p"},"totalFrames")," ) that do not apply to the class. In ActionScript 3.0, however, you can create a ",(0,s.kt)("inlineCode",{parentName:"p"},"CustomCircle")," class that extends the ",(0,s.kt)("inlineCode",{parentName:"p"},"Shape")," object, and as such does not include the unrelated properties and methods that are contained in the ",(0,s.kt)("inlineCode",{parentName:"p"},"MovieClip")," class. The following code shows an example of a ",(0,s.kt)("inlineCode",{parentName:"p"},"CustomCircle")," class:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-actionscript"},"import flash.display.*;\n\npublic class CustomCircle extends Shape\n{\n    var xPos:Number;\n    var yPos:Number;\n    var radius:Number;\n    var color:uint;\n\n    public function CustomCircle(\n        xInput:Number,\n        yInput:Number,\n        rInput:Number,\n        colorInput:uint)\n    {\n        xPos = xInput;\n        yPos = yInput;\n        radius = rInput;\n        color = colorInput;\n        this.graphics.beginFill(color);\n        this.graphics.drawCircle(xPos, yPos, radius);\n    }\n}\n")))}h.isMDXComponent=!0}}]);