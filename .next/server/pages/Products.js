"use strict";
(() => {
var exports = {};
exports.id = 15;
exports.ids = [15];
exports.modules = {

/***/ 4252:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Products),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./components/ArticleImage.tsx


function ArticleImage({ image  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "rounded-lg overflow-hidden bg-gray-200 aspect-w-1 aspect-h-1 group-hover:opacity-75",
        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
            src: image,
            alt: "Product image",
            className: "w-64 h-64 object-center object-cover",
            layout: "fill"
        })
    });
};

;// CONCATENATED MODULE: external "@heroicons/react/solid"
const solid_namespaceObject = require("@heroicons/react/solid");
;// CONCATENATED MODULE: external "classnames"
const external_classnames_namespaceObject = require("classnames");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_namespaceObject);
;// CONCATENATED MODULE: ./components/Review.tsx



function Review({ rate , count  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "mt-3 flex flex-col items-center",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                className: "sr-only",
                children: [
                    rate,
                    " out of 5 stars"
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex items-center",
                children: [
                    0,
                    1,
                    2,
                    3,
                    4
                ].map((rating)=>/*#__PURE__*/ jsx_runtime_.jsx(solid_namespaceObject.StarIcon, {
                        className: external_classnames_default()(rate > rating ? "text-yellow-400" : "text-gray-200", "flex-shrink-0 h-5 w-5"),
                        "aria-hidden": "true"
                    }, rating)
                )
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                className: "mt-1 text-sm text-gray-500",
                children: [
                    count,
                    " reviews"
                ]
            })
        ]
    });
};

;// CONCATENATED MODULE: ./components/Product.tsx




function Product({ product  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "group relative p-4 border-r border-b border-gray-200 sm:p-6",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(ArticleImage, {
                image: product.image
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "pt-10 pb-4 text-center",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        className: "text-sm font-medium text-gray-900",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: `/Products/${product.id}`,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        "aria-hidden": "true",
                                        className: "absolute inset-0"
                                    }),
                                    product.title
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Review, {
                        rate: product.rating.rate,
                        count: product.rating.count
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "mt-4 text-base font-medium text-gray-900",
                        children: product.price
                    })
                ]
            })
        ]
    }, product.id);
};

;// CONCATENATED MODULE: ./pages/Products/index.tsx


function Products({ products  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "bg-white",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "max-w-7xl mx-auto overflow-hidden sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                    className: "sr-only",
                    children: "Products"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "-mx-px border-l border-gray-200 grid grid-cols-2 sm:mx-0 md:grid-cols-3 lg:grid-cols-4",
                    children: products.map((product)=>/*#__PURE__*/ jsx_runtime_.jsx(Product, {
                            product: product
                        })
                    )
                })
            ]
        })
    });
};
async function getStaticProps() {
    const req = await fetch("https://fakestoreapi.com/products");
    const data = await req.json();
    return {
        props: {
            products: data
        }
    };
}


/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [505,61], () => (__webpack_exec__(4252)));
module.exports = __webpack_exports__;

})();