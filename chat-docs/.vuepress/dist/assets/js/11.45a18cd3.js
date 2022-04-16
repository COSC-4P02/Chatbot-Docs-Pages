(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{405:function(t,a,e){"use strict";e.r(a);var s=e(56),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"hook-server"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hook-server"}},[t._v("#")]),t._v(" Hook Server")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("do_action: pre-embedded hook, each time the [same parameter] is given to the callback function of the hook\ndo_action(hook name, callback parameters)")])]),t._v(" "),e("li",[e("p",[t._v("apply_filters: Pre-embedded filters: each time the callback function of the hook takes [the result of the last filter as a parameter]\nfilter result = apply_filters(hook name, callback parameter to filter)")])]),t._v(" "),e("li",[e("p",[t._v("add_action: add a hook action, and link the operation at the pre-embedded hook\nadd_action(hook name, callback function, priority)")])]),t._v(" "),e("li",[e("p",[t._v("add_filter: add a hook filter, process parameters at the embedded filter, and return data\nadd_filter(hook name, callback function, priority)")])]),t._v(" "),e("li",[e("p",[t._v("Priority: The default is 10, and multiple actions or filters with the same hook name can be added. The higher priority is executed first, and the same priority is executed according to the order of addition.")])])]),t._v(" "),e("p",[t._v("Notice:")]),t._v(" "),e("ol",[e("li",[t._v("Action names of Action and Filter [do not repeat]")]),t._v(" "),e("li",[t._v("The difference from WP is that there is only one callback parameter. So when add is not needed, the priority is followed by the number of arguments. If multiple parameters are required, please use Object to implement, such as:")])]),t._v(" "),e("p",[t._v("Pre-buried:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" arg1 "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'xxx'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" arg2 "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'xxx'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("do_action")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'action_name'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("arg1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("arg2"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("Use hooks:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("add_action")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'action_name'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("arg1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("arg2"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tconsole"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" arg1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" arg2 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);