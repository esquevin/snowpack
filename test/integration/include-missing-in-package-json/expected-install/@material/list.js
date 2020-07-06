/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var o=function(e,c){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,b){a.__proto__=b}||function(a,b){for(var d in b)b.hasOwnProperty(d)&&(a[d]=b[d])},o(e,c)};function r(e,c){o(e,c);function a(){this.constructor=e}e.prototype=c===null?Object.create(c):(a.prototype=c.prototype,new a())}var p=function(){return p=Object.assign||function e(c){for(var a,b=1,d=arguments.length;b<d;b++){a=arguments[b];for(var f in a)Object.prototype.hasOwnProperty.call(a,f)&&(c[f]=a[f])}return c},p.apply(this,arguments)};function y(e,c){var a=typeof Symbol==="function"&&e[Symbol.iterator];if(!a)return e;var b=a.call(e),d,f=[],h;try{for(;(c===void 0||c-- >0)&&!(d=b.next()).done;)f.push(d.value)}catch(j){h={error:j}}finally{try{d&&!d.done&&(a=b.return)&&a.call(b)}finally{if(h)throw h.error}}return f}function z(){for(var e=[],c=0;c<arguments.length;c++)e=e.concat(y(arguments[c]));return e}/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var s=function(){function e(c){c===void 0&&(c={}),this.adapter_=c}return Object.defineProperty(e,"cssClasses",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{}},enumerable:!0,configurable:!0}),e.prototype.init=function(){},e.prototype.destroy=function(){},e}();/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var A=function(){function e(c,a){for(var b=[],d=2;d<arguments.length;d++)b[d-2]=arguments[d];this.root_=c,this.initialize.apply(this,z(b)),this.foundation_=a===void 0?this.getDefaultFoundation():a,this.foundation_.init(),this.initialSyncWithDOM()}return e.attachTo=function(c){return new e(c,new s({}))},e.prototype.initialize=function(){for(var c=[],a=0;a<arguments.length;a++)c[a]=arguments[a]},e.prototype.getDefaultFoundation=function(){throw new Error("Subclasses must override getDefaultFoundation to return a properly configured foundation class")},e.prototype.initialSyncWithDOM=function(){},e.prototype.destroy=function(){this.foundation_.destroy()},e.prototype.listen=function(c,a,b){this.root_.addEventListener(c,a,b)},e.prototype.unlisten=function(c,a,b){this.root_.removeEventListener(c,a,b)},e.prototype.emit=function(c,a,b){b===void 0&&(b=!1);var d;typeof CustomEvent==="function"?d=new CustomEvent(c,{bubbles:b,detail:a}):(d=document.createEvent("CustomEvent"),d.initCustomEvent(c,b,!1,a)),this.root_.dispatchEvent(d)},e}();/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */function B(e,c){if(e.closest)return e.closest(c);for(var a=e;a;){if(q(a,c))return a;a=a.parentElement}return null}function q(e,c){var a=e.matches||e.webkitMatchesSelector||e.msMatchesSelector;return a.call(e,c)}/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var i={LIST_ITEM_ACTIVATED_CLASS:"mdc-list-item--activated",LIST_ITEM_CLASS:"mdc-list-item",LIST_ITEM_DISABLED_CLASS:"mdc-list-item--disabled",LIST_ITEM_SELECTED_CLASS:"mdc-list-item--selected",ROOT:"mdc-list"},g={ACTION_EVENT:"MDCList:action",ARIA_CHECKED:"aria-checked",ARIA_CHECKED_CHECKBOX_SELECTOR:'[role="checkbox"][aria-checked="true"]',ARIA_CHECKED_RADIO_SELECTOR:'[role="radio"][aria-checked="true"]',ARIA_CURRENT:"aria-current",ARIA_DISABLED:"aria-disabled",ARIA_ORIENTATION:"aria-orientation",ARIA_ORIENTATION_HORIZONTAL:"horizontal",ARIA_ROLE_CHECKBOX_SELECTOR:'[role="checkbox"]',ARIA_SELECTED:"aria-selected",CHECKBOX_RADIO_SELECTOR:'input[type="checkbox"], input[type="radio"]',CHECKBOX_SELECTOR:'input[type="checkbox"]',CHILD_ELEMENTS_TO_TOGGLE_TABINDEX:`
    .`+i.LIST_ITEM_CLASS+` button:not(:disabled),
    .`+i.LIST_ITEM_CLASS+` a
  `,FOCUSABLE_CHILD_ELEMENTS:`
    .`+i.LIST_ITEM_CLASS+` button:not(:disabled),
    .`+i.LIST_ITEM_CLASS+` a,
    .`+i.LIST_ITEM_CLASS+` input[type="radio"]:not(:disabled),
    .`+i.LIST_ITEM_CLASS+` input[type="checkbox"]:not(:disabled)
  `,RADIO_SELECTOR:'input[type="radio"]'},k={UNSET_INDEX:-1};/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var C=["input","button","textarea","select"];function D(e){return e instanceof Array}var t=function(e){r(c,e);function c(a){var b=e.call(this,p({},c.defaultAdapter,a))||this;return b.wrapFocus_=!1,b.isVertical_=!0,b.isSingleSelectionList_=!1,b.selectedIndex_=k.UNSET_INDEX,b.focusedItemIndex_=k.UNSET_INDEX,b.useActivatedClass_=!1,b.ariaCurrentAttrValue_=null,b.isCheckboxList_=!1,b.isRadioList_=!1,b}return Object.defineProperty(c,"strings",{get:function(){return g},enumerable:!0,configurable:!0}),Object.defineProperty(c,"cssClasses",{get:function(){return i},enumerable:!0,configurable:!0}),Object.defineProperty(c,"numbers",{get:function(){return k},enumerable:!0,configurable:!0}),Object.defineProperty(c,"defaultAdapter",{get:function(){return{addClassForElementIndex:function(){return},focusItemAtIndex:function(){return},getAttributeForElementIndex:function(){return null},getFocusedElementIndex:function(){return 0},getListItemCount:function(){return 0},hasCheckboxAtIndex:function(){return!1},hasRadioAtIndex:function(){return!1},isCheckboxCheckedAtIndex:function(){return!1},isFocusInsideList:function(){return!1},isRootFocused:function(){return!1},listItemAtIndexHasClass:function(){return!1},notifyAction:function(){return},removeClassForElementIndex:function(){return},setAttributeForElementIndex:function(){return},setCheckedCheckboxOrRadioAtIndex:function(){return},setTabIndexForListItemChildren:function(){return}}},enumerable:!0,configurable:!0}),c.prototype.layout=function(){if(this.adapter_.getListItemCount()===0)return;this.adapter_.hasCheckboxAtIndex(0)?this.isCheckboxList_=!0:this.adapter_.hasRadioAtIndex(0)&&(this.isRadioList_=!0)},c.prototype.setWrapFocus=function(a){this.wrapFocus_=a},c.prototype.setVerticalOrientation=function(a){this.isVertical_=a},c.prototype.setSingleSelection=function(a){this.isSingleSelectionList_=a},c.prototype.setUseActivatedClass=function(a){this.useActivatedClass_=a},c.prototype.getSelectedIndex=function(){return this.selectedIndex_},c.prototype.setSelectedIndex=function(a){if(!this.isIndexValid_(a))return;this.isCheckboxList_?this.setCheckboxAtIndex_(a):this.isRadioList_?this.setRadioAtIndex_(a):this.setSingleSelectionAtIndex_(a)},c.prototype.handleFocusIn=function(a,b){b>=0&&this.adapter_.setTabIndexForListItemChildren(b,"0")},c.prototype.handleFocusOut=function(a,b){var d=this;b>=0&&this.adapter_.setTabIndexForListItemChildren(b,"-1"),setTimeout(function(){d.adapter_.isFocusInsideList()||d.setTabindexToFirstSelectedItem_()},0)},c.prototype.handleKeydown=function(a,b,d){var f=a.key==="ArrowLeft"||a.keyCode===37,h=a.key==="ArrowUp"||a.keyCode===38,j=a.key==="ArrowRight"||a.keyCode===39,m=a.key==="ArrowDown"||a.keyCode===40,u=a.key==="Home"||a.keyCode===36,v=a.key==="End"||a.keyCode===35,w=a.key==="Enter"||a.keyCode===13,F=a.key==="Space"||a.keyCode===32;if(this.adapter_.isRootFocused()){h||v?(a.preventDefault(),this.focusLastElement()):(m||u)&&(a.preventDefault(),this.focusFirstElement());return}var l=this.adapter_.getFocusedElementIndex();if(l===-1){l=d;if(l<0)return}var n;if(this.isVertical_&&m||!this.isVertical_&&j)this.preventDefaultEvent_(a),n=this.focusNextElement(l);else if(this.isVertical_&&h||!this.isVertical_&&f)this.preventDefaultEvent_(a),n=this.focusPrevElement(l);else if(u)this.preventDefaultEvent_(a),n=this.focusFirstElement();else if(v)this.preventDefaultEvent_(a),n=this.focusLastElement();else if(w||F){if(b){var x=a.target;if(x&&x.tagName==="A"&&w)return;this.preventDefaultEvent_(a),this.isSelectableList_()&&this.setSelectedIndexOnAction_(l),this.adapter_.notifyAction(l)}}this.focusedItemIndex_=l,n!==void 0&&(this.setTabindexAtIndex_(n),this.focusedItemIndex_=n)},c.prototype.handleClick=function(a,b){if(a===k.UNSET_INDEX)return;this.isSelectableList_()&&this.setSelectedIndexOnAction_(a,b),this.adapter_.notifyAction(a),this.setTabindexAtIndex_(a),this.focusedItemIndex_=a},c.prototype.focusNextElement=function(a){var b=this.adapter_.getListItemCount(),d=a+1;if(d>=b)if(this.wrapFocus_)d=0;else return a;return this.adapter_.focusItemAtIndex(d),d},c.prototype.focusPrevElement=function(a){var b=a-1;if(b<0)if(this.wrapFocus_)b=this.adapter_.getListItemCount()-1;else return a;return this.adapter_.focusItemAtIndex(b),b},c.prototype.focusFirstElement=function(){return this.adapter_.focusItemAtIndex(0),0},c.prototype.focusLastElement=function(){var a=this.adapter_.getListItemCount()-1;return this.adapter_.focusItemAtIndex(a),a},c.prototype.setEnabled=function(a,b){if(!this.isIndexValid_(a))return;b?(this.adapter_.removeClassForElementIndex(a,i.LIST_ITEM_DISABLED_CLASS),this.adapter_.setAttributeForElementIndex(a,g.ARIA_DISABLED,"false")):(this.adapter_.addClassForElementIndex(a,i.LIST_ITEM_DISABLED_CLASS),this.adapter_.setAttributeForElementIndex(a,g.ARIA_DISABLED,"true"))},c.prototype.preventDefaultEvent_=function(a){var b=a.target,d=(""+b.tagName).toLowerCase();C.indexOf(d)===-1&&a.preventDefault()},c.prototype.setSingleSelectionAtIndex_=function(a){if(this.selectedIndex_===a)return;var b=i.LIST_ITEM_SELECTED_CLASS;this.useActivatedClass_&&(b=i.LIST_ITEM_ACTIVATED_CLASS),this.selectedIndex_!==k.UNSET_INDEX&&this.adapter_.removeClassForElementIndex(this.selectedIndex_,b),this.adapter_.addClassForElementIndex(a,b),this.setAriaForSingleSelectionAtIndex_(a),this.selectedIndex_=a},c.prototype.setAriaForSingleSelectionAtIndex_=function(a){this.selectedIndex_===k.UNSET_INDEX&&(this.ariaCurrentAttrValue_=this.adapter_.getAttributeForElementIndex(a,g.ARIA_CURRENT));var b=this.ariaCurrentAttrValue_!==null,d=b?g.ARIA_CURRENT:g.ARIA_SELECTED;this.selectedIndex_!==k.UNSET_INDEX&&this.adapter_.setAttributeForElementIndex(this.selectedIndex_,d,"false");var f=b?this.ariaCurrentAttrValue_:"true";this.adapter_.setAttributeForElementIndex(a,d,f)},c.prototype.setRadioAtIndex_=function(a){this.adapter_.setCheckedCheckboxOrRadioAtIndex(a,!0),this.selectedIndex_!==k.UNSET_INDEX&&this.adapter_.setAttributeForElementIndex(this.selectedIndex_,g.ARIA_CHECKED,"false"),this.adapter_.setAttributeForElementIndex(a,g.ARIA_CHECKED,"true"),this.selectedIndex_=a},c.prototype.setCheckboxAtIndex_=function(a){for(var b=0;b<this.adapter_.getListItemCount();b++){var d=!1;a.indexOf(b)>=0&&(d=!0),this.adapter_.setCheckedCheckboxOrRadioAtIndex(b,d),this.adapter_.setAttributeForElementIndex(b,g.ARIA_CHECKED,d?"true":"false")}this.selectedIndex_=a},c.prototype.setTabindexAtIndex_=function(a){this.focusedItemIndex_===k.UNSET_INDEX&&a!==0?this.adapter_.setAttributeForElementIndex(0,"tabindex","-1"):this.focusedItemIndex_>=0&&this.focusedItemIndex_!==a&&this.adapter_.setAttributeForElementIndex(this.focusedItemIndex_,"tabindex","-1"),this.adapter_.setAttributeForElementIndex(a,"tabindex","0")},c.prototype.isSelectableList_=function(){return this.isSingleSelectionList_||this.isCheckboxList_||this.isRadioList_},c.prototype.setTabindexToFirstSelectedItem_=function(){var a=0;this.isSelectableList_()&&(typeof this.selectedIndex_==="number"&&this.selectedIndex_!==k.UNSET_INDEX?a=this.selectedIndex_:D(this.selectedIndex_)&&this.selectedIndex_.length>0&&(a=this.selectedIndex_.reduce(function(b,d){return Math.min(b,d)}))),this.setTabindexAtIndex_(a)},c.prototype.isIndexValid_=function(a){var b=this;if(a instanceof Array){if(!this.isCheckboxList_)throw new Error("MDCListFoundation: Array of index is only supported for checkbox based list");return a.length===0?!0:a.some(function(d){return b.isIndexInRange_(d)})}else if(typeof a==="number"){if(this.isCheckboxList_)throw new Error("MDCListFoundation: Expected array of index for checkbox based list but got number: "+a);return this.isIndexInRange_(a)}else return!1},c.prototype.isIndexInRange_=function(a){var b=this.adapter_.getListItemCount();return a>=0&&a<b},c.prototype.setSelectedIndexOnAction_=function(a,b){b===void 0&&(b=!0);if(this.adapter_.listItemAtIndexHasClass(a,i.LIST_ITEM_DISABLED_CLASS))return;this.isCheckboxList_?this.toggleCheckboxAtIndex_(a,b):this.setSelectedIndex(a)},c.prototype.toggleCheckboxAtIndex_=function(a,b){var d=this.adapter_.isCheckboxCheckedAtIndex(a);b&&(d=!d,this.adapter_.setCheckedCheckboxOrRadioAtIndex(a,d)),this.adapter_.setAttributeForElementIndex(a,g.ARIA_CHECKED,d?"true":"false");var f=this.selectedIndex_===k.UNSET_INDEX?[]:this.selectedIndex_.slice();d?f.push(a):f=f.filter(function(h){return h!==a}),this.selectedIndex_=f},c}(s);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var E=function(e){r(c,e);function c(){return e!==null&&e.apply(this,arguments)||this}return Object.defineProperty(c.prototype,"vertical",{set:function(a){this.foundation_.setVerticalOrientation(a)},enumerable:!0,configurable:!0}),Object.defineProperty(c.prototype,"listElements",{get:function(){return[].slice.call(this.root_.querySelectorAll("."+i.LIST_ITEM_CLASS))},enumerable:!0,configurable:!0}),Object.defineProperty(c.prototype,"wrapFocus",{set:function(a){this.foundation_.setWrapFocus(a)},enumerable:!0,configurable:!0}),Object.defineProperty(c.prototype,"singleSelection",{set:function(a){this.foundation_.setSingleSelection(a)},enumerable:!0,configurable:!0}),Object.defineProperty(c.prototype,"selectedIndex",{get:function(){return this.foundation_.getSelectedIndex()},set:function(a){this.foundation_.setSelectedIndex(a)},enumerable:!0,configurable:!0}),c.attachTo=function(a){return new c(a)},c.prototype.initialSyncWithDOM=function(){this.handleClick_=this.handleClickEvent_.bind(this),this.handleKeydown_=this.handleKeydownEvent_.bind(this),this.focusInEventListener_=this.handleFocusInEvent_.bind(this),this.focusOutEventListener_=this.handleFocusOutEvent_.bind(this),this.listen("keydown",this.handleKeydown_),this.listen("click",this.handleClick_),this.listen("focusin",this.focusInEventListener_),this.listen("focusout",this.focusOutEventListener_),this.layout(),this.initializeListType()},c.prototype.destroy=function(){this.unlisten("keydown",this.handleKeydown_),this.unlisten("click",this.handleClick_),this.unlisten("focusin",this.focusInEventListener_),this.unlisten("focusout",this.focusOutEventListener_)},c.prototype.layout=function(){var a=this.root_.getAttribute(g.ARIA_ORIENTATION);this.vertical=a!==g.ARIA_ORIENTATION_HORIZONTAL,[].slice.call(this.root_.querySelectorAll(".mdc-list-item:not([tabindex])")).forEach(function(b){b.setAttribute("tabindex","-1")}),[].slice.call(this.root_.querySelectorAll(g.FOCUSABLE_CHILD_ELEMENTS)).forEach(function(b){return b.setAttribute("tabindex","-1")}),this.foundation_.layout()},c.prototype.initializeListType=function(){var a=this,b=this.root_.querySelectorAll(g.ARIA_ROLE_CHECKBOX_SELECTOR),d=this.root_.querySelector(`
      .`+i.LIST_ITEM_ACTIVATED_CLASS+`,
      .`+i.LIST_ITEM_SELECTED_CLASS+`
    `),f=this.root_.querySelector(g.ARIA_CHECKED_RADIO_SELECTOR);if(b.length){var h=this.root_.querySelectorAll(g.ARIA_CHECKED_CHECKBOX_SELECTOR);this.selectedIndex=[].map.call(h,function(j){return a.listElements.indexOf(j)})}else d?(d.classList.contains(i.LIST_ITEM_ACTIVATED_CLASS)&&this.foundation_.setUseActivatedClass(!0),this.singleSelection=!0,this.selectedIndex=this.listElements.indexOf(d)):f&&(this.selectedIndex=this.listElements.indexOf(f))},c.prototype.setEnabled=function(a,b){this.foundation_.setEnabled(a,b)},c.prototype.getDefaultFoundation=function(){var a=this,b={addClassForElementIndex:function(d,f){var h=a.listElements[d];h&&h.classList.add(f)},focusItemAtIndex:function(d){var f=a.listElements[d];f&&f.focus()},getAttributeForElementIndex:function(d,f){return a.listElements[d].getAttribute(f)},getFocusedElementIndex:function(){return a.listElements.indexOf(document.activeElement)},getListItemCount:function(){return a.listElements.length},hasCheckboxAtIndex:function(d){var f=a.listElements[d];return!!f.querySelector(g.CHECKBOX_SELECTOR)},hasRadioAtIndex:function(d){var f=a.listElements[d];return!!f.querySelector(g.RADIO_SELECTOR)},isCheckboxCheckedAtIndex:function(d){var f=a.listElements[d],h=f.querySelector(g.CHECKBOX_SELECTOR);return h.checked},isFocusInsideList:function(){return a.root_.contains(document.activeElement)},isRootFocused:function(){return document.activeElement===a.root_},listItemAtIndexHasClass:function(d,f){return a.listElements[d].classList.contains(f)},notifyAction:function(d){a.emit(g.ACTION_EVENT,{index:d},!0)},removeClassForElementIndex:function(d,f){var h=a.listElements[d];h&&h.classList.remove(f)},setAttributeForElementIndex:function(d,f,h){var j=a.listElements[d];j&&j.setAttribute(f,h)},setCheckedCheckboxOrRadioAtIndex:function(d,f){var h=a.listElements[d],j=h.querySelector(g.CHECKBOX_RADIO_SELECTOR);j.checked=f;var m=document.createEvent("Event");m.initEvent("change",!0,!0),j.dispatchEvent(m)},setTabIndexForListItemChildren:function(d,f){var h=a.listElements[d],j=[].slice.call(h.querySelectorAll(g.CHILD_ELEMENTS_TO_TOGGLE_TABINDEX));j.forEach(function(m){return m.setAttribute("tabindex",f)})}};return new t(b)},c.prototype.getListItemIndex_=function(a){var b=a.target,d=B(b,"."+i.LIST_ITEM_CLASS+", ."+i.ROOT);return d&&q(d,"."+i.LIST_ITEM_CLASS)?this.listElements.indexOf(d):-1},c.prototype.handleFocusInEvent_=function(a){var b=this.getListItemIndex_(a);this.foundation_.handleFocusIn(a,b)},c.prototype.handleFocusOutEvent_=function(a){var b=this.getListItemIndex_(a);this.foundation_.handleFocusOut(a,b)},c.prototype.handleKeydownEvent_=function(a){var b=this.getListItemIndex_(a),d=a.target;this.foundation_.handleKeydown(a,d.classList.contains(i.LIST_ITEM_CLASS),b)},c.prototype.handleClickEvent_=function(a){var b=this.getListItemIndex_(a),d=a.target,f=!q(d,g.CHECKBOX_RADIO_SELECTOR);this.foundation_.handleClick(b,f)},c}(A);export{E as MDCList,t as MDCListFoundation,i as cssClasses,k as numbers,g as strings};
