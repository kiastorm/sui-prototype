(window.webpackJsonp = window.webpackJsonp || []).push([
  [3],
  {
    "./.storybook/preview.js-generated-config-entry.js": function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      var preview_namespaceObject = {};
      __webpack_require__.r(preview_namespaceObject),
        __webpack_require__.d(
          preview_namespaceObject,
          "parameters",
          function () {
            return parameters;
          }
        );
      __webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),
        __webpack_require__("./node_modules/core-js/modules/es.symbol.js"),
        __webpack_require__(
          "./node_modules/core-js/modules/es.array.filter.js"
        ),
        __webpack_require__(
          "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"
        ),
        __webpack_require__(
          "./node_modules/core-js/modules/es.array.for-each.js"
        ),
        __webpack_require__(
          "./node_modules/core-js/modules/web.dom-collections.for-each.js"
        ),
        __webpack_require__(
          "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"
        ),
        __webpack_require__(
          "./node_modules/core-js/modules/es.object.define-properties.js"
        ),
        __webpack_require__(
          "./node_modules/core-js/modules/es.object.define-property.js"
        );
      var ClientApi = __webpack_require__(
          "./node_modules/@storybook/client-api/dist/esm/ClientApi.js"
        ),
        esm = __webpack_require__(
          "./node_modules/@storybook/client-logger/dist/esm/index.js"
        ),
        stitches_config = __webpack_require__(
          "./packages/react/react-stitches/src/stitches.config.tsx"
        ),
        Container = Object(stitches_config.d)("div", {
          boxSizing: "border-box",
          flexShrink: 0,
          ml: "auto",
          mr: "auto",
          px: "$5",
          variants: {
            size: {
              1: { maxWidth: "430px" },
              2: { maxWidth: "715px" },
              3: { maxWidth: "1145px" },
              4: { maxWidth: "none" },
            },
          },
          defaultVariants: { size: "4" },
        });
      try {
        (Container.displayName = "Container"),
          (Container.__docgenInfo = {
            description: "",
            displayName: "Container",
            props: {
              ref: {
                defaultValue: null,
                description: "",
                name: "ref",
                required: !1,
                type: {
                  name: "((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null | undefined",
                },
              },
              size: {
                defaultValue: null,
                description: "",
                name: "size",
                required: !1,
                type: {
                  name: 'number | "1" | "2" | "3" | "4" | ({ "@bp1"?: number | "1" | "2" | "3" | "4" | undefined; "@bp2"?: number | "1" | "2" | "3" | "4" | undefined; "@bp3"?: number | "1" | "2" | "3" | "4" | undefined; ... 5 more ...; "@initial"?: number | ... 4 more ... | undefined; } & { ...; }) | undefined',
                },
              },
              as: {
                defaultValue: null,
                description: "",
                name: "as",
                required: !1,
                type: { name: "undefined" },
              },
              css: {
                defaultValue: null,
                description: "",
                name: "css",
                required: !1,
                type: {
                  name: 'CSS<{ readonly bp1: "(min-width: 520px)"; readonly bp2: "(min-width: 900px)"; readonly bp3: "(min-width: 1200px)"; readonly bp4: "(min-width: 1800px)"; readonly motion: "(prefers-reduced-motion)"; readonly hover: "(any-hover: hover)"; readonly dark: "(prefers-color-scheme: dark)"; readonly light: "(prefers-color-sch...',
                },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "packages/react/layout/src/container.tsx#Container"
            ] = {
              docgenInfo: Container.__docgenInfo,
              name: "Container",
              path: "packages/react/layout/src/container.tsx#Container",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var jsx_runtime = __webpack_require__(
          "./node_modules/react/jsx-runtime.js"
        ),
        parameters = {
          chromatic: { disable: !0 },
          decorator: [
            function (Story) {
              return Object(jsx_runtime.jsx)(Container, {
                size: "3",
                children: Object(jsx_runtime.jsx)(Story, {}),
              });
            },
          ],
          argTypes: {
            as: { control: "text", description: "What element to render as" },
            ref: { table: { disable: !0 } },
            css: { control: "object", description: "CSS properties" },
          },
          docs: { source: { state: "open" } },
          options: {
            storySort: {
              order: [
                "Getting Started",
                [
                  "Introduction",
                  "Installing the UI Kit",
                  "Using the UI Kit",
                  "Recommended libraries",
                  "Design resources",
                  "Browser support",
                  "Accessibility standards",
                  "General guidelines",
                  "Contribution, support and feedback",
                ],
                "Documentation",
                "Templates",
                "Components",
              ],
            },
          },
        };
      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          enumerableOnly &&
            (symbols = symbols.filter(function (sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            })),
            keys.push.apply(keys, symbols);
        }
        return keys;
      }
      function _defineProperty(obj, key, value) {
        return (
          key in obj
            ? Object.defineProperty(obj, key, {
                value: value,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (obj[key] = value),
          obj
        );
      }
      Object.keys(preview_namespaceObject).forEach(function (key) {
        var value = preview_namespaceObject[key];
        switch (key) {
          case "args":
          case "argTypes":
            return esm.a.warn(
              "Invalid args/argTypes in config, ignoring.",
              JSON.stringify(value)
            );
          case "decorators":
            return value.forEach(function (decorator) {
              return Object(ClientApi.d)(decorator, !1);
            });
          case "loaders":
            return value.forEach(function (loader) {
              return Object(ClientApi.e)(loader, !1);
            });
          case "parameters":
            return Object(ClientApi.f)(
              (function _objectSpread(target) {
                for (var i = 1; i < arguments.length; i++) {
                  var source = null != arguments[i] ? arguments[i] : {};
                  i % 2
                    ? ownKeys(Object(source), !0).forEach(function (key) {
                        _defineProperty(target, key, source[key]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        target,
                        Object.getOwnPropertyDescriptors(source)
                      )
                    : ownKeys(Object(source)).forEach(function (key) {
                        Object.defineProperty(
                          target,
                          key,
                          Object.getOwnPropertyDescriptor(source, key)
                        );
                      });
                }
                return target;
              })({}, value),
              !1
            );
          case "argTypesEnhancers":
            return value.forEach(function (enhancer) {
              return Object(ClientApi.b)(enhancer);
            });
          case "argsEnhancers":
            return value.forEach(function (enhancer) {
              return Object(ClientApi.c)(enhancer);
            });
          case "render":
            return Object(ClientApi.g)(value);
          case "globals":
          case "globalTypes":
            var v = {};
            return (v[key] = value), Object(ClientApi.f)(v, !1);
          case "__namedExportsOrder":
          case "decorateStory":
          case "renderToDOM":
            return null;
          default:
            return console.log(key + " was not supported :( !");
        }
      });
    },
    "./docs sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$":
      function (module, exports, __webpack_require__) {
        var map = {
          "./accessibility-standards.stories.mdx":
            "./docs/accessibility-standards.stories.mdx",
          "./browser-support.stories.mdx": "./docs/browser-support.stories.mdx",
          "./contribution-support-feedback.stories.mdx":
            "./docs/contribution-support-feedback.stories.mdx",
          "./design-resources.stories.mdx":
            "./docs/design-resources.stories.mdx",
          "./general-guidelines.stories.mdx":
            "./docs/general-guidelines.stories.mdx",
          "./installing-the-kit.stories.mdx":
            "./docs/installing-the-kit.stories.mdx",
          "./introduction.stories.mdx": "./docs/introduction.stories.mdx",
          "./recommended-libraries.stories.mdx":
            "./docs/recommended-libraries.stories.mdx",
          "./using-the-kit.stories.mdx": "./docs/using-the-kit.stories.mdx",
        };
        function webpackContext(req) {
          var id = webpackContextResolve(req);
          return __webpack_require__(id);
        }
        function webpackContextResolve(req) {
          if (!__webpack_require__.o(map, req)) {
            var e = new Error("Cannot find module '" + req + "'");
            throw ((e.code = "MODULE_NOT_FOUND"), e);
          }
          return map[req];
        }
        (webpackContext.keys = function webpackContextKeys() {
          return Object.keys(map);
        }),
          (webpackContext.resolve = webpackContextResolve),
          (module.exports = webpackContext),
          (webpackContext.id =
            "./docs sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$");
      },
    "./docs/accessibility-standards.stories.mdx": function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, "__page", function () {
          return __page;
        });
      __webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),
        __webpack_require__(
          "./node_modules/core-js/modules/es.array.index-of.js"
        ),
        __webpack_require__("./node_modules/core-js/modules/es.symbol.js"),
        __webpack_require__(
          "./node_modules/core-js/modules/es.object.assign.js"
        ),
        __webpack_require__("./node_modules/react/index.js");
      var _mdx_js_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          "./node_modules/@mdx-js/react/dist/esm.js"
        ),
        _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            "./node_modules/@storybook/addon-docs/dist/esm/index.js"
          ),
        _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__("./node_modules/@storybook/addon-docs/blocks.js"),
        _excluded = ["components"];
      function _extends() {
        return (
          (_extends =
            Object.assign ||
            function (target) {
              for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source)
                  Object.prototype.hasOwnProperty.call(source, key) &&
                    (target[key] = source[key]);
              }
              return target;
            }),
          _extends.apply(this, arguments)
        );
      }
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      var layoutProps = {};
      function MDXContent(_ref) {
        var components = _ref.components,
          props = _objectWithoutProperties(_ref, _excluded);
        return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
          "wrapper",
          _extends({}, layoutProps, props, {
            components: components,
            mdxType: "MDXLayout",
          }),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_7__.a,
            {
              title: "Getting Started/Accessibility standards",
              subTitle: "The new Logos in various sizes",
              parameters: {
                fullPage: !0,
                previewTabs: { canvas: { hidden: !0 } },
              },
              mdxType: "Meta",
            }
          )
        );
      }
      (MDXContent.displayName = "MDXContent"), (MDXContent.isMDXComponent = !0);
      var __page = function __page() {
        throw new Error("Docs-only story");
      };
      __page.parameters = { docsOnly: !0 };
      var componentMeta = {
          title: "Getting Started/Accessibility standards",
          parameters: { fullPage: !0, previewTabs: { canvas: { hidden: !0 } } },
          includeStories: ["__page"],
        },
        mdxStoryNameToKey = {};
      (componentMeta.parameters = componentMeta.parameters || {}),
        (componentMeta.parameters.docs = Object.assign(
          {},
          componentMeta.parameters.docs || {},
          {
            page: function page() {
              return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_6__.a,
                {
                  mdxStoryNameToKey: mdxStoryNameToKey,
                  mdxComponentAnnotations: componentMeta,
                },
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  MDXContent,
                  null
                )
              );
            },
          }
        )),
        (__webpack_exports__.default = componentMeta);
    },
    "./docs/browser-support.stories.mdx": function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, "__page", function () {
          return __page;
        });
      __webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),
        __webpack_require__(
          "./node_modules/core-js/modules/es.array.index-of.js"
        ),
        __webpack_require__("./node_modules/core-js/modules/es.symbol.js"),
        __webpack_require__(
          "./node_modules/core-js/modules/es.object.assign.js"
        ),
        __webpack_require__("./node_modules/react/index.js");
      var _mdx_js_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          "./node_modules/@mdx-js/react/dist/esm.js"
        ),
        _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            "./node_modules/@storybook/addon-docs/dist/esm/index.js"
          ),
        _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__("./node_modules/@storybook/addon-docs/blocks.js"),
        _excluded = ["components"];
      function _extends() {
        return (
          (_extends =
            Object.assign ||
            function (target) {
              for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source)
                  Object.prototype.hasOwnProperty.call(source, key) &&
                    (target[key] = source[key]);
              }
              return target;
            }),
          _extends.apply(this, arguments)
        );
      }
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      var layoutProps = {};
      function MDXContent(_ref) {
        var components = _ref.components,
          props = _objectWithoutProperties(_ref, _excluded);
        return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
          "wrapper",
          _extends({}, layoutProps, props, {
            components: components,
            mdxType: "MDXLayout",
          }),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_7__.a,
            {
              title: "Getting Started/Browser support",
              subTitle: "The new Logos in various sizes",
              parameters: {
                fullPage: !0,
                previewTabs: { canvas: { hidden: !0 } },
              },
              mdxType: "Meta",
            }
          )
        );
      }
      (MDXContent.displayName = "MDXContent"), (MDXContent.isMDXComponent = !0);
      var __page = function __page() {
        throw new Error("Docs-only story");
      };
      __page.parameters = { docsOnly: !0 };
      var componentMeta = {
          title: "Getting Started/Browser support",
          parameters: { fullPage: !0, previewTabs: { canvas: { hidden: !0 } } },
          includeStories: ["__page"],
        },
        mdxStoryNameToKey = {};
      (componentMeta.parameters = componentMeta.parameters || {}),
        (componentMeta.parameters.docs = Object.assign(
          {},
          componentMeta.parameters.docs || {},
          {
            page: function page() {
              return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_6__.a,
                {
                  mdxStoryNameToKey: mdxStoryNameToKey,
                  mdxComponentAnnotations: componentMeta,
                },
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  MDXContent,
                  null
                )
              );
            },
          }
        )),
        (__webpack_exports__.default = componentMeta);
    },
    "./docs/contribution-support-feedback.stories.mdx": function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, "__page", function () {
          return __page;
        });
      __webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),
        __webpack_require__(
          "./node_modules/core-js/modules/es.array.index-of.js"
        ),
        __webpack_require__("./node_modules/core-js/modules/es.symbol.js"),
        __webpack_require__(
          "./node_modules/core-js/modules/es.object.assign.js"
        ),
        __webpack_require__("./node_modules/react/index.js");
      var _mdx_js_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          "./node_modules/@mdx-js/react/dist/esm.js"
        ),
        _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            "./node_modules/@storybook/addon-docs/dist/esm/index.js"
          ),
        _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__("./node_modules/@storybook/addon-docs/blocks.js"),
        _excluded = ["components"];
      function _extends() {
        return (
          (_extends =
            Object.assign ||
            function (target) {
              for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source)
                  Object.prototype.hasOwnProperty.call(source, key) &&
                    (target[key] = source[key]);
              }
              return target;
            }),
          _extends.apply(this, arguments)
        );
      }
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      var layoutProps = {};
      function MDXContent(_ref) {
        var components = _ref.components,
          props = _objectWithoutProperties(_ref, _excluded);
        return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
          "wrapper",
          _extends({}, layoutProps, props, {
            components: components,
            mdxType: "MDXLayout",
          }),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_7__.a,
            {
              title: "Getting Started/Contribution, support and feedback",
              subTitle: "The new Logos in various sizes",
              parameters: {
                fullPage: !0,
                previewTabs: { canvas: { hidden: !0 } },
              },
              mdxType: "Meta",
            }
          )
        );
      }
      (MDXContent.displayName = "MDXContent"), (MDXContent.isMDXComponent = !0);
      var __page = function __page() {
        throw new Error("Docs-only story");
      };
      __page.parameters = { docsOnly: !0 };
      var componentMeta = {
          title: "Getting Started/Contribution, support and feedback",
          parameters: { fullPage: !0, previewTabs: { canvas: { hidden: !0 } } },
          includeStories: ["__page"],
        },
        mdxStoryNameToKey = {};
      (componentMeta.parameters = componentMeta.parameters || {}),
        (componentMeta.parameters.docs = Object.assign(
          {},
          componentMeta.parameters.docs || {},
          {
            page: function page() {
              return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_6__.a,
                {
                  mdxStoryNameToKey: mdxStoryNameToKey,
                  mdxComponentAnnotations: componentMeta,
                },
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  MDXContent,
                  null
                )
              );
            },
          }
        )),
        (__webpack_exports__.default = componentMeta);
    },
    "./docs/design-resources.stories.mdx": function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, "__page", function () {
          return __page;
        });
      __webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),
        __webpack_require__(
          "./node_modules/core-js/modules/es.array.index-of.js"
        ),
        __webpack_require__("./node_modules/core-js/modules/es.symbol.js"),
        __webpack_require__(
          "./node_modules/core-js/modules/es.object.assign.js"
        ),
        __webpack_require__("./node_modules/react/index.js");
      var _mdx_js_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          "./node_modules/@mdx-js/react/dist/esm.js"
        ),
        _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            "./node_modules/@storybook/addon-docs/dist/esm/index.js"
          ),
        _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__("./node_modules/@storybook/addon-docs/blocks.js"),
        _excluded = ["components"];
      function _extends() {
        return (
          (_extends =
            Object.assign ||
            function (target) {
              for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source)
                  Object.prototype.hasOwnProperty.call(source, key) &&
                    (target[key] = source[key]);
              }
              return target;
            }),
          _extends.apply(this, arguments)
        );
      }
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      var layoutProps = {};
      function MDXContent(_ref) {
        var components = _ref.components,
          props = _objectWithoutProperties(_ref, _excluded);
        return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
          "wrapper",
          _extends({}, layoutProps, props, {
            components: components,
            mdxType: "MDXLayout",
          }),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_7__.a,
            {
              title: "Getting Started/Design resources",
              subTitle: "The new Logos in various sizes",
              parameters: {
                fullPage: !0,
                previewTabs: { canvas: { hidden: !0 } },
              },
              mdxType: "Meta",
            }
          )
        );
      }
      (MDXContent.displayName = "MDXContent"), (MDXContent.isMDXComponent = !0);
      var __page = function __page() {
        throw new Error("Docs-only story");
      };
      __page.parameters = { docsOnly: !0 };
      var componentMeta = {
          title: "Getting Started/Design resources",
          parameters: { fullPage: !0, previewTabs: { canvas: { hidden: !0 } } },
          includeStories: ["__page"],
        },
        mdxStoryNameToKey = {};
      (componentMeta.parameters = componentMeta.parameters || {}),
        (componentMeta.parameters.docs = Object.assign(
          {},
          componentMeta.parameters.docs || {},
          {
            page: function page() {
              return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_6__.a,
                {
                  mdxStoryNameToKey: mdxStoryNameToKey,
                  mdxComponentAnnotations: componentMeta,
                },
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  MDXContent,
                  null
                )
              );
            },
          }
        )),
        (__webpack_exports__.default = componentMeta);
    },
    "./docs/general-guidelines.stories.mdx": function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, "__page", function () {
          return __page;
        });
      __webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),
        __webpack_require__(
          "./node_modules/core-js/modules/es.array.index-of.js"
        ),
        __webpack_require__("./node_modules/core-js/modules/es.symbol.js"),
        __webpack_require__(
          "./node_modules/core-js/modules/es.object.assign.js"
        ),
        __webpack_require__("./node_modules/react/index.js");
      var _mdx_js_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          "./node_modules/@mdx-js/react/dist/esm.js"
        ),
        _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            "./node_modules/@storybook/addon-docs/dist/esm/index.js"
          ),
        _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__("./node_modules/@storybook/addon-docs/blocks.js"),
        _excluded = ["components"];
      function _extends() {
        return (
          (_extends =
            Object.assign ||
            function (target) {
              for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source)
                  Object.prototype.hasOwnProperty.call(source, key) &&
                    (target[key] = source[key]);
              }
              return target;
            }),
          _extends.apply(this, arguments)
        );
      }
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      var layoutProps = {};
      function MDXContent(_ref) {
        var components = _ref.components,
          props = _objectWithoutProperties(_ref, _excluded);
        return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
          "wrapper",
          _extends({}, layoutProps, props, {
            components: components,
            mdxType: "MDXLayout",
          }),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_7__.a,
            {
              title: "Getting Started/General guidelines",
              subTitle: "The new Logos in various sizes",
              parameters: {
                fullPage: !0,
                previewTabs: { canvas: { hidden: !0 } },
              },
              mdxType: "Meta",
            }
          )
        );
      }
      (MDXContent.displayName = "MDXContent"), (MDXContent.isMDXComponent = !0);
      var __page = function __page() {
        throw new Error("Docs-only story");
      };
      __page.parameters = { docsOnly: !0 };
      var componentMeta = {
          title: "Getting Started/General guidelines",
          parameters: { fullPage: !0, previewTabs: { canvas: { hidden: !0 } } },
          includeStories: ["__page"],
        },
        mdxStoryNameToKey = {};
      (componentMeta.parameters = componentMeta.parameters || {}),
        (componentMeta.parameters.docs = Object.assign(
          {},
          componentMeta.parameters.docs || {},
          {
            page: function page() {
              return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_6__.a,
                {
                  mdxStoryNameToKey: mdxStoryNameToKey,
                  mdxComponentAnnotations: componentMeta,
                },
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  MDXContent,
                  null
                )
              );
            },
          }
        )),
        (__webpack_exports__.default = componentMeta);
    },
    "./docs/installing-the-kit.stories.mdx": function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, "__page", function () {
          return __page;
        });
      __webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),
        __webpack_require__(
          "./node_modules/core-js/modules/es.array.index-of.js"
        ),
        __webpack_require__("./node_modules/core-js/modules/es.symbol.js"),
        __webpack_require__(
          "./node_modules/core-js/modules/es.object.assign.js"
        ),
        __webpack_require__("./node_modules/react/index.js");
      var _mdx_js_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          "./node_modules/@mdx-js/react/dist/esm.js"
        ),
        _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            "./node_modules/@storybook/addon-docs/dist/esm/index.js"
          ),
        _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__("./node_modules/@storybook/addon-docs/blocks.js"),
        _excluded = ["components"];
      function _extends() {
        return (
          (_extends =
            Object.assign ||
            function (target) {
              for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source)
                  Object.prototype.hasOwnProperty.call(source, key) &&
                    (target[key] = source[key]);
              }
              return target;
            }),
          _extends.apply(this, arguments)
        );
      }
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      var layoutProps = {};
      function MDXContent(_ref) {
        var components = _ref.components,
          props = _objectWithoutProperties(_ref, _excluded);
        return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
          "wrapper",
          _extends({}, layoutProps, props, {
            components: components,
            mdxType: "MDXLayout",
          }),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_7__.a,
            {
              title: "Getting Started/Installing the UI Kit",
              subTitle: "The new Logos in various sizes",
              parameters: {
                fullPage: !0,
                previewTabs: { canvas: { hidden: !0 } },
              },
              mdxType: "Meta",
            }
          )
        );
      }
      (MDXContent.displayName = "MDXContent"), (MDXContent.isMDXComponent = !0);
      var __page = function __page() {
        throw new Error("Docs-only story");
      };
      __page.parameters = { docsOnly: !0 };
      var componentMeta = {
          title: "Getting Started/Installing the UI Kit",
          parameters: { fullPage: !0, previewTabs: { canvas: { hidden: !0 } } },
          includeStories: ["__page"],
        },
        mdxStoryNameToKey = {};
      (componentMeta.parameters = componentMeta.parameters || {}),
        (componentMeta.parameters.docs = Object.assign(
          {},
          componentMeta.parameters.docs || {},
          {
            page: function page() {
              return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_6__.a,
                {
                  mdxStoryNameToKey: mdxStoryNameToKey,
                  mdxComponentAnnotations: componentMeta,
                },
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  MDXContent,
                  null
                )
              );
            },
          }
        )),
        (__webpack_exports__.default = componentMeta);
    },
    "./docs/introduction.stories.mdx": function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, "__page", function () {
          return __page;
        });
      __webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),
        __webpack_require__(
          "./node_modules/core-js/modules/es.array.index-of.js"
        ),
        __webpack_require__("./node_modules/core-js/modules/es.symbol.js"),
        __webpack_require__(
          "./node_modules/core-js/modules/es.object.assign.js"
        ),
        __webpack_require__("./node_modules/react/index.js");
      var _mdx_js_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          "./node_modules/@mdx-js/react/dist/esm.js"
        ),
        _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            "./node_modules/@storybook/addon-docs/dist/esm/index.js"
          ),
        _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__("./node_modules/@storybook/addon-docs/blocks.js"),
        _excluded = ["components"];
      function _extends() {
        return (
          (_extends =
            Object.assign ||
            function (target) {
              for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source)
                  Object.prototype.hasOwnProperty.call(source, key) &&
                    (target[key] = source[key]);
              }
              return target;
            }),
          _extends.apply(this, arguments)
        );
      }
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      var layoutProps = {};
      function MDXContent(_ref) {
        var components = _ref.components,
          props = _objectWithoutProperties(_ref, _excluded);
        return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
          "wrapper",
          _extends({}, layoutProps, props, {
            components: components,
            mdxType: "MDXLayout",
          }),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_7__.a,
            {
              title: "Getting Started/Introduction",
              subTitle: "The new Logos in various sizes",
              parameters: {
                fullPage: !0,
                previewTabs: { canvas: { hidden: !0 } },
              },
              mdxType: "Meta",
            }
          )
        );
      }
      (MDXContent.displayName = "MDXContent"), (MDXContent.isMDXComponent = !0);
      var __page = function __page() {
        throw new Error("Docs-only story");
      };
      __page.parameters = { docsOnly: !0 };
      var componentMeta = {
          title: "Getting Started/Introduction",
          parameters: { fullPage: !0, previewTabs: { canvas: { hidden: !0 } } },
          includeStories: ["__page"],
        },
        mdxStoryNameToKey = {};
      (componentMeta.parameters = componentMeta.parameters || {}),
        (componentMeta.parameters.docs = Object.assign(
          {},
          componentMeta.parameters.docs || {},
          {
            page: function page() {
              return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_6__.a,
                {
                  mdxStoryNameToKey: mdxStoryNameToKey,
                  mdxComponentAnnotations: componentMeta,
                },
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  MDXContent,
                  null
                )
              );
            },
          }
        )),
        (__webpack_exports__.default = componentMeta);
    },
    "./docs/recommended-libraries.stories.mdx": function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, "__page", function () {
          return __page;
        });
      __webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),
        __webpack_require__(
          "./node_modules/core-js/modules/es.array.index-of.js"
        ),
        __webpack_require__("./node_modules/core-js/modules/es.symbol.js"),
        __webpack_require__(
          "./node_modules/core-js/modules/es.object.assign.js"
        ),
        __webpack_require__("./node_modules/react/index.js");
      var _mdx_js_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          "./node_modules/@mdx-js/react/dist/esm.js"
        ),
        _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            "./node_modules/@storybook/addon-docs/dist/esm/index.js"
          ),
        _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__("./node_modules/@storybook/addon-docs/blocks.js"),
        _excluded = ["components"];
      function _extends() {
        return (
          (_extends =
            Object.assign ||
            function (target) {
              for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source)
                  Object.prototype.hasOwnProperty.call(source, key) &&
                    (target[key] = source[key]);
              }
              return target;
            }),
          _extends.apply(this, arguments)
        );
      }
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      var layoutProps = {};
      function MDXContent(_ref) {
        var components = _ref.components,
          props = _objectWithoutProperties(_ref, _excluded);
        return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
          "wrapper",
          _extends({}, layoutProps, props, {
            components: components,
            mdxType: "MDXLayout",
          }),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_7__.a,
            {
              title: "Getting Started/Recommended libraries",
              subTitle: "The new Logos in various sizes",
              parameters: {
                fullPage: !0,
                previewTabs: { canvas: { hidden: !0 } },
              },
              mdxType: "Meta",
            }
          )
        );
      }
      (MDXContent.displayName = "MDXContent"), (MDXContent.isMDXComponent = !0);
      var __page = function __page() {
        throw new Error("Docs-only story");
      };
      __page.parameters = { docsOnly: !0 };
      var componentMeta = {
          title: "Getting Started/Recommended libraries",
          parameters: { fullPage: !0, previewTabs: { canvas: { hidden: !0 } } },
          includeStories: ["__page"],
        },
        mdxStoryNameToKey = {};
      (componentMeta.parameters = componentMeta.parameters || {}),
        (componentMeta.parameters.docs = Object.assign(
          {},
          componentMeta.parameters.docs || {},
          {
            page: function page() {
              return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_6__.a,
                {
                  mdxStoryNameToKey: mdxStoryNameToKey,
                  mdxComponentAnnotations: componentMeta,
                },
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  MDXContent,
                  null
                )
              );
            },
          }
        )),
        (__webpack_exports__.default = componentMeta);
    },
    "./docs/using-the-kit.stories.mdx": function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, "__page", function () {
          return __page;
        });
      __webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),
        __webpack_require__(
          "./node_modules/core-js/modules/es.array.index-of.js"
        ),
        __webpack_require__("./node_modules/core-js/modules/es.symbol.js"),
        __webpack_require__(
          "./node_modules/core-js/modules/es.object.assign.js"
        ),
        __webpack_require__("./node_modules/react/index.js");
      var _mdx_js_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          "./node_modules/@mdx-js/react/dist/esm.js"
        ),
        _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            "./node_modules/@storybook/addon-docs/dist/esm/index.js"
          ),
        _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__("./node_modules/@storybook/addon-docs/blocks.js"),
        _excluded = ["components"];
      function _extends() {
        return (
          (_extends =
            Object.assign ||
            function (target) {
              for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source)
                  Object.prototype.hasOwnProperty.call(source, key) &&
                    (target[key] = source[key]);
              }
              return target;
            }),
          _extends.apply(this, arguments)
        );
      }
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      var layoutProps = {};
      function MDXContent(_ref) {
        var components = _ref.components,
          props = _objectWithoutProperties(_ref, _excluded);
        return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
          "wrapper",
          _extends({}, layoutProps, props, {
            components: components,
            mdxType: "MDXLayout",
          }),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_7__.a,
            {
              title: "Getting Started/Using the UI Kit",
              subTitle: "The new Logos in various sizes",
              parameters: {
                fullPage: !0,
                previewTabs: { canvas: { hidden: !0 } },
              },
              mdxType: "Meta",
            }
          )
        );
      }
      (MDXContent.displayName = "MDXContent"), (MDXContent.isMDXComponent = !0);
      var __page = function __page() {
        throw new Error("Docs-only story");
      };
      __page.parameters = { docsOnly: !0 };
      var componentMeta = {
          title: "Getting Started/Using the UI Kit",
          parameters: { fullPage: !0, previewTabs: { canvas: { hidden: !0 } } },
          includeStories: ["__page"],
        },
        mdxStoryNameToKey = {};
      (componentMeta.parameters = componentMeta.parameters || {}),
        (componentMeta.parameters.docs = Object.assign(
          {},
          componentMeta.parameters.docs || {},
          {
            page: function page() {
              return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_6__.a,
                {
                  mdxStoryNameToKey: mdxStoryNameToKey,
                  mdxComponentAnnotations: componentMeta,
                },
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  MDXContent,
                  null
                )
              );
            },
          }
        )),
        (__webpack_exports__.default = componentMeta);
    },
    "./generated-stories-entry.js": function (
      module,
      exports,
      __webpack_require__
    ) {
      "use strict";
      (function (module) {
        (0,
        __webpack_require__(
          "./node_modules/@storybook/react/dist/esm/client/index.js"
        ).configure)(
          [
            __webpack_require__(
              "./packages sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.tsx)$"
            ),
            __webpack_require__(
              "./docs sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$"
            ),
          ],
          module,
          !1
        );
      }.call(
        this,
        __webpack_require__("./node_modules/webpack/buildin/module.js")(module)
      ));
    },
    "./packages sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.tsx)$":
      function (module, exports, __webpack_require__) {
        var map = {
          "./react/button/stories/button.stories.tsx":
            "./packages/react/button/stories/button.stories.tsx",
          "./react/layout/stories/box.stories.tsx":
            "./packages/react/layout/stories/box.stories.tsx",
          "./react/layout/stories/circle.stories.tsx":
            "./packages/react/layout/stories/circle.stories.tsx",
          "./react/layout/stories/flex.stories.tsx":
            "./packages/react/layout/stories/flex.stories.tsx",
          "./react/layout/stories/layout.stories.tsx":
            "./packages/react/layout/stories/layout.stories.tsx",
          "./react/layout/stories/square.stories.tsx":
            "./packages/react/layout/stories/square.stories.tsx",
          "./react/react-stitches/stories/theme.stories.tsx":
            "./packages/react/react-stitches/stories/theme.stories.tsx",
          "./react/spinner/stories/spinner.stories.tsx":
            "./packages/react/spinner/stories/spinner.stories.tsx",
          "./react/text-field/stories/text-field.stories.tsx":
            "./packages/react/text-field/stories/text-field.stories.tsx",
        };
        function webpackContext(req) {
          var id = webpackContextResolve(req);
          return __webpack_require__(id);
        }
        function webpackContextResolve(req) {
          if (!__webpack_require__.o(map, req)) {
            var e = new Error("Cannot find module '" + req + "'");
            throw ((e.code = "MODULE_NOT_FOUND"), e);
          }
          return map[req];
        }
        (webpackContext.keys = function webpackContextKeys() {
          return Object.keys(map);
        }),
          (webpackContext.resolve = webpackContextResolve),
          (module.exports = webpackContext),
          (webpackContext.id =
            "./packages sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.tsx)$");
      },
    "./packages/core/utils/src/assertion.js": function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__.d(__webpack_exports__, "b", function () {
        return isFunction;
      }),
        __webpack_require__.d(__webpack_exports__, "a", function () {
          return __DEV__;
        });
      __webpack_require__("./node_modules/core-js/modules/es.number.is-nan.js"),
        __webpack_require__(
          "./node_modules/core-js/modules/es.number.constructor.js"
        ),
        __webpack_require__(
          "./node_modules/core-js/modules/es.number.is-finite.js"
        ),
        __webpack_require__("./node_modules/core-js/modules/es.parse-float.js"),
        __webpack_require__(
          "./node_modules/core-js/modules/es.array.is-array.js"
        ),
        __webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),
        __webpack_require__(
          "./node_modules/core-js/modules/es.object.to-string.js"
        );
      function isFunction(value) {
        return "function" == typeof value;
      }
      var __DEV__ = !1;
    },
    "./packages/core/utils/src/dom.js": function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__.d(__webpack_exports__, "c", function () {
        return dataAttr;
      }),
        __webpack_require__.d(__webpack_exports__, "a", function () {
          return ariaAttr;
        }),
        __webpack_require__.d(__webpack_exports__, "b", function () {
          return cx;
        });
      __webpack_require__("./node_modules/core-js/modules/es.array.join.js"),
        __webpack_require__(
          "./node_modules/core-js/modules/es.array.filter.js"
        );
      (function canUseDOM() {
        return !(
          "undefined" == typeof window ||
          !window.document ||
          !window.document.createElement
        );
      })();
      var dataAttr = function dataAttr(condition) {
          return condition ? "" : void 0;
        },
        ariaAttr = function ariaAttr(condition) {
          return !!condition || void 0;
        },
        cx = function cx() {
          for (
            var _len = arguments.length, classNames = new Array(_len), _key = 0;
            _key < _len;
            _key++
          )
            classNames[_key] = arguments[_key];
          return classNames.filter(Boolean).join(" ");
        };
    },
    "./packages/core/utils/src/function.js": function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__.d(__webpack_exports__, "a", function () {
        return callAllHandlers;
      });
      __webpack_require__("./node_modules/core-js/modules/es.array.some.js");
      function callAllHandlers() {
        for (
          var _len = arguments.length, fns = new Array(_len), _key = 0;
          _key < _len;
          _key++
        )
          fns[_key] = arguments[_key];
        return function func(event) {
          fns.some(function (fn) {
            return (
              null == fn || fn(event),
              null == event ? void 0 : event.defaultPrevented
            );
          });
        };
      }
    },
    "./packages/core/utils/src/index.js": function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {},
    "./packages/core/utils/src/object.js": function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__.d(__webpack_exports__, "a", function () {
        return omit;
      });
      __webpack_require__(
        "./node_modules/core-js/modules/es.array.for-each.js"
      ),
        __webpack_require__(
          "./node_modules/core-js/modules/web.dom-collections.for-each.js"
        ),
        __webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),
        __webpack_require__(
          "./node_modules/core-js/modules/es.array.includes.js"
        ),
        __webpack_require__(
          "./node_modules/core-js/modules/es.string.includes.js"
        );
      function omit(object, keys) {
        var result = {};
        return (
          Object.keys(object).forEach(function (key) {
            keys.includes(key) || (result[key] = object[key]);
          }),
          result
        );
      }
    },
    "./packages/react/button/stories/button.stories.tsx": function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, "basic", function () {
          return button_stories_basic;
        }),
        __webpack_require__.d(__webpack_exports__, "WithIcon", function () {
          return button_stories_WithIcon;
        }),
        __webpack_require__.d(
          __webpack_exports__,
          "withReactIcons",
          function () {
            return button_stories_withReactIcons;
          }
        ),
        __webpack_require__.d(__webpack_exports__, "WithLoading", function () {
          return button_stories_WithLoading;
        }),
        __webpack_require__.d(
          __webpack_exports__,
          "WithLoadingSpinnerPlacement",
          function () {
            return button_stories_WithLoadingSpinnerPlacement;
          }
        ),
        __webpack_require__.d(__webpack_exports__, "withDisabled", function () {
          return button_stories_withDisabled;
        }),
        __webpack_require__.d(
          __webpack_exports__,
          "customComposition",
          function () {
            return button_stories_customComposition;
          }
        );
      __webpack_require__("./node_modules/core-js/modules/es.array.map.js"),
        __webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),
        __webpack_require__(
          "./node_modules/core-js/modules/es.object.assign.js"
        );
      var flex = __webpack_require__("./packages/react/layout/src/flex.tsx"),
        stitches_config = __webpack_require__(
          "./packages/react/react-stitches/src/stitches.config.tsx"
        ),
        buttonVariants = {
          size: {
            1: {
              borderRadius: "$1",
              height: "$8",
              px: "$5",
              fontSize: "$1",
              lineHeight: "$sizes$5",
            },
            2: {
              borderRadius: "$1",
              height: "$9",
              px: "$6",
              fontSize: "$2",
              lineHeight: "$sizes$6",
            },
            3: {
              borderRadius: "$2",
              height: "$10",
              px: "$7",
              fontSize: "$3",
              lineHeight: "$sizes$7",
            },
          },
          variant: {
            "brand-primary": {
              background:
                "linear-gradient(93.88deg, #FF00FF -44.2%, #311B92 157.32%)",
              color: "white",
              "@hover": {
                "&:hover": {
                  background:
                    "linear-gradient(0deg, $colors$whiteA2, $colors$whiteA2), linear-gradient(93.88deg, #FF00FF -44.2%, #311B92 157.32%)",
                  boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.25)",
                },
              },
              "&:focus": {
                background:
                  "linear-gradient(0deg, $colors$whiteA2, $colors$whiteA2), linear-gradient(93.88deg, #FF00FF -44.2%, #311B92 157.32%)",
                boxShadow: "0px 0px 0px 3px $colors$purple400",
              },
              "&:active": {
                background:
                  "linear-gradient(0deg, $colors$whiteA1, $colors$whiteA1), linear-gradient(93.88deg, #FF00FF -44.2%, #311B92 157.32%)",
                boxShadow: "0px 0px 0px 3px $colors$purple400",
              },
              "&:disabled": { background: "$colors$purple400" },
            },
            "brand-secondary": {
              boxShadow: "inset 0 0 0 2px $colors$purple900",
              color: "$purple900",
              "@hover": {
                "&:hover": {
                  background: "$purple200",
                  boxShadow: "inset 0 0 0 2px $colors$purple900",
                },
              },
              "&:focus": {
                background: "$purple200",
                boxShadow:
                  "inset 0 0 0 2px $colors$purple900, 0px 0px 0px 3px $colors$purple400",
              },
              "&:active": {
                background: "$colors$purple400",
                boxShadow:
                  "inset 0 0 0 2px $colors$purple900, 0px 0px 0px 3px $colors$purple400",
              },
              "&:disabled": {
                color: "$purple400",
                boxShadow: "0px 0px 0px 3px $colors$purple400",
              },
            },
            "alt-primary": {
              background:
                "linear-gradient(276.11deg, $colors$cyan800 10.24%, #00E0F7 130.22%)",
              color: "white",
              "@hover": {
                "&:hover": {
                  background:
                    "linear-gradient(0deg, $whiteA1, $whiteA1), linear-gradient(276.11deg, $colors$cyan800 10.24%, #00E0F7 130.22%)",
                  boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.25)",
                },
              },
              "&:focus": {
                background:
                  "linear-gradient(276.11deg, $colors$cyan800 10.24%, #00E0F7 130.22%)",
                boxShadow: "0px 0px 0px 3px $colors$cyan800",
              },
              "&:active": {
                background:
                  "linear-gradient(0deg, $colors$whiteA1, $colors$whiteA1), linear-gradient(276.11deg, $colors$cyan800 10.24%, #00E0F7 130.22%)",
                boxShadow: "0px  0px 0px 3px $colors$cyan800",
              },
              "&:disabled": {
                background:
                  "linear-gradient(276.11deg, $colors$cyan800 10.24%, #00E0F7 130.22%)",
                opacity: 0.4,
              },
            },
            "alt-secondary": {
              background: "white",
              color: "$neutral800",
              boxShadow: "0px 0px 0px 1px $colors$neutral500",
              "&:focus": {
                boxShadow:
                  "0px 0px 0px 1px $colors$neutral500, 0px 0px 0px 3px #E6E5EA",
              },
              "&:disabled": { opacity: "0.4", boxShadow: "none" },
            },
          },
        },
        StyledButton = Object(stitches_config.d)("button", {
          all: "unset",
          alignItems: "center",
          boxSizing: "border-box",
          userSelect: "none",
          "&::before": { boxSizing: "border-box" },
          "&::after": { boxSizing: "border-box" },
          display: "inline-flex",
          flexShrink: 0,
          justifyContent: "center",
          lineHeight: "1",
          height: "$5",
          px: "$2",
          fontSize: "$2",
          fontWeight: 700,
          cursor: "pointer",
          "&:disabled": { pointerEvents: "none" },
          variants: buttonVariants,
          defaultVariants: { variant: "brand-primary", size: "1" },
        }),
        index_module =
          (__webpack_require__(
            "./node_modules/core-js/modules/es.array.index-of.js"
          ),
          __webpack_require__("./node_modules/core-js/modules/es.symbol.js"),
          __webpack_require__(
            "./node_modules/@radix-ui/react-icon/dist/index.module.js"
          )),
        react = __webpack_require__("./node_modules/react/index.js"),
        dom = __webpack_require__("./packages/core/utils/src/dom.js"),
        box = __webpack_require__("./packages/react/layout/src/box.tsx"),
        src_spinner = __webpack_require__(
          "./packages/react/spinner/src/spinner.js"
        ),
        assertion = __webpack_require__(
          "./packages/core/utils/src/assertion.js"
        ),
        jsx_runtime = __webpack_require__(
          "./node_modules/react/jsx-runtime.js"
        ),
        _excluded = ["label", "placement", "children", "className", "css"];
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      var button_spinner_ButtonSpinner = function ButtonSpinner(props) {
        var label = props.label,
          placement = props.placement,
          _props$children = props.children,
          children =
            void 0 === _props$children
              ? Object(jsx_runtime.jsx)(src_spinner.a, {
                  color: "currentColor",
                })
              : _props$children,
          className = props.className,
          css = props.css,
          rest = _objectWithoutProperties(props, _excluded),
          _className = Object(dom.b)("button__spinner", className),
          marginProp = "start" === placement ? "marginEnd" : "marginStart",
          spinnerStyles = react.useMemo(
            function () {
              var _Object$assign;
              return Object.assign(
                (((_Object$assign = {
                  display: "flex",
                  alignItems: "center",
                  position: label ? "relative" : "absolute",
                })[marginProp] = label ? "0.5rem" : 0),
                (_Object$assign.fontSize = "1em"),
                (_Object$assign.lineHeight = "normal"),
                _Object$assign),
                css
              );
            },
            [css, label, marginProp]
          );
        return Object(jsx_runtime.jsx)(
          box.a,
          Object.assign({ className: _className }, rest, {
            css: spinnerStyles,
            children: children,
          })
        );
      };
      (button_spinner_ButtonSpinner.displayName = "ButtonSpinner"),
        assertion.a &&
          (button_spinner_ButtonSpinner.displayName = "ButtonSpinner");
      try {
        (button_spinner_ButtonSpinner.displayName = "ButtonSpinner"),
          (button_spinner_ButtonSpinner.__docgenInfo = {
            description: "",
            displayName: "ButtonSpinner",
            props: {
              label: {
                defaultValue: null,
                description: "",
                name: "label",
                required: !1,
                type: { name: "string | undefined" },
              },
              placement: {
                defaultValue: null,
                description: "",
                name: "placement",
                required: !0,
                type: {
                  name: "enum",
                  value: [{ value: '"end"' }, { value: '"start"' }],
                },
              },
              ref: {
                defaultValue: null,
                description: "",
                name: "ref",
                required: !1,
                type: {
                  name: "((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null | undefined",
                },
              },
              css: {
                defaultValue: null,
                description: "",
                name: "css",
                required: !1,
                type: {
                  name: 'CSS<{ readonly bp1: "(min-width: 520px)"; readonly bp2: "(min-width: 900px)"; readonly bp3: "(min-width: 1200px)"; readonly bp4: "(min-width: 1800px)"; readonly motion: "(prefers-reduced-motion)"; readonly hover: "(any-hover: hover)"; readonly dark: "(prefers-color-scheme: dark)"; readonly light: "(prefers-color-sch...',
                },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "packages/react/button/src/button-spinner.tsx#ButtonSpinner"
            ] = {
              docgenInfo: button_spinner_ButtonSpinner.__docgenInfo,
              name: "ButtonSpinner",
              path: "packages/react/button/src/button-spinner.tsx#ButtonSpinner",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var button_excluded = [
        "isLoading",
        "isActive",
        "isDisabled",
        "className",
        "loadingText",
        "leftIcon",
        "rightIcon",
        "spinner",
        "spinnerPlacement",
        "children",
        "type",
      ];
      function button_objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function button_objectWithoutPropertiesLoose(
            source,
            excluded
          ) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      function ButtonContent(props) {
        var leftIcon = props.leftIcon,
          rightIcon = props.rightIcon,
          children = props.children;
        return Object(jsx_runtime.jsxs)(jsx_runtime.Fragment, {
          children: [
            leftIcon &&
              Object(jsx_runtime.jsx)(index_module.a, {
                label: "",
                children: leftIcon,
              }),
            children,
            rightIcon &&
              Object(jsx_runtime.jsx)(index_module.a, {
                label: "",
                children: rightIcon,
              }),
          ],
        });
      }
      var Button = react.forwardRef(function (props, ref) {
        var isLoading = props.isLoading,
          isActive = props.isActive,
          isDisabled = props.isDisabled,
          className = props.className,
          loadingText = props.loadingText,
          leftIcon = props.leftIcon,
          rightIcon = props.rightIcon,
          spinner = props.spinner,
          _props$spinnerPlaceme = props.spinnerPlacement,
          spinnerPlacement =
            void 0 === _props$spinnerPlaceme ? "start" : _props$spinnerPlaceme,
          children = props.children,
          type = props.type,
          rest = button_objectWithoutProperties(props, button_excluded),
          contentProps = {
            rightIcon: rightIcon,
            leftIcon: leftIcon,
            children: children,
          };
        return Object(jsx_runtime.jsxs)(
          StyledButton,
          Object.assign(
            {
              ref: ref,
              className: Object(dom.b)("button", className),
              disabled: isDisabled || isLoading,
              type: null != type ? type : "button",
              "data-active": Object(dom.c)(isActive),
              "data-loading": Object(dom.c)(isLoading),
            },
            rest,
            {
              children: [
                isLoading &&
                  "start" === spinnerPlacement &&
                  Object(jsx_runtime.jsx)(button_spinner_ButtonSpinner, {
                    className: "button__spinner--start",
                    label: loadingText,
                    placement: "start",
                    children: spinner,
                  }),
                isLoading
                  ? loadingText ||
                    Object(jsx_runtime.jsx)("span", {
                      style: { opacity: 0 },
                      children: Object(jsx_runtime.jsx)(
                        ButtonContent,
                        Object.assign({}, contentProps)
                      ),
                    })
                  : Object(jsx_runtime.jsx)(
                      ButtonContent,
                      Object.assign({}, contentProps)
                    ),
                isLoading &&
                  "end" === spinnerPlacement &&
                  Object(jsx_runtime.jsx)(button_spinner_ButtonSpinner, {
                    className: "button__spinner--end",
                    label: loadingText,
                    placement: "end",
                    children: spinner,
                  }),
              ],
            }
          )
        );
      });
      Button.displayName = "Button";
      try {
        (Button.displayName = "Button"),
          (Button.__docgenInfo = {
            description: "",
            displayName: "Button",
            props: {
              isLoading: {
                defaultValue: null,
                description: "If `true`, the button will show a spinner.",
                name: "isLoading",
                required: !1,
                type: { name: "boolean | undefined" },
              },
              isActive: {
                defaultValue: null,
                description:
                  "If `true`, the button will be styled in its active state.",
                name: "isActive",
                required: !1,
                type: { name: "boolean | undefined" },
              },
              isDisabled: {
                defaultValue: null,
                description: "If `true`, the button will be disabled.",
                name: "isDisabled",
                required: !1,
                type: { name: "boolean | undefined" },
              },
              loadingText: {
                defaultValue: null,
                description:
                  "The label to show in the button when `isLoading` is true\nIf no text is passed, it only shows the spinner",
                name: "loadingText",
                required: !1,
                type: { name: "string | undefined" },
              },
              type: {
                defaultValue: null,
                description: "The html button type to use.",
                name: "type",
                required: !1,
                type: {
                  name: "enum",
                  value: [
                    { value: "undefined" },
                    { value: '"button"' },
                    { value: '"reset"' },
                    { value: '"submit"' },
                  ],
                },
              },
              leftIcon: {
                defaultValue: null,
                description:
                  "If added, the button will show an icon before the button's label.",
                name: "leftIcon",
                required: !1,
                type: {
                  name: "ReactElement<any, string | JSXElementConstructor<any>> | undefined",
                },
              },
              rightIcon: {
                defaultValue: null,
                description:
                  "If added, the button will show an icon after the button's label.",
                name: "rightIcon",
                required: !1,
                type: {
                  name: "ReactElement<any, string | JSXElementConstructor<any>> | undefined",
                },
              },
              spinner: {
                defaultValue: null,
                description:
                  "Replace the spinner component when `state === 'loading'`.",
                name: "spinner",
                required: !1,
                type: {
                  name: "ReactElement<any, string | JSXElementConstructor<any>> | undefined",
                },
              },
              spinnerPlacement: {
                defaultValue: { value: '"start"' },
                description:
                  "Determines the placement of the spinner when isLoading is true",
                name: "spinnerPlacement",
                required: !1,
                type: {
                  name: "enum",
                  value: [
                    { value: "undefined" },
                    { value: '"end"' },
                    { value: '"start"' },
                  ],
                },
              },
              size: {
                defaultValue: null,
                description: "",
                name: "size",
                required: !1,
                type: {
                  name: 'number | "1" | "2" | "3" | ({ "@bp1"?: number | "1" | "2" | "3" | undefined; "@bp2"?: number | "1" | "2" | "3" | undefined; "@bp3"?: number | "1" | "2" | "3" | undefined; "@bp4"?: number | "1" | "2" | "3" | undefined; ... 4 more ...; "@initial"?: number | ... 3 more ... | undefined; } & { ...; }) | undefined',
                },
              },
              css: {
                defaultValue: null,
                description: "",
                name: "css",
                required: !1,
                type: {
                  name: 'CSS<{ readonly bp1: "(min-width: 520px)"; readonly bp2: "(min-width: 900px)"; readonly bp3: "(min-width: 1200px)"; readonly bp4: "(min-width: 1800px)"; readonly motion: "(prefers-reduced-motion)"; readonly hover: "(any-hover: hover)"; readonly dark: "(prefers-color-scheme: dark)"; readonly light: "(prefers-color-sch...',
                },
              },
              variant: {
                defaultValue: null,
                description: "",
                name: "variant",
                required: !1,
                type: {
                  name: '"brand-primary" | "brand-secondary" | "alt-primary" | "alt-secondary" | ({ "@bp1"?: "brand-primary" | "brand-secondary" | "alt-primary" | "alt-secondary" | undefined; "@bp2"?: "brand-primary" | ... 3 more ... | undefined; ... 6 more ...; "@initial"?: "brand-primary" | ... 3 more ... | undefined; } & { ...; }) | unde...',
                },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "packages/react/button/src/button.tsx#Button"
            ] = {
              docgenInfo: Button.__docgenInfo,
              name: "Button",
              path: "packages/react/button/src/button.tsx#Button",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var button_stories_basic = function basic() {
          return Object(jsx_runtime.jsx)(jsx_runtime.Fragment, {
            children: Object.keys(buttonVariants.variant).map(function (
              variant
            ) {
              return Object(jsx_runtime.jsxs)(flex.a, {
                gap: "3",
                children: [
                  Object(jsx_runtime.jsxs)(flex.a, {
                    gap: "6",
                    css: { flexDirection: "column", p: "$6" },
                    children: [
                      Object(jsx_runtime.jsxs)(flex.a, {
                        gap: "3",
                        children: [
                          Object(jsx_runtime.jsx)(Button, {
                            variant: variant,
                            children: "Button",
                          }),
                          Object(jsx_runtime.jsx)(Button, {
                            variant: variant,
                            size: "2",
                            children: "Button",
                          }),
                          Object(jsx_runtime.jsx)(Button, {
                            variant: variant,
                            size: "3",
                            children: "Button",
                          }),
                        ],
                      }),
                      Object(jsx_runtime.jsxs)(flex.a, {
                        gap: "3",
                        children: [
                          Object(jsx_runtime.jsx)(Button, {
                            variant: variant,
                            disabled: !0,
                            children: "Button",
                          }),
                          Object(jsx_runtime.jsx)(Button, {
                            variant: variant,
                            disabled: !0,
                            size: "2",
                            children: "Button",
                          }),
                          Object(jsx_runtime.jsx)(Button, {
                            variant: variant,
                            disabled: !0,
                            size: "3",
                            children: "Button",
                          }),
                        ],
                      }),
                    ],
                  }),
                  Object(jsx_runtime.jsxs)(flex.a, {
                    gap: "6",
                    css: {
                      flexDirection: "column",
                      p: "$6",
                      backgroundColor: "black",
                    },
                    children: [
                      Object(jsx_runtime.jsxs)(flex.a, {
                        gap: "3",
                        children: [
                          Object(jsx_runtime.jsx)(Button, {
                            variant: variant,
                            children: "Button",
                          }),
                          Object(jsx_runtime.jsx)(Button, {
                            variant: variant,
                            size: "2",
                            children: "Button",
                          }),
                          Object(jsx_runtime.jsx)(Button, {
                            variant: variant,
                            size: "3",
                            children: "Button",
                          }),
                        ],
                      }),
                      Object(jsx_runtime.jsxs)(flex.a, {
                        gap: "3",
                        children: [
                          Object(jsx_runtime.jsx)(Button, {
                            variant: variant,
                            disabled: !0,
                            children: "Button",
                          }),
                          Object(jsx_runtime.jsx)(Button, {
                            variant: variant,
                            disabled: !0,
                            size: "2",
                            children: "Button",
                          }),
                          Object(jsx_runtime.jsx)(Button, {
                            variant: variant,
                            disabled: !0,
                            size: "3",
                            children: "Button",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              });
            }),
          });
        },
        button_stories_WithIcon = function WithIcon() {
          return Object(jsx_runtime.jsxs)(flex.a, {
            gap: 4,
            children: [
              Object(jsx_runtime.jsx)(Button, {
                leftIcon: Object(jsx_runtime.jsx)("div", { children: "icon" }),
                children: "Email",
              }),
              Object(jsx_runtime.jsx)(Button, {
                rightIcon: Object(jsx_runtime.jsx)("div", { children: "icon" }),
                children: "Call us",
              }),
            ],
          });
        };
      button_stories_WithIcon.displayName = "WithIcon";
      var button_stories_withReactIcons = function withReactIcons() {
        return Object(jsx_runtime.jsxs)(flex.a, {
          direction: "row",
          gap: 4,
          align: "center",
          children: [
            Object(jsx_runtime.jsx)(Button, {
              leftIcon: Object(jsx_runtime.jsx)("div", { children: "icon" }),
              children: "Settings",
            }),
            Object(jsx_runtime.jsx)(Button, {
              rightIcon: Object(jsx_runtime.jsx)("div", { children: "icon" }),
              children: "Call us",
            }),
          ],
        });
      };
      button_stories_withReactIcons.displayName = "withReactIcons";
      var button_stories_WithLoading = function WithLoading() {
        return Object(jsx_runtime.jsxs)(flex.a, {
          gap: 4,
          align: "center",
          children: [
            Object(jsx_runtime.jsx)(Button, {
              size: "lg",
              isLoading: !0,
              children: "Email",
            }),
            Object(jsx_runtime.jsx)(Button, {
              isLoading: !0,
              spinner: Object(jsx_runtime.jsx)("div", { children: "icon" }),
              children: "Click me",
            }),
            Object(jsx_runtime.jsx)(Button, {
              isLoading: !0,
              loadingText: "Submitting...",
              children: "Submit",
            }),
          ],
        });
      };
      button_stories_WithLoading.displayName = "WithLoading";
      var button_stories_WithLoadingSpinnerPlacement =
        function WithLoadingSpinnerPlacement() {
          return Object(jsx_runtime.jsxs)(flex.a, {
            direction: "row",
            gap: 4,
            align: "center",
            children: [
              Object(jsx_runtime.jsx)(Button, {
                isLoading: !0,
                loadingText: "Loading",
                spinnerPosition: "start",
                children: "Submit",
              }),
              Object(jsx_runtime.jsx)(Button, {
                isLoading: !0,
                loadingText: "Loading",
                spinnerPlacement: "end",
                children: "Continue",
              }),
            ],
          });
        };
      button_stories_WithLoadingSpinnerPlacement.displayName =
        "WithLoadingSpinnerPlacement";
      var button_stories_withDisabled = function withDisabled() {
        return Object(jsx_runtime.jsxs)(flex.a, {
          gap: 4,
          children: [
            Object(jsx_runtime.jsx)(Button, {
              isDisabled: !0,
              children: "Button",
            }),
            Object(jsx_runtime.jsx)(Button, {
              isDisabled: !0,
              children: "Button",
            }),
            Object(jsx_runtime.jsx)(Button, {
              isDisabled: !0,
              children: "Button",
            }),
            Object(jsx_runtime.jsx)(Button, {
              isDisabled: !0,
              children: "Button",
            }),
          ],
        });
      };
      button_stories_withDisabled.displayName = "withDisabled";
      var button_stories_customComposition = function customComposition() {
        return Object(jsx_runtime.jsx)(Button, {
          css: {
            size: "md",
            height: "48px",
            width: "200px",
            border: "5px solid",
            borderColor: "yellow",
          },
          children: "Button",
        });
      };
      (button_stories_customComposition.displayName = "customComposition"),
        (button_stories_basic.parameters = Object.assign(
          {
            storySource: {
              source:
                '() => (\n  <>\n    {Object.keys(buttonVariants.variant).map(\n      (variant: keyof typeof buttonVariants["variant"]) => {\n        return (\n          <Flex gap="3">\n            <Flex\n              gap="6"\n              css={{\n                flexDirection: "column",\n                p: "$6",\n              }}\n            >\n              <Flex gap="3">\n                <Button variant={variant}>Button</Button>\n                <Button variant={variant} size="2">\n                  Button\n                </Button>\n                <Button variant={variant} size="3">\n                  Button\n                </Button>\n              </Flex>\n              <Flex gap="3">\n                <Button variant={variant} disabled>\n                  Button\n                </Button>\n                <Button variant={variant} disabled size="2">\n                  Button\n                </Button>\n                <Button variant={variant} disabled size="3">\n                  Button\n                </Button>\n              </Flex>\n            </Flex>\n            <Flex\n              gap="6"\n              css={{\n                flexDirection: "column",\n                p: "$6",\n                backgroundColor: "black",\n              }}\n            >\n              <Flex gap="3">\n                <Button variant={variant}>Button</Button>\n                <Button variant={variant} size="2">\n                  Button\n                </Button>\n                <Button variant={variant} size="3">\n                  Button\n                </Button>\n              </Flex>\n              <Flex gap="3">\n                <Button variant={variant} disabled>\n                  Button\n                </Button>\n                <Button variant={variant} disabled size="2">\n                  Button\n                </Button>\n                <Button variant={variant} disabled size="3">\n                  Button\n                </Button>\n              </Flex>\n            </Flex>\n          </Flex>\n        );\n      }\n    )}\n  </>\n)',
            },
          },
          button_stories_basic.parameters
        )),
        (button_stories_WithIcon.parameters = Object.assign(
          {
            storySource: {
              source:
                "() => (\n  <Flex gap={4}>\n    <Button leftIcon={<div>icon</div>}>Email</Button>\n    <Button rightIcon={<div>icon</div>}>Call us</Button>\n  </Flex>\n)",
            },
          },
          button_stories_WithIcon.parameters
        )),
        (button_stories_withReactIcons.parameters = Object.assign(
          {
            storySource: {
              source:
                '() => (\n  <Flex direction="row" gap={4} align="center">\n    <Button leftIcon={<div>icon</div>}>Settings</Button>\n    <Button rightIcon={<div>icon</div>}>Call us</Button>\n  </Flex>\n)',
            },
          },
          button_stories_withReactIcons.parameters
        )),
        (button_stories_WithLoading.parameters = Object.assign(
          {
            storySource: {
              source:
                '() => (\n  <Flex gap={4} align="center">\n    <Button size="lg" isLoading>\n      Email\n    </Button>\n\n    <Button isLoading spinner={<div>icon</div>}>\n      Click me\n    </Button>\n\n    <Button isLoading loadingText="Submitting...">\n      Submit\n    </Button>\n  </Flex>\n)',
            },
          },
          button_stories_WithLoading.parameters
        )),
        (button_stories_WithLoadingSpinnerPlacement.parameters = Object.assign(
          {
            storySource: {
              source:
                '() => (\n  <Flex direction="row" gap={4} align="center">\n    <Button isLoading loadingText="Loading" spinnerPosition="start">\n      Submit\n    </Button>\n    <Button isLoading loadingText="Loading" spinnerPlacement="end">\n      Continue\n    </Button>\n  </Flex>\n)',
            },
          },
          button_stories_WithLoadingSpinnerPlacement.parameters
        )),
        (button_stories_withDisabled.parameters = Object.assign(
          {
            storySource: {
              source:
                "() => (\n  <Flex gap={4}>\n    <Button isDisabled>Button</Button>\n    <Button isDisabled>Button</Button>\n    <Button isDisabled>Button</Button>\n    <Button isDisabled>Button</Button>\n  </Flex>\n)",
            },
          },
          button_stories_withDisabled.parameters
        )),
        (button_stories_customComposition.parameters = Object.assign(
          {
            storySource: {
              source:
                '() => (\n  <Button\n    css={{\n      size: "md",\n      height: "48px",\n      width: "200px",\n      border: "5px solid",\n      borderColor: "yellow",\n    }}\n  >\n    Button\n  </Button>\n)',
            },
          },
          button_stories_customComposition.parameters
        ));
    },
    "./packages/react/layout/src/box.tsx": function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__.d(__webpack_exports__, "a", function () {
        return Box;
      });
      __webpack_require__("./node_modules/core-js/modules/es.object.assign.js");
      var _sui_react_stitches_config__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            "./packages/react/react-stitches/src/stitches.config.tsx"
          ),
        _sui_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          "./packages/core/utils/src/dom.js"
        ),
        react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          "./node_modules/react/index.js"
        ),
        react__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_3__
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          "./node_modules/react/jsx-runtime.js"
        ),
        StyledBox = Object(
          _sui_react_stitches_config__WEBPACK_IMPORTED_MODULE_1__.d
        )("div", { boxSizing: "border-box" }),
        Box = react__WEBPACK_IMPORTED_MODULE_3___default.a.forwardRef(function (
          props,
          forwardedRef
        ) {
          return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
            StyledBox,
            Object.assign(
              {
                ref: forwardedRef,
                className: Object(_sui_utils__WEBPACK_IMPORTED_MODULE_2__.b)(
                  "sui-box",
                  props.className
                ),
              },
              props
            )
          );
        });
      try {
        (StyledBox.displayName = "StyledBox"),
          (StyledBox.__docgenInfo = {
            description: "",
            displayName: "StyledBox",
            props: {
              ref: {
                defaultValue: null,
                description: "",
                name: "ref",
                required: !1,
                type: {
                  name: "((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null | undefined",
                },
              },
              as: {
                defaultValue: null,
                description: "",
                name: "as",
                required: !1,
                type: { name: "undefined" },
              },
              css: {
                defaultValue: null,
                description: "",
                name: "css",
                required: !1,
                type: {
                  name: 'CSS<{ readonly bp1: "(min-width: 520px)"; readonly bp2: "(min-width: 900px)"; readonly bp3: "(min-width: 1200px)"; readonly bp4: "(min-width: 1800px)"; readonly motion: "(prefers-reduced-motion)"; readonly hover: "(any-hover: hover)"; readonly dark: "(prefers-color-scheme: dark)"; readonly light: "(prefers-color-sch...',
                },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "packages/react/layout/src/box.tsx#StyledBox"
            ] = {
              docgenInfo: StyledBox.__docgenInfo,
              name: "StyledBox",
              path: "packages/react/layout/src/box.tsx#StyledBox",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (Box.displayName = "Box"),
          (Box.__docgenInfo = {
            description: "",
            displayName: "Box",
            props: {
              ref: {
                defaultValue: null,
                description: "",
                name: "ref",
                required: !1,
                type: {
                  name: "((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null | undefined",
                },
              },
              as: {
                defaultValue: null,
                description: "",
                name: "as",
                required: !1,
                type: { name: "undefined" },
              },
              css: {
                defaultValue: null,
                description: "",
                name: "css",
                required: !1,
                type: {
                  name: 'CSS<{ readonly bp1: "(min-width: 520px)"; readonly bp2: "(min-width: 900px)"; readonly bp3: "(min-width: 1200px)"; readonly bp4: "(min-width: 1800px)"; readonly motion: "(prefers-reduced-motion)"; readonly hover: "(any-hover: hover)"; readonly dark: "(prefers-color-scheme: dark)"; readonly light: "(prefers-color-sch...',
                },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES["packages/react/layout/src/box.tsx#Box"] =
              {
                docgenInfo: Box.__docgenInfo,
                name: "Box",
                path: "packages/react/layout/src/box.tsx#Box",
              });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    "./packages/react/layout/src/circle.tsx": function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__.d(__webpack_exports__, "b", function () {
        return circleStyles;
      }),
        __webpack_require__.d(__webpack_exports__, "a", function () {
          return Circle;
        });
      __webpack_require__("./node_modules/core-js/modules/es.object.assign.js");
      var _sui_react_stitches_config__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            "./packages/react/react-stitches/src/stitches.config.tsx"
          ),
        _sui_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          "./packages/core/utils/src/dom.js"
        ),
        react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          "./node_modules/react/index.js"
        ),
        react__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_3__
        ),
        ___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          "./packages/react/layout/src/square.tsx"
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          "./node_modules/react/jsx-runtime.js"
        ),
        circleStyles = Object.assign({}, ___WEBPACK_IMPORTED_MODULE_4__.b, {
          borderRadius: "$round",
        }),
        StyledCircle = Object(
          _sui_react_stitches_config__WEBPACK_IMPORTED_MODULE_1__.d
        )("div", circleStyles),
        Circle = react__WEBPACK_IMPORTED_MODULE_3___default.a.forwardRef(
          function (props, forwardedRef) {
            return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(
              StyledCircle,
              Object.assign(
                {
                  ref: forwardedRef,
                  className: Object(_sui_utils__WEBPACK_IMPORTED_MODULE_2__.b)(
                    "sui-circle",
                    props.className
                  ),
                },
                props
              )
            );
          }
        );
      try {
        (StyledCircle.displayName = "StyledCircle"),
          (StyledCircle.__docgenInfo = {
            description: "`Circle` renders a circle-shaped `div` element.",
            displayName: "StyledCircle",
            props: {
              ref: {
                defaultValue: null,
                description: "",
                name: "ref",
                required: !1,
                type: {
                  name: "((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null | undefined",
                },
              },
              shouldCenterContent: {
                defaultValue: null,
                description: "",
                name: "shouldCenterContent",
                required: !1,
                type: {
                  name: 'boolean | "true" | ({ "@bp1"?: boolean | "true" | undefined; "@bp2"?: boolean | "true" | undefined; "@bp3"?: boolean | "true" | undefined; "@bp4"?: boolean | "true" | undefined; "@motion"?: boolean | ... 1 more ... | undefined; "@hover"?: boolean | ... 1 more ... | undefined; "@dark"?: boolean | ... 1 more ... | und...',
                },
              },
              size: {
                defaultValue: null,
                description: "Used to set the size of the square.",
                name: "size",
                required: !1,
                type: {
                  name: '4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "18" | "19" | "20" | ({ ...; } & { ...; }) | undefined',
                },
              },
              as: {
                defaultValue: null,
                description: "",
                name: "as",
                required: !1,
                type: { name: "undefined" },
              },
              css: {
                defaultValue: null,
                description: "",
                name: "css",
                required: !1,
                type: {
                  name: 'CSS<{ readonly bp1: "(min-width: 520px)"; readonly bp2: "(min-width: 900px)"; readonly bp3: "(min-width: 1200px)"; readonly bp4: "(min-width: 1800px)"; readonly motion: "(prefers-reduced-motion)"; readonly hover: "(any-hover: hover)"; readonly dark: "(prefers-color-scheme: dark)"; readonly light: "(prefers-color-sch...',
                },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "packages/react/layout/src/circle.tsx#StyledCircle"
            ] = {
              docgenInfo: StyledCircle.__docgenInfo,
              name: "StyledCircle",
              path: "packages/react/layout/src/circle.tsx#StyledCircle",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (Circle.displayName = "Circle"),
          (Circle.__docgenInfo = {
            description: "",
            displayName: "Circle",
            props: {
              ref: {
                defaultValue: null,
                description: "",
                name: "ref",
                required: !1,
                type: {
                  name: "((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null | undefined",
                },
              },
              shouldCenterContent: {
                defaultValue: null,
                description: "",
                name: "shouldCenterContent",
                required: !1,
                type: {
                  name: 'boolean | "true" | ({ "@bp1"?: boolean | "true" | undefined; "@bp2"?: boolean | "true" | undefined; "@bp3"?: boolean | "true" | undefined; "@bp4"?: boolean | "true" | undefined; "@motion"?: boolean | ... 1 more ... | undefined; "@hover"?: boolean | ... 1 more ... | undefined; "@dark"?: boolean | ... 1 more ... | und...',
                },
              },
              size: {
                defaultValue: null,
                description: "Used to set the size of the square.",
                name: "size",
                required: !1,
                type: {
                  name: '4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "18" | "19" | "20" | ({ ...; } & { ...; }) | undefined',
                },
              },
              as: {
                defaultValue: null,
                description: "",
                name: "as",
                required: !1,
                type: { name: "undefined" },
              },
              css: {
                defaultValue: null,
                description: "",
                name: "css",
                required: !1,
                type: {
                  name: 'CSS<{ readonly bp1: "(min-width: 520px)"; readonly bp2: "(min-width: 900px)"; readonly bp3: "(min-width: 1200px)"; readonly bp4: "(min-width: 1800px)"; readonly motion: "(prefers-reduced-motion)"; readonly hover: "(any-hover: hover)"; readonly dark: "(prefers-color-scheme: dark)"; readonly light: "(prefers-color-sch...',
                },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "packages/react/layout/src/circle.tsx#Circle"
            ] = {
              docgenInfo: Circle.__docgenInfo,
              name: "Circle",
              path: "packages/react/layout/src/circle.tsx#Circle",
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    "./packages/react/layout/src/flex.tsx": function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__.d(__webpack_exports__, "b", function () {
        return flexStyles;
      }),
        __webpack_require__.d(__webpack_exports__, "a", function () {
          return Flex;
        });
      __webpack_require__("./node_modules/core-js/modules/es.object.assign.js");
      var _sui_react_stitches_config__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            "./packages/react/react-stitches/src/stitches.config.tsx"
          ),
        _sui_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          "./packages/core/utils/src/dom.js"
        ),
        react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          "./node_modules/react/index.js"
        ),
        react__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_3__
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          "./node_modules/react/jsx-runtime.js"
        ),
        flexStyles = {
          boxSizing: "border-box",
          display: "flex",
          variants: {
            direction: {
              row: { flexDirection: "row" },
              column: { flexDirection: "column" },
              rowReverse: { flexDirection: "row-reverse" },
              columnReverse: { flexDirection: "column-reverse" },
            },
            align: {
              start: { alignItems: "flex-start" },
              center: { alignItems: "center" },
              end: { alignItems: "flex-end" },
              stretch: { alignItems: "stretch" },
              baseline: { alignItems: "baseline" },
            },
            justify: {
              start: { justifyContent: "flex-start" },
              center: { justifyContent: "center" },
              end: { justifyContent: "flex-end" },
              between: { justifyContent: "space-between" },
            },
            wrap: {
              noWrap: { flexWrap: "nowrap" },
              wrap: { flexWrap: "wrap" },
              wrapReverse: { flexWrap: "wrap-reverse" },
            },
            gap: {
              1: { gap: "$1" },
              2: { gap: "$2" },
              3: { gap: "$3" },
              4: { gap: "$4" },
              5: { gap: "$5" },
              6: { gap: "$6" },
              7: { gap: "$7" },
              8: { gap: "$8" },
              9: { gap: "$9" },
            },
          },
          defaultVariants: {
            direction: "row",
            align: "stretch",
            justify: "start",
            wrap: "noWrap",
          },
        },
        StyledFlex =
          (Object(_sui_react_stitches_config__WEBPACK_IMPORTED_MODULE_1__.a)(
            flexStyles
          ),
          Object(_sui_react_stitches_config__WEBPACK_IMPORTED_MODULE_1__.d)(
            "div",
            flexStyles
          )),
        Flex = react__WEBPACK_IMPORTED_MODULE_3___default.a.forwardRef(
          function (props, forwardedRef) {
            return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
              StyledFlex,
              Object.assign(
                {
                  ref: forwardedRef,
                  className: Object(_sui_utils__WEBPACK_IMPORTED_MODULE_2__.b)(
                    "sui-flex",
                    props.className
                  ),
                },
                props
              )
            );
          }
        );
      Flex.displayName = "Flex";
      try {
        (Flex.displayName = "Flex"),
          (Flex.__docgenInfo = {
            description:
              "`Flex` provides shorthand props for common flexbox css properties. It renders a `div` element with `display: flex` applied.\nThe `gap` prop is particularly useful for adding spacing between flex items.",
            displayName: "Flex",
            props: {},
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "packages/react/layout/src/flex.tsx#Flex"
            ] = {
              docgenInfo: Flex.__docgenInfo,
              name: "Flex",
              path: "packages/react/layout/src/flex.tsx#Flex",
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    "./packages/react/layout/src/square.tsx": function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__.d(__webpack_exports__, "b", function () {
        return squareStyles;
      }),
        __webpack_require__.d(__webpack_exports__, "a", function () {
          return Square;
        });
      __webpack_require__("./node_modules/core-js/modules/es.object.assign.js");
      var _sui_react_stitches_config__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            "./packages/react/react-stitches/src/stitches.config.tsx"
          ),
        _sui_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          "./packages/core/utils/src/dom.js"
        ),
        react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          "./node_modules/react/index.js"
        ),
        react__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_3__
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          "./node_modules/react/jsx-runtime.js"
        ),
        squareStyles = {
          boxSizing: "border-box",
          flexShrink: 0,
          flexGrow: 0,
          variants: {
            shouldCenterContent: {
              true: {
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
              },
            },
            size: {
              4: { width: "$4", height: "$4" },
              5: { width: "$5", height: "$5" },
              6: { width: "$6", height: "$6" },
              7: { width: "$7", height: "$7" },
              8: { width: "$8", height: "$8" },
              9: { width: "$9", height: "$9" },
              10: { width: "$10", height: "$10" },
              11: { width: "$11", height: "$11" },
              12: { width: "$12", height: "$12" },
              13: { width: "$13", height: "$13" },
              14: { width: "$14", height: "$14" },
              15: { width: "$15", height: "$15" },
              16: { width: "$16", height: "$16" },
              17: { width: "$17", height: "$17" },
              18: { width: "$18", height: "$18" },
              19: { width: "$19", height: "$19" },
              20: { width: "$20", height: "$20" },
            },
          },
          defaultVariants: { shouldCenterContent: !0, size: "4" },
        },
        StyledSquare = Object(
          _sui_react_stitches_config__WEBPACK_IMPORTED_MODULE_1__.d
        )("div", squareStyles),
        Square = react__WEBPACK_IMPORTED_MODULE_3___default.a.forwardRef(
          function (props, forwardedRef) {
            return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
              StyledSquare,
              Object.assign(
                {
                  ref: forwardedRef,
                  className: Object(_sui_utils__WEBPACK_IMPORTED_MODULE_2__.b)(
                    "sui-square",
                    props.className
                  ),
                },
                props
              )
            );
          }
        );
      try {
        (StyledSquare.displayName = "StyledSquare"),
          (StyledSquare.__docgenInfo = {
            description: "`Square` renders a square-shaped `div` element.",
            displayName: "StyledSquare",
            props: {
              ref: {
                defaultValue: null,
                description: "",
                name: "ref",
                required: !1,
                type: {
                  name: "((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null | undefined",
                },
              },
              shouldCenterContent: {
                defaultValue: null,
                description: "",
                name: "shouldCenterContent",
                required: !1,
                type: {
                  name: 'boolean | "true" | ({ "@bp1"?: boolean | "true" | undefined; "@bp2"?: boolean | "true" | undefined; "@bp3"?: boolean | "true" | undefined; "@bp4"?: boolean | "true" | undefined; "@motion"?: boolean | ... 1 more ... | undefined; "@hover"?: boolean | ... 1 more ... | undefined; "@dark"?: boolean | ... 1 more ... | und...',
                },
              },
              size: {
                defaultValue: null,
                description: "Used to set the size of the square.",
                name: "size",
                required: !1,
                type: {
                  name: '4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "18" | "19" | "20" | ({ ...; } & { ...; }) | undefined',
                },
              },
              as: {
                defaultValue: null,
                description: "",
                name: "as",
                required: !1,
                type: { name: "undefined" },
              },
              css: {
                defaultValue: null,
                description: "",
                name: "css",
                required: !1,
                type: {
                  name: 'CSS<{ readonly bp1: "(min-width: 520px)"; readonly bp2: "(min-width: 900px)"; readonly bp3: "(min-width: 1200px)"; readonly bp4: "(min-width: 1800px)"; readonly motion: "(prefers-reduced-motion)"; readonly hover: "(any-hover: hover)"; readonly dark: "(prefers-color-scheme: dark)"; readonly light: "(prefers-color-sch...',
                },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "packages/react/layout/src/square.tsx#StyledSquare"
            ] = {
              docgenInfo: StyledSquare.__docgenInfo,
              name: "StyledSquare",
              path: "packages/react/layout/src/square.tsx#StyledSquare",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (Square.displayName = "Square"),
          (Square.__docgenInfo = {
            description: "",
            displayName: "Square",
            props: {
              ref: {
                defaultValue: null,
                description: "",
                name: "ref",
                required: !1,
                type: {
                  name: "((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null | undefined",
                },
              },
              shouldCenterContent: {
                defaultValue: null,
                description: "",
                name: "shouldCenterContent",
                required: !1,
                type: {
                  name: 'boolean | "true" | ({ "@bp1"?: boolean | "true" | undefined; "@bp2"?: boolean | "true" | undefined; "@bp3"?: boolean | "true" | undefined; "@bp4"?: boolean | "true" | undefined; "@motion"?: boolean | ... 1 more ... | undefined; "@hover"?: boolean | ... 1 more ... | undefined; "@dark"?: boolean | ... 1 more ... | und...',
                },
              },
              size: {
                defaultValue: null,
                description: "Used to set the size of the square.",
                name: "size",
                required: !1,
                type: {
                  name: '4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "18" | "19" | "20" | ({ ...; } & { ...; }) | undefined',
                },
              },
              as: {
                defaultValue: null,
                description: "",
                name: "as",
                required: !1,
                type: { name: "undefined" },
              },
              css: {
                defaultValue: null,
                description: "",
                name: "css",
                required: !1,
                type: {
                  name: 'CSS<{ readonly bp1: "(min-width: 520px)"; readonly bp2: "(min-width: 900px)"; readonly bp3: "(min-width: 1200px)"; readonly bp4: "(min-width: 1800px)"; readonly motion: "(prefers-reduced-motion)"; readonly hover: "(any-hover: hover)"; readonly dark: "(prefers-color-scheme: dark)"; readonly light: "(prefers-color-sch...',
                },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "packages/react/layout/src/square.tsx#Square"
            ] = {
              docgenInfo: Square.__docgenInfo,
              name: "Square",
              path: "packages/react/layout/src/square.tsx#Square",
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    "./packages/react/layout/stories/box.stories.tsx": function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, "basic", function () {
          return basic;
        });
      __webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),
        __webpack_require__(
          "./node_modules/core-js/modules/es.function.bind.js"
        ),
        __webpack_require__("./node_modules/react/index.js");
      var _src__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          "./packages/react/layout/src/box.tsx"
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          "./node_modules/react/jsx-runtime.js"
        ),
        config = {
          title: "Design System/Box",
          component: _src__WEBPACK_IMPORTED_MODULE_3__.a,
          argTypes: {
            as: { control: "text", description: "What element to render as" },
            ref: { table: { disable: !0 } },
            css: {
              control: "object",
              description: "Theme-aware CSS properties",
            },
          },
        };
      __webpack_exports__.default = config;
      var Template = function Template(props) {
        return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
          _src__WEBPACK_IMPORTED_MODULE_3__.a,
          Object.assign({}, props)
        );
      };
      Template.displayName = "Template";
      var basic = Template.bind({});
      (basic.args = {
        as: "marquee",
        css: {
          bgc: "$neutral200",
          color: "$neutral800",
          px: "$2",
          py: "$4",
          "&:hover": { bgc: "$neutral800", color: "$neutral200" },
        },
        children: "I am a Box",
      }),
        (basic.parameters = Object.assign(
          { storySource: { source: "(props: any) => <Box {...props} />" } },
          basic.parameters
        ));
    },
    "./packages/react/layout/stories/circle.stories.tsx": function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, "basic", function () {
          return basic;
        });
      __webpack_require__("./node_modules/core-js/modules/es.array.map.js"),
        __webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),
        __webpack_require__(
          "./node_modules/core-js/modules/es.object.assign.js"
        );
      var _src__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          "./packages/react/layout/src/circle.tsx"
        ),
        _src__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          "./packages/react/layout/src/flex.tsx"
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ =
          (__webpack_require__("./node_modules/react/index.js"),
          __webpack_require__("./node_modules/react/jsx-runtime.js")),
        config = {
          title: "Design System/Circle",
          component: _src__WEBPACK_IMPORTED_MODULE_3__.a,
          argTypes: {
            as: { control: "text", description: "What element to render as" },
            ref: { table: { disable: !0 } },
            css: {
              control: "object",
              description: "Theme-aware CSS properties",
            },
          },
        };
      __webpack_exports__.default = config;
      var basic = function basic(args) {
        return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(
          _src__WEBPACK_IMPORTED_MODULE_4__.a,
          {
            gap: "4",
            wrap: "wrap",
            align: "center",
            css: args.css,
            children: Object.keys(
              _src__WEBPACK_IMPORTED_MODULE_3__.b.variants.size
            ).map(function (size) {
              return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(
                _src__WEBPACK_IMPORTED_MODULE_3__.a,
                { size: size, children: size },
                size
              );
            }),
          }
        );
      };
      (basic.displayName = "basic"),
        (basic.args = {
          css: {
            ".sui-circle": {
              fontWeight: "bold",
              bgc: "$yellow400",
              color: "$yellow800",
              "&:hover": { bgc: "$neutral800", color: "$neutral200" },
            },
          },
        }),
        (basic.parameters = Object.assign(
          {
            storySource: {
              source:
                '(args) => (\n  <Flex gap="4" wrap="wrap" align="center" css={args.css}>\n    {Object.keys(circleStyles.variants.size).map((size) => (\n      <Circle key={size} size={size}>\n        {size}\n      </Circle>\n    ))}\n  </Flex>\n)',
            },
          },
          basic.parameters
        ));
      try {
        (basic.displayName = "basic"),
          (basic.__docgenInfo = {
            description: "",
            displayName: "basic",
            props: {},
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "packages/react/layout/stories/circle.stories.tsx#basic"
            ] = {
              docgenInfo: basic.__docgenInfo,
              name: "basic",
              path: "packages/react/layout/stories/circle.stories.tsx#basic",
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    "./packages/react/layout/stories/flex.stories.tsx": function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, "basic", function () {
          return basic;
        });
      __webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),
        __webpack_require__(
          "./node_modules/core-js/modules/es.array.reduce.js"
        ),
        __webpack_require__("./node_modules/core-js/modules/es.object.keys.js");
      var _src__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          "./packages/react/layout/src/flex.tsx"
        ),
        _src__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          "./packages/react/layout/src/box.tsx"
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ =
          (__webpack_require__("./node_modules/react/index.js"),
          __webpack_require__("./node_modules/react/jsx-runtime.js")),
        config = {
          title: "Design System/Flex",
          component: _src__WEBPACK_IMPORTED_MODULE_3__.a,
          subcomponents: { Box: _src__WEBPACK_IMPORTED_MODULE_4__.a },
          argTypes: Object.assign(
            {
              ref: { table: { type: null, disable: !0 } },
              as: {
                control: "text",
                description: "What element to render as",
                table: { type: null, defaultValue: { summary: "div" } },
              },
              css: {
                control: "object",
                table: { type: null },
                description: "Theme-aware CSS",
              },
            },
            Object.keys(_src__WEBPACK_IMPORTED_MODULE_3__.b.variants).reduce(
              function (prev, current) {
                return (
                  (prev[current] = {
                    control: "string",
                    table: Object.assign(
                      { type: null },
                      _src__WEBPACK_IMPORTED_MODULE_3__.b.defaultVariants[
                        current
                      ]
                        ? {
                            defaultValue: {
                              summary:
                                _src__WEBPACK_IMPORTED_MODULE_3__.b
                                  .defaultVariants[current],
                            },
                          }
                        : {}
                    ),
                  }),
                  prev
                );
              },
              {}
            )
          ),
        };
      __webpack_exports__.default = config;
      var basic = function basic(args) {
        return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(
          _src__WEBPACK_IMPORTED_MODULE_3__.a,
          Object.assign({}, args, {
            children: [
              Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(
                _src__WEBPACK_IMPORTED_MODULE_4__.a,
                { children: "Flex item 1" }
              ),
              Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(
                _src__WEBPACK_IMPORTED_MODULE_4__.a,
                { children: "Flex item 2" }
              ),
              Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(
                _src__WEBPACK_IMPORTED_MODULE_4__.a,
                { children: "Flex item 3" }
              ),
            ],
          })
        );
      };
      (basic.displayName = "basic"),
        (basic.args = {
          css: {
            bgc: "$green400",
            px: "$2",
            py: "$4",
            ".sui-box": { bgc: "$yellow400" },
          },
        }),
        (basic.parameters = Object.assign(
          {
            storySource: {
              source:
                "(args) => (\n  <Flex {...args}>\n    <Box>Flex item 1</Box>\n    <Box>Flex item 2</Box>\n    <Box>Flex item 3</Box>\n  </Flex>\n)",
            },
          },
          basic.parameters
        ));
      try {
        (Meta.displayName = "Meta"),
          (Meta.__docgenInfo = {
            description: "Metadata to configure the stories for a component.",
            displayName: "Meta",
            props: {},
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "packages/react/layout/stories/flex.stories.tsx#Meta"
            ] = {
              docgenInfo: Meta.__docgenInfo,
              name: "Meta",
              path: "packages/react/layout/stories/flex.stories.tsx#Meta",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (basic.displayName = "basic"),
          (basic.__docgenInfo = {
            description: "",
            displayName: "basic",
            props: {},
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "packages/react/layout/stories/flex.stories.tsx#basic"
            ] = {
              docgenInfo: basic.__docgenInfo,
              name: "basic",
              path: "packages/react/layout/stories/flex.stories.tsx#basic",
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    "./packages/react/layout/stories/layout.stories.tsx": function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, "circle", function () {
          return layout_stories_circle;
        }),
        __webpack_require__.d(__webpack_exports__, "kbd", function () {
          return layout_stories_kbd;
        }),
        __webpack_require__.d(__webpack_exports__, "spacer", function () {
          return layout_stories_spacer;
        });
      __webpack_require__("./node_modules/core-js/modules/es.object.assign.js");
      var src_circle = __webpack_require__(
          "./packages/react/layout/src/circle.tsx"
        ),
        stitches_config = __webpack_require__(
          "./packages/react/react-stitches/src/stitches.config.tsx"
        ),
        Kbd = Object(stitches_config.d)("kbd", {
          boxSizing: "border-box",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "$loContrast",
          flexShrink: 0,
          color: "$hiContrast",
          userSelect: "none",
          cursor: "default",
          whiteSpace: "nowrap",
          boxShadow:
            "\n    inset 0 0.5px rgba(255, 255, 255, 0.1),\n    inset 0 1px 5px $colors$slate2,\n    0px 0px 0px 0.5px $colors$slate8,\n    0px 2px 1px -1px $colors$slate8,\n    0 1px $colors$slate8",
          textShadow: "0 0 1px rgba(255, 255, 255, 0.5)",
          fontFamily: "inherit",
          fontWeight: 400,
          lineHeight: "1.5",
          mx: "2px",
          variants: {
            size: {
              1: {
                borderRadius: "$1",
                px: "0.3em",
                height: "$3",
                minWidth: "1.6em",
                fontSize: "$1",
                lineHeight: "$spaces$3",
              },
              2: {
                borderRadius: "$2",
                px: "0.5em",
                height: "$5",
                minWidth: "2em",
                fontSize: "$2",
                lineHeight: "$spaces$5",
              },
            },
            width: {
              shift: { width: "4em", justifyContent: "flex-start" },
              command: { width: "3em", justifyContent: "flex-end" },
              space: { width: "8em" },
            },
          },
          compoundVariants: [
            { size: "1", width: "shift", css: { width: "3em" } },
            { size: "1", width: "command", css: { width: "2.5em" } },
            { size: "1", width: "space", css: { width: "5em" } },
          ],
          defaultVariants: { size: "2" },
        });
      try {
        (Kbd.displayName = "Kbd"),
          (Kbd.__docgenInfo = {
            description: "",
            displayName: "Kbd",
            props: {
              ref: {
                defaultValue: null,
                description: "",
                name: "ref",
                required: !1,
                type: {
                  name: "((instance: HTMLElement | null) => void) | RefObject<HTMLElement> | null | undefined",
                },
              },
              size: {
                defaultValue: null,
                description: "",
                name: "size",
                required: !1,
                type: {
                  name: 'number | "1" | "2" | ({ "@bp1"?: number | "1" | "2" | undefined; "@bp2"?: number | "1" | "2" | undefined; "@bp3"?: number | "1" | "2" | undefined; "@bp4"?: number | "1" | "2" | undefined; "@motion"?: number | ... 2 more ... | undefined; "@hover"?: number | ... 2 more ... | undefined; "@dark"?: number | ... 2 more .....',
                },
              },
              width: {
                defaultValue: null,
                description: "",
                name: "width",
                required: !1,
                type: {
                  name: '"space" | "shift" | "command" | ({ "@bp1"?: "space" | "shift" | "command" | undefined; "@bp2"?: "space" | "shift" | "command" | undefined; "@bp3"?: "space" | "shift" | "command" | undefined; ... 5 more ...; "@initial"?: "space" | ... 2 more ... | undefined; } & { ...; }) | undefined',
                },
              },
              as: {
                defaultValue: null,
                description: "",
                name: "as",
                required: !1,
                type: { name: "undefined" },
              },
              css: {
                defaultValue: null,
                description: "",
                name: "css",
                required: !1,
                type: {
                  name: 'CSS<{ readonly bp1: "(min-width: 520px)"; readonly bp2: "(min-width: 900px)"; readonly bp3: "(min-width: 1200px)"; readonly bp4: "(min-width: 1800px)"; readonly motion: "(prefers-reduced-motion)"; readonly hover: "(any-hover: hover)"; readonly dark: "(prefers-color-scheme: dark)"; readonly light: "(prefers-color-sch...',
                },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES["packages/react/layout/src/kbd.tsx#Kbd"] =
              {
                docgenInfo: Kbd.__docgenInfo,
                name: "Kbd",
                path: "packages/react/layout/src/kbd.tsx#Kbd",
              });
      } catch (__react_docgen_typescript_loader_error) {}
      var flex = __webpack_require__("./packages/react/layout/src/flex.tsx"),
        box = __webpack_require__("./packages/react/layout/src/box.tsx"),
        Spacer = Object(stitches_config.d)("div", {
          flex: 1,
          justifySelf: "stretch",
          alignSelf: "stretch",
        });
      try {
        (Spacer.displayName = "Spacer"),
          (Spacer.__docgenInfo = {
            description: "",
            displayName: "Spacer",
            props: {
              ref: {
                defaultValue: null,
                description: "",
                name: "ref",
                required: !1,
                type: {
                  name: "((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null | undefined",
                },
              },
              as: {
                defaultValue: null,
                description: "",
                name: "as",
                required: !1,
                type: { name: "undefined" },
              },
              css: {
                defaultValue: null,
                description: "",
                name: "css",
                required: !1,
                type: {
                  name: 'CSS<{ readonly bp1: "(min-width: 520px)"; readonly bp2: "(min-width: 900px)"; readonly bp3: "(min-width: 1200px)"; readonly bp4: "(min-width: 1800px)"; readonly motion: "(prefers-reduced-motion)"; readonly hover: "(any-hover: hover)"; readonly dark: "(prefers-color-scheme: dark)"; readonly light: "(prefers-color-sch...',
                },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "packages/react/layout/src/spacer.tsx#Spacer"
            ] = {
              docgenInfo: Spacer.__docgenInfo,
              name: "Spacer",
              path: "packages/react/layout/src/spacer.tsx#Spacer",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var jsx_runtime = __webpack_require__(
          "./node_modules/react/jsx-runtime.js"
        ),
        layout_stories_circle = function circle() {
          return Object(jsx_runtime.jsx)(src_circle.a, {
            size: "9",
            css: { backgroundColor: "$cyan800" },
            children: "Circle",
          });
        };
      layout_stories_circle.displayName = "circle";
      var layout_stories_kbd = function kbd() {
        return Object(jsx_runtime.jsx)(Kbd, { children: "Ctrl + L" });
      };
      layout_stories_kbd.displayName = "kbd";
      var layout_stories_spacer = function spacer() {
        return Object(jsx_runtime.jsxs)(flex.a, {
          children: [
            Object(jsx_runtime.jsx)(box.a, {
              css: { bgc: "tomato" },
              children: "Left Item",
            }),
            Object(jsx_runtime.jsx)(Spacer, {
              css: { textAlign: "center", bgc: "yellow" },
              children: "Spacer",
            }),
            Object(jsx_runtime.jsx)(box.a, {
              css: { bgc: "cyan" },
              children: "Right Item",
            }),
          ],
        });
      };
      (layout_stories_spacer.displayName = "spacer"),
        (layout_stories_circle.parameters = Object.assign(
          {
            storySource: {
              source:
                '() => (\n  <Circle size="9" css={{ backgroundColor: "$cyan800" }}>\n    Circle\n  </Circle>\n)',
            },
          },
          layout_stories_circle.parameters
        )),
        (layout_stories_kbd.parameters = Object.assign(
          { storySource: { source: "() => <Kbd>Ctrl + L</Kbd>" } },
          layout_stories_kbd.parameters
        )),
        (layout_stories_spacer.parameters = Object.assign(
          {
            storySource: {
              source:
                '() => (\n  <Flex>\n    <Box css={{ bgc: "tomato" }}>Left Item</Box>\n    <Spacer css={{ textAlign: "center", bgc: "yellow" }}>Spacer</Spacer>\n    <Box css={{ bgc: "cyan" }}>Right Item</Box>\n  </Flex>\n)',
            },
          },
          layout_stories_spacer.parameters
        ));
    },
    "./packages/react/layout/stories/square.stories.tsx": function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, "basic", function () {
          return basic;
        });
      __webpack_require__(
        "./node_modules/core-js/modules/es.array.index-of.js"
      ),
        __webpack_require__("./node_modules/core-js/modules/es.symbol.js"),
        __webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),
        __webpack_require__(
          "./node_modules/core-js/modules/es.object.assign.js"
        );
      var _src__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          "./packages/react/layout/src/square.tsx"
        ),
        _src__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          "./packages/react/layout/src/circle.tsx"
        ),
        _src__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          "./packages/react/layout/src/flex.tsx"
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ =
          (__webpack_require__("./node_modules/react/index.js"),
          __webpack_require__("./node_modules/react/jsx-runtime.js")),
        _excluded = ["css"];
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      var config = {
        title: "Design System/Square",
        component: _src__WEBPACK_IMPORTED_MODULE_4__.a,
        subcomponents: { Circle: _src__WEBPACK_IMPORTED_MODULE_5__.a },
        argTypes: {
          as: {
            control: "text",
            table: {
              defaultValue:
                !!_src__WEBPACK_IMPORTED_MODULE_4__.b.defaultVariants
                  .shouldCenterContent,
            },
            description: "What element to render as",
          },
          ref: { table: { disable: !0 } },
          css: { control: "object", description: "Theme-aware CSS properties" },
          size: {
            control: "select",
            options: Object.keys(
              _src__WEBPACK_IMPORTED_MODULE_4__.b.variants.size
            ),
            defaultValue:
              _src__WEBPACK_IMPORTED_MODULE_4__.b.defaultVariants.size,
          },
          shouldCenterContent: {
            control: "boolean",
            table: {
              defaultValue:
                !!_src__WEBPACK_IMPORTED_MODULE_4__.b.defaultVariants
                  .shouldCenterContent,
            },
          },
        },
      };
      __webpack_exports__.default = config;
      var basic = function basic(_ref) {
        var css = _ref.css,
          rest = _objectWithoutProperties(_ref, _excluded);
        return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(
          _src__WEBPACK_IMPORTED_MODULE_6__.a,
          {
            gap: "4",
            wrap: "wrap",
            align: "center",
            css: css,
            children: Object(
              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx
            )(
              _src__WEBPACK_IMPORTED_MODULE_4__.a,
              Object.assign({}, rest, { children: rest.size })
            ),
          }
        );
      };
      (basic.displayName = "basic"),
        (basic.args = {
          css: {
            ".sui-square": {
              fontWeight: "bold",
              bgc: "$purple400",
              color: "$purple800",
              "&:hover": { bgc: "$neutral800", color: "$neutral200" },
            },
          },
        }),
        (basic.parameters = Object.assign(
          {
            storySource: {
              source:
                '({ css, ...rest }) => (\n  <Flex gap="4" wrap="wrap" align="center" css={css}>\n    <Square {...rest}>{rest.size}</Square>\n  </Flex>\n)',
            },
          },
          basic.parameters
        ));
      try {
        (Meta.displayName = "Meta"),
          (Meta.__docgenInfo = {
            description: "Metadata to configure the stories for a component.",
            displayName: "Meta",
            props: {},
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "packages/react/layout/stories/square.stories.tsx#Meta"
            ] = {
              docgenInfo: Meta.__docgenInfo,
              name: "Meta",
              path: "packages/react/layout/stories/square.stories.tsx#Meta",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (basic.displayName = "basic"),
          (basic.__docgenInfo = {
            description: "",
            displayName: "basic",
            props: {
              css: {
                defaultValue: null,
                description: "",
                name: "css",
                required: !0,
                type: { name: "any" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "packages/react/layout/stories/square.stories.tsx#basic"
            ] = {
              docgenInfo: basic.__docgenInfo,
              name: "basic",
              path: "packages/react/layout/stories/square.stories.tsx#basic",
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    "./packages/react/react-stitches/src/stitches.config.tsx": function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__.d(__webpack_exports__, "c", function () {
        return omitThemingProps;
      }),
        __webpack_require__.d(__webpack_exports__, "d", function () {
          return styled;
        }),
        __webpack_require__.d(__webpack_exports__, "a", function () {
          return css;
        }),
        __webpack_require__.d(__webpack_exports__, "b", function () {
          return keyframes;
        });
      var dist = __webpack_require__(
          "./node_modules/@stitches/react/dist/index.mjs"
        ),
        core_dist =
          (__webpack_require__(
            "./node_modules/core-js/modules/es.object.assign.js"
          ),
          __webpack_require__("./node_modules/@stitches/core/dist/index.mjs")),
        stitchesConfig = {
          theme: Object.assign(
            {},
            {
              colors: {
                neutral999: "#000000",
                neutral900: "#1b1a21",
                neutral800: "#4c4a57",
                neutral700: "#777582",
                neutral500: "#c2c1c7",
                neutral300: "#e6e5ea",
                neutral200: "#f3f3f5",
                neutral100: "#fafafa",
                neutral0: "#ffffff",
                red900: "#c41337",
                red800: "#f4346f",
                red600: "#f85b8a",
                red400: "#ffc2d4",
                red200: "#ffebf2",
                yellow900: "#9e6d00",
                yellow800: "#ffb000",
                yellow600: "#ffcf64",
                yellow400: "#ffe694",
                yellow200: "#fffade",
                green900: "#00873f",
                green800: "#00ca68",
                green600: "#00e676",
                green400: "#a8ffce",
                green200: "#e6fcee",
                cyan900: "#00408f",
                cyan800: "#0081d7",
                cyan600: "#00f5fe",
                cyan400: "#a6fcff",
                cyan200: "#d9feff",
                indigo900: "#1e0a78",
                indigo800: "#311b92",
                indigo600: "#4f34c7",
                indigo400: "#c0b7eb",
                indigo200: "#e8e6f5",
                indigo100: "#f3f2fc",
                purple900: "#8800cc",
                purple800: "#aa00ff",
                purple600: "#c550ff",
                purple400: "#ecc7ff",
                purple200: "#f9edff",
                magenta900: "#b300b3",
                magenta800: "#ff00ff",
                magenta600: "#ff7bff",
                magenta400: "#ffbfff",
                magenta200: "#ffebff",
                whiteA1: "rgba(255, 255, 255, 0.1)",
                whiteA2: "rgba(255, 255, 255, 0.2)",
              },
              fonts: {
                untitled:
                  "Public Sans, Untitled Sans, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
                mono: "Söhne Mono, menlo, monospace",
              },
              space: {
                1: "5px",
                2: "10px",
                3: "15px",
                4: "20px",
                5: "25px",
                6: "30px",
                7: "35px",
                8: "40px",
                9: "45px",
                10: "50px",
                11: "55px",
                12: "60px",
                13: "65px",
                14: "70px",
                15: "75px",
                16: "80px",
                17: "85px",
                18: "90px",
                19: "95px",
                20: "100px",
              },
              sizes: {
                1: "5px",
                2: "10px",
                3: "15px",
                4: "20px",
                5: "25px",
                6: "30px",
                7: "35px",
                8: "40px",
                9: "45px",
                10: "50px",
                11: "55px",
                12: "60px",
                13: "65px",
                14: "70px",
                15: "75px",
                16: "80px",
                17: "85px",
                18: "90px",
                19: "95px",
                20: "100px",
              },
              fontSizes: { 1: "18px", 2: "16px", 3: "20px" },
              radii: {
                1: "4px",
                2: "4.45361px",
                3: "4.95px",
                round: "50%",
                pill: "9999px",
              },
              zIndices: { 1: "100", 2: "200", 3: "300", 4: "400", max: "999" },
            }
          ),
          media: Object.assign(
            {},
            {
              bp1: "(min-width: 520px)",
              bp2: "(min-width: 900px)",
              bp3: "(min-width: 1200px)",
              bp4: "(min-width: 1800px)",
              motion: "(prefers-reduced-motion)",
              hover: "(any-hover: hover)",
              dark: "(prefers-color-scheme: dark)",
              light: "(prefers-color-scheme: light)",
            }
          ),
          utils: Object.assign(
            {},
            {
              p: function p(value) {
                return { padding: value };
              },
              pt: function pt(value) {
                return { paddingTop: value };
              },
              pr: function pr(value) {
                return { paddingRight: value };
              },
              pb: function pb(value) {
                return { paddingBottom: value };
              },
              pl: function pl(value) {
                return { paddingLeft: value };
              },
              px: function px(value) {
                return { paddingLeft: value, paddingRight: value };
              },
              py: function py(value) {
                return { paddingTop: value, paddingBottom: value };
              },
              m: function m(value) {
                return { margin: value };
              },
              mt: function mt(value) {
                return { marginTop: value };
              },
              mr: function mr(value) {
                return { marginRight: value };
              },
              mb: function mb(value) {
                return { marginBottom: value };
              },
              ml: function ml(value) {
                return { marginLeft: value };
              },
              mx: function mx(value) {
                return { marginLeft: value, marginRight: value };
              },
              my: function my(value) {
                return { marginTop: value, marginBottom: value };
              },
              bgc: function bgc(value) {
                return { backgroundColor: value };
              },
            }
          ),
        },
        object =
          (Object(core_dist.a)(stitchesConfig),
          __webpack_require__("./packages/core/utils/src/object.js"));
      function omitThemingProps(props) {
        return Object(object.a)(props, ["css"]);
      }
      var _createStitches = Object(dist.a)(stitchesConfig),
        styled = _createStitches.styled,
        css = _createStitches.css,
        keyframes = (_createStitches.theme, _createStitches.keyframes),
        globalCss =
          (_createStitches.createTheme,
          _createStitches.getCssText,
          _createStitches.globalCss);
      _createStitches.config;
      try {
        (omitThemingProps.displayName = "omitThemingProps"),
          (omitThemingProps.__docgenInfo = {
            description: "",
            displayName: "omitThemingProps",
            props: {
              css: {
                defaultValue: null,
                description: "",
                name: "css",
                required: !0,
                type: { name: "CSS" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "packages/react/react-stitches/src/stitches.config.tsx#omitThemingProps"
            ] = {
              docgenInfo: omitThemingProps.__docgenInfo,
              name: "omitThemingProps",
              path: "packages/react/react-stitches/src/stitches.config.tsx#omitThemingProps",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (VariantProps.displayName = "VariantProps"),
          (VariantProps.__docgenInfo = {
            description:
              "Returns a type that suggests variants from a component as possible prop values.",
            displayName: "VariantProps",
            props: {},
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "packages/react/react-stitches/src/stitches.config.tsx#VariantProps"
            ] = {
              docgenInfo: VariantProps.__docgenInfo,
              name: "VariantProps",
              path: "packages/react/react-stitches/src/stitches.config.tsx#VariantProps",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (css.displayName = "css"),
          (css.__docgenInfo = {
            description: "",
            displayName: "css",
            props: {},
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "packages/react/react-stitches/src/stitches.config.tsx#css"
            ] = {
              docgenInfo: css.__docgenInfo,
              name: "css",
              path: "packages/react/react-stitches/src/stitches.config.tsx#css",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (keyframes.displayName = "keyframes"),
          (keyframes.__docgenInfo = {
            description: "",
            displayName: "keyframes",
            props: {},
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "packages/react/react-stitches/src/stitches.config.tsx#keyframes"
            ] = {
              docgenInfo: keyframes.__docgenInfo,
              name: "keyframes",
              path: "packages/react/react-stitches/src/stitches.config.tsx#keyframes",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (globalCss.displayName = "globalCss"),
          (globalCss.__docgenInfo = {
            description: "",
            displayName: "globalCss",
            props: {},
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "packages/react/react-stitches/src/stitches.config.tsx#globalCss"
            ] = {
              docgenInfo: globalCss.__docgenInfo,
              name: "globalCss",
              path: "packages/react/react-stitches/src/stitches.config.tsx#globalCss",
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    "./packages/react/react-stitches/stories/theme.stories.tsx": function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
    },
    "./packages/react/spinner/src/spinner.js": function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__.d(__webpack_exports__, "a", function () {
        return Spinner;
      });
      __webpack_require__(
        "./node_modules/core-js/modules/es.array.index-of.js"
      ),
        __webpack_require__("./node_modules/core-js/modules/es.symbol.js"),
        __webpack_require__(
          "./node_modules/core-js/modules/es.object.assign.js"
        );
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          "./node_modules/react/jsx-runtime.js"
        ),
        _sui_react_stitches_config__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            "./packages/react/react-stitches/src/stitches.config.tsx"
          ),
        _sui_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          "./packages/core/utils/src/dom.js"
        ),
        _sui_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          "./packages/core/utils/src/assertion.js"
        ),
        _sui_react_visually_hidden__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            "./node_modules/@radix-ui/react-visually-hidden/dist/index.module.js"
          ),
        react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          "./node_modules/react/index.js"
        ),
        _layout_src_box__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          "./packages/react/layout/src/box.tsx"
        ),
        __rest = function (s, e) {
          var t = {};
          for (var p in s)
            Object.prototype.hasOwnProperty.call(s, p) &&
              e.indexOf(p) < 0 &&
              (t[p] = s[p]);
          if (null != s && "function" == typeof Object.getOwnPropertySymbols) {
            var i = 0;
            for (p = Object.getOwnPropertySymbols(s); i < p.length; i++)
              e.indexOf(p[i]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(s, p[i]) &&
                (t[p[i]] = s[p[i]]);
          }
          return t;
        },
        spin = Object(
          _sui_react_stitches_config__WEBPACK_IMPORTED_MODULE_4__.b
        )({
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        }),
        Spinner = react__WEBPACK_IMPORTED_MODULE_8__.forwardRef(function (
          props,
          ref
        ) {
          var _props$label = props.label,
            label = void 0 === _props$label ? "Loading..." : _props$label,
            _props$thickness = props.thickness,
            thickness = void 0 === _props$thickness ? "2px" : _props$thickness,
            _props$speed = props.speed,
            speed = void 0 === _props$speed ? "0.45s" : _props$speed,
            _props$emptyColor = props.emptyColor,
            emptyColor =
              void 0 === _props$emptyColor ? "transparent" : _props$emptyColor,
            className = props.className,
            rest = __rest(props, [
              "label",
              "thickness",
              "speed",
              "emptyColor",
              "className",
            ]),
            _className = Object(_sui_utils__WEBPACK_IMPORTED_MODULE_5__.b)(
              "spinner",
              className
            ),
            spinnerStyles = {
              display: "inline-block",
              borderColor: "currentColor",
              borderStyle: "solid",
              borderRadius: "99999px",
              borderWidth: thickness,
              borderBottomColor: emptyColor,
              borderLeftColor: emptyColor,
              width: "1em",
              height: "1em",
              animation: spin + " " + speed + " linear infinite",
            };
          return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
            _layout_src_box__WEBPACK_IMPORTED_MODULE_9__.a,
            Object.assign(
              { ref: ref, css: spinnerStyles, className: _className },
              rest,
              {
                children:
                  label &&
                  Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                    _sui_react_visually_hidden__WEBPACK_IMPORTED_MODULE_7__.b,
                    { children: label },
                    void 0
                  ),
              }
            ),
            void 0
          );
        });
      _sui_utils__WEBPACK_IMPORTED_MODULE_6__.a &&
        (Spinner.displayName = "Spinner"),
        (Spinner.__docgenInfo = {
          description:
            "Spinner is used to indicate the loading state of a page or a component,\nIt renders a `div` by default.",
          methods: [],
          displayName: "Spinner",
        }),
        "undefined" != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES["packages/react/spinner/src/spinner.js"] = {
            name: "Spinner",
            docgenInfo: Spinner.__docgenInfo,
            path: "packages/react/spinner/src/spinner.js",
          });
    },
    "./packages/react/spinner/stories/spinner.stories.tsx": function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, "basic", function () {
          return basic;
        });
      __webpack_require__("./node_modules/core-js/modules/es.object.assign.js");
      var _sui_react_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          "./packages/react/layout/src/flex.tsx"
        ),
        _src__WEBPACK_IMPORTED_MODULE_3__ =
          (__webpack_require__("./node_modules/react/index.js"),
          __webpack_require__("./packages/react/spinner/src/spinner.js")),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          "./node_modules/react/jsx-runtime.js"
        );
      __webpack_exports__.default = {
        parameters: {
          storySource: {
            source:
              'import { Flex } from "@sui/react-layout";\nimport * as React from "react";\nimport { Spinner } from ".";\n\nexport default {\n  title: "Packages/spinner/Spinner",\n};\n\nexport const basic = () => (\n  <Flex gap="3">\n    <Spinner />\n  </Flex>\n);\n',
            locationsMap: {
              basic: {
                startLoc: { col: 21, line: 9 },
                endLoc: { col: 1, line: 13 },
                startBody: { col: 21, line: 9 },
                endBody: { col: 1, line: 13 },
              },
            },
          },
        },
        title: "Packages/spinner/Spinner",
      };
      var basic = function basic() {
        return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
          _sui_react_layout__WEBPACK_IMPORTED_MODULE_1__.a,
          {
            gap: "3",
            children: Object(
              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx
            )(_src__WEBPACK_IMPORTED_MODULE_3__.a, {}),
          }
        );
      };
      (basic.displayName = "basic"),
        (basic.parameters = Object.assign(
          {
            storySource: {
              source:
                '() => (\n  <Flex gap="3">\n    <Spinner />\n  </Flex>\n)',
            },
          },
          basic.parameters
        ));
    },
    "./packages/react/text-field/stories/text-field.stories.tsx": function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, "basic", function () {
          return text_field_stories_basic;
        });
      __webpack_require__("./node_modules/core-js/modules/es.object.assign.js");
      var jsx_runtime = __webpack_require__(
          "./node_modules/react/jsx-runtime.js"
        ),
        stitches_config = __webpack_require__(
          "./packages/react/react-stitches/src/stitches.config.tsx"
        ),
        src = __webpack_require__("./packages/core/utils/src/index.js"),
        dom = __webpack_require__("./packages/core/utils/src/dom.js"),
        src_function =
          (__webpack_require__(
            "./node_modules/core-js/modules/es.object.keys.js"
          ),
          __webpack_require__(
            "./node_modules/core-js/modules/es.array.index-of.js"
          ),
          __webpack_require__("./node_modules/core-js/modules/es.symbol.js"),
          __webpack_require__(
            "./node_modules/core-js/modules/es.array.join.js"
          ),
          __webpack_require__("./packages/core/utils/src/function.js")),
        index_module =
          (__webpack_require__(
            "./node_modules/core-js/modules/es.symbol.description.js"
          ),
          __webpack_require__(
            "./node_modules/core-js/modules/es.object.to-string.js"
          ),
          __webpack_require__(
            "./node_modules/core-js/modules/es.symbol.iterator.js"
          ),
          __webpack_require__(
            "./node_modules/core-js/modules/es.string.iterator.js"
          ),
          __webpack_require__(
            "./node_modules/core-js/modules/es.array.iterator.js"
          ),
          __webpack_require__(
            "./node_modules/core-js/modules/web.dom-collections.iterator.js"
          ),
          __webpack_require__(
            "./node_modules/core-js/modules/es.array.slice.js"
          ),
          __webpack_require__(
            "./node_modules/core-js/modules/es.function.name.js"
          ),
          __webpack_require__(
            "./node_modules/core-js/modules/es.array.from.js"
          ),
          __webpack_require__(
            "./node_modules/core-js/modules/es.array.is-array.js"
          ),
          __webpack_require__(
            "./node_modules/@radix-ui/react-primitive/dist/index.module.js"
          )),
        react = __webpack_require__("./node_modules/react/index.js");
      __webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),
        __webpack_require__("./node_modules/core-js/modules/es.array.map.js");
      var defaultIdContext = {
          prefix: Math.round(1e10 * Math.random()),
          current: 0,
        },
        IdContext = react.createContext(defaultIdContext);
      function useId(idProp, prefix) {
        var context = react.useContext(IdContext);
        return react.useMemo(
          function () {
            return (
              idProp ||
              [prefix, context.prefix, ++context.current]
                .filter(Boolean)
                .join("-")
            );
          },
          [idProp, prefix]
        );
      }
      function use_boolean_slicedToArray(arr, i) {
        return (
          (function use_boolean_arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
          })(arr) ||
          (function use_boolean_iterableToArrayLimit(arr, i) {
            var _i =
              null == arr
                ? null
                : ("undefined" != typeof Symbol && arr[Symbol.iterator]) ||
                  arr["@@iterator"];
            if (null == _i) return;
            var _s,
              _e,
              _arr = [],
              _n = !0,
              _d = !1;
            try {
              for (
                _i = _i.call(arr);
                !(_n = (_s = _i.next()).done) &&
                (_arr.push(_s.value), !i || _arr.length !== i);
                _n = !0
              );
            } catch (err) {
              (_d = !0), (_e = err);
            } finally {
              try {
                _n || null == _i.return || _i.return();
              } finally {
                if (_d) throw _e;
              }
            }
            return _arr;
          })(arr, i) ||
          (function use_boolean_unsupportedIterableToArray(o, minLen) {
            if (!o) return;
            if ("string" == typeof o)
              return use_boolean_arrayLikeToArray(o, minLen);
            var n = Object.prototype.toString.call(o).slice(8, -1);
            "Object" === n && o.constructor && (n = o.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(o);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return use_boolean_arrayLikeToArray(o, minLen);
          })(arr, i) ||
          (function use_boolean_nonIterableRest() {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function use_boolean_arrayLikeToArray(arr, len) {
        (null == len || len > arr.length) && (len = arr.length);
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      react.memo(function (_ref) {
        var children = _ref.children,
          currentContext = react.useContext(IdContext),
          isRoot = currentContext === defaultIdContext,
          context = react.useMemo(
            function () {
              return {
                prefix: isRoot ? 0 : ++currentContext.prefix,
                current: 0,
              };
            },
            [isRoot, currentContext]
          );
        return react.createElement(
          IdContext.Provider,
          { value: context },
          children
        );
      }).displayName = "IdProvider";
      __webpack_require__(
        "./node_modules/core-js/modules/es.array.for-each.js"
      ),
        __webpack_require__(
          "./node_modules/core-js/modules/web.dom-collections.for-each.js"
        );
      var assertion = __webpack_require__(
        "./packages/core/utils/src/assertion.js"
      );
      function assignRef(ref, value) {
        if (null != ref)
          if (Object(assertion.b)(ref)) ref(value);
          else
            try {
              ref.current = value;
            } catch (error) {
              throw new Error(
                "Cannot assign value '" + value + "' to ref '" + ref + "'"
              );
            }
      }
      function mergeRefs() {
        for (
          var _len = arguments.length, refs = new Array(_len), _key = 0;
          _key < _len;
          _key++
        )
          refs[_key] = arguments[_key];
        return function (node) {
          refs.forEach(function (ref) {
            return assignRef(ref, node);
          });
        };
      }
      var _excluded = [
          "id",
          "isRequired",
          "isInvalid",
          "isDisabled",
          "isReadOnly",
        ],
        _excluded2 = ["getRootProps", "htmlProps"];
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      function form_control_slicedToArray(arr, i) {
        return (
          (function form_control_arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
          })(arr) ||
          (function form_control_iterableToArrayLimit(arr, i) {
            var _i =
              null == arr
                ? null
                : ("undefined" != typeof Symbol && arr[Symbol.iterator]) ||
                  arr["@@iterator"];
            if (null == _i) return;
            var _s,
              _e,
              _arr = [],
              _n = !0,
              _d = !1;
            try {
              for (
                _i = _i.call(arr);
                !(_n = (_s = _i.next()).done) &&
                (_arr.push(_s.value), !i || _arr.length !== i);
                _n = !0
              );
            } catch (err) {
              (_d = !0), (_e = err);
            } finally {
              try {
                _n || null == _i.return || _i.return();
              } finally {
                if (_d) throw _e;
              }
            }
            return _arr;
          })(arr, i) ||
          (function form_control_unsupportedIterableToArray(o, minLen) {
            if (!o) return;
            if ("string" == typeof o)
              return form_control_arrayLikeToArray(o, minLen);
            var n = Object.prototype.toString.call(o).slice(8, -1);
            "Object" === n && o.constructor && (n = o.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(o);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return form_control_arrayLikeToArray(o, minLen);
          })(arr, i) ||
          (function form_control_nonIterableRest() {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function form_control_arrayLikeToArray(arr, len) {
        (null == len || len > arr.length) && (len = arr.length);
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      var _createContext = (function createContext() {
          var options =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            _options$strict = options.strict,
            strict = void 0 === _options$strict || _options$strict,
            _options$errorMessage = options.errorMessage,
            errorMessage =
              void 0 === _options$errorMessage
                ? "useContext: `context` is undefined. Seems you forgot to wrap component within the Provider"
                : _options$errorMessage,
            name = options.name,
            Context = react.createContext(void 0);
          function useContext() {
            var context = react.useContext(Context);
            if (!context && strict) {
              var _Error$captureStackTr,
                error = new Error(errorMessage);
              throw (
                ((error.name = "ContextError"),
                null === (_Error$captureStackTr = Error.captureStackTrace) ||
                  void 0 === _Error$captureStackTr ||
                  _Error$captureStackTr.call(Error, error, useContext),
                error)
              );
            }
            return context;
          }
          return (
            (Context.displayName = name),
            [Context.Provider, useContext, Context]
          );
        })({ strict: !1, name: "FormControlContext" }),
        _createContext2 = form_control_slicedToArray(_createContext, 2),
        FormControlProvider = _createContext2[0],
        useFormControlContext = _createContext2[1];
      function useFormControlProvider(props) {
        var idProp = props.id,
          isRequired = props.isRequired,
          isInvalid = props.isInvalid,
          isDisabled = props.isDisabled,
          isReadOnly = props.isReadOnly,
          htmlProps = _objectWithoutProperties(props, _excluded),
          uuid = useId(),
          id = idProp || "field-" + uuid,
          labelId = id + "-label",
          feedbackId = id + "-feedback",
          helpTextId = id + "-helptext",
          _React$useState2 = form_control_slicedToArray(react.useState(!1), 2),
          hasFeedbackText = _React$useState2[0],
          setHasFeedbackText = _React$useState2[1],
          _React$useState4 = form_control_slicedToArray(react.useState(!1), 2),
          hasHelpText = _React$useState4[0],
          setHasHelpText = _React$useState4[1],
          _useBoolean = (function useBoolean() {
            var initialState =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              _useState2 = use_boolean_slicedToArray(
                Object(react.useState)(initialState),
                2
              ),
              value = _useState2[0],
              setValue = _useState2[1],
              on = Object(react.useCallback)(function () {
                setValue(!0);
              }, []),
              off = Object(react.useCallback)(function () {
                setValue(!1);
              }, []),
              toggle = Object(react.useCallback)(function () {
                setValue(function (prev) {
                  return !prev;
                });
              }, []);
            return [value, { on: on, off: off, toggle: toggle }];
          })(),
          _useBoolean2 = form_control_slicedToArray(_useBoolean, 2),
          isFocused = _useBoolean2[0],
          setFocus = _useBoolean2[1],
          getHelpTextProps = react.useCallback(
            function () {
              var props =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                forwardedRef =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null;
              return Object.assign({ id: helpTextId }, props, {
                ref: mergeRefs(forwardedRef, function (node) {
                  node && setHasHelpText(!0);
                }),
              });
            },
            [helpTextId]
          ),
          getLabelProps = react.useCallback(
            function () {
              var _props$id,
                _props$htmlFor,
                props =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                forwardedRef =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null;
              return Object.assign({}, props, {
                ref: forwardedRef,
                "data-focus": Object(dom.c)(isFocused),
                "data-disabled": Object(dom.c)(isDisabled),
                "data-invalid": Object(dom.c)(isInvalid),
                "data-readonly": Object(dom.c)(isReadOnly),
                id:
                  null !== (_props$id = props.id) && void 0 !== _props$id
                    ? _props$id
                    : labelId,
                htmlFor:
                  null !== (_props$htmlFor = props.htmlFor) &&
                  void 0 !== _props$htmlFor
                    ? _props$htmlFor
                    : id,
              });
            },
            [id, isDisabled, isFocused, isInvalid, isReadOnly, labelId]
          ),
          getErrorMessageProps = react.useCallback(
            function () {
              var props =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                forwardedRef =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null;
              return Object.assign({ id: feedbackId }, props, {
                ref: mergeRefs(forwardedRef, function (node) {
                  node && setHasFeedbackText(!0);
                }),
                "aria-live": "polite",
              });
            },
            [feedbackId]
          ),
          getRootProps = react.useCallback(
            function () {
              var props =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                forwardedRef =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null;
              return Object.assign({}, props, htmlProps, {
                ref: forwardedRef,
                role: "group",
              });
            },
            [htmlProps]
          ),
          getRequiredIndicatorProps = react.useCallback(function () {
            var props =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              forwardedRef =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : null;
            return Object.assign({}, props, {
              ref: forwardedRef,
              role: "presentation",
              "aria-hidden": !0,
              children: props.children || "*",
            });
          }, []);
        return {
          isRequired: !!isRequired,
          isInvalid: !!isInvalid,
          isReadOnly: !!isReadOnly,
          isDisabled: !!isDisabled,
          isFocused: !!isFocused,
          onFocus: setFocus.on,
          onBlur: setFocus.off,
          hasFeedbackText: hasFeedbackText,
          setHasFeedbackText: setHasFeedbackText,
          hasHelpText: hasHelpText,
          setHasHelpText: setHasHelpText,
          id: id,
          labelId: labelId,
          feedbackId: feedbackId,
          helpTextId: helpTextId,
          htmlProps: htmlProps,
          getHelpTextProps: getHelpTextProps,
          getErrorMessageProps: getErrorMessageProps,
          getRootProps: getRootProps,
          getLabelProps: getLabelProps,
          getRequiredIndicatorProps: getRequiredIndicatorProps,
        };
      }
      var FormControl = react.forwardRef(function (props, ref) {
        var _useFormControlProvid = useFormControlProvider(
            Object(stitches_config.c)(props)
          ),
          getRootProps = _useFormControlProvid.getRootProps,
          context =
            (_useFormControlProvid.htmlProps,
            _objectWithoutProperties(_useFormControlProvid, _excluded2)),
          className = Object(dom.b)("form-control", props.className),
          contextValue = react.useMemo(
            function () {
              return context;
            },
            [context]
          );
        return Object(jsx_runtime.jsx)(FormControlProvider, {
          value: contextValue,
          children: Object(jsx_runtime.jsx)(
            index_module.a.div,
            Object.assign({}, getRootProps({}, ref), { className: className })
          ),
        });
      });
      assertion.a && (FormControl.displayName = "FormControl");
      var FormHelperText = react.forwardRef(function (props, ref) {
        var field = useFormControlContext(),
          className = Object(dom.b)("form__helper-text", props.className);
        return Object(jsx_runtime.jsx)(
          index_module.a.div,
          Object.assign(
            {},
            null == field ? void 0 : field.getHelpTextProps(props, ref),
            { className: className }
          )
        );
      });
      assertion.a && (FormHelperText.displayName = "FormHelperText");
      try {
        (FormControl.displayName = "FormControl"),
          (FormControl.__docgenInfo = {
            description:
              "FormControl provides context such as\n`isInvalid`, `isDisabled`, and `isRequired` to form elements.\n\nThis is commonly used in form elements such as `input`,\n`select`, `textarea`, etc.",
            displayName: "FormControl",
            props: {
              css: {
                defaultValue: null,
                description: "",
                name: "css",
                required: !0,
                type: { name: "CSS" },
              },
              label: {
                defaultValue: null,
                description:
                  "The label text used to inform users as to what information is\nrequested for a text field.",
                name: "label",
                required: !1,
                type: { name: "string | undefined" },
              },
              isRequired: {
                defaultValue: null,
                description:
                  "If `true`, the form control will be required. This has 2 side effects:\n- The `FormLabel` will show a required indicator\n- The form element (e.g, Input) will have `aria-required` set to `true`",
                name: "isRequired",
                required: !1,
                type: { name: "boolean | undefined" },
              },
              isDisabled: {
                defaultValue: null,
                description:
                  "If `true`, the form control will be disabled. This has 2 side effects:\n- The `FormLabel` will have `data-disabled` attribute\n- The form element (e.g, Input) will be disabled",
                name: "isDisabled",
                required: !1,
                type: { name: "boolean | undefined" },
              },
              isInvalid: {
                defaultValue: null,
                description:
                  "If `true`, the form control will be invalid. This has 2 side effects:\n- The `FormLabel` and `FormErrorIcon` will have `data-invalid` set to `true`\n- The form element (e.g, Input) will have `aria-invalid` set to `true`",
                name: "isInvalid",
                required: !1,
                type: { name: "boolean | undefined" },
              },
              isReadOnly: {
                defaultValue: null,
                description: "If `true`, the form control will be readonly",
                name: "isReadOnly",
                required: !1,
                type: { name: "boolean | undefined" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "packages/react/form-control/src/form-control.tsx#FormControl"
            ] = {
              docgenInfo: FormControl.__docgenInfo,
              name: "FormControl",
              path: "packages/react/form-control/src/form-control.tsx#FormControl",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (FormHelperText.displayName = "FormHelperText"),
          (FormHelperText.__docgenInfo = {
            description:
              "FormHelperText\n\nAssistive component that conveys additional guidance\nabout the field, such as how it will be used and what\ntypes in values should be provided.",
            displayName: "FormHelperText",
            props: {},
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "packages/react/form-control/src/form-control.tsx#FormHelperText"
            ] = {
              docgenInfo: FormHelperText.__docgenInfo,
              name: "FormHelperText",
              path: "packages/react/form-control/src/form-control.tsx#FormHelperText",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var use_form_control_excluded = [
          "isDisabled",
          "isInvalid",
          "isReadOnly",
          "isRequired",
        ],
        use_form_control_excluded2 = [
          "id",
          "disabled",
          "readOnly",
          "required",
          "isRequired",
          "isInvalid",
          "isReadOnly",
          "isDisabled",
          "onFocus",
          "onBlur",
        ];
      function use_form_control_objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function use_form_control_objectWithoutPropertiesLoose(
            source,
            excluded
          ) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      function useFormControl(props) {
        var _useFormControlProps = (function useFormControlProps(props) {
            var _ref,
              _ref2,
              _ref3,
              field = useFormControlContext(),
              id = props.id,
              disabled = props.disabled,
              readOnly = props.readOnly,
              required = props.required,
              isRequired = props.isRequired,
              isInvalid = props.isInvalid,
              isReadOnly = props.isReadOnly,
              isDisabled = props.isDisabled,
              onFocus = props.onFocus,
              onBlur = props.onBlur,
              rest = use_form_control_objectWithoutProperties(
                props,
                use_form_control_excluded2
              ),
              labelIds = props["aria-describedby"]
                ? [props["aria-describedby"]]
                : [];
            null != field &&
              field.hasFeedbackText &&
              null != field &&
              field.isInvalid &&
              labelIds.push(field.feedbackId);
            null != field &&
              field.hasHelpText &&
              labelIds.push(field.helpTextId);
            return Object.assign({}, rest, {
              "aria-describedby": labelIds.join(" ") || void 0,
              id: null != id ? id : null == field ? void 0 : field.id,
              isDisabled:
                null !== (_ref = null != disabled ? disabled : isDisabled) &&
                void 0 !== _ref
                  ? _ref
                  : null == field
                  ? void 0
                  : field.isDisabled,
              isReadOnly:
                null !== (_ref2 = null != readOnly ? readOnly : isReadOnly) &&
                void 0 !== _ref2
                  ? _ref2
                  : null == field
                  ? void 0
                  : field.isReadOnly,
              isRequired:
                null !== (_ref3 = null != required ? required : isRequired) &&
                void 0 !== _ref3
                  ? _ref3
                  : null == field
                  ? void 0
                  : field.isRequired,
              isInvalid:
                null != isInvalid
                  ? isInvalid
                  : null == field
                  ? void 0
                  : field.isInvalid,
              onFocus: Object(src_function.a)(
                null == field ? void 0 : field.onFocus,
                onFocus
              ),
              onBlur: Object(src_function.a)(
                null == field ? void 0 : field.onBlur,
                onBlur
              ),
            });
          })(props),
          isDisabled = _useFormControlProps.isDisabled,
          isInvalid = _useFormControlProps.isInvalid,
          isReadOnly = _useFormControlProps.isReadOnly,
          isRequired = _useFormControlProps.isRequired,
          rest = use_form_control_objectWithoutProperties(
            _useFormControlProps,
            use_form_control_excluded
          );
        return Object.assign({}, rest, {
          disabled: isDisabled,
          readOnly: isReadOnly,
          required: isRequired,
          "aria-invalid": Object(dom.a)(isInvalid),
          "aria-required": Object(dom.a)(isRequired),
          "aria-readonly": Object(dom.a)(isReadOnly),
        });
      }
      var StyledTextField = Object(stitches_config.d)("input", {
          appearance: "none",
          borderWidth: "0",
          boxSizing: "border-box",
          fontFamily: "inherit",
          margin: "0",
          outline: "none",
          padding: "0",
          width: "100%",
          WebkitTapHighlightColor: "rgba(0,0,0,0)",
          "&::before": { boxSizing: "border-box" },
          "&::after": { boxSizing: "border-box" },
          color: "$hiContrast",
          fontVariantNumeric: "tabular-nums",
          boxShadow: "inset 0 0 0 1px $colors$neutral500",
          "&:-webkit-autofill": {
            boxShadow:
              "inset 0 0 0 1px $colors$blue6, inset 0 0 0 100px $colors$blue3",
          },
          "&:-webkit-autofill::first-line": {
            fontFamily: "$untitled",
            color: "$hiContrast",
          },
          "&:focus": {
            backgroundColor: "$neutral0",
            boxShadow:
              "inset 0px 0px 0px 1px $colors$purple600, 0px 0px 0px 1px $colors$purple600",
            "&:-webkit-autofill": {
              boxShadow:
                "inset 0px 0px 0px 1px $colors$$colors$purple600, 0px 0px 0px 1px $colors$$colors$purple600, inset 0 0 0 100px $colors$blue3",
            },
          },
          "&::placeholder": { color: "$neutral700" },
          "&:disabled": {
            pointerEvents: "none",
            backgroundColor: "$slate2",
            color: "$slate8",
            cursor: "not-allowed",
            "&::placeholder": { color: "$slate7" },
          },
          "&:read-only": {
            backgroundColor: "$slate2",
            "&:focus": { boxShadow: "inset 0px 0px 0px 1px $colors$slate7" },
          },
          variants: {
            size: {
              1: {
                borderRadius: "$1",
                height: "$5",
                fontSize: "$1",
                px: "$1",
                lineHeight: "$sizes$5",
                "&:-webkit-autofill::first-line": { fontSize: "$1" },
              },
              2: {
                borderRadius: "$2",
                height: "$6",
                fontSize: "$3",
                px: "$2",
                lineHeight: "$sizes$6",
                "&:-webkit-autofill::first-line": { fontSize: "$3" },
              },
            },
            variant: {
              ghost: {
                boxShadow: "none",
                backgroundColor: "transparent",
                "@hover": {
                  "&:hover": { boxShadow: "inset 0 0 0 1px $colors$slateA7" },
                },
                "&:focus": {
                  backgroundColor: "$loContrast",
                  boxShadow:
                    "inset 0px 0px 0px 1px $colors$$colors$purple600, 0px 0px 0px 1px $colors$$colors$purple600",
                },
                "&:disabled": { backgroundColor: "transparent" },
                "&:read-only": { backgroundColor: "transparent" },
              },
            },
            state: {
              invalid: {
                boxShadow: "inset 0 0 0 1px $colors$red7",
                "&:focus": {
                  boxShadow:
                    "inset 0px 0px 0px 1px $colors$red8, 0px 0px 0px 1px $colors$red8",
                },
              },
              valid: {
                boxShadow: "inset 0 0 0 1px $colors$green7",
                "&:focus": {
                  boxShadow:
                    "inset 0px 0px 0px 1px $colors$green8, 0px 0px 0px 1px $colors$green8",
                },
              },
            },
            cursor: {
              default: { cursor: "default", "&:focus": { cursor: "text" } },
              text: { cursor: "text" },
            },
          },
          defaultVariants: { size: "1" },
        }),
        TextField = react.forwardRef(function (props, ref) {
          Object(src.omitThemingProps)(props);
          var inputProps = useFormControl(props);
          Object(dom.b)("chakra-input", props.className);
          return Object(jsx_runtime.jsx)(
            StyledTextField,
            Object.assign({ ref: ref }, inputProps),
            void 0
          );
        });
      (TextField.displayName = "TextField"),
        (TextField.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "TextField",
        }),
        "undefined" != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES[
            "packages/react/text-field/src/text-field.js"
          ] = {
            name: "TextField",
            docgenInfo: TextField.__docgenInfo,
            path: "packages/react/text-field/src/text-field.js",
          });
      var flex = __webpack_require__("./packages/react/layout/src/flex.tsx"),
        text_field_stories_basic = function basic() {
          return Object(jsx_runtime.jsx)(jsx_runtime.Fragment, {
            children: Object(jsx_runtime.jsx)(flex.a, {
              css: { p: "$6" },
              children: Object(jsx_runtime.jsx)(TextField, {}),
            }),
          });
        };
      text_field_stories_basic.parameters = Object.assign(
        {
          storySource: {
            source:
              '() => (\n  <>\n    <Flex css={{ p: "$6" }}>\n      <TextField />\n    </Flex>\n  </>\n)',
          },
        },
        text_field_stories_basic.parameters
      );
    },
    "./storybook-init-framework-entry.js": function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      __webpack_require__(
        "./node_modules/@storybook/react/dist/esm/client/index.js"
      );
    },
    "./types/index.d.ts": function (module, exports) {},
    0: function (module, exports, __webpack_require__) {
      __webpack_require__(
        "./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"
      ),
        __webpack_require__(
          "./node_modules/@storybook/core-client/dist/esm/globals/globals.js"
        ),
        __webpack_require__("./storybook-init-framework-entry.js"),
        __webpack_require__(
          "./node_modules/@storybook/addon-docs/dist/esm/frameworks/common/config.js-generated-config-entry.js"
        ),
        __webpack_require__(
          "./node_modules/@storybook/addon-docs/dist/esm/frameworks/react/config.js-generated-config-entry.js"
        ),
        __webpack_require__(
          "./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"
        ),
        __webpack_require__(
          "./.storybook/preview.js-generated-config-entry.js"
        ),
        (module.exports = __webpack_require__("./generated-stories-entry.js"));
    },
    1: function (module, exports) {},
  },
  [[0, 4, 5]],
]);
