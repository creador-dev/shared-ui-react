'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styled = require('styled-components');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n.sui-wrap && {\n\tdisplay: ", ";\n\t", "\n\t", "\n\tmargin: 0;\n\tpadding-top: ", "px;\n\tpadding-right: ", "px;\n\tpadding-bottom: ", "px;\n\tpadding-left: ", "px;\n\tborder: 0 solid #E6E6E6;\n\tborder-top-width: ", "px;\n\t", "\n\n\t", "\n\t", "\n\n\t@media ", " {\n\t\tpadding-top: ", "px;\n\t\tpadding-right: ", "px;\n\t\tpadding-bottom: ", "px;\n\t\tpadding-left: ", "px;\n\t}\n}\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n.sui-wrap && {\n\tmargin: 0;\n\tpadding-top: ", "px;\n\tpadding-right: ", "px;\n\tpadding-bottom: ", "px;\n\tpadding-left: ", "px;\n\tborder: 0 solid #E6E6E6;\n\tborder-top-width: ", "px;\n\tborder-bottom-width: ", "px;\n\ttext-align: ", ";\n\n\t@media ", " {\n\t\tpadding-top: ", "px;\n\t\tpadding-right: ", "px;\n\t\tpadding-bottom: ", "px;\n\t\tpadding-left: ", "px;\n\t}\n}\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n.sui-wrap && {\n\tdisplay: ", ";\n\t", "\n\t", "\n\tmargin: 0;\n\tpadding-top: ", "px;\n\tpadding-right: ", "px;\n\tpadding-bottom: ", "px;\n\tpadding-left: ", "px;\n\tborder: 0 solid #E6E6E6;\n\tborder-bottom-width: ", "px;\n\t", "\n\n\t", "\n\t", "\n\n\t@media ", " {\n\t\tpadding-top: ", "px;\n\t\tpadding-right: ", "px;\n\t\tpadding-bottom: ", "px;\n\t\tpadding-left: ", "px;\n\t}\n}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var utils = {
  gutter: 30,
  gutter_md: 20
};
var screen = {
  mobile: 480,
  tablet: 783,
  laptop: 1200,
  desktop: 1500
};
var device = {
  mobile: "(min-width: ".concat(screen.mobile, "px)"),
  tablet: "(min-width: ".concat(screen.tablet, "px)"),
  laptop: "(min-width: ".concat(screen.laptop, "px)"),
  desktop: "(min-width: ".concat(screen.desktop, "px)")
};

var Box = function Box(_ref) {
  var children = _ref.children,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["children", "className"]);

  return /*#__PURE__*/React__default['default'].createElement("div", _extends({
    className: 'undefined' !== typeof className && '' !== className ? "sui-box ".concat(className) : 'sui-box'
  }, props), children);
};

var BoxTitle = function BoxTitle(_ref2) {
  var icon = _ref2.icon,
      tagLabel = _ref2.tagLabel,
      tagColor = _ref2.tagColor,
      tagSize = _ref2.tagSize,
      tagDesign = _ref2.tagDesign,
      className = _ref2.className,
      children = _ref2.children,
      props = _objectWithoutProperties(_ref2, ["icon", "tagLabel", "tagColor", "tagSize", "tagDesign", "className", "children"]);

  var tagClass = 'sui-tag';

  switch (tagColor) {
    case 'red':
    case 'yellow':
    case 'green':
    case 'blue':
    case 'purple':
      tagClass += ' sui-tag-' + tagColor;
      break;
  }

  switch (tagSize) {
    case 'sm':
    case 'small':
      tagClass += ' sui-tag-sm';
      break;
  }

  switch (tagDesign) {
    case 'outlined':
      tagClass += ' sui-tag-ghost';
      break;
  }

  return /*#__PURE__*/React__default['default'].createElement("h3", _extends({
    className: 'undefined' !== typeof className && '' !== className ? "sui-box-title ".concat(className) : 'sui-box-title'
  }, props), icon && "" !== icon && /*#__PURE__*/React__default['default'].createElement("span", {
    className: "sui-icon-".concat(icon, " sui-md"),
    "aria-hidden": "true"
  }), children, tagLabel && '' !== tagLabel && /*#__PURE__*/React__default['default'].createElement("span", {
    className: tagClass,
    style: {
      marginLeft: 10
    }
  }, tagLabel));
};

var Header = styled__default['default'].div.attrs(function (props) {
  return {
    props: props
  };
})(_templateObject(), function (props) {
  return 'block' !== props.display ? 'flex' : 'block';
}, function (props) {
  return 'block' !== props.display && 'flex-flow: row wrap;';
}, function (props) {
  return 'block' !== props.display && ('left' === props.alignment || 'right' === props.alignment || 'center' === props.alignment) ? 'left' === props.alignment ? 'justify-content: flex-start;' : 'right' === props.alignment ? 'justify-content: flex-end;' : 'justify-content: center;' : 'justify-content: space-between;';
}, function (props) {
  return props.paddingTop || 0 === props.paddingTop ? props.paddingTop > 29 ? props.paddingTop - 10 : props.paddingTop : utils.gutter_md / 2;
}, function (props) {
  return props.paddingRight || 0 === props.paddingRight ? props.paddingRight > 29 ? props.paddingRight - 10 : props.paddingRight : utils.gutter_md;
}, function (props) {
  return props.paddingBottom || 0 === props.paddingBottom ? props.paddingBottom > 29 ? props.paddingBottom - 10 : props.paddingBottom : utils.gutter_md / 2;
}, function (props) {
  return props.paddingLeft || 0 === props.paddingLeft ? props.paddingLeft > 29 ? props.paddingLeft - 10 : props.paddingLeft : utils.gutter_md;
}, function (props) {
  return props.border || 0 === props.border ? props.border : 1;
}, function (props) {
  return 'block' === props.display && ('right' === props.alignment || 'center' === props.alignment) && 'text-align: ' + props.alignment + ';';
}, function (props) {
  return 'block' !== props.display && '> * { max-width: 100%; flex: 0 0 auto; }';
}, function (props) {
  return 'block' !== props.display && '> * + * { margin-left: 10px; }';
}, device.tablet, function (props) {
  return props.paddingTop || 0 === props.paddingTop ? props.paddingTop : utils.gutter / 2;
}, function (props) {
  return props.paddingRight || 0 === props.paddingRight ? props.paddingRight : utils.gutter;
}, function (props) {
  return props.paddingBottom || 0 === props.paddingBottom ? props.paddingBottom : utils.gutter / 2;
}, function (props) {
  return props.paddingLeft || 0 === props.paddingLeft ? props.paddingLeft : utils.gutter;
});

var BoxHeader = function BoxHeader(_ref3) {
  var title = _ref3.title,
      titleIcon = _ref3.titleIcon,
      tagLabel = _ref3.tagLabel,
      tagColor = _ref3.tagColor,
      tagSize = _ref3.tagSize,
      tagDesign = _ref3.tagDesign,
      className = _ref3.className,
      children = _ref3.children,
      props = _objectWithoutProperties(_ref3, ["title", "titleIcon", "tagLabel", "tagColor", "tagSize", "tagDesign", "className", "children"]);

  return /*#__PURE__*/React__default['default'].createElement(Header, props, title && '' !== title && /*#__PURE__*/React__default['default'].createElement(BoxTitle, {
    icon: titleIcon,
    tagLabel: tagLabel,
    tagColor: tagColor,
    tagSize: tagSize,
    tagDesign: tagDesign
  }, title), children);
};

var Body = styled__default['default'].div.attrs(function (props) {
  return {
    props: props
  };
})(_templateObject2(), function (props) {
  return props.paddingTop || 0 === props.paddingTop ? props.paddingTop > 29 ? props.paddingTop - 10 : props.paddingTop : utils.gutter_md;
}, function (props) {
  return props.paddingRight || 0 === props.paddingRight ? props.paddingRight > 29 ? props.paddingRight - 10 : props.paddingRight : utils.gutter_md;
}, function (props) {
  return props.paddingBottom || 0 === props.paddingBottom ? props.paddingBottom > 29 ? props.paddingBottom - 10 : props.paddingBottom : utils.gutter_md;
}, function (props) {
  return props.paddingLeft || 0 === props.paddingLeft ? props.paddingLeft > 29 ? props.paddingLeft - 10 : props.paddingLeft : utils.gutter_md;
}, function (props) {
  return props.borderTop || 0 === props.borderTop ? props.borderTop : 0;
}, function (props) {
  return props.borderBottom || 0 === props.borderBottom ? props.borderBottom : 0;
}, function (props) {
  return props.alignment || 'left';
}, device.tablet, function (props) {
  return props.paddingTop || 0 === props.paddingTop ? props.paddingTop : utils.gutter;
}, function (props) {
  return props.paddingRight || 0 === props.paddingRight ? props.paddingRight : utils.gutter;
}, function (props) {
  return props.paddingBottom || 0 === props.paddingBottom ? props.paddingBottom : utils.gutter;
}, function (props) {
  return props.paddingLeft || 0 === props.paddingLeft ? props.paddingLeft : utils.gutter;
});

var BoxBody = function BoxBody(_ref4) {
  var className = _ref4.className,
      children = _ref4.children,
      props = _objectWithoutProperties(_ref4, ["className", "children"]);

  return /*#__PURE__*/React__default['default'].createElement(Body, _extends({
    className: className
  }, props), children);
};

var Footer = styled__default['default'].div.attrs(function (props) {
  return {
    props: props
  };
})(_templateObject3(), function (props) {
  return 'block' !== props.display ? 'flex' : 'block';
}, function (props) {
  return 'block' !== props.display && 'flex-flow: row wrap;';
}, function (props) {
  return 'block' !== props.display && ('left' === props.alignment || 'right' === props.alignment || 'center' === props.alignment) ? 'left' === props.alignment ? 'justify-content: flex-start;' : 'right' === props.alignment ? 'justify-content: flex-end;' : 'justify-content: center;' : 'justify-content: space-between;';
}, function (props) {
  return props.paddingTop || 0 === props.paddingTop ? props.paddingTop > 29 ? props.paddingTop - 10 : props.paddingTop : utils.gutter_md;
}, function (props) {
  return props.paddingRight || 0 === props.paddingRight ? props.paddingRight > 29 ? props.paddingRight - 10 : props.paddingRight : utils.gutter_md;
}, function (props) {
  return props.paddingBottom || 0 === props.paddingBottom ? props.paddingBottom > 29 ? props.paddingBottom - 10 : props.paddingBottom : utils.gutter_md;
}, function (props) {
  return props.paddingLeft || 0 === props.paddingLeft ? props.paddingLeft > 29 ? props.paddingLeft - 10 : props.paddingLeft : utils.gutter_md;
}, function (props) {
  return props.border || 0 === props.border || '' === props.border ? props.border : 1;
}, function (props) {
  return 'block' === props.display && ('right' === props.alignment || 'center' === props.alignment) && 'text-align: ' + props.alignment + ';';
}, function (props) {
  return 'block' !== props.display && '> * { max-width: 100%; flex: 0 0 auto; }';
}, function (props) {
  return 'block' !== props.display && '> * + * { margin-left: 10px; }';
}, device.tablet, function (props) {
  return props.paddingTop || 0 === props.paddingTop ? props.paddingTop : utils.gutter;
}, function (props) {
  return props.paddingRight || 0 === props.paddingRight ? props.paddingRight : utils.gutter;
}, function (props) {
  return props.paddingBottom || 0 === props.paddingBottom ? props.paddingBottom : utils.gutter;
}, function (props) {
  return props.paddingLeft || 0 === props.paddingLeft ? props.paddingLeft : utils.gutter;
});

var BoxFooter = function BoxFooter(_ref5) {
  var className = _ref5.className,
      children = _ref5.children,
      props = _objectWithoutProperties(_ref5, ["className", "children"]);

  return /*#__PURE__*/React__default['default'].createElement(Footer, _extends({
    className: className
  }, props), children);
};

function _extends$1() {
  _extends$1 = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends$1.apply(this, arguments);
}

function _objectWithoutPropertiesLoose$1(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties$1(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose$1(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var Input = function Input(_ref) {
  var id = _ref.id,
      size = _ref.size,
      label = _ref.label,
      description = _ref.description,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'text' : _ref$type,
      props = _objectWithoutProperties$1(_ref, ["id", "size", "label", "description", "type"]);

  var uniqueId = id && '' !== id ? id : props.property;
  var clazz = 'sui-form-control';

  switch (size) {
    case 'sm':
    case 'small':
      clazz += ' sui-input-sm';
      break;

    case 'md':
    case 'medium':
      clazz += ' sui-input-md';
      break;
  }

  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: "sui-form-field"
  }, label && /*#__PURE__*/React__default['default'].createElement("label", {
    htmlFor: uniqueId,
    className: "sui-label"
  }, label), /*#__PURE__*/React__default['default'].createElement("input", _extends$1({
    id: uniqueId,
    type: type,
    className: clazz
  }, props)), description && /*#__PURE__*/React__default['default'].createElement("p", {
    className: "sui-description"
  }, description));
};

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose$2(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties$2(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose$2(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var Button = function Button(_ref) {
  var label = _ref.label,
      icon = _ref.icon,
      _ref$design = _ref.design,
      design = _ref$design === void 0 ? "solid" : _ref$design,
      color = _ref.color,
      className = _ref.className,
      loading = _ref.loading,
      props = _objectWithoutProperties$2(_ref, ["label", "icon", "design", "color", "className", "loading"]);

  var loader = /*#__PURE__*/React__default['default'].createElement("span", {
    className: "sui-icon-loader sui-loading",
    style: {
      position: "relative"
    },
    "aria-hidden": "true"
  });
  var content = /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, icon && "" !== icon && /*#__PURE__*/React__default['default'].createElement("span", {
    className: "sui-icon-" + icon,
    "aria-hidden": "true"
  }), label);
  className = "sui-button".concat(className ? ' ' + className : ''); // Set button color.

  switch (color) {
    case "blue":
    case "green":
    case "red":
    case "orange":
    case "purple":
    case "yellow":
    case "white":
      className += " sui-button-" + color;
      break;

    case "gray":
    default:
      className += "";
      break;
  } // Set button style.


  switch (design) {
    case "ghost":
    case "outlined":
      className += " sui-button-" + design;
      break;

    case "solid":
    default:
      className += "";
      break;
  } // Set loading class.


  if (loading) {
    className += " sui-button-onload";
  }

  var htmlTag = 'button';

  if (props.href) {
    htmlTag = 'a';
  } else if (props.htmlFor) {
    htmlTag = 'label';
  }

  return /*#__PURE__*/React__default['default'].createElement(htmlTag, _objectSpread2({
    className: className,
    disabled: props.disabled || loading
  }, props), loading ? loader : content);
};

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty$1(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys$1(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2$1(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys$1(Object(source), true).forEach(function (key) {
        _defineProperty$1(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$1(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it;

  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function () {};

      return {
        s: F,
        n: function () {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function (e) {
          throw e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function () {
      it = o[Symbol.iterator]();
    },
    n: function () {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function (e) {
      didErr = true;
      err = e;
    },
    f: function () {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

function _typeof$1(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof$1=function _typeof(obj){return typeof obj;};}else {_typeof$1=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof$1(obj);}function _extends$2(){_extends$2=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};return _extends$2.apply(this,arguments);}function _objectWithoutPropertiesLoose$3(source,excluded){if(source==null)return {};var target={};var sourceKeys=Object.keys(source);var key,i;for(i=0;i<sourceKeys.length;i++){key=sourceKeys[i];if(excluded.indexOf(key)>=0)continue;target[key]=source[key];}return target;}function _objectWithoutProperties$3(source,excluded){if(source==null)return {};var target=_objectWithoutPropertiesLoose$3(source,excluded);var key,i;if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++){key=sourceSymbolKeys[i];if(excluded.indexOf(key)>=0)continue;if(!Object.prototype.propertyIsEnumerable.call(source,key))continue;target[key]=source[key];}}return target;}function _slicedToArray(arr,i){return _arrayWithHoles(arr)||_iterableToArrayLimit(arr,i)||_unsupportedIterableToArray$1(arr,i)||_nonIterableRest();}function _arrayWithHoles(arr){if(Array.isArray(arr))return arr;}function _iterableToArrayLimit(arr,i){if(typeof Symbol==="undefined"||!(Symbol.iterator in Object(arr)))return;var _arr=[];var _n=true;var _d=false;var _e=undefined;try{for(var _i=arr[Symbol.iterator](),_s;!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"]!=null)_i["return"]();}finally{if(_d)throw _e;}}return _arr;}function _unsupportedIterableToArray$1(o,minLen){if(!o)return;if(typeof o==="string")return _arrayLikeToArray$1(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray$1(o,minLen);}function _arrayLikeToArray$1(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++){arr2[i]=arr[i];}return arr2;}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}// https://github.com/davidtheclark/no-scroll/blob/master/index.js
var isOn=false;var scrollbarSize;var scrollTop;function getScrollbarSize(){if(typeof scrollbarSize!=="undefined")return scrollbarSize;var doc=document.documentElement;var dummyScroller=document.createElement("div");dummyScroller.setAttribute("style","width:99px;height:99px;"+"position:absolute;top:-9999px;overflow:scroll;");doc.appendChild(dummyScroller);scrollbarSize=dummyScroller.offsetWidth-dummyScroller.clientWidth;doc.removeChild(dummyScroller);return scrollbarSize;}function hasScrollbar(){return document.documentElement.scrollHeight>window.innerHeight;}function on(){if(typeof document==="undefined"||isOn)return;var doc=document.documentElement;scrollTop=window.pageYOffset;if(hasScrollbar()){doc.style.width="calc(100% - "+getScrollbarSize()+"px)";}else {doc.style.width="100%";}doc.style.position="fixed";doc.style.top=-scrollTop+"px";doc.style.overflow="hidden";isOn=true;}function off(){if(typeof document==="undefined"||!isOn)return;var doc=document.documentElement;doc.style.width="";doc.style.position="";doc.style.top="";doc.style.overflow="";if(typeof scrollTop==="number"){window.scroll(0,scrollTop);}isOn=false;}function getAugmentedNamespace(n){if(n.__esModule)return n;var a=Object.defineProperty({},'__esModule',{value:true});Object.keys(n).forEach(function(k){var d=Object.getOwnPropertyDescriptor(n,k);Object.defineProperty(a,k,d.get?d:{enumerable:true,get:function get(){return n[k];}});});return a;}function createCommonjsModule(fn){var module={exports:{}};return fn(module,module.exports),module.exports;}/** @license React v17.0.1
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var aa=require("react"),m=require("object-assign"),r=require("scheduler");function y(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++){b+="&args[]="+encodeURIComponent(arguments[c]);}return "Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";}if(!aa)throw Error(y(227));var ba=new Set(),ca={};function da(a,b){ea(a,b);ea(a+"Capture",b);}function ea(a,b){ca[a]=b;for(a=0;a<b.length;a++){ba.add(b[a]);}}var fa=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),ha=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ia=Object.prototype.hasOwnProperty,ja={},ka={};function la(a){if(ia.call(ka,a))return !0;if(ia.call(ja,a))return !1;if(ha.test(a))return ka[a]=!0;ja[a]=!0;return !1;}function ma(a,b,c,d){if(null!==c&&0===c.type)return !1;switch(_typeof$1(b)){case"function":case"symbol":return !0;case"boolean":if(d)return !1;if(null!==c)return !c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return "data-"!==a&&"aria-"!==a;default:return !1;}}function na(a,b,c,d){if(null===b||"undefined"===typeof b||ma(a,b,c,d))return !0;if(d)return !1;if(null!==c)switch(c.type){case 3:return !b;case 4:return !1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b;}return !1;}function B(a,b,c,d,e,f,g){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=a;this.type=b;this.sanitizeURL=f;this.removeEmptyString=g;}var D={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){D[a]=new B(a,0,!1,a,null,!1,!1);});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];D[b]=new B(b,1,!1,a[1],null,!1,!1);});["contentEditable","draggable","spellCheck","value"].forEach(function(a){D[a]=new B(a,2,!1,a.toLowerCase(),null,!1,!1);});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){D[a]=new B(a,2,!1,a,null,!1,!1);});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){D[a]=new B(a,3,!1,a.toLowerCase(),null,!1,!1);});["checked","multiple","muted","selected"].forEach(function(a){D[a]=new B(a,3,!0,a,null,!1,!1);});["capture","download"].forEach(function(a){D[a]=new B(a,4,!1,a,null,!1,!1);});["cols","rows","size","span"].forEach(function(a){D[a]=new B(a,6,!1,a,null,!1,!1);});["rowSpan","start"].forEach(function(a){D[a]=new B(a,5,!1,a.toLowerCase(),null,!1,!1);});var oa=/[\-:]([a-z])/g;function pa(a){return a[1].toUpperCase();}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(oa,pa);D[b]=new B(b,1,!1,a,null,!1,!1);});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(oa,pa);D[b]=new B(b,1,!1,a,"http://www.w3.org/1999/xlink",!1,!1);});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(oa,pa);D[b]=new B(b,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1,!1);});["tabIndex","crossOrigin"].forEach(function(a){D[a]=new B(a,1,!1,a.toLowerCase(),null,!1,!1);});D.xlinkHref=new B("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(a){D[a]=new B(a,1,!1,a.toLowerCase(),null,!0,!0);});function qa(a,b,c,d){var e=D.hasOwnProperty(b)?D[b]:null;var f=null!==e?0===e.type:d?!1:!(2<b.length)||"o"!==b[0]&&"O"!==b[0]||"n"!==b[1]&&"N"!==b[1]?!1:!0;f||(na(b,c,e,d)&&(c=null),d||null===e?la(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?!1:"":c:(b=e.attributeName,d=e.attributeNamespace,null===c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&!0===c?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c))));}var ra=aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,sa=60103,ta=60106,ua=60107,wa=60108,xa=60114,ya=60109,za=60110,Aa=60112,Ba=60113,Ca=60120,Da=60115,Ea=60116,Fa=60121,Ga=60128,Ha=60129,Ia=60130,Ja=60131;if("function"===typeof Symbol&&Symbol["for"]){var E=Symbol["for"];sa=E("react.element");ta=E("react.portal");ua=E("react.fragment");wa=E("react.strict_mode");xa=E("react.profiler");ya=E("react.provider");za=E("react.context");Aa=E("react.forward_ref");Ba=E("react.suspense");Ca=E("react.suspense_list");Da=E("react.memo");Ea=E("react.lazy");Fa=E("react.block");E("react.scope");Ga=E("react.opaque.id");Ha=E("react.debug_trace_mode");Ia=E("react.offscreen");Ja=E("react.legacy_hidden");}var Ka="function"===typeof Symbol&&Symbol.iterator;function La(a){if(null===a||"object"!==_typeof$1(a))return null;a=Ka&&a[Ka]||a["@@iterator"];return "function"===typeof a?a:null;}var Ma;function Na(a){if(void 0===Ma)try{throw Error();}catch(c){var b=c.stack.trim().match(/\n( *(at )?)/);Ma=b&&b[1]||"";}return "\n"+Ma+a;}var Oa=!1;function Pa(a,b){if(!a||Oa)return "";Oa=!0;var c=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(b){if(b=function b(){throw Error();},Object.defineProperty(b.prototype,"props",{set:function set(){throw Error();}}),"object"===(typeof Reflect==="undefined"?"undefined":_typeof$1(Reflect))&&Reflect.construct){try{Reflect.construct(b,[]);}catch(k){var d=k;}Reflect.construct(a,[],b);}else {try{b.call();}catch(k){d=k;}a.call(b.prototype);}}else {try{throw Error();}catch(k){d=k;}a();}}catch(k){if(k&&d&&"string"===typeof k.stack){for(var e=k.stack.split("\n"),f=d.stack.split("\n"),g=e.length-1,h=f.length-1;1<=g&&0<=h&&e[g]!==f[h];){h--;}for(;1<=g&&0<=h;g--,h--){if(e[g]!==f[h]){if(1!==g||1!==h){do{if(g--,h--,0>h||e[g]!==f[h])return "\n"+e[g].replace(" at new "," at ");}while(1<=g&&0<=h);}break;}}}}finally{Oa=!1,Error.prepareStackTrace=c;}return (a=a?a.displayName||a.name:"")?Na(a):"";}function Qa(a){switch(a.tag){case 5:return Na(a.type);case 16:return Na("Lazy");case 13:return Na("Suspense");case 19:return Na("SuspenseList");case 0:case 2:case 15:return a=Pa(a.type,!1),a;case 11:return a=Pa(a.type.render,!1),a;case 22:return a=Pa(a.type._render,!1),a;case 1:return a=Pa(a.type,!0),a;default:return "";}}function Ra(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case ua:return "Fragment";case ta:return "Portal";case xa:return "Profiler";case wa:return "StrictMode";case Ba:return "Suspense";case Ca:return "SuspenseList";}if("object"===_typeof$1(a))switch(a.$$typeof){case za:return (a.displayName||"Context")+".Consumer";case ya:return (a._context.displayName||"Context")+".Provider";case Aa:var b=a.render;b=b.displayName||b.name||"";return a.displayName||(""!==b?"ForwardRef("+b+")":"ForwardRef");case Da:return Ra(a.type);case Fa:return Ra(a._render);case Ea:b=a._payload;a=a._init;try{return Ra(a(b));}catch(c){}}return null;}function Sa(a){switch(_typeof$1(a)){case"boolean":case"number":case"object":case"string":case"undefined":return a;default:return "";}}function Ta(a){var b=a.type;return (a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b);}function Ua(a){var b=Ta(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"undefined"!==typeof c&&"function"===typeof c.get&&"function"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:!0,get:function get(){return e.call(this);},set:function set(a){d=""+a;f.call(this,a);}});Object.defineProperty(a,b,{enumerable:c.enumerable});return {getValue:function getValue(){return d;},setValue:function setValue(a){d=""+a;},stopTracking:function stopTracking(){a._valueTracker=null;delete a[b];}};}}function Va(a){a._valueTracker||(a._valueTracker=Ua(a));}function Wa(a){if(!a)return !1;var b=a._valueTracker;if(!b)return !0;var c=b.getValue();var d="";a&&(d=Ta(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),!0):!1;}function Xa(a){a=a||("undefined"!==typeof document?document:void 0);if("undefined"===typeof a)return null;try{return a.activeElement||a.body;}catch(b){return a.body;}}function Ya(a,b){var c=b.checked;return m({},b,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=c?c:a._wrapperState.initialChecked});}function Za(a,b){var c=null==b.defaultValue?"":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=Sa(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value};}function $a(a,b){b=b.checked;null!=b&&qa(a,"checked",b,!1);}function ab(a,b){$a(a,b);var c=Sa(b.value),d=b.type;if(null!=c){if("number"===d){if(0===c&&""===a.value||a.value!=c)a.value=""+c;}else a.value!==""+c&&(a.value=""+c);}else if("submit"===d||"reset"===d){a.removeAttribute("value");return;}b.hasOwnProperty("value")?bb(a,b.type,c):b.hasOwnProperty("defaultValue")&&bb(a,b.type,Sa(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked);}function cb(a,b,c){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue")){var d=b.type;if(!("submit"!==d&&"reset"!==d||void 0!==b.value&&null!==b.value))return;b=""+a._wrapperState.initialValue;c||b===a.value||(a.value=b);a.defaultValue=b;}c=a.name;""!==c&&(a.name="");a.defaultChecked=!!a._wrapperState.initialChecked;""!==c&&(a.name=c);}function bb(a,b,c){if("number"!==b||Xa(a.ownerDocument)!==a)null==c?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c);}function db(a){var b="";aa.Children.forEach(a,function(a){null!=a&&(b+=a);});return b;}function eb(a,b){a=m({children:void 0},b);if(b=db(b.children))a.children=b;return a;}function fb(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++){b["$"+c[e]]=!0;}for(c=0;c<a.length;c++){e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=!0);}}else {c=""+Sa(c);b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0;d&&(a[e].defaultSelected=!0);return;}null!==b||a[e].disabled||(b=a[e]);}null!==b&&(b.selected=!0);}}function gb(a,b){if(null!=b.dangerouslySetInnerHTML)throw Error(y(91));return m({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue});}function hb(a,b){var c=b.value;if(null==c){c=b.children;b=b.defaultValue;if(null!=c){if(null!=b)throw Error(y(92));if(Array.isArray(c)){if(!(1>=c.length))throw Error(y(93));c=c[0];}b=c;}null==b&&(b="");c=b;}a._wrapperState={initialValue:Sa(c)};}function ib(a,b){var c=Sa(b.value),d=Sa(b.defaultValue);null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&a.defaultValue!==c&&(a.defaultValue=c));null!=d&&(a.defaultValue=""+d);}function jb(a){var b=a.textContent;b===a._wrapperState.initialValue&&""!==b&&null!==b&&(a.value=b);}var kb={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};function lb(a){switch(a){case"svg":return "http://www.w3.org/2000/svg";case"math":return "http://www.w3.org/1998/Math/MathML";default:return "http://www.w3.org/1999/xhtml";}}function mb(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?lb(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a;}var nb,ob=function(a){return "undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e);});}:a;}(function(a,b){if(a.namespaceURI!==kb.svg||"innerHTML"in a)a.innerHTML=b;else {nb=nb||document.createElement("div");nb.innerHTML="<svg>"+b.valueOf().toString()+"</svg>";for(b=nb.firstChild;a.firstChild;){a.removeChild(a.firstChild);}for(;b.firstChild;){a.appendChild(b.firstChild);}}});function pb(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return;}}a.textContent=b;}var qb={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},rb=["Webkit","ms","Moz","O"];Object.keys(qb).forEach(function(a){rb.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);qb[b]=qb[a];});});function sb(a,b,c){return null==b||"boolean"===typeof b||""===b?"":c||"number"!==typeof b||0===b||qb.hasOwnProperty(a)&&qb[a]?(""+b).trim():b+"px";}function tb(a,b){a=a.style;for(var c in b){if(b.hasOwnProperty(c)){var d=0===c.indexOf("--"),e=sb(c,b[c],d);"float"===c&&(c="cssFloat");d?a.setProperty(c,e):a[c]=e;}}}var ub=m({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function vb(a,b){if(b){if(ub[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML))throw Error(y(137,a));if(null!=b.dangerouslySetInnerHTML){if(null!=b.children)throw Error(y(60));if(!("object"===_typeof$1(b.dangerouslySetInnerHTML)&&"__html"in b.dangerouslySetInnerHTML))throw Error(y(61));}if(null!=b.style&&"object"!==_typeof$1(b.style))throw Error(y(62));}}function wb(a,b){if(-1===a.indexOf("-"))return "string"===typeof b.is;switch(a){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return !1;default:return !0;}}function xb(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a;}var yb=null,zb=null,Ab=null;function Bb(a){if(a=Cb(a)){if("function"!==typeof yb)throw Error(y(280));var b=a.stateNode;b&&(b=Db(b),yb(a.stateNode,a.type,b));}}function Eb(a){zb?Ab?Ab.push(a):Ab=[a]:zb=a;}function Fb(){if(zb){var a=zb,b=Ab;Ab=zb=null;Bb(a);if(b)for(a=0;a<b.length;a++){Bb(b[a]);}}}function Gb(a,b){return a(b);}function Hb(a,b,c,d,e){return a(b,c,d,e);}function Ib(){}var Jb=Gb,Kb=!1,Lb=!1;function Mb(){if(null!==zb||null!==Ab)Ib(),Fb();}function Nb(a,b,c){if(Lb)return a(b,c);Lb=!0;try{return Jb(a,b,c);}finally{Lb=!1,Mb();}}function Ob(a,b){var c=a.stateNode;if(null===c)return null;var d=Db(c);if(null===d)return null;c=d[b];a:switch(b){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(d=!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=!1;}if(a)return null;if(c&&"function"!==typeof c)throw Error(y(231,b,_typeof$1(c)));return c;}var Pb=!1;if(fa)try{var Qb={};Object.defineProperty(Qb,"passive",{get:function get(){Pb=!0;}});window.addEventListener("test",Qb,Qb);window.removeEventListener("test",Qb,Qb);}catch(a){Pb=!1;}function Rb(a,b,c,d,e,f,g,h,k){var l=Array.prototype.slice.call(arguments,3);try{b.apply(c,l);}catch(n){this.onError(n);}}var Sb=!1,Tb=null,Ub=!1,Vb=null,Wb={onError:function onError(a){Sb=!0;Tb=a;}};function Xb(a,b,c,d,e,f,g,h,k){Sb=!1;Tb=null;Rb.apply(Wb,arguments);}function Yb(a,b,c,d,e,f,g,h,k){Xb.apply(this,arguments);if(Sb){if(Sb){var l=Tb;Sb=!1;Tb=null;}else throw Error(y(198));Ub||(Ub=!0,Vb=l);}}function Zb(a){var b=a,c=a;if(a.alternate)for(;b["return"];){b=b["return"];}else {a=b;do{b=a,0!==(b.flags&1026)&&(c=b["return"]),a=b["return"];}while(a);}return 3===b.tag?c:null;}function $b(a){if(13===a.tag){var b=a.memoizedState;null===b&&(a=a.alternate,null!==a&&(b=a.memoizedState));if(null!==b)return b.dehydrated;}return null;}function ac(a){if(Zb(a)!==a)throw Error(y(188));}function bc(a){var b=a.alternate;if(!b){b=Zb(a);if(null===b)throw Error(y(188));return b!==a?null:a;}for(var c=a,d=b;;){var e=c["return"];if(null===e)break;var f=e.alternate;if(null===f){d=e["return"];if(null!==d){c=d;continue;}break;}if(e.child===f.child){for(f=e.child;f;){if(f===c)return ac(e),a;if(f===d)return ac(e),b;f=f.sibling;}throw Error(y(188));}if(c["return"]!==d["return"])c=e,d=f;else {for(var g=!1,h=e.child;h;){if(h===c){g=!0;c=e;d=f;break;}if(h===d){g=!0;d=e;c=f;break;}h=h.sibling;}if(!g){for(h=f.child;h;){if(h===c){g=!0;c=f;d=e;break;}if(h===d){g=!0;d=f;c=e;break;}h=h.sibling;}if(!g)throw Error(y(189));}}if(c.alternate!==d)throw Error(y(190));}if(3!==c.tag)throw Error(y(188));return c.stateNode.current===c?a:b;}function cc(a){a=bc(a);if(!a)return null;for(var b=a;;){if(5===b.tag||6===b.tag)return b;if(b.child)b.child["return"]=b,b=b.child;else {if(b===a)break;for(;!b.sibling;){if(!b["return"]||b["return"]===a)return null;b=b["return"];}b.sibling["return"]=b["return"];b=b.sibling;}}return null;}function dc(a,b){for(var c=a.alternate;null!==b;){if(b===a||b===c)return !0;b=b["return"];}return !1;}var ec,fc,gc,hc,ic=!1,jc=[],kc=null,lc=null,mc=null,nc=new Map(),oc=new Map(),pc=[],qc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function rc(a,b,c,d,e){return {blockedOn:a,domEventName:b,eventSystemFlags:c|16,nativeEvent:e,targetContainers:[d]};}function sc(a,b){switch(a){case"focusin":case"focusout":kc=null;break;case"dragenter":case"dragleave":lc=null;break;case"mouseover":case"mouseout":mc=null;break;case"pointerover":case"pointerout":nc["delete"](b.pointerId);break;case"gotpointercapture":case"lostpointercapture":oc["delete"](b.pointerId);}}function tc(a,b,c,d,e,f){if(null===a||a.nativeEvent!==f)return a=rc(b,c,d,e,f),null!==b&&(b=Cb(b),null!==b&&fc(b)),a;a.eventSystemFlags|=d;b=a.targetContainers;null!==e&&-1===b.indexOf(e)&&b.push(e);return a;}function uc(a,b,c,d,e){switch(b){case"focusin":return kc=tc(kc,a,b,c,d,e),!0;case"dragenter":return lc=tc(lc,a,b,c,d,e),!0;case"mouseover":return mc=tc(mc,a,b,c,d,e),!0;case"pointerover":var f=e.pointerId;nc.set(f,tc(nc.get(f)||null,a,b,c,d,e));return !0;case"gotpointercapture":return f=e.pointerId,oc.set(f,tc(oc.get(f)||null,a,b,c,d,e)),!0;}return !1;}function vc(a){var b=wc(a.target);if(null!==b){var c=Zb(b);if(null!==c)if(b=c.tag,13===b){if(b=$b(c),null!==b){a.blockedOn=b;hc(a.lanePriority,function(){r.unstable_runWithPriority(a.priority,function(){gc(c);});});return;}}else if(3===b&&c.stateNode.hydrate){a.blockedOn=3===c.tag?c.stateNode.containerInfo:null;return;}}a.blockedOn=null;}function xc(a){if(null!==a.blockedOn)return !1;for(var b=a.targetContainers;0<b.length;){var c=yc(a.domEventName,a.eventSystemFlags,b[0],a.nativeEvent);if(null!==c)return b=Cb(c),null!==b&&fc(b),a.blockedOn=c,!1;b.shift();}return !0;}function zc(a,b,c){xc(a)&&c["delete"](b);}function Ac(){for(ic=!1;0<jc.length;){var a=jc[0];if(null!==a.blockedOn){a=Cb(a.blockedOn);null!==a&&ec(a);break;}for(var b=a.targetContainers;0<b.length;){var c=yc(a.domEventName,a.eventSystemFlags,b[0],a.nativeEvent);if(null!==c){a.blockedOn=c;break;}b.shift();}null===a.blockedOn&&jc.shift();}null!==kc&&xc(kc)&&(kc=null);null!==lc&&xc(lc)&&(lc=null);null!==mc&&xc(mc)&&(mc=null);nc.forEach(zc);oc.forEach(zc);}function Bc(a,b){a.blockedOn===b&&(a.blockedOn=null,ic||(ic=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Ac)));}function Cc(a){function b(b){return Bc(b,a);}if(0<jc.length){Bc(jc[0],a);for(var c=1;c<jc.length;c++){var d=jc[c];d.blockedOn===a&&(d.blockedOn=null);}}null!==kc&&Bc(kc,a);null!==lc&&Bc(lc,a);null!==mc&&Bc(mc,a);nc.forEach(b);oc.forEach(b);for(c=0;c<pc.length;c++){d=pc[c],d.blockedOn===a&&(d.blockedOn=null);}for(;0<pc.length&&(c=pc[0],null===c.blockedOn);){vc(c),null===c.blockedOn&&pc.shift();}}function Dc(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;return c;}var Ec={animationend:Dc("Animation","AnimationEnd"),animationiteration:Dc("Animation","AnimationIteration"),animationstart:Dc("Animation","AnimationStart"),transitionend:Dc("Transition","TransitionEnd")},Fc={},Gc={};fa&&(Gc=document.createElement("div").style,"AnimationEvent"in window||(delete Ec.animationend.animation,delete Ec.animationiteration.animation,delete Ec.animationstart.animation),"TransitionEvent"in window||delete Ec.transitionend.transition);function Hc(a){if(Fc[a])return Fc[a];if(!Ec[a])return a;var b=Ec[a],c;for(c in b){if(b.hasOwnProperty(c)&&c in Gc)return Fc[a]=b[c];}return a;}var Ic=Hc("animationend"),Jc=Hc("animationiteration"),Kc=Hc("animationstart"),Lc=Hc("transitionend"),Mc=new Map(),Nc=new Map(),Oc=["abort","abort",Ic,"animationEnd",Jc,"animationIteration",Kc,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart","lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking","seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",Lc,"transitionEnd","waiting","waiting"];function Pc(a,b){for(var c=0;c<a.length;c+=2){var d=a[c],e=a[c+1];e="on"+(e[0].toUpperCase()+e.slice(1));Nc.set(d,b);Mc.set(d,e);da(e,[d]);}}var Qc=r.unstable_now;Qc();var F=8;function Rc(a){if(0!==(1&a))return F=15,1;if(0!==(2&a))return F=14,2;if(0!==(4&a))return F=13,4;var b=24&a;if(0!==b)return F=12,b;if(0!==(a&32))return F=11,32;b=192&a;if(0!==b)return F=10,b;if(0!==(a&256))return F=9,256;b=3584&a;if(0!==b)return F=8,b;if(0!==(a&4096))return F=7,4096;b=4186112&a;if(0!==b)return F=6,b;b=62914560&a;if(0!==b)return F=5,b;if(a&67108864)return F=4,67108864;if(0!==(a&134217728))return F=3,134217728;b=805306368&a;if(0!==b)return F=2,b;if(0!==(1073741824&a))return F=1,1073741824;F=8;return a;}function Sc(a){switch(a){case 99:return 15;case 98:return 10;case 97:case 96:return 8;case 95:return 2;default:return 0;}}function Tc(a){switch(a){case 15:case 14:return 99;case 13:case 12:case 11:case 10:return 98;case 9:case 8:case 7:case 6:case 4:case 5:return 97;case 3:case 2:case 1:return 95;case 0:return 90;default:throw Error(y(358,a));}}function Uc(a,b){var c=a.pendingLanes;if(0===c)return F=0;var d=0,e=0,f=a.expiredLanes,g=a.suspendedLanes,h=a.pingedLanes;if(0!==f)d=f,e=F=15;else if(f=c&134217727,0!==f){var k=f&~g;0!==k?(d=Rc(k),e=F):(h&=f,0!==h&&(d=Rc(h),e=F));}else f=c&~g,0!==f?(d=Rc(f),e=F):0!==h&&(d=Rc(h),e=F);if(0===d)return 0;d=31-Vc(d);d=c&((0>d?0:1<<d)<<1)-1;if(0!==b&&b!==d&&0===(b&g)){Rc(b);if(e<=F)return b;F=e;}b=a.entangledLanes;if(0!==b)for(a=a.entanglements,b&=d;0<b;){c=31-Vc(b),e=1<<c,d|=a[c],b&=~e;}return d;}function Wc(a){a=a.pendingLanes&-1073741825;return 0!==a?a:a&1073741824?1073741824:0;}function Xc(a,b){switch(a){case 15:return 1;case 14:return 2;case 12:return a=Yc(24&~b),0===a?Xc(10,b):a;case 10:return a=Yc(192&~b),0===a?Xc(8,b):a;case 8:return a=Yc(3584&~b),0===a&&(a=Yc(4186112&~b),0===a&&(a=512)),a;case 2:return b=Yc(805306368&~b),0===b&&(b=268435456),b;}throw Error(y(358,a));}function Yc(a){return a&-a;}function Zc(a){for(var b=[],c=0;31>c;c++){b.push(a);}return b;}function $c(a,b,c){a.pendingLanes|=b;var d=b-1;a.suspendedLanes&=d;a.pingedLanes&=d;a=a.eventTimes;b=31-Vc(b);a[b]=c;}var Vc=Math.clz32?Math.clz32:ad,bd=Math.log,cd=Math.LN2;function ad(a){return 0===a?32:31-(bd(a)/cd|0)|0;}var dd=r.unstable_UserBlockingPriority,ed=r.unstable_runWithPriority,fd=!0;function gd(a,b,c,d){Kb||Ib();var e=hd,f=Kb;Kb=!0;try{Hb(e,a,b,c,d);}finally{(Kb=f)||Mb();}}function id(a,b,c,d){ed(dd,hd.bind(null,a,b,c,d));}function hd(a,b,c,d){if(fd){var e;if((e=0===(b&4))&&0<jc.length&&-1<qc.indexOf(a))a=rc(null,a,b,c,d),jc.push(a);else {var f=yc(a,b,c,d);if(null===f)e&&sc(a,d);else {if(e){if(-1<qc.indexOf(a)){a=rc(f,a,b,c,d);jc.push(a);return;}if(uc(f,a,b,c,d))return;sc(a,d);}jd(a,b,d,null,c);}}}}function yc(a,b,c,d){var e=xb(d);e=wc(e);if(null!==e){var f=Zb(e);if(null===f)e=null;else {var g=f.tag;if(13===g){e=$b(f);if(null!==e)return e;e=null;}else if(3===g){if(f.stateNode.hydrate)return 3===f.tag?f.stateNode.containerInfo:null;e=null;}else f!==e&&(e=null);}}jd(a,b,d,e,c);return null;}var kd=null,ld=null,md=null;function nd(){if(md)return md;var a,b=ld,c=b.length,d,e="value"in kd?kd.value:kd.textContent,f=e.length;for(a=0;a<c&&b[a]===e[a];a++){}var g=c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++){}return md=e.slice(a,1<d?1-d:void 0);}function od(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0;}function pd(){return !0;}function qd(){return !1;}function rd(a){function b(b,d,e,f,g){this._reactName=b;this._targetInst=e;this.type=d;this.nativeEvent=f;this.target=g;this.currentTarget=null;for(var c in a){a.hasOwnProperty(c)&&(b=a[c],this[c]=b?b(f):f[c]);}this.isDefaultPrevented=(null!=f.defaultPrevented?f.defaultPrevented:!1===f.returnValue)?pd:qd;this.isPropagationStopped=qd;return this;}m(b.prototype,{preventDefault:function preventDefault(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&(a.returnValue=!1),this.isDefaultPrevented=pd);},stopPropagation:function stopPropagation(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=pd);},persist:function persist(){},isPersistent:pd});return b;}var sd={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function timeStamp(a){return a.timeStamp||Date.now();},defaultPrevented:0,isTrusted:0},td=rd(sd),ud=m({},sd,{view:0,detail:0}),vd=rd(ud),wd,xd,yd,Ad=m({},ud,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zd,button:0,buttons:0,relatedTarget:function relatedTarget(a){return void 0===a.relatedTarget?a.fromElement===a.srcElement?a.toElement:a.fromElement:a.relatedTarget;},movementX:function movementX(a){if("movementX"in a)return a.movementX;a!==yd&&(yd&&"mousemove"===a.type?(wd=a.screenX-yd.screenX,xd=a.screenY-yd.screenY):xd=wd=0,yd=a);return wd;},movementY:function movementY(a){return "movementY"in a?a.movementY:xd;}}),Bd=rd(Ad),Cd=m({},Ad,{dataTransfer:0}),Dd=rd(Cd),Ed=m({},ud,{relatedTarget:0}),Fd=rd(Ed),Gd=m({},sd,{animationName:0,elapsedTime:0,pseudoElement:0}),Hd=rd(Gd),Id=m({},sd,{clipboardData:function clipboardData(a){return "clipboardData"in a?a.clipboardData:window.clipboardData;}}),Jd=rd(Id),Kd=m({},sd,{data:0}),Ld=rd(Kd),Md={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Nd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Od={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pd(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=Od[a])?!!b[a]:!1;}function zd(){return Pd;}var Qd=m({},ud,{key:function key(a){if(a.key){var b=Md[a.key]||a.key;if("Unidentified"!==b)return b;}return "keypress"===a.type?(a=od(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?Nd[a.keyCode]||"Unidentified":"";},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zd,charCode:function charCode(a){return "keypress"===a.type?od(a):0;},keyCode:function keyCode(a){return "keydown"===a.type||"keyup"===a.type?a.keyCode:0;},which:function which(a){return "keypress"===a.type?od(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0;}}),Rd=rd(Qd),Sd=m({},Ad,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Td=rd(Sd),Ud=m({},ud,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zd}),Vd=rd(Ud),Wd=m({},sd,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xd=rd(Wd),Yd=m({},Ad,{deltaX:function deltaX(a){return "deltaX"in a?a.deltaX:"wheelDeltaX"in a?-a.wheelDeltaX:0;},deltaY:function deltaY(a){return "deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0;},deltaZ:0,deltaMode:0}),Zd=rd(Yd),$d=[9,13,27,32],ae=fa&&"CompositionEvent"in window,be=null;fa&&"documentMode"in document&&(be=document.documentMode);var ce=fa&&"TextEvent"in window&&!be,de=fa&&(!ae||be&&8<be&&11>=be),ee=String.fromCharCode(32),fe=!1;function ge(a,b){switch(a){case"keyup":return -1!==$d.indexOf(b.keyCode);case"keydown":return 229!==b.keyCode;case"keypress":case"mousedown":case"focusout":return !0;default:return !1;}}function he(a){a=a.detail;return "object"===_typeof$1(a)&&"data"in a?a.data:null;}var ie=!1;function je(a,b){switch(a){case"compositionend":return he(b);case"keypress":if(32!==b.which)return null;fe=!0;return ee;case"textInput":return a=b.data,a===ee&&fe?null:a;default:return null;}}function ke(a,b){if(ie)return "compositionend"===a||!ae&&ge(a,b)?(a=nd(),md=ld=kd=null,ie=!1,a):null;switch(a){case"paste":return null;case"keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b["char"]&&1<b["char"].length)return b["char"];if(b.which)return String.fromCharCode(b.which);}return null;case"compositionend":return de&&"ko"!==b.locale?null:b.data;default:return null;}}var le={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function me(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return "input"===b?!!le[a.type]:"textarea"===b?!0:!1;}function ne(a,b,c,d){Eb(d);b=oe(b,"onChange");0<b.length&&(c=new td("onChange","change",null,c,d),a.push({event:c,listeners:b}));}var pe=null,qe=null;function re(a){se(a,0);}function te(a){var b=ue(a);if(Wa(b))return a;}function ve(a,b){if("change"===a)return b;}var we=!1;if(fa){var xe;if(fa){var ye=("oninput"in document);if(!ye){var ze=document.createElement("div");ze.setAttribute("oninput","return;");ye="function"===typeof ze.oninput;}xe=ye;}else xe=!1;we=xe&&(!document.documentMode||9<document.documentMode);}function Ae(){pe&&(pe.detachEvent("onpropertychange",Be),qe=pe=null);}function Be(a){if("value"===a.propertyName&&te(qe)){var b=[];ne(b,qe,a,xb(a));a=re;if(Kb)a(b);else {Kb=!0;try{Gb(a,b);}finally{Kb=!1,Mb();}}}}function Ce(a,b,c){"focusin"===a?(Ae(),pe=b,qe=c,pe.attachEvent("onpropertychange",Be)):"focusout"===a&&Ae();}function De(a){if("selectionchange"===a||"keyup"===a||"keydown"===a)return te(qe);}function Ee(a,b){if("click"===a)return te(b);}function Fe(a,b){if("input"===a||"change"===a)return te(b);}function Ge(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b;}var He="function"===typeof Object.is?Object.is:Ge,Ie=Object.prototype.hasOwnProperty;function Je(a,b){if(He(a,b))return !0;if("object"!==_typeof$1(a)||null===a||"object"!==_typeof$1(b)||null===b)return !1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return !1;for(d=0;d<c.length;d++){if(!Ie.call(b,c[d])||!He(a[c[d]],b[c[d]]))return !1;}return !0;}function Ke(a){for(;a&&a.firstChild;){a=a.firstChild;}return a;}function Le(a,b){var c=Ke(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;if(a<=b&&d>=b)return {node:c,offset:b-a};a=d;}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a;}c=c.parentNode;}c=void 0;}c=Ke(c);}}function Me(a,b){return a&&b?a===b?!0:a&&3===a.nodeType?!1:b&&3===b.nodeType?Me(a,b.parentNode):"contains"in a?a.contains(b):a.compareDocumentPosition?!!(a.compareDocumentPosition(b)&16):!1:!1;}function Ne(){for(var a=window,b=Xa();b instanceof a.HTMLIFrameElement;){try{var c="string"===typeof b.contentWindow.location.href;}catch(d){c=!1;}if(c)a=b.contentWindow;else break;b=Xa(a.document);}return b;}function Oe(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&("text"===a.type||"search"===a.type||"tel"===a.type||"url"===a.type||"password"===a.type)||"textarea"===b||"true"===a.contentEditable);}var Pe=fa&&"documentMode"in document&&11>=document.documentMode,Qe=null,Re=null,Se=null,Te=!1;function Ue(a,b,c){var d=c.window===c?c.document:9===c.nodeType?c:c.ownerDocument;Te||null==Qe||Qe!==Xa(d)||(d=Qe,"selectionStart"in d&&Oe(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),Se&&Je(Se,d)||(Se=d,d=oe(Re,"onSelect"),0<d.length&&(b=new td("onSelect","select",null,b,c),a.push({event:b,listeners:d}),b.target=Qe)));}Pc("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),0);Pc("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1);Pc(Oc,2);for(var Ve="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),We=0;We<Ve.length;We++){Nc.set(Ve[We],0);}ea("onMouseEnter",["mouseout","mouseover"]);ea("onMouseLeave",["mouseout","mouseover"]);ea("onPointerEnter",["pointerout","pointerover"]);ea("onPointerLeave",["pointerout","pointerover"]);da("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));da("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));da("onBeforeInput",["compositionend","keypress","textInput","paste"]);da("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));da("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));da("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xe="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ye=new Set("cancel close invalid load scroll toggle".split(" ").concat(Xe));function Ze(a,b,c){var d=a.type||"unknown-event";a.currentTarget=c;Yb(d,b,void 0,a);a.currentTarget=null;}function se(a,b){b=0!==(b&4);for(var c=0;c<a.length;c++){var d=a[c],e=d.event;d=d.listeners;a:{var f=void 0;if(b)for(var g=d.length-1;0<=g;g--){var h=d[g],k=h.instance,l=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;Ze(e,h,l);f=k;}else for(g=0;g<d.length;g++){h=d[g];k=h.instance;l=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;Ze(e,h,l);f=k;}}}if(Ub)throw a=Vb,Ub=!1,Vb=null,a;}function G(a,b){var c=$e(b),d=a+"__bubble";c.has(d)||(af(b,a,2,!1),c.add(d));}var bf="_reactListening"+Math.random().toString(36).slice(2);function cf(a){a[bf]||(a[bf]=!0,ba.forEach(function(b){Ye.has(b)||df(b,!1,a,null);df(b,!0,a,null);}));}function df(a,b,c,d){var e=4<arguments.length&&void 0!==arguments[4]?arguments[4]:0,f=c;"selectionchange"===a&&9!==c.nodeType&&(f=c.ownerDocument);if(null!==d&&!b&&Ye.has(a)){if("scroll"!==a)return;e|=2;f=d;}var g=$e(f),h=a+"__"+(b?"capture":"bubble");g.has(h)||(b&&(e|=4),af(f,a,e,b),g.add(h));}function af(a,b,c,d){var e=Nc.get(b);switch(void 0===e?2:e){case 0:e=gd;break;case 1:e=id;break;default:e=hd;}c=e.bind(null,b,c,a);e=void 0;!Pb||"touchstart"!==b&&"touchmove"!==b&&"wheel"!==b||(e=!0);d?void 0!==e?a.addEventListener(b,c,{capture:!0,passive:e}):a.addEventListener(b,c,!0):void 0!==e?a.addEventListener(b,c,{passive:e}):a.addEventListener(b,c,!1);}function jd(a,b,c,d,e){var f=d;if(0===(b&1)&&0===(b&2)&&null!==d)a:for(;;){if(null===d)return;var g=d.tag;if(3===g||4===g){var h=d.stateNode.containerInfo;if(h===e||8===h.nodeType&&h.parentNode===e)break;if(4===g)for(g=d["return"];null!==g;){var k=g.tag;if(3===k||4===k)if(k=g.stateNode.containerInfo,k===e||8===k.nodeType&&k.parentNode===e)return;g=g["return"];}for(;null!==h;){g=wc(h);if(null===g)return;k=g.tag;if(5===k||6===k){d=f=g;continue a;}h=h.parentNode;}}d=d["return"];}Nb(function(){var d=f,e=xb(c),g=[];a:{var h=Mc.get(a);if(void 0!==h){var k=td,x=a;switch(a){case"keypress":if(0===od(c))break a;case"keydown":case"keyup":k=Rd;break;case"focusin":x="focus";k=Fd;break;case"focusout":x="blur";k=Fd;break;case"beforeblur":case"afterblur":k=Fd;break;case"click":if(2===c.button)break a;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=Bd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=Dd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=Vd;break;case Ic:case Jc:case Kc:k=Hd;break;case Lc:k=Xd;break;case"scroll":k=vd;break;case"wheel":k=Zd;break;case"copy":case"cut":case"paste":k=Jd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=Td;}var w=0!==(b&4),z=!w&&"scroll"===a,u=w?null!==h?h+"Capture":null:h;w=[];for(var t=d,q;null!==t;){q=t;var v=q.stateNode;5===q.tag&&null!==v&&(q=v,null!==u&&(v=Ob(t,u),null!=v&&w.push(ef(t,v,q))));if(z)break;t=t["return"];}0<w.length&&(h=new k(h,x,null,c,e),g.push({event:h,listeners:w}));}}if(0===(b&7)){a:{h="mouseover"===a||"pointerover"===a;k="mouseout"===a||"pointerout"===a;if(h&&0===(b&16)&&(x=c.relatedTarget||c.fromElement)&&(wc(x)||x[ff]))break a;if(k||h){h=e.window===e?e:(h=e.ownerDocument)?h.defaultView||h.parentWindow:window;if(k){if(x=c.relatedTarget||c.toElement,k=d,x=x?wc(x):null,null!==x&&(z=Zb(x),x!==z||5!==x.tag&&6!==x.tag))x=null;}else k=null,x=d;if(k!==x){w=Bd;v="onMouseLeave";u="onMouseEnter";t="mouse";if("pointerout"===a||"pointerover"===a)w=Td,v="onPointerLeave",u="onPointerEnter",t="pointer";z=null==k?h:ue(k);q=null==x?h:ue(x);h=new w(v,t+"leave",k,c,e);h.target=z;h.relatedTarget=q;v=null;wc(e)===d&&(w=new w(u,t+"enter",x,c,e),w.target=q,w.relatedTarget=z,v=w);z=v;if(k&&x)b:{w=k;u=x;t=0;for(q=w;q;q=gf(q)){t++;}q=0;for(v=u;v;v=gf(v)){q++;}for(;0<t-q;){w=gf(w),t--;}for(;0<q-t;){u=gf(u),q--;}for(;t--;){if(w===u||null!==u&&w===u.alternate)break b;w=gf(w);u=gf(u);}w=null;}else w=null;null!==k&&hf(g,h,k,w,!1);null!==x&&null!==z&&hf(g,z,x,w,!0);}}}a:{h=d?ue(d):window;k=h.nodeName&&h.nodeName.toLowerCase();if("select"===k||"input"===k&&"file"===h.type)var J=ve;else if(me(h)){if(we)J=Fe;else {J=De;var K=Ce;}}else (k=h.nodeName)&&"input"===k.toLowerCase()&&("checkbox"===h.type||"radio"===h.type)&&(J=Ee);if(J&&(J=J(a,d))){ne(g,J,c,e);break a;}K&&K(a,h,d);"focusout"===a&&(K=h._wrapperState)&&K.controlled&&"number"===h.type&&bb(h,"number",h.value);}K=d?ue(d):window;switch(a){case"focusin":if(me(K)||"true"===K.contentEditable)Qe=K,Re=d,Se=null;break;case"focusout":Se=Re=Qe=null;break;case"mousedown":Te=!0;break;case"contextmenu":case"mouseup":case"dragend":Te=!1;Ue(g,c,e);break;case"selectionchange":if(Pe)break;case"keydown":case"keyup":Ue(g,c,e);}var Q;if(ae)b:{switch(a){case"compositionstart":var L="onCompositionStart";break b;case"compositionend":L="onCompositionEnd";break b;case"compositionupdate":L="onCompositionUpdate";break b;}L=void 0;}else ie?ge(a,c)&&(L="onCompositionEnd"):"keydown"===a&&229===c.keyCode&&(L="onCompositionStart");L&&(de&&"ko"!==c.locale&&(ie||"onCompositionStart"!==L?"onCompositionEnd"===L&&ie&&(Q=nd()):(kd=e,ld="value"in kd?kd.value:kd.textContent,ie=!0)),K=oe(d,L),0<K.length&&(L=new Ld(L,a,null,c,e),g.push({event:L,listeners:K}),Q?L.data=Q:(Q=he(c),null!==Q&&(L.data=Q))));if(Q=ce?je(a,c):ke(a,c))d=oe(d,"onBeforeInput"),0<d.length&&(e=new Ld("onBeforeInput","beforeinput",null,c,e),g.push({event:e,listeners:d}),e.data=Q);}se(g,b);});}function ef(a,b,c){return {instance:a,listener:b,currentTarget:c};}function oe(a,b){for(var c=b+"Capture",d=[];null!==a;){var e=a,f=e.stateNode;5===e.tag&&null!==f&&(e=f,f=Ob(a,c),null!=f&&d.unshift(ef(a,f,e)),f=Ob(a,b),null!=f&&d.push(ef(a,f,e)));a=a["return"];}return d;}function gf(a){if(null===a)return null;do{a=a["return"];}while(a&&5!==a.tag);return a?a:null;}function hf(a,b,c,d,e){for(var f=b._reactName,g=[];null!==c&&c!==d;){var h=c,k=h.alternate,l=h.stateNode;if(null!==k&&k===d)break;5===h.tag&&null!==l&&(h=l,e?(k=Ob(c,f),null!=k&&g.unshift(ef(c,k,h))):e||(k=Ob(c,f),null!=k&&g.push(ef(c,k,h))));c=c["return"];}0!==g.length&&a.push({event:b,listeners:g});}function jf(){}var kf=null,lf=null;function mf(a,b){switch(a){case"button":case"input":case"select":case"textarea":return !!b.autoFocus;}return !1;}function nf(a,b){return "textarea"===a||"option"===a||"noscript"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===_typeof$1(b.dangerouslySetInnerHTML)&&null!==b.dangerouslySetInnerHTML&&null!=b.dangerouslySetInnerHTML.__html;}var of="function"===typeof setTimeout?setTimeout:void 0,pf="function"===typeof clearTimeout?clearTimeout:void 0;function qf(a){1===a.nodeType?a.textContent="":9===a.nodeType&&(a=a.body,null!=a&&(a.textContent=""));}function rf(a){for(;null!=a;a=a.nextSibling){var b=a.nodeType;if(1===b||3===b)break;}return a;}function sf(a){a=a.previousSibling;for(var b=0;a;){if(8===a.nodeType){var c=a.data;if("$"===c||"$!"===c||"$?"===c){if(0===b)return a;b--;}else "/$"===c&&b++;}a=a.previousSibling;}return null;}var tf=0;function uf(a){return {$$typeof:Ga,toString:a,valueOf:a};}var vf=Math.random().toString(36).slice(2),wf="__reactFiber$"+vf,xf="__reactProps$"+vf,ff="__reactContainer$"+vf,yf="__reactEvents$"+vf;function wc(a){var b=a[wf];if(b)return b;for(var c=a.parentNode;c;){if(b=c[ff]||c[wf]){c=b.alternate;if(null!==b.child||null!==c&&null!==c.child)for(a=sf(a);null!==a;){if(c=a[wf])return c;a=sf(a);}return b;}a=c;c=a.parentNode;}return null;}function Cb(a){a=a[wf]||a[ff];return !a||5!==a.tag&&6!==a.tag&&13!==a.tag&&3!==a.tag?null:a;}function ue(a){if(5===a.tag||6===a.tag)return a.stateNode;throw Error(y(33));}function Db(a){return a[xf]||null;}function $e(a){var b=a[yf];void 0===b&&(b=a[yf]=new Set());return b;}var zf=[],Af=-1;function Bf(a){return {current:a};}function H(a){0>Af||(a.current=zf[Af],zf[Af]=null,Af--);}function I(a,b){Af++;zf[Af]=a.current;a.current=b;}var Cf={},M=Bf(Cf),N=Bf(!1),Df=Cf;function Ef(a,b){var c=a.type.contextTypes;if(!c)return Cf;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c){e[f]=b[f];}d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e;}function Ff(a){a=a.childContextTypes;return null!==a&&void 0!==a;}function Gf(){H(N);H(M);}function Hf(a,b,c){if(M.current!==Cf)throw Error(y(168));I(M,b);I(N,c);}function If(a,b,c){var d=a.stateNode;a=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d){if(!(e in a))throw Error(y(108,Ra(b)||"Unknown",e));}return m({},c,d);}function Jf(a){a=(a=a.stateNode)&&a.__reactInternalMemoizedMergedChildContext||Cf;Df=M.current;I(M,a);I(N,N.current);return !0;}function Kf(a,b,c){var d=a.stateNode;if(!d)throw Error(y(169));c?(a=If(a,b,Df),d.__reactInternalMemoizedMergedChildContext=a,H(N),H(M),I(M,a)):H(N);I(N,c);}var Lf=null,Mf=null,Nf=r.unstable_runWithPriority,Of=r.unstable_scheduleCallback,Pf=r.unstable_cancelCallback,Qf=r.unstable_shouldYield,Rf=r.unstable_requestPaint,Sf=r.unstable_now,Tf=r.unstable_getCurrentPriorityLevel,Uf=r.unstable_ImmediatePriority,Vf=r.unstable_UserBlockingPriority,Wf=r.unstable_NormalPriority,Xf=r.unstable_LowPriority,Yf=r.unstable_IdlePriority,Zf={},$f=void 0!==Rf?Rf:function(){},ag=null,bg=null,cg=!1,dg=Sf(),O=1E4>dg?Sf:function(){return Sf()-dg;};function eg(){switch(Tf()){case Uf:return 99;case Vf:return 98;case Wf:return 97;case Xf:return 96;case Yf:return 95;default:throw Error(y(332));}}function fg(a){switch(a){case 99:return Uf;case 98:return Vf;case 97:return Wf;case 96:return Xf;case 95:return Yf;default:throw Error(y(332));}}function gg(a,b){a=fg(a);return Nf(a,b);}function hg(a,b,c){a=fg(a);return Of(a,b,c);}function ig(){if(null!==bg){var a=bg;bg=null;Pf(a);}jg();}function jg(){if(!cg&&null!==ag){cg=!0;var a=0;try{var b=ag;gg(99,function(){for(;a<b.length;a++){var c=b[a];do{c=c(!0);}while(null!==c);}});ag=null;}catch(c){throw null!==ag&&(ag=ag.slice(a+1)),Of(Uf,ig),c;}finally{cg=!1;}}}var kg=ra.ReactCurrentBatchConfig;function lg(a,b){if(a&&a.defaultProps){b=m({},b);a=a.defaultProps;for(var c in a){void 0===b[c]&&(b[c]=a[c]);}return b;}return b;}var mg=Bf(null),ng=null,og=null,pg=null;function qg(){pg=og=ng=null;}function rg(a){var b=mg.current;H(mg);a.type._context._currentValue=b;}function sg(a,b){for(;null!==a;){var c=a.alternate;if((a.childLanes&b)===b){if(null===c||(c.childLanes&b)===b)break;else c.childLanes|=b;}else a.childLanes|=b,null!==c&&(c.childLanes|=b);a=a["return"];}}function tg(a,b){ng=a;pg=og=null;a=a.dependencies;null!==a&&null!==a.firstContext&&(0!==(a.lanes&b)&&(ug=!0),a.firstContext=null);}function vg(a,b){if(pg!==a&&!1!==b&&0!==b){if("number"!==typeof b||1073741823===b)pg=a,b=1073741823;b={context:a,observedBits:b,next:null};if(null===og){if(null===ng)throw Error(y(308));og=b;ng.dependencies={lanes:0,firstContext:b,responders:null};}else og=og.next=b;}return a._currentValue;}var wg=!1;function xg(a){a.updateQueue={baseState:a.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null},effects:null};}function yg(a,b){a=a.updateQueue;b.updateQueue===a&&(b.updateQueue={baseState:a.baseState,firstBaseUpdate:a.firstBaseUpdate,lastBaseUpdate:a.lastBaseUpdate,shared:a.shared,effects:a.effects});}function zg(a,b){return {eventTime:a,lane:b,tag:0,payload:null,callback:null,next:null};}function Ag(a,b){a=a.updateQueue;if(null!==a){a=a.shared;var c=a.pending;null===c?b.next=b:(b.next=c.next,c.next=b);a.pending=b;}}function Bg(a,b){var c=a.updateQueue,d=a.alternate;if(null!==d&&(d=d.updateQueue,c===d)){var e=null,f=null;c=c.firstBaseUpdate;if(null!==c){do{var g={eventTime:c.eventTime,lane:c.lane,tag:c.tag,payload:c.payload,callback:c.callback,next:null};null===f?e=f=g:f=f.next=g;c=c.next;}while(null!==c);null===f?e=f=b:f=f.next=b;}else e=f=b;c={baseState:d.baseState,firstBaseUpdate:e,lastBaseUpdate:f,shared:d.shared,effects:d.effects};a.updateQueue=c;return;}a=c.lastBaseUpdate;null===a?c.firstBaseUpdate=b:a.next=b;c.lastBaseUpdate=b;}function Cg(a,b,c,d){var e=a.updateQueue;wg=!1;var f=e.firstBaseUpdate,g=e.lastBaseUpdate,h=e.shared.pending;if(null!==h){e.shared.pending=null;var k=h,l=k.next;k.next=null;null===g?f=l:g.next=l;g=k;var n=a.alternate;if(null!==n){n=n.updateQueue;var A=n.lastBaseUpdate;A!==g&&(null===A?n.firstBaseUpdate=l:A.next=l,n.lastBaseUpdate=k);}}if(null!==f){A=e.baseState;g=0;n=l=k=null;do{h=f.lane;var p=f.eventTime;if((d&h)===h){null!==n&&(n=n.next={eventTime:p,lane:0,tag:f.tag,payload:f.payload,callback:f.callback,next:null});a:{var C=a,x=f;h=b;p=c;switch(x.tag){case 1:C=x.payload;if("function"===typeof C){A=C.call(p,A,h);break a;}A=C;break a;case 3:C.flags=C.flags&-4097|64;case 0:C=x.payload;h="function"===typeof C?C.call(p,A,h):C;if(null===h||void 0===h)break a;A=m({},A,h);break a;case 2:wg=!0;}}null!==f.callback&&(a.flags|=32,h=e.effects,null===h?e.effects=[f]:h.push(f));}else p={eventTime:p,lane:h,tag:f.tag,payload:f.payload,callback:f.callback,next:null},null===n?(l=n=p,k=A):n=n.next=p,g|=h;f=f.next;if(null===f)if(h=e.shared.pending,null===h)break;else f=h.next,h.next=null,e.lastBaseUpdate=h,e.shared.pending=null;}while(1);null===n&&(k=A);e.baseState=k;e.firstBaseUpdate=l;e.lastBaseUpdate=n;Dg|=g;a.lanes=g;a.memoizedState=A;}}function Eg(a,b,c){a=b.effects;b.effects=null;if(null!==a)for(b=0;b<a.length;b++){var d=a[b],e=d.callback;if(null!==e){d.callback=null;d=c;if("function"!==typeof e)throw Error(y(191,e));e.call(d);}}}var Fg=new aa.Component().refs;function Gg(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:m({},b,c);a.memoizedState=c;0===a.lanes&&(a.updateQueue.baseState=c);}var Kg={isMounted:function isMounted(a){return (a=a._reactInternals)?Zb(a)===a:!1;},enqueueSetState:function enqueueSetState(a,b,c){a=a._reactInternals;var d=Hg(),e=Ig(a),f=zg(d,e);f.payload=b;void 0!==c&&null!==c&&(f.callback=c);Ag(a,f);Jg(a,e,d);},enqueueReplaceState:function enqueueReplaceState(a,b,c){a=a._reactInternals;var d=Hg(),e=Ig(a),f=zg(d,e);f.tag=1;f.payload=b;void 0!==c&&null!==c&&(f.callback=c);Ag(a,f);Jg(a,e,d);},enqueueForceUpdate:function enqueueForceUpdate(a,b){a=a._reactInternals;var c=Hg(),d=Ig(a),e=zg(c,d);e.tag=2;void 0!==b&&null!==b&&(e.callback=b);Ag(a,e);Jg(a,d,c);}};function Lg(a,b,c,d,e,f,g){a=a.stateNode;return "function"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,f,g):b.prototype&&b.prototype.isPureReactComponent?!Je(c,d)||!Je(e,f):!0;}function Mg(a,b,c){var d=!1,e=Cf;var f=b.contextType;"object"===_typeof$1(f)&&null!==f?f=vg(f):(e=Ff(b)?Df:M.current,d=b.contextTypes,f=(d=null!==d&&void 0!==d)?Ef(a,e):Cf);b=new b(c,f);a.memoizedState=null!==b.state&&void 0!==b.state?b.state:null;b.updater=Kg;a.stateNode=b;b._reactInternals=a;d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=e,a.__reactInternalMemoizedMaskedChildContext=f);return b;}function Ng(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&Kg.enqueueReplaceState(b,b.state,null);}function Og(a,b,c,d){var e=a.stateNode;e.props=c;e.state=a.memoizedState;e.refs=Fg;xg(a);var f=b.contextType;"object"===_typeof$1(f)&&null!==f?e.context=vg(f):(f=Ff(b)?Df:M.current,e.context=Ef(a,f));Cg(a,c,e,d);e.state=a.memoizedState;f=b.getDerivedStateFromProps;"function"===typeof f&&(Gg(a,b,f,c),e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||"function"!==typeof e.UNSAFE_componentWillMount&&"function"!==typeof e.componentWillMount||(b=e.state,"function"===typeof e.componentWillMount&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&Kg.enqueueReplaceState(e,e.state,null),Cg(a,c,e,d),e.state=a.memoizedState);"function"===typeof e.componentDidMount&&(a.flags|=4);}var Pg=Array.isArray;function Qg(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==_typeof$1(a)){if(c._owner){c=c._owner;if(c){if(1!==c.tag)throw Error(y(309));var d=c.stateNode;}if(!d)throw Error(y(147,a));var e=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===e)return b.ref;b=function b(a){var b=d.refs;b===Fg&&(b=d.refs={});null===a?delete b[e]:b[e]=a;};b._stringRef=e;return b;}if("string"!==typeof a)throw Error(y(284));if(!c._owner)throw Error(y(290,a));}return a;}function Rg(a,b){if("textarea"!==a.type)throw Error(y(31,"[object Object]"===Object.prototype.toString.call(b)?"object with keys {"+Object.keys(b).join(", ")+"}":b));}function Sg(a){function b(b,c){if(a){var d=b.lastEffect;null!==d?(d.nextEffect=c,b.lastEffect=c):b.firstEffect=b.lastEffect=c;c.nextEffect=null;c.flags=8;}}function c(c,d){if(!a)return null;for(;null!==d;){b(c,d),d=d.sibling;}return null;}function d(a,b){for(a=new Map();null!==b;){null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;}return a;}function e(a,b){a=Tg(a,b);a.index=0;a.sibling=null;return a;}function f(b,c,d){b.index=d;if(!a)return c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.flags=2,c):d;b.flags=2;return c;}function g(b){a&&null===b.alternate&&(b.flags=2);return b;}function h(a,b,c,d){if(null===b||6!==b.tag)return b=Ug(c,a.mode,d),b["return"]=a,b;b=e(b,c);b["return"]=a;return b;}function k(a,b,c,d){if(null!==b&&b.elementType===c.type)return d=e(b,c.props),d.ref=Qg(a,b,c),d["return"]=a,d;d=Vg(c.type,c.key,c.props,null,a.mode,d);d.ref=Qg(a,b,c);d["return"]=a;return d;}function l(a,b,c,d){if(null===b||4!==b.tag||b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==c.implementation)return b=Wg(c,a.mode,d),b["return"]=a,b;b=e(b,c.children||[]);b["return"]=a;return b;}function n(a,b,c,d,f){if(null===b||7!==b.tag)return b=Xg(c,a.mode,d,f),b["return"]=a,b;b=e(b,c);b["return"]=a;return b;}function A(a,b,c){if("string"===typeof b||"number"===typeof b)return b=Ug(""+b,a.mode,c),b["return"]=a,b;if("object"===_typeof$1(b)&&null!==b){switch(b.$$typeof){case sa:return c=Vg(b.type,b.key,b.props,null,a.mode,c),c.ref=Qg(a,null,b),c["return"]=a,c;case ta:return b=Wg(b,a.mode,c),b["return"]=a,b;}if(Pg(b)||La(b))return b=Xg(b,a.mode,c,null),b["return"]=a,b;Rg(a,b);}return null;}function p(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c||"number"===typeof c)return null!==e?null:h(a,b,""+c,d);if("object"===_typeof$1(c)&&null!==c){switch(c.$$typeof){case sa:return c.key===e?c.type===ua?n(a,b,c.props.children,d,e):k(a,b,c,d):null;case ta:return c.key===e?l(a,b,c,d):null;}if(Pg(c)||La(c))return null!==e?null:n(a,b,c,d,null);Rg(a,c);}return null;}function C(a,b,c,d,e){if("string"===typeof d||"number"===typeof d)return a=a.get(c)||null,h(b,a,""+d,e);if("object"===_typeof$1(d)&&null!==d){switch(d.$$typeof){case sa:return a=a.get(null===d.key?c:d.key)||null,d.type===ua?n(b,a,d.props.children,e,d.key):k(b,a,d,e);case ta:return a=a.get(null===d.key?c:d.key)||null,l(b,a,d,e);}if(Pg(d)||La(d))return a=a.get(c)||null,n(b,a,d,e,null);Rg(b,d);}return null;}function x(e,g,h,k){for(var l=null,t=null,u=g,z=g=0,q=null;null!==u&&z<h.length;z++){u.index>z?(q=u,u=null):q=u.sibling;var n=p(e,u,h[z],k);if(null===n){null===u&&(u=q);break;}a&&u&&null===n.alternate&&b(e,u);g=f(n,g,z);null===t?l=n:t.sibling=n;t=n;u=q;}if(z===h.length)return c(e,u),l;if(null===u){for(;z<h.length;z++){u=A(e,h[z],k),null!==u&&(g=f(u,g,z),null===t?l=u:t.sibling=u,t=u);}return l;}for(u=d(e,u);z<h.length;z++){q=C(u,e,z,h[z],k),null!==q&&(a&&null!==q.alternate&&u["delete"](null===q.key?z:q.key),g=f(q,g,z),null===t?l=q:t.sibling=q,t=q);}a&&u.forEach(function(a){return b(e,a);});return l;}function w(e,g,h,k){var l=La(h);if("function"!==typeof l)throw Error(y(150));h=l.call(h);if(null==h)throw Error(y(151));for(var t=l=null,u=g,z=g=0,q=null,n=h.next();null!==u&&!n.done;z++,n=h.next()){u.index>z?(q=u,u=null):q=u.sibling;var w=p(e,u,n.value,k);if(null===w){null===u&&(u=q);break;}a&&u&&null===w.alternate&&b(e,u);g=f(w,g,z);null===t?l=w:t.sibling=w;t=w;u=q;}if(n.done)return c(e,u),l;if(null===u){for(;!n.done;z++,n=h.next()){n=A(e,n.value,k),null!==n&&(g=f(n,g,z),null===t?l=n:t.sibling=n,t=n);}return l;}for(u=d(e,u);!n.done;z++,n=h.next()){n=C(u,e,z,n.value,k),null!==n&&(a&&null!==n.alternate&&u["delete"](null===n.key?z:n.key),g=f(n,g,z),null===t?l=n:t.sibling=n,t=n);}a&&u.forEach(function(a){return b(e,a);});return l;}return function(a,d,f,h){var k="object"===_typeof$1(f)&&null!==f&&f.type===ua&&null===f.key;k&&(f=f.props.children);var l="object"===_typeof$1(f)&&null!==f;if(l)switch(f.$$typeof){case sa:a:{l=f.key;for(k=d;null!==k;){if(k.key===l){switch(k.tag){case 7:if(f.type===ua){c(a,k.sibling);d=e(k,f.props.children);d["return"]=a;a=d;break a;}break;default:if(k.elementType===f.type){c(a,k.sibling);d=e(k,f.props);d.ref=Qg(a,k,f);d["return"]=a;a=d;break a;}}c(a,k);break;}else b(a,k);k=k.sibling;}f.type===ua?(d=Xg(f.props.children,a.mode,h,f.key),d["return"]=a,a=d):(h=Vg(f.type,f.key,f.props,null,a.mode,h),h.ref=Qg(a,d,f),h["return"]=a,a=h);}return g(a);case ta:a:{for(k=f.key;null!==d;){if(d.key===k){if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[]);d["return"]=a;a=d;break a;}else {c(a,d);break;}}else b(a,d);d=d.sibling;}d=Wg(f,a.mode,h);d["return"]=a;a=d;}return g(a);}if("string"===typeof f||"number"===typeof f)return f=""+f,null!==d&&6===d.tag?(c(a,d.sibling),d=e(d,f),d["return"]=a,a=d):(c(a,d),d=Ug(f,a.mode,h),d["return"]=a,a=d),g(a);if(Pg(f))return x(a,d,f,h);if(La(f))return w(a,d,f,h);l&&Rg(a,f);if("undefined"===typeof f&&!k)switch(a.tag){case 1:case 22:case 0:case 11:case 15:throw Error(y(152,Ra(a.type)||"Component"));}return c(a,d);};}var Yg=Sg(!0),Zg=Sg(!1),$g={},ah=Bf($g),bh=Bf($g),ch=Bf($g);function dh(a){if(a===$g)throw Error(y(174));return a;}function eh(a,b){I(ch,b);I(bh,a);I(ah,$g);a=b.nodeType;switch(a){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:mb(null,"");break;default:a=8===a?b.parentNode:b,b=a.namespaceURI||null,a=a.tagName,b=mb(b,a);}H(ah);I(ah,b);}function fh(){H(ah);H(bh);H(ch);}function gh(a){dh(ch.current);var b=dh(ah.current);var c=mb(b,a.type);b!==c&&(I(bh,a),I(ah,c));}function hh(a){bh.current===a&&(H(ah),H(bh));}var P=Bf(0);function ih(a){for(var b=a;null!==b;){if(13===b.tag){var c=b.memoizedState;if(null!==c&&(c=c.dehydrated,null===c||"$?"===c.data||"$!"===c.data))return b;}else if(19===b.tag&&void 0!==b.memoizedProps.revealOrder){if(0!==(b.flags&64))return b;}else if(null!==b.child){b.child["return"]=b;b=b.child;continue;}if(b===a)break;for(;null===b.sibling;){if(null===b["return"]||b["return"]===a)return null;b=b["return"];}b.sibling["return"]=b["return"];b=b.sibling;}return null;}var jh=null,kh=null,lh=!1;function mh(a,b){var c=nh(5,null,null,0);c.elementType="DELETED";c.type="DELETED";c.stateNode=b;c["return"]=a;c.flags=8;null!==a.lastEffect?(a.lastEffect.nextEffect=c,a.lastEffect=c):a.firstEffect=a.lastEffect=c;}function oh(a,b){switch(a.tag){case 5:var c=a.type;b=1!==b.nodeType||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b;return null!==b?(a.stateNode=b,!0):!1;case 6:return b=""===a.pendingProps||3!==b.nodeType?null:b,null!==b?(a.stateNode=b,!0):!1;case 13:return !1;default:return !1;}}function ph(a){if(lh){var b=kh;if(b){var c=b;if(!oh(a,b)){b=rf(c.nextSibling);if(!b||!oh(a,b)){a.flags=a.flags&-1025|2;lh=!1;jh=a;return;}mh(jh,c);}jh=a;kh=rf(b.firstChild);}else a.flags=a.flags&-1025|2,lh=!1,jh=a;}}function qh(a){for(a=a["return"];null!==a&&5!==a.tag&&3!==a.tag&&13!==a.tag;){a=a["return"];}jh=a;}function rh(a){if(a!==jh)return !1;if(!lh)return qh(a),lh=!0,!1;var b=a.type;if(5!==a.tag||"head"!==b&&"body"!==b&&!nf(b,a.memoizedProps))for(b=kh;b;){mh(a,b),b=rf(b.nextSibling);}qh(a);if(13===a.tag){a=a.memoizedState;a=null!==a?a.dehydrated:null;if(!a)throw Error(y(317));a:{a=a.nextSibling;for(b=0;a;){if(8===a.nodeType){var c=a.data;if("/$"===c){if(0===b){kh=rf(a.nextSibling);break a;}b--;}else "$"!==c&&"$!"!==c&&"$?"!==c||b++;}a=a.nextSibling;}kh=null;}}else kh=jh?rf(a.stateNode.nextSibling):null;return !0;}function sh(){kh=jh=null;lh=!1;}var th=[];function uh(){for(var a=0;a<th.length;a++){th[a]._workInProgressVersionPrimary=null;}th.length=0;}var vh=ra.ReactCurrentDispatcher,wh=ra.ReactCurrentBatchConfig,xh=0,R=null,S=null,T=null,yh=!1,zh=!1;function Ah(){throw Error(y(321));}function Bh(a,b){if(null===b)return !1;for(var c=0;c<b.length&&c<a.length;c++){if(!He(a[c],b[c]))return !1;}return !0;}function Ch(a,b,c,d,e,f){xh=f;R=b;b.memoizedState=null;b.updateQueue=null;b.lanes=0;vh.current=null===a||null===a.memoizedState?Dh:Eh;a=c(d,e);if(zh){f=0;do{zh=!1;if(!(25>f))throw Error(y(301));f+=1;T=S=null;b.updateQueue=null;vh.current=Fh;a=c(d,e);}while(zh);}vh.current=Gh;b=null!==S&&null!==S.next;xh=0;T=S=R=null;yh=!1;if(b)throw Error(y(300));return a;}function Hh(){var a={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};null===T?R.memoizedState=T=a:T=T.next=a;return T;}function Ih(){if(null===S){var a=R.alternate;a=null!==a?a.memoizedState:null;}else a=S.next;var b=null===T?R.memoizedState:T.next;if(null!==b)T=b,S=a;else {if(null===a)throw Error(y(310));S=a;a={memoizedState:S.memoizedState,baseState:S.baseState,baseQueue:S.baseQueue,queue:S.queue,next:null};null===T?R.memoizedState=T=a:T=T.next=a;}return T;}function Jh(a,b){return "function"===typeof b?b(a):b;}function Kh(a){var b=Ih(),c=b.queue;if(null===c)throw Error(y(311));c.lastRenderedReducer=a;var d=S,e=d.baseQueue,f=c.pending;if(null!==f){if(null!==e){var g=e.next;e.next=f.next;f.next=g;}d.baseQueue=e=f;c.pending=null;}if(null!==e){e=e.next;d=d.baseState;var h=g=f=null,k=e;do{var l=k.lane;if((xh&l)===l)null!==h&&(h=h.next={lane:0,action:k.action,eagerReducer:k.eagerReducer,eagerState:k.eagerState,next:null}),d=k.eagerReducer===a?k.eagerState:a(d,k.action);else {var n={lane:l,action:k.action,eagerReducer:k.eagerReducer,eagerState:k.eagerState,next:null};null===h?(g=h=n,f=d):h=h.next=n;R.lanes|=l;Dg|=l;}k=k.next;}while(null!==k&&k!==e);null===h?f=d:h.next=g;He(d,b.memoizedState)||(ug=!0);b.memoizedState=d;b.baseState=f;b.baseQueue=h;c.lastRenderedState=d;}return [b.memoizedState,c.dispatch];}function Lh(a){var b=Ih(),c=b.queue;if(null===c)throw Error(y(311));c.lastRenderedReducer=a;var d=c.dispatch,e=c.pending,f=b.memoizedState;if(null!==e){c.pending=null;var g=e=e.next;do{f=a(f,g.action),g=g.next;}while(g!==e);He(f,b.memoizedState)||(ug=!0);b.memoizedState=f;null===b.baseQueue&&(b.baseState=f);c.lastRenderedState=f;}return [f,d];}function Mh(a,b,c){var d=b._getVersion;d=d(b._source);var e=b._workInProgressVersionPrimary;if(null!==e)a=e===d;else if(a=a.mutableReadLanes,a=(xh&a)===a)b._workInProgressVersionPrimary=d,th.push(b);if(a)return c(b._source);th.push(b);throw Error(y(350));}function Nh(a,b,c,d){var e=U;if(null===e)throw Error(y(349));var f=b._getVersion,g=f(b._source),h=vh.current,k=h.useState(function(){return Mh(e,b,c);}),l=k[1],n=k[0];k=T;var A=a.memoizedState,p=A.refs,C=p.getSnapshot,x=A.source;A=A.subscribe;var w=R;a.memoizedState={refs:p,source:b,subscribe:d};h.useEffect(function(){p.getSnapshot=c;p.setSnapshot=l;var a=f(b._source);if(!He(g,a)){a=c(b._source);He(n,a)||(l(a),a=Ig(w),e.mutableReadLanes|=a&e.pendingLanes);a=e.mutableReadLanes;e.entangledLanes|=a;for(var d=e.entanglements,h=a;0<h;){var k=31-Vc(h),v=1<<k;d[k]|=a;h&=~v;}}},[c,b,d]);h.useEffect(function(){return d(b._source,function(){var a=p.getSnapshot,c=p.setSnapshot;try{c(a(b._source));var d=Ig(w);e.mutableReadLanes|=d&e.pendingLanes;}catch(q){c(function(){throw q;});}});},[b,d]);He(C,c)&&He(x,b)&&He(A,d)||(a={pending:null,dispatch:null,lastRenderedReducer:Jh,lastRenderedState:n},a.dispatch=l=Oh.bind(null,R,a),k.queue=a,k.baseQueue=null,n=Mh(e,b,c),k.memoizedState=k.baseState=n);return n;}function Ph(a,b,c){var d=Ih();return Nh(d,a,b,c);}function Qh(a){var b=Hh();"function"===typeof a&&(a=a());b.memoizedState=b.baseState=a;a=b.queue={pending:null,dispatch:null,lastRenderedReducer:Jh,lastRenderedState:a};a=a.dispatch=Oh.bind(null,R,a);return [b.memoizedState,a];}function Rh(a,b,c,d){a={tag:a,create:b,destroy:c,deps:d,next:null};b=R.updateQueue;null===b?(b={lastEffect:null},R.updateQueue=b,b.lastEffect=a.next=a):(c=b.lastEffect,null===c?b.lastEffect=a.next=a:(d=c.next,c.next=a,a.next=d,b.lastEffect=a));return a;}function Sh(a){var b=Hh();a={current:a};return b.memoizedState=a;}function Th(){return Ih().memoizedState;}function Uh(a,b,c,d){var e=Hh();R.flags|=a;e.memoizedState=Rh(1|b,c,void 0,void 0===d?null:d);}function Vh(a,b,c,d){var e=Ih();d=void 0===d?null:d;var f=void 0;if(null!==S){var g=S.memoizedState;f=g.destroy;if(null!==d&&Bh(d,g.deps)){Rh(b,c,f,d);return;}}R.flags|=a;e.memoizedState=Rh(1|b,c,f,d);}function Wh(a,b){return Uh(516,4,a,b);}function Xh(a,b){return Vh(516,4,a,b);}function Yh(a,b){return Vh(4,2,a,b);}function Zh(a,b){if("function"===typeof b)return a=a(),b(a),function(){b(null);};if(null!==b&&void 0!==b)return a=a(),b.current=a,function(){b.current=null;};}function $h(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return Vh(4,2,Zh.bind(null,b,a),c);}function ai(){}function bi(a,b){var c=Ih();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Bh(b,d[1]))return d[0];c.memoizedState=[a,b];return a;}function ci(a,b){var c=Ih();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Bh(b,d[1]))return d[0];a=a();c.memoizedState=[a,b];return a;}function di(a,b){var c=eg();gg(98>c?98:c,function(){a(!0);});gg(97<c?97:c,function(){var c=wh.transition;wh.transition=1;try{a(!1),b();}finally{wh.transition=c;}});}function Oh(a,b,c){var d=Hg(),e=Ig(a),f={lane:e,action:c,eagerReducer:null,eagerState:null,next:null},g=b.pending;null===g?f.next=f:(f.next=g.next,g.next=f);b.pending=f;g=a.alternate;if(a===R||null!==g&&g===R)zh=yh=!0;else {if(0===a.lanes&&(null===g||0===g.lanes)&&(g=b.lastRenderedReducer,null!==g))try{var h=b.lastRenderedState,k=g(h,c);f.eagerReducer=g;f.eagerState=k;if(He(k,h))return;}catch(l){}finally{}Jg(a,e,d);}}var Gh={readContext:vg,useCallback:Ah,useContext:Ah,useEffect:Ah,useImperativeHandle:Ah,useLayoutEffect:Ah,useMemo:Ah,useReducer:Ah,useRef:Ah,useState:Ah,useDebugValue:Ah,useDeferredValue:Ah,useTransition:Ah,useMutableSource:Ah,useOpaqueIdentifier:Ah,unstable_isNewReconciler:!1},Dh={readContext:vg,useCallback:function useCallback(a,b){Hh().memoizedState=[a,void 0===b?null:b];return a;},useContext:vg,useEffect:Wh,useImperativeHandle:function useImperativeHandle(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return Uh(4,2,Zh.bind(null,b,a),c);},useLayoutEffect:function useLayoutEffect(a,b){return Uh(4,2,a,b);},useMemo:function useMemo(a,b){var c=Hh();b=void 0===b?null:b;a=a();c.memoizedState=[a,b];return a;},useReducer:function useReducer(a,b,c){var d=Hh();b=void 0!==c?c(b):b;d.memoizedState=d.baseState=b;a=d.queue={pending:null,dispatch:null,lastRenderedReducer:a,lastRenderedState:b};a=a.dispatch=Oh.bind(null,R,a);return [d.memoizedState,a];},useRef:Sh,useState:Qh,useDebugValue:ai,useDeferredValue:function useDeferredValue(a){var b=Qh(a),c=b[0],d=b[1];Wh(function(){var b=wh.transition;wh.transition=1;try{d(a);}finally{wh.transition=b;}},[a]);return c;},useTransition:function useTransition(){var a=Qh(!1),b=a[0];a=di.bind(null,a[1]);Sh(a);return [a,b];},useMutableSource:function useMutableSource(a,b,c){var d=Hh();d.memoizedState={refs:{getSnapshot:b,setSnapshot:null},source:a,subscribe:c};return Nh(d,a,b,c);},useOpaqueIdentifier:function useOpaqueIdentifier(){if(lh){var a=!1,b=uf(function(){a||(a=!0,c("r:"+(tf++).toString(36)));throw Error(y(355));}),c=Qh(b)[1];0===(R.mode&2)&&(R.flags|=516,Rh(5,function(){c("r:"+(tf++).toString(36));},void 0,null));return b;}b="r:"+(tf++).toString(36);Qh(b);return b;},unstable_isNewReconciler:!1},Eh={readContext:vg,useCallback:bi,useContext:vg,useEffect:Xh,useImperativeHandle:$h,useLayoutEffect:Yh,useMemo:ci,useReducer:Kh,useRef:Th,useState:function useState(){return Kh(Jh);},useDebugValue:ai,useDeferredValue:function useDeferredValue(a){var b=Kh(Jh),c=b[0],d=b[1];Xh(function(){var b=wh.transition;wh.transition=1;try{d(a);}finally{wh.transition=b;}},[a]);return c;},useTransition:function useTransition(){var a=Kh(Jh)[0];return [Th().current,a];},useMutableSource:Ph,useOpaqueIdentifier:function useOpaqueIdentifier(){return Kh(Jh)[0];},unstable_isNewReconciler:!1},Fh={readContext:vg,useCallback:bi,useContext:vg,useEffect:Xh,useImperativeHandle:$h,useLayoutEffect:Yh,useMemo:ci,useReducer:Lh,useRef:Th,useState:function useState(){return Lh(Jh);},useDebugValue:ai,useDeferredValue:function useDeferredValue(a){var b=Lh(Jh),c=b[0],d=b[1];Xh(function(){var b=wh.transition;wh.transition=1;try{d(a);}finally{wh.transition=b;}},[a]);return c;},useTransition:function useTransition(){var a=Lh(Jh)[0];return [Th().current,a];},useMutableSource:Ph,useOpaqueIdentifier:function useOpaqueIdentifier(){return Lh(Jh)[0];},unstable_isNewReconciler:!1},ei=ra.ReactCurrentOwner,ug=!1;function fi(a,b,c,d){b.child=null===a?Zg(b,null,c,d):Yg(b,a.child,c,d);}function gi(a,b,c,d,e){c=c.render;var f=b.ref;tg(b,e);d=Ch(a,b,c,d,f,e);if(null!==a&&!ug)return b.updateQueue=a.updateQueue,b.flags&=-517,a.lanes&=~e,hi(a,b,e);b.flags|=1;fi(a,b,d,e);return b.child;}function ii(a,b,c,d,e,f){if(null===a){var g=c.type;if("function"===typeof g&&!ji(g)&&void 0===g.defaultProps&&null===c.compare&&void 0===c.defaultProps)return b.tag=15,b.type=g,ki(a,b,g,d,e,f);a=Vg(c.type,null,d,b,b.mode,f);a.ref=b.ref;a["return"]=b;return b.child=a;}g=a.child;if(0===(e&f)&&(e=g.memoizedProps,c=c.compare,c=null!==c?c:Je,c(e,d)&&a.ref===b.ref))return hi(a,b,f);b.flags|=1;a=Tg(g,d);a.ref=b.ref;a["return"]=b;return b.child=a;}function ki(a,b,c,d,e,f){if(null!==a&&Je(a.memoizedProps,d)&&a.ref===b.ref)if(ug=!1,0!==(f&e))0!==(a.flags&16384)&&(ug=!0);else return b.lanes=a.lanes,hi(a,b,f);return li(a,b,c,d,f);}function mi(a,b,c){var d=b.pendingProps,e=d.children,f=null!==a?a.memoizedState:null;if("hidden"===d.mode||"unstable-defer-without-hiding"===d.mode){if(0===(b.mode&4))b.memoizedState={baseLanes:0},ni(b,c);else if(0!==(c&1073741824))b.memoizedState={baseLanes:0},ni(b,null!==f?f.baseLanes:c);else return a=null!==f?f.baseLanes|c:c,b.lanes=b.childLanes=1073741824,b.memoizedState={baseLanes:a},ni(b,a),null;}else null!==f?(d=f.baseLanes|c,b.memoizedState=null):d=c,ni(b,d);fi(a,b,e,c);return b.child;}function oi(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.flags|=128;}function li(a,b,c,d,e){var f=Ff(c)?Df:M.current;f=Ef(b,f);tg(b,e);c=Ch(a,b,c,d,f,e);if(null!==a&&!ug)return b.updateQueue=a.updateQueue,b.flags&=-517,a.lanes&=~e,hi(a,b,e);b.flags|=1;fi(a,b,c,e);return b.child;}function pi(a,b,c,d,e){if(Ff(c)){var f=!0;Jf(b);}else f=!1;tg(b,e);if(null===b.stateNode)null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2),Mg(b,c,d),Og(b,c,d,e),d=!0;else if(null===a){var g=b.stateNode,h=b.memoizedProps;g.props=h;var k=g.context,l=c.contextType;"object"===_typeof$1(l)&&null!==l?l=vg(l):(l=Ff(c)?Df:M.current,l=Ef(b,l));var n=c.getDerivedStateFromProps,A="function"===typeof n||"function"===typeof g.getSnapshotBeforeUpdate;A||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==d||k!==l)&&Ng(b,g,d,l);wg=!1;var p=b.memoizedState;g.state=p;Cg(b,d,g,e);k=b.memoizedState;h!==d||p!==k||N.current||wg?("function"===typeof n&&(Gg(b,c,n,d),k=b.memoizedState),(h=wg||Lg(b,c,h,d,p,k,l))?(A||"function"!==typeof g.UNSAFE_componentWillMount&&"function"!==typeof g.componentWillMount||("function"===typeof g.componentWillMount&&g.componentWillMount(),"function"===typeof g.UNSAFE_componentWillMount&&g.UNSAFE_componentWillMount()),"function"===typeof g.componentDidMount&&(b.flags|=4)):("function"===typeof g.componentDidMount&&(b.flags|=4),b.memoizedProps=d,b.memoizedState=k),g.props=d,g.state=k,g.context=l,d=h):("function"===typeof g.componentDidMount&&(b.flags|=4),d=!1);}else {g=b.stateNode;yg(a,b);h=b.memoizedProps;l=b.type===b.elementType?h:lg(b.type,h);g.props=l;A=b.pendingProps;p=g.context;k=c.contextType;"object"===_typeof$1(k)&&null!==k?k=vg(k):(k=Ff(c)?Df:M.current,k=Ef(b,k));var C=c.getDerivedStateFromProps;(n="function"===typeof C||"function"===typeof g.getSnapshotBeforeUpdate)||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==A||p!==k)&&Ng(b,g,d,k);wg=!1;p=b.memoizedState;g.state=p;Cg(b,d,g,e);var x=b.memoizedState;h!==A||p!==x||N.current||wg?("function"===typeof C&&(Gg(b,c,C,d),x=b.memoizedState),(l=wg||Lg(b,c,l,d,p,x,k))?(n||"function"!==typeof g.UNSAFE_componentWillUpdate&&"function"!==typeof g.componentWillUpdate||("function"===typeof g.componentWillUpdate&&g.componentWillUpdate(d,x,k),"function"===typeof g.UNSAFE_componentWillUpdate&&g.UNSAFE_componentWillUpdate(d,x,k)),"function"===typeof g.componentDidUpdate&&(b.flags|=4),"function"===typeof g.getSnapshotBeforeUpdate&&(b.flags|=256)):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&p===a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&p===a.memoizedState||(b.flags|=256),b.memoizedProps=d,b.memoizedState=x),g.props=d,g.state=x,g.context=k,d=l):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&p===a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&p===a.memoizedState||(b.flags|=256),d=!1);}return qi(a,b,c,d,f,e);}function qi(a,b,c,d,e,f){oi(a,b);var g=0!==(b.flags&64);if(!d&&!g)return e&&Kf(b,c,!1),hi(a,b,f);d=b.stateNode;ei.current=b;var h=g&&"function"!==typeof c.getDerivedStateFromError?null:d.render();b.flags|=1;null!==a&&g?(b.child=Yg(b,a.child,null,f),b.child=Yg(b,null,h,f)):fi(a,b,h,f);b.memoizedState=d.state;e&&Kf(b,c,!0);return b.child;}function ri(a){var b=a.stateNode;b.pendingContext?Hf(a,b.pendingContext,b.pendingContext!==b.context):b.context&&Hf(a,b.context,!1);eh(a,b.containerInfo);}var si={dehydrated:null,retryLane:0};function ti(a,b,c){var d=b.pendingProps,e=P.current,f=!1,g;(g=0!==(b.flags&64))||(g=null!==a&&null===a.memoizedState?!1:0!==(e&2));g?(f=!0,b.flags&=-65):null!==a&&null===a.memoizedState||void 0===d.fallback||!0===d.unstable_avoidThisFallback||(e|=1);I(P,e&1);if(null===a){void 0!==d.fallback&&ph(b);a=d.children;e=d.fallback;if(f)return a=ui(b,a,e,c),b.child.memoizedState={baseLanes:c},b.memoizedState=si,a;if("number"===typeof d.unstable_expectedLoadTime)return a=ui(b,a,e,c),b.child.memoizedState={baseLanes:c},b.memoizedState=si,b.lanes=33554432,a;c=vi({mode:"visible",children:a},b.mode,c,null);c["return"]=b;return b.child=c;}if(null!==a.memoizedState){if(f)return d=wi(a,b,d.children,d.fallback,c),f=b.child,e=a.child.memoizedState,f.memoizedState=null===e?{baseLanes:c}:{baseLanes:e.baseLanes|c},f.childLanes=a.childLanes&~c,b.memoizedState=si,d;c=xi(a,b,d.children,c);b.memoizedState=null;return c;}if(f)return d=wi(a,b,d.children,d.fallback,c),f=b.child,e=a.child.memoizedState,f.memoizedState=null===e?{baseLanes:c}:{baseLanes:e.baseLanes|c},f.childLanes=a.childLanes&~c,b.memoizedState=si,d;c=xi(a,b,d.children,c);b.memoizedState=null;return c;}function ui(a,b,c,d){var e=a.mode,f=a.child;b={mode:"hidden",children:b};0===(e&2)&&null!==f?(f.childLanes=0,f.pendingProps=b):f=vi(b,e,0,null);c=Xg(c,e,d,null);f["return"]=a;c["return"]=a;f.sibling=c;a.child=f;return c;}function xi(a,b,c,d){var e=a.child;a=e.sibling;c=Tg(e,{mode:"visible",children:c});0===(b.mode&2)&&(c.lanes=d);c["return"]=b;c.sibling=null;null!==a&&(a.nextEffect=null,a.flags=8,b.firstEffect=b.lastEffect=a);return b.child=c;}function wi(a,b,c,d,e){var f=b.mode,g=a.child;a=g.sibling;var h={mode:"hidden",children:c};0===(f&2)&&b.child!==g?(c=b.child,c.childLanes=0,c.pendingProps=h,g=c.lastEffect,null!==g?(b.firstEffect=c.firstEffect,b.lastEffect=g,g.nextEffect=null):b.firstEffect=b.lastEffect=null):c=Tg(g,h);null!==a?d=Tg(a,d):(d=Xg(d,f,e,null),d.flags|=2);d["return"]=b;c["return"]=b;c.sibling=d;b.child=c;return d;}function yi(a,b){a.lanes|=b;var c=a.alternate;null!==c&&(c.lanes|=b);sg(a["return"],b);}function zi(a,b,c,d,e,f){var g=a.memoizedState;null===g?a.memoizedState={isBackwards:b,rendering:null,renderingStartTime:0,last:d,tail:c,tailMode:e,lastEffect:f}:(g.isBackwards=b,g.rendering=null,g.renderingStartTime=0,g.last=d,g.tail=c,g.tailMode=e,g.lastEffect=f);}function Ai(a,b,c){var d=b.pendingProps,e=d.revealOrder,f=d.tail;fi(a,b,d.children,c);d=P.current;if(0!==(d&2))d=d&1|2,b.flags|=64;else {if(null!==a&&0!==(a.flags&64))a:for(a=b.child;null!==a;){if(13===a.tag)null!==a.memoizedState&&yi(a,c);else if(19===a.tag)yi(a,c);else if(null!==a.child){a.child["return"]=a;a=a.child;continue;}if(a===b)break a;for(;null===a.sibling;){if(null===a["return"]||a["return"]===b)break a;a=a["return"];}a.sibling["return"]=a["return"];a=a.sibling;}d&=1;}I(P,d);if(0===(b.mode&2))b.memoizedState=null;else switch(e){case"forwards":c=b.child;for(e=null;null!==c;){a=c.alternate,null!==a&&null===ih(a)&&(e=c),c=c.sibling;}c=e;null===c?(e=b.child,b.child=null):(e=c.sibling,c.sibling=null);zi(b,!1,e,c,f,b.lastEffect);break;case"backwards":c=null;e=b.child;for(b.child=null;null!==e;){a=e.alternate;if(null!==a&&null===ih(a)){b.child=e;break;}a=e.sibling;e.sibling=c;c=e;e=a;}zi(b,!0,c,null,f,b.lastEffect);break;case"together":zi(b,!1,null,null,void 0,b.lastEffect);break;default:b.memoizedState=null;}return b.child;}function hi(a,b,c){null!==a&&(b.dependencies=a.dependencies);Dg|=b.lanes;if(0!==(c&b.childLanes)){if(null!==a&&b.child!==a.child)throw Error(y(153));if(null!==b.child){a=b.child;c=Tg(a,a.pendingProps);b.child=c;for(c["return"]=b;null!==a.sibling;){a=a.sibling,c=c.sibling=Tg(a,a.pendingProps),c["return"]=b;}c.sibling=null;}return b.child;}return null;}var Bi,Ci,Di,Ei;Bi=function Bi(a,b){for(var c=b.child;null!==c;){if(5===c.tag||6===c.tag)a.appendChild(c.stateNode);else if(4!==c.tag&&null!==c.child){c.child["return"]=c;c=c.child;continue;}if(c===b)break;for(;null===c.sibling;){if(null===c["return"]||c["return"]===b)return;c=c["return"];}c.sibling["return"]=c["return"];c=c.sibling;}};Ci=function Ci(){};Di=function Di(a,b,c,d){var e=a.memoizedProps;if(e!==d){a=b.stateNode;dh(ah.current);var f=null;switch(c){case"input":e=Ya(a,e);d=Ya(a,d);f=[];break;case"option":e=eb(a,e);d=eb(a,d);f=[];break;case"select":e=m({},e,{value:void 0});d=m({},d,{value:void 0});f=[];break;case"textarea":e=gb(a,e);d=gb(a,d);f=[];break;default:"function"!==typeof e.onClick&&"function"===typeof d.onClick&&(a.onclick=jf);}vb(c,d);var g;c=null;for(l in e){if(!d.hasOwnProperty(l)&&e.hasOwnProperty(l)&&null!=e[l])if("style"===l){var h=e[l];for(g in h){h.hasOwnProperty(g)&&(c||(c={}),c[g]="");}}else "dangerouslySetInnerHTML"!==l&&"children"!==l&&"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&"autoFocus"!==l&&(ca.hasOwnProperty(l)?f||(f=[]):(f=f||[]).push(l,null));}for(l in d){var k=d[l];h=null!=e?e[l]:void 0;if(d.hasOwnProperty(l)&&k!==h&&(null!=k||null!=h))if("style"===l){if(h){for(g in h){!h.hasOwnProperty(g)||k&&k.hasOwnProperty(g)||(c||(c={}),c[g]="");}for(g in k){k.hasOwnProperty(g)&&h[g]!==k[g]&&(c||(c={}),c[g]=k[g]);}}else c||(f||(f=[]),f.push(l,c)),c=k;}else "dangerouslySetInnerHTML"===l?(k=k?k.__html:void 0,h=h?h.__html:void 0,null!=k&&h!==k&&(f=f||[]).push(l,k)):"children"===l?"string"!==typeof k&&"number"!==typeof k||(f=f||[]).push(l,""+k):"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&(ca.hasOwnProperty(l)?(null!=k&&"onScroll"===l&&G("scroll",a),f||h===k||(f=[])):"object"===_typeof$1(k)&&null!==k&&k.$$typeof===Ga?k.toString():(f=f||[]).push(l,k));}c&&(f=f||[]).push("style",c);var l=f;if(b.updateQueue=l)b.flags|=4;}};Ei=function Ei(a,b,c,d){c!==d&&(b.flags|=4);};function Fi(a,b){if(!lh)switch(a.tailMode){case"hidden":b=a.tail;for(var c=null;null!==b;){null!==b.alternate&&(c=b),b=b.sibling;}null===c?a.tail=null:c.sibling=null;break;case"collapsed":c=a.tail;for(var d=null;null!==c;){null!==c.alternate&&(d=c),c=c.sibling;}null===d?b||null===a.tail?a.tail=null:a.tail.sibling=null:d.sibling=null;}}function Gi(a,b,c){var d=b.pendingProps;switch(b.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return Ff(b.type)&&Gf(),null;case 3:fh();H(N);H(M);uh();d=b.stateNode;d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null);if(null===a||null===a.child)rh(b)?b.flags|=4:d.hydrate||(b.flags|=256);Ci(b);return null;case 5:hh(b);var e=dh(ch.current);c=b.type;if(null!==a&&null!=b.stateNode)Di(a,b,c,d,e),a.ref!==b.ref&&(b.flags|=128);else {if(!d){if(null===b.stateNode)throw Error(y(166));return null;}a=dh(ah.current);if(rh(b)){d=b.stateNode;c=b.type;var f=b.memoizedProps;d[wf]=b;d[xf]=f;switch(c){case"dialog":G("cancel",d);G("close",d);break;case"iframe":case"object":case"embed":G("load",d);break;case"video":case"audio":for(a=0;a<Xe.length;a++){G(Xe[a],d);}break;case"source":G("error",d);break;case"img":case"image":case"link":G("error",d);G("load",d);break;case"details":G("toggle",d);break;case"input":Za(d,f);G("invalid",d);break;case"select":d._wrapperState={wasMultiple:!!f.multiple};G("invalid",d);break;case"textarea":hb(d,f),G("invalid",d);}vb(c,f);a=null;for(var g in f){f.hasOwnProperty(g)&&(e=f[g],"children"===g?"string"===typeof e?d.textContent!==e&&(a=["children",e]):"number"===typeof e&&d.textContent!==""+e&&(a=["children",""+e]):ca.hasOwnProperty(g)&&null!=e&&"onScroll"===g&&G("scroll",d));}switch(c){case"input":Va(d);cb(d,f,!0);break;case"textarea":Va(d);jb(d);break;case"select":case"option":break;default:"function"===typeof f.onClick&&(d.onclick=jf);}d=a;b.updateQueue=d;null!==d&&(b.flags|=4);}else {g=9===e.nodeType?e:e.ownerDocument;a===kb.html&&(a=lb(c));a===kb.html?"script"===c?(a=g.createElement("div"),a.innerHTML="<script>\x3c/script>",a=a.removeChild(a.firstChild)):"string"===typeof d.is?a=g.createElement(c,{is:d.is}):(a=g.createElement(c),"select"===c&&(g=a,d.multiple?g.multiple=!0:d.size&&(g.size=d.size))):a=g.createElementNS(a,c);a[wf]=b;a[xf]=d;Bi(a,b,!1,!1);b.stateNode=a;g=wb(c,d);switch(c){case"dialog":G("cancel",a);G("close",a);e=d;break;case"iframe":case"object":case"embed":G("load",a);e=d;break;case"video":case"audio":for(e=0;e<Xe.length;e++){G(Xe[e],a);}e=d;break;case"source":G("error",a);e=d;break;case"img":case"image":case"link":G("error",a);G("load",a);e=d;break;case"details":G("toggle",a);e=d;break;case"input":Za(a,d);e=Ya(a,d);G("invalid",a);break;case"option":e=eb(a,d);break;case"select":a._wrapperState={wasMultiple:!!d.multiple};e=m({},d,{value:void 0});G("invalid",a);break;case"textarea":hb(a,d);e=gb(a,d);G("invalid",a);break;default:e=d;}vb(c,e);var h=e;for(f in h){if(h.hasOwnProperty(f)){var k=h[f];"style"===f?tb(a,k):"dangerouslySetInnerHTML"===f?(k=k?k.__html:void 0,null!=k&&ob(a,k)):"children"===f?"string"===typeof k?("textarea"!==c||""!==k)&&pb(a,k):"number"===typeof k&&pb(a,""+k):"suppressContentEditableWarning"!==f&&"suppressHydrationWarning"!==f&&"autoFocus"!==f&&(ca.hasOwnProperty(f)?null!=k&&"onScroll"===f&&G("scroll",a):null!=k&&qa(a,f,k,g));}}switch(c){case"input":Va(a);cb(a,d,!1);break;case"textarea":Va(a);jb(a);break;case"option":null!=d.value&&a.setAttribute("value",""+Sa(d.value));break;case"select":a.multiple=!!d.multiple;f=d.value;null!=f?fb(a,!!d.multiple,f,!1):null!=d.defaultValue&&fb(a,!!d.multiple,d.defaultValue,!0);break;default:"function"===typeof e.onClick&&(a.onclick=jf);}mf(c,d)&&(b.flags|=4);}null!==b.ref&&(b.flags|=128);}return null;case 6:if(a&&null!=b.stateNode)Ei(a,b,a.memoizedProps,d);else {if("string"!==typeof d&&null===b.stateNode)throw Error(y(166));c=dh(ch.current);dh(ah.current);rh(b)?(d=b.stateNode,c=b.memoizedProps,d[wf]=b,d.nodeValue!==c&&(b.flags|=4)):(d=(9===c.nodeType?c:c.ownerDocument).createTextNode(d),d[wf]=b,b.stateNode=d);}return null;case 13:H(P);d=b.memoizedState;if(0!==(b.flags&64))return b.lanes=c,b;d=null!==d;c=!1;null===a?void 0!==b.memoizedProps.fallback&&rh(b):c=null!==a.memoizedState;if(d&&!c&&0!==(b.mode&2))if(null===a&&!0!==b.memoizedProps.unstable_avoidThisFallback||0!==(P.current&1))0===V&&(V=3);else {if(0===V||3===V)V=4;null===U||0===(Dg&134217727)&&0===(Hi&134217727)||Ii(U,W);}if(d||c)b.flags|=4;return null;case 4:return fh(),Ci(b),null===a&&cf(b.stateNode.containerInfo),null;case 10:return rg(b),null;case 17:return Ff(b.type)&&Gf(),null;case 19:H(P);d=b.memoizedState;if(null===d)return null;f=0!==(b.flags&64);g=d.rendering;if(null===g){if(f)Fi(d,!1);else {if(0!==V||null!==a&&0!==(a.flags&64))for(a=b.child;null!==a;){g=ih(a);if(null!==g){b.flags|=64;Fi(d,!1);f=g.updateQueue;null!==f&&(b.updateQueue=f,b.flags|=4);null===d.lastEffect&&(b.firstEffect=null);b.lastEffect=d.lastEffect;d=c;for(c=b.child;null!==c;){f=c,a=d,f.flags&=2,f.nextEffect=null,f.firstEffect=null,f.lastEffect=null,g=f.alternate,null===g?(f.childLanes=0,f.lanes=a,f.child=null,f.memoizedProps=null,f.memoizedState=null,f.updateQueue=null,f.dependencies=null,f.stateNode=null):(f.childLanes=g.childLanes,f.lanes=g.lanes,f.child=g.child,f.memoizedProps=g.memoizedProps,f.memoizedState=g.memoizedState,f.updateQueue=g.updateQueue,f.type=g.type,a=g.dependencies,f.dependencies=null===a?null:{lanes:a.lanes,firstContext:a.firstContext}),c=c.sibling;}I(P,P.current&1|2);return b.child;}a=a.sibling;}null!==d.tail&&O()>Ji&&(b.flags|=64,f=!0,Fi(d,!1),b.lanes=33554432);}}else {if(!f)if(a=ih(g),null!==a){if(b.flags|=64,f=!0,c=a.updateQueue,null!==c&&(b.updateQueue=c,b.flags|=4),Fi(d,!0),null===d.tail&&"hidden"===d.tailMode&&!g.alternate&&!lh)return b=b.lastEffect=d.lastEffect,null!==b&&(b.nextEffect=null),null;}else 2*O()-d.renderingStartTime>Ji&&1073741824!==c&&(b.flags|=64,f=!0,Fi(d,!1),b.lanes=33554432);d.isBackwards?(g.sibling=b.child,b.child=g):(c=d.last,null!==c?c.sibling=g:b.child=g,d.last=g);}return null!==d.tail?(c=d.tail,d.rendering=c,d.tail=c.sibling,d.lastEffect=b.lastEffect,d.renderingStartTime=O(),c.sibling=null,b=P.current,I(P,f?b&1|2:b&1),c):null;case 23:case 24:return Ki(),null!==a&&null!==a.memoizedState!==(null!==b.memoizedState)&&"unstable-defer-without-hiding"!==d.mode&&(b.flags|=4),null;}throw Error(y(156,b.tag));}function Li(a){switch(a.tag){case 1:Ff(a.type)&&Gf();var b=a.flags;return b&4096?(a.flags=b&-4097|64,a):null;case 3:fh();H(N);H(M);uh();b=a.flags;if(0!==(b&64))throw Error(y(285));a.flags=b&-4097|64;return a;case 5:return hh(a),null;case 13:return H(P),b=a.flags,b&4096?(a.flags=b&-4097|64,a):null;case 19:return H(P),null;case 4:return fh(),null;case 10:return rg(a),null;case 23:case 24:return Ki(),null;default:return null;}}function Mi(a,b){try{var c="",d=b;do{c+=Qa(d),d=d["return"];}while(d);var e=c;}catch(f){e="\nError generating stack: "+f.message+"\n"+f.stack;}return {value:a,source:b,stack:e};}function Ni(a,b){try{console.error(b.value);}catch(c){setTimeout(function(){throw c;});}}var Oi="function"===typeof WeakMap?WeakMap:Map;function Pi(a,b,c){c=zg(-1,c);c.tag=3;c.payload={element:null};var d=b.value;c.callback=function(){Qi||(Qi=!0,Ri=d);Ni(a,b);};return c;}function Si(a,b,c){c=zg(-1,c);c.tag=3;var d=a.type.getDerivedStateFromError;if("function"===typeof d){var e=b.value;c.payload=function(){Ni(a,b);return d(e);};}var f=a.stateNode;null!==f&&"function"===typeof f.componentDidCatch&&(c.callback=function(){"function"!==typeof d&&(null===Ti?Ti=new Set([this]):Ti.add(this),Ni(a,b));var c=b.stack;this.componentDidCatch(b.value,{componentStack:null!==c?c:""});});return c;}var Ui="function"===typeof WeakSet?WeakSet:Set;function Vi(a){var b=a.ref;if(null!==b)if("function"===typeof b)try{b(null);}catch(c){Wi(a,c);}else b.current=null;}function Xi(a,b){switch(b.tag){case 0:case 11:case 15:case 22:return;case 1:if(b.flags&256&&null!==a){var c=a.memoizedProps,d=a.memoizedState;a=b.stateNode;b=a.getSnapshotBeforeUpdate(b.elementType===b.type?c:lg(b.type,c),d);a.__reactInternalSnapshotBeforeUpdate=b;}return;case 3:b.flags&256&&qf(b.stateNode.containerInfo);return;case 5:case 6:case 4:case 17:return;}throw Error(y(163));}function Yi(a,b,c){switch(c.tag){case 0:case 11:case 15:case 22:b=c.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){a=b=b.next;do{if(3===(a.tag&3)){var d=a.create;a.destroy=d();}a=a.next;}while(a!==b);}b=c.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){a=b=b.next;do{var e=a;d=e.next;e=e.tag;0!==(e&4)&&0!==(e&1)&&(Zi(c,a),$i(c,a));a=d;}while(a!==b);}return;case 1:a=c.stateNode;c.flags&4&&(null===b?a.componentDidMount():(d=c.elementType===c.type?b.memoizedProps:lg(c.type,b.memoizedProps),a.componentDidUpdate(d,b.memoizedState,a.__reactInternalSnapshotBeforeUpdate)));b=c.updateQueue;null!==b&&Eg(c,b,a);return;case 3:b=c.updateQueue;if(null!==b){a=null;if(null!==c.child)switch(c.child.tag){case 5:a=c.child.stateNode;break;case 1:a=c.child.stateNode;}Eg(c,b,a);}return;case 5:a=c.stateNode;null===b&&c.flags&4&&mf(c.type,c.memoizedProps)&&a.focus();return;case 6:return;case 4:return;case 12:return;case 13:null===c.memoizedState&&(c=c.alternate,null!==c&&(c=c.memoizedState,null!==c&&(c=c.dehydrated,null!==c&&Cc(c))));return;case 19:case 17:case 20:case 21:case 23:case 24:return;}throw Error(y(163));}function aj(a,b){for(var c=a;;){if(5===c.tag){var d=c.stateNode;if(b)d=d.style,"function"===typeof d.setProperty?d.setProperty("display","none","important"):d.display="none";else {d=c.stateNode;var e=c.memoizedProps.style;e=void 0!==e&&null!==e&&e.hasOwnProperty("display")?e.display:null;d.style.display=sb("display",e);}}else if(6===c.tag)c.stateNode.nodeValue=b?"":c.memoizedProps;else if((23!==c.tag&&24!==c.tag||null===c.memoizedState||c===a)&&null!==c.child){c.child["return"]=c;c=c.child;continue;}if(c===a)break;for(;null===c.sibling;){if(null===c["return"]||c["return"]===a)return;c=c["return"];}c.sibling["return"]=c["return"];c=c.sibling;}}function bj(a,b){if(Mf&&"function"===typeof Mf.onCommitFiberUnmount)try{Mf.onCommitFiberUnmount(Lf,b);}catch(f){}switch(b.tag){case 0:case 11:case 14:case 15:case 22:a=b.updateQueue;if(null!==a&&(a=a.lastEffect,null!==a)){var c=a=a.next;do{var d=c,e=d.destroy;d=d.tag;if(void 0!==e)if(0!==(d&4))Zi(b,c);else {d=b;try{e();}catch(f){Wi(d,f);}}c=c.next;}while(c!==a);}break;case 1:Vi(b);a=b.stateNode;if("function"===typeof a.componentWillUnmount)try{a.props=b.memoizedProps,a.state=b.memoizedState,a.componentWillUnmount();}catch(f){Wi(b,f);}break;case 5:Vi(b);break;case 4:cj(a,b);}}function dj(a){a.alternate=null;a.child=null;a.dependencies=null;a.firstEffect=null;a.lastEffect=null;a.memoizedProps=null;a.memoizedState=null;a.pendingProps=null;a["return"]=null;a.updateQueue=null;}function ej(a){return 5===a.tag||3===a.tag||4===a.tag;}function fj(a){a:{for(var b=a["return"];null!==b;){if(ej(b))break a;b=b["return"];}throw Error(y(160));}var c=b;b=c.stateNode;switch(c.tag){case 5:var d=!1;break;case 3:b=b.containerInfo;d=!0;break;case 4:b=b.containerInfo;d=!0;break;default:throw Error(y(161));}c.flags&16&&(pb(b,""),c.flags&=-17);a:b:for(c=a;;){for(;null===c.sibling;){if(null===c["return"]||ej(c["return"])){c=null;break a;}c=c["return"];}c.sibling["return"]=c["return"];for(c=c.sibling;5!==c.tag&&6!==c.tag&&18!==c.tag;){if(c.flags&2)continue b;if(null===c.child||4===c.tag)continue b;else c.child["return"]=c,c=c.child;}if(!(c.flags&2)){c=c.stateNode;break a;}}d?gj(a,c,b):hj(a,c,b);}function gj(a,b,c){var d=a.tag,e=5===d||6===d;if(e)a=e?a.stateNode:a.stateNode.instance,b?8===c.nodeType?c.parentNode.insertBefore(a,b):c.insertBefore(a,b):(8===c.nodeType?(b=c.parentNode,b.insertBefore(a,c)):(b=c,b.appendChild(a)),c=c._reactRootContainer,null!==c&&void 0!==c||null!==b.onclick||(b.onclick=jf));else if(4!==d&&(a=a.child,null!==a))for(gj(a,b,c),a=a.sibling;null!==a;){gj(a,b,c),a=a.sibling;}}function hj(a,b,c){var d=a.tag,e=5===d||6===d;if(e)a=e?a.stateNode:a.stateNode.instance,b?c.insertBefore(a,b):c.appendChild(a);else if(4!==d&&(a=a.child,null!==a))for(hj(a,b,c),a=a.sibling;null!==a;){hj(a,b,c),a=a.sibling;}}function cj(a,b){for(var c=b,d=!1,e,f;;){if(!d){d=c["return"];a:for(;;){if(null===d)throw Error(y(160));e=d.stateNode;switch(d.tag){case 5:f=!1;break a;case 3:e=e.containerInfo;f=!0;break a;case 4:e=e.containerInfo;f=!0;break a;}d=d["return"];}d=!0;}if(5===c.tag||6===c.tag){a:for(var g=a,h=c,k=h;;){if(bj(g,k),null!==k.child&&4!==k.tag)k.child["return"]=k,k=k.child;else {if(k===h)break a;for(;null===k.sibling;){if(null===k["return"]||k["return"]===h)break a;k=k["return"];}k.sibling["return"]=k["return"];k=k.sibling;}}f?(g=e,h=c.stateNode,8===g.nodeType?g.parentNode.removeChild(h):g.removeChild(h)):e.removeChild(c.stateNode);}else if(4===c.tag){if(null!==c.child){e=c.stateNode.containerInfo;f=!0;c.child["return"]=c;c=c.child;continue;}}else if(bj(a,c),null!==c.child){c.child["return"]=c;c=c.child;continue;}if(c===b)break;for(;null===c.sibling;){if(null===c["return"]||c["return"]===b)return;c=c["return"];4===c.tag&&(d=!1);}c.sibling["return"]=c["return"];c=c.sibling;}}function ij(a,b){switch(b.tag){case 0:case 11:case 14:case 15:case 22:var c=b.updateQueue;c=null!==c?c.lastEffect:null;if(null!==c){var d=c=c.next;do{3===(d.tag&3)&&(a=d.destroy,d.destroy=void 0,void 0!==a&&a()),d=d.next;}while(d!==c);}return;case 1:return;case 5:c=b.stateNode;if(null!=c){d=b.memoizedProps;var e=null!==a?a.memoizedProps:d;a=b.type;var f=b.updateQueue;b.updateQueue=null;if(null!==f){c[xf]=d;"input"===a&&"radio"===d.type&&null!=d.name&&$a(c,d);wb(a,e);b=wb(a,d);for(e=0;e<f.length;e+=2){var g=f[e],h=f[e+1];"style"===g?tb(c,h):"dangerouslySetInnerHTML"===g?ob(c,h):"children"===g?pb(c,h):qa(c,g,h,b);}switch(a){case"input":ab(c,d);break;case"textarea":ib(c,d);break;case"select":a=c._wrapperState.wasMultiple,c._wrapperState.wasMultiple=!!d.multiple,f=d.value,null!=f?fb(c,!!d.multiple,f,!1):a!==!!d.multiple&&(null!=d.defaultValue?fb(c,!!d.multiple,d.defaultValue,!0):fb(c,!!d.multiple,d.multiple?[]:"",!1));}}}return;case 6:if(null===b.stateNode)throw Error(y(162));b.stateNode.nodeValue=b.memoizedProps;return;case 3:c=b.stateNode;c.hydrate&&(c.hydrate=!1,Cc(c.containerInfo));return;case 12:return;case 13:null!==b.memoizedState&&(jj=O(),aj(b.child,!0));kj(b);return;case 19:kj(b);return;case 17:return;case 23:case 24:aj(b,null!==b.memoizedState);return;}throw Error(y(163));}function kj(a){var b=a.updateQueue;if(null!==b){a.updateQueue=null;var c=a.stateNode;null===c&&(c=a.stateNode=new Ui());b.forEach(function(b){var d=lj.bind(null,a,b);c.has(b)||(c.add(b),b.then(d,d));});}}function mj(a,b){return null!==a&&(a=a.memoizedState,null===a||null!==a.dehydrated)?(b=b.memoizedState,null!==b&&null===b.dehydrated):!1;}var nj=Math.ceil,oj=ra.ReactCurrentDispatcher,pj=ra.ReactCurrentOwner,X=0,U=null,Y=null,W=0,qj=0,rj=Bf(0),V=0,sj=null,tj=0,Dg=0,Hi=0,uj=0,vj=null,jj=0,Ji=Infinity;function wj(){Ji=O()+500;}var Z=null,Qi=!1,Ri=null,Ti=null,xj=!1,yj=null,zj=90,Aj=[],Bj=[],Cj=null,Dj=0,Ej=null,Fj=-1,Gj=0,Hj=0,Ij=null,Jj=!1;function Hg(){return 0!==(X&48)?O():-1!==Fj?Fj:Fj=O();}function Ig(a){a=a.mode;if(0===(a&2))return 1;if(0===(a&4))return 99===eg()?1:2;0===Gj&&(Gj=tj);if(0!==kg.transition){0!==Hj&&(Hj=null!==vj?vj.pendingLanes:0);a=Gj;var b=4186112&~Hj;b&=-b;0===b&&(a=4186112&~a,b=a&-a,0===b&&(b=8192));return b;}a=eg();0!==(X&4)&&98===a?a=Xc(12,Gj):(a=Sc(a),a=Xc(a,Gj));return a;}function Jg(a,b,c){if(50<Dj)throw Dj=0,Ej=null,Error(y(185));a=Kj(a,b);if(null===a)return null;$c(a,b,c);a===U&&(Hi|=b,4===V&&Ii(a,W));var d=eg();1===b?0!==(X&8)&&0===(X&48)?Lj(a):(Mj(a,c),0===X&&(wj(),ig())):(0===(X&4)||98!==d&&99!==d||(null===Cj?Cj=new Set([a]):Cj.add(a)),Mj(a,c));vj=a;}function Kj(a,b){a.lanes|=b;var c=a.alternate;null!==c&&(c.lanes|=b);c=a;for(a=a["return"];null!==a;){a.childLanes|=b,c=a.alternate,null!==c&&(c.childLanes|=b),c=a,a=a["return"];}return 3===c.tag?c.stateNode:null;}function Mj(a,b){for(var c=a.callbackNode,d=a.suspendedLanes,e=a.pingedLanes,f=a.expirationTimes,g=a.pendingLanes;0<g;){var h=31-Vc(g),k=1<<h,l=f[h];if(-1===l){if(0===(k&d)||0!==(k&e)){l=b;Rc(k);var n=F;f[h]=10<=n?l+250:6<=n?l+5E3:-1;}}else l<=b&&(a.expiredLanes|=k);g&=~k;}d=Uc(a,a===U?W:0);b=F;if(0===d)null!==c&&(c!==Zf&&Pf(c),a.callbackNode=null,a.callbackPriority=0);else {if(null!==c){if(a.callbackPriority===b)return;c!==Zf&&Pf(c);}15===b?(c=Lj.bind(null,a),null===ag?(ag=[c],bg=Of(Uf,jg)):ag.push(c),c=Zf):14===b?c=hg(99,Lj.bind(null,a)):(c=Tc(b),c=hg(c,Nj.bind(null,a)));a.callbackPriority=b;a.callbackNode=c;}}function Nj(a){Fj=-1;Hj=Gj=0;if(0!==(X&48))throw Error(y(327));var b=a.callbackNode;if(Oj()&&a.callbackNode!==b)return null;var c=Uc(a,a===U?W:0);if(0===c)return null;var d=c;var e=X;X|=16;var f=Pj();if(U!==a||W!==d)wj(),Qj(a,d);do{try{Rj();break;}catch(h){Sj(a,h);}}while(1);qg();oj.current=f;X=e;null!==Y?d=0:(U=null,W=0,d=V);if(0!==(tj&Hi))Qj(a,0);else if(0!==d){2===d&&(X|=64,a.hydrate&&(a.hydrate=!1,qf(a.containerInfo)),c=Wc(a),0!==c&&(d=Tj(a,c)));if(1===d)throw b=sj,Qj(a,0),Ii(a,c),Mj(a,O()),b;a.finishedWork=a.current.alternate;a.finishedLanes=c;switch(d){case 0:case 1:throw Error(y(345));case 2:Uj(a);break;case 3:Ii(a,c);if((c&62914560)===c&&(d=jj+500-O(),10<d)){if(0!==Uc(a,0))break;e=a.suspendedLanes;if((e&c)!==c){Hg();a.pingedLanes|=a.suspendedLanes&e;break;}a.timeoutHandle=of(Uj.bind(null,a),d);break;}Uj(a);break;case 4:Ii(a,c);if((c&4186112)===c)break;d=a.eventTimes;for(e=-1;0<c;){var g=31-Vc(c);f=1<<g;g=d[g];g>e&&(e=g);c&=~f;}c=e;c=O()-c;c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3E3>c?3E3:4320>c?4320:1960*nj(c/1960))-c;if(10<c){a.timeoutHandle=of(Uj.bind(null,a),c);break;}Uj(a);break;case 5:Uj(a);break;default:throw Error(y(329));}}Mj(a,O());return a.callbackNode===b?Nj.bind(null,a):null;}function Ii(a,b){b&=~uj;b&=~Hi;a.suspendedLanes|=b;a.pingedLanes&=~b;for(a=a.expirationTimes;0<b;){var c=31-Vc(b),d=1<<c;a[c]=-1;b&=~d;}}function Lj(a){if(0!==(X&48))throw Error(y(327));Oj();if(a===U&&0!==(a.expiredLanes&W)){var b=W;var c=Tj(a,b);0!==(tj&Hi)&&(b=Uc(a,b),c=Tj(a,b));}else b=Uc(a,0),c=Tj(a,b);0!==a.tag&&2===c&&(X|=64,a.hydrate&&(a.hydrate=!1,qf(a.containerInfo)),b=Wc(a),0!==b&&(c=Tj(a,b)));if(1===c)throw c=sj,Qj(a,0),Ii(a,b),Mj(a,O()),c;a.finishedWork=a.current.alternate;a.finishedLanes=b;Uj(a);Mj(a,O());return null;}function Vj(){if(null!==Cj){var a=Cj;Cj=null;a.forEach(function(a){a.expiredLanes|=24&a.pendingLanes;Mj(a,O());});}ig();}function Wj(a,b){var c=X;X|=1;try{return a(b);}finally{X=c,0===X&&(wj(),ig());}}function Xj(a,b){var c=X;X&=-2;X|=8;try{return a(b);}finally{X=c,0===X&&(wj(),ig());}}function ni(a,b){I(rj,qj);qj|=b;tj|=b;}function Ki(){qj=rj.current;H(rj);}function Qj(a,b){a.finishedWork=null;a.finishedLanes=0;var c=a.timeoutHandle;-1!==c&&(a.timeoutHandle=-1,pf(c));if(null!==Y)for(c=Y["return"];null!==c;){var d=c;switch(d.tag){case 1:d=d.type.childContextTypes;null!==d&&void 0!==d&&Gf();break;case 3:fh();H(N);H(M);uh();break;case 5:hh(d);break;case 4:fh();break;case 13:H(P);break;case 19:H(P);break;case 10:rg(d);break;case 23:case 24:Ki();}c=c["return"];}U=a;Y=Tg(a.current,null);W=qj=tj=b;V=0;sj=null;uj=Hi=Dg=0;}function Sj(a,b){do{var c=Y;try{qg();vh.current=Gh;if(yh){for(var d=R.memoizedState;null!==d;){var e=d.queue;null!==e&&(e.pending=null);d=d.next;}yh=!1;}xh=0;T=S=R=null;zh=!1;pj.current=null;if(null===c||null===c["return"]){V=1;sj=b;Y=null;break;}a:{var f=a,g=c["return"],h=c,k=b;b=W;h.flags|=2048;h.firstEffect=h.lastEffect=null;if(null!==k&&"object"===_typeof$1(k)&&"function"===typeof k.then){var l=k;if(0===(h.mode&2)){var n=h.alternate;n?(h.updateQueue=n.updateQueue,h.memoizedState=n.memoizedState,h.lanes=n.lanes):(h.updateQueue=null,h.memoizedState=null);}var A=0!==(P.current&1),p=g;do{var C;if(C=13===p.tag){var x=p.memoizedState;if(null!==x)C=null!==x.dehydrated?!0:!1;else {var w=p.memoizedProps;C=void 0===w.fallback?!1:!0!==w.unstable_avoidThisFallback?!0:A?!1:!0;}}if(C){var z=p.updateQueue;if(null===z){var u=new Set();u.add(l);p.updateQueue=u;}else z.add(l);if(0===(p.mode&2)){p.flags|=64;h.flags|=16384;h.flags&=-2981;if(1===h.tag)if(null===h.alternate)h.tag=17;else {var t=zg(-1,1);t.tag=2;Ag(h,t);}h.lanes|=1;break a;}k=void 0;h=b;var q=f.pingCache;null===q?(q=f.pingCache=new Oi(),k=new Set(),q.set(l,k)):(k=q.get(l),void 0===k&&(k=new Set(),q.set(l,k)));if(!k.has(h)){k.add(h);var v=Yj.bind(null,f,l,h);l.then(v,v);}p.flags|=4096;p.lanes=b;break a;}p=p["return"];}while(null!==p);k=Error((Ra(h.type)||"A React component")+" suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.");}5!==V&&(V=2);k=Mi(k,h);p=g;do{switch(p.tag){case 3:f=k;p.flags|=4096;b&=-b;p.lanes|=b;var J=Pi(p,f,b);Bg(p,J);break a;case 1:f=k;var K=p.type,Q=p.stateNode;if(0===(p.flags&64)&&("function"===typeof K.getDerivedStateFromError||null!==Q&&"function"===typeof Q.componentDidCatch&&(null===Ti||!Ti.has(Q)))){p.flags|=4096;b&=-b;p.lanes|=b;var L=Si(p,f,b);Bg(p,L);break a;}}p=p["return"];}while(null!==p);}Zj(c);}catch(va){b=va;Y===c&&null!==c&&(Y=c=c["return"]);continue;}break;}while(1);}function Pj(){var a=oj.current;oj.current=Gh;return null===a?Gh:a;}function Tj(a,b){var c=X;X|=16;var d=Pj();U===a&&W===b||Qj(a,b);do{try{ak();break;}catch(e){Sj(a,e);}}while(1);qg();X=c;oj.current=d;if(null!==Y)throw Error(y(261));U=null;W=0;return V;}function ak(){for(;null!==Y;){bk(Y);}}function Rj(){for(;null!==Y&&!Qf();){bk(Y);}}function bk(a){var b=ck(a.alternate,a,qj);a.memoizedProps=a.pendingProps;null===b?Zj(a):Y=b;pj.current=null;}function Zj(a){var b=a;do{var c=b.alternate;a=b["return"];if(0===(b.flags&2048)){c=Gi(c,b,qj);if(null!==c){Y=c;return;}c=b;if(24!==c.tag&&23!==c.tag||null===c.memoizedState||0!==(qj&1073741824)||0===(c.mode&4)){for(var d=0,e=c.child;null!==e;){d|=e.lanes|e.childLanes,e=e.sibling;}c.childLanes=d;}null!==a&&0===(a.flags&2048)&&(null===a.firstEffect&&(a.firstEffect=b.firstEffect),null!==b.lastEffect&&(null!==a.lastEffect&&(a.lastEffect.nextEffect=b.firstEffect),a.lastEffect=b.lastEffect),1<b.flags&&(null!==a.lastEffect?a.lastEffect.nextEffect=b:a.firstEffect=b,a.lastEffect=b));}else {c=Li(b);if(null!==c){c.flags&=2047;Y=c;return;}null!==a&&(a.firstEffect=a.lastEffect=null,a.flags|=2048);}b=b.sibling;if(null!==b){Y=b;return;}Y=b=a;}while(null!==b);0===V&&(V=5);}function Uj(a){var b=eg();gg(99,dk.bind(null,a,b));return null;}function dk(a,b){do{Oj();}while(null!==yj);if(0!==(X&48))throw Error(y(327));var c=a.finishedWork;if(null===c)return null;a.finishedWork=null;a.finishedLanes=0;if(c===a.current)throw Error(y(177));a.callbackNode=null;var d=c.lanes|c.childLanes,e=d,f=a.pendingLanes&~e;a.pendingLanes=e;a.suspendedLanes=0;a.pingedLanes=0;a.expiredLanes&=e;a.mutableReadLanes&=e;a.entangledLanes&=e;e=a.entanglements;for(var g=a.eventTimes,h=a.expirationTimes;0<f;){var k=31-Vc(f),l=1<<k;e[k]=0;g[k]=-1;h[k]=-1;f&=~l;}null!==Cj&&0===(d&24)&&Cj.has(a)&&Cj["delete"](a);a===U&&(Y=U=null,W=0);1<c.flags?null!==c.lastEffect?(c.lastEffect.nextEffect=c,d=c.firstEffect):d=c:d=c.firstEffect;if(null!==d){e=X;X|=32;pj.current=null;kf=fd;g=Ne();if(Oe(g)){if("selectionStart"in g)h={start:g.selectionStart,end:g.selectionEnd};else a:if(h=(h=g.ownerDocument)&&h.defaultView||window,(l=h.getSelection&&h.getSelection())&&0!==l.rangeCount){h=l.anchorNode;f=l.anchorOffset;k=l.focusNode;l=l.focusOffset;try{h.nodeType,k.nodeType;}catch(va){h=null;break a;}var n=0,A=-1,p=-1,C=0,x=0,w=g,z=null;b:for(;;){for(var u;;){w!==h||0!==f&&3!==w.nodeType||(A=n+f);w!==k||0!==l&&3!==w.nodeType||(p=n+l);3===w.nodeType&&(n+=w.nodeValue.length);if(null===(u=w.firstChild))break;z=w;w=u;}for(;;){if(w===g)break b;z===h&&++C===f&&(A=n);z===k&&++x===l&&(p=n);if(null!==(u=w.nextSibling))break;w=z;z=w.parentNode;}w=u;}h=-1===A||-1===p?null:{start:A,end:p};}else h=null;h=h||{start:0,end:0};}else h=null;lf={focusedElem:g,selectionRange:h};fd=!1;Ij=null;Jj=!1;Z=d;do{try{ek();}catch(va){if(null===Z)throw Error(y(330));Wi(Z,va);Z=Z.nextEffect;}}while(null!==Z);Ij=null;Z=d;do{try{for(g=a;null!==Z;){var t=Z.flags;t&16&&pb(Z.stateNode,"");if(t&128){var q=Z.alternate;if(null!==q){var v=q.ref;null!==v&&("function"===typeof v?v(null):v.current=null);}}switch(t&1038){case 2:fj(Z);Z.flags&=-3;break;case 6:fj(Z);Z.flags&=-3;ij(Z.alternate,Z);break;case 1024:Z.flags&=-1025;break;case 1028:Z.flags&=-1025;ij(Z.alternate,Z);break;case 4:ij(Z.alternate,Z);break;case 8:h=Z;cj(g,h);var J=h.alternate;dj(h);null!==J&&dj(J);}Z=Z.nextEffect;}}catch(va){if(null===Z)throw Error(y(330));Wi(Z,va);Z=Z.nextEffect;}}while(null!==Z);v=lf;q=Ne();t=v.focusedElem;g=v.selectionRange;if(q!==t&&t&&t.ownerDocument&&Me(t.ownerDocument.documentElement,t)){null!==g&&Oe(t)&&(q=g.start,v=g.end,void 0===v&&(v=q),"selectionStart"in t?(t.selectionStart=q,t.selectionEnd=Math.min(v,t.value.length)):(v=(q=t.ownerDocument||document)&&q.defaultView||window,v.getSelection&&(v=v.getSelection(),h=t.textContent.length,J=Math.min(g.start,h),g=void 0===g.end?J:Math.min(g.end,h),!v.extend&&J>g&&(h=g,g=J,J=h),h=Le(t,J),f=Le(t,g),h&&f&&(1!==v.rangeCount||v.anchorNode!==h.node||v.anchorOffset!==h.offset||v.focusNode!==f.node||v.focusOffset!==f.offset)&&(q=q.createRange(),q.setStart(h.node,h.offset),v.removeAllRanges(),J>g?(v.addRange(q),v.extend(f.node,f.offset)):(q.setEnd(f.node,f.offset),v.addRange(q))))));q=[];for(v=t;v=v.parentNode;){1===v.nodeType&&q.push({element:v,left:v.scrollLeft,top:v.scrollTop});}"function"===typeof t.focus&&t.focus();for(t=0;t<q.length;t++){v=q[t],v.element.scrollLeft=v.left,v.element.scrollTop=v.top;}}fd=!!kf;lf=kf=null;a.current=c;Z=d;do{try{for(t=a;null!==Z;){var K=Z.flags;K&36&&Yi(t,Z.alternate,Z);if(K&128){q=void 0;var Q=Z.ref;if(null!==Q){var L=Z.stateNode;switch(Z.tag){case 5:q=L;break;default:q=L;}"function"===typeof Q?Q(q):Q.current=q;}}Z=Z.nextEffect;}}catch(va){if(null===Z)throw Error(y(330));Wi(Z,va);Z=Z.nextEffect;}}while(null!==Z);Z=null;$f();X=e;}else a.current=c;if(xj)xj=!1,yj=a,zj=b;else for(Z=d;null!==Z;){b=Z.nextEffect,Z.nextEffect=null,Z.flags&8&&(K=Z,K.sibling=null,K.stateNode=null),Z=b;}d=a.pendingLanes;0===d&&(Ti=null);1===d?a===Ej?Dj++:(Dj=0,Ej=a):Dj=0;c=c.stateNode;if(Mf&&"function"===typeof Mf.onCommitFiberRoot)try{Mf.onCommitFiberRoot(Lf,c,void 0,64===(c.current.flags&64));}catch(va){}Mj(a,O());if(Qi)throw Qi=!1,a=Ri,Ri=null,a;if(0!==(X&8))return null;ig();return null;}function ek(){for(;null!==Z;){var a=Z.alternate;Jj||null===Ij||(0!==(Z.flags&8)?dc(Z,Ij)&&(Jj=!0):13===Z.tag&&mj(a,Z)&&dc(Z,Ij)&&(Jj=!0));var b=Z.flags;0!==(b&256)&&Xi(a,Z);0===(b&512)||xj||(xj=!0,hg(97,function(){Oj();return null;}));Z=Z.nextEffect;}}function Oj(){if(90!==zj){var a=97<zj?97:zj;zj=90;return gg(a,fk);}return !1;}function $i(a,b){Aj.push(b,a);xj||(xj=!0,hg(97,function(){Oj();return null;}));}function Zi(a,b){Bj.push(b,a);xj||(xj=!0,hg(97,function(){Oj();return null;}));}function fk(){if(null===yj)return !1;var a=yj;yj=null;if(0!==(X&48))throw Error(y(331));var b=X;X|=32;var c=Bj;Bj=[];for(var d=0;d<c.length;d+=2){var e=c[d],f=c[d+1],g=e.destroy;e.destroy=void 0;if("function"===typeof g)try{g();}catch(k){if(null===f)throw Error(y(330));Wi(f,k);}}c=Aj;Aj=[];for(d=0;d<c.length;d+=2){e=c[d];f=c[d+1];try{var h=e.create;e.destroy=h();}catch(k){if(null===f)throw Error(y(330));Wi(f,k);}}for(h=a.current.firstEffect;null!==h;){a=h.nextEffect,h.nextEffect=null,h.flags&8&&(h.sibling=null,h.stateNode=null),h=a;}X=b;ig();return !0;}function gk(a,b,c){b=Mi(c,b);b=Pi(a,b,1);Ag(a,b);b=Hg();a=Kj(a,1);null!==a&&($c(a,1,b),Mj(a,b));}function Wi(a,b){if(3===a.tag)gk(a,a,b);else for(var c=a["return"];null!==c;){if(3===c.tag){gk(c,a,b);break;}else if(1===c.tag){var d=c.stateNode;if("function"===typeof c.type.getDerivedStateFromError||"function"===typeof d.componentDidCatch&&(null===Ti||!Ti.has(d))){a=Mi(b,a);var e=Si(c,a,1);Ag(c,e);e=Hg();c=Kj(c,1);if(null!==c)$c(c,1,e),Mj(c,e);else if("function"===typeof d.componentDidCatch&&(null===Ti||!Ti.has(d)))try{d.componentDidCatch(b,a);}catch(f){}break;}}c=c["return"];}}function Yj(a,b,c){var d=a.pingCache;null!==d&&d["delete"](b);b=Hg();a.pingedLanes|=a.suspendedLanes&c;U===a&&(W&c)===c&&(4===V||3===V&&(W&62914560)===W&&500>O()-jj?Qj(a,0):uj|=c);Mj(a,b);}function lj(a,b){var c=a.stateNode;null!==c&&c["delete"](b);b=0;0===b&&(b=a.mode,0===(b&2)?b=1:0===(b&4)?b=99===eg()?1:2:(0===Gj&&(Gj=tj),b=Yc(62914560&~Gj),0===b&&(b=4194304)));c=Hg();a=Kj(a,b);null!==a&&($c(a,b,c),Mj(a,c));}var ck;ck=function ck(a,b,c){var d=b.lanes;if(null!==a){if(a.memoizedProps!==b.pendingProps||N.current)ug=!0;else if(0!==(c&d))ug=0!==(a.flags&16384)?!0:!1;else {ug=!1;switch(b.tag){case 3:ri(b);sh();break;case 5:gh(b);break;case 1:Ff(b.type)&&Jf(b);break;case 4:eh(b,b.stateNode.containerInfo);break;case 10:d=b.memoizedProps.value;var e=b.type._context;I(mg,e._currentValue);e._currentValue=d;break;case 13:if(null!==b.memoizedState){if(0!==(c&b.child.childLanes))return ti(a,b,c);I(P,P.current&1);b=hi(a,b,c);return null!==b?b.sibling:null;}I(P,P.current&1);break;case 19:d=0!==(c&b.childLanes);if(0!==(a.flags&64)){if(d)return Ai(a,b,c);b.flags|=64;}e=b.memoizedState;null!==e&&(e.rendering=null,e.tail=null,e.lastEffect=null);I(P,P.current);if(d)break;else return null;case 23:case 24:return b.lanes=0,mi(a,b,c);}return hi(a,b,c);}}else ug=!1;b.lanes=0;switch(b.tag){case 2:d=b.type;null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2);a=b.pendingProps;e=Ef(b,M.current);tg(b,c);e=Ch(null,b,d,a,e,c);b.flags|=1;if("object"===_typeof$1(e)&&null!==e&&"function"===typeof e.render&&void 0===e.$$typeof){b.tag=1;b.memoizedState=null;b.updateQueue=null;if(Ff(d)){var f=!0;Jf(b);}else f=!1;b.memoizedState=null!==e.state&&void 0!==e.state?e.state:null;xg(b);var g=d.getDerivedStateFromProps;"function"===typeof g&&Gg(b,d,g,a);e.updater=Kg;b.stateNode=e;e._reactInternals=b;Og(b,d,a,c);b=qi(null,b,d,!0,f,c);}else b.tag=0,fi(null,b,e,c),b=b.child;return b;case 16:e=b.elementType;a:{null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2);a=b.pendingProps;f=e._init;e=f(e._payload);b.type=e;f=b.tag=hk(e);a=lg(e,a);switch(f){case 0:b=li(null,b,e,a,c);break a;case 1:b=pi(null,b,e,a,c);break a;case 11:b=gi(null,b,e,a,c);break a;case 14:b=ii(null,b,e,lg(e.type,a),d,c);break a;}throw Error(y(306,e,""));}return b;case 0:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:lg(d,e),li(a,b,d,e,c);case 1:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:lg(d,e),pi(a,b,d,e,c);case 3:ri(b);d=b.updateQueue;if(null===a||null===d)throw Error(y(282));d=b.pendingProps;e=b.memoizedState;e=null!==e?e.element:null;yg(a,b);Cg(b,d,null,c);d=b.memoizedState.element;if(d===e)sh(),b=hi(a,b,c);else {e=b.stateNode;if(f=e.hydrate)kh=rf(b.stateNode.containerInfo.firstChild),jh=b,f=lh=!0;if(f){a=e.mutableSourceEagerHydrationData;if(null!=a)for(e=0;e<a.length;e+=2){f=a[e],f._workInProgressVersionPrimary=a[e+1],th.push(f);}c=Zg(b,null,d,c);for(b.child=c;c;){c.flags=c.flags&-3|1024,c=c.sibling;}}else fi(a,b,d,c),sh();b=b.child;}return b;case 5:return gh(b),null===a&&ph(b),d=b.type,e=b.pendingProps,f=null!==a?a.memoizedProps:null,g=e.children,nf(d,e)?g=null:null!==f&&nf(d,f)&&(b.flags|=16),oi(a,b),fi(a,b,g,c),b.child;case 6:return null===a&&ph(b),null;case 13:return ti(a,b,c);case 4:return eh(b,b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=Yg(b,null,d,c):fi(a,b,d,c),b.child;case 11:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:lg(d,e),gi(a,b,d,e,c);case 7:return fi(a,b,b.pendingProps,c),b.child;case 8:return fi(a,b,b.pendingProps.children,c),b.child;case 12:return fi(a,b,b.pendingProps.children,c),b.child;case 10:a:{d=b.type._context;e=b.pendingProps;g=b.memoizedProps;f=e.value;var h=b.type._context;I(mg,h._currentValue);h._currentValue=f;if(null!==g)if(h=g.value,f=He(h,f)?0:("function"===typeof d._calculateChangedBits?d._calculateChangedBits(h,f):1073741823)|0,0===f){if(g.children===e.children&&!N.current){b=hi(a,b,c);break a;}}else for(h=b.child,null!==h&&(h["return"]=b);null!==h;){var k=h.dependencies;if(null!==k){g=h.child;for(var l=k.firstContext;null!==l;){if(l.context===d&&0!==(l.observedBits&f)){1===h.tag&&(l=zg(-1,c&-c),l.tag=2,Ag(h,l));h.lanes|=c;l=h.alternate;null!==l&&(l.lanes|=c);sg(h["return"],c);k.lanes|=c;break;}l=l.next;}}else g=10===h.tag?h.type===b.type?null:h.child:h.child;if(null!==g)g["return"]=h;else for(g=h;null!==g;){if(g===b){g=null;break;}h=g.sibling;if(null!==h){h["return"]=g["return"];g=h;break;}g=g["return"];}h=g;}fi(a,b,e.children,c);b=b.child;}return b;case 9:return e=b.type,f=b.pendingProps,d=f.children,tg(b,c),e=vg(e,f.unstable_observedBits),d=d(e),b.flags|=1,fi(a,b,d,c),b.child;case 14:return e=b.type,f=lg(e,b.pendingProps),f=lg(e.type,f),ii(a,b,e,f,d,c);case 15:return ki(a,b,b.type,b.pendingProps,d,c);case 17:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:lg(d,e),null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2),b.tag=1,Ff(d)?(a=!0,Jf(b)):a=!1,tg(b,c),Mg(b,d,e),Og(b,d,e,c),qi(null,b,d,!0,a,c);case 19:return Ai(a,b,c);case 23:return mi(a,b,c);case 24:return mi(a,b,c);}throw Error(y(156,b.tag));};function ik(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this["return"]=this.stateNode=this.type=this.elementType=null;this.index=0;this.ref=null;this.pendingProps=b;this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.flags=0;this.lastEffect=this.firstEffect=this.nextEffect=null;this.childLanes=this.lanes=0;this.alternate=null;}function nh(a,b,c,d){return new ik(a,b,c,d);}function ji(a){a=a.prototype;return !(!a||!a.isReactComponent);}function hk(a){if("function"===typeof a)return ji(a)?1:0;if(void 0!==a&&null!==a){a=a.$$typeof;if(a===Aa)return 11;if(a===Da)return 14;}return 2;}function Tg(a,b){var c=a.alternate;null===c?(c=nh(a.tag,b,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.pendingProps=b,c.type=a.type,c.flags=0,c.nextEffect=null,c.firstEffect=null,c.lastEffect=null);c.childLanes=a.childLanes;c.lanes=a.lanes;c.child=a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;b=a.dependencies;c.dependencies=null===b?null:{lanes:b.lanes,firstContext:b.firstContext};c.sibling=a.sibling;c.index=a.index;c.ref=a.ref;return c;}function Vg(a,b,c,d,e,f){var g=2;d=a;if("function"===typeof a)ji(a)&&(g=1);else if("string"===typeof a)g=5;else a:switch(a){case ua:return Xg(c.children,e,f,b);case Ha:g=8;e|=16;break;case wa:g=8;e|=1;break;case xa:return a=nh(12,c,b,e|8),a.elementType=xa,a.type=xa,a.lanes=f,a;case Ba:return a=nh(13,c,b,e),a.type=Ba,a.elementType=Ba,a.lanes=f,a;case Ca:return a=nh(19,c,b,e),a.elementType=Ca,a.lanes=f,a;case Ia:return vi(c,e,f,b);case Ja:return a=nh(24,c,b,e),a.elementType=Ja,a.lanes=f,a;default:if("object"===_typeof$1(a)&&null!==a)switch(a.$$typeof){case ya:g=10;break a;case za:g=9;break a;case Aa:g=11;break a;case Da:g=14;break a;case Ea:g=16;d=null;break a;case Fa:g=22;break a;}throw Error(y(130,null==a?a:_typeof$1(a),""));}b=nh(g,c,b,e);b.elementType=a;b.type=d;b.lanes=f;return b;}function Xg(a,b,c,d){a=nh(7,a,d,b);a.lanes=c;return a;}function vi(a,b,c,d){a=nh(23,a,d,b);a.elementType=Ia;a.lanes=c;return a;}function Ug(a,b,c){a=nh(6,a,null,b);a.lanes=c;return a;}function Wg(a,b,c){b=nh(4,null!==a.children?a.children:[],a.key,b);b.lanes=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b;}function jk(a,b,c){this.tag=b;this.containerInfo=a;this.finishedWork=this.pingCache=this.current=this.pendingChildren=null;this.timeoutHandle=-1;this.pendingContext=this.context=null;this.hydrate=c;this.callbackNode=null;this.callbackPriority=0;this.eventTimes=Zc(0);this.expirationTimes=Zc(-1);this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0;this.entanglements=Zc(0);this.mutableSourceEagerHydrationData=null;}function kk(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return {$$typeof:ta,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c};}function lk(a,b,c,d){var e=b.current,f=Hg(),g=Ig(e);a:if(c){c=c._reactInternals;b:{if(Zb(c)!==c||1!==c.tag)throw Error(y(170));var h=c;do{switch(h.tag){case 3:h=h.stateNode.context;break b;case 1:if(Ff(h.type)){h=h.stateNode.__reactInternalMemoizedMergedChildContext;break b;}}h=h["return"];}while(null!==h);throw Error(y(171));}if(1===c.tag){var k=c.type;if(Ff(k)){c=If(c,k,h);break a;}}c=h;}else c=Cf;null===b.context?b.context=c:b.pendingContext=c;b=zg(f,g);b.payload={element:a};d=void 0===d?null:d;null!==d&&(b.callback=d);Ag(e,b);Jg(e,g,f);return g;}function mk(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode;}}function nk(a,b){a=a.memoizedState;if(null!==a&&null!==a.dehydrated){var c=a.retryLane;a.retryLane=0!==c&&c<b?c:b;}}function ok(a,b){nk(a,b);(a=a.alternate)&&nk(a,b);}function pk(){return null;}function qk(a,b,c){var d=null!=c&&null!=c.hydrationOptions&&c.hydrationOptions.mutableSources||null;c=new jk(a,b,null!=c&&!0===c.hydrate);b=nh(3,null,null,2===b?7:1===b?3:0);c.current=b;b.stateNode=c;xg(b);a[ff]=c.current;cf(8===a.nodeType?a.parentNode:a);if(d)for(a=0;a<d.length;a++){b=d[a];var e=b._getVersion;e=e(b._source);null==c.mutableSourceEagerHydrationData?c.mutableSourceEagerHydrationData=[b,e]:c.mutableSourceEagerHydrationData.push(b,e);}this._internalRoot=c;}qk.prototype.render=function(a){lk(a,this._internalRoot,null,null);};qk.prototype.unmount=function(){var a=this._internalRoot,b=a.containerInfo;lk(null,a,null,function(){b[ff]=null;});};function rk(a){return !(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue));}function sk(a,b){b||(b=a?9===a.nodeType?a.documentElement:a.firstChild:null,b=!(!b||1!==b.nodeType||!b.hasAttribute("data-reactroot")));if(!b)for(var c;c=a.lastChild;){a.removeChild(c);}return new qk(a,0,b?{hydrate:!0}:void 0);}function tk(a,b,c,d,e){var f=c._reactRootContainer;if(f){var g=f._internalRoot;if("function"===typeof e){var h=e;e=function e(){var a=mk(g);h.call(a);};}lk(b,g,a,e);}else {f=c._reactRootContainer=sk(c,d);g=f._internalRoot;if("function"===typeof e){var k=e;e=function e(){var a=mk(g);k.call(a);};}Xj(function(){lk(b,g,a,e);});}return mk(g);}ec=function ec(a){if(13===a.tag){var b=Hg();Jg(a,4,b);ok(a,4);}};fc=function fc(a){if(13===a.tag){var b=Hg();Jg(a,67108864,b);ok(a,67108864);}};gc=function gc(a){if(13===a.tag){var b=Hg(),c=Ig(a);Jg(a,c,b);ok(a,c);}};hc=function hc(a,b){return b();};yb=function yb(a,b,c){switch(b){case"input":ab(a,c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;){c=c.parentNode;}c=c.querySelectorAll("input[name="+JSON.stringify(""+b)+'][type="radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=Db(d);if(!e)throw Error(y(90));Wa(d);ab(d,e);}}}break;case"textarea":ib(a,c);break;case"select":b=c.value,null!=b&&fb(a,!!c.multiple,b,!1);}};Gb=Wj;Hb=function Hb(a,b,c,d,e){var f=X;X|=4;try{return gg(98,a.bind(null,b,c,d,e));}finally{X=f,0===X&&(wj(),ig());}};Ib=function Ib(){0===(X&49)&&(Vj(),Oj());};Jb=function Jb(a,b){var c=X;X|=2;try{return a(b);}finally{X=c,0===X&&(wj(),ig());}};function uk(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!rk(b))throw Error(y(200));return kk(a,b,null,c);}var vk={Events:[Cb,ue,Db,Eb,Fb,Oj,{current:!1}]},wk={findFiberByHostInstance:wc,bundleType:0,version:"17.0.1",rendererPackageName:"react-dom"};var xk={bundleType:wk.bundleType,version:wk.version,rendererPackageName:wk.rendererPackageName,rendererConfig:wk.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ra.ReactCurrentDispatcher,findHostInstanceByFiber:function findHostInstanceByFiber(a){a=cc(a);return null===a?null:a.stateNode;},findFiberByHostInstance:wk.findFiberByHostInstance||pk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var yk=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yk.isDisabled&&yk.supportsFiber)try{Lf=yk.inject(xk),Mf=yk;}catch(a){}}exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vk;exports.createPortal=uk;exports.findDOMNode=function(a){if(null==a)return null;if(1===a.nodeType)return a;var b=a._reactInternals;if(void 0===b){if("function"===typeof a.render)throw Error(y(188));throw Error(y(268,Object.keys(a)));}a=cc(b);a=null===a?null:a.stateNode;return a;};exports.flushSync=function(a,b){var c=X;if(0!==(c&48))return a(b);X|=1;try{if(a)return gg(99,a.bind(null,b));}finally{X=c,ig();}};exports.hydrate=function(a,b,c){if(!rk(b))throw Error(y(200));return tk(null,a,b,!0,c);};exports.render=function(a,b,c){if(!rk(b))throw Error(y(200));return tk(null,a,b,!1,c);};exports.unmountComponentAtNode=function(a){if(!rk(a))throw Error(y(40));return a._reactRootContainer?(Xj(function(){tk(null,null,a,!1,function(){a._reactRootContainer=null;a[ff]=null;});}),!0):!1;};exports.unstable_batchedUpdates=Wj;exports.unstable_createPortal=function(a,b){return uk(a,b,2<arguments.length&&void 0!==arguments[2]?arguments[2]:null);};exports.unstable_renderSubtreeIntoContainer=function(a,b,c,d){if(!rk(c))throw Error(y(200));if(null==a||void 0===a._reactInternals)throw Error(y(38));return tk(a,b,c,!1,d);};exports.version="17.0.1";var reactDom_production_min=/*#__PURE__*/Object.freeze({__proto__:null});if(process.env.NODE_ENV!=="production"){(function(){var React=require('react');var _assign=require('object-assign');var Scheduler=require('scheduler');var tracing=require('scheduler/tracing');var ReactSharedInternals=React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;// by calls to these methods by a Babel plugin.
//
// In PROD (or in packages without access to React internals),
// they are left as they are instead.
function warn(format){{for(var _len=arguments.length,args=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++){args[_key-1]=arguments[_key];}printWarning('warn',format,args);}}function error(format){{for(var _len2=arguments.length,args=new Array(_len2>1?_len2-1:0),_key2=1;_key2<_len2;_key2++){args[_key2-1]=arguments[_key2];}printWarning('error',format,args);}}function printWarning(level,format,args){// When changing this logic, you might want to also
// update consoleWithStackDev.www.js as well.
{var ReactDebugCurrentFrame=ReactSharedInternals.ReactDebugCurrentFrame;var stack=ReactDebugCurrentFrame.getStackAddendum();if(stack!==''){format+='%s';args=args.concat([stack]);}var argsWithFormat=args.map(function(item){return ''+item;});// Careful: RN currently depends on this prefix
argsWithFormat.unshift('Warning: '+format);// We intentionally don't use spread (or .apply) directly because it
// breaks IE9: https://github.com/facebook/react/issues/13610
// eslint-disable-next-line react-internal/no-production-logging
Function.prototype.apply.call(console[level],console,argsWithFormat);}}if(!React){{throw Error("ReactDOM was loaded before React. Make sure you load the React package before loading ReactDOM.");}}var FunctionComponent=0;var ClassComponent=1;var IndeterminateComponent=2;// Before we know whether it is function or class
var HostRoot=3;// Root of a host tree. Could be nested inside another node.
var HostPortal=4;// A subtree. Could be an entry point to a different renderer.
var HostComponent=5;var HostText=6;var Fragment=7;var Mode=8;var ContextConsumer=9;var ContextProvider=10;var ForwardRef=11;var Profiler=12;var SuspenseComponent=13;var MemoComponent=14;var SimpleMemoComponent=15;var LazyComponent=16;var IncompleteClassComponent=17;var DehydratedFragment=18;var SuspenseListComponent=19;var FundamentalComponent=20;var ScopeComponent=21;var Block=22;var OffscreenComponent=23;var LegacyHiddenComponent=24;// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.
var enableProfilerTimer=true;// Record durations for commit and passive effects phases.
var enableFundamentalAPI=false;// Experimental Scope support.
var enableNewReconciler=false;// Errors that are thrown while unmounting (or after in the case of passive effects)
var warnAboutStringRefs=false;var allNativeEvents=new Set();/**
 * Mapping from registration name to event name
 */var registrationNameDependencies={};/**
 * Mapping from lowercase registration names to the properly cased version,
 * used to warn in the case of missing event handlers. Available
 * only in true.
 * @type {Object}
 */var possibleRegistrationNames={};// Trust the developer to only use possibleRegistrationNames in true
function registerTwoPhaseEvent(registrationName,dependencies){registerDirectEvent(registrationName,dependencies);registerDirectEvent(registrationName+'Capture',dependencies);}function registerDirectEvent(registrationName,dependencies){{if(registrationNameDependencies[registrationName]){error('EventRegistry: More than one plugin attempted to publish the same '+'registration name, `%s`.',registrationName);}}registrationNameDependencies[registrationName]=dependencies;{var lowerCasedName=registrationName.toLowerCase();possibleRegistrationNames[lowerCasedName]=registrationName;if(registrationName==='onDoubleClick'){possibleRegistrationNames.ondblclick=registrationName;}}for(var i=0;i<dependencies.length;i++){allNativeEvents.add(dependencies[i]);}}var canUseDOM=!!(typeof window!=='undefined'&&typeof window.document!=='undefined'&&typeof window.document.createElement!=='undefined');// A reserved attribute.
// It is handled by React separately and shouldn't be written to the DOM.
var RESERVED=0;// A simple string attribute.
// Attributes that aren't in the filter are presumed to have this type.
var STRING=1;// A string attribute that accepts booleans in React. In HTML, these are called
// "enumerated" attributes with "true" and "false" as possible values.
// When true, it should be set to a "true" string.
// When false, it should be set to a "false" string.
var BOOLEANISH_STRING=2;// A real boolean attribute.
// When true, it should be present (set either to an empty string or its name).
// When false, it should be omitted.
var BOOLEAN=3;// An attribute that can be used as a flag as well as with a value.
// When true, it should be present (set either to an empty string or its name).
// When false, it should be omitted.
// For any other value, should be present with that value.
var OVERLOADED_BOOLEAN=4;// An attribute that must be numeric or parse as a numeric.
// When falsy, it should be removed.
var NUMERIC=5;// An attribute that must be positive numeric or parse as a positive numeric.
// When falsy, it should be removed.
var POSITIVE_NUMERIC=6;/* eslint-disable max-len */var ATTRIBUTE_NAME_START_CHAR=":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD";/* eslint-enable max-len */var ATTRIBUTE_NAME_CHAR=ATTRIBUTE_NAME_START_CHAR+"\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040";var ROOT_ATTRIBUTE_NAME='data-reactroot';var VALID_ATTRIBUTE_NAME_REGEX=new RegExp('^['+ATTRIBUTE_NAME_START_CHAR+']['+ATTRIBUTE_NAME_CHAR+']*$');var hasOwnProperty=Object.prototype.hasOwnProperty;var illegalAttributeNameCache={};var validatedAttributeNameCache={};function isAttributeNameSafe(attributeName){if(hasOwnProperty.call(validatedAttributeNameCache,attributeName)){return true;}if(hasOwnProperty.call(illegalAttributeNameCache,attributeName)){return false;}if(VALID_ATTRIBUTE_NAME_REGEX.test(attributeName)){validatedAttributeNameCache[attributeName]=true;return true;}illegalAttributeNameCache[attributeName]=true;{error('Invalid attribute name: `%s`',attributeName);}return false;}function shouldIgnoreAttribute(name,propertyInfo,isCustomComponentTag){if(propertyInfo!==null){return propertyInfo.type===RESERVED;}if(isCustomComponentTag){return false;}if(name.length>2&&(name[0]==='o'||name[0]==='O')&&(name[1]==='n'||name[1]==='N')){return true;}return false;}function shouldRemoveAttributeWithWarning(name,value,propertyInfo,isCustomComponentTag){if(propertyInfo!==null&&propertyInfo.type===RESERVED){return false;}switch(_typeof$1(value)){case'function':// $FlowIssue symbol is perfectly valid here
case'symbol':// eslint-disable-line
return true;case'boolean':{if(isCustomComponentTag){return false;}if(propertyInfo!==null){return !propertyInfo.acceptsBooleans;}else {var prefix=name.toLowerCase().slice(0,5);return prefix!=='data-'&&prefix!=='aria-';}}default:return false;}}function shouldRemoveAttribute(name,value,propertyInfo,isCustomComponentTag){if(value===null||typeof value==='undefined'){return true;}if(shouldRemoveAttributeWithWarning(name,value,propertyInfo,isCustomComponentTag)){return true;}if(isCustomComponentTag){return false;}if(propertyInfo!==null){switch(propertyInfo.type){case BOOLEAN:return !value;case OVERLOADED_BOOLEAN:return value===false;case NUMERIC:return isNaN(value);case POSITIVE_NUMERIC:return isNaN(value)||value<1;}}return false;}function getPropertyInfo(name){return properties.hasOwnProperty(name)?properties[name]:null;}function PropertyInfoRecord(name,type,mustUseProperty,attributeName,attributeNamespace,sanitizeURL,removeEmptyString){this.acceptsBooleans=type===BOOLEANISH_STRING||type===BOOLEAN||type===OVERLOADED_BOOLEAN;this.attributeName=attributeName;this.attributeNamespace=attributeNamespace;this.mustUseProperty=mustUseProperty;this.propertyName=name;this.type=type;this.sanitizeURL=sanitizeURL;this.removeEmptyString=removeEmptyString;}// When adding attributes to this list, be sure to also add them to
// the `possibleStandardNames` module to ensure casing and incorrect
// name warnings.
var properties={};// These props are reserved by React. They shouldn't be written to the DOM.
var reservedProps=['children','dangerouslySetInnerHTML',// TODO: This prevents the assignment of defaultValue to regular
// elements (not just inputs). Now that ReactDOMInput assigns to the
// defaultValue property -- do we need this?
'defaultValue','defaultChecked','innerHTML','suppressContentEditableWarning','suppressHydrationWarning','style'];reservedProps.forEach(function(name){properties[name]=new PropertyInfoRecord(name,RESERVED,false,// mustUseProperty
name,// attributeName
null,// attributeNamespace
false,// sanitizeURL
false);});// A few React string attributes have a different name.
// This is a mapping from React prop names to the attribute names.
[['acceptCharset','accept-charset'],['className','class'],['htmlFor','for'],['httpEquiv','http-equiv']].forEach(function(_ref){var name=_ref[0],attributeName=_ref[1];properties[name]=new PropertyInfoRecord(name,STRING,false,// mustUseProperty
attributeName,// attributeName
null,// attributeNamespace
false,// sanitizeURL
false);});// These are "enumerated" HTML attributes that accept "true" and "false".
// In React, we let users pass `true` and `false` even though technically
// these aren't boolean attributes (they are coerced to strings).
['contentEditable','draggable','spellCheck','value'].forEach(function(name){properties[name]=new PropertyInfoRecord(name,BOOLEANISH_STRING,false,// mustUseProperty
name.toLowerCase(),// attributeName
null,// attributeNamespace
false,// sanitizeURL
false);});// These are "enumerated" SVG attributes that accept "true" and "false".
// In React, we let users pass `true` and `false` even though technically
// these aren't boolean attributes (they are coerced to strings).
// Since these are SVG attributes, their attribute names are case-sensitive.
['autoReverse','externalResourcesRequired','focusable','preserveAlpha'].forEach(function(name){properties[name]=new PropertyInfoRecord(name,BOOLEANISH_STRING,false,// mustUseProperty
name,// attributeName
null,// attributeNamespace
false,// sanitizeURL
false);});// These are HTML boolean attributes.
['allowFullScreen','async',// Note: there is a special case that prevents it from being written to the DOM
// on the client side because the browsers are inconsistent. Instead we call focus().
'autoFocus','autoPlay','controls','default','defer','disabled','disablePictureInPicture','disableRemotePlayback','formNoValidate','hidden','loop','noModule','noValidate','open','playsInline','readOnly','required','reversed','scoped','seamless',// Microdata
'itemScope'].forEach(function(name){properties[name]=new PropertyInfoRecord(name,BOOLEAN,false,// mustUseProperty
name.toLowerCase(),// attributeName
null,// attributeNamespace
false,// sanitizeURL
false);});// These are the few React props that we set as DOM properties
// rather than attributes. These are all booleans.
['checked',// Note: `option.selected` is not updated if `select.multiple` is
// disabled with `removeAttribute`. We have special logic for handling this.
'multiple','muted','selected'// NOTE: if you add a camelCased prop to this list,
// you'll need to set attributeName to name.toLowerCase()
// instead in the assignment below.
].forEach(function(name){properties[name]=new PropertyInfoRecord(name,BOOLEAN,true,// mustUseProperty
name,// attributeName
null,// attributeNamespace
false,// sanitizeURL
false);});// These are HTML attributes that are "overloaded booleans": they behave like
// booleans, but can also accept a string value.
['capture','download'// NOTE: if you add a camelCased prop to this list,
// you'll need to set attributeName to name.toLowerCase()
// instead in the assignment below.
].forEach(function(name){properties[name]=new PropertyInfoRecord(name,OVERLOADED_BOOLEAN,false,// mustUseProperty
name,// attributeName
null,// attributeNamespace
false,// sanitizeURL
false);});// These are HTML attributes that must be positive numbers.
['cols','rows','size','span'// NOTE: if you add a camelCased prop to this list,
// you'll need to set attributeName to name.toLowerCase()
// instead in the assignment below.
].forEach(function(name){properties[name]=new PropertyInfoRecord(name,POSITIVE_NUMERIC,false,// mustUseProperty
name,// attributeName
null,// attributeNamespace
false,// sanitizeURL
false);});// These are HTML attributes that must be numbers.
['rowSpan','start'].forEach(function(name){properties[name]=new PropertyInfoRecord(name,NUMERIC,false,// mustUseProperty
name.toLowerCase(),// attributeName
null,// attributeNamespace
false,// sanitizeURL
false);});var CAMELIZE=/[\-\:]([a-z])/g;var capitalize=function capitalize(token){return token[1].toUpperCase();};// This is a list of all SVG attributes that need special casing, namespacing,
// or boolean value assignment. Regular attributes that just accept strings
// and have the same names are omitted, just like in the HTML attribute filter.
// Some of these attributes can be hard to find. This list was created by
// scraping the MDN documentation.
['accent-height','alignment-baseline','arabic-form','baseline-shift','cap-height','clip-path','clip-rule','color-interpolation','color-interpolation-filters','color-profile','color-rendering','dominant-baseline','enable-background','fill-opacity','fill-rule','flood-color','flood-opacity','font-family','font-size','font-size-adjust','font-stretch','font-style','font-variant','font-weight','glyph-name','glyph-orientation-horizontal','glyph-orientation-vertical','horiz-adv-x','horiz-origin-x','image-rendering','letter-spacing','lighting-color','marker-end','marker-mid','marker-start','overline-position','overline-thickness','paint-order','panose-1','pointer-events','rendering-intent','shape-rendering','stop-color','stop-opacity','strikethrough-position','strikethrough-thickness','stroke-dasharray','stroke-dashoffset','stroke-linecap','stroke-linejoin','stroke-miterlimit','stroke-opacity','stroke-width','text-anchor','text-decoration','text-rendering','underline-position','underline-thickness','unicode-bidi','unicode-range','units-per-em','v-alphabetic','v-hanging','v-ideographic','v-mathematical','vector-effect','vert-adv-y','vert-origin-x','vert-origin-y','word-spacing','writing-mode','xmlns:xlink','x-height'// NOTE: if you add a camelCased prop to this list,
// you'll need to set attributeName to name.toLowerCase()
// instead in the assignment below.
].forEach(function(attributeName){var name=attributeName.replace(CAMELIZE,capitalize);properties[name]=new PropertyInfoRecord(name,STRING,false,// mustUseProperty
attributeName,null,// attributeNamespace
false,// sanitizeURL
false);});// String SVG attributes with the xlink namespace.
['xlink:actuate','xlink:arcrole','xlink:role','xlink:show','xlink:title','xlink:type'// NOTE: if you add a camelCased prop to this list,
// you'll need to set attributeName to name.toLowerCase()
// instead in the assignment below.
].forEach(function(attributeName){var name=attributeName.replace(CAMELIZE,capitalize);properties[name]=new PropertyInfoRecord(name,STRING,false,// mustUseProperty
attributeName,'http://www.w3.org/1999/xlink',false,// sanitizeURL
false);});// String SVG attributes with the xml namespace.
['xml:base','xml:lang','xml:space'// NOTE: if you add a camelCased prop to this list,
// you'll need to set attributeName to name.toLowerCase()
// instead in the assignment below.
].forEach(function(attributeName){var name=attributeName.replace(CAMELIZE,capitalize);properties[name]=new PropertyInfoRecord(name,STRING,false,// mustUseProperty
attributeName,'http://www.w3.org/XML/1998/namespace',false,// sanitizeURL
false);});// These attribute exists both in HTML and SVG.
// The attribute name is case-sensitive in SVG so we can't just use
// the React name like we do for attributes that exist only in HTML.
['tabIndex','crossOrigin'].forEach(function(attributeName){properties[attributeName]=new PropertyInfoRecord(attributeName,STRING,false,// mustUseProperty
attributeName.toLowerCase(),// attributeName
null,// attributeNamespace
false,// sanitizeURL
false);});// These attributes accept URLs. These must not allow javascript: URLS.
// These will also need to accept Trusted Types object in the future.
var xlinkHref='xlinkHref';properties[xlinkHref]=new PropertyInfoRecord('xlinkHref',STRING,false,// mustUseProperty
'xlink:href','http://www.w3.org/1999/xlink',true,// sanitizeURL
false);['src','href','action','formAction'].forEach(function(attributeName){properties[attributeName]=new PropertyInfoRecord(attributeName,STRING,false,// mustUseProperty
attributeName.toLowerCase(),// attributeName
null,// attributeNamespace
true,// sanitizeURL
true);});// and any newline or tab are filtered out as if they're not part of the URL.
// https://url.spec.whatwg.org/#url-parsing
// Tab or newline are defined as \r\n\t:
// https://infra.spec.whatwg.org/#ascii-tab-or-newline
// A C0 control is a code point in the range \u0000 NULL to \u001F
// INFORMATION SEPARATOR ONE, inclusive:
// https://infra.spec.whatwg.org/#c0-control-or-space
/* eslint-disable max-len */var isJavaScriptProtocol=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i;var didWarn=false;function sanitizeURL(url){{if(!didWarn&&isJavaScriptProtocol.test(url)){didWarn=true;error('A future version of React will block javascript: URLs as a security precaution. '+'Use event handlers instead if you can. If you need to generate unsafe HTML try '+'using dangerouslySetInnerHTML instead. React was passed %s.',JSON.stringify(url));}}}/**
 * Get the value for a property on a node. Only used in DEV for SSR validation.
 * The "expected" argument is used as a hint of what the expected value is.
 * Some properties have multiple equivalent values.
 */function getValueForProperty(node,name,expected,propertyInfo){{if(propertyInfo.mustUseProperty){var propertyName=propertyInfo.propertyName;return node[propertyName];}else {if(propertyInfo.sanitizeURL){// If we haven't fully disabled javascript: URLs, and if
// the hydration is successful of a javascript: URL, we
// still want to warn on the client.
sanitizeURL(''+expected);}var attributeName=propertyInfo.attributeName;var stringValue=null;if(propertyInfo.type===OVERLOADED_BOOLEAN){if(node.hasAttribute(attributeName)){var value=node.getAttribute(attributeName);if(value===''){return true;}if(shouldRemoveAttribute(name,expected,propertyInfo,false)){return value;}if(value===''+expected){return expected;}return value;}}else if(node.hasAttribute(attributeName)){if(shouldRemoveAttribute(name,expected,propertyInfo,false)){// We had an attribute but shouldn't have had one, so read it
// for the error message.
return node.getAttribute(attributeName);}if(propertyInfo.type===BOOLEAN){// If this was a boolean, it doesn't matter what the value is
// the fact that we have it is the same as the expected.
return expected;}// Even if this property uses a namespace we use getAttribute
// because we assume its namespaced name is the same as our config.
// To use getAttributeNS we need the local name which we don't have
// in our config atm.
stringValue=node.getAttribute(attributeName);}if(shouldRemoveAttribute(name,expected,propertyInfo,false)){return stringValue===null?expected:stringValue;}else if(stringValue===''+expected){return expected;}else {return stringValue;}}}}/**
 * Get the value for a attribute on a node. Only used in DEV for SSR validation.
 * The third argument is used as a hint of what the expected value is. Some
 * attributes have multiple equivalent values.
 */function getValueForAttribute(node,name,expected){{if(!isAttributeNameSafe(name)){return;}// If the object is an opaque reference ID, it's expected that
// the next prop is different than the server value, so just return
// expected
if(isOpaqueHydratingObject(expected)){return expected;}if(!node.hasAttribute(name)){return expected===undefined?undefined:null;}var value=node.getAttribute(name);if(value===''+expected){return expected;}return value;}}/**
 * Sets the value for a property on a node.
 *
 * @param {DOMElement} node
 * @param {string} name
 * @param {*} value
 */function setValueForProperty(node,name,value,isCustomComponentTag){var propertyInfo=getPropertyInfo(name);if(shouldIgnoreAttribute(name,propertyInfo,isCustomComponentTag)){return;}if(shouldRemoveAttribute(name,value,propertyInfo,isCustomComponentTag)){value=null;}// If the prop isn't in the special list, treat it as a simple attribute.
if(isCustomComponentTag||propertyInfo===null){if(isAttributeNameSafe(name)){var _attributeName=name;if(value===null){node.removeAttribute(_attributeName);}else {node.setAttribute(_attributeName,''+value);}}return;}var mustUseProperty=propertyInfo.mustUseProperty;if(mustUseProperty){var propertyName=propertyInfo.propertyName;if(value===null){var type=propertyInfo.type;node[propertyName]=type===BOOLEAN?false:'';}else {// Contrary to `setAttribute`, object properties are properly
// `toString`ed by IE8/9.
node[propertyName]=value;}return;}// The rest are treated as attributes with special cases.
var attributeName=propertyInfo.attributeName,attributeNamespace=propertyInfo.attributeNamespace;if(value===null){node.removeAttribute(attributeName);}else {var _type=propertyInfo.type;var attributeValue;if(_type===BOOLEAN||_type===OVERLOADED_BOOLEAN&&value===true){// If attribute type is boolean, we know for sure it won't be an execution sink
// and we won't require Trusted Type here.
attributeValue='';}else {// `setAttribute` with objects becomes only `[object]` in IE8/9,
// ('' + value) makes it output the correct toString()-value.
{attributeValue=''+value;}if(propertyInfo.sanitizeURL){sanitizeURL(attributeValue.toString());}}if(attributeNamespace){node.setAttributeNS(attributeNamespace,attributeName,attributeValue);}else {node.setAttribute(attributeName,attributeValue);}}}// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE=0xeac7;var REACT_PORTAL_TYPE=0xeaca;var REACT_FRAGMENT_TYPE=0xeacb;var REACT_STRICT_MODE_TYPE=0xeacc;var REACT_PROFILER_TYPE=0xead2;var REACT_PROVIDER_TYPE=0xeacd;var REACT_CONTEXT_TYPE=0xeace;var REACT_FORWARD_REF_TYPE=0xead0;var REACT_SUSPENSE_TYPE=0xead1;var REACT_SUSPENSE_LIST_TYPE=0xead8;var REACT_MEMO_TYPE=0xead3;var REACT_LAZY_TYPE=0xead4;var REACT_BLOCK_TYPE=0xead9;var REACT_SERVER_BLOCK_TYPE=0xeada;var REACT_FUNDAMENTAL_TYPE=0xead5;var REACT_SCOPE_TYPE=0xead7;var REACT_OPAQUE_ID_TYPE=0xeae0;var REACT_DEBUG_TRACING_MODE_TYPE=0xeae1;var REACT_OFFSCREEN_TYPE=0xeae2;var REACT_LEGACY_HIDDEN_TYPE=0xeae3;if(typeof Symbol==='function'&&Symbol["for"]){var symbolFor=Symbol["for"];REACT_ELEMENT_TYPE=symbolFor('react.element');REACT_PORTAL_TYPE=symbolFor('react.portal');REACT_FRAGMENT_TYPE=symbolFor('react.fragment');REACT_STRICT_MODE_TYPE=symbolFor('react.strict_mode');REACT_PROFILER_TYPE=symbolFor('react.profiler');REACT_PROVIDER_TYPE=symbolFor('react.provider');REACT_CONTEXT_TYPE=symbolFor('react.context');REACT_FORWARD_REF_TYPE=symbolFor('react.forward_ref');REACT_SUSPENSE_TYPE=symbolFor('react.suspense');REACT_SUSPENSE_LIST_TYPE=symbolFor('react.suspense_list');REACT_MEMO_TYPE=symbolFor('react.memo');REACT_LAZY_TYPE=symbolFor('react.lazy');REACT_BLOCK_TYPE=symbolFor('react.block');REACT_SERVER_BLOCK_TYPE=symbolFor('react.server.block');REACT_FUNDAMENTAL_TYPE=symbolFor('react.fundamental');REACT_SCOPE_TYPE=symbolFor('react.scope');REACT_OPAQUE_ID_TYPE=symbolFor('react.opaque.id');REACT_DEBUG_TRACING_MODE_TYPE=symbolFor('react.debug_trace_mode');REACT_OFFSCREEN_TYPE=symbolFor('react.offscreen');REACT_LEGACY_HIDDEN_TYPE=symbolFor('react.legacy_hidden');}var MAYBE_ITERATOR_SYMBOL=typeof Symbol==='function'&&Symbol.iterator;var FAUX_ITERATOR_SYMBOL='@@iterator';function getIteratorFn(maybeIterable){if(maybeIterable===null||_typeof$1(maybeIterable)!=='object'){return null;}var maybeIterator=MAYBE_ITERATOR_SYMBOL&&maybeIterable[MAYBE_ITERATOR_SYMBOL]||maybeIterable[FAUX_ITERATOR_SYMBOL];if(typeof maybeIterator==='function'){return maybeIterator;}return null;}// Helpers to patch console.logs to avoid logging during side-effect free
// replaying on render function. This currently only patches the object
// lazily which won't cover if the log function was extracted eagerly.
// We could also eagerly patch the method.
var disabledDepth=0;var prevLog;var prevInfo;var prevWarn;var prevError;var prevGroup;var prevGroupCollapsed;var prevGroupEnd;function disabledLog(){}disabledLog.__reactDisabledLog=true;function disableLogs(){{if(disabledDepth===0){/* eslint-disable react-internal/no-production-logging */prevLog=console.log;prevInfo=console.info;prevWarn=console.warn;prevError=console.error;prevGroup=console.group;prevGroupCollapsed=console.groupCollapsed;prevGroupEnd=console.groupEnd;// https://github.com/facebook/react/issues/19099
var props={configurable:true,enumerable:true,value:disabledLog,writable:true};// $FlowFixMe Flow thinks console is immutable.
Object.defineProperties(console,{info:props,log:props,warn:props,error:props,group:props,groupCollapsed:props,groupEnd:props});/* eslint-enable react-internal/no-production-logging */}disabledDepth++;}}function reenableLogs(){{disabledDepth--;if(disabledDepth===0){/* eslint-disable react-internal/no-production-logging */var props={configurable:true,enumerable:true,writable:true};// $FlowFixMe Flow thinks console is immutable.
Object.defineProperties(console,{log:_assign({},props,{value:prevLog}),info:_assign({},props,{value:prevInfo}),warn:_assign({},props,{value:prevWarn}),error:_assign({},props,{value:prevError}),group:_assign({},props,{value:prevGroup}),groupCollapsed:_assign({},props,{value:prevGroupCollapsed}),groupEnd:_assign({},props,{value:prevGroupEnd})});/* eslint-enable react-internal/no-production-logging */}if(disabledDepth<0){error('disabledDepth fell below zero. '+'This is a bug in React. Please file an issue.');}}}var ReactCurrentDispatcher=ReactSharedInternals.ReactCurrentDispatcher;var prefix;function describeBuiltInComponentFrame(name,source,ownerFn){{if(prefix===undefined){// Extract the VM specific prefix used by each line.
try{throw Error();}catch(x){var match=x.stack.trim().match(/\n( *(at )?)/);prefix=match&&match[1]||'';}}// We use the prefix to ensure our stacks line up with native stack frames.
return '\n'+prefix+name;}}var reentry=false;var componentFrameCache;{var PossiblyWeakMap=typeof WeakMap==='function'?WeakMap:Map;componentFrameCache=new PossiblyWeakMap();}function describeNativeComponentFrame(fn,construct){// If something asked for a stack inside a fake render, it should get ignored.
if(!fn||reentry){return '';}{var frame=componentFrameCache.get(fn);if(frame!==undefined){return frame;}}var control;reentry=true;var previousPrepareStackTrace=Error.prepareStackTrace;// $FlowFixMe It does accept undefined.
Error.prepareStackTrace=undefined;var previousDispatcher;{previousDispatcher=ReactCurrentDispatcher.current;// Set the dispatcher in DEV because this might be call in the render function
// for warnings.
ReactCurrentDispatcher.current=null;disableLogs();}try{// This should throw.
if(construct){// Something should be setting the props in the constructor.
var Fake=function Fake(){throw Error();};// $FlowFixMe
Object.defineProperty(Fake.prototype,'props',{set:function set(){// We use a throwing setter instead of frozen or non-writable props
// because that won't throw in a non-strict mode function.
throw Error();}});if((typeof Reflect==="undefined"?"undefined":_typeof$1(Reflect))==='object'&&Reflect.construct){// We construct a different control for this case to include any extra
// frames added by the construct call.
try{Reflect.construct(Fake,[]);}catch(x){control=x;}Reflect.construct(fn,[],Fake);}else {try{Fake.call();}catch(x){control=x;}fn.call(Fake.prototype);}}else {try{throw Error();}catch(x){control=x;}fn();}}catch(sample){// This is inlined manually because closure doesn't do it for us.
if(sample&&control&&typeof sample.stack==='string'){// This extracts the first frame from the sample that isn't also in the control.
// Skipping one frame that we assume is the frame that calls the two.
var sampleLines=sample.stack.split('\n');var controlLines=control.stack.split('\n');var s=sampleLines.length-1;var c=controlLines.length-1;while(s>=1&&c>=0&&sampleLines[s]!==controlLines[c]){// We expect at least one stack frame to be shared.
// Typically this will be the root most one. However, stack frames may be
// cut off due to maximum stack limits. In this case, one maybe cut off
// earlier than the other. We assume that the sample is longer or the same
// and there for cut off earlier. So we should find the root most frame in
// the sample somewhere in the control.
c--;}for(;s>=1&&c>=0;s--,c--){// Next we find the first one that isn't the same which should be the
// frame that called our sample function and the control.
if(sampleLines[s]!==controlLines[c]){// In V8, the first line is describing the message but other VMs don't.
// If we're about to return the first line, and the control is also on the same
// line, that's a pretty good indicator that our sample threw at same line as
// the control. I.e. before we entered the sample frame. So we ignore this result.
// This can happen if you passed a class to function component, or non-function.
if(s!==1||c!==1){do{s--;c--;// We may still have similar intermediate frames from the construct call.
// The next one that isn't the same should be our match though.
if(c<0||sampleLines[s]!==controlLines[c]){// V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
var _frame='\n'+sampleLines[s].replace(' at new ',' at ');{if(typeof fn==='function'){componentFrameCache.set(fn,_frame);}}// Return the line we found.
return _frame;}}while(s>=1&&c>=0);}break;}}}}finally{reentry=false;{ReactCurrentDispatcher.current=previousDispatcher;reenableLogs();}Error.prepareStackTrace=previousPrepareStackTrace;}// Fallback to just using the name if we couldn't make it throw.
var name=fn?fn.displayName||fn.name:'';var syntheticFrame=name?describeBuiltInComponentFrame(name):'';{if(typeof fn==='function'){componentFrameCache.set(fn,syntheticFrame);}}return syntheticFrame;}function describeClassComponentFrame(ctor,source,ownerFn){{return describeNativeComponentFrame(ctor,true);}}function describeFunctionComponentFrame(fn,source,ownerFn){{return describeNativeComponentFrame(fn,false);}}function shouldConstruct(Component){var prototype=Component.prototype;return !!(prototype&&prototype.isReactComponent);}function describeUnknownElementTypeFrameInDEV(type,source,ownerFn){if(type==null){return '';}if(typeof type==='function'){{return describeNativeComponentFrame(type,shouldConstruct(type));}}if(typeof type==='string'){return describeBuiltInComponentFrame(type);}switch(type){case REACT_SUSPENSE_TYPE:return describeBuiltInComponentFrame('Suspense');case REACT_SUSPENSE_LIST_TYPE:return describeBuiltInComponentFrame('SuspenseList');}if(_typeof$1(type)==='object'){switch(type.$$typeof){case REACT_FORWARD_REF_TYPE:return describeFunctionComponentFrame(type.render);case REACT_MEMO_TYPE:// Memo may contain any component type so we recursively resolve it.
return describeUnknownElementTypeFrameInDEV(type.type,source,ownerFn);case REACT_BLOCK_TYPE:return describeFunctionComponentFrame(type._render);case REACT_LAZY_TYPE:{var lazyComponent=type;var payload=lazyComponent._payload;var init=lazyComponent._init;try{// Lazy may contain any component type so we recursively resolve it.
return describeUnknownElementTypeFrameInDEV(init(payload),source,ownerFn);}catch(x){}}}}return '';}function describeFiber(fiber){var owner=fiber._debugOwner?fiber._debugOwner.type:null;var source=fiber._debugSource;switch(fiber.tag){case HostComponent:return describeBuiltInComponentFrame(fiber.type);case LazyComponent:return describeBuiltInComponentFrame('Lazy');case SuspenseComponent:return describeBuiltInComponentFrame('Suspense');case SuspenseListComponent:return describeBuiltInComponentFrame('SuspenseList');case FunctionComponent:case IndeterminateComponent:case SimpleMemoComponent:return describeFunctionComponentFrame(fiber.type);case ForwardRef:return describeFunctionComponentFrame(fiber.type.render);case Block:return describeFunctionComponentFrame(fiber.type._render);case ClassComponent:return describeClassComponentFrame(fiber.type);default:return '';}}function getStackByFiberInDevAndProd(workInProgress){try{var info='';var node=workInProgress;do{info+=describeFiber(node);node=node["return"];}while(node);return info;}catch(x){return '\nError generating stack: '+x.message+'\n'+x.stack;}}function getWrappedName(outerType,innerType,wrapperName){var functionName=innerType.displayName||innerType.name||'';return outerType.displayName||(functionName!==''?wrapperName+"("+functionName+")":wrapperName);}function getContextName(type){return type.displayName||'Context';}function getComponentName(type){if(type==null){// Host root, text node or just invalid type.
return null;}{if(typeof type.tag==='number'){error('Received an unexpected object in getComponentName(). '+'This is likely a bug in React. Please file an issue.');}}if(typeof type==='function'){return type.displayName||type.name||null;}if(typeof type==='string'){return type;}switch(type){case REACT_FRAGMENT_TYPE:return 'Fragment';case REACT_PORTAL_TYPE:return 'Portal';case REACT_PROFILER_TYPE:return 'Profiler';case REACT_STRICT_MODE_TYPE:return 'StrictMode';case REACT_SUSPENSE_TYPE:return 'Suspense';case REACT_SUSPENSE_LIST_TYPE:return 'SuspenseList';}if(_typeof$1(type)==='object'){switch(type.$$typeof){case REACT_CONTEXT_TYPE:var context=type;return getContextName(context)+'.Consumer';case REACT_PROVIDER_TYPE:var provider=type;return getContextName(provider._context)+'.Provider';case REACT_FORWARD_REF_TYPE:return getWrappedName(type,type.render,'ForwardRef');case REACT_MEMO_TYPE:return getComponentName(type.type);case REACT_BLOCK_TYPE:return getComponentName(type._render);case REACT_LAZY_TYPE:{var lazyComponent=type;var payload=lazyComponent._payload;var init=lazyComponent._init;try{return getComponentName(init(payload));}catch(x){return null;}}}}return null;}var ReactDebugCurrentFrame=ReactSharedInternals.ReactDebugCurrentFrame;var current=null;var isRendering=false;function getCurrentFiberOwnerNameInDevOrNull(){{if(current===null){return null;}var owner=current._debugOwner;if(owner!==null&&typeof owner!=='undefined'){return getComponentName(owner.type);}}return null;}function getCurrentFiberStackInDev(){{if(current===null){return '';}// Safe because if current fiber exists, we are reconciling,
// and it is guaranteed to be the work-in-progress version.
return getStackByFiberInDevAndProd(current);}}function resetCurrentFiber(){{ReactDebugCurrentFrame.getCurrentStack=null;current=null;isRendering=false;}}function setCurrentFiber(fiber){{ReactDebugCurrentFrame.getCurrentStack=getCurrentFiberStackInDev;current=fiber;isRendering=false;}}function setIsRendering(rendering){{isRendering=rendering;}}function getIsRendering(){{return isRendering;}}// Flow does not allow string concatenation of most non-string types. To work
// around this limitation, we use an opaque type that can only be obtained by
// passing the value through getToStringValue first.
function toString(value){return ''+value;}function getToStringValue(value){switch(_typeof$1(value)){case'boolean':case'number':case'object':case'string':case'undefined':return value;default:// function, symbol are assigned as empty strings
return '';}}var hasReadOnlyValue={button:true,checkbox:true,image:true,hidden:true,radio:true,reset:true,submit:true};function checkControlledValueProps(tagName,props){{if(!(hasReadOnlyValue[props.type]||props.onChange||props.onInput||props.readOnly||props.disabled||props.value==null)){error('You provided a `value` prop to a form field without an '+'`onChange` handler. This will render a read-only field. If '+'the field should be mutable use `defaultValue`. Otherwise, '+'set either `onChange` or `readOnly`.');}if(!(props.onChange||props.readOnly||props.disabled||props.checked==null)){error('You provided a `checked` prop to a form field without an '+'`onChange` handler. This will render a read-only field. If '+'the field should be mutable use `defaultChecked`. Otherwise, '+'set either `onChange` or `readOnly`.');}}}function isCheckable(elem){var type=elem.type;var nodeName=elem.nodeName;return nodeName&&nodeName.toLowerCase()==='input'&&(type==='checkbox'||type==='radio');}function getTracker(node){return node._valueTracker;}function detachTracker(node){node._valueTracker=null;}function getValueFromNode(node){var value='';if(!node){return value;}if(isCheckable(node)){value=node.checked?'true':'false';}else {value=node.value;}return value;}function trackValueOnNode(node){var valueField=isCheckable(node)?'checked':'value';var descriptor=Object.getOwnPropertyDescriptor(node.constructor.prototype,valueField);var currentValue=''+node[valueField];// if someone has already defined a value or Safari, then bail
// and don't track value will cause over reporting of changes,
// but it's better then a hard failure
// (needed for certain tests that spyOn input values and Safari)
if(node.hasOwnProperty(valueField)||typeof descriptor==='undefined'||typeof descriptor.get!=='function'||typeof descriptor.set!=='function'){return;}var _get=descriptor.get,_set=descriptor.set;Object.defineProperty(node,valueField,{configurable:true,get:function get(){return _get.call(this);},set:function set(value){currentValue=''+value;_set.call(this,value);}});// We could've passed this the first time
// but it triggers a bug in IE11 and Edge 14/15.
// Calling defineProperty() again should be equivalent.
// https://github.com/facebook/react/issues/11768
Object.defineProperty(node,valueField,{enumerable:descriptor.enumerable});var tracker={getValue:function getValue(){return currentValue;},setValue:function setValue(value){currentValue=''+value;},stopTracking:function stopTracking(){detachTracker(node);delete node[valueField];}};return tracker;}function track(node){if(getTracker(node)){return;}// TODO: Once it's just Fiber we can move this to node._wrapperState
node._valueTracker=trackValueOnNode(node);}function updateValueIfChanged(node){if(!node){return false;}var tracker=getTracker(node);// if there is no tracker at this point it's unlikely
// that trying again will succeed
if(!tracker){return true;}var lastValue=tracker.getValue();var nextValue=getValueFromNode(node);if(nextValue!==lastValue){tracker.setValue(nextValue);return true;}return false;}function getActiveElement(doc){doc=doc||(typeof document!=='undefined'?document:undefined);if(typeof doc==='undefined'){return null;}try{return doc.activeElement||doc.body;}catch(e){return doc.body;}}var didWarnValueDefaultValue=false;var didWarnCheckedDefaultChecked=false;var didWarnControlledToUncontrolled=false;var didWarnUncontrolledToControlled=false;function isControlled(props){var usesChecked=props.type==='checkbox'||props.type==='radio';return usesChecked?props.checked!=null:props.value!=null;}/**
 * Implements an <input> host component that allows setting these optional
 * props: `checked`, `value`, `defaultChecked`, and `defaultValue`.
 *
 * If `checked` or `value` are not supplied (or null/undefined), user actions
 * that affect the checked state or value will trigger updates to the element.
 *
 * If they are supplied (and not null/undefined), the rendered element will not
 * trigger updates to the element. Instead, the props must change in order for
 * the rendered element to be updated.
 *
 * The rendered element will be initialized as unchecked (or `defaultChecked`)
 * with an empty value (or `defaultValue`).
 *
 * See http://www.w3.org/TR/2012/WD-html5-20121025/the-input-element.html
 */function getHostProps(element,props){var node=element;var checked=props.checked;var hostProps=_assign({},props,{defaultChecked:undefined,defaultValue:undefined,value:undefined,checked:checked!=null?checked:node._wrapperState.initialChecked});return hostProps;}function initWrapperState(element,props){{checkControlledValueProps('input',props);if(props.checked!==undefined&&props.defaultChecked!==undefined&&!didWarnCheckedDefaultChecked){error('%s contains an input of type %s with both checked and defaultChecked props. '+'Input elements must be either controlled or uncontrolled '+'(specify either the checked prop, or the defaultChecked prop, but not '+'both). Decide between using a controlled or uncontrolled input '+'element and remove one of these props. More info: '+'https://reactjs.org/link/controlled-components',getCurrentFiberOwnerNameInDevOrNull()||'A component',props.type);didWarnCheckedDefaultChecked=true;}if(props.value!==undefined&&props.defaultValue!==undefined&&!didWarnValueDefaultValue){error('%s contains an input of type %s with both value and defaultValue props. '+'Input elements must be either controlled or uncontrolled '+'(specify either the value prop, or the defaultValue prop, but not '+'both). Decide between using a controlled or uncontrolled input '+'element and remove one of these props. More info: '+'https://reactjs.org/link/controlled-components',getCurrentFiberOwnerNameInDevOrNull()||'A component',props.type);didWarnValueDefaultValue=true;}}var node=element;var defaultValue=props.defaultValue==null?'':props.defaultValue;node._wrapperState={initialChecked:props.checked!=null?props.checked:props.defaultChecked,initialValue:getToStringValue(props.value!=null?props.value:defaultValue),controlled:isControlled(props)};}function updateChecked(element,props){var node=element;var checked=props.checked;if(checked!=null){setValueForProperty(node,'checked',checked,false);}}function updateWrapper(element,props){var node=element;{var controlled=isControlled(props);if(!node._wrapperState.controlled&&controlled&&!didWarnUncontrolledToControlled){error('A component is changing an uncontrolled input to be controlled. '+'This is likely caused by the value changing from undefined to '+'a defined value, which should not happen. '+'Decide between using a controlled or uncontrolled input '+'element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components');didWarnUncontrolledToControlled=true;}if(node._wrapperState.controlled&&!controlled&&!didWarnControlledToUncontrolled){error('A component is changing a controlled input to be uncontrolled. '+'This is likely caused by the value changing from a defined to '+'undefined, which should not happen. '+'Decide between using a controlled or uncontrolled input '+'element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components');didWarnControlledToUncontrolled=true;}}updateChecked(element,props);var value=getToStringValue(props.value);var type=props.type;if(value!=null){if(type==='number'){if(value===0&&node.value===''||// We explicitly want to coerce to number here if possible.
// eslint-disable-next-line
node.value!=value){node.value=toString(value);}}else if(node.value!==toString(value)){node.value=toString(value);}}else if(type==='submit'||type==='reset'){// Submit/reset inputs need the attribute removed completely to avoid
// blank-text buttons.
node.removeAttribute('value');return;}{// When syncing the value attribute, the value comes from a cascade of
// properties:
//  1. The value React property
//  2. The defaultValue React property
//  3. Otherwise there should be no change
if(props.hasOwnProperty('value')){setDefaultValue(node,props.type,value);}else if(props.hasOwnProperty('defaultValue')){setDefaultValue(node,props.type,getToStringValue(props.defaultValue));}}{// When syncing the checked attribute, it only changes when it needs
// to be removed, such as transitioning from a checkbox into a text input
if(props.checked==null&&props.defaultChecked!=null){node.defaultChecked=!!props.defaultChecked;}}}function postMountWrapper(element,props,isHydrating){var node=element;// Do not assign value if it is already set. This prevents user text input
// from being lost during SSR hydration.
if(props.hasOwnProperty('value')||props.hasOwnProperty('defaultValue')){var type=props.type;var isButton=type==='submit'||type==='reset';// Avoid setting value attribute on submit/reset inputs as it overrides the
// default value provided by the browser. See: #12872
if(isButton&&(props.value===undefined||props.value===null)){return;}var initialValue=toString(node._wrapperState.initialValue);// Do not assign value if it is already set. This prevents user text input
// from being lost during SSR hydration.
if(!isHydrating){{// When syncing the value attribute, the value property should use
// the wrapperState._initialValue property. This uses:
//
//   1. The value React property when present
//   2. The defaultValue React property when present
//   3. An empty string
if(initialValue!==node.value){node.value=initialValue;}}}{// Otherwise, the value attribute is synchronized to the property,
// so we assign defaultValue to the same thing as the value property
// assignment step above.
node.defaultValue=initialValue;}}// Normally, we'd just do `node.checked = node.checked` upon initial mount, less this bug
// this is needed to work around a chrome bug where setting defaultChecked
// will sometimes influence the value of checked (even after detachment).
// Reference: https://bugs.chromium.org/p/chromium/issues/detail?id=608416
// We need to temporarily unset name to avoid disrupting radio button groups.
var name=node.name;if(name!==''){node.name='';}{// When syncing the checked attribute, both the checked property and
// attribute are assigned at the same time using defaultChecked. This uses:
//
//   1. The checked React property when present
//   2. The defaultChecked React property when present
//   3. Otherwise, false
node.defaultChecked=!node.defaultChecked;node.defaultChecked=!!node._wrapperState.initialChecked;}if(name!==''){node.name=name;}}function restoreControlledState(element,props){var node=element;updateWrapper(node,props);updateNamedCousins(node,props);}function updateNamedCousins(rootNode,props){var name=props.name;if(props.type==='radio'&&name!=null){var queryRoot=rootNode;while(queryRoot.parentNode){queryRoot=queryRoot.parentNode;}// If `rootNode.form` was non-null, then we could try `form.elements`,
// but that sometimes behaves strangely in IE8. We could also try using
// `form.getElementsByName`, but that will only return direct children
// and won't include inputs that use the HTML5 `form=` attribute. Since
// the input might not even be in a form. It might not even be in the
// document. Let's just use the local `querySelectorAll` to ensure we don't
// miss anything.
var group=queryRoot.querySelectorAll('input[name='+JSON.stringify(''+name)+'][type="radio"]');for(var i=0;i<group.length;i++){var otherNode=group[i];if(otherNode===rootNode||otherNode.form!==rootNode.form){continue;}// This will throw if radio buttons rendered by different copies of React
// and the same name are rendered into the same form (same as #1939).
// That's probably okay; we don't support it just as we don't support
// mixing React radio buttons with non-React ones.
var otherProps=getFiberCurrentPropsFromNode(otherNode);if(!otherProps){{throw Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");}}// We need update the tracked value on the named cousin since the value
// was changed but the input saw no event or value set
updateValueIfChanged(otherNode);// If this is a controlled radio button group, forcing the input that
// was previously checked to update will cause it to be come re-checked
// as appropriate.
updateWrapper(otherNode,otherProps);}}}// In Chrome, assigning defaultValue to certain input types triggers input validation.
// For number inputs, the display value loses trailing decimal points. For email inputs,
// Chrome raises "The specified value <x> is not a valid email address".
//
// Here we check to see if the defaultValue has actually changed, avoiding these problems
// when the user is inputting text
//
// https://github.com/facebook/react/issues/7253
function setDefaultValue(node,type,value){if(// Focused number inputs synchronize on blur. See ChangeEventPlugin.js
type!=='number'||getActiveElement(node.ownerDocument)!==node){if(value==null){node.defaultValue=toString(node._wrapperState.initialValue);}else if(node.defaultValue!==toString(value)){node.defaultValue=toString(value);}}}var didWarnSelectedSetOnOption=false;var didWarnInvalidChild=false;function flattenChildren(children){var content='';// Flatten children. We'll warn if they are invalid
// during validateProps() which runs for hydration too.
// Note that this would throw on non-element objects.
// Elements are stringified (which is normally irrelevant
// but matters for <fbt>).
React.Children.forEach(children,function(child){if(child==null){return;}content+=child;// Note: we don't warn about invalid children here.
// Instead, this is done separately below so that
// it happens during the hydration code path too.
});return content;}/**
 * Implements an <option> host component that warns when `selected` is set.
 */function validateProps(element,props){{// This mirrors the code path above, but runs for hydration too.
// Warn about invalid children here so that client and hydration are consistent.
// TODO: this seems like it could cause a DEV-only throw for hydration
// if children contains a non-element object. We should try to avoid that.
if(_typeof$1(props.children)==='object'&&props.children!==null){React.Children.forEach(props.children,function(child){if(child==null){return;}if(typeof child==='string'||typeof child==='number'){return;}if(typeof child.type!=='string'){return;}if(!didWarnInvalidChild){didWarnInvalidChild=true;error('Only strings and numbers are supported as <option> children.');}});}// TODO: Remove support for `selected` in <option>.
if(props.selected!=null&&!didWarnSelectedSetOnOption){error('Use the `defaultValue` or `value` props on <select> instead of '+'setting `selected` on <option>.');didWarnSelectedSetOnOption=true;}}}function postMountWrapper$1(element,props){// value="" should make a value attribute (#6219)
if(props.value!=null){element.setAttribute('value',toString(getToStringValue(props.value)));}}function getHostProps$1(element,props){var hostProps=_assign({children:undefined},props);var content=flattenChildren(props.children);if(content){hostProps.children=content;}return hostProps;}var didWarnValueDefaultValue$1;{didWarnValueDefaultValue$1=false;}function getDeclarationErrorAddendum(){var ownerName=getCurrentFiberOwnerNameInDevOrNull();if(ownerName){return '\n\nCheck the render method of `'+ownerName+'`.';}return '';}var valuePropNames=['value','defaultValue'];/**
 * Validation function for `value` and `defaultValue`.
 */function checkSelectPropTypes(props){{checkControlledValueProps('select',props);for(var i=0;i<valuePropNames.length;i++){var propName=valuePropNames[i];if(props[propName]==null){continue;}var isArray=Array.isArray(props[propName]);if(props.multiple&&!isArray){error('The `%s` prop supplied to <select> must be an array if '+'`multiple` is true.%s',propName,getDeclarationErrorAddendum());}else if(!props.multiple&&isArray){error('The `%s` prop supplied to <select> must be a scalar '+'value if `multiple` is false.%s',propName,getDeclarationErrorAddendum());}}}}function updateOptions(node,multiple,propValue,setDefaultSelected){var options=node.options;if(multiple){var selectedValues=propValue;var selectedValue={};for(var i=0;i<selectedValues.length;i++){// Prefix to avoid chaos with special keys.
selectedValue['$'+selectedValues[i]]=true;}for(var _i=0;_i<options.length;_i++){var selected=selectedValue.hasOwnProperty('$'+options[_i].value);if(options[_i].selected!==selected){options[_i].selected=selected;}if(selected&&setDefaultSelected){options[_i].defaultSelected=true;}}}else {// Do not set `select.value` as exact behavior isn't consistent across all
// browsers for all cases.
var _selectedValue=toString(getToStringValue(propValue));var defaultSelected=null;for(var _i2=0;_i2<options.length;_i2++){if(options[_i2].value===_selectedValue){options[_i2].selected=true;if(setDefaultSelected){options[_i2].defaultSelected=true;}return;}if(defaultSelected===null&&!options[_i2].disabled){defaultSelected=options[_i2];}}if(defaultSelected!==null){defaultSelected.selected=true;}}}/**
 * Implements a <select> host component that allows optionally setting the
 * props `value` and `defaultValue`. If `multiple` is false, the prop must be a
 * stringable. If `multiple` is true, the prop must be an array of stringables.
 *
 * If `value` is not supplied (or null/undefined), user actions that change the
 * selected option will trigger updates to the rendered options.
 *
 * If it is supplied (and not null/undefined), the rendered options will not
 * update in response to user actions. Instead, the `value` prop must change in
 * order for the rendered options to update.
 *
 * If `defaultValue` is provided, any options with the supplied values will be
 * selected.
 */function getHostProps$2(element,props){return _assign({},props,{value:undefined});}function initWrapperState$1(element,props){var node=element;{checkSelectPropTypes(props);}node._wrapperState={wasMultiple:!!props.multiple};{if(props.value!==undefined&&props.defaultValue!==undefined&&!didWarnValueDefaultValue$1){error('Select elements must be either controlled or uncontrolled '+'(specify either the value prop, or the defaultValue prop, but not '+'both). Decide between using a controlled or uncontrolled select '+'element and remove one of these props. More info: '+'https://reactjs.org/link/controlled-components');didWarnValueDefaultValue$1=true;}}}function postMountWrapper$2(element,props){var node=element;node.multiple=!!props.multiple;var value=props.value;if(value!=null){updateOptions(node,!!props.multiple,value,false);}else if(props.defaultValue!=null){updateOptions(node,!!props.multiple,props.defaultValue,true);}}function postUpdateWrapper(element,props){var node=element;var wasMultiple=node._wrapperState.wasMultiple;node._wrapperState.wasMultiple=!!props.multiple;var value=props.value;if(value!=null){updateOptions(node,!!props.multiple,value,false);}else if(wasMultiple!==!!props.multiple){// For simplicity, reapply `defaultValue` if `multiple` is toggled.
if(props.defaultValue!=null){updateOptions(node,!!props.multiple,props.defaultValue,true);}else {// Revert the select back to its default unselected state.
updateOptions(node,!!props.multiple,props.multiple?[]:'',false);}}}function restoreControlledState$1(element,props){var node=element;var value=props.value;if(value!=null){updateOptions(node,!!props.multiple,value,false);}}var didWarnValDefaultVal=false;/**
 * Implements a <textarea> host component that allows setting `value`, and
 * `defaultValue`. This differs from the traditional DOM API because value is
 * usually set as PCDATA children.
 *
 * If `value` is not supplied (or null/undefined), user actions that affect the
 * value will trigger updates to the element.
 *
 * If `value` is supplied (and not null/undefined), the rendered element will
 * not trigger updates to the element. Instead, the `value` prop must change in
 * order for the rendered element to be updated.
 *
 * The rendered element will be initialized with an empty value, the prop
 * `defaultValue` if specified, or the children content (deprecated).
 */function getHostProps$3(element,props){var node=element;if(!(props.dangerouslySetInnerHTML==null)){{throw Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");}}// Always set children to the same thing. In IE9, the selection range will
// get reset if `textContent` is mutated.  We could add a check in setTextContent
// to only set the value if/when the value differs from the node value (which would
// completely solve this IE9 bug), but Sebastian+Sophie seemed to like this
// solution. The value can be a boolean or object so that's why it's forced
// to be a string.
var hostProps=_assign({},props,{value:undefined,defaultValue:undefined,children:toString(node._wrapperState.initialValue)});return hostProps;}function initWrapperState$2(element,props){var node=element;{checkControlledValueProps('textarea',props);if(props.value!==undefined&&props.defaultValue!==undefined&&!didWarnValDefaultVal){error('%s contains a textarea with both value and defaultValue props. '+'Textarea elements must be either controlled or uncontrolled '+'(specify either the value prop, or the defaultValue prop, but not '+'both). Decide between using a controlled or uncontrolled textarea '+'and remove one of these props. More info: '+'https://reactjs.org/link/controlled-components',getCurrentFiberOwnerNameInDevOrNull()||'A component');didWarnValDefaultVal=true;}}var initialValue=props.value;// Only bother fetching default value if we're going to use it
if(initialValue==null){var children=props.children,defaultValue=props.defaultValue;if(children!=null){{error('Use the `defaultValue` or `value` props instead of setting '+'children on <textarea>.');}{if(!(defaultValue==null)){{throw Error("If you supply `defaultValue` on a <textarea>, do not pass children.");}}if(Array.isArray(children)){if(!(children.length<=1)){{throw Error("<textarea> can only have at most one child.");}}children=children[0];}defaultValue=children;}}if(defaultValue==null){defaultValue='';}initialValue=defaultValue;}node._wrapperState={initialValue:getToStringValue(initialValue)};}function updateWrapper$1(element,props){var node=element;var value=getToStringValue(props.value);var defaultValue=getToStringValue(props.defaultValue);if(value!=null){// Cast `value` to a string to ensure the value is set correctly. While
// browsers typically do this as necessary, jsdom doesn't.
var newValue=toString(value);// To avoid side effects (such as losing text selection), only set value if changed
if(newValue!==node.value){node.value=newValue;}if(props.defaultValue==null&&node.defaultValue!==newValue){node.defaultValue=newValue;}}if(defaultValue!=null){node.defaultValue=toString(defaultValue);}}function postMountWrapper$3(element,props){var node=element;// This is in postMount because we need access to the DOM node, which is not
// available until after the component has mounted.
var textContent=node.textContent;// Only set node.value if textContent is equal to the expected
// initial value. In IE10/IE11 there is a bug where the placeholder attribute
// will populate textContent as well.
// https://developer.microsoft.com/microsoft-edge/platform/issues/101525/
if(textContent===node._wrapperState.initialValue){if(textContent!==''&&textContent!==null){node.value=textContent;}}}function restoreControlledState$2(element,props){// DOM component is still mounted; update
updateWrapper$1(element,props);}var HTML_NAMESPACE='http://www.w3.org/1999/xhtml';var MATH_NAMESPACE='http://www.w3.org/1998/Math/MathML';var SVG_NAMESPACE='http://www.w3.org/2000/svg';var Namespaces={html:HTML_NAMESPACE,mathml:MATH_NAMESPACE,svg:SVG_NAMESPACE};// Assumes there is no parent namespace.
function getIntrinsicNamespace(type){switch(type){case'svg':return SVG_NAMESPACE;case'math':return MATH_NAMESPACE;default:return HTML_NAMESPACE;}}function getChildNamespace(parentNamespace,type){if(parentNamespace==null||parentNamespace===HTML_NAMESPACE){// No (or default) parent namespace: potential entry point.
return getIntrinsicNamespace(type);}if(parentNamespace===SVG_NAMESPACE&&type==='foreignObject'){// We're leaving SVG.
return HTML_NAMESPACE;}// By default, pass namespace below.
return parentNamespace;}/* globals MSApp */ /**
 * Create a function which has 'unsafe' privileges (required by windows8 apps)
 */var createMicrosoftUnsafeLocalFunction=function createMicrosoftUnsafeLocalFunction(func){if(typeof MSApp!=='undefined'&&MSApp.execUnsafeLocalFunction){return function(arg0,arg1,arg2,arg3){MSApp.execUnsafeLocalFunction(function(){return func(arg0,arg1,arg2,arg3);});};}else {return func;}};var reusableSVGContainer;/**
 * Set the innerHTML property of a node
 *
 * @param {DOMElement} node
 * @param {string} html
 * @internal
 */var setInnerHTML=createMicrosoftUnsafeLocalFunction(function(node,html){if(node.namespaceURI===Namespaces.svg){if(!('innerHTML'in node)){// IE does not have innerHTML for SVG nodes, so instead we inject the
// new markup in a temp node and then move the child nodes across into
// the target node
reusableSVGContainer=reusableSVGContainer||document.createElement('div');reusableSVGContainer.innerHTML='<svg>'+html.valueOf().toString()+'</svg>';var svgNode=reusableSVGContainer.firstChild;while(node.firstChild){node.removeChild(node.firstChild);}while(svgNode.firstChild){node.appendChild(svgNode.firstChild);}return;}}node.innerHTML=html;});/**
 * HTML nodeType values that represent the type of the node
 */var ELEMENT_NODE=1;var TEXT_NODE=3;var COMMENT_NODE=8;var DOCUMENT_NODE=9;var DOCUMENT_FRAGMENT_NODE=11;/**
 * Set the textContent property of a node. For text updates, it's faster
 * to set the `nodeValue` of the Text node directly instead of using
 * `.textContent` which will remove the existing node and create a new one.
 *
 * @param {DOMElement} node
 * @param {string} text
 * @internal
 */var setTextContent=function setTextContent(node,text){if(text){var firstChild=node.firstChild;if(firstChild&&firstChild===node.lastChild&&firstChild.nodeType===TEXT_NODE){firstChild.nodeValue=text;return;}}node.textContent=text;};// List derived from Gecko source code:
// https://github.com/mozilla/gecko-dev/blob/4e638efc71/layout/style/test/property_database.js
var shorthandToLonghand={animation:['animationDelay','animationDirection','animationDuration','animationFillMode','animationIterationCount','animationName','animationPlayState','animationTimingFunction'],background:['backgroundAttachment','backgroundClip','backgroundColor','backgroundImage','backgroundOrigin','backgroundPositionX','backgroundPositionY','backgroundRepeat','backgroundSize'],backgroundPosition:['backgroundPositionX','backgroundPositionY'],border:['borderBottomColor','borderBottomStyle','borderBottomWidth','borderImageOutset','borderImageRepeat','borderImageSlice','borderImageSource','borderImageWidth','borderLeftColor','borderLeftStyle','borderLeftWidth','borderRightColor','borderRightStyle','borderRightWidth','borderTopColor','borderTopStyle','borderTopWidth'],borderBlockEnd:['borderBlockEndColor','borderBlockEndStyle','borderBlockEndWidth'],borderBlockStart:['borderBlockStartColor','borderBlockStartStyle','borderBlockStartWidth'],borderBottom:['borderBottomColor','borderBottomStyle','borderBottomWidth'],borderColor:['borderBottomColor','borderLeftColor','borderRightColor','borderTopColor'],borderImage:['borderImageOutset','borderImageRepeat','borderImageSlice','borderImageSource','borderImageWidth'],borderInlineEnd:['borderInlineEndColor','borderInlineEndStyle','borderInlineEndWidth'],borderInlineStart:['borderInlineStartColor','borderInlineStartStyle','borderInlineStartWidth'],borderLeft:['borderLeftColor','borderLeftStyle','borderLeftWidth'],borderRadius:['borderBottomLeftRadius','borderBottomRightRadius','borderTopLeftRadius','borderTopRightRadius'],borderRight:['borderRightColor','borderRightStyle','borderRightWidth'],borderStyle:['borderBottomStyle','borderLeftStyle','borderRightStyle','borderTopStyle'],borderTop:['borderTopColor','borderTopStyle','borderTopWidth'],borderWidth:['borderBottomWidth','borderLeftWidth','borderRightWidth','borderTopWidth'],columnRule:['columnRuleColor','columnRuleStyle','columnRuleWidth'],columns:['columnCount','columnWidth'],flex:['flexBasis','flexGrow','flexShrink'],flexFlow:['flexDirection','flexWrap'],font:['fontFamily','fontFeatureSettings','fontKerning','fontLanguageOverride','fontSize','fontSizeAdjust','fontStretch','fontStyle','fontVariant','fontVariantAlternates','fontVariantCaps','fontVariantEastAsian','fontVariantLigatures','fontVariantNumeric','fontVariantPosition','fontWeight','lineHeight'],fontVariant:['fontVariantAlternates','fontVariantCaps','fontVariantEastAsian','fontVariantLigatures','fontVariantNumeric','fontVariantPosition'],gap:['columnGap','rowGap'],grid:['gridAutoColumns','gridAutoFlow','gridAutoRows','gridTemplateAreas','gridTemplateColumns','gridTemplateRows'],gridArea:['gridColumnEnd','gridColumnStart','gridRowEnd','gridRowStart'],gridColumn:['gridColumnEnd','gridColumnStart'],gridColumnGap:['columnGap'],gridGap:['columnGap','rowGap'],gridRow:['gridRowEnd','gridRowStart'],gridRowGap:['rowGap'],gridTemplate:['gridTemplateAreas','gridTemplateColumns','gridTemplateRows'],listStyle:['listStyleImage','listStylePosition','listStyleType'],margin:['marginBottom','marginLeft','marginRight','marginTop'],marker:['markerEnd','markerMid','markerStart'],mask:['maskClip','maskComposite','maskImage','maskMode','maskOrigin','maskPositionX','maskPositionY','maskRepeat','maskSize'],maskPosition:['maskPositionX','maskPositionY'],outline:['outlineColor','outlineStyle','outlineWidth'],overflow:['overflowX','overflowY'],padding:['paddingBottom','paddingLeft','paddingRight','paddingTop'],placeContent:['alignContent','justifyContent'],placeItems:['alignItems','justifyItems'],placeSelf:['alignSelf','justifySelf'],textDecoration:['textDecorationColor','textDecorationLine','textDecorationStyle'],textEmphasis:['textEmphasisColor','textEmphasisStyle'],transition:['transitionDelay','transitionDuration','transitionProperty','transitionTimingFunction'],wordWrap:['overflowWrap']};/**
 * CSS properties which accept numbers but are not in units of "px".
 */var isUnitlessNumber={animationIterationCount:true,borderImageOutset:true,borderImageSlice:true,borderImageWidth:true,boxFlex:true,boxFlexGroup:true,boxOrdinalGroup:true,columnCount:true,columns:true,flex:true,flexGrow:true,flexPositive:true,flexShrink:true,flexNegative:true,flexOrder:true,gridArea:true,gridRow:true,gridRowEnd:true,gridRowSpan:true,gridRowStart:true,gridColumn:true,gridColumnEnd:true,gridColumnSpan:true,gridColumnStart:true,fontWeight:true,lineClamp:true,lineHeight:true,opacity:true,order:true,orphans:true,tabSize:true,widows:true,zIndex:true,zoom:true,// SVG-related properties
fillOpacity:true,floodOpacity:true,stopOpacity:true,strokeDasharray:true,strokeDashoffset:true,strokeMiterlimit:true,strokeOpacity:true,strokeWidth:true};/**
 * @param {string} prefix vendor-specific prefix, eg: Webkit
 * @param {string} key style name, eg: transitionDuration
 * @return {string} style name prefixed with `prefix`, properly camelCased, eg:
 * WebkitTransitionDuration
 */function prefixKey(prefix,key){return prefix+key.charAt(0).toUpperCase()+key.substring(1);}/**
 * Support style names that may come passed in prefixed by adding permutations
 * of vendor prefixes.
 */var prefixes=['Webkit','ms','Moz','O'];// Using Object.keys here, or else the vanilla for-in loop makes IE8 go into an
// infinite loop, because it iterates over the newly added props too.
Object.keys(isUnitlessNumber).forEach(function(prop){prefixes.forEach(function(prefix){isUnitlessNumber[prefixKey(prefix,prop)]=isUnitlessNumber[prop];});});/**
 * Convert a value into the proper css writable value. The style name `name`
 * should be logical (no hyphens), as specified
 * in `CSSProperty.isUnitlessNumber`.
 *
 * @param {string} name CSS property name such as `topMargin`.
 * @param {*} value CSS property value such as `10px`.
 * @return {string} Normalized style value with dimensions applied.
 */function dangerousStyleValue(name,value,isCustomProperty){// Note that we've removed escapeTextForBrowser() calls here since the
// whole string will be escaped when the attribute is injected into
// the markup. If you provide unsafe user data here they can inject
// arbitrary CSS which may be problematic (I couldn't repro this):
// https://www.owasp.org/index.php/XSS_Filter_Evasion_Cheat_Sheet
// http://www.thespanner.co.uk/2007/11/26/ultimate-xss-css-injection/
// This is not an XSS hole but instead a potential CSS injection issue
// which has lead to a greater discussion about how we're going to
// trust URLs moving forward. See #2115901
var isEmpty=value==null||typeof value==='boolean'||value==='';if(isEmpty){return '';}if(!isCustomProperty&&typeof value==='number'&&value!==0&&!(isUnitlessNumber.hasOwnProperty(name)&&isUnitlessNumber[name])){return value+'px';// Presumes implicit 'px' suffix for unitless numbers
}return (''+value).trim();}var uppercasePattern=/([A-Z])/g;var msPattern=/^ms-/;/**
 * Hyphenates a camelcased CSS property name, for example:
 *
 *   > hyphenateStyleName('backgroundColor')
 *   < "background-color"
 *   > hyphenateStyleName('MozTransition')
 *   < "-moz-transition"
 *   > hyphenateStyleName('msTransition')
 *   < "-ms-transition"
 *
 * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
 * is converted to `-ms-`.
 */function hyphenateStyleName(name){return name.replace(uppercasePattern,'-$1').toLowerCase().replace(msPattern,'-ms-');}var warnValidStyle=function warnValidStyle(){};{// 'msTransform' is correct, but the other prefixes should be capitalized
var badVendoredStyleNamePattern=/^(?:webkit|moz|o)[A-Z]/;var msPattern$1=/^-ms-/;var hyphenPattern=/-(.)/g;// style values shouldn't contain a semicolon
var badStyleValueWithSemicolonPattern=/;\s*$/;var warnedStyleNames={};var warnedStyleValues={};var warnedForNaNValue=false;var warnedForInfinityValue=false;var camelize=function camelize(string){return string.replace(hyphenPattern,function(_,character){return character.toUpperCase();});};var warnHyphenatedStyleName=function warnHyphenatedStyleName(name){if(warnedStyleNames.hasOwnProperty(name)&&warnedStyleNames[name]){return;}warnedStyleNames[name]=true;error('Unsupported style property %s. Did you mean %s?',name,// As Andi Smith suggests
// (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
// is converted to lowercase `ms`.
camelize(name.replace(msPattern$1,'ms-')));};var warnBadVendoredStyleName=function warnBadVendoredStyleName(name){if(warnedStyleNames.hasOwnProperty(name)&&warnedStyleNames[name]){return;}warnedStyleNames[name]=true;error('Unsupported vendor-prefixed style property %s. Did you mean %s?',name,name.charAt(0).toUpperCase()+name.slice(1));};var warnStyleValueWithSemicolon=function warnStyleValueWithSemicolon(name,value){if(warnedStyleValues.hasOwnProperty(value)&&warnedStyleValues[value]){return;}warnedStyleValues[value]=true;error("Style property values shouldn't contain a semicolon. "+'Try "%s: %s" instead.',name,value.replace(badStyleValueWithSemicolonPattern,''));};var warnStyleValueIsNaN=function warnStyleValueIsNaN(name,value){if(warnedForNaNValue){return;}warnedForNaNValue=true;error('`NaN` is an invalid value for the `%s` css style property.',name);};var warnStyleValueIsInfinity=function warnStyleValueIsInfinity(name,value){if(warnedForInfinityValue){return;}warnedForInfinityValue=true;error('`Infinity` is an invalid value for the `%s` css style property.',name);};warnValidStyle=function warnValidStyle(name,value){if(name.indexOf('-')>-1){warnHyphenatedStyleName(name);}else if(badVendoredStyleNamePattern.test(name)){warnBadVendoredStyleName(name);}else if(badStyleValueWithSemicolonPattern.test(value)){warnStyleValueWithSemicolon(name,value);}if(typeof value==='number'){if(isNaN(value)){warnStyleValueIsNaN(name,value);}else if(!isFinite(value)){warnStyleValueIsInfinity(name,value);}}};}var warnValidStyle$1=warnValidStyle;/**
 * Operations for dealing with CSS properties.
 */ /**
 * This creates a string that is expected to be equivalent to the style
 * attribute generated by server-side rendering. It by-passes warnings and
 * security checks so it's not safe to use this value for anything other than
 * comparison. It is only used in DEV for SSR validation.
 */function createDangerousStringForStyles(styles){{var serialized='';var delimiter='';for(var styleName in styles){if(!styles.hasOwnProperty(styleName)){continue;}var styleValue=styles[styleName];if(styleValue!=null){var isCustomProperty=styleName.indexOf('--')===0;serialized+=delimiter+(isCustomProperty?styleName:hyphenateStyleName(styleName))+':';serialized+=dangerousStyleValue(styleName,styleValue,isCustomProperty);delimiter=';';}}return serialized||null;}}/**
 * Sets the value for multiple styles on a node.  If a value is specified as
 * '' (empty string), the corresponding style property will be unset.
 *
 * @param {DOMElement} node
 * @param {object} styles
 */function setValueForStyles(node,styles){var style=node.style;for(var styleName in styles){if(!styles.hasOwnProperty(styleName)){continue;}var isCustomProperty=styleName.indexOf('--')===0;{if(!isCustomProperty){warnValidStyle$1(styleName,styles[styleName]);}}var styleValue=dangerousStyleValue(styleName,styles[styleName],isCustomProperty);if(styleName==='float'){styleName='cssFloat';}if(isCustomProperty){style.setProperty(styleName,styleValue);}else {style[styleName]=styleValue;}}}function isValueEmpty(value){return value==null||typeof value==='boolean'||value==='';}/**
 * Given {color: 'red', overflow: 'hidden'} returns {
 *   color: 'color',
 *   overflowX: 'overflow',
 *   overflowY: 'overflow',
 * }. This can be read as "the overflowY property was set by the overflow
 * shorthand". That is, the values are the property that each was derived from.
 */function expandShorthandMap(styles){var expanded={};for(var key in styles){var longhands=shorthandToLonghand[key]||[key];for(var i=0;i<longhands.length;i++){expanded[longhands[i]]=key;}}return expanded;}/**
 * When mixing shorthand and longhand property names, we warn during updates if
 * we expect an incorrect result to occur. In particular, we warn for:
 *
 * Updating a shorthand property (longhand gets overwritten):
 *   {font: 'foo', fontVariant: 'bar'} -> {font: 'baz', fontVariant: 'bar'}
 *   becomes .style.font = 'baz'
 * Removing a shorthand property (longhand gets lost too):
 *   {font: 'foo', fontVariant: 'bar'} -> {fontVariant: 'bar'}
 *   becomes .style.font = ''
 * Removing a longhand property (should revert to shorthand; doesn't):
 *   {font: 'foo', fontVariant: 'bar'} -> {font: 'foo'}
 *   becomes .style.fontVariant = ''
 */function validateShorthandPropertyCollisionInDev(styleUpdates,nextStyles){{if(!nextStyles){return;}var expandedUpdates=expandShorthandMap(styleUpdates);var expandedStyles=expandShorthandMap(nextStyles);var warnedAbout={};for(var key in expandedUpdates){var originalKey=expandedUpdates[key];var correctOriginalKey=expandedStyles[key];if(correctOriginalKey&&originalKey!==correctOriginalKey){var warningKey=originalKey+','+correctOriginalKey;if(warnedAbout[warningKey]){continue;}warnedAbout[warningKey]=true;error('%s a style property during rerender (%s) when a '+'conflicting property is set (%s) can lead to styling bugs. To '+"avoid this, don't mix shorthand and non-shorthand properties "+'for the same value; instead, replace the shorthand with '+'separate values.',isValueEmpty(styleUpdates[originalKey])?'Removing':'Updating',originalKey,correctOriginalKey);}}}}// For HTML, certain tags should omit their close tag. We keep a list for
// those special-case tags.
var omittedCloseTags={area:true,base:true,br:true,col:true,embed:true,hr:true,img:true,input:true,keygen:true,link:true,meta:true,param:true,source:true,track:true,wbr:true// NOTE: menuitem's close tag should be omitted, but that causes problems.
};// `omittedCloseTags` except that `menuitem` should still have its closing tag.
var voidElementTags=_assign({menuitem:true},omittedCloseTags);var HTML='__html';function assertValidProps(tag,props){if(!props){return;}// Note the use of `==` which checks for null or undefined.
if(voidElementTags[tag]){if(!(props.children==null&&props.dangerouslySetInnerHTML==null)){{throw Error(tag+" is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");}}}if(props.dangerouslySetInnerHTML!=null){if(!(props.children==null)){{throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");}}if(!(_typeof$1(props.dangerouslySetInnerHTML)==='object'&&HTML in props.dangerouslySetInnerHTML)){{throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");}}}{if(!props.suppressContentEditableWarning&&props.contentEditable&&props.children!=null){error('A component is `contentEditable` and contains `children` managed by '+'React. It is now your responsibility to guarantee that none of '+'those nodes are unexpectedly modified or duplicated. This is '+'probably not intentional.');}}if(!(props.style==null||_typeof$1(props.style)==='object')){{throw Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");}}}function isCustomComponent(tagName,props){if(tagName.indexOf('-')===-1){return typeof props.is==='string';}switch(tagName){// These are reserved SVG and MathML elements.
// We don't mind this list too much because we expect it to never grow.
// The alternative is to track the namespace in a few places which is convoluted.
// https://w3c.github.io/webcomponents/spec/custom/#custom-elements-core-concepts
case'annotation-xml':case'color-profile':case'font-face':case'font-face-src':case'font-face-uri':case'font-face-format':case'font-face-name':case'missing-glyph':return false;default:return true;}}// When adding attributes to the HTML or SVG allowed attribute list, be sure to
// also add them to this module to ensure casing and incorrect name
// warnings.
var possibleStandardNames={// HTML
accept:'accept',acceptcharset:'acceptCharset','accept-charset':'acceptCharset',accesskey:'accessKey',action:'action',allowfullscreen:'allowFullScreen',alt:'alt',as:'as',async:'async',autocapitalize:'autoCapitalize',autocomplete:'autoComplete',autocorrect:'autoCorrect',autofocus:'autoFocus',autoplay:'autoPlay',autosave:'autoSave',capture:'capture',cellpadding:'cellPadding',cellspacing:'cellSpacing',challenge:'challenge',charset:'charSet',checked:'checked',children:'children',cite:'cite',"class":'className',classid:'classID',classname:'className',cols:'cols',colspan:'colSpan',content:'content',contenteditable:'contentEditable',contextmenu:'contextMenu',controls:'controls',controlslist:'controlsList',coords:'coords',crossorigin:'crossOrigin',dangerouslysetinnerhtml:'dangerouslySetInnerHTML',data:'data',datetime:'dateTime',"default":'default',defaultchecked:'defaultChecked',defaultvalue:'defaultValue',defer:'defer',dir:'dir',disabled:'disabled',disablepictureinpicture:'disablePictureInPicture',disableremoteplayback:'disableRemotePlayback',download:'download',draggable:'draggable',enctype:'encType',enterkeyhint:'enterKeyHint',"for":'htmlFor',form:'form',formmethod:'formMethod',formaction:'formAction',formenctype:'formEncType',formnovalidate:'formNoValidate',formtarget:'formTarget',frameborder:'frameBorder',headers:'headers',height:'height',hidden:'hidden',high:'high',href:'href',hreflang:'hrefLang',htmlfor:'htmlFor',httpequiv:'httpEquiv','http-equiv':'httpEquiv',icon:'icon',id:'id',innerhtml:'innerHTML',inputmode:'inputMode',integrity:'integrity',is:'is',itemid:'itemID',itemprop:'itemProp',itemref:'itemRef',itemscope:'itemScope',itemtype:'itemType',keyparams:'keyParams',keytype:'keyType',kind:'kind',label:'label',lang:'lang',list:'list',loop:'loop',low:'low',manifest:'manifest',marginwidth:'marginWidth',marginheight:'marginHeight',max:'max',maxlength:'maxLength',media:'media',mediagroup:'mediaGroup',method:'method',min:'min',minlength:'minLength',multiple:'multiple',muted:'muted',name:'name',nomodule:'noModule',nonce:'nonce',novalidate:'noValidate',open:'open',optimum:'optimum',pattern:'pattern',placeholder:'placeholder',playsinline:'playsInline',poster:'poster',preload:'preload',profile:'profile',radiogroup:'radioGroup',readonly:'readOnly',referrerpolicy:'referrerPolicy',rel:'rel',required:'required',reversed:'reversed',role:'role',rows:'rows',rowspan:'rowSpan',sandbox:'sandbox',scope:'scope',scoped:'scoped',scrolling:'scrolling',seamless:'seamless',selected:'selected',shape:'shape',size:'size',sizes:'sizes',span:'span',spellcheck:'spellCheck',src:'src',srcdoc:'srcDoc',srclang:'srcLang',srcset:'srcSet',start:'start',step:'step',style:'style',summary:'summary',tabindex:'tabIndex',target:'target',title:'title',type:'type',usemap:'useMap',value:'value',width:'width',wmode:'wmode',wrap:'wrap',// SVG
about:'about',accentheight:'accentHeight','accent-height':'accentHeight',accumulate:'accumulate',additive:'additive',alignmentbaseline:'alignmentBaseline','alignment-baseline':'alignmentBaseline',allowreorder:'allowReorder',alphabetic:'alphabetic',amplitude:'amplitude',arabicform:'arabicForm','arabic-form':'arabicForm',ascent:'ascent',attributename:'attributeName',attributetype:'attributeType',autoreverse:'autoReverse',azimuth:'azimuth',basefrequency:'baseFrequency',baselineshift:'baselineShift','baseline-shift':'baselineShift',baseprofile:'baseProfile',bbox:'bbox',begin:'begin',bias:'bias',by:'by',calcmode:'calcMode',capheight:'capHeight','cap-height':'capHeight',clip:'clip',clippath:'clipPath','clip-path':'clipPath',clippathunits:'clipPathUnits',cliprule:'clipRule','clip-rule':'clipRule',color:'color',colorinterpolation:'colorInterpolation','color-interpolation':'colorInterpolation',colorinterpolationfilters:'colorInterpolationFilters','color-interpolation-filters':'colorInterpolationFilters',colorprofile:'colorProfile','color-profile':'colorProfile',colorrendering:'colorRendering','color-rendering':'colorRendering',contentscripttype:'contentScriptType',contentstyletype:'contentStyleType',cursor:'cursor',cx:'cx',cy:'cy',d:'d',datatype:'datatype',decelerate:'decelerate',descent:'descent',diffuseconstant:'diffuseConstant',direction:'direction',display:'display',divisor:'divisor',dominantbaseline:'dominantBaseline','dominant-baseline':'dominantBaseline',dur:'dur',dx:'dx',dy:'dy',edgemode:'edgeMode',elevation:'elevation',enablebackground:'enableBackground','enable-background':'enableBackground',end:'end',exponent:'exponent',externalresourcesrequired:'externalResourcesRequired',fill:'fill',fillopacity:'fillOpacity','fill-opacity':'fillOpacity',fillrule:'fillRule','fill-rule':'fillRule',filter:'filter',filterres:'filterRes',filterunits:'filterUnits',floodopacity:'floodOpacity','flood-opacity':'floodOpacity',floodcolor:'floodColor','flood-color':'floodColor',focusable:'focusable',fontfamily:'fontFamily','font-family':'fontFamily',fontsize:'fontSize','font-size':'fontSize',fontsizeadjust:'fontSizeAdjust','font-size-adjust':'fontSizeAdjust',fontstretch:'fontStretch','font-stretch':'fontStretch',fontstyle:'fontStyle','font-style':'fontStyle',fontvariant:'fontVariant','font-variant':'fontVariant',fontweight:'fontWeight','font-weight':'fontWeight',format:'format',from:'from',fx:'fx',fy:'fy',g1:'g1',g2:'g2',glyphname:'glyphName','glyph-name':'glyphName',glyphorientationhorizontal:'glyphOrientationHorizontal','glyph-orientation-horizontal':'glyphOrientationHorizontal',glyphorientationvertical:'glyphOrientationVertical','glyph-orientation-vertical':'glyphOrientationVertical',glyphref:'glyphRef',gradienttransform:'gradientTransform',gradientunits:'gradientUnits',hanging:'hanging',horizadvx:'horizAdvX','horiz-adv-x':'horizAdvX',horizoriginx:'horizOriginX','horiz-origin-x':'horizOriginX',ideographic:'ideographic',imagerendering:'imageRendering','image-rendering':'imageRendering',in2:'in2',"in":'in',inlist:'inlist',intercept:'intercept',k1:'k1',k2:'k2',k3:'k3',k4:'k4',k:'k',kernelmatrix:'kernelMatrix',kernelunitlength:'kernelUnitLength',kerning:'kerning',keypoints:'keyPoints',keysplines:'keySplines',keytimes:'keyTimes',lengthadjust:'lengthAdjust',letterspacing:'letterSpacing','letter-spacing':'letterSpacing',lightingcolor:'lightingColor','lighting-color':'lightingColor',limitingconeangle:'limitingConeAngle',local:'local',markerend:'markerEnd','marker-end':'markerEnd',markerheight:'markerHeight',markermid:'markerMid','marker-mid':'markerMid',markerstart:'markerStart','marker-start':'markerStart',markerunits:'markerUnits',markerwidth:'markerWidth',mask:'mask',maskcontentunits:'maskContentUnits',maskunits:'maskUnits',mathematical:'mathematical',mode:'mode',numoctaves:'numOctaves',offset:'offset',opacity:'opacity',operator:'operator',order:'order',orient:'orient',orientation:'orientation',origin:'origin',overflow:'overflow',overlineposition:'overlinePosition','overline-position':'overlinePosition',overlinethickness:'overlineThickness','overline-thickness':'overlineThickness',paintorder:'paintOrder','paint-order':'paintOrder',panose1:'panose1','panose-1':'panose1',pathlength:'pathLength',patterncontentunits:'patternContentUnits',patterntransform:'patternTransform',patternunits:'patternUnits',pointerevents:'pointerEvents','pointer-events':'pointerEvents',points:'points',pointsatx:'pointsAtX',pointsaty:'pointsAtY',pointsatz:'pointsAtZ',prefix:'prefix',preservealpha:'preserveAlpha',preserveaspectratio:'preserveAspectRatio',primitiveunits:'primitiveUnits',property:'property',r:'r',radius:'radius',refx:'refX',refy:'refY',renderingintent:'renderingIntent','rendering-intent':'renderingIntent',repeatcount:'repeatCount',repeatdur:'repeatDur',requiredextensions:'requiredExtensions',requiredfeatures:'requiredFeatures',resource:'resource',restart:'restart',result:'result',results:'results',rotate:'rotate',rx:'rx',ry:'ry',scale:'scale',security:'security',seed:'seed',shaperendering:'shapeRendering','shape-rendering':'shapeRendering',slope:'slope',spacing:'spacing',specularconstant:'specularConstant',specularexponent:'specularExponent',speed:'speed',spreadmethod:'spreadMethod',startoffset:'startOffset',stddeviation:'stdDeviation',stemh:'stemh',stemv:'stemv',stitchtiles:'stitchTiles',stopcolor:'stopColor','stop-color':'stopColor',stopopacity:'stopOpacity','stop-opacity':'stopOpacity',strikethroughposition:'strikethroughPosition','strikethrough-position':'strikethroughPosition',strikethroughthickness:'strikethroughThickness','strikethrough-thickness':'strikethroughThickness',string:'string',stroke:'stroke',strokedasharray:'strokeDasharray','stroke-dasharray':'strokeDasharray',strokedashoffset:'strokeDashoffset','stroke-dashoffset':'strokeDashoffset',strokelinecap:'strokeLinecap','stroke-linecap':'strokeLinecap',strokelinejoin:'strokeLinejoin','stroke-linejoin':'strokeLinejoin',strokemiterlimit:'strokeMiterlimit','stroke-miterlimit':'strokeMiterlimit',strokewidth:'strokeWidth','stroke-width':'strokeWidth',strokeopacity:'strokeOpacity','stroke-opacity':'strokeOpacity',suppresscontenteditablewarning:'suppressContentEditableWarning',suppresshydrationwarning:'suppressHydrationWarning',surfacescale:'surfaceScale',systemlanguage:'systemLanguage',tablevalues:'tableValues',targetx:'targetX',targety:'targetY',textanchor:'textAnchor','text-anchor':'textAnchor',textdecoration:'textDecoration','text-decoration':'textDecoration',textlength:'textLength',textrendering:'textRendering','text-rendering':'textRendering',to:'to',transform:'transform',"typeof":'typeof',u1:'u1',u2:'u2',underlineposition:'underlinePosition','underline-position':'underlinePosition',underlinethickness:'underlineThickness','underline-thickness':'underlineThickness',unicode:'unicode',unicodebidi:'unicodeBidi','unicode-bidi':'unicodeBidi',unicoderange:'unicodeRange','unicode-range':'unicodeRange',unitsperem:'unitsPerEm','units-per-em':'unitsPerEm',unselectable:'unselectable',valphabetic:'vAlphabetic','v-alphabetic':'vAlphabetic',values:'values',vectoreffect:'vectorEffect','vector-effect':'vectorEffect',version:'version',vertadvy:'vertAdvY','vert-adv-y':'vertAdvY',vertoriginx:'vertOriginX','vert-origin-x':'vertOriginX',vertoriginy:'vertOriginY','vert-origin-y':'vertOriginY',vhanging:'vHanging','v-hanging':'vHanging',videographic:'vIdeographic','v-ideographic':'vIdeographic',viewbox:'viewBox',viewtarget:'viewTarget',visibility:'visibility',vmathematical:'vMathematical','v-mathematical':'vMathematical',vocab:'vocab',widths:'widths',wordspacing:'wordSpacing','word-spacing':'wordSpacing',writingmode:'writingMode','writing-mode':'writingMode',x1:'x1',x2:'x2',x:'x',xchannelselector:'xChannelSelector',xheight:'xHeight','x-height':'xHeight',xlinkactuate:'xlinkActuate','xlink:actuate':'xlinkActuate',xlinkarcrole:'xlinkArcrole','xlink:arcrole':'xlinkArcrole',xlinkhref:'xlinkHref','xlink:href':'xlinkHref',xlinkrole:'xlinkRole','xlink:role':'xlinkRole',xlinkshow:'xlinkShow','xlink:show':'xlinkShow',xlinktitle:'xlinkTitle','xlink:title':'xlinkTitle',xlinktype:'xlinkType','xlink:type':'xlinkType',xmlbase:'xmlBase','xml:base':'xmlBase',xmllang:'xmlLang','xml:lang':'xmlLang',xmlns:'xmlns','xml:space':'xmlSpace',xmlnsxlink:'xmlnsXlink','xmlns:xlink':'xmlnsXlink',xmlspace:'xmlSpace',y1:'y1',y2:'y2',y:'y',ychannelselector:'yChannelSelector',z:'z',zoomandpan:'zoomAndPan'};var ariaProperties={'aria-current':0,// state
'aria-details':0,'aria-disabled':0,// state
'aria-hidden':0,// state
'aria-invalid':0,// state
'aria-keyshortcuts':0,'aria-label':0,'aria-roledescription':0,// Widget Attributes
'aria-autocomplete':0,'aria-checked':0,'aria-expanded':0,'aria-haspopup':0,'aria-level':0,'aria-modal':0,'aria-multiline':0,'aria-multiselectable':0,'aria-orientation':0,'aria-placeholder':0,'aria-pressed':0,'aria-readonly':0,'aria-required':0,'aria-selected':0,'aria-sort':0,'aria-valuemax':0,'aria-valuemin':0,'aria-valuenow':0,'aria-valuetext':0,// Live Region Attributes
'aria-atomic':0,'aria-busy':0,'aria-live':0,'aria-relevant':0,// Drag-and-Drop Attributes
'aria-dropeffect':0,'aria-grabbed':0,// Relationship Attributes
'aria-activedescendant':0,'aria-colcount':0,'aria-colindex':0,'aria-colspan':0,'aria-controls':0,'aria-describedby':0,'aria-errormessage':0,'aria-flowto':0,'aria-labelledby':0,'aria-owns':0,'aria-posinset':0,'aria-rowcount':0,'aria-rowindex':0,'aria-rowspan':0,'aria-setsize':0};var warnedProperties={};var rARIA=new RegExp('^(aria)-['+ATTRIBUTE_NAME_CHAR+']*$');var rARIACamel=new RegExp('^(aria)[A-Z]['+ATTRIBUTE_NAME_CHAR+']*$');var hasOwnProperty$1=Object.prototype.hasOwnProperty;function validateProperty(tagName,name){{if(hasOwnProperty$1.call(warnedProperties,name)&&warnedProperties[name]){return true;}if(rARIACamel.test(name)){var ariaName='aria-'+name.slice(4).toLowerCase();var correctName=ariaProperties.hasOwnProperty(ariaName)?ariaName:null;// If this is an aria-* attribute, but is not listed in the known DOM
// DOM properties, then it is an invalid aria-* attribute.
if(correctName==null){error('Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.',name);warnedProperties[name]=true;return true;}// aria-* attributes should be lowercase; suggest the lowercase version.
if(name!==correctName){error('Invalid ARIA attribute `%s`. Did you mean `%s`?',name,correctName);warnedProperties[name]=true;return true;}}if(rARIA.test(name)){var lowerCasedName=name.toLowerCase();var standardName=ariaProperties.hasOwnProperty(lowerCasedName)?lowerCasedName:null;// If this is an aria-* attribute, but is not listed in the known DOM
// DOM properties, then it is an invalid aria-* attribute.
if(standardName==null){warnedProperties[name]=true;return false;}// aria-* attributes should be lowercase; suggest the lowercase version.
if(name!==standardName){error('Unknown ARIA attribute `%s`. Did you mean `%s`?',name,standardName);warnedProperties[name]=true;return true;}}}return true;}function warnInvalidARIAProps(type,props){{var invalidProps=[];for(var key in props){var isValid=validateProperty(type,key);if(!isValid){invalidProps.push(key);}}var unknownPropString=invalidProps.map(function(prop){return '`'+prop+'`';}).join(', ');if(invalidProps.length===1){error('Invalid aria prop %s on <%s> tag. '+'For details, see https://reactjs.org/link/invalid-aria-props',unknownPropString,type);}else if(invalidProps.length>1){error('Invalid aria props %s on <%s> tag. '+'For details, see https://reactjs.org/link/invalid-aria-props',unknownPropString,type);}}}function validateProperties(type,props){if(isCustomComponent(type,props)){return;}warnInvalidARIAProps(type,props);}var didWarnValueNull=false;function validateProperties$1(type,props){{if(type!=='input'&&type!=='textarea'&&type!=='select'){return;}if(props!=null&&props.value===null&&!didWarnValueNull){didWarnValueNull=true;if(type==='select'&&props.multiple){error('`value` prop on `%s` should not be null. '+'Consider using an empty array when `multiple` is set to `true` '+'to clear the component or `undefined` for uncontrolled components.',type);}else {error('`value` prop on `%s` should not be null. '+'Consider using an empty string to clear the component or `undefined` '+'for uncontrolled components.',type);}}}}var validateProperty$1=function validateProperty$1(){};{var warnedProperties$1={};var _hasOwnProperty=Object.prototype.hasOwnProperty;var EVENT_NAME_REGEX=/^on./;var INVALID_EVENT_NAME_REGEX=/^on[^A-Z]/;var rARIA$1=new RegExp('^(aria)-['+ATTRIBUTE_NAME_CHAR+']*$');var rARIACamel$1=new RegExp('^(aria)[A-Z]['+ATTRIBUTE_NAME_CHAR+']*$');validateProperty$1=function validateProperty$1(tagName,name,value,eventRegistry){if(_hasOwnProperty.call(warnedProperties$1,name)&&warnedProperties$1[name]){return true;}var lowerCasedName=name.toLowerCase();if(lowerCasedName==='onfocusin'||lowerCasedName==='onfocusout'){error('React uses onFocus and onBlur instead of onFocusIn and onFocusOut. '+'All React events are normalized to bubble, so onFocusIn and onFocusOut '+'are not needed/supported by React.');warnedProperties$1[name]=true;return true;}// We can't rely on the event system being injected on the server.
if(eventRegistry!=null){var registrationNameDependencies=eventRegistry.registrationNameDependencies,possibleRegistrationNames=eventRegistry.possibleRegistrationNames;if(registrationNameDependencies.hasOwnProperty(name)){return true;}var registrationName=possibleRegistrationNames.hasOwnProperty(lowerCasedName)?possibleRegistrationNames[lowerCasedName]:null;if(registrationName!=null){error('Invalid event handler property `%s`. Did you mean `%s`?',name,registrationName);warnedProperties$1[name]=true;return true;}if(EVENT_NAME_REGEX.test(name)){error('Unknown event handler property `%s`. It will be ignored.',name);warnedProperties$1[name]=true;return true;}}else if(EVENT_NAME_REGEX.test(name)){// If no event plugins have been injected, we are in a server environment.
// So we can't tell if the event name is correct for sure, but we can filter
// out known bad ones like `onclick`. We can't suggest a specific replacement though.
if(INVALID_EVENT_NAME_REGEX.test(name)){error('Invalid event handler property `%s`. '+'React events use the camelCase naming convention, for example `onClick`.',name);}warnedProperties$1[name]=true;return true;}// Let the ARIA attribute hook validate ARIA attributes
if(rARIA$1.test(name)||rARIACamel$1.test(name)){return true;}if(lowerCasedName==='innerhtml'){error('Directly setting property `innerHTML` is not permitted. '+'For more information, lookup documentation on `dangerouslySetInnerHTML`.');warnedProperties$1[name]=true;return true;}if(lowerCasedName==='aria'){error('The `aria` attribute is reserved for future use in React. '+'Pass individual `aria-` attributes instead.');warnedProperties$1[name]=true;return true;}if(lowerCasedName==='is'&&value!==null&&value!==undefined&&typeof value!=='string'){error('Received a `%s` for a string attribute `is`. If this is expected, cast '+'the value to a string.',_typeof$1(value));warnedProperties$1[name]=true;return true;}if(typeof value==='number'&&isNaN(value)){error('Received NaN for the `%s` attribute. If this is expected, cast '+'the value to a string.',name);warnedProperties$1[name]=true;return true;}var propertyInfo=getPropertyInfo(name);var isReserved=propertyInfo!==null&&propertyInfo.type===RESERVED;// Known attributes should match the casing specified in the property config.
if(possibleStandardNames.hasOwnProperty(lowerCasedName)){var standardName=possibleStandardNames[lowerCasedName];if(standardName!==name){error('Invalid DOM property `%s`. Did you mean `%s`?',name,standardName);warnedProperties$1[name]=true;return true;}}else if(!isReserved&&name!==lowerCasedName){// Unknown attributes should have lowercase casing since that's how they
// will be cased anyway with server rendering.
error('React does not recognize the `%s` prop on a DOM element. If you '+'intentionally want it to appear in the DOM as a custom '+'attribute, spell it as lowercase `%s` instead. '+'If you accidentally passed it from a parent component, remove '+'it from the DOM element.',name,lowerCasedName);warnedProperties$1[name]=true;return true;}if(typeof value==='boolean'&&shouldRemoveAttributeWithWarning(name,value,propertyInfo,false)){if(value){error('Received `%s` for a non-boolean attribute `%s`.\n\n'+'If you want to write it to the DOM, pass a string instead: '+'%s="%s" or %s={value.toString()}.',value,name,name,value,name);}else {error('Received `%s` for a non-boolean attribute `%s`.\n\n'+'If you want to write it to the DOM, pass a string instead: '+'%s="%s" or %s={value.toString()}.\n\n'+'If you used to conditionally omit it with %s={condition && value}, '+'pass %s={condition ? value : undefined} instead.',value,name,name,value,name,name,name);}warnedProperties$1[name]=true;return true;}// Now that we've validated casing, do not validate
// data types for reserved props
if(isReserved){return true;}// Warn when a known attribute is a bad type
if(shouldRemoveAttributeWithWarning(name,value,propertyInfo,false)){warnedProperties$1[name]=true;return false;}// Warn when passing the strings 'false' or 'true' into a boolean prop
if((value==='false'||value==='true')&&propertyInfo!==null&&propertyInfo.type===BOOLEAN){error('Received the string `%s` for the boolean attribute `%s`. '+'%s '+'Did you mean %s={%s}?',value,name,value==='false'?'The browser will interpret it as a truthy value.':'Although this works, it will not work as expected if you pass the string "false".',name,value);warnedProperties$1[name]=true;return true;}return true;};}var warnUnknownProperties=function warnUnknownProperties(type,props,eventRegistry){{var unknownProps=[];for(var key in props){var isValid=validateProperty$1(type,key,props[key],eventRegistry);if(!isValid){unknownProps.push(key);}}var unknownPropString=unknownProps.map(function(prop){return '`'+prop+'`';}).join(', ');if(unknownProps.length===1){error('Invalid value for prop %s on <%s> tag. Either remove it from the element, '+'or pass a string or number value to keep it in the DOM. '+'For details, see https://reactjs.org/link/attribute-behavior ',unknownPropString,type);}else if(unknownProps.length>1){error('Invalid values for props %s on <%s> tag. Either remove them from the element, '+'or pass a string or number value to keep them in the DOM. '+'For details, see https://reactjs.org/link/attribute-behavior ',unknownPropString,type);}}};function validateProperties$2(type,props,eventRegistry){if(isCustomComponent(type,props)){return;}warnUnknownProperties(type,props,eventRegistry);}var IS_EVENT_HANDLE_NON_MANAGED_NODE=1;var IS_NON_DELEGATED=1<<1;var IS_CAPTURE_PHASE=1<<2;var IS_REPLAYED=1<<4;// set to LEGACY_FB_SUPPORT. LEGACY_FB_SUPPORT only gets set when
// we call willDeferLaterForLegacyFBSupport, thus not bailing out
// will result in endless cycles like an infinite loop.
// We also don't want to defer during event replaying.
var SHOULD_NOT_PROCESS_POLYFILL_EVENT_PLUGINS=IS_EVENT_HANDLE_NON_MANAGED_NODE|IS_NON_DELEGATED|IS_CAPTURE_PHASE;/**
 * Gets the target node from a native browser event by accounting for
 * inconsistencies in browser DOM APIs.
 *
 * @param {object} nativeEvent Native browser event.
 * @return {DOMEventTarget} Target node.
 */function getEventTarget(nativeEvent){// Fallback to nativeEvent.srcElement for IE9
// https://github.com/facebook/react/issues/12506
var target=nativeEvent.target||nativeEvent.srcElement||window;// Normalize SVG <use> element events #4963
if(target.correspondingUseElement){target=target.correspondingUseElement;}// Safari may fire events on text nodes (Node.TEXT_NODE is 3).
// @see http://www.quirksmode.org/js/events_properties.html
return target.nodeType===TEXT_NODE?target.parentNode:target;}var restoreImpl=null;var restoreTarget=null;var restoreQueue=null;function restoreStateOfTarget(target){// We perform this translation at the end of the event loop so that we
// always receive the correct fiber here
var internalInstance=getInstanceFromNode(target);if(!internalInstance){// Unmounted
return;}if(!(typeof restoreImpl==='function')){{throw Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");}}var stateNode=internalInstance.stateNode;// Guard against Fiber being unmounted.
if(stateNode){var _props=getFiberCurrentPropsFromNode(stateNode);restoreImpl(internalInstance.stateNode,internalInstance.type,_props);}}function setRestoreImplementation(impl){restoreImpl=impl;}function enqueueStateRestore(target){if(restoreTarget){if(restoreQueue){restoreQueue.push(target);}else {restoreQueue=[target];}}else {restoreTarget=target;}}function needsStateRestore(){return restoreTarget!==null||restoreQueue!==null;}function restoreStateIfNeeded(){if(!restoreTarget){return;}var target=restoreTarget;var queuedTargets=restoreQueue;restoreTarget=null;restoreQueue=null;restoreStateOfTarget(target);if(queuedTargets){for(var i=0;i<queuedTargets.length;i++){restoreStateOfTarget(queuedTargets[i]);}}}// the renderer. Such as when we're dispatching events or if third party
// libraries need to call batchedUpdates. Eventually, this API will go away when
// everything is batched by default. We'll then have a similar API to opt-out of
// scheduled work and instead do synchronous work.
// Defaults
var batchedUpdatesImpl=function batchedUpdatesImpl(fn,bookkeeping){return fn(bookkeeping);};var discreteUpdatesImpl=function discreteUpdatesImpl(fn,a,b,c,d){return fn(a,b,c,d);};var flushDiscreteUpdatesImpl=function flushDiscreteUpdatesImpl(){};var batchedEventUpdatesImpl=batchedUpdatesImpl;var isInsideEventHandler=false;var isBatchingEventUpdates=false;function finishEventHandler(){// Here we wait until all updates have propagated, which is important
// when using controlled components within layers:
// https://github.com/facebook/react/issues/1698
// Then we restore state of any controlled component.
var controlledComponentsHavePendingUpdates=needsStateRestore();if(controlledComponentsHavePendingUpdates){// If a controlled event was fired, we may need to restore the state of
// the DOM node back to the controlled value. This is necessary when React
// bails out of the update without touching the DOM.
flushDiscreteUpdatesImpl();restoreStateIfNeeded();}}function batchedUpdates(fn,bookkeeping){if(isInsideEventHandler){// If we are currently inside another batch, we need to wait until it
// fully completes before restoring state.
return fn(bookkeeping);}isInsideEventHandler=true;try{return batchedUpdatesImpl(fn,bookkeeping);}finally{isInsideEventHandler=false;finishEventHandler();}}function batchedEventUpdates(fn,a,b){if(isBatchingEventUpdates){// If we are currently inside another batch, we need to wait until it
// fully completes before restoring state.
return fn(a,b);}isBatchingEventUpdates=true;try{return batchedEventUpdatesImpl(fn,a,b);}finally{isBatchingEventUpdates=false;finishEventHandler();}}function discreteUpdates(fn,a,b,c,d){var prevIsInsideEventHandler=isInsideEventHandler;isInsideEventHandler=true;try{return discreteUpdatesImpl(fn,a,b,c,d);}finally{isInsideEventHandler=prevIsInsideEventHandler;if(!isInsideEventHandler){finishEventHandler();}}}function flushDiscreteUpdatesIfNeeded(timeStamp){{if(!isInsideEventHandler){flushDiscreteUpdatesImpl();}}}function setBatchingImplementation(_batchedUpdatesImpl,_discreteUpdatesImpl,_flushDiscreteUpdatesImpl,_batchedEventUpdatesImpl){batchedUpdatesImpl=_batchedUpdatesImpl;discreteUpdatesImpl=_discreteUpdatesImpl;flushDiscreteUpdatesImpl=_flushDiscreteUpdatesImpl;batchedEventUpdatesImpl=_batchedEventUpdatesImpl;}function isInteractive(tag){return tag==='button'||tag==='input'||tag==='select'||tag==='textarea';}function shouldPreventMouseEvent(name,type,props){switch(name){case'onClick':case'onClickCapture':case'onDoubleClick':case'onDoubleClickCapture':case'onMouseDown':case'onMouseDownCapture':case'onMouseMove':case'onMouseMoveCapture':case'onMouseUp':case'onMouseUpCapture':case'onMouseEnter':return !!(props.disabled&&isInteractive(type));default:return false;}}/**
 * @param {object} inst The instance, which is the source of events.
 * @param {string} registrationName Name of listener (e.g. `onClick`).
 * @return {?function} The stored callback.
 */function getListener(inst,registrationName){var stateNode=inst.stateNode;if(stateNode===null){// Work in progress (ex: onload events in incremental mode).
return null;}var props=getFiberCurrentPropsFromNode(stateNode);if(props===null){// Work in progress.
return null;}var listener=props[registrationName];if(shouldPreventMouseEvent(registrationName,inst.type,props)){return null;}if(!(!listener||typeof listener==='function')){{throw Error("Expected `"+registrationName+"` listener to be a function, instead got a value of `"+_typeof$1(listener)+"` type.");}}return listener;}var passiveBrowserEventsSupported=false;// Check if browser support events with passive listeners
// https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Safely_detecting_option_support
if(canUseDOM){try{var options={};// $FlowFixMe: Ignore Flow complaining about needing a value
Object.defineProperty(options,'passive',{get:function get(){passiveBrowserEventsSupported=true;}});window.addEventListener('test',options,options);window.removeEventListener('test',options,options);}catch(e){passiveBrowserEventsSupported=false;}}function invokeGuardedCallbackProd(name,func,context,a,b,c,d,e,f){var funcArgs=Array.prototype.slice.call(arguments,3);try{func.apply(context,funcArgs);}catch(error){this.onError(error);}}var invokeGuardedCallbackImpl=invokeGuardedCallbackProd;{// In DEV mode, we swap out invokeGuardedCallback for a special version
// that plays more nicely with the browser's DevTools. The idea is to preserve
// "Pause on exceptions" behavior. Because React wraps all user-provided
// functions in invokeGuardedCallback, and the production version of
// invokeGuardedCallback uses a try-catch, all user exceptions are treated
// like caught exceptions, and the DevTools won't pause unless the developer
// takes the extra step of enabling pause on caught exceptions. This is
// unintuitive, though, because even though React has caught the error, from
// the developer's perspective, the error is uncaught.
//
// To preserve the expected "Pause on exceptions" behavior, we don't use a
// try-catch in DEV. Instead, we synchronously dispatch a fake event to a fake
// DOM node, and call the user-provided callback from inside an event handler
// for that fake event. If the callback throws, the error is "captured" using
// a global event handler. But because the error happens in a different
// event loop context, it does not interrupt the normal program flow.
// Effectively, this gives us try-catch behavior without actually using
// try-catch. Neat!
// Check that the browser supports the APIs we need to implement our special
// DEV version of invokeGuardedCallback
if(typeof window!=='undefined'&&typeof window.dispatchEvent==='function'&&typeof document!=='undefined'&&typeof document.createEvent==='function'){var fakeNode=document.createElement('react');invokeGuardedCallbackImpl=function invokeGuardedCallbackDev(name,func,context,a,b,c,d,e,f){// If document doesn't exist we know for sure we will crash in this method
// when we call document.createEvent(). However this can cause confusing
// errors: https://github.com/facebookincubator/create-react-app/issues/3482
// So we preemptively throw with a better message instead.
if(!(typeof document!=='undefined')){{throw Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");}}var evt=document.createEvent('Event');var didCall=false;// Keeps track of whether the user-provided callback threw an error. We
// set this to true at the beginning, then set it to false right after
// calling the function. If the function errors, `didError` will never be
// set to false. This strategy works even if the browser is flaky and
// fails to call our global error handler, because it doesn't rely on
// the error event at all.
var didError=true;// Keeps track of the value of window.event so that we can reset it
// during the callback to let user code access window.event in the
// browsers that support it.
var windowEvent=window.event;// Keeps track of the descriptor of window.event to restore it after event
// dispatching: https://github.com/facebook/react/issues/13688
var windowEventDescriptor=Object.getOwnPropertyDescriptor(window,'event');function restoreAfterDispatch(){// We immediately remove the callback from event listeners so that
// nested `invokeGuardedCallback` calls do not clash. Otherwise, a
// nested call would trigger the fake event handlers of any call higher
// in the stack.
fakeNode.removeEventListener(evtType,callCallback,false);// We check for window.hasOwnProperty('event') to prevent the
// window.event assignment in both IE <= 10 as they throw an error
// "Member not found" in strict mode, and in Firefox which does not
// support window.event.
if(typeof window.event!=='undefined'&&window.hasOwnProperty('event')){window.event=windowEvent;}}// Create an event handler for our fake event. We will synchronously
// dispatch our fake event using `dispatchEvent`. Inside the handler, we
// call the user-provided callback.
var funcArgs=Array.prototype.slice.call(arguments,3);function callCallback(){didCall=true;restoreAfterDispatch();func.apply(context,funcArgs);didError=false;}// Create a global error event handler. We use this to capture the value
// that was thrown. It's possible that this error handler will fire more
// than once; for example, if non-React code also calls `dispatchEvent`
// and a handler for that event throws. We should be resilient to most of
// those cases. Even if our error event handler fires more than once, the
// last error event is always used. If the callback actually does error,
// we know that the last error event is the correct one, because it's not
// possible for anything else to have happened in between our callback
// erroring and the code that follows the `dispatchEvent` call below. If
// the callback doesn't error, but the error event was fired, we know to
// ignore it because `didError` will be false, as described above.
var error;// Use this to track whether the error event is ever called.
var didSetError=false;var isCrossOriginError=false;function handleWindowError(event){error=event.error;didSetError=true;if(error===null&&event.colno===0&&event.lineno===0){isCrossOriginError=true;}if(event.defaultPrevented){// Some other error handler has prevented default.
// Browsers silence the error report if this happens.
// We'll remember this to later decide whether to log it or not.
if(error!=null&&_typeof$1(error)==='object'){try{error._suppressLogging=true;}catch(inner){// Ignore.
}}}}// Create a fake event type.
var evtType="react-"+(name?name:'invokeguardedcallback');// Attach our event handlers
window.addEventListener('error',handleWindowError);fakeNode.addEventListener(evtType,callCallback,false);// Synchronously dispatch our fake event. If the user-provided function
// errors, it will trigger our global error handler.
evt.initEvent(evtType,false,false);fakeNode.dispatchEvent(evt);if(windowEventDescriptor){Object.defineProperty(window,'event',windowEventDescriptor);}if(didCall&&didError){if(!didSetError){// The callback errored, but the error event never fired.
error=new Error('An error was thrown inside one of your components, but React '+"doesn't know what it was. This is likely due to browser "+'flakiness. React does its best to preserve the "Pause on '+'exceptions" behavior of the DevTools, which requires some '+"DEV-mode only tricks. It's possible that these don't work in "+'your browser. Try triggering the error in production mode, '+'or switching to a modern browser. If you suspect that this is '+'actually an issue with React, please file an issue.');}else if(isCrossOriginError){error=new Error("A cross-origin error was thrown. React doesn't have access to "+'the actual error object in development. '+'See https://reactjs.org/link/crossorigin-error for more information.');}this.onError(error);}// Remove our event listeners
window.removeEventListener('error',handleWindowError);if(!didCall){// Something went really wrong, and our event was not dispatched.
// https://github.com/facebook/react/issues/16734
// https://github.com/facebook/react/issues/16585
// Fall back to the production implementation.
restoreAfterDispatch();return invokeGuardedCallbackProd.apply(this,arguments);}};}}var invokeGuardedCallbackImpl$1=invokeGuardedCallbackImpl;var hasError=false;var caughtError=null;// Used by event system to capture/rethrow the first error.
var hasRethrowError=false;var rethrowError=null;var reporter={onError:function onError(error){hasError=true;caughtError=error;}};/**
 * Call a function while guarding against errors that happens within it.
 * Returns an error if it throws, otherwise null.
 *
 * In production, this is implemented using a try-catch. The reason we don't
 * use a try-catch directly is so that we can swap out a different
 * implementation in DEV mode.
 *
 * @param {String} name of the guard to use for logging or debugging
 * @param {Function} func The function to invoke
 * @param {*} context The context to use when calling the function
 * @param {...*} args Arguments for function
 */function invokeGuardedCallback(name,func,context,a,b,c,d,e,f){hasError=false;caughtError=null;invokeGuardedCallbackImpl$1.apply(reporter,arguments);}/**
 * Same as invokeGuardedCallback, but instead of returning an error, it stores
 * it in a global so it can be rethrown by `rethrowCaughtError` later.
 * TODO: See if caughtError and rethrowError can be unified.
 *
 * @param {String} name of the guard to use for logging or debugging
 * @param {Function} func The function to invoke
 * @param {*} context The context to use when calling the function
 * @param {...*} args Arguments for function
 */function invokeGuardedCallbackAndCatchFirstError(name,func,context,a,b,c,d,e,f){invokeGuardedCallback.apply(this,arguments);if(hasError){var error=clearCaughtError();if(!hasRethrowError){hasRethrowError=true;rethrowError=error;}}}/**
 * During execution of guarded functions we will capture the first error which
 * we will rethrow to be handled by the top level error handler.
 */function rethrowCaughtError(){if(hasRethrowError){var error=rethrowError;hasRethrowError=false;rethrowError=null;throw error;}}function hasCaughtError(){return hasError;}function clearCaughtError(){if(hasError){var error=caughtError;hasError=false;caughtError=null;return error;}else {{{throw Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");}}}}/**
 * `ReactInstanceMap` maintains a mapping from a public facing stateful
 * instance (key) and the internal representation (value). This allows public
 * methods to accept the user facing instance as an argument and map them back
 * to internal methods.
 *
 * Note that this module is currently shared and assumed to be stateless.
 * If this becomes an actual Map, that will break.
 */function get(key){return key._reactInternals;}function has(key){return key._reactInternals!==undefined;}function set(key,value){key._reactInternals=value;}// Don't change these two values. They're used by React Dev Tools.
var NoFlags=/*                      */0;var PerformedWork=/*                */1;// You can change the rest (and add more).
var Placement=/*                    */2;var Update=/*                       */4;var PlacementAndUpdate=/*           */6;var Deletion=/*                     */8;var ContentReset=/*                 */16;var Callback=/*                     */32;var DidCapture=/*                   */64;var Ref=/*                          */128;var Snapshot=/*                     */256;var Passive=/*                      */512;// TODO (effects) Remove this bit once the new reconciler is synced to the old.
var PassiveUnmountPendingDev=/*     */8192;var Hydrating=/*                    */1024;var HydratingAndUpdate=/*           */1028;// Passive & Update & Callback & Ref & Snapshot
var LifecycleEffectMask=/*          */932;// Union of all host effects
var HostEffectMask=/*               */2047;// These are not really side effects, but we still reuse this field.
var Incomplete=/*                   */2048;var ShouldCapture=/*                */4096;var ForceUpdateForLegacySuspense=/* */16384;// Static tags describe aspects of a fiber that are not specific to a render,
var ReactCurrentOwner=ReactSharedInternals.ReactCurrentOwner;function getNearestMountedFiber(fiber){var node=fiber;var nearestMounted=fiber;if(!fiber.alternate){// If there is no alternate, this might be a new tree that isn't inserted
// yet. If it is, then it will have a pending insertion effect on it.
var nextNode=node;do{node=nextNode;if((node.flags&(Placement|Hydrating))!==NoFlags){// This is an insertion or in-progress hydration. The nearest possible
// mounted fiber is the parent but we need to continue to figure out
// if that one is still mounted.
nearestMounted=node["return"];}nextNode=node["return"];}while(nextNode);}else {while(node["return"]){node=node["return"];}}if(node.tag===HostRoot){// TODO: Check if this was a nested HostRoot when used with
// renderContainerIntoSubtree.
return nearestMounted;}// If we didn't hit the root, that means that we're in an disconnected tree
// that has been unmounted.
return null;}function getSuspenseInstanceFromFiber(fiber){if(fiber.tag===SuspenseComponent){var suspenseState=fiber.memoizedState;if(suspenseState===null){var current=fiber.alternate;if(current!==null){suspenseState=current.memoizedState;}}if(suspenseState!==null){return suspenseState.dehydrated;}}return null;}function getContainerFromFiber(fiber){return fiber.tag===HostRoot?fiber.stateNode.containerInfo:null;}function isFiberMounted(fiber){return getNearestMountedFiber(fiber)===fiber;}function isMounted(component){{var owner=ReactCurrentOwner.current;if(owner!==null&&owner.tag===ClassComponent){var ownerFiber=owner;var instance=ownerFiber.stateNode;if(!instance._warnedAboutRefsInRender){error('%s is accessing isMounted inside its render() function. '+'render() should be a pure function of props and state. It should '+'never access something that requires stale data from the previous '+'render, such as refs. Move this logic to componentDidMount and '+'componentDidUpdate instead.',getComponentName(ownerFiber.type)||'A component');}instance._warnedAboutRefsInRender=true;}}var fiber=get(component);if(!fiber){return false;}return getNearestMountedFiber(fiber)===fiber;}function assertIsMounted(fiber){if(!(getNearestMountedFiber(fiber)===fiber)){{throw Error("Unable to find node on an unmounted component.");}}}function findCurrentFiberUsingSlowPath(fiber){var alternate=fiber.alternate;if(!alternate){// If there is no alternate, then we only need to check if it is mounted.
var nearestMounted=getNearestMountedFiber(fiber);if(!(nearestMounted!==null)){{throw Error("Unable to find node on an unmounted component.");}}if(nearestMounted!==fiber){return null;}return fiber;}// If we have two possible branches, we'll walk backwards up to the root
// to see what path the root points to. On the way we may hit one of the
// special cases and we'll deal with them.
var a=fiber;var b=alternate;while(true){var parentA=a["return"];if(parentA===null){// We're at the root.
break;}var parentB=parentA.alternate;if(parentB===null){// There is no alternate. This is an unusual case. Currently, it only
// happens when a Suspense component is hidden. An extra fragment fiber
// is inserted in between the Suspense fiber and its children. Skip
// over this extra fragment fiber and proceed to the next parent.
var nextParent=parentA["return"];if(nextParent!==null){a=b=nextParent;continue;}// If there's no parent, we're at the root.
break;}// If both copies of the parent fiber point to the same child, we can
// assume that the child is current. This happens when we bailout on low
// priority: the bailed out fiber's child reuses the current child.
if(parentA.child===parentB.child){var child=parentA.child;while(child){if(child===a){// We've determined that A is the current branch.
assertIsMounted(parentA);return fiber;}if(child===b){// We've determined that B is the current branch.
assertIsMounted(parentA);return alternate;}child=child.sibling;}// We should never have an alternate for any mounting node. So the only
// way this could possibly happen is if this was unmounted, if at all.
{{throw Error("Unable to find node on an unmounted component.");}}}if(a["return"]!==b["return"]){// The return pointer of A and the return pointer of B point to different
// fibers. We assume that return pointers never criss-cross, so A must
// belong to the child set of A.return, and B must belong to the child
// set of B.return.
a=parentA;b=parentB;}else {// The return pointers point to the same fiber. We'll have to use the
// default, slow path: scan the child sets of each parent alternate to see
// which child belongs to which set.
//
// Search parent A's child set
var didFindChild=false;var _child=parentA.child;while(_child){if(_child===a){didFindChild=true;a=parentA;b=parentB;break;}if(_child===b){didFindChild=true;b=parentA;a=parentB;break;}_child=_child.sibling;}if(!didFindChild){// Search parent B's child set
_child=parentB.child;while(_child){if(_child===a){didFindChild=true;a=parentB;b=parentA;break;}if(_child===b){didFindChild=true;b=parentB;a=parentA;break;}_child=_child.sibling;}if(!didFindChild){{throw Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");}}}}if(!(a.alternate===b)){{throw Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");}}}// If the root is not a host container, we're in a disconnected tree. I.e.
// unmounted.
if(!(a.tag===HostRoot)){{throw Error("Unable to find node on an unmounted component.");}}if(a.stateNode.current===a){// We've determined that A is the current branch.
return fiber;}// Otherwise B has to be current branch.
return alternate;}function findCurrentHostFiber(parent){var currentParent=findCurrentFiberUsingSlowPath(parent);if(!currentParent){return null;}// Next we'll drill down this component to find the first HostComponent/Text.
var node=currentParent;while(true){if(node.tag===HostComponent||node.tag===HostText){return node;}else if(node.child){node.child["return"]=node;node=node.child;continue;}if(node===currentParent){return null;}while(!node.sibling){if(!node["return"]||node["return"]===currentParent){return null;}node=node["return"];}node.sibling["return"]=node["return"];node=node.sibling;}// Flow needs the return null here, but ESLint complains about it.
// eslint-disable-next-line no-unreachable
return null;}function findCurrentHostFiberWithNoPortals(parent){var currentParent=findCurrentFiberUsingSlowPath(parent);if(!currentParent){return null;}// Next we'll drill down this component to find the first HostComponent/Text.
var node=currentParent;while(true){if(node.tag===HostComponent||node.tag===HostText||enableFundamentalAPI){return node;}else if(node.child&&node.tag!==HostPortal){node.child["return"]=node;node=node.child;continue;}if(node===currentParent){return null;}while(!node.sibling){if(!node["return"]||node["return"]===currentParent){return null;}node=node["return"];}node.sibling["return"]=node["return"];node=node.sibling;}// Flow needs the return null here, but ESLint complains about it.
// eslint-disable-next-line no-unreachable
return null;}function doesFiberContain(parentFiber,childFiber){var node=childFiber;var parentFiberAlternate=parentFiber.alternate;while(node!==null){if(node===parentFiber||node===parentFiberAlternate){return true;}node=node["return"];}return false;}var attemptUserBlockingHydration;function setAttemptUserBlockingHydration(fn){attemptUserBlockingHydration=fn;}var attemptContinuousHydration;function setAttemptContinuousHydration(fn){attemptContinuousHydration=fn;}var attemptHydrationAtCurrentPriority;function setAttemptHydrationAtCurrentPriority(fn){attemptHydrationAtCurrentPriority=fn;}var attemptHydrationAtPriority;function setAttemptHydrationAtPriority(fn){attemptHydrationAtPriority=fn;}// TODO: Upgrade this definition once we're on a newer version of Flow that
var hasScheduledReplayAttempt=false;// The queue of discrete events to be replayed.
var queuedDiscreteEvents=[];// Indicates if any continuous event targets are non-null for early bailout.
// if the last target was dehydrated.
var queuedFocus=null;var queuedDrag=null;var queuedMouse=null;// For pointer events there can be one latest event per pointerId.
var queuedPointers=new Map();var queuedPointerCaptures=new Map();// We could consider replaying selectionchange and touchmoves too.
var queuedExplicitHydrationTargets=[];function hasQueuedDiscreteEvents(){return queuedDiscreteEvents.length>0;}var discreteReplayableEvents=['mousedown','mouseup','touchcancel','touchend','touchstart','auxclick','dblclick','pointercancel','pointerdown','pointerup','dragend','dragstart','drop','compositionend','compositionstart','keydown','keypress','keyup','input','textInput',// Intentionally camelCase
'copy','cut','paste','click','change','contextmenu','reset','submit'];function isReplayableDiscreteEvent(eventType){return discreteReplayableEvents.indexOf(eventType)>-1;}function createQueuedReplayableEvent(blockedOn,domEventName,eventSystemFlags,targetContainer,nativeEvent){return {blockedOn:blockedOn,domEventName:domEventName,eventSystemFlags:eventSystemFlags|IS_REPLAYED,nativeEvent:nativeEvent,targetContainers:[targetContainer]};}function queueDiscreteEvent(blockedOn,domEventName,eventSystemFlags,targetContainer,nativeEvent){var queuedEvent=createQueuedReplayableEvent(blockedOn,domEventName,eventSystemFlags,targetContainer,nativeEvent);queuedDiscreteEvents.push(queuedEvent);}// Resets the replaying for this type of continuous event to no event.
function clearIfContinuousEvent(domEventName,nativeEvent){switch(domEventName){case'focusin':case'focusout':queuedFocus=null;break;case'dragenter':case'dragleave':queuedDrag=null;break;case'mouseover':case'mouseout':queuedMouse=null;break;case'pointerover':case'pointerout':{var pointerId=nativeEvent.pointerId;queuedPointers["delete"](pointerId);break;}case'gotpointercapture':case'lostpointercapture':{var _pointerId=nativeEvent.pointerId;queuedPointerCaptures["delete"](_pointerId);break;}}}function accumulateOrCreateContinuousQueuedReplayableEvent(existingQueuedEvent,blockedOn,domEventName,eventSystemFlags,targetContainer,nativeEvent){if(existingQueuedEvent===null||existingQueuedEvent.nativeEvent!==nativeEvent){var queuedEvent=createQueuedReplayableEvent(blockedOn,domEventName,eventSystemFlags,targetContainer,nativeEvent);if(blockedOn!==null){var _fiber2=getInstanceFromNode(blockedOn);if(_fiber2!==null){// Attempt to increase the priority of this target.
attemptContinuousHydration(_fiber2);}}return queuedEvent;}// If we have already queued this exact event, then it's because
// the different event systems have different DOM event listeners.
// We can accumulate the flags, and the targetContainers, and
// store a single event to be replayed.
existingQueuedEvent.eventSystemFlags|=eventSystemFlags;var targetContainers=existingQueuedEvent.targetContainers;if(targetContainer!==null&&targetContainers.indexOf(targetContainer)===-1){targetContainers.push(targetContainer);}return existingQueuedEvent;}function queueIfContinuousEvent(blockedOn,domEventName,eventSystemFlags,targetContainer,nativeEvent){// These set relatedTarget to null because the replayed event will be treated as if we
// moved from outside the window (no target) onto the target once it hydrates.
// Instead of mutating we could clone the event.
switch(domEventName){case'focusin':{var focusEvent=nativeEvent;queuedFocus=accumulateOrCreateContinuousQueuedReplayableEvent(queuedFocus,blockedOn,domEventName,eventSystemFlags,targetContainer,focusEvent);return true;}case'dragenter':{var dragEvent=nativeEvent;queuedDrag=accumulateOrCreateContinuousQueuedReplayableEvent(queuedDrag,blockedOn,domEventName,eventSystemFlags,targetContainer,dragEvent);return true;}case'mouseover':{var mouseEvent=nativeEvent;queuedMouse=accumulateOrCreateContinuousQueuedReplayableEvent(queuedMouse,blockedOn,domEventName,eventSystemFlags,targetContainer,mouseEvent);return true;}case'pointerover':{var pointerEvent=nativeEvent;var pointerId=pointerEvent.pointerId;queuedPointers.set(pointerId,accumulateOrCreateContinuousQueuedReplayableEvent(queuedPointers.get(pointerId)||null,blockedOn,domEventName,eventSystemFlags,targetContainer,pointerEvent));return true;}case'gotpointercapture':{var _pointerEvent=nativeEvent;var _pointerId2=_pointerEvent.pointerId;queuedPointerCaptures.set(_pointerId2,accumulateOrCreateContinuousQueuedReplayableEvent(queuedPointerCaptures.get(_pointerId2)||null,blockedOn,domEventName,eventSystemFlags,targetContainer,_pointerEvent));return true;}}return false;}// Check if this target is unblocked. Returns true if it's unblocked.
function attemptExplicitHydrationTarget(queuedTarget){// TODO: This function shares a lot of logic with attemptToDispatchEvent.
// Try to unify them. It's a bit tricky since it would require two return
// values.
var targetInst=getClosestInstanceFromNode(queuedTarget.target);if(targetInst!==null){var nearestMounted=getNearestMountedFiber(targetInst);if(nearestMounted!==null){var tag=nearestMounted.tag;if(tag===SuspenseComponent){var instance=getSuspenseInstanceFromFiber(nearestMounted);if(instance!==null){// We're blocked on hydrating this boundary.
// Increase its priority.
queuedTarget.blockedOn=instance;attemptHydrationAtPriority(queuedTarget.lanePriority,function(){Scheduler.unstable_runWithPriority(queuedTarget.priority,function(){attemptHydrationAtCurrentPriority(nearestMounted);});});return;}}else if(tag===HostRoot){var root=nearestMounted.stateNode;if(root.hydrate){queuedTarget.blockedOn=getContainerFromFiber(nearestMounted);// We don't currently have a way to increase the priority of
// a root other than sync.
return;}}}}queuedTarget.blockedOn=null;}function attemptReplayContinuousQueuedEvent(queuedEvent){if(queuedEvent.blockedOn!==null){return false;}var targetContainers=queuedEvent.targetContainers;while(targetContainers.length>0){var targetContainer=targetContainers[0];var nextBlockedOn=attemptToDispatchEvent(queuedEvent.domEventName,queuedEvent.eventSystemFlags,targetContainer,queuedEvent.nativeEvent);if(nextBlockedOn!==null){// We're still blocked. Try again later.
var _fiber3=getInstanceFromNode(nextBlockedOn);if(_fiber3!==null){attemptContinuousHydration(_fiber3);}queuedEvent.blockedOn=nextBlockedOn;return false;}// This target container was successfully dispatched. Try the next.
targetContainers.shift();}return true;}function attemptReplayContinuousQueuedEventInMap(queuedEvent,key,map){if(attemptReplayContinuousQueuedEvent(queuedEvent)){map["delete"](key);}}function replayUnblockedEvents(){hasScheduledReplayAttempt=false;// First replay discrete events.
while(queuedDiscreteEvents.length>0){var nextDiscreteEvent=queuedDiscreteEvents[0];if(nextDiscreteEvent.blockedOn!==null){// We're still blocked.
// Increase the priority of this boundary to unblock
// the next discrete event.
var _fiber4=getInstanceFromNode(nextDiscreteEvent.blockedOn);if(_fiber4!==null){attemptUserBlockingHydration(_fiber4);}break;}var targetContainers=nextDiscreteEvent.targetContainers;while(targetContainers.length>0){var targetContainer=targetContainers[0];var nextBlockedOn=attemptToDispatchEvent(nextDiscreteEvent.domEventName,nextDiscreteEvent.eventSystemFlags,targetContainer,nextDiscreteEvent.nativeEvent);if(nextBlockedOn!==null){// We're still blocked. Try again later.
nextDiscreteEvent.blockedOn=nextBlockedOn;break;}// This target container was successfully dispatched. Try the next.
targetContainers.shift();}if(nextDiscreteEvent.blockedOn===null){// We've successfully replayed the first event. Let's try the next one.
queuedDiscreteEvents.shift();}}// Next replay any continuous events.
if(queuedFocus!==null&&attemptReplayContinuousQueuedEvent(queuedFocus)){queuedFocus=null;}if(queuedDrag!==null&&attemptReplayContinuousQueuedEvent(queuedDrag)){queuedDrag=null;}if(queuedMouse!==null&&attemptReplayContinuousQueuedEvent(queuedMouse)){queuedMouse=null;}queuedPointers.forEach(attemptReplayContinuousQueuedEventInMap);queuedPointerCaptures.forEach(attemptReplayContinuousQueuedEventInMap);}function scheduleCallbackIfUnblocked(queuedEvent,unblocked){if(queuedEvent.blockedOn===unblocked){queuedEvent.blockedOn=null;if(!hasScheduledReplayAttempt){hasScheduledReplayAttempt=true;// Schedule a callback to attempt replaying as many events as are
// now unblocked. This first might not actually be unblocked yet.
// We could check it early to avoid scheduling an unnecessary callback.
Scheduler.unstable_scheduleCallback(Scheduler.unstable_NormalPriority,replayUnblockedEvents);}}}function retryIfBlockedOn(unblocked){// Mark anything that was blocked on this as no longer blocked
// and eligible for a replay.
if(queuedDiscreteEvents.length>0){scheduleCallbackIfUnblocked(queuedDiscreteEvents[0],unblocked);// This is a exponential search for each boundary that commits. I think it's
// worth it because we expect very few discrete events to queue up and once
// we are actually fully unblocked it will be fast to replay them.
for(var i=1;i<queuedDiscreteEvents.length;i++){var queuedEvent=queuedDiscreteEvents[i];if(queuedEvent.blockedOn===unblocked){queuedEvent.blockedOn=null;}}}if(queuedFocus!==null){scheduleCallbackIfUnblocked(queuedFocus,unblocked);}if(queuedDrag!==null){scheduleCallbackIfUnblocked(queuedDrag,unblocked);}if(queuedMouse!==null){scheduleCallbackIfUnblocked(queuedMouse,unblocked);}var unblock=function unblock(queuedEvent){return scheduleCallbackIfUnblocked(queuedEvent,unblocked);};queuedPointers.forEach(unblock);queuedPointerCaptures.forEach(unblock);for(var _i=0;_i<queuedExplicitHydrationTargets.length;_i++){var queuedTarget=queuedExplicitHydrationTargets[_i];if(queuedTarget.blockedOn===unblocked){queuedTarget.blockedOn=null;}}while(queuedExplicitHydrationTargets.length>0){var nextExplicitTarget=queuedExplicitHydrationTargets[0];if(nextExplicitTarget.blockedOn!==null){// We're still blocked.
break;}else {attemptExplicitHydrationTarget(nextExplicitTarget);if(nextExplicitTarget.blockedOn===null){// We're unblocked.
queuedExplicitHydrationTargets.shift();}}}}var DiscreteEvent=0;var UserBlockingEvent=1;var ContinuousEvent=2;/**
 * Generate a mapping of standard vendor prefixes using the defined style property and event name.
 *
 * @param {string} styleProp
 * @param {string} eventName
 * @returns {object}
 */function makePrefixMap(styleProp,eventName){var prefixes={};prefixes[styleProp.toLowerCase()]=eventName.toLowerCase();prefixes['Webkit'+styleProp]='webkit'+eventName;prefixes['Moz'+styleProp]='moz'+eventName;return prefixes;}/**
 * A list of event names to a configurable list of vendor prefixes.
 */var vendorPrefixes={animationend:makePrefixMap('Animation','AnimationEnd'),animationiteration:makePrefixMap('Animation','AnimationIteration'),animationstart:makePrefixMap('Animation','AnimationStart'),transitionend:makePrefixMap('Transition','TransitionEnd')};/**
 * Event names that have already been detected and prefixed (if applicable).
 */var prefixedEventNames={};/**
 * Element to check for prefixes on.
 */var style={};/**
 * Bootstrap if a DOM exists.
 */if(canUseDOM){style=document.createElement('div').style;// On some platforms, in particular some releases of Android 4.x,
// the un-prefixed "animation" and "transition" properties are defined on the
// style object but the events that fire will still be prefixed, so we need
// to check if the un-prefixed events are usable, and if not remove them from the map.
if(!('AnimationEvent'in window)){delete vendorPrefixes.animationend.animation;delete vendorPrefixes.animationiteration.animation;delete vendorPrefixes.animationstart.animation;}// Same as above
if(!('TransitionEvent'in window)){delete vendorPrefixes.transitionend.transition;}}/**
 * Attempts to determine the correct vendor prefixed event name.
 *
 * @param {string} eventName
 * @returns {string}
 */function getVendorPrefixedEventName(eventName){if(prefixedEventNames[eventName]){return prefixedEventNames[eventName];}else if(!vendorPrefixes[eventName]){return eventName;}var prefixMap=vendorPrefixes[eventName];for(var styleProp in prefixMap){if(prefixMap.hasOwnProperty(styleProp)&&styleProp in style){return prefixedEventNames[eventName]=prefixMap[styleProp];}}return eventName;}var ANIMATION_END=getVendorPrefixedEventName('animationend');var ANIMATION_ITERATION=getVendorPrefixedEventName('animationiteration');var ANIMATION_START=getVendorPrefixedEventName('animationstart');var TRANSITION_END=getVendorPrefixedEventName('transitionend');var topLevelEventsToReactNames=new Map();var eventPriorities=new Map();// We store most of the events in this module in pairs of two strings so we can re-use
// the code required to apply the same logic for event prioritization and that of the
// SimpleEventPlugin. This complicates things slightly, but the aim is to reduce code
// duplication (for which there would be quite a bit). For the events that are not needed
// for the SimpleEventPlugin (otherDiscreteEvents) we process them separately as an
// array of top level events.
// Lastly, we ignore prettier so we can keep the formatting sane.
// prettier-ignore
var discreteEventPairsForSimpleEventPlugin=['cancel','cancel','click','click','close','close','contextmenu','contextMenu','copy','copy','cut','cut','auxclick','auxClick','dblclick','doubleClick',// Careful!
'dragend','dragEnd','dragstart','dragStart','drop','drop','focusin','focus',// Careful!
'focusout','blur',// Careful!
'input','input','invalid','invalid','keydown','keyDown','keypress','keyPress','keyup','keyUp','mousedown','mouseDown','mouseup','mouseUp','paste','paste','pause','pause','play','play','pointercancel','pointerCancel','pointerdown','pointerDown','pointerup','pointerUp','ratechange','rateChange','reset','reset','seeked','seeked','submit','submit','touchcancel','touchCancel','touchend','touchEnd','touchstart','touchStart','volumechange','volumeChange'];var otherDiscreteEvents=['change','selectionchange','textInput','compositionstart','compositionend','compositionupdate'];var userBlockingPairsForSimpleEventPlugin=['drag','drag','dragenter','dragEnter','dragexit','dragExit','dragleave','dragLeave','dragover','dragOver','mousemove','mouseMove','mouseout','mouseOut','mouseover','mouseOver','pointermove','pointerMove','pointerout','pointerOut','pointerover','pointerOver','scroll','scroll','toggle','toggle','touchmove','touchMove','wheel','wheel'];// prettier-ignore
var continuousPairsForSimpleEventPlugin=['abort','abort',ANIMATION_END,'animationEnd',ANIMATION_ITERATION,'animationIteration',ANIMATION_START,'animationStart','canplay','canPlay','canplaythrough','canPlayThrough','durationchange','durationChange','emptied','emptied','encrypted','encrypted','ended','ended','error','error','gotpointercapture','gotPointerCapture','load','load','loadeddata','loadedData','loadedmetadata','loadedMetadata','loadstart','loadStart','lostpointercapture','lostPointerCapture','playing','playing','progress','progress','seeking','seeking','stalled','stalled','suspend','suspend','timeupdate','timeUpdate',TRANSITION_END,'transitionEnd','waiting','waiting'];/**
 * Turns
 * ['abort', ...]
 *
 * into
 *
 * topLevelEventsToReactNames = new Map([
 *   ['abort', 'onAbort'],
 * ]);
 *
 * and registers them.
 */function registerSimplePluginEventsAndSetTheirPriorities(eventTypes,priority){// As the event types are in pairs of two, we need to iterate
// through in twos. The events are in pairs of two to save code
// and improve init perf of processing this array, as it will
// result in far fewer object allocations and property accesses
// if we only use three arrays to process all the categories of
// instead of tuples.
for(var i=0;i<eventTypes.length;i+=2){var topEvent=eventTypes[i];var event=eventTypes[i+1];var capitalizedEvent=event[0].toUpperCase()+event.slice(1);var reactName='on'+capitalizedEvent;eventPriorities.set(topEvent,priority);topLevelEventsToReactNames.set(topEvent,reactName);registerTwoPhaseEvent(reactName,[topEvent]);}}function setEventPriorities(eventTypes,priority){for(var i=0;i<eventTypes.length;i++){eventPriorities.set(eventTypes[i],priority);}}function getEventPriorityForPluginSystem(domEventName){var priority=eventPriorities.get(domEventName);// Default to a ContinuousEvent. Note: we might
// want to warn if we can't detect the priority
// for the event.
return priority===undefined?ContinuousEvent:priority;}function registerSimpleEvents(){registerSimplePluginEventsAndSetTheirPriorities(discreteEventPairsForSimpleEventPlugin,DiscreteEvent);registerSimplePluginEventsAndSetTheirPriorities(userBlockingPairsForSimpleEventPlugin,UserBlockingEvent);registerSimplePluginEventsAndSetTheirPriorities(continuousPairsForSimpleEventPlugin,ContinuousEvent);setEventPriorities(otherDiscreteEvents,DiscreteEvent);}var Scheduler_now=Scheduler.unstable_now;{// Provide explicit error message when production+profiling bundle of e.g.
// react-dom is used with production (non-profiling) bundle of
// scheduler/tracing
if(!(tracing.__interactionsRef!=null&&tracing.__interactionsRef.current!=null)){{throw Error("It is not supported to run the profiling version of a renderer (for example, `react-dom/profiling`) without also replacing the `scheduler/tracing` module with `scheduler/tracing-profiling`. Your bundler might have a setting for aliasing both modules. Learn more at https://reactjs.org/link/profiling");}}}// ascending numbers so we can compare them like numbers. They start at 90 to
// avoid clashing with Scheduler's priorities.
var ImmediatePriority=99;var UserBlockingPriority=98;var NormalPriority=97;var LowPriority=96;var IdlePriority=95;// NoPriority is the absence of priority. Also React-only.
var NoPriority=90;var initialTimeMs=Scheduler_now();// If the initial timestamp is reasonably small, use Scheduler's `now` directly.
var SyncLanePriority=15;var SyncBatchedLanePriority=14;var InputDiscreteHydrationLanePriority=13;var InputDiscreteLanePriority=12;var InputContinuousHydrationLanePriority=11;var InputContinuousLanePriority=10;var DefaultHydrationLanePriority=9;var DefaultLanePriority=8;var TransitionHydrationPriority=7;var TransitionPriority=6;var RetryLanePriority=5;var SelectiveHydrationLanePriority=4;var IdleHydrationLanePriority=3;var IdleLanePriority=2;var OffscreenLanePriority=1;var NoLanePriority=0;var TotalLanes=31;var NoLanes=/*                        */0;var NoLane=/*                          */0;var SyncLane=/*                        */1;var SyncBatchedLane=/*                 */2;var InputDiscreteHydrationLane=/*      */4;var InputDiscreteLanes=/*                    */24;var InputContinuousHydrationLane=/*           */32;var InputContinuousLanes=/*                  */192;var DefaultHydrationLane=/*            */256;var DefaultLanes=/*                   */3584;var TransitionHydrationLane=/*                */4096;var TransitionLanes=/*                       */4186112;var RetryLanes=/*                            */62914560;var SomeRetryLane=/*                  */33554432;var SelectiveHydrationLane=/*          */67108864;var NonIdleLanes=/*                                 */134217727;var IdleHydrationLane=/*               */134217728;var IdleLanes=/*                             */805306368;var OffscreenLane=/*                   */1073741824;var NoTimestamp=-1;function setCurrentUpdateLanePriority(newLanePriority){}// "Registers" used to "return" multiple values
// Used by getHighestPriorityLanes and getNextLanes:
var return_highestLanePriority=DefaultLanePriority;function getHighestPriorityLanes(lanes){if((SyncLane&lanes)!==NoLanes){return_highestLanePriority=SyncLanePriority;return SyncLane;}if((SyncBatchedLane&lanes)!==NoLanes){return_highestLanePriority=SyncBatchedLanePriority;return SyncBatchedLane;}if((InputDiscreteHydrationLane&lanes)!==NoLanes){return_highestLanePriority=InputDiscreteHydrationLanePriority;return InputDiscreteHydrationLane;}var inputDiscreteLanes=InputDiscreteLanes&lanes;if(inputDiscreteLanes!==NoLanes){return_highestLanePriority=InputDiscreteLanePriority;return inputDiscreteLanes;}if((lanes&InputContinuousHydrationLane)!==NoLanes){return_highestLanePriority=InputContinuousHydrationLanePriority;return InputContinuousHydrationLane;}var inputContinuousLanes=InputContinuousLanes&lanes;if(inputContinuousLanes!==NoLanes){return_highestLanePriority=InputContinuousLanePriority;return inputContinuousLanes;}if((lanes&DefaultHydrationLane)!==NoLanes){return_highestLanePriority=DefaultHydrationLanePriority;return DefaultHydrationLane;}var defaultLanes=DefaultLanes&lanes;if(defaultLanes!==NoLanes){return_highestLanePriority=DefaultLanePriority;return defaultLanes;}if((lanes&TransitionHydrationLane)!==NoLanes){return_highestLanePriority=TransitionHydrationPriority;return TransitionHydrationLane;}var transitionLanes=TransitionLanes&lanes;if(transitionLanes!==NoLanes){return_highestLanePriority=TransitionPriority;return transitionLanes;}var retryLanes=RetryLanes&lanes;if(retryLanes!==NoLanes){return_highestLanePriority=RetryLanePriority;return retryLanes;}if(lanes&SelectiveHydrationLane){return_highestLanePriority=SelectiveHydrationLanePriority;return SelectiveHydrationLane;}if((lanes&IdleHydrationLane)!==NoLanes){return_highestLanePriority=IdleHydrationLanePriority;return IdleHydrationLane;}var idleLanes=IdleLanes&lanes;if(idleLanes!==NoLanes){return_highestLanePriority=IdleLanePriority;return idleLanes;}if((OffscreenLane&lanes)!==NoLanes){return_highestLanePriority=OffscreenLanePriority;return OffscreenLane;}{error('Should have found matching lanes. This is a bug in React.');}// This shouldn't be reachable, but as a fallback, return the entire bitmask.
return_highestLanePriority=DefaultLanePriority;return lanes;}function schedulerPriorityToLanePriority(schedulerPriorityLevel){switch(schedulerPriorityLevel){case ImmediatePriority:return SyncLanePriority;case UserBlockingPriority:return InputContinuousLanePriority;case NormalPriority:case LowPriority:// TODO: Handle LowSchedulerPriority, somehow. Maybe the same lane as hydration.
return DefaultLanePriority;case IdlePriority:return IdleLanePriority;default:return NoLanePriority;}}function lanePriorityToSchedulerPriority(lanePriority){switch(lanePriority){case SyncLanePriority:case SyncBatchedLanePriority:return ImmediatePriority;case InputDiscreteHydrationLanePriority:case InputDiscreteLanePriority:case InputContinuousHydrationLanePriority:case InputContinuousLanePriority:return UserBlockingPriority;case DefaultHydrationLanePriority:case DefaultLanePriority:case TransitionHydrationPriority:case TransitionPriority:case SelectiveHydrationLanePriority:case RetryLanePriority:return NormalPriority;case IdleHydrationLanePriority:case IdleLanePriority:case OffscreenLanePriority:return IdlePriority;case NoLanePriority:return NoPriority;default:{{throw Error("Invalid update priority: "+lanePriority+". This is a bug in React.");}}}}function getNextLanes(root,wipLanes){// Early bailout if there's no pending work left.
var pendingLanes=root.pendingLanes;if(pendingLanes===NoLanes){return_highestLanePriority=NoLanePriority;return NoLanes;}var nextLanes=NoLanes;var nextLanePriority=NoLanePriority;var expiredLanes=root.expiredLanes;var suspendedLanes=root.suspendedLanes;var pingedLanes=root.pingedLanes;// Check if any work has expired.
if(expiredLanes!==NoLanes){nextLanes=expiredLanes;nextLanePriority=return_highestLanePriority=SyncLanePriority;}else {// Do not work on any idle work until all the non-idle work has finished,
// even if the work is suspended.
var nonIdlePendingLanes=pendingLanes&NonIdleLanes;if(nonIdlePendingLanes!==NoLanes){var nonIdleUnblockedLanes=nonIdlePendingLanes&~suspendedLanes;if(nonIdleUnblockedLanes!==NoLanes){nextLanes=getHighestPriorityLanes(nonIdleUnblockedLanes);nextLanePriority=return_highestLanePriority;}else {var nonIdlePingedLanes=nonIdlePendingLanes&pingedLanes;if(nonIdlePingedLanes!==NoLanes){nextLanes=getHighestPriorityLanes(nonIdlePingedLanes);nextLanePriority=return_highestLanePriority;}}}else {// The only remaining work is Idle.
var unblockedLanes=pendingLanes&~suspendedLanes;if(unblockedLanes!==NoLanes){nextLanes=getHighestPriorityLanes(unblockedLanes);nextLanePriority=return_highestLanePriority;}else {if(pingedLanes!==NoLanes){nextLanes=getHighestPriorityLanes(pingedLanes);nextLanePriority=return_highestLanePriority;}}}}if(nextLanes===NoLanes){// This should only be reachable if we're suspended
// TODO: Consider warning in this path if a fallback timer is not scheduled.
return NoLanes;}// If there are higher priority lanes, we'll include them even if they
// are suspended.
nextLanes=pendingLanes&getEqualOrHigherPriorityLanes(nextLanes);// If we're already in the middle of a render, switching lanes will interrupt
// it and we'll lose our progress. We should only do this if the new lanes are
// higher priority.
if(wipLanes!==NoLanes&&wipLanes!==nextLanes&&// If we already suspended with a delay, then interrupting is fine. Don't
// bother waiting until the root is complete.
(wipLanes&suspendedLanes)===NoLanes){getHighestPriorityLanes(wipLanes);var wipLanePriority=return_highestLanePriority;if(nextLanePriority<=wipLanePriority){return wipLanes;}else {return_highestLanePriority=nextLanePriority;}}// Check for entangled lanes and add them to the batch.
//
// A lane is said to be entangled with another when it's not allowed to render
// in a batch that does not also include the other lane. Typically we do this
// when multiple updates have the same source, and we only want to respond to
// the most recent event from that source.
//
// Note that we apply entanglements *after* checking for partial work above.
// This means that if a lane is entangled during an interleaved event while
// it's already rendering, we won't interrupt it. This is intentional, since
// entanglement is usually "best effort": we'll try our best to render the
// lanes in the same batch, but it's not worth throwing out partially
// completed work in order to do it.
//
// For those exceptions where entanglement is semantically important, like
// useMutableSource, we should ensure that there is no partial work at the
// time we apply the entanglement.
var entangledLanes=root.entangledLanes;if(entangledLanes!==NoLanes){var entanglements=root.entanglements;var lanes=nextLanes&entangledLanes;while(lanes>0){var index=pickArbitraryLaneIndex(lanes);var lane=1<<index;nextLanes|=entanglements[index];lanes&=~lane;}}return nextLanes;}function getMostRecentEventTime(root,lanes){var eventTimes=root.eventTimes;var mostRecentEventTime=NoTimestamp;while(lanes>0){var index=pickArbitraryLaneIndex(lanes);var lane=1<<index;var eventTime=eventTimes[index];if(eventTime>mostRecentEventTime){mostRecentEventTime=eventTime;}lanes&=~lane;}return mostRecentEventTime;}function computeExpirationTime(lane,currentTime){// TODO: Expiration heuristic is constant per lane, so could use a map.
getHighestPriorityLanes(lane);var priority=return_highestLanePriority;if(priority>=InputContinuousLanePriority){// User interactions should expire slightly more quickly.
//
// NOTE: This is set to the corresponding constant as in Scheduler.js. When
// we made it larger, a product metric in www regressed, suggesting there's
// a user interaction that's being starved by a series of synchronous
// updates. If that theory is correct, the proper solution is to fix the
// starvation. However, this scenario supports the idea that expiration
// times are an important safeguard when starvation does happen.
//
// Also note that, in the case of user input specifically, this will soon no
// longer be an issue because we plan to make user input synchronous by
// default (until you enter `startTransition`, of course.)
//
// If weren't planning to make these updates synchronous soon anyway, I
// would probably make this number a configurable parameter.
return currentTime+250;}else if(priority>=TransitionPriority){return currentTime+5000;}else {// Anything idle priority or lower should never expire.
return NoTimestamp;}}function markStarvedLanesAsExpired(root,currentTime){// TODO: This gets called every time we yield. We can optimize by storing
// the earliest expiration time on the root. Then use that to quickly bail out
// of this function.
var pendingLanes=root.pendingLanes;var suspendedLanes=root.suspendedLanes;var pingedLanes=root.pingedLanes;var expirationTimes=root.expirationTimes;// Iterate through the pending lanes and check if we've reached their
// expiration time. If so, we'll assume the update is being starved and mark
// it as expired to force it to finish.
var lanes=pendingLanes;while(lanes>0){var index=pickArbitraryLaneIndex(lanes);var lane=1<<index;var expirationTime=expirationTimes[index];if(expirationTime===NoTimestamp){// Found a pending lane with no expiration time. If it's not suspended, or
// if it's pinged, assume it's CPU-bound. Compute a new expiration time
// using the current time.
if((lane&suspendedLanes)===NoLanes||(lane&pingedLanes)!==NoLanes){// Assumes timestamps are monotonically increasing.
expirationTimes[index]=computeExpirationTime(lane,currentTime);}}else if(expirationTime<=currentTime){// This lane expired
root.expiredLanes|=lane;}lanes&=~lane;}}// This returns the highest priority pending lanes regardless of whether they
function getLanesToRetrySynchronouslyOnError(root){var everythingButOffscreen=root.pendingLanes&~OffscreenLane;if(everythingButOffscreen!==NoLanes){return everythingButOffscreen;}if(everythingButOffscreen&OffscreenLane){return OffscreenLane;}return NoLanes;}function returnNextLanesPriority(){return return_highestLanePriority;}function includesNonIdleWork(lanes){return (lanes&NonIdleLanes)!==NoLanes;}function includesOnlyRetries(lanes){return (lanes&RetryLanes)===lanes;}function includesOnlyTransitions(lanes){return (lanes&TransitionLanes)===lanes;}// To ensure consistency across multiple updates in the same event, this should
// be a pure function, so that it always returns the same lane for given inputs.
function findUpdateLane(lanePriority,wipLanes){switch(lanePriority){case NoLanePriority:break;case SyncLanePriority:return SyncLane;case SyncBatchedLanePriority:return SyncBatchedLane;case InputDiscreteLanePriority:{var _lane=pickArbitraryLane(InputDiscreteLanes&~wipLanes);if(_lane===NoLane){// Shift to the next priority level
return findUpdateLane(InputContinuousLanePriority,wipLanes);}return _lane;}case InputContinuousLanePriority:{var _lane2=pickArbitraryLane(InputContinuousLanes&~wipLanes);if(_lane2===NoLane){// Shift to the next priority level
return findUpdateLane(DefaultLanePriority,wipLanes);}return _lane2;}case DefaultLanePriority:{var _lane3=pickArbitraryLane(DefaultLanes&~wipLanes);if(_lane3===NoLane){// If all the default lanes are already being worked on, look for a
// lane in the transition range.
_lane3=pickArbitraryLane(TransitionLanes&~wipLanes);if(_lane3===NoLane){// All the transition lanes are taken, too. This should be very
// rare, but as a last resort, pick a default lane. This will have
// the effect of interrupting the current work-in-progress render.
_lane3=pickArbitraryLane(DefaultLanes);}}return _lane3;}case TransitionPriority:// Should be handled by findTransitionLane instead
case RetryLanePriority:// Should be handled by findRetryLane instead
break;case IdleLanePriority:var lane=pickArbitraryLane(IdleLanes&~wipLanes);if(lane===NoLane){lane=pickArbitraryLane(IdleLanes);}return lane;}{{throw Error("Invalid update priority: "+lanePriority+". This is a bug in React.");}}}// To ensure consistency across multiple updates in the same event, this should
// be pure function, so that it always returns the same lane for given inputs.
function findTransitionLane(wipLanes,pendingLanes){// First look for lanes that are completely unclaimed, i.e. have no
// pending work.
var lane=pickArbitraryLane(TransitionLanes&~pendingLanes);if(lane===NoLane){// If all lanes have pending work, look for a lane that isn't currently
// being worked on.
lane=pickArbitraryLane(TransitionLanes&~wipLanes);if(lane===NoLane){// If everything is being worked on, pick any lane. This has the
// effect of interrupting the current work-in-progress.
lane=pickArbitraryLane(TransitionLanes);}}return lane;}// To ensure consistency across multiple updates in the same event, this should
// be pure function, so that it always returns the same lane for given inputs.
function findRetryLane(wipLanes){// This is a fork of `findUpdateLane` designed specifically for Suspense
// "retries" — a special update that attempts to flip a Suspense boundary
// from its placeholder state to its primary/resolved state.
var lane=pickArbitraryLane(RetryLanes&~wipLanes);if(lane===NoLane){lane=pickArbitraryLane(RetryLanes);}return lane;}function getHighestPriorityLane(lanes){return lanes&-lanes;}function getLowestPriorityLane(lanes){// This finds the most significant non-zero bit.
var index=31-clz32(lanes);return index<0?NoLanes:1<<index;}function getEqualOrHigherPriorityLanes(lanes){return (getLowestPriorityLane(lanes)<<1)-1;}function pickArbitraryLane(lanes){// This wrapper function gets inlined. Only exists so to communicate that it
// doesn't matter which bit is selected; you can pick any bit without
// affecting the algorithms where its used. Here I'm using
// getHighestPriorityLane because it requires the fewest operations.
return getHighestPriorityLane(lanes);}function pickArbitraryLaneIndex(lanes){return 31-clz32(lanes);}function laneToIndex(lane){return pickArbitraryLaneIndex(lane);}function includesSomeLane(a,b){return (a&b)!==NoLanes;}function isSubsetOfLanes(set,subset){return (set&subset)===subset;}function mergeLanes(a,b){return a|b;}function removeLanes(set,subset){return set&~subset;}// Seems redundant, but it changes the type from a single lane (used for
// updates) to a group of lanes (used for flushing work).
function laneToLanes(lane){return lane;}function higherPriorityLane(a,b){// This works because the bit ranges decrease in priority as you go left.
return a!==NoLane&&a<b?a:b;}function createLaneMap(initial){// Intentionally pushing one by one.
// https://v8.dev/blog/elements-kinds#avoid-creating-holes
var laneMap=[];for(var i=0;i<TotalLanes;i++){laneMap.push(initial);}return laneMap;}function markRootUpdated(root,updateLane,eventTime){root.pendingLanes|=updateLane;// TODO: Theoretically, any update to any lane can unblock any other lane. But
// it's not practical to try every single possible combination. We need a
// heuristic to decide which lanes to attempt to render, and in which batches.
// For now, we use the same heuristic as in the old ExpirationTimes model:
// retry any lane at equal or lower priority, but don't try updates at higher
// priority without also including the lower priority updates. This works well
// when considering updates across different priority levels, but isn't
// sufficient for updates within the same priority, since we want to treat
// those updates as parallel.
// Unsuspend any update at equal or lower priority.
var higherPriorityLanes=updateLane-1;// Turns 0b1000 into 0b0111
root.suspendedLanes&=higherPriorityLanes;root.pingedLanes&=higherPriorityLanes;var eventTimes=root.eventTimes;var index=laneToIndex(updateLane);// We can always overwrite an existing timestamp because we prefer the most
// recent event, and we assume time is monotonically increasing.
eventTimes[index]=eventTime;}function markRootSuspended(root,suspendedLanes){root.suspendedLanes|=suspendedLanes;root.pingedLanes&=~suspendedLanes;// The suspended lanes are no longer CPU-bound. Clear their expiration times.
var expirationTimes=root.expirationTimes;var lanes=suspendedLanes;while(lanes>0){var index=pickArbitraryLaneIndex(lanes);var lane=1<<index;expirationTimes[index]=NoTimestamp;lanes&=~lane;}}function markRootPinged(root,pingedLanes,eventTime){root.pingedLanes|=root.suspendedLanes&pingedLanes;}function markDiscreteUpdatesExpired(root){root.expiredLanes|=InputDiscreteLanes&root.pendingLanes;}function hasDiscreteLanes(lanes){return (lanes&InputDiscreteLanes)!==NoLanes;}function markRootMutableRead(root,updateLane){root.mutableReadLanes|=updateLane&root.pendingLanes;}function markRootFinished(root,remainingLanes){var noLongerPendingLanes=root.pendingLanes&~remainingLanes;root.pendingLanes=remainingLanes;// Let's try everything again
root.suspendedLanes=0;root.pingedLanes=0;root.expiredLanes&=remainingLanes;root.mutableReadLanes&=remainingLanes;root.entangledLanes&=remainingLanes;var entanglements=root.entanglements;var eventTimes=root.eventTimes;var expirationTimes=root.expirationTimes;// Clear the lanes that no longer have pending work
var lanes=noLongerPendingLanes;while(lanes>0){var index=pickArbitraryLaneIndex(lanes);var lane=1<<index;entanglements[index]=NoLanes;eventTimes[index]=NoTimestamp;expirationTimes[index]=NoTimestamp;lanes&=~lane;}}function markRootEntangled(root,entangledLanes){root.entangledLanes|=entangledLanes;var entanglements=root.entanglements;var lanes=entangledLanes;while(lanes>0){var index=pickArbitraryLaneIndex(lanes);var lane=1<<index;entanglements[index]|=entangledLanes;lanes&=~lane;}}var clz32=Math.clz32?Math.clz32:clz32Fallback;// Count leading zeros. Only used on lanes, so assume input is an integer.
// Based on:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/clz32
var log=Math.log;var LN2=Math.LN2;function clz32Fallback(lanes){if(lanes===0){return 32;}return 31-(log(lanes)/LN2|0)|0;}// Intentionally not named imports because Rollup would use dynamic dispatch for
var UserBlockingPriority$1=Scheduler.unstable_UserBlockingPriority,runWithPriority=Scheduler.unstable_runWithPriority;// TODO: can we stop exporting these?
var _enabled=true;// This is exported in FB builds for use by legacy FB layer infra.
// We'd like to remove this but it's not clear if this is safe.
function setEnabled(enabled){_enabled=!!enabled;}function isEnabled(){return _enabled;}function createEventListenerWrapperWithPriority(targetContainer,domEventName,eventSystemFlags){var eventPriority=getEventPriorityForPluginSystem(domEventName);var listenerWrapper;switch(eventPriority){case DiscreteEvent:listenerWrapper=dispatchDiscreteEvent;break;case UserBlockingEvent:listenerWrapper=dispatchUserBlockingUpdate;break;case ContinuousEvent:default:listenerWrapper=dispatchEvent;break;}return listenerWrapper.bind(null,domEventName,eventSystemFlags,targetContainer);}function dispatchDiscreteEvent(domEventName,eventSystemFlags,container,nativeEvent){{flushDiscreteUpdatesIfNeeded(nativeEvent.timeStamp);}discreteUpdates(dispatchEvent,domEventName,eventSystemFlags,container,nativeEvent);}function dispatchUserBlockingUpdate(domEventName,eventSystemFlags,container,nativeEvent){{runWithPriority(UserBlockingPriority$1,dispatchEvent.bind(null,domEventName,eventSystemFlags,container,nativeEvent));}}function dispatchEvent(domEventName,eventSystemFlags,targetContainer,nativeEvent){if(!_enabled){return;}var allowReplay=true;{// TODO: replaying capture phase events is currently broken
// because we used to do it during top-level native bubble handlers
// but now we use different bubble and capture handlers.
// In eager mode, we attach capture listeners early, so we need
// to filter them out until we fix the logic to handle them correctly.
// This could've been outside the flag but I put it inside to reduce risk.
allowReplay=(eventSystemFlags&IS_CAPTURE_PHASE)===0;}if(allowReplay&&hasQueuedDiscreteEvents()&&isReplayableDiscreteEvent(domEventName)){// If we already have a queue of discrete events, and this is another discrete
// event, then we can't dispatch it regardless of its target, since they
// need to dispatch in order.
queueDiscreteEvent(null,// Flags that we're not actually blocked on anything as far as we know.
domEventName,eventSystemFlags,targetContainer,nativeEvent);return;}var blockedOn=attemptToDispatchEvent(domEventName,eventSystemFlags,targetContainer,nativeEvent);if(blockedOn===null){// We successfully dispatched this event.
if(allowReplay){clearIfContinuousEvent(domEventName,nativeEvent);}return;}if(allowReplay){if(isReplayableDiscreteEvent(domEventName)){// This this to be replayed later once the target is available.
queueDiscreteEvent(blockedOn,domEventName,eventSystemFlags,targetContainer,nativeEvent);return;}if(queueIfContinuousEvent(blockedOn,domEventName,eventSystemFlags,targetContainer,nativeEvent)){return;}// We need to clear only if we didn't queue because
// queueing is accummulative.
clearIfContinuousEvent(domEventName,nativeEvent);}// This is not replayable so we'll invoke it but without a target,
// in case the event system needs to trace it.
dispatchEventForPluginEventSystem(domEventName,eventSystemFlags,nativeEvent,null,targetContainer);}// Attempt dispatching an event. Returns a SuspenseInstance or Container if it's blocked.
function attemptToDispatchEvent(domEventName,eventSystemFlags,targetContainer,nativeEvent){// TODO: Warn if _enabled is false.
var nativeEventTarget=getEventTarget(nativeEvent);var targetInst=getClosestInstanceFromNode(nativeEventTarget);if(targetInst!==null){var nearestMounted=getNearestMountedFiber(targetInst);if(nearestMounted===null){// This tree has been unmounted already. Dispatch without a target.
targetInst=null;}else {var tag=nearestMounted.tag;if(tag===SuspenseComponent){var instance=getSuspenseInstanceFromFiber(nearestMounted);if(instance!==null){// Queue the event to be replayed later. Abort dispatching since we
// don't want this event dispatched twice through the event system.
// TODO: If this is the first discrete event in the queue. Schedule an increased
// priority for this boundary.
return instance;}// This shouldn't happen, something went wrong but to avoid blocking
// the whole system, dispatch the event without a target.
// TODO: Warn.
targetInst=null;}else if(tag===HostRoot){var root=nearestMounted.stateNode;if(root.hydrate){// If this happens during a replay something went wrong and it might block
// the whole system.
return getContainerFromFiber(nearestMounted);}targetInst=null;}else if(nearestMounted!==targetInst){// If we get an event (ex: img onload) before committing that
// component's mount, ignore it for now (that is, treat it as if it was an
// event on a non-React tree). We might also consider queueing events and
// dispatching them after the mount.
targetInst=null;}}}dispatchEventForPluginEventSystem(domEventName,eventSystemFlags,nativeEvent,targetInst,targetContainer);// We're not blocked on anything.
return null;}function addEventBubbleListener(target,eventType,listener){target.addEventListener(eventType,listener,false);return listener;}function addEventCaptureListener(target,eventType,listener){target.addEventListener(eventType,listener,true);return listener;}function addEventCaptureListenerWithPassiveFlag(target,eventType,listener,passive){target.addEventListener(eventType,listener,{capture:true,passive:passive});return listener;}function addEventBubbleListenerWithPassiveFlag(target,eventType,listener,passive){target.addEventListener(eventType,listener,{passive:passive});return listener;}/**
 * These variables store information about text content of a target node,
 * allowing comparison of content before and after a given event.
 *
 * Identify the node where selection currently begins, then observe
 * both its text content and its current position in the DOM. Since the
 * browser may natively replace the target node during composition, we can
 * use its position to find its replacement.
 *
 *
 */var root=null;var startText=null;var fallbackText=null;function initialize(nativeEventTarget){root=nativeEventTarget;startText=getText();return true;}function reset(){root=null;startText=null;fallbackText=null;}function getData(){if(fallbackText){return fallbackText;}var start;var startValue=startText;var startLength=startValue.length;var end;var endValue=getText();var endLength=endValue.length;for(start=0;start<startLength;start++){if(startValue[start]!==endValue[start]){break;}}var minEnd=startLength-start;for(end=1;end<=minEnd;end++){if(startValue[startLength-end]!==endValue[endLength-end]){break;}}var sliceTail=end>1?1-end:undefined;fallbackText=endValue.slice(start,sliceTail);return fallbackText;}function getText(){if('value'in root){return root.value;}return root.textContent;}/**
 * `charCode` represents the actual "character code" and is safe to use with
 * `String.fromCharCode`. As such, only keys that correspond to printable
 * characters produce a valid `charCode`, the only exception to this is Enter.
 * The Tab-key is considered non-printable and does not have a `charCode`,
 * presumably because it does not produce a tab-character in browsers.
 *
 * @param {object} nativeEvent Native browser event.
 * @return {number} Normalized `charCode` property.
 */function getEventCharCode(nativeEvent){var charCode;var keyCode=nativeEvent.keyCode;if('charCode'in nativeEvent){charCode=nativeEvent.charCode;// FF does not set `charCode` for the Enter-key, check against `keyCode`.
if(charCode===0&&keyCode===13){charCode=13;}}else {// IE8 does not implement `charCode`, but `keyCode` has the correct value.
charCode=keyCode;}// IE and Edge (on Windows) and Chrome / Safari (on Windows and Linux)
// report Enter as charCode 10 when ctrl is pressed.
if(charCode===10){charCode=13;}// Some non-printable keys are reported in `charCode`/`keyCode`, discard them.
// Must not discard the (non-)printable Enter-key.
if(charCode>=32||charCode===13){return charCode;}return 0;}function functionThatReturnsTrue(){return true;}function functionThatReturnsFalse(){return false;}// This is intentionally a factory so that we have different returned constructors.
// If we had a single constructor, it would be megamorphic and engines would deopt.
function createSyntheticEvent(Interface){/**
   * Synthetic events are dispatched by event plugins, typically in response to a
   * top-level event delegation handler.
   *
   * These systems should generally use pooling to reduce the frequency of garbage
   * collection. The system should check `isPersistent` to determine whether the
   * event should be released into the pool after being dispatched. Users that
   * need a persisted event should invoke `persist`.
   *
   * Synthetic events (and subclasses) implement the DOM Level 3 Events API by
   * normalizing browser quirks. Subclasses do not necessarily have to implement a
   * DOM interface; custom application-specific events can also subclass this.
   */function SyntheticBaseEvent(reactName,reactEventType,targetInst,nativeEvent,nativeEventTarget){this._reactName=reactName;this._targetInst=targetInst;this.type=reactEventType;this.nativeEvent=nativeEvent;this.target=nativeEventTarget;this.currentTarget=null;for(var _propName in Interface){if(!Interface.hasOwnProperty(_propName)){continue;}var normalize=Interface[_propName];if(normalize){this[_propName]=normalize(nativeEvent);}else {this[_propName]=nativeEvent[_propName];}}var defaultPrevented=nativeEvent.defaultPrevented!=null?nativeEvent.defaultPrevented:nativeEvent.returnValue===false;if(defaultPrevented){this.isDefaultPrevented=functionThatReturnsTrue;}else {this.isDefaultPrevented=functionThatReturnsFalse;}this.isPropagationStopped=functionThatReturnsFalse;return this;}_assign(SyntheticBaseEvent.prototype,{preventDefault:function preventDefault(){this.defaultPrevented=true;var event=this.nativeEvent;if(!event){return;}if(event.preventDefault){event.preventDefault();// $FlowFixMe - flow is not aware of `unknown` in IE
}else if(typeof event.returnValue!=='unknown'){event.returnValue=false;}this.isDefaultPrevented=functionThatReturnsTrue;},stopPropagation:function stopPropagation(){var event=this.nativeEvent;if(!event){return;}if(event.stopPropagation){event.stopPropagation();// $FlowFixMe - flow is not aware of `unknown` in IE
}else if(typeof event.cancelBubble!=='unknown'){// The ChangeEventPlugin registers a "propertychange" event for
// IE. This event does not support bubbling or cancelling, and
// any references to cancelBubble throw "Member not found".  A
// typeof check of "unknown" circumvents this issue (and is also
// IE specific).
event.cancelBubble=true;}this.isPropagationStopped=functionThatReturnsTrue;},/**
     * We release all dispatched `SyntheticEvent`s after each event loop, adding
     * them back into the pool. This allows a way to hold onto a reference that
     * won't be added back into the pool.
     */persist:function persist(){// Modern event system doesn't use pooling.
},/**
     * Checks if this event should be released back into the pool.
     *
     * @return {boolean} True if this should not be released, false otherwise.
     */isPersistent:functionThatReturnsTrue});return SyntheticBaseEvent;}/**
 * @interface Event
 * @see http://www.w3.org/TR/DOM-Level-3-Events/
 */var EventInterface={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function timeStamp(event){return event.timeStamp||Date.now();},defaultPrevented:0,isTrusted:0};var SyntheticEvent=createSyntheticEvent(EventInterface);var UIEventInterface=_assign({},EventInterface,{view:0,detail:0});var SyntheticUIEvent=createSyntheticEvent(UIEventInterface);var lastMovementX;var lastMovementY;var lastMouseEvent;function updateMouseMovementPolyfillState(event){if(event!==lastMouseEvent){if(lastMouseEvent&&event.type==='mousemove'){lastMovementX=event.screenX-lastMouseEvent.screenX;lastMovementY=event.screenY-lastMouseEvent.screenY;}else {lastMovementX=0;lastMovementY=0;}lastMouseEvent=event;}}/**
 * @interface MouseEvent
 * @see http://www.w3.org/TR/DOM-Level-3-Events/
 */var MouseEventInterface=_assign({},UIEventInterface,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:getEventModifierState,button:0,buttons:0,relatedTarget:function relatedTarget(event){if(event.relatedTarget===undefined)return event.fromElement===event.srcElement?event.toElement:event.fromElement;return event.relatedTarget;},movementX:function movementX(event){if('movementX'in event){return event.movementX;}updateMouseMovementPolyfillState(event);return lastMovementX;},movementY:function movementY(event){if('movementY'in event){return event.movementY;}// Don't need to call updateMouseMovementPolyfillState() here
// because it's guaranteed to have already run when movementX
// was copied.
return lastMovementY;}});var SyntheticMouseEvent=createSyntheticEvent(MouseEventInterface);/**
 * @interface DragEvent
 * @see http://www.w3.org/TR/DOM-Level-3-Events/
 */var DragEventInterface=_assign({},MouseEventInterface,{dataTransfer:0});var SyntheticDragEvent=createSyntheticEvent(DragEventInterface);/**
 * @interface FocusEvent
 * @see http://www.w3.org/TR/DOM-Level-3-Events/
 */var FocusEventInterface=_assign({},UIEventInterface,{relatedTarget:0});var SyntheticFocusEvent=createSyntheticEvent(FocusEventInterface);/**
 * @interface Event
 * @see http://www.w3.org/TR/css3-animations/#AnimationEvent-interface
 * @see https://developer.mozilla.org/en-US/docs/Web/API/AnimationEvent
 */var AnimationEventInterface=_assign({},EventInterface,{animationName:0,elapsedTime:0,pseudoElement:0});var SyntheticAnimationEvent=createSyntheticEvent(AnimationEventInterface);/**
 * @interface Event
 * @see http://www.w3.org/TR/clipboard-apis/
 */var ClipboardEventInterface=_assign({},EventInterface,{clipboardData:function clipboardData(event){return 'clipboardData'in event?event.clipboardData:window.clipboardData;}});var SyntheticClipboardEvent=createSyntheticEvent(ClipboardEventInterface);/**
 * @interface Event
 * @see http://www.w3.org/TR/DOM-Level-3-Events/#events-compositionevents
 */var CompositionEventInterface=_assign({},EventInterface,{data:0});var SyntheticCompositionEvent=createSyntheticEvent(CompositionEventInterface);/**
 * @interface Event
 * @see http://www.w3.org/TR/2013/WD-DOM-Level-3-Events-20131105
 *      /#events-inputevents
 */ // Happens to share the same list for now.
var SyntheticInputEvent=SyntheticCompositionEvent;/**
 * Normalization of deprecated HTML5 `key` values
 * @see https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent#Key_names
 */var normalizeKey={Esc:'Escape',Spacebar:' ',Left:'ArrowLeft',Up:'ArrowUp',Right:'ArrowRight',Down:'ArrowDown',Del:'Delete',Win:'OS',Menu:'ContextMenu',Apps:'ContextMenu',Scroll:'ScrollLock',MozPrintableKey:'Unidentified'};/**
 * Translation from legacy `keyCode` to HTML5 `key`
 * Only special keys supported, all others depend on keyboard layout or browser
 * @see https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent#Key_names
 */var translateToKey={'8':'Backspace','9':'Tab','12':'Clear','13':'Enter','16':'Shift','17':'Control','18':'Alt','19':'Pause','20':'CapsLock','27':'Escape','32':' ','33':'PageUp','34':'PageDown','35':'End','36':'Home','37':'ArrowLeft','38':'ArrowUp','39':'ArrowRight','40':'ArrowDown','45':'Insert','46':'Delete','112':'F1','113':'F2','114':'F3','115':'F4','116':'F5','117':'F6','118':'F7','119':'F8','120':'F9','121':'F10','122':'F11','123':'F12','144':'NumLock','145':'ScrollLock','224':'Meta'};/**
 * @param {object} nativeEvent Native browser event.
 * @return {string} Normalized `key` property.
 */function getEventKey(nativeEvent){if(nativeEvent.key){// Normalize inconsistent values reported by browsers due to
// implementations of a working draft specification.
// FireFox implements `key` but returns `MozPrintableKey` for all
// printable characters (normalized to `Unidentified`), ignore it.
var key=normalizeKey[nativeEvent.key]||nativeEvent.key;if(key!=='Unidentified'){return key;}}// Browser does not implement `key`, polyfill as much of it as we can.
if(nativeEvent.type==='keypress'){var charCode=getEventCharCode(nativeEvent);// The enter-key is technically both printable and non-printable and can
// thus be captured by `keypress`, no other non-printable key should.
return charCode===13?'Enter':String.fromCharCode(charCode);}if(nativeEvent.type==='keydown'||nativeEvent.type==='keyup'){// While user keyboard layout determines the actual meaning of each
// `keyCode` value, almost all function keys have a universal value.
return translateToKey[nativeEvent.keyCode]||'Unidentified';}return '';}/**
 * Translation from modifier key to the associated property in the event.
 * @see http://www.w3.org/TR/DOM-Level-3-Events/#keys-Modifiers
 */var modifierKeyToProp={Alt:'altKey',Control:'ctrlKey',Meta:'metaKey',Shift:'shiftKey'};// Older browsers (Safari <= 10, iOS Safari <= 10.2) do not support
// getModifierState. If getModifierState is not supported, we map it to a set of
// modifier keys exposed by the event. In this case, Lock-keys are not supported.
function modifierStateGetter(keyArg){var syntheticEvent=this;var nativeEvent=syntheticEvent.nativeEvent;if(nativeEvent.getModifierState){return nativeEvent.getModifierState(keyArg);}var keyProp=modifierKeyToProp[keyArg];return keyProp?!!nativeEvent[keyProp]:false;}function getEventModifierState(nativeEvent){return modifierStateGetter;}/**
 * @interface KeyboardEvent
 * @see http://www.w3.org/TR/DOM-Level-3-Events/
 */var KeyboardEventInterface=_assign({},UIEventInterface,{key:getEventKey,code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:getEventModifierState,// Legacy Interface
charCode:function charCode(event){// `charCode` is the result of a KeyPress event and represents the value of
// the actual printable character.
// KeyPress is deprecated, but its replacement is not yet final and not
// implemented in any major browser. Only KeyPress has charCode.
if(event.type==='keypress'){return getEventCharCode(event);}return 0;},keyCode:function keyCode(event){// `keyCode` is the result of a KeyDown/Up event and represents the value of
// physical keyboard key.
// The actual meaning of the value depends on the users' keyboard layout
// which cannot be detected. Assuming that it is a US keyboard layout
// provides a surprisingly accurate mapping for US and European users.
// Due to this, it is left to the user to implement at this time.
if(event.type==='keydown'||event.type==='keyup'){return event.keyCode;}return 0;},which:function which(event){// `which` is an alias for either `keyCode` or `charCode` depending on the
// type of the event.
if(event.type==='keypress'){return getEventCharCode(event);}if(event.type==='keydown'||event.type==='keyup'){return event.keyCode;}return 0;}});var SyntheticKeyboardEvent=createSyntheticEvent(KeyboardEventInterface);/**
 * @interface PointerEvent
 * @see http://www.w3.org/TR/pointerevents/
 */var PointerEventInterface=_assign({},MouseEventInterface,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0});var SyntheticPointerEvent=createSyntheticEvent(PointerEventInterface);/**
 * @interface TouchEvent
 * @see http://www.w3.org/TR/touch-events/
 */var TouchEventInterface=_assign({},UIEventInterface,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:getEventModifierState});var SyntheticTouchEvent=createSyntheticEvent(TouchEventInterface);/**
 * @interface Event
 * @see http://www.w3.org/TR/2009/WD-css3-transitions-20090320/#transition-events-
 * @see https://developer.mozilla.org/en-US/docs/Web/API/TransitionEvent
 */var TransitionEventInterface=_assign({},EventInterface,{propertyName:0,elapsedTime:0,pseudoElement:0});var SyntheticTransitionEvent=createSyntheticEvent(TransitionEventInterface);/**
 * @interface WheelEvent
 * @see http://www.w3.org/TR/DOM-Level-3-Events/
 */var WheelEventInterface=_assign({},MouseEventInterface,{deltaX:function deltaX(event){return 'deltaX'in event?event.deltaX:// Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
'wheelDeltaX'in event?-event.wheelDeltaX:0;},deltaY:function deltaY(event){return 'deltaY'in event?event.deltaY:// Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
'wheelDeltaY'in event?-event.wheelDeltaY:// Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
'wheelDelta'in event?-event.wheelDelta:0;},deltaZ:0,// Browsers without "deltaMode" is reporting in raw wheel delta where one
// notch on the scroll is always +/- 120, roughly equivalent to pixels.
// A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
// ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
deltaMode:0});var SyntheticWheelEvent=createSyntheticEvent(WheelEventInterface);var END_KEYCODES=[9,13,27,32];// Tab, Return, Esc, Space
var START_KEYCODE=229;var canUseCompositionEvent=canUseDOM&&'CompositionEvent'in window;var documentMode=null;if(canUseDOM&&'documentMode'in document){documentMode=document.documentMode;}// Webkit offers a very useful `textInput` event that can be used to
// directly represent `beforeInput`. The IE `textinput` event is not as
// useful, so we don't use it.
var canUseTextInputEvent=canUseDOM&&'TextEvent'in window&&!documentMode;// In IE9+, we have access to composition events, but the data supplied
// by the native compositionend event may be incorrect. Japanese ideographic
// spaces, for instance (\u3000) are not recorded correctly.
var useFallbackCompositionData=canUseDOM&&(!canUseCompositionEvent||documentMode&&documentMode>8&&documentMode<=11);var SPACEBAR_CODE=32;var SPACEBAR_CHAR=String.fromCharCode(SPACEBAR_CODE);function registerEvents(){registerTwoPhaseEvent('onBeforeInput',['compositionend','keypress','textInput','paste']);registerTwoPhaseEvent('onCompositionEnd',['compositionend','focusout','keydown','keypress','keyup','mousedown']);registerTwoPhaseEvent('onCompositionStart',['compositionstart','focusout','keydown','keypress','keyup','mousedown']);registerTwoPhaseEvent('onCompositionUpdate',['compositionupdate','focusout','keydown','keypress','keyup','mousedown']);}// Track whether we've ever handled a keypress on the space key.
var hasSpaceKeypress=false;/**
 * Return whether a native keypress event is assumed to be a command.
 * This is required because Firefox fires `keypress` events for key commands
 * (cut, copy, select-all, etc.) even though no character is inserted.
 */function isKeypressCommand(nativeEvent){return (nativeEvent.ctrlKey||nativeEvent.altKey||nativeEvent.metaKey)&&// ctrlKey && altKey is equivalent to AltGr, and is not a command.
!(nativeEvent.ctrlKey&&nativeEvent.altKey);}/**
 * Translate native top level events into event types.
 */function getCompositionEventType(domEventName){switch(domEventName){case'compositionstart':return 'onCompositionStart';case'compositionend':return 'onCompositionEnd';case'compositionupdate':return 'onCompositionUpdate';}}/**
 * Does our fallback best-guess model think this event signifies that
 * composition has begun?
 */function isFallbackCompositionStart(domEventName,nativeEvent){return domEventName==='keydown'&&nativeEvent.keyCode===START_KEYCODE;}/**
 * Does our fallback mode think that this event is the end of composition?
 */function isFallbackCompositionEnd(domEventName,nativeEvent){switch(domEventName){case'keyup':// Command keys insert or clear IME input.
return END_KEYCODES.indexOf(nativeEvent.keyCode)!==-1;case'keydown':// Expect IME keyCode on each keydown. If we get any other
// code we must have exited earlier.
return nativeEvent.keyCode!==START_KEYCODE;case'keypress':case'mousedown':case'focusout':// Events are not possible without cancelling IME.
return true;default:return false;}}/**
 * Google Input Tools provides composition data via a CustomEvent,
 * with the `data` property populated in the `detail` object. If this
 * is available on the event object, use it. If not, this is a plain
 * composition event and we have nothing special to extract.
 *
 * @param {object} nativeEvent
 * @return {?string}
 */function getDataFromCustomEvent(nativeEvent){var detail=nativeEvent.detail;if(_typeof$1(detail)==='object'&&'data'in detail){return detail.data;}return null;}/**
 * Check if a composition event was triggered by Korean IME.
 * Our fallback mode does not work well with IE's Korean IME,
 * so just use native composition events when Korean IME is used.
 * Although CompositionEvent.locale property is deprecated,
 * it is available in IE, where our fallback mode is enabled.
 *
 * @param {object} nativeEvent
 * @return {boolean}
 */function isUsingKoreanIME(nativeEvent){return nativeEvent.locale==='ko';}// Track the current IME composition status, if any.
var isComposing=false;/**
 * @return {?object} A SyntheticCompositionEvent.
 */function extractCompositionEvent(dispatchQueue,domEventName,targetInst,nativeEvent,nativeEventTarget){var eventType;var fallbackData;if(canUseCompositionEvent){eventType=getCompositionEventType(domEventName);}else if(!isComposing){if(isFallbackCompositionStart(domEventName,nativeEvent)){eventType='onCompositionStart';}}else if(isFallbackCompositionEnd(domEventName,nativeEvent)){eventType='onCompositionEnd';}if(!eventType){return null;}if(useFallbackCompositionData&&!isUsingKoreanIME(nativeEvent)){// The current composition is stored statically and must not be
// overwritten while composition continues.
if(!isComposing&&eventType==='onCompositionStart'){isComposing=initialize(nativeEventTarget);}else if(eventType==='onCompositionEnd'){if(isComposing){fallbackData=getData();}}}var listeners=accumulateTwoPhaseListeners(targetInst,eventType);if(listeners.length>0){var event=new SyntheticCompositionEvent(eventType,domEventName,null,nativeEvent,nativeEventTarget);dispatchQueue.push({event:event,listeners:listeners});if(fallbackData){// Inject data generated from fallback path into the synthetic event.
// This matches the property of native CompositionEventInterface.
event.data=fallbackData;}else {var customData=getDataFromCustomEvent(nativeEvent);if(customData!==null){event.data=customData;}}}}function getNativeBeforeInputChars(domEventName,nativeEvent){switch(domEventName){case'compositionend':return getDataFromCustomEvent(nativeEvent);case'keypress':/**
       * If native `textInput` events are available, our goal is to make
       * use of them. However, there is a special case: the spacebar key.
       * In Webkit, preventing default on a spacebar `textInput` event
       * cancels character insertion, but it *also* causes the browser
       * to fall back to its default spacebar behavior of scrolling the
       * page.
       *
       * Tracking at:
       * https://code.google.com/p/chromium/issues/detail?id=355103
       *
       * To avoid this issue, use the keypress event as if no `textInput`
       * event is available.
       */var which=nativeEvent.which;if(which!==SPACEBAR_CODE){return null;}hasSpaceKeypress=true;return SPACEBAR_CHAR;case'textInput':// Record the characters to be added to the DOM.
var chars=nativeEvent.data;// If it's a spacebar character, assume that we have already handled
// it at the keypress level and bail immediately. Android Chrome
// doesn't give us keycodes, so we need to ignore it.
if(chars===SPACEBAR_CHAR&&hasSpaceKeypress){return null;}return chars;default:// For other native event types, do nothing.
return null;}}/**
 * For browsers that do not provide the `textInput` event, extract the
 * appropriate string to use for SyntheticInputEvent.
 */function getFallbackBeforeInputChars(domEventName,nativeEvent){// If we are currently composing (IME) and using a fallback to do so,
// try to extract the composed characters from the fallback object.
// If composition event is available, we extract a string only at
// compositionevent, otherwise extract it at fallback events.
if(isComposing){if(domEventName==='compositionend'||!canUseCompositionEvent&&isFallbackCompositionEnd(domEventName,nativeEvent)){var chars=getData();reset();isComposing=false;return chars;}return null;}switch(domEventName){case'paste':// If a paste event occurs after a keypress, throw out the input
// chars. Paste events should not lead to BeforeInput events.
return null;case'keypress':/**
       * As of v27, Firefox may fire keypress events even when no character
       * will be inserted. A few possibilities:
       *
       * - `which` is `0`. Arrow keys, Esc key, etc.
       *
       * - `which` is the pressed key code, but no char is available.
       *   Ex: 'AltGr + d` in Polish. There is no modified character for
       *   this key combination and no character is inserted into the
       *   document, but FF fires the keypress for char code `100` anyway.
       *   No `input` event will occur.
       *
       * - `which` is the pressed key code, but a command combination is
       *   being used. Ex: `Cmd+C`. No character is inserted, and no
       *   `input` event will occur.
       */if(!isKeypressCommand(nativeEvent)){// IE fires the `keypress` event when a user types an emoji via
// Touch keyboard of Windows.  In such a case, the `char` property
// holds an emoji character like `\uD83D\uDE0A`.  Because its length
// is 2, the property `which` does not represent an emoji correctly.
// In such a case, we directly return the `char` property instead of
// using `which`.
if(nativeEvent["char"]&&nativeEvent["char"].length>1){return nativeEvent["char"];}else if(nativeEvent.which){return String.fromCharCode(nativeEvent.which);}}return null;case'compositionend':return useFallbackCompositionData&&!isUsingKoreanIME(nativeEvent)?null:nativeEvent.data;default:return null;}}/**
 * Extract a SyntheticInputEvent for `beforeInput`, based on either native
 * `textInput` or fallback behavior.
 *
 * @return {?object} A SyntheticInputEvent.
 */function extractBeforeInputEvent(dispatchQueue,domEventName,targetInst,nativeEvent,nativeEventTarget){var chars;if(canUseTextInputEvent){chars=getNativeBeforeInputChars(domEventName,nativeEvent);}else {chars=getFallbackBeforeInputChars(domEventName,nativeEvent);}// If no characters are being inserted, no BeforeInput event should
// be fired.
if(!chars){return null;}var listeners=accumulateTwoPhaseListeners(targetInst,'onBeforeInput');if(listeners.length>0){var event=new SyntheticInputEvent('onBeforeInput','beforeinput',null,nativeEvent,nativeEventTarget);dispatchQueue.push({event:event,listeners:listeners});event.data=chars;}}/**
 * Create an `onBeforeInput` event to match
 * http://www.w3.org/TR/2013/WD-DOM-Level-3-Events-20131105/#events-inputevents.
 *
 * This event plugin is based on the native `textInput` event
 * available in Chrome, Safari, Opera, and IE. This event fires after
 * `onKeyPress` and `onCompositionEnd`, but before `onInput`.
 *
 * `beforeInput` is spec'd but not implemented in any browsers, and
 * the `input` event does not provide any useful information about what has
 * actually been added, contrary to the spec. Thus, `textInput` is the best
 * available event to identify the characters that have actually been inserted
 * into the target node.
 *
 * This plugin is also responsible for emitting `composition` events, thus
 * allowing us to share composition fallback code for both `beforeInput` and
 * `composition` event types.
 */function extractEvents(dispatchQueue,domEventName,targetInst,nativeEvent,nativeEventTarget,eventSystemFlags,targetContainer){extractCompositionEvent(dispatchQueue,domEventName,targetInst,nativeEvent,nativeEventTarget);extractBeforeInputEvent(dispatchQueue,domEventName,targetInst,nativeEvent,nativeEventTarget);}/**
 * @see http://www.whatwg.org/specs/web-apps/current-work/multipage/the-input-element.html#input-type-attr-summary
 */var supportedInputTypes={color:true,date:true,datetime:true,'datetime-local':true,email:true,month:true,number:true,password:true,range:true,search:true,tel:true,text:true,time:true,url:true,week:true};function isTextInputElement(elem){var nodeName=elem&&elem.nodeName&&elem.nodeName.toLowerCase();if(nodeName==='input'){return !!supportedInputTypes[elem.type];}if(nodeName==='textarea'){return true;}return false;}/**
 * Checks if an event is supported in the current execution environment.
 *
 * NOTE: This will not work correctly for non-generic events such as `change`,
 * `reset`, `load`, `error`, and `select`.
 *
 * Borrows from Modernizr.
 *
 * @param {string} eventNameSuffix Event name, e.g. "click".
 * @return {boolean} True if the event is supported.
 * @internal
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */function isEventSupported(eventNameSuffix){if(!canUseDOM){return false;}var eventName='on'+eventNameSuffix;var isSupported=(eventName in document);if(!isSupported){var element=document.createElement('div');element.setAttribute(eventName,'return;');isSupported=typeof element[eventName]==='function';}return isSupported;}function registerEvents$1(){registerTwoPhaseEvent('onChange',['change','click','focusin','focusout','input','keydown','keyup','selectionchange']);}function createAndAccumulateChangeEvent(dispatchQueue,inst,nativeEvent,target){// Flag this event loop as needing state restore.
enqueueStateRestore(target);var listeners=accumulateTwoPhaseListeners(inst,'onChange');if(listeners.length>0){var event=new SyntheticEvent('onChange','change',null,nativeEvent,target);dispatchQueue.push({event:event,listeners:listeners});}}/**
 * For IE shims
 */var activeElement=null;var activeElementInst=null;/**
 * SECTION: handle `change` event
 */function shouldUseChangeEvent(elem){var nodeName=elem.nodeName&&elem.nodeName.toLowerCase();return nodeName==='select'||nodeName==='input'&&elem.type==='file';}function manualDispatchChangeEvent(nativeEvent){var dispatchQueue=[];createAndAccumulateChangeEvent(dispatchQueue,activeElementInst,nativeEvent,getEventTarget(nativeEvent));// If change and propertychange bubbled, we'd just bind to it like all the
// other events and have it go through ReactBrowserEventEmitter. Since it
// doesn't, we manually listen for the events and so we have to enqueue and
// process the abstract event manually.
//
// Batching is necessary here in order to ensure that all event handlers run
// before the next rerender (including event handlers attached to ancestor
// elements instead of directly on the input). Without this, controlled
// components don't work properly in conjunction with event bubbling because
// the component is rerendered and the value reverted before all the event
// handlers can run. See https://github.com/facebook/react/issues/708.
batchedUpdates(runEventInBatch,dispatchQueue);}function runEventInBatch(dispatchQueue){processDispatchQueue(dispatchQueue,0);}function getInstIfValueChanged(targetInst){var targetNode=getNodeFromInstance(targetInst);if(updateValueIfChanged(targetNode)){return targetInst;}}function getTargetInstForChangeEvent(domEventName,targetInst){if(domEventName==='change'){return targetInst;}}/**
 * SECTION: handle `input` event
 */var isInputEventSupported=false;if(canUseDOM){// IE9 claims to support the input event but fails to trigger it when
// deleting text, so we ignore its input events.
isInputEventSupported=isEventSupported('input')&&(!document.documentMode||document.documentMode>9);}/**
 * (For IE <=9) Starts tracking propertychange events on the passed-in element
 * and override the value property so that we can distinguish user events from
 * value changes in JS.
 */function startWatchingForValueChange(target,targetInst){activeElement=target;activeElementInst=targetInst;activeElement.attachEvent('onpropertychange',handlePropertyChange);}/**
 * (For IE <=9) Removes the event listeners from the currently-tracked element,
 * if any exists.
 */function stopWatchingForValueChange(){if(!activeElement){return;}activeElement.detachEvent('onpropertychange',handlePropertyChange);activeElement=null;activeElementInst=null;}/**
 * (For IE <=9) Handles a propertychange event, sending a `change` event if
 * the value of the active element has changed.
 */function handlePropertyChange(nativeEvent){if(nativeEvent.propertyName!=='value'){return;}if(getInstIfValueChanged(activeElementInst)){manualDispatchChangeEvent(nativeEvent);}}function handleEventsForInputEventPolyfill(domEventName,target,targetInst){if(domEventName==='focusin'){// In IE9, propertychange fires for most input events but is buggy and
// doesn't fire when text is deleted, but conveniently, selectionchange
// appears to fire in all of the remaining cases so we catch those and
// forward the event if the value has changed
// In either case, we don't want to call the event handler if the value
// is changed from JS so we redefine a setter for `.value` that updates
// our activeElementValue variable, allowing us to ignore those changes
//
// stopWatching() should be a noop here but we call it just in case we
// missed a blur event somehow.
stopWatchingForValueChange();startWatchingForValueChange(target,targetInst);}else if(domEventName==='focusout'){stopWatchingForValueChange();}}// For IE8 and IE9.
function getTargetInstForInputEventPolyfill(domEventName,targetInst){if(domEventName==='selectionchange'||domEventName==='keyup'||domEventName==='keydown'){// On the selectionchange event, the target is just document which isn't
// helpful for us so just check activeElement instead.
//
// 99% of the time, keydown and keyup aren't necessary. IE8 fails to fire
// propertychange on the first input event after setting `value` from a
// script and fires only keydown, keypress, keyup. Catching keyup usually
// gets it and catching keydown lets us fire an event for the first
// keystroke if user does a key repeat (it'll be a little delayed: right
// before the second keystroke). Other input methods (e.g., paste) seem to
// fire selectionchange normally.
return getInstIfValueChanged(activeElementInst);}}/**
 * SECTION: handle `click` event
 */function shouldUseClickEvent(elem){// Use the `click` event to detect changes to checkbox and radio inputs.
// This approach works across all browsers, whereas `change` does not fire
// until `blur` in IE8.
var nodeName=elem.nodeName;return nodeName&&nodeName.toLowerCase()==='input'&&(elem.type==='checkbox'||elem.type==='radio');}function getTargetInstForClickEvent(domEventName,targetInst){if(domEventName==='click'){return getInstIfValueChanged(targetInst);}}function getTargetInstForInputOrChangeEvent(domEventName,targetInst){if(domEventName==='input'||domEventName==='change'){return getInstIfValueChanged(targetInst);}}function handleControlledInputBlur(node){var state=node._wrapperState;if(!state||!state.controlled||node.type!=='number'){return;}{// If controlled, assign the value attribute to the current value on blur
setDefaultValue(node,'number',node.value);}}/**
 * This plugin creates an `onChange` event that normalizes change events
 * across form elements. This event fires at a time when it's possible to
 * change the element's value without seeing a flicker.
 *
 * Supported elements are:
 * - input (see `isTextInputElement`)
 * - textarea
 * - select
 */function extractEvents$1(dispatchQueue,domEventName,targetInst,nativeEvent,nativeEventTarget,eventSystemFlags,targetContainer){var targetNode=targetInst?getNodeFromInstance(targetInst):window;var getTargetInstFunc,handleEventFunc;if(shouldUseChangeEvent(targetNode)){getTargetInstFunc=getTargetInstForChangeEvent;}else if(isTextInputElement(targetNode)){if(isInputEventSupported){getTargetInstFunc=getTargetInstForInputOrChangeEvent;}else {getTargetInstFunc=getTargetInstForInputEventPolyfill;handleEventFunc=handleEventsForInputEventPolyfill;}}else if(shouldUseClickEvent(targetNode)){getTargetInstFunc=getTargetInstForClickEvent;}if(getTargetInstFunc){var inst=getTargetInstFunc(domEventName,targetInst);if(inst){createAndAccumulateChangeEvent(dispatchQueue,inst,nativeEvent,nativeEventTarget);return;}}if(handleEventFunc){handleEventFunc(domEventName,targetNode,targetInst);}// When blurring, set the value attribute for number inputs
if(domEventName==='focusout'){handleControlledInputBlur(targetNode);}}function registerEvents$2(){registerDirectEvent('onMouseEnter',['mouseout','mouseover']);registerDirectEvent('onMouseLeave',['mouseout','mouseover']);registerDirectEvent('onPointerEnter',['pointerout','pointerover']);registerDirectEvent('onPointerLeave',['pointerout','pointerover']);}/**
 * For almost every interaction we care about, there will be both a top-level
 * `mouseover` and `mouseout` event that occurs. Only use `mouseout` so that
 * we do not extract duplicate events. However, moving the mouse into the
 * browser from outside will not fire a `mouseout` event. In this case, we use
 * the `mouseover` top-level event.
 */function extractEvents$2(dispatchQueue,domEventName,targetInst,nativeEvent,nativeEventTarget,eventSystemFlags,targetContainer){var isOverEvent=domEventName==='mouseover'||domEventName==='pointerover';var isOutEvent=domEventName==='mouseout'||domEventName==='pointerout';if(isOverEvent&&(eventSystemFlags&IS_REPLAYED)===0){// If this is an over event with a target, we might have already dispatched
// the event in the out event of the other target. If this is replayed,
// then it's because we couldn't dispatch against this target previously
// so we have to do it now instead.
var related=nativeEvent.relatedTarget||nativeEvent.fromElement;if(related){// If the related node is managed by React, we can assume that we have
// already dispatched the corresponding events during its mouseout.
if(getClosestInstanceFromNode(related)||isContainerMarkedAsRoot(related)){return;}}}if(!isOutEvent&&!isOverEvent){// Must not be a mouse or pointer in or out - ignoring.
return;}var win;// TODO: why is this nullable in the types but we read from it?
if(nativeEventTarget.window===nativeEventTarget){// `nativeEventTarget` is probably a window object.
win=nativeEventTarget;}else {// TODO: Figure out why `ownerDocument` is sometimes undefined in IE8.
var doc=nativeEventTarget.ownerDocument;if(doc){win=doc.defaultView||doc.parentWindow;}else {win=window;}}var from;var to;if(isOutEvent){var _related=nativeEvent.relatedTarget||nativeEvent.toElement;from=targetInst;to=_related?getClosestInstanceFromNode(_related):null;if(to!==null){var nearestMounted=getNearestMountedFiber(to);if(to!==nearestMounted||to.tag!==HostComponent&&to.tag!==HostText){to=null;}}}else {// Moving to a node from outside the window.
from=null;to=targetInst;}if(from===to){// Nothing pertains to our managed components.
return;}var SyntheticEventCtor=SyntheticMouseEvent;var leaveEventType='onMouseLeave';var enterEventType='onMouseEnter';var eventTypePrefix='mouse';if(domEventName==='pointerout'||domEventName==='pointerover'){SyntheticEventCtor=SyntheticPointerEvent;leaveEventType='onPointerLeave';enterEventType='onPointerEnter';eventTypePrefix='pointer';}var fromNode=from==null?win:getNodeFromInstance(from);var toNode=to==null?win:getNodeFromInstance(to);var leave=new SyntheticEventCtor(leaveEventType,eventTypePrefix+'leave',from,nativeEvent,nativeEventTarget);leave.target=fromNode;leave.relatedTarget=toNode;var enter=null;// We should only process this nativeEvent if we are processing
// the first ancestor. Next time, we will ignore the event.
var nativeTargetInst=getClosestInstanceFromNode(nativeEventTarget);if(nativeTargetInst===targetInst){var enterEvent=new SyntheticEventCtor(enterEventType,eventTypePrefix+'enter',to,nativeEvent,nativeEventTarget);enterEvent.target=toNode;enterEvent.relatedTarget=fromNode;enter=enterEvent;}accumulateEnterLeaveTwoPhaseListeners(dispatchQueue,leave,enter,from,to);}/**
 * inlined Object.is polyfill to avoid requiring consumers ship their own
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */function is(x,y){return x===y&&(x!==0||1/x===1/y)||x!==x&&y!==y// eslint-disable-line no-self-compare
;}var objectIs=typeof Object.is==='function'?Object.is:is;var hasOwnProperty$2=Object.prototype.hasOwnProperty;/**
 * Performs equality by iterating through keys on an object and returning false
 * when any key has values which are not strictly equal between the arguments.
 * Returns true when the values of all keys are strictly equal.
 */function shallowEqual(objA,objB){if(objectIs(objA,objB)){return true;}if(_typeof$1(objA)!=='object'||objA===null||_typeof$1(objB)!=='object'||objB===null){return false;}var keysA=Object.keys(objA);var keysB=Object.keys(objB);if(keysA.length!==keysB.length){return false;}// Test for A's keys different from B.
for(var i=0;i<keysA.length;i++){if(!hasOwnProperty$2.call(objB,keysA[i])||!objectIs(objA[keysA[i]],objB[keysA[i]])){return false;}}return true;}/**
 * Given any node return the first leaf node without children.
 *
 * @param {DOMElement|DOMTextNode} node
 * @return {DOMElement|DOMTextNode}
 */function getLeafNode(node){while(node&&node.firstChild){node=node.firstChild;}return node;}/**
 * Get the next sibling within a container. This will walk up the
 * DOM if a node's siblings have been exhausted.
 *
 * @param {DOMElement|DOMTextNode} node
 * @return {?DOMElement|DOMTextNode}
 */function getSiblingNode(node){while(node){if(node.nextSibling){return node.nextSibling;}node=node.parentNode;}}/**
 * Get object describing the nodes which contain characters at offset.
 *
 * @param {DOMElement|DOMTextNode} root
 * @param {number} offset
 * @return {?object}
 */function getNodeForCharacterOffset(root,offset){var node=getLeafNode(root);var nodeStart=0;var nodeEnd=0;while(node){if(node.nodeType===TEXT_NODE){nodeEnd=nodeStart+node.textContent.length;if(nodeStart<=offset&&nodeEnd>=offset){return {node:node,offset:offset-nodeStart};}nodeStart=nodeEnd;}node=getLeafNode(getSiblingNode(node));}}/**
 * @param {DOMElement} outerNode
 * @return {?object}
 */function getOffsets(outerNode){var ownerDocument=outerNode.ownerDocument;var win=ownerDocument&&ownerDocument.defaultView||window;var selection=win.getSelection&&win.getSelection();if(!selection||selection.rangeCount===0){return null;}var anchorNode=selection.anchorNode,anchorOffset=selection.anchorOffset,focusNode=selection.focusNode,focusOffset=selection.focusOffset;// In Firefox, anchorNode and focusNode can be "anonymous divs", e.g. the
// up/down buttons on an <input type="number">. Anonymous divs do not seem to
// expose properties, triggering a "Permission denied error" if any of its
// properties are accessed. The only seemingly possible way to avoid erroring
// is to access a property that typically works for non-anonymous divs and
// catch any error that may otherwise arise. See
// https://bugzilla.mozilla.org/show_bug.cgi?id=208427
try{/* eslint-disable no-unused-expressions */anchorNode.nodeType;focusNode.nodeType;/* eslint-enable no-unused-expressions */}catch(e){return null;}return getModernOffsetsFromPoints(outerNode,anchorNode,anchorOffset,focusNode,focusOffset);}/**
 * Returns {start, end} where `start` is the character/codepoint index of
 * (anchorNode, anchorOffset) within the textContent of `outerNode`, and
 * `end` is the index of (focusNode, focusOffset).
 *
 * Returns null if you pass in garbage input but we should probably just crash.
 *
 * Exported only for testing.
 */function getModernOffsetsFromPoints(outerNode,anchorNode,anchorOffset,focusNode,focusOffset){var length=0;var start=-1;var end=-1;var indexWithinAnchor=0;var indexWithinFocus=0;var node=outerNode;var parentNode=null;outer:while(true){var next=null;while(true){if(node===anchorNode&&(anchorOffset===0||node.nodeType===TEXT_NODE)){start=length+anchorOffset;}if(node===focusNode&&(focusOffset===0||node.nodeType===TEXT_NODE)){end=length+focusOffset;}if(node.nodeType===TEXT_NODE){length+=node.nodeValue.length;}if((next=node.firstChild)===null){break;}// Moving from `node` to its first child `next`.
parentNode=node;node=next;}while(true){if(node===outerNode){// If `outerNode` has children, this is always the second time visiting
// it. If it has no children, this is still the first loop, and the only
// valid selection is anchorNode and focusNode both equal to this node
// and both offsets 0, in which case we will have handled above.
break outer;}if(parentNode===anchorNode&&++indexWithinAnchor===anchorOffset){start=length;}if(parentNode===focusNode&&++indexWithinFocus===focusOffset){end=length;}if((next=node.nextSibling)!==null){break;}node=parentNode;parentNode=node.parentNode;}// Moving from `node` to its next sibling `next`.
node=next;}if(start===-1||end===-1){// This should never happen. (Would happen if the anchor/focus nodes aren't
// actually inside the passed-in node.)
return null;}return {start:start,end:end};}/**
 * In modern non-IE browsers, we can support both forward and backward
 * selections.
 *
 * Note: IE10+ supports the Selection object, but it does not support
 * the `extend` method, which means that even in modern IE, it's not possible
 * to programmatically create a backward selection. Thus, for all IE
 * versions, we use the old IE API to create our selections.
 *
 * @param {DOMElement|DOMTextNode} node
 * @param {object} offsets
 */function setOffsets(node,offsets){var doc=node.ownerDocument||document;var win=doc&&doc.defaultView||window;// Edge fails with "Object expected" in some scenarios.
// (For instance: TinyMCE editor used in a list component that supports pasting to add more,
// fails when pasting 100+ items)
if(!win.getSelection){return;}var selection=win.getSelection();var length=node.textContent.length;var start=Math.min(offsets.start,length);var end=offsets.end===undefined?start:Math.min(offsets.end,length);// IE 11 uses modern selection, but doesn't support the extend method.
// Flip backward selections, so we can set with a single range.
if(!selection.extend&&start>end){var temp=end;end=start;start=temp;}var startMarker=getNodeForCharacterOffset(node,start);var endMarker=getNodeForCharacterOffset(node,end);if(startMarker&&endMarker){if(selection.rangeCount===1&&selection.anchorNode===startMarker.node&&selection.anchorOffset===startMarker.offset&&selection.focusNode===endMarker.node&&selection.focusOffset===endMarker.offset){return;}var range=doc.createRange();range.setStart(startMarker.node,startMarker.offset);selection.removeAllRanges();if(start>end){selection.addRange(range);selection.extend(endMarker.node,endMarker.offset);}else {range.setEnd(endMarker.node,endMarker.offset);selection.addRange(range);}}}function isTextNode(node){return node&&node.nodeType===TEXT_NODE;}function containsNode(outerNode,innerNode){if(!outerNode||!innerNode){return false;}else if(outerNode===innerNode){return true;}else if(isTextNode(outerNode)){return false;}else if(isTextNode(innerNode)){return containsNode(outerNode,innerNode.parentNode);}else if('contains'in outerNode){return outerNode.contains(innerNode);}else if(outerNode.compareDocumentPosition){return !!(outerNode.compareDocumentPosition(innerNode)&16);}else {return false;}}function isInDocument(node){return node&&node.ownerDocument&&containsNode(node.ownerDocument.documentElement,node);}function isSameOriginFrame(iframe){try{// Accessing the contentDocument of a HTMLIframeElement can cause the browser
// to throw, e.g. if it has a cross-origin src attribute.
// Safari will show an error in the console when the access results in "Blocked a frame with origin". e.g:
// iframe.contentDocument.defaultView;
// A safety way is to access one of the cross origin properties: Window or Location
// Which might result in "SecurityError" DOM Exception and it is compatible to Safari.
// https://html.spec.whatwg.org/multipage/browsers.html#integration-with-idl
return typeof iframe.contentWindow.location.href==='string';}catch(err){return false;}}function getActiveElementDeep(){var win=window;var element=getActiveElement();while(element instanceof win.HTMLIFrameElement){if(isSameOriginFrame(element)){win=element.contentWindow;}else {return element;}element=getActiveElement(win.document);}return element;}/**
 * @ReactInputSelection: React input selection module. Based on Selection.js,
 * but modified to be suitable for react and has a couple of bug fixes (doesn't
 * assume buttons have range selections allowed).
 * Input selection module for React.
 */ /**
 * @hasSelectionCapabilities: we get the element types that support selection
 * from https://html.spec.whatwg.org/#do-not-apply, looking at `selectionStart`
 * and `selectionEnd` rows.
 */function hasSelectionCapabilities(elem){var nodeName=elem&&elem.nodeName&&elem.nodeName.toLowerCase();return nodeName&&(nodeName==='input'&&(elem.type==='text'||elem.type==='search'||elem.type==='tel'||elem.type==='url'||elem.type==='password')||nodeName==='textarea'||elem.contentEditable==='true');}function getSelectionInformation(){var focusedElem=getActiveElementDeep();return {focusedElem:focusedElem,selectionRange:hasSelectionCapabilities(focusedElem)?getSelection(focusedElem):null};}/**
 * @restoreSelection: If any selection information was potentially lost,
 * restore it. This is useful when performing operations that could remove dom
 * nodes and place them back in, resulting in focus being lost.
 */function restoreSelection(priorSelectionInformation){var curFocusedElem=getActiveElementDeep();var priorFocusedElem=priorSelectionInformation.focusedElem;var priorSelectionRange=priorSelectionInformation.selectionRange;if(curFocusedElem!==priorFocusedElem&&isInDocument(priorFocusedElem)){if(priorSelectionRange!==null&&hasSelectionCapabilities(priorFocusedElem)){setSelection(priorFocusedElem,priorSelectionRange);}// Focusing a node can change the scroll position, which is undesirable
var ancestors=[];var ancestor=priorFocusedElem;while(ancestor=ancestor.parentNode){if(ancestor.nodeType===ELEMENT_NODE){ancestors.push({element:ancestor,left:ancestor.scrollLeft,top:ancestor.scrollTop});}}if(typeof priorFocusedElem.focus==='function'){priorFocusedElem.focus();}for(var i=0;i<ancestors.length;i++){var info=ancestors[i];info.element.scrollLeft=info.left;info.element.scrollTop=info.top;}}}/**
 * @getSelection: Gets the selection bounds of a focused textarea, input or
 * contentEditable node.
 * -@input: Look up selection bounds of this input
 * -@return {start: selectionStart, end: selectionEnd}
 */function getSelection(input){var selection;if('selectionStart'in input){// Modern browser with input or textarea.
selection={start:input.selectionStart,end:input.selectionEnd};}else {// Content editable or old IE textarea.
selection=getOffsets(input);}return selection||{start:0,end:0};}/**
 * @setSelection: Sets the selection bounds of a textarea or input and focuses
 * the input.
 * -@input     Set selection bounds of this input or textarea
 * -@offsets   Object of same form that is returned from get*
 */function setSelection(input,offsets){var start=offsets.start;var end=offsets.end;if(end===undefined){end=start;}if('selectionStart'in input){input.selectionStart=start;input.selectionEnd=Math.min(end,input.value.length);}else {setOffsets(input,offsets);}}var skipSelectionChangeEvent=canUseDOM&&'documentMode'in document&&document.documentMode<=11;function registerEvents$3(){registerTwoPhaseEvent('onSelect',['focusout','contextmenu','dragend','focusin','keydown','keyup','mousedown','mouseup','selectionchange']);}var activeElement$1=null;var activeElementInst$1=null;var lastSelection=null;var mouseDown=false;/**
 * Get an object which is a unique representation of the current selection.
 *
 * The return value will not be consistent across nodes or browsers, but
 * two identical selections on the same node will return identical objects.
 */function getSelection$1(node){if('selectionStart'in node&&hasSelectionCapabilities(node)){return {start:node.selectionStart,end:node.selectionEnd};}else {var win=node.ownerDocument&&node.ownerDocument.defaultView||window;var selection=win.getSelection();return {anchorNode:selection.anchorNode,anchorOffset:selection.anchorOffset,focusNode:selection.focusNode,focusOffset:selection.focusOffset};}}/**
 * Get document associated with the event target.
 */function getEventTargetDocument(eventTarget){return eventTarget.window===eventTarget?eventTarget.document:eventTarget.nodeType===DOCUMENT_NODE?eventTarget:eventTarget.ownerDocument;}/**
 * Poll selection to see whether it's changed.
 *
 * @param {object} nativeEvent
 * @param {object} nativeEventTarget
 * @return {?SyntheticEvent}
 */function constructSelectEvent(dispatchQueue,nativeEvent,nativeEventTarget){// Ensure we have the right element, and that the user is not dragging a
// selection (this matches native `select` event behavior). In HTML5, select
// fires only on input and textarea thus if there's no focused element we
// won't dispatch.
var doc=getEventTargetDocument(nativeEventTarget);if(mouseDown||activeElement$1==null||activeElement$1!==getActiveElement(doc)){return;}// Only fire when selection has actually changed.
var currentSelection=getSelection$1(activeElement$1);if(!lastSelection||!shallowEqual(lastSelection,currentSelection)){lastSelection=currentSelection;var listeners=accumulateTwoPhaseListeners(activeElementInst$1,'onSelect');if(listeners.length>0){var event=new SyntheticEvent('onSelect','select',null,nativeEvent,nativeEventTarget);dispatchQueue.push({event:event,listeners:listeners});event.target=activeElement$1;}}}/**
 * This plugin creates an `onSelect` event that normalizes select events
 * across form elements.
 *
 * Supported elements are:
 * - input (see `isTextInputElement`)
 * - textarea
 * - contentEditable
 *
 * This differs from native browser implementations in the following ways:
 * - Fires on contentEditable fields as well as inputs.
 * - Fires for collapsed selection.
 * - Fires after user input.
 */function extractEvents$3(dispatchQueue,domEventName,targetInst,nativeEvent,nativeEventTarget,eventSystemFlags,targetContainer){var targetNode=targetInst?getNodeFromInstance(targetInst):window;switch(domEventName){// Track the input node that has focus.
case'focusin':if(isTextInputElement(targetNode)||targetNode.contentEditable==='true'){activeElement$1=targetNode;activeElementInst$1=targetInst;lastSelection=null;}break;case'focusout':activeElement$1=null;activeElementInst$1=null;lastSelection=null;break;// Don't fire the event while the user is dragging. This matches the
// semantics of the native select event.
case'mousedown':mouseDown=true;break;case'contextmenu':case'mouseup':case'dragend':mouseDown=false;constructSelectEvent(dispatchQueue,nativeEvent,nativeEventTarget);break;// Chrome and IE fire non-standard event when selection is changed (and
// sometimes when it hasn't). IE's event fires out of order with respect
// to key and input events on deletion, so we discard it.
//
// Firefox doesn't support selectionchange, so check selection status
// after each key entry. The selection changes after keydown and before
// keyup, but we check on keydown as well in the case of holding down a
// key, when multiple keydown events are fired but only one keyup is.
// This is also our approach for IE handling, for the reason above.
case'selectionchange':if(skipSelectionChangeEvent){break;}// falls through
case'keydown':case'keyup':constructSelectEvent(dispatchQueue,nativeEvent,nativeEventTarget);}}function extractEvents$4(dispatchQueue,domEventName,targetInst,nativeEvent,nativeEventTarget,eventSystemFlags,targetContainer){var reactName=topLevelEventsToReactNames.get(domEventName);if(reactName===undefined){return;}var SyntheticEventCtor=SyntheticEvent;var reactEventType=domEventName;switch(domEventName){case'keypress':// Firefox creates a keypress event for function keys too. This removes
// the unwanted keypress events. Enter is however both printable and
// non-printable. One would expect Tab to be as well (but it isn't).
if(getEventCharCode(nativeEvent)===0){return;}/* falls through */case'keydown':case'keyup':SyntheticEventCtor=SyntheticKeyboardEvent;break;case'focusin':reactEventType='focus';SyntheticEventCtor=SyntheticFocusEvent;break;case'focusout':reactEventType='blur';SyntheticEventCtor=SyntheticFocusEvent;break;case'beforeblur':case'afterblur':SyntheticEventCtor=SyntheticFocusEvent;break;case'click':// Firefox creates a click event on right mouse clicks. This removes the
// unwanted click events.
if(nativeEvent.button===2){return;}/* falls through */case'auxclick':case'dblclick':case'mousedown':case'mousemove':case'mouseup':// TODO: Disabled elements should not respond to mouse events
/* falls through */case'mouseout':case'mouseover':case'contextmenu':SyntheticEventCtor=SyntheticMouseEvent;break;case'drag':case'dragend':case'dragenter':case'dragexit':case'dragleave':case'dragover':case'dragstart':case'drop':SyntheticEventCtor=SyntheticDragEvent;break;case'touchcancel':case'touchend':case'touchmove':case'touchstart':SyntheticEventCtor=SyntheticTouchEvent;break;case ANIMATION_END:case ANIMATION_ITERATION:case ANIMATION_START:SyntheticEventCtor=SyntheticAnimationEvent;break;case TRANSITION_END:SyntheticEventCtor=SyntheticTransitionEvent;break;case'scroll':SyntheticEventCtor=SyntheticUIEvent;break;case'wheel':SyntheticEventCtor=SyntheticWheelEvent;break;case'copy':case'cut':case'paste':SyntheticEventCtor=SyntheticClipboardEvent;break;case'gotpointercapture':case'lostpointercapture':case'pointercancel':case'pointerdown':case'pointermove':case'pointerout':case'pointerover':case'pointerup':SyntheticEventCtor=SyntheticPointerEvent;break;}var inCapturePhase=(eventSystemFlags&IS_CAPTURE_PHASE)!==0;{// Some events don't bubble in the browser.
// In the past, React has always bubbled them, but this can be surprising.
// We're going to try aligning closer to the browser behavior by not bubbling
// them in React either. We'll start by not bubbling onScroll, and then expand.
var accumulateTargetOnly=!inCapturePhase&&// TODO: ideally, we'd eventually add all events from
// nonDelegatedEvents list in DOMPluginEventSystem.
// Then we can remove this special list.
// This is a breaking change that can wait until React 18.
domEventName==='scroll';var _listeners=accumulateSinglePhaseListeners(targetInst,reactName,nativeEvent.type,inCapturePhase,accumulateTargetOnly);if(_listeners.length>0){// Intentionally create event lazily.
var _event=new SyntheticEventCtor(reactName,reactEventType,null,nativeEvent,nativeEventTarget);dispatchQueue.push({event:_event,listeners:_listeners});}}}// TODO: remove top-level side effect.
registerSimpleEvents();registerEvents$2();registerEvents$1();registerEvents$3();registerEvents();function extractEvents$5(dispatchQueue,domEventName,targetInst,nativeEvent,nativeEventTarget,eventSystemFlags,targetContainer){// TODO: we should remove the concept of a "SimpleEventPlugin".
// This is the basic functionality of the event system. All
// the other plugins are essentially polyfills. So the plugin
// should probably be inlined somewhere and have its logic
// be core the to event system. This would potentially allow
// us to ship builds of React without the polyfilled plugins below.
extractEvents$4(dispatchQueue,domEventName,targetInst,nativeEvent,nativeEventTarget,eventSystemFlags);var shouldProcessPolyfillPlugins=(eventSystemFlags&SHOULD_NOT_PROCESS_POLYFILL_EVENT_PLUGINS)===0;// We don't process these events unless we are in the
// event's native "bubble" phase, which means that we're
// not in the capture phase. That's because we emulate
// the capture phase here still. This is a trade-off,
// because in an ideal world we would not emulate and use
// the phases properly, like we do with the SimpleEvent
// plugin. However, the plugins below either expect
// emulation (EnterLeave) or use state localized to that
// plugin (BeforeInput, Change, Select). The state in
// these modules complicates things, as you'll essentially
// get the case where the capture phase event might change
// state, only for the following bubble event to come in
// later and not trigger anything as the state now
// invalidates the heuristics of the event plugin. We
// could alter all these plugins to work in such ways, but
// that might cause other unknown side-effects that we
// can't forsee right now.
if(shouldProcessPolyfillPlugins){extractEvents$2(dispatchQueue,domEventName,targetInst,nativeEvent,nativeEventTarget,eventSystemFlags);extractEvents$1(dispatchQueue,domEventName,targetInst,nativeEvent,nativeEventTarget);extractEvents$3(dispatchQueue,domEventName,targetInst,nativeEvent,nativeEventTarget);extractEvents(dispatchQueue,domEventName,targetInst,nativeEvent,nativeEventTarget);}}// List of events that need to be individually attached to media elements.
var mediaEventTypes=['abort','canplay','canplaythrough','durationchange','emptied','encrypted','ended','error','loadeddata','loadedmetadata','loadstart','pause','play','playing','progress','ratechange','seeked','seeking','stalled','suspend','timeupdate','volumechange','waiting'];// We should not delegate these events to the container, but rather
// set them on the actual target element itself. This is primarily
// because these events do not consistently bubble in the DOM.
var nonDelegatedEvents=new Set(['cancel','close','invalid','load','scroll','toggle'].concat(mediaEventTypes));function executeDispatch(event,listener,currentTarget){var type=event.type||'unknown-event';event.currentTarget=currentTarget;invokeGuardedCallbackAndCatchFirstError(type,listener,undefined,event);event.currentTarget=null;}function processDispatchQueueItemsInOrder(event,dispatchListeners,inCapturePhase){var previousInstance;if(inCapturePhase){for(var i=dispatchListeners.length-1;i>=0;i--){var _dispatchListeners$i=dispatchListeners[i],instance=_dispatchListeners$i.instance,currentTarget=_dispatchListeners$i.currentTarget,listener=_dispatchListeners$i.listener;if(instance!==previousInstance&&event.isPropagationStopped()){return;}executeDispatch(event,listener,currentTarget);previousInstance=instance;}}else {for(var _i=0;_i<dispatchListeners.length;_i++){var _dispatchListeners$_i=dispatchListeners[_i],_instance=_dispatchListeners$_i.instance,_currentTarget=_dispatchListeners$_i.currentTarget,_listener=_dispatchListeners$_i.listener;if(_instance!==previousInstance&&event.isPropagationStopped()){return;}executeDispatch(event,_listener,_currentTarget);previousInstance=_instance;}}}function processDispatchQueue(dispatchQueue,eventSystemFlags){var inCapturePhase=(eventSystemFlags&IS_CAPTURE_PHASE)!==0;for(var i=0;i<dispatchQueue.length;i++){var _dispatchQueue$i=dispatchQueue[i],event=_dispatchQueue$i.event,listeners=_dispatchQueue$i.listeners;processDispatchQueueItemsInOrder(event,listeners,inCapturePhase);//  event system doesn't use pooling.
}// This would be a good time to rethrow if any of the event handlers threw.
rethrowCaughtError();}function dispatchEventsForPlugins(domEventName,eventSystemFlags,nativeEvent,targetInst,targetContainer){var nativeEventTarget=getEventTarget(nativeEvent);var dispatchQueue=[];extractEvents$5(dispatchQueue,domEventName,targetInst,nativeEvent,nativeEventTarget,eventSystemFlags);processDispatchQueue(dispatchQueue,eventSystemFlags);}function listenToNonDelegatedEvent(domEventName,targetElement){var isCapturePhaseListener=false;var listenerSet=getEventListenerSet(targetElement);var listenerSetKey=getListenerSetKey(domEventName,isCapturePhaseListener);if(!listenerSet.has(listenerSetKey)){addTrappedEventListener(targetElement,domEventName,IS_NON_DELEGATED,isCapturePhaseListener);listenerSet.add(listenerSetKey);}}var listeningMarker='_reactListening'+Math.random().toString(36).slice(2);function listenToAllSupportedEvents(rootContainerElement){{if(rootContainerElement[listeningMarker]){// Performance optimization: don't iterate through events
// for the same portal container or root node more than once.
// TODO: once we remove the flag, we may be able to also
// remove some of the bookkeeping maps used for laziness.
return;}rootContainerElement[listeningMarker]=true;allNativeEvents.forEach(function(domEventName){if(!nonDelegatedEvents.has(domEventName)){listenToNativeEvent(domEventName,false,rootContainerElement,null);}listenToNativeEvent(domEventName,true,rootContainerElement,null);});}}function listenToNativeEvent(domEventName,isCapturePhaseListener,rootContainerElement,targetElement){var eventSystemFlags=arguments.length>4&&arguments[4]!==undefined?arguments[4]:0;var target=rootContainerElement;// selectionchange needs to be attached to the document
// otherwise it won't capture incoming events that are only
// triggered on the document directly.
if(domEventName==='selectionchange'&&rootContainerElement.nodeType!==DOCUMENT_NODE){target=rootContainerElement.ownerDocument;}// If the event can be delegated (or is capture phase), we can
// register it to the root container. Otherwise, we should
// register the event to the target element and mark it as
// a non-delegated event.
if(targetElement!==null&&!isCapturePhaseListener&&nonDelegatedEvents.has(domEventName)){// For all non-delegated events, apart from scroll, we attach
// their event listeners to the respective elements that their
// events fire on. That means we can skip this step, as event
// listener has already been added previously. However, we
// special case the scroll event because the reality is that any
// element can scroll.
// TODO: ideally, we'd eventually apply the same logic to all
// events from the nonDelegatedEvents list. Then we can remove
// this special case and use the same logic for all events.
if(domEventName!=='scroll'){return;}eventSystemFlags|=IS_NON_DELEGATED;target=targetElement;}var listenerSet=getEventListenerSet(target);var listenerSetKey=getListenerSetKey(domEventName,isCapturePhaseListener);// If the listener entry is empty or we should upgrade, then
// we need to trap an event listener onto the target.
if(!listenerSet.has(listenerSetKey)){if(isCapturePhaseListener){eventSystemFlags|=IS_CAPTURE_PHASE;}addTrappedEventListener(target,domEventName,eventSystemFlags,isCapturePhaseListener);listenerSet.add(listenerSetKey);}}function addTrappedEventListener(targetContainer,domEventName,eventSystemFlags,isCapturePhaseListener,isDeferredListenerForLegacyFBSupport){var listener=createEventListenerWrapperWithPriority(targetContainer,domEventName,eventSystemFlags);// If passive option is not supported, then the event will be
// active and not passive.
var isPassiveListener=undefined;if(passiveBrowserEventsSupported){// Browsers introduced an intervention, making these events
// passive by default on document. React doesn't bind them
// to document anymore, but changing this now would undo
// the performance wins from the change. So we emulate
// the existing behavior manually on the roots now.
// https://github.com/facebook/react/issues/19651
if(domEventName==='touchstart'||domEventName==='touchmove'||domEventName==='wheel'){isPassiveListener=true;}}targetContainer=targetContainer;var unsubscribeListener;// When legacyFBSupport is enabled, it's for when we
if(isCapturePhaseListener){if(isPassiveListener!==undefined){unsubscribeListener=addEventCaptureListenerWithPassiveFlag(targetContainer,domEventName,listener,isPassiveListener);}else {unsubscribeListener=addEventCaptureListener(targetContainer,domEventName,listener);}}else {if(isPassiveListener!==undefined){unsubscribeListener=addEventBubbleListenerWithPassiveFlag(targetContainer,domEventName,listener,isPassiveListener);}else {unsubscribeListener=addEventBubbleListener(targetContainer,domEventName,listener);}}}function isMatchingRootContainer(grandContainer,targetContainer){return grandContainer===targetContainer||grandContainer.nodeType===COMMENT_NODE&&grandContainer.parentNode===targetContainer;}function dispatchEventForPluginEventSystem(domEventName,eventSystemFlags,nativeEvent,targetInst,targetContainer){var ancestorInst=targetInst;if((eventSystemFlags&IS_EVENT_HANDLE_NON_MANAGED_NODE)===0&&(eventSystemFlags&IS_NON_DELEGATED)===0){var targetContainerNode=targetContainer;// If we are using the legacy FB support flag, we
if(targetInst!==null){// The below logic attempts to work out if we need to change
// the target fiber to a different ancestor. We had similar logic
// in the legacy event system, except the big difference between
// systems is that the modern event system now has an event listener
// attached to each React Root and React Portal Root. Together,
// the DOM nodes representing these roots are the "rootContainer".
// To figure out which ancestor instance we should use, we traverse
// up the fiber tree from the target instance and attempt to find
// root boundaries that match that of our current "rootContainer".
// If we find that "rootContainer", we find the parent fiber
// sub-tree for that root and make that our ancestor instance.
var node=targetInst;mainLoop:while(true){if(node===null){return;}var nodeTag=node.tag;if(nodeTag===HostRoot||nodeTag===HostPortal){var container=node.stateNode.containerInfo;if(isMatchingRootContainer(container,targetContainerNode)){break;}if(nodeTag===HostPortal){// The target is a portal, but it's not the rootContainer we're looking for.
// Normally portals handle their own events all the way down to the root.
// So we should be able to stop now. However, we don't know if this portal
// was part of *our* root.
var grandNode=node["return"];while(grandNode!==null){var grandTag=grandNode.tag;if(grandTag===HostRoot||grandTag===HostPortal){var grandContainer=grandNode.stateNode.containerInfo;if(isMatchingRootContainer(grandContainer,targetContainerNode)){// This is the rootContainer we're looking for and we found it as
// a parent of the Portal. That means we can ignore it because the
// Portal will bubble through to us.
return;}}grandNode=grandNode["return"];}}// Now we need to find it's corresponding host fiber in the other
// tree. To do this we can use getClosestInstanceFromNode, but we
// need to validate that the fiber is a host instance, otherwise
// we need to traverse up through the DOM till we find the correct
// node that is from the other tree.
while(container!==null){var parentNode=getClosestInstanceFromNode(container);if(parentNode===null){return;}var parentTag=parentNode.tag;if(parentTag===HostComponent||parentTag===HostText){node=ancestorInst=parentNode;continue mainLoop;}container=container.parentNode;}}node=node["return"];}}}batchedEventUpdates(function(){return dispatchEventsForPlugins(domEventName,eventSystemFlags,nativeEvent,ancestorInst);});}function createDispatchListener(instance,listener,currentTarget){return {instance:instance,listener:listener,currentTarget:currentTarget};}function accumulateSinglePhaseListeners(targetFiber,reactName,nativeEventType,inCapturePhase,accumulateTargetOnly){var captureName=reactName!==null?reactName+'Capture':null;var reactEventName=inCapturePhase?captureName:reactName;var listeners=[];var instance=targetFiber;var lastHostComponent=null;// Accumulate all instances and listeners via the target -> root path.
while(instance!==null){var _instance2=instance,stateNode=_instance2.stateNode,tag=_instance2.tag;// Handle listeners that are on HostComponents (i.e. <div>)
if(tag===HostComponent&&stateNode!==null){lastHostComponent=stateNode;// createEventHandle listeners
if(reactEventName!==null){var listener=getListener(instance,reactEventName);if(listener!=null){listeners.push(createDispatchListener(instance,listener,lastHostComponent));}}}// If we are only accumulating events for the target, then we don't
// continue to propagate through the React fiber tree to find other
// listeners.
if(accumulateTargetOnly){break;}instance=instance["return"];}return listeners;}// We should only use this function for:
// - BeforeInputEventPlugin
// - ChangeEventPlugin
// - SelectEventPlugin
// This is because we only process these plugins
// in the bubble phase, so we need to accumulate two
// phase event listeners (via emulation).
function accumulateTwoPhaseListeners(targetFiber,reactName){var captureName=reactName+'Capture';var listeners=[];var instance=targetFiber;// Accumulate all instances and listeners via the target -> root path.
while(instance!==null){var _instance3=instance,stateNode=_instance3.stateNode,tag=_instance3.tag;// Handle listeners that are on HostComponents (i.e. <div>)
if(tag===HostComponent&&stateNode!==null){var currentTarget=stateNode;var captureListener=getListener(instance,captureName);if(captureListener!=null){listeners.unshift(createDispatchListener(instance,captureListener,currentTarget));}var bubbleListener=getListener(instance,reactName);if(bubbleListener!=null){listeners.push(createDispatchListener(instance,bubbleListener,currentTarget));}}instance=instance["return"];}return listeners;}function getParent(inst){if(inst===null){return null;}do{inst=inst["return"];// TODO: If this is a HostRoot we might want to bail out.
// That is depending on if we want nested subtrees (layers) to bubble
// events to their parent. We could also go through parentNode on the
// host node but that wouldn't work for React Native and doesn't let us
// do the portal feature.
}while(inst&&inst.tag!==HostComponent);if(inst){return inst;}return null;}/**
 * Return the lowest common ancestor of A and B, or null if they are in
 * different trees.
 */function getLowestCommonAncestor(instA,instB){var nodeA=instA;var nodeB=instB;var depthA=0;for(var tempA=nodeA;tempA;tempA=getParent(tempA)){depthA++;}var depthB=0;for(var tempB=nodeB;tempB;tempB=getParent(tempB)){depthB++;}// If A is deeper, crawl up.
while(depthA-depthB>0){nodeA=getParent(nodeA);depthA--;}// If B is deeper, crawl up.
while(depthB-depthA>0){nodeB=getParent(nodeB);depthB--;}// Walk in lockstep until we find a match.
var depth=depthA;while(depth--){if(nodeA===nodeB||nodeB!==null&&nodeA===nodeB.alternate){return nodeA;}nodeA=getParent(nodeA);nodeB=getParent(nodeB);}return null;}function accumulateEnterLeaveListenersForEvent(dispatchQueue,event,target,common,inCapturePhase){var registrationName=event._reactName;var listeners=[];var instance=target;while(instance!==null){if(instance===common){break;}var _instance4=instance,alternate=_instance4.alternate,stateNode=_instance4.stateNode,tag=_instance4.tag;if(alternate!==null&&alternate===common){break;}if(tag===HostComponent&&stateNode!==null){var currentTarget=stateNode;if(inCapturePhase){var captureListener=getListener(instance,registrationName);if(captureListener!=null){listeners.unshift(createDispatchListener(instance,captureListener,currentTarget));}}else if(!inCapturePhase){var bubbleListener=getListener(instance,registrationName);if(bubbleListener!=null){listeners.push(createDispatchListener(instance,bubbleListener,currentTarget));}}}instance=instance["return"];}if(listeners.length!==0){dispatchQueue.push({event:event,listeners:listeners});}}// We should only use this function for:
// - EnterLeaveEventPlugin
// This is because we only process this plugin
// in the bubble phase, so we need to accumulate two
// phase event listeners.
function accumulateEnterLeaveTwoPhaseListeners(dispatchQueue,leaveEvent,enterEvent,from,to){var common=from&&to?getLowestCommonAncestor(from,to):null;if(from!==null){accumulateEnterLeaveListenersForEvent(dispatchQueue,leaveEvent,from,common,false);}if(to!==null&&enterEvent!==null){accumulateEnterLeaveListenersForEvent(dispatchQueue,enterEvent,to,common,true);}}function getListenerSetKey(domEventName,capture){return domEventName+"__"+(capture?'capture':'bubble');}var didWarnInvalidHydration=false;var DANGEROUSLY_SET_INNER_HTML='dangerouslySetInnerHTML';var SUPPRESS_CONTENT_EDITABLE_WARNING='suppressContentEditableWarning';var SUPPRESS_HYDRATION_WARNING='suppressHydrationWarning';var AUTOFOCUS='autoFocus';var CHILDREN='children';var STYLE='style';var HTML$1='__html';var HTML_NAMESPACE$1=Namespaces.html;var warnedUnknownTags;var suppressHydrationWarning;var validatePropertiesInDevelopment;var warnForTextDifference;var warnForPropDifference;var warnForExtraAttributes;var warnForInvalidEventListener;var canDiffStyleForHydrationWarning;var normalizeMarkupForTextOrAttribute;var normalizeHTML;{warnedUnknownTags={// There are working polyfills for <dialog>. Let people use it.
dialog:true,// Electron ships a custom <webview> tag to display external web content in
// an isolated frame and process.
// This tag is not present in non Electron environments such as JSDom which
// is often used for testing purposes.
// @see https://electronjs.org/docs/api/webview-tag
webview:true};validatePropertiesInDevelopment=function validatePropertiesInDevelopment(type,props){validateProperties(type,props);validateProperties$1(type,props);validateProperties$2(type,props,{registrationNameDependencies:registrationNameDependencies,possibleRegistrationNames:possibleRegistrationNames});};// IE 11 parses & normalizes the style attribute as opposed to other
// browsers. It adds spaces and sorts the properties in some
// non-alphabetical order. Handling that would require sorting CSS
// properties in the client & server versions or applying
// `expectedStyle` to a temporary DOM node to read its `style` attribute
// normalized. Since it only affects IE, we're skipping style warnings
// in that browser completely in favor of doing all that work.
// See https://github.com/facebook/react/issues/11807
canDiffStyleForHydrationWarning=canUseDOM&&!document.documentMode;// HTML parsing normalizes CR and CRLF to LF.
// It also can turn \u0000 into \uFFFD inside attributes.
// https://www.w3.org/TR/html5/single-page.html#preprocessing-the-input-stream
// If we have a mismatch, it might be caused by that.
// We will still patch up in this case but not fire the warning.
var NORMALIZE_NEWLINES_REGEX=/\r\n?/g;var NORMALIZE_NULL_AND_REPLACEMENT_REGEX=/\u0000|\uFFFD/g;normalizeMarkupForTextOrAttribute=function normalizeMarkupForTextOrAttribute(markup){var markupString=typeof markup==='string'?markup:''+markup;return markupString.replace(NORMALIZE_NEWLINES_REGEX,'\n').replace(NORMALIZE_NULL_AND_REPLACEMENT_REGEX,'');};warnForTextDifference=function warnForTextDifference(serverText,clientText){if(didWarnInvalidHydration){return;}var normalizedClientText=normalizeMarkupForTextOrAttribute(clientText);var normalizedServerText=normalizeMarkupForTextOrAttribute(serverText);if(normalizedServerText===normalizedClientText){return;}didWarnInvalidHydration=true;error('Text content did not match. Server: "%s" Client: "%s"',normalizedServerText,normalizedClientText);};warnForPropDifference=function warnForPropDifference(propName,serverValue,clientValue){if(didWarnInvalidHydration){return;}var normalizedClientValue=normalizeMarkupForTextOrAttribute(clientValue);var normalizedServerValue=normalizeMarkupForTextOrAttribute(serverValue);if(normalizedServerValue===normalizedClientValue){return;}didWarnInvalidHydration=true;error('Prop `%s` did not match. Server: %s Client: %s',propName,JSON.stringify(normalizedServerValue),JSON.stringify(normalizedClientValue));};warnForExtraAttributes=function warnForExtraAttributes(attributeNames){if(didWarnInvalidHydration){return;}didWarnInvalidHydration=true;var names=[];attributeNames.forEach(function(name){names.push(name);});error('Extra attributes from the server: %s',names);};warnForInvalidEventListener=function warnForInvalidEventListener(registrationName,listener){if(listener===false){error('Expected `%s` listener to be a function, instead got `false`.\n\n'+'If you used to conditionally omit it with %s={condition && value}, '+'pass %s={condition ? value : undefined} instead.',registrationName,registrationName,registrationName);}else {error('Expected `%s` listener to be a function, instead got a value of `%s` type.',registrationName,_typeof$1(listener));}};// Parse the HTML and read it back to normalize the HTML string so that it
// can be used for comparison.
normalizeHTML=function normalizeHTML(parent,html){// We could have created a separate document here to avoid
// re-initializing custom elements if they exist. But this breaks
// how <noscript> is being handled. So we use the same document.
// See the discussion in https://github.com/facebook/react/pull/11157.
var testElement=parent.namespaceURI===HTML_NAMESPACE$1?parent.ownerDocument.createElement(parent.tagName):parent.ownerDocument.createElementNS(parent.namespaceURI,parent.tagName);testElement.innerHTML=html;return testElement.innerHTML;};}function getOwnerDocumentFromRootContainer(rootContainerElement){return rootContainerElement.nodeType===DOCUMENT_NODE?rootContainerElement:rootContainerElement.ownerDocument;}function noop(){}function trapClickOnNonInteractiveElement(node){// Mobile Safari does not fire properly bubble click events on
// non-interactive elements, which means delegated click listeners do not
// fire. The workaround for this bug involves attaching an empty click
// listener on the target node.
// https://www.quirksmode.org/blog/archives/2010/09/click_event_del.html
// Just set it using the onclick property so that we don't have to manage any
// bookkeeping for it. Not sure if we need to clear it when the listener is
// removed.
// TODO: Only do this for the relevant Safaris maybe?
node.onclick=noop;}function setInitialDOMProperties(tag,domElement,rootContainerElement,nextProps,isCustomComponentTag){for(var propKey in nextProps){if(!nextProps.hasOwnProperty(propKey)){continue;}var nextProp=nextProps[propKey];if(propKey===STYLE){{if(nextProp){// Freeze the next style object so that we can assume it won't be
// mutated. We have already warned for this in the past.
Object.freeze(nextProp);}}// Relies on `updateStylesByID` not mutating `styleUpdates`.
setValueForStyles(domElement,nextProp);}else if(propKey===DANGEROUSLY_SET_INNER_HTML){var nextHtml=nextProp?nextProp[HTML$1]:undefined;if(nextHtml!=null){setInnerHTML(domElement,nextHtml);}}else if(propKey===CHILDREN){if(typeof nextProp==='string'){// Avoid setting initial textContent when the text is empty. In IE11 setting
// textContent on a <textarea> will cause the placeholder to not
// show within the <textarea> until it has been focused and blurred again.
// https://github.com/facebook/react/issues/6731#issuecomment-254874553
var canSetTextContent=tag!=='textarea'||nextProp!=='';if(canSetTextContent){setTextContent(domElement,nextProp);}}else if(typeof nextProp==='number'){setTextContent(domElement,''+nextProp);}}else if(propKey===SUPPRESS_CONTENT_EDITABLE_WARNING||propKey===SUPPRESS_HYDRATION_WARNING);else if(propKey===AUTOFOCUS);else if(registrationNameDependencies.hasOwnProperty(propKey)){if(nextProp!=null){if(typeof nextProp!=='function'){warnForInvalidEventListener(propKey,nextProp);}if(propKey==='onScroll'){listenToNonDelegatedEvent('scroll',domElement);}}}else if(nextProp!=null){setValueForProperty(domElement,propKey,nextProp,isCustomComponentTag);}}}function updateDOMProperties(domElement,updatePayload,wasCustomComponentTag,isCustomComponentTag){// TODO: Handle wasCustomComponentTag
for(var i=0;i<updatePayload.length;i+=2){var propKey=updatePayload[i];var propValue=updatePayload[i+1];if(propKey===STYLE){setValueForStyles(domElement,propValue);}else if(propKey===DANGEROUSLY_SET_INNER_HTML){setInnerHTML(domElement,propValue);}else if(propKey===CHILDREN){setTextContent(domElement,propValue);}else {setValueForProperty(domElement,propKey,propValue,isCustomComponentTag);}}}function createElement(type,props,rootContainerElement,parentNamespace){var isCustomComponentTag;// We create tags in the namespace of their parent container, except HTML
// tags get no namespace.
var ownerDocument=getOwnerDocumentFromRootContainer(rootContainerElement);var domElement;var namespaceURI=parentNamespace;if(namespaceURI===HTML_NAMESPACE$1){namespaceURI=getIntrinsicNamespace(type);}if(namespaceURI===HTML_NAMESPACE$1){{isCustomComponentTag=isCustomComponent(type,props);// Should this check be gated by parent namespace? Not sure we want to
// allow <SVG> or <mATH>.
if(!isCustomComponentTag&&type!==type.toLowerCase()){error('<%s /> is using incorrect casing. '+'Use PascalCase for React components, '+'or lowercase for HTML elements.',type);}}if(type==='script'){// Create the script via .innerHTML so its "parser-inserted" flag is
// set to true and it does not execute
var div=ownerDocument.createElement('div');div.innerHTML='<script><'+'/script>';// eslint-disable-line
// This is guaranteed to yield a script element.
var firstChild=div.firstChild;domElement=div.removeChild(firstChild);}else if(typeof props.is==='string'){// $FlowIssue `createElement` should be updated for Web Components
domElement=ownerDocument.createElement(type,{is:props.is});}else {// Separate else branch instead of using `props.is || undefined` above because of a Firefox bug.
// See discussion in https://github.com/facebook/react/pull/6896
// and discussion in https://bugzilla.mozilla.org/show_bug.cgi?id=1276240
domElement=ownerDocument.createElement(type);// Normally attributes are assigned in `setInitialDOMProperties`, however the `multiple` and `size`
// attributes on `select`s needs to be added before `option`s are inserted.
// This prevents:
// - a bug where the `select` does not scroll to the correct option because singular
//  `select` elements automatically pick the first item #13222
// - a bug where the `select` set the first item as selected despite the `size` attribute #14239
// See https://github.com/facebook/react/issues/13222
// and https://github.com/facebook/react/issues/14239
if(type==='select'){var node=domElement;if(props.multiple){node.multiple=true;}else if(props.size){// Setting a size greater than 1 causes a select to behave like `multiple=true`, where
// it is possible that no option is selected.
//
// This is only necessary when a select in "single selection mode".
node.size=props.size;}}}}else {domElement=ownerDocument.createElementNS(namespaceURI,type);}{if(namespaceURI===HTML_NAMESPACE$1){if(!isCustomComponentTag&&Object.prototype.toString.call(domElement)==='[object HTMLUnknownElement]'&&!Object.prototype.hasOwnProperty.call(warnedUnknownTags,type)){warnedUnknownTags[type]=true;error('The tag <%s> is unrecognized in this browser. '+'If you meant to render a React component, start its name with '+'an uppercase letter.',type);}}}return domElement;}function createTextNode(text,rootContainerElement){return getOwnerDocumentFromRootContainer(rootContainerElement).createTextNode(text);}function setInitialProperties(domElement,tag,rawProps,rootContainerElement){var isCustomComponentTag=isCustomComponent(tag,rawProps);{validatePropertiesInDevelopment(tag,rawProps);}// TODO: Make sure that we check isMounted before firing any of these events.
var props;switch(tag){case'dialog':listenToNonDelegatedEvent('cancel',domElement);listenToNonDelegatedEvent('close',domElement);props=rawProps;break;case'iframe':case'object':case'embed':// We listen to this event in case to ensure emulated bubble
// listeners still fire for the load event.
listenToNonDelegatedEvent('load',domElement);props=rawProps;break;case'video':case'audio':// We listen to these events in case to ensure emulated bubble
// listeners still fire for all the media events.
for(var i=0;i<mediaEventTypes.length;i++){listenToNonDelegatedEvent(mediaEventTypes[i],domElement);}props=rawProps;break;case'source':// We listen to this event in case to ensure emulated bubble
// listeners still fire for the error event.
listenToNonDelegatedEvent('error',domElement);props=rawProps;break;case'img':case'image':case'link':// We listen to these events in case to ensure emulated bubble
// listeners still fire for error and load events.
listenToNonDelegatedEvent('error',domElement);listenToNonDelegatedEvent('load',domElement);props=rawProps;break;case'details':// We listen to this event in case to ensure emulated bubble
// listeners still fire for the toggle event.
listenToNonDelegatedEvent('toggle',domElement);props=rawProps;break;case'input':initWrapperState(domElement,rawProps);props=getHostProps(domElement,rawProps);// We listen to this event in case to ensure emulated bubble
// listeners still fire for the invalid event.
listenToNonDelegatedEvent('invalid',domElement);break;case'option':validateProps(domElement,rawProps);props=getHostProps$1(domElement,rawProps);break;case'select':initWrapperState$1(domElement,rawProps);props=getHostProps$2(domElement,rawProps);// We listen to this event in case to ensure emulated bubble
// listeners still fire for the invalid event.
listenToNonDelegatedEvent('invalid',domElement);break;case'textarea':initWrapperState$2(domElement,rawProps);props=getHostProps$3(domElement,rawProps);// We listen to this event in case to ensure emulated bubble
// listeners still fire for the invalid event.
listenToNonDelegatedEvent('invalid',domElement);break;default:props=rawProps;}assertValidProps(tag,props);setInitialDOMProperties(tag,domElement,rootContainerElement,props,isCustomComponentTag);switch(tag){case'input':// TODO: Make sure we check if this is still unmounted or do any clean
// up necessary since we never stop tracking anymore.
track(domElement);postMountWrapper(domElement,rawProps,false);break;case'textarea':// TODO: Make sure we check if this is still unmounted or do any clean
// up necessary since we never stop tracking anymore.
track(domElement);postMountWrapper$3(domElement);break;case'option':postMountWrapper$1(domElement,rawProps);break;case'select':postMountWrapper$2(domElement,rawProps);break;default:if(typeof props.onClick==='function'){// TODO: This cast may not be sound for SVG, MathML or custom elements.
trapClickOnNonInteractiveElement(domElement);}break;}}// Calculate the diff between the two objects.
function diffProperties(domElement,tag,lastRawProps,nextRawProps,rootContainerElement){{validatePropertiesInDevelopment(tag,nextRawProps);}var updatePayload=null;var lastProps;var nextProps;switch(tag){case'input':lastProps=getHostProps(domElement,lastRawProps);nextProps=getHostProps(domElement,nextRawProps);updatePayload=[];break;case'option':lastProps=getHostProps$1(domElement,lastRawProps);nextProps=getHostProps$1(domElement,nextRawProps);updatePayload=[];break;case'select':lastProps=getHostProps$2(domElement,lastRawProps);nextProps=getHostProps$2(domElement,nextRawProps);updatePayload=[];break;case'textarea':lastProps=getHostProps$3(domElement,lastRawProps);nextProps=getHostProps$3(domElement,nextRawProps);updatePayload=[];break;default:lastProps=lastRawProps;nextProps=nextRawProps;if(typeof lastProps.onClick!=='function'&&typeof nextProps.onClick==='function'){// TODO: This cast may not be sound for SVG, MathML or custom elements.
trapClickOnNonInteractiveElement(domElement);}break;}assertValidProps(tag,nextProps);var propKey;var styleName;var styleUpdates=null;for(propKey in lastProps){if(nextProps.hasOwnProperty(propKey)||!lastProps.hasOwnProperty(propKey)||lastProps[propKey]==null){continue;}if(propKey===STYLE){var lastStyle=lastProps[propKey];for(styleName in lastStyle){if(lastStyle.hasOwnProperty(styleName)){if(!styleUpdates){styleUpdates={};}styleUpdates[styleName]='';}}}else if(propKey===DANGEROUSLY_SET_INNER_HTML||propKey===CHILDREN);else if(propKey===SUPPRESS_CONTENT_EDITABLE_WARNING||propKey===SUPPRESS_HYDRATION_WARNING);else if(propKey===AUTOFOCUS);else if(registrationNameDependencies.hasOwnProperty(propKey)){// This is a special case. If any listener updates we need to ensure
// that the "current" fiber pointer gets updated so we need a commit
// to update this element.
if(!updatePayload){updatePayload=[];}}else {// For all other deleted properties we add it to the queue. We use
// the allowed property list in the commit phase instead.
(updatePayload=updatePayload||[]).push(propKey,null);}}for(propKey in nextProps){var nextProp=nextProps[propKey];var lastProp=lastProps!=null?lastProps[propKey]:undefined;if(!nextProps.hasOwnProperty(propKey)||nextProp===lastProp||nextProp==null&&lastProp==null){continue;}if(propKey===STYLE){{if(nextProp){// Freeze the next style object so that we can assume it won't be
// mutated. We have already warned for this in the past.
Object.freeze(nextProp);}}if(lastProp){// Unset styles on `lastProp` but not on `nextProp`.
for(styleName in lastProp){if(lastProp.hasOwnProperty(styleName)&&(!nextProp||!nextProp.hasOwnProperty(styleName))){if(!styleUpdates){styleUpdates={};}styleUpdates[styleName]='';}}// Update styles that changed since `lastProp`.
for(styleName in nextProp){if(nextProp.hasOwnProperty(styleName)&&lastProp[styleName]!==nextProp[styleName]){if(!styleUpdates){styleUpdates={};}styleUpdates[styleName]=nextProp[styleName];}}}else {// Relies on `updateStylesByID` not mutating `styleUpdates`.
if(!styleUpdates){if(!updatePayload){updatePayload=[];}updatePayload.push(propKey,styleUpdates);}styleUpdates=nextProp;}}else if(propKey===DANGEROUSLY_SET_INNER_HTML){var nextHtml=nextProp?nextProp[HTML$1]:undefined;var lastHtml=lastProp?lastProp[HTML$1]:undefined;if(nextHtml!=null){if(lastHtml!==nextHtml){(updatePayload=updatePayload||[]).push(propKey,nextHtml);}}}else if(propKey===CHILDREN){if(typeof nextProp==='string'||typeof nextProp==='number'){(updatePayload=updatePayload||[]).push(propKey,''+nextProp);}}else if(propKey===SUPPRESS_CONTENT_EDITABLE_WARNING||propKey===SUPPRESS_HYDRATION_WARNING);else if(registrationNameDependencies.hasOwnProperty(propKey)){if(nextProp!=null){// We eagerly listen to this even though we haven't committed yet.
if(typeof nextProp!=='function'){warnForInvalidEventListener(propKey,nextProp);}if(propKey==='onScroll'){listenToNonDelegatedEvent('scroll',domElement);}}if(!updatePayload&&lastProp!==nextProp){// This is a special case. If any listener updates we need to ensure
// that the "current" props pointer gets updated so we need a commit
// to update this element.
updatePayload=[];}}else if(_typeof$1(nextProp)==='object'&&nextProp!==null&&nextProp.$$typeof===REACT_OPAQUE_ID_TYPE){// If we encounter useOpaqueReference's opaque object, this means we are hydrating.
// In this case, call the opaque object's toString function which generates a new client
// ID so client and server IDs match and throws to rerender.
nextProp.toString();}else {// For any other property we always add it to the queue and then we
// filter it out using the allowed property list during the commit.
(updatePayload=updatePayload||[]).push(propKey,nextProp);}}if(styleUpdates){{validateShorthandPropertyCollisionInDev(styleUpdates,nextProps[STYLE]);}(updatePayload=updatePayload||[]).push(STYLE,styleUpdates);}return updatePayload;}// Apply the diff.
function updateProperties(domElement,updatePayload,tag,lastRawProps,nextRawProps){// Update checked *before* name.
// In the middle of an update, it is possible to have multiple checked.
// When a checked radio tries to change name, browser makes another radio's checked false.
if(tag==='input'&&nextRawProps.type==='radio'&&nextRawProps.name!=null){updateChecked(domElement,nextRawProps);}var wasCustomComponentTag=isCustomComponent(tag,lastRawProps);var isCustomComponentTag=isCustomComponent(tag,nextRawProps);// Apply the diff.
updateDOMProperties(domElement,updatePayload,wasCustomComponentTag,isCustomComponentTag);// TODO: Ensure that an update gets scheduled if any of the special props
// changed.
switch(tag){case'input':// Update the wrapper around inputs *after* updating props. This has to
// happen after `updateDOMProperties`. Otherwise HTML5 input validations
// raise warnings and prevent the new value from being assigned.
updateWrapper(domElement,nextRawProps);break;case'textarea':updateWrapper$1(domElement,nextRawProps);break;case'select':// <select> value update needs to occur after <option> children
// reconciliation
postUpdateWrapper(domElement,nextRawProps);break;}}function getPossibleStandardName(propName){{var lowerCasedName=propName.toLowerCase();if(!possibleStandardNames.hasOwnProperty(lowerCasedName)){return null;}return possibleStandardNames[lowerCasedName]||null;}}function diffHydratedProperties(domElement,tag,rawProps,parentNamespace,rootContainerElement){var isCustomComponentTag;var extraAttributeNames;{suppressHydrationWarning=rawProps[SUPPRESS_HYDRATION_WARNING]===true;isCustomComponentTag=isCustomComponent(tag,rawProps);validatePropertiesInDevelopment(tag,rawProps);}// TODO: Make sure that we check isMounted before firing any of these events.
switch(tag){case'dialog':listenToNonDelegatedEvent('cancel',domElement);listenToNonDelegatedEvent('close',domElement);break;case'iframe':case'object':case'embed':// We listen to this event in case to ensure emulated bubble
// listeners still fire for the load event.
listenToNonDelegatedEvent('load',domElement);break;case'video':case'audio':// We listen to these events in case to ensure emulated bubble
// listeners still fire for all the media events.
for(var i=0;i<mediaEventTypes.length;i++){listenToNonDelegatedEvent(mediaEventTypes[i],domElement);}break;case'source':// We listen to this event in case to ensure emulated bubble
// listeners still fire for the error event.
listenToNonDelegatedEvent('error',domElement);break;case'img':case'image':case'link':// We listen to these events in case to ensure emulated bubble
// listeners still fire for error and load events.
listenToNonDelegatedEvent('error',domElement);listenToNonDelegatedEvent('load',domElement);break;case'details':// We listen to this event in case to ensure emulated bubble
// listeners still fire for the toggle event.
listenToNonDelegatedEvent('toggle',domElement);break;case'input':initWrapperState(domElement,rawProps);// We listen to this event in case to ensure emulated bubble
// listeners still fire for the invalid event.
listenToNonDelegatedEvent('invalid',domElement);break;case'option':validateProps(domElement,rawProps);break;case'select':initWrapperState$1(domElement,rawProps);// We listen to this event in case to ensure emulated bubble
// listeners still fire for the invalid event.
listenToNonDelegatedEvent('invalid',domElement);break;case'textarea':initWrapperState$2(domElement,rawProps);// We listen to this event in case to ensure emulated bubble
// listeners still fire for the invalid event.
listenToNonDelegatedEvent('invalid',domElement);break;}assertValidProps(tag,rawProps);{extraAttributeNames=new Set();var attributes=domElement.attributes;for(var _i=0;_i<attributes.length;_i++){var name=attributes[_i].name.toLowerCase();switch(name){// Built-in SSR attribute is allowed
case'data-reactroot':break;// Controlled attributes are not validated
// TODO: Only ignore them on controlled tags.
case'value':break;case'checked':break;case'selected':break;default:// Intentionally use the original name.
// See discussion in https://github.com/facebook/react/pull/10676.
extraAttributeNames.add(attributes[_i].name);}}}var updatePayload=null;for(var propKey in rawProps){if(!rawProps.hasOwnProperty(propKey)){continue;}var nextProp=rawProps[propKey];if(propKey===CHILDREN){// For text content children we compare against textContent. This
// might match additional HTML that is hidden when we read it using
// textContent. E.g. "foo" will match "f<span>oo</span>" but that still
// satisfies our requirement. Our requirement is not to produce perfect
// HTML and attributes. Ideally we should preserve structure but it's
// ok not to if the visible content is still enough to indicate what
// even listeners these nodes might be wired up to.
// TODO: Warn if there is more than a single textNode as a child.
// TODO: Should we use domElement.firstChild.nodeValue to compare?
if(typeof nextProp==='string'){if(domElement.textContent!==nextProp){if(!suppressHydrationWarning){warnForTextDifference(domElement.textContent,nextProp);}updatePayload=[CHILDREN,nextProp];}}else if(typeof nextProp==='number'){if(domElement.textContent!==''+nextProp){if(!suppressHydrationWarning){warnForTextDifference(domElement.textContent,nextProp);}updatePayload=[CHILDREN,''+nextProp];}}}else if(registrationNameDependencies.hasOwnProperty(propKey)){if(nextProp!=null){if(typeof nextProp!=='function'){warnForInvalidEventListener(propKey,nextProp);}if(propKey==='onScroll'){listenToNonDelegatedEvent('scroll',domElement);}}}else if(// Convince Flow we've calculated it (it's DEV-only in this method.)
typeof isCustomComponentTag==='boolean'){// Validate that the properties correspond to their expected values.
var serverValue=void 0;var propertyInfo=getPropertyInfo(propKey);if(suppressHydrationWarning);else if(propKey===SUPPRESS_CONTENT_EDITABLE_WARNING||propKey===SUPPRESS_HYDRATION_WARNING||// Controlled attributes are not validated
// TODO: Only ignore them on controlled tags.
propKey==='value'||propKey==='checked'||propKey==='selected');else if(propKey===DANGEROUSLY_SET_INNER_HTML){var serverHTML=domElement.innerHTML;var nextHtml=nextProp?nextProp[HTML$1]:undefined;if(nextHtml!=null){var expectedHTML=normalizeHTML(domElement,nextHtml);if(expectedHTML!==serverHTML){warnForPropDifference(propKey,serverHTML,expectedHTML);}}}else if(propKey===STYLE){// $FlowFixMe - Should be inferred as not undefined.
extraAttributeNames["delete"](propKey);if(canDiffStyleForHydrationWarning){var expectedStyle=createDangerousStringForStyles(nextProp);serverValue=domElement.getAttribute('style');if(expectedStyle!==serverValue){warnForPropDifference(propKey,serverValue,expectedStyle);}}}else if(isCustomComponentTag){// $FlowFixMe - Should be inferred as not undefined.
extraAttributeNames["delete"](propKey.toLowerCase());serverValue=getValueForAttribute(domElement,propKey,nextProp);if(nextProp!==serverValue){warnForPropDifference(propKey,serverValue,nextProp);}}else if(!shouldIgnoreAttribute(propKey,propertyInfo,isCustomComponentTag)&&!shouldRemoveAttribute(propKey,nextProp,propertyInfo,isCustomComponentTag)){var isMismatchDueToBadCasing=false;if(propertyInfo!==null){// $FlowFixMe - Should be inferred as not undefined.
extraAttributeNames["delete"](propertyInfo.attributeName);serverValue=getValueForProperty(domElement,propKey,nextProp,propertyInfo);}else {var ownNamespace=parentNamespace;if(ownNamespace===HTML_NAMESPACE$1){ownNamespace=getIntrinsicNamespace(tag);}if(ownNamespace===HTML_NAMESPACE$1){// $FlowFixMe - Should be inferred as not undefined.
extraAttributeNames["delete"](propKey.toLowerCase());}else {var standardName=getPossibleStandardName(propKey);if(standardName!==null&&standardName!==propKey){// If an SVG prop is supplied with bad casing, it will
// be successfully parsed from HTML, but will produce a mismatch
// (and would be incorrectly rendered on the client).
// However, we already warn about bad casing elsewhere.
// So we'll skip the misleading extra mismatch warning in this case.
isMismatchDueToBadCasing=true;// $FlowFixMe - Should be inferred as not undefined.
extraAttributeNames["delete"](standardName);}// $FlowFixMe - Should be inferred as not undefined.
extraAttributeNames["delete"](propKey);}serverValue=getValueForAttribute(domElement,propKey,nextProp);}if(nextProp!==serverValue&&!isMismatchDueToBadCasing){warnForPropDifference(propKey,serverValue,nextProp);}}}}{// $FlowFixMe - Should be inferred as not undefined.
if(extraAttributeNames.size>0&&!suppressHydrationWarning){// $FlowFixMe - Should be inferred as not undefined.
warnForExtraAttributes(extraAttributeNames);}}switch(tag){case'input':// TODO: Make sure we check if this is still unmounted or do any clean
// up necessary since we never stop tracking anymore.
track(domElement);postMountWrapper(domElement,rawProps,true);break;case'textarea':// TODO: Make sure we check if this is still unmounted or do any clean
// up necessary since we never stop tracking anymore.
track(domElement);postMountWrapper$3(domElement);break;case'select':case'option':// For input and textarea we current always set the value property at
// post mount to force it to diverge from attributes. However, for
// option and select we don't quite do the same thing and select
// is not resilient to the DOM state changing so we don't do that here.
// TODO: Consider not doing this for input and textarea.
break;default:if(typeof rawProps.onClick==='function'){// TODO: This cast may not be sound for SVG, MathML or custom elements.
trapClickOnNonInteractiveElement(domElement);}break;}return updatePayload;}function diffHydratedText(textNode,text){var isDifferent=textNode.nodeValue!==text;return isDifferent;}function warnForUnmatchedText(textNode,text){{warnForTextDifference(textNode.nodeValue,text);}}function warnForDeletedHydratableElement(parentNode,child){{if(didWarnInvalidHydration){return;}didWarnInvalidHydration=true;error('Did not expect server HTML to contain a <%s> in <%s>.',child.nodeName.toLowerCase(),parentNode.nodeName.toLowerCase());}}function warnForDeletedHydratableText(parentNode,child){{if(didWarnInvalidHydration){return;}didWarnInvalidHydration=true;error('Did not expect server HTML to contain the text node "%s" in <%s>.',child.nodeValue,parentNode.nodeName.toLowerCase());}}function warnForInsertedHydratedElement(parentNode,tag,props){{if(didWarnInvalidHydration){return;}didWarnInvalidHydration=true;error('Expected server HTML to contain a matching <%s> in <%s>.',tag,parentNode.nodeName.toLowerCase());}}function warnForInsertedHydratedText(parentNode,text){{if(text===''){// We expect to insert empty text nodes since they're not represented in
// the HTML.
// TODO: Remove this special case if we can just avoid inserting empty
// text nodes.
return;}if(didWarnInvalidHydration){return;}didWarnInvalidHydration=true;error('Expected server HTML to contain a matching text node for "%s" in <%s>.',text,parentNode.nodeName.toLowerCase());}}function restoreControlledState$3(domElement,tag,props){switch(tag){case'input':restoreControlledState(domElement,props);return;case'textarea':restoreControlledState$2(domElement,props);return;case'select':restoreControlledState$1(domElement,props);return;}}var validateDOMNesting=function validateDOMNesting(){};var updatedAncestorInfo=function updatedAncestorInfo(){};{// This validation code was written based on the HTML5 parsing spec:
// https://html.spec.whatwg.org/multipage/syntax.html#has-an-element-in-scope
//
// Note: this does not catch all invalid nesting, nor does it try to (as it's
// not clear what practical benefit doing so provides); instead, we warn only
// for cases where the parser will give a parse tree differing from what React
// intended. For example, <b><div></div></b> is invalid but we don't warn
// because it still parses correctly; we do warn for other cases like nested
// <p> tags where the beginning of the second element implicitly closes the
// first, causing a confusing mess.
// https://html.spec.whatwg.org/multipage/syntax.html#special
var specialTags=['address','applet','area','article','aside','base','basefont','bgsound','blockquote','body','br','button','caption','center','col','colgroup','dd','details','dir','div','dl','dt','embed','fieldset','figcaption','figure','footer','form','frame','frameset','h1','h2','h3','h4','h5','h6','head','header','hgroup','hr','html','iframe','img','input','isindex','li','link','listing','main','marquee','menu','menuitem','meta','nav','noembed','noframes','noscript','object','ol','p','param','plaintext','pre','script','section','select','source','style','summary','table','tbody','td','template','textarea','tfoot','th','thead','title','tr','track','ul','wbr','xmp'];// https://html.spec.whatwg.org/multipage/syntax.html#has-an-element-in-scope
var inScopeTags=['applet','caption','html','table','td','th','marquee','object','template',// https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
// TODO: Distinguish by namespace here -- for <title>, including it here
// errs on the side of fewer warnings
'foreignObject','desc','title'];// https://html.spec.whatwg.org/multipage/syntax.html#has-an-element-in-button-scope
var buttonScopeTags=inScopeTags.concat(['button']);// https://html.spec.whatwg.org/multipage/syntax.html#generate-implied-end-tags
var impliedEndTags=['dd','dt','li','option','optgroup','p','rp','rt'];var emptyAncestorInfo={current:null,formTag:null,aTagInScope:null,buttonTagInScope:null,nobrTagInScope:null,pTagInButtonScope:null,listItemTagAutoclosing:null,dlItemTagAutoclosing:null};updatedAncestorInfo=function updatedAncestorInfo(oldInfo,tag){var ancestorInfo=_assign({},oldInfo||emptyAncestorInfo);var info={tag:tag};if(inScopeTags.indexOf(tag)!==-1){ancestorInfo.aTagInScope=null;ancestorInfo.buttonTagInScope=null;ancestorInfo.nobrTagInScope=null;}if(buttonScopeTags.indexOf(tag)!==-1){ancestorInfo.pTagInButtonScope=null;}// See rules for 'li', 'dd', 'dt' start tags in
// https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inbody
if(specialTags.indexOf(tag)!==-1&&tag!=='address'&&tag!=='div'&&tag!=='p'){ancestorInfo.listItemTagAutoclosing=null;ancestorInfo.dlItemTagAutoclosing=null;}ancestorInfo.current=info;if(tag==='form'){ancestorInfo.formTag=info;}if(tag==='a'){ancestorInfo.aTagInScope=info;}if(tag==='button'){ancestorInfo.buttonTagInScope=info;}if(tag==='nobr'){ancestorInfo.nobrTagInScope=info;}if(tag==='p'){ancestorInfo.pTagInButtonScope=info;}if(tag==='li'){ancestorInfo.listItemTagAutoclosing=info;}if(tag==='dd'||tag==='dt'){ancestorInfo.dlItemTagAutoclosing=info;}return ancestorInfo;};/**
   * Returns whether
   */var isTagValidWithParent=function isTagValidWithParent(tag,parentTag){// First, let's check if we're in an unusual parsing mode...
switch(parentTag){// https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inselect
case'select':return tag==='option'||tag==='optgroup'||tag==='#text';case'optgroup':return tag==='option'||tag==='#text';// Strictly speaking, seeing an <option> doesn't mean we're in a <select>
// but
case'option':return tag==='#text';// https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intd
// https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-incaption
// No special behavior since these rules fall back to "in body" mode for
// all except special table nodes which cause bad parsing behavior anyway.
// https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intr
case'tr':return tag==='th'||tag==='td'||tag==='style'||tag==='script'||tag==='template';// https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intbody
case'tbody':case'thead':case'tfoot':return tag==='tr'||tag==='style'||tag==='script'||tag==='template';// https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-incolgroup
case'colgroup':return tag==='col'||tag==='template';// https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intable
case'table':return tag==='caption'||tag==='colgroup'||tag==='tbody'||tag==='tfoot'||tag==='thead'||tag==='style'||tag==='script'||tag==='template';// https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inhead
case'head':return tag==='base'||tag==='basefont'||tag==='bgsound'||tag==='link'||tag==='meta'||tag==='title'||tag==='noscript'||tag==='noframes'||tag==='style'||tag==='script'||tag==='template';// https://html.spec.whatwg.org/multipage/semantics.html#the-html-element
case'html':return tag==='head'||tag==='body'||tag==='frameset';case'frameset':return tag==='frame';case'#document':return tag==='html';}// Probably in the "in body" parsing mode, so we outlaw only tag combos
// where the parsing rules cause implicit opens or closes to be added.
// https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inbody
switch(tag){case'h1':case'h2':case'h3':case'h4':case'h5':case'h6':return parentTag!=='h1'&&parentTag!=='h2'&&parentTag!=='h3'&&parentTag!=='h4'&&parentTag!=='h5'&&parentTag!=='h6';case'rp':case'rt':return impliedEndTags.indexOf(parentTag)===-1;case'body':case'caption':case'col':case'colgroup':case'frameset':case'frame':case'head':case'html':case'tbody':case'td':case'tfoot':case'th':case'thead':case'tr':// These tags are only valid with a few parents that have special child
// parsing rules -- if we're down here, then none of those matched and
// so we allow it only if we don't know what the parent is, as all other
// cases are invalid.
return parentTag==null;}return true;};/**
   * Returns whether
   */var findInvalidAncestorForTag=function findInvalidAncestorForTag(tag,ancestorInfo){switch(tag){case'address':case'article':case'aside':case'blockquote':case'center':case'details':case'dialog':case'dir':case'div':case'dl':case'fieldset':case'figcaption':case'figure':case'footer':case'header':case'hgroup':case'main':case'menu':case'nav':case'ol':case'p':case'section':case'summary':case'ul':case'pre':case'listing':case'table':case'hr':case'xmp':case'h1':case'h2':case'h3':case'h4':case'h5':case'h6':return ancestorInfo.pTagInButtonScope;case'form':return ancestorInfo.formTag||ancestorInfo.pTagInButtonScope;case'li':return ancestorInfo.listItemTagAutoclosing;case'dd':case'dt':return ancestorInfo.dlItemTagAutoclosing;case'button':return ancestorInfo.buttonTagInScope;case'a':// Spec says something about storing a list of markers, but it sounds
// equivalent to this check.
return ancestorInfo.aTagInScope;case'nobr':return ancestorInfo.nobrTagInScope;}return null;};var didWarn$1={};validateDOMNesting=function validateDOMNesting(childTag,childText,ancestorInfo){ancestorInfo=ancestorInfo||emptyAncestorInfo;var parentInfo=ancestorInfo.current;var parentTag=parentInfo&&parentInfo.tag;if(childText!=null){if(childTag!=null){error('validateDOMNesting: when childText is passed, childTag should be null');}childTag='#text';}var invalidParent=isTagValidWithParent(childTag,parentTag)?null:parentInfo;var invalidAncestor=invalidParent?null:findInvalidAncestorForTag(childTag,ancestorInfo);var invalidParentOrAncestor=invalidParent||invalidAncestor;if(!invalidParentOrAncestor){return;}var ancestorTag=invalidParentOrAncestor.tag;var warnKey=!!invalidParent+'|'+childTag+'|'+ancestorTag;if(didWarn$1[warnKey]){return;}didWarn$1[warnKey]=true;var tagDisplayName=childTag;var whitespaceInfo='';if(childTag==='#text'){if(/\S/.test(childText)){tagDisplayName='Text nodes';}else {tagDisplayName='Whitespace text nodes';whitespaceInfo=" Make sure you don't have any extra whitespace between tags on "+'each line of your source code.';}}else {tagDisplayName='<'+childTag+'>';}if(invalidParent){var info='';if(ancestorTag==='table'&&childTag==='tr'){info+=' Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by '+'the browser.';}error('validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s',tagDisplayName,ancestorTag,whitespaceInfo,info);}else {error('validateDOMNesting(...): %s cannot appear as a descendant of '+'<%s>.',tagDisplayName,ancestorTag);}};}var SUPPRESS_HYDRATION_WARNING$1;{SUPPRESS_HYDRATION_WARNING$1='suppressHydrationWarning';}var SUSPENSE_START_DATA='$';var SUSPENSE_END_DATA='/$';var SUSPENSE_PENDING_START_DATA='$?';var SUSPENSE_FALLBACK_START_DATA='$!';var STYLE$1='style';var eventsEnabled=null;var selectionInformation=null;function shouldAutoFocusHostComponent(type,props){switch(type){case'button':case'input':case'select':case'textarea':return !!props.autoFocus;}return false;}function getRootHostContext(rootContainerInstance){var type;var namespace;var nodeType=rootContainerInstance.nodeType;switch(nodeType){case DOCUMENT_NODE:case DOCUMENT_FRAGMENT_NODE:{type=nodeType===DOCUMENT_NODE?'#document':'#fragment';var root=rootContainerInstance.documentElement;namespace=root?root.namespaceURI:getChildNamespace(null,'');break;}default:{var container=nodeType===COMMENT_NODE?rootContainerInstance.parentNode:rootContainerInstance;var ownNamespace=container.namespaceURI||null;type=container.tagName;namespace=getChildNamespace(ownNamespace,type);break;}}{var validatedTag=type.toLowerCase();var ancestorInfo=updatedAncestorInfo(null,validatedTag);return {namespace:namespace,ancestorInfo:ancestorInfo};}}function getChildHostContext(parentHostContext,type,rootContainerInstance){{var parentHostContextDev=parentHostContext;var namespace=getChildNamespace(parentHostContextDev.namespace,type);var ancestorInfo=updatedAncestorInfo(parentHostContextDev.ancestorInfo,type);return {namespace:namespace,ancestorInfo:ancestorInfo};}}function getPublicInstance(instance){return instance;}function prepareForCommit(containerInfo){eventsEnabled=isEnabled();selectionInformation=getSelectionInformation();var activeInstance=null;setEnabled(false);return activeInstance;}function resetAfterCommit(containerInfo){restoreSelection(selectionInformation);setEnabled(eventsEnabled);eventsEnabled=null;selectionInformation=null;}function createInstance(type,props,rootContainerInstance,hostContext,internalInstanceHandle){var parentNamespace;{// TODO: take namespace into account when validating.
var hostContextDev=hostContext;validateDOMNesting(type,null,hostContextDev.ancestorInfo);if(typeof props.children==='string'||typeof props.children==='number'){var string=''+props.children;var ownAncestorInfo=updatedAncestorInfo(hostContextDev.ancestorInfo,type);validateDOMNesting(null,string,ownAncestorInfo);}parentNamespace=hostContextDev.namespace;}var domElement=createElement(type,props,rootContainerInstance,parentNamespace);precacheFiberNode(internalInstanceHandle,domElement);updateFiberProps(domElement,props);return domElement;}function appendInitialChild(parentInstance,child){parentInstance.appendChild(child);}function finalizeInitialChildren(domElement,type,props,rootContainerInstance,hostContext){setInitialProperties(domElement,type,props,rootContainerInstance);return shouldAutoFocusHostComponent(type,props);}function prepareUpdate(domElement,type,oldProps,newProps,rootContainerInstance,hostContext){{var hostContextDev=hostContext;if(_typeof$1(newProps.children)!==_typeof$1(oldProps.children)&&(typeof newProps.children==='string'||typeof newProps.children==='number')){var string=''+newProps.children;var ownAncestorInfo=updatedAncestorInfo(hostContextDev.ancestorInfo,type);validateDOMNesting(null,string,ownAncestorInfo);}}return diffProperties(domElement,type,oldProps,newProps);}function shouldSetTextContent(type,props){return type==='textarea'||type==='option'||type==='noscript'||typeof props.children==='string'||typeof props.children==='number'||_typeof$1(props.dangerouslySetInnerHTML)==='object'&&props.dangerouslySetInnerHTML!==null&&props.dangerouslySetInnerHTML.__html!=null;}function createTextInstance(text,rootContainerInstance,hostContext,internalInstanceHandle){{var hostContextDev=hostContext;validateDOMNesting(null,text,hostContextDev.ancestorInfo);}var textNode=createTextNode(text,rootContainerInstance);precacheFiberNode(internalInstanceHandle,textNode);return textNode;}// if a component just imports ReactDOM (e.g. for findDOMNode).
// Some environments might not have setTimeout or clearTimeout.
var scheduleTimeout=typeof setTimeout==='function'?setTimeout:undefined;var cancelTimeout=typeof clearTimeout==='function'?clearTimeout:undefined;var noTimeout=-1;// -------------------
function commitMount(domElement,type,newProps,internalInstanceHandle){// Despite the naming that might imply otherwise, this method only
// fires if there is an `Update` effect scheduled during mounting.
// This happens if `finalizeInitialChildren` returns `true` (which it
// does to implement the `autoFocus` attribute on the client). But
// there are also other cases when this might happen (such as patching
// up text content during hydration mismatch). So we'll check this again.
if(shouldAutoFocusHostComponent(type,newProps)){domElement.focus();}}function commitUpdate(domElement,updatePayload,type,oldProps,newProps,internalInstanceHandle){// Update the props handle so that we know which props are the ones with
// with current event handlers.
updateFiberProps(domElement,newProps);// Apply the diff to the DOM node.
updateProperties(domElement,updatePayload,type,oldProps,newProps);}function resetTextContent(domElement){setTextContent(domElement,'');}function commitTextUpdate(textInstance,oldText,newText){textInstance.nodeValue=newText;}function appendChild(parentInstance,child){parentInstance.appendChild(child);}function appendChildToContainer(container,child){var parentNode;if(container.nodeType===COMMENT_NODE){parentNode=container.parentNode;parentNode.insertBefore(child,container);}else {parentNode=container;parentNode.appendChild(child);}// This container might be used for a portal.
// If something inside a portal is clicked, that click should bubble
// through the React tree. However, on Mobile Safari the click would
// never bubble through the *DOM* tree unless an ancestor with onclick
// event exists. So we wouldn't see it and dispatch it.
// This is why we ensure that non React root containers have inline onclick
// defined.
// https://github.com/facebook/react/issues/11918
var reactRootContainer=container._reactRootContainer;if((reactRootContainer===null||reactRootContainer===undefined)&&parentNode.onclick===null){// TODO: This cast may not be sound for SVG, MathML or custom elements.
trapClickOnNonInteractiveElement(parentNode);}}function insertBefore(parentInstance,child,beforeChild){parentInstance.insertBefore(child,beforeChild);}function insertInContainerBefore(container,child,beforeChild){if(container.nodeType===COMMENT_NODE){container.parentNode.insertBefore(child,beforeChild);}else {container.insertBefore(child,beforeChild);}}function removeChild(parentInstance,child){parentInstance.removeChild(child);}function removeChildFromContainer(container,child){if(container.nodeType===COMMENT_NODE){container.parentNode.removeChild(child);}else {container.removeChild(child);}}function hideInstance(instance){// TODO: Does this work for all element types? What about MathML? Should we
// pass host context to this method?
instance=instance;var style=instance.style;if(typeof style.setProperty==='function'){style.setProperty('display','none','important');}else {style.display='none';}}function hideTextInstance(textInstance){textInstance.nodeValue='';}function unhideInstance(instance,props){instance=instance;var styleProp=props[STYLE$1];var display=styleProp!==undefined&&styleProp!==null&&styleProp.hasOwnProperty('display')?styleProp.display:null;instance.style.display=dangerousStyleValue('display',display);}function unhideTextInstance(textInstance,text){textInstance.nodeValue=text;}function clearContainer(container){if(container.nodeType===ELEMENT_NODE){container.textContent='';}else if(container.nodeType===DOCUMENT_NODE){var body=container.body;if(body!=null){body.textContent='';}}}// -------------------
function canHydrateInstance(instance,type,props){if(instance.nodeType!==ELEMENT_NODE||type.toLowerCase()!==instance.nodeName.toLowerCase()){return null;}// This has now been refined to an element node.
return instance;}function canHydrateTextInstance(instance,text){if(text===''||instance.nodeType!==TEXT_NODE){// Empty strings are not parsed by HTML so there won't be a correct match here.
return null;}// This has now been refined to a text node.
return instance;}function isSuspenseInstancePending(instance){return instance.data===SUSPENSE_PENDING_START_DATA;}function isSuspenseInstanceFallback(instance){return instance.data===SUSPENSE_FALLBACK_START_DATA;}function getNextHydratable(node){// Skip non-hydratable nodes.
for(;node!=null;node=node.nextSibling){var nodeType=node.nodeType;if(nodeType===ELEMENT_NODE||nodeType===TEXT_NODE){break;}}return node;}function getNextHydratableSibling(instance){return getNextHydratable(instance.nextSibling);}function getFirstHydratableChild(parentInstance){return getNextHydratable(parentInstance.firstChild);}function hydrateInstance(instance,type,props,rootContainerInstance,hostContext,internalInstanceHandle){precacheFiberNode(internalInstanceHandle,instance);// TODO: Possibly defer this until the commit phase where all the events
// get attached.
updateFiberProps(instance,props);var parentNamespace;{var hostContextDev=hostContext;parentNamespace=hostContextDev.namespace;}return diffHydratedProperties(instance,type,props,parentNamespace);}function hydrateTextInstance(textInstance,text,internalInstanceHandle){precacheFiberNode(internalInstanceHandle,textInstance);return diffHydratedText(textInstance,text);}function getNextHydratableInstanceAfterSuspenseInstance(suspenseInstance){var node=suspenseInstance.nextSibling;// Skip past all nodes within this suspense boundary.
// There might be nested nodes so we need to keep track of how
// deep we are and only break out when we're back on top.
var depth=0;while(node){if(node.nodeType===COMMENT_NODE){var data=node.data;if(data===SUSPENSE_END_DATA){if(depth===0){return getNextHydratableSibling(node);}else {depth--;}}else if(data===SUSPENSE_START_DATA||data===SUSPENSE_FALLBACK_START_DATA||data===SUSPENSE_PENDING_START_DATA){depth++;}}node=node.nextSibling;}// TODO: Warn, we didn't find the end comment boundary.
return null;}// Returns the SuspenseInstance if this node is a direct child of a
// SuspenseInstance. I.e. if its previous sibling is a Comment with
// SUSPENSE_x_START_DATA. Otherwise, null.
function getParentSuspenseInstance(targetInstance){var node=targetInstance.previousSibling;// Skip past all nodes within this suspense boundary.
// There might be nested nodes so we need to keep track of how
// deep we are and only break out when we're back on top.
var depth=0;while(node){if(node.nodeType===COMMENT_NODE){var data=node.data;if(data===SUSPENSE_START_DATA||data===SUSPENSE_FALLBACK_START_DATA||data===SUSPENSE_PENDING_START_DATA){if(depth===0){return node;}else {depth--;}}else if(data===SUSPENSE_END_DATA){depth++;}}node=node.previousSibling;}return null;}function commitHydratedContainer(container){// Retry if any event replaying was blocked on this.
retryIfBlockedOn(container);}function commitHydratedSuspenseInstance(suspenseInstance){// Retry if any event replaying was blocked on this.
retryIfBlockedOn(suspenseInstance);}function didNotMatchHydratedContainerTextInstance(parentContainer,textInstance,text){{warnForUnmatchedText(textInstance,text);}}function didNotMatchHydratedTextInstance(parentType,parentProps,parentInstance,textInstance,text){if(parentProps[SUPPRESS_HYDRATION_WARNING$1]!==true){warnForUnmatchedText(textInstance,text);}}function didNotHydrateContainerInstance(parentContainer,instance){{if(instance.nodeType===ELEMENT_NODE){warnForDeletedHydratableElement(parentContainer,instance);}else if(instance.nodeType===COMMENT_NODE);else {warnForDeletedHydratableText(parentContainer,instance);}}}function didNotHydrateInstance(parentType,parentProps,parentInstance,instance){if(parentProps[SUPPRESS_HYDRATION_WARNING$1]!==true){if(instance.nodeType===ELEMENT_NODE){warnForDeletedHydratableElement(parentInstance,instance);}else if(instance.nodeType===COMMENT_NODE);else {warnForDeletedHydratableText(parentInstance,instance);}}}function didNotFindHydratableContainerInstance(parentContainer,type,props){{warnForInsertedHydratedElement(parentContainer,type);}}function didNotFindHydratableContainerTextInstance(parentContainer,text){{warnForInsertedHydratedText(parentContainer,text);}}function didNotFindHydratableInstance(parentType,parentProps,parentInstance,type,props){if(parentProps[SUPPRESS_HYDRATION_WARNING$1]!==true){warnForInsertedHydratedElement(parentInstance,type);}}function didNotFindHydratableTextInstance(parentType,parentProps,parentInstance,text){if(parentProps[SUPPRESS_HYDRATION_WARNING$1]!==true){warnForInsertedHydratedText(parentInstance,text);}}function didNotFindHydratableSuspenseInstance(parentType,parentProps,parentInstance){if(parentProps[SUPPRESS_HYDRATION_WARNING$1]!==true);}var clientId=0;function makeClientIdInDEV(warnOnAccessInDEV){var id='r:'+(clientId++).toString(36);return {toString:function toString(){warnOnAccessInDEV();return id;},valueOf:function valueOf(){warnOnAccessInDEV();return id;}};}function isOpaqueHydratingObject(value){return value!==null&&_typeof$1(value)==='object'&&value.$$typeof===REACT_OPAQUE_ID_TYPE;}function makeOpaqueHydratingObject(attemptToReadValue){return {$$typeof:REACT_OPAQUE_ID_TYPE,toString:attemptToReadValue,valueOf:attemptToReadValue};}function preparePortalMount(portalInstance){{listenToAllSupportedEvents(portalInstance);}}var randomKey=Math.random().toString(36).slice(2);var internalInstanceKey='__reactFiber$'+randomKey;var internalPropsKey='__reactProps$'+randomKey;var internalContainerInstanceKey='__reactContainer$'+randomKey;var internalEventHandlersKey='__reactEvents$'+randomKey;function precacheFiberNode(hostInst,node){node[internalInstanceKey]=hostInst;}function markContainerAsRoot(hostRoot,node){node[internalContainerInstanceKey]=hostRoot;}function unmarkContainerAsRoot(node){node[internalContainerInstanceKey]=null;}function isContainerMarkedAsRoot(node){return !!node[internalContainerInstanceKey];}// Given a DOM node, return the closest HostComponent or HostText fiber ancestor.
// If the target node is part of a hydrated or not yet rendered subtree, then
// this may also return a SuspenseComponent or HostRoot to indicate that.
// Conceptually the HostRoot fiber is a child of the Container node. So if you
// pass the Container node as the targetNode, you will not actually get the
// HostRoot back. To get to the HostRoot, you need to pass a child of it.
// The same thing applies to Suspense boundaries.
function getClosestInstanceFromNode(targetNode){var targetInst=targetNode[internalInstanceKey];if(targetInst){// Don't return HostRoot or SuspenseComponent here.
return targetInst;}// If the direct event target isn't a React owned DOM node, we need to look
// to see if one of its parents is a React owned DOM node.
var parentNode=targetNode.parentNode;while(parentNode){// We'll check if this is a container root that could include
// React nodes in the future. We need to check this first because
// if we're a child of a dehydrated container, we need to first
// find that inner container before moving on to finding the parent
// instance. Note that we don't check this field on  the targetNode
// itself because the fibers are conceptually between the container
// node and the first child. It isn't surrounding the container node.
// If it's not a container, we check if it's an instance.
targetInst=parentNode[internalContainerInstanceKey]||parentNode[internalInstanceKey];if(targetInst){// Since this wasn't the direct target of the event, we might have
// stepped past dehydrated DOM nodes to get here. However they could
// also have been non-React nodes. We need to answer which one.
// If we the instance doesn't have any children, then there can't be
// a nested suspense boundary within it. So we can use this as a fast
// bailout. Most of the time, when people add non-React children to
// the tree, it is using a ref to a child-less DOM node.
// Normally we'd only need to check one of the fibers because if it
// has ever gone from having children to deleting them or vice versa
// it would have deleted the dehydrated boundary nested inside already.
// However, since the HostRoot starts out with an alternate it might
// have one on the alternate so we need to check in case this was a
// root.
var alternate=targetInst.alternate;if(targetInst.child!==null||alternate!==null&&alternate.child!==null){// Next we need to figure out if the node that skipped past is
// nested within a dehydrated boundary and if so, which one.
var suspenseInstance=getParentSuspenseInstance(targetNode);while(suspenseInstance!==null){// We found a suspense instance. That means that we haven't
// hydrated it yet. Even though we leave the comments in the
// DOM after hydrating, and there are boundaries in the DOM
// that could already be hydrated, we wouldn't have found them
// through this pass since if the target is hydrated it would
// have had an internalInstanceKey on it.
// Let's get the fiber associated with the SuspenseComponent
// as the deepest instance.
var targetSuspenseInst=suspenseInstance[internalInstanceKey];if(targetSuspenseInst){return targetSuspenseInst;}// If we don't find a Fiber on the comment, it might be because
// we haven't gotten to hydrate it yet. There might still be a
// parent boundary that hasn't above this one so we need to find
// the outer most that is known.
suspenseInstance=getParentSuspenseInstance(suspenseInstance);// If we don't find one, then that should mean that the parent
// host component also hasn't hydrated yet. We can return it
// below since it will bail out on the isMounted check later.
}}return targetInst;}targetNode=parentNode;parentNode=targetNode.parentNode;}return null;}/**
 * Given a DOM node, return the ReactDOMComponent or ReactDOMTextComponent
 * instance, or null if the node was not rendered by this React.
 */function getInstanceFromNode(node){var inst=node[internalInstanceKey]||node[internalContainerInstanceKey];if(inst){if(inst.tag===HostComponent||inst.tag===HostText||inst.tag===SuspenseComponent||inst.tag===HostRoot){return inst;}else {return null;}}return null;}/**
 * Given a ReactDOMComponent or ReactDOMTextComponent, return the corresponding
 * DOM node.
 */function getNodeFromInstance(inst){if(inst.tag===HostComponent||inst.tag===HostText){// In Fiber this, is just the state node right now. We assume it will be
// a host component or host text.
return inst.stateNode;}// Without this first invariant, passing a non-DOM-component triggers the next
// invariant for a missing parent, which is super confusing.
{{throw Error("getNodeFromInstance: Invalid argument.");}}}function getFiberCurrentPropsFromNode(node){return node[internalPropsKey]||null;}function updateFiberProps(node,props){node[internalPropsKey]=props;}function getEventListenerSet(node){var elementListenerSet=node[internalEventHandlersKey];if(elementListenerSet===undefined){elementListenerSet=node[internalEventHandlersKey]=new Set();}return elementListenerSet;}var loggedTypeFailures={};var ReactDebugCurrentFrame$1=ReactSharedInternals.ReactDebugCurrentFrame;function setCurrentlyValidatingElement(element){{if(element){var owner=element._owner;var stack=describeUnknownElementTypeFrameInDEV(element.type,element._source,owner?owner.type:null);ReactDebugCurrentFrame$1.setExtraStackFrame(stack);}else {ReactDebugCurrentFrame$1.setExtraStackFrame(null);}}}function checkPropTypes(typeSpecs,values,location,componentName,element){{// $FlowFixMe This is okay but Flow doesn't know it.
var has=Function.call.bind(Object.prototype.hasOwnProperty);for(var typeSpecName in typeSpecs){if(has(typeSpecs,typeSpecName)){var error$1=void 0;// Prop type validation may throw. In case they do, we don't want to
// fail the render phase where it didn't fail before. So we log it.
// After these have been cleaned up, we'll let them throw.
try{// This is intentionally an invariant that gets caught. It's the same
// behavior as without this statement except with a better message.
if(typeof typeSpecs[typeSpecName]!=='function'){var err=Error((componentName||'React class')+': '+location+' type `'+typeSpecName+'` is invalid; '+'it must be a function, usually from the `prop-types` package, but received `'+_typeof$1(typeSpecs[typeSpecName])+'`.'+'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');err.name='Invariant Violation';throw err;}error$1=typeSpecs[typeSpecName](values,typeSpecName,componentName,location,null,'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');}catch(ex){error$1=ex;}if(error$1&&!(error$1 instanceof Error)){setCurrentlyValidatingElement(element);error('%s: type specification of %s'+' `%s` is invalid; the type checker '+'function must return `null` or an `Error` but returned a %s. '+'You may have forgotten to pass an argument to the type checker '+'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and '+'shape all require an argument).',componentName||'React class',location,typeSpecName,_typeof$1(error$1));setCurrentlyValidatingElement(null);}if(error$1 instanceof Error&&!(error$1.message in loggedTypeFailures)){// Only monitor this failure once because there tends to be a lot of the
// same error.
loggedTypeFailures[error$1.message]=true;setCurrentlyValidatingElement(element);error('Failed %s type: %s',location,error$1.message);setCurrentlyValidatingElement(null);}}}}}var valueStack=[];var fiberStack;{fiberStack=[];}var index=-1;function createCursor(defaultValue){return {current:defaultValue};}function pop(cursor,fiber){if(index<0){{error('Unexpected pop.');}return;}{if(fiber!==fiberStack[index]){error('Unexpected Fiber popped.');}}cursor.current=valueStack[index];valueStack[index]=null;{fiberStack[index]=null;}index--;}function push(cursor,value,fiber){index++;valueStack[index]=cursor.current;{fiberStack[index]=fiber;}cursor.current=value;}var warnedAboutMissingGetChildContext;{warnedAboutMissingGetChildContext={};}var emptyContextObject={};{Object.freeze(emptyContextObject);}// A cursor to the current merged context object on the stack.
var contextStackCursor=createCursor(emptyContextObject);// A cursor to a boolean indicating whether the context has changed.
var didPerformWorkStackCursor=createCursor(false);// Keep track of the previous context object that was on the stack.
// We use this to get access to the parent context after we have already
// pushed the next context provider, and now need to merge their contexts.
var previousContext=emptyContextObject;function getUnmaskedContext(workInProgress,Component,didPushOwnContextIfProvider){{if(didPushOwnContextIfProvider&&isContextProvider(Component)){// If the fiber is a context provider itself, when we read its context
// we may have already pushed its own child context on the stack. A context
// provider should not "see" its own child context. Therefore we read the
// previous (parent) context instead for a context provider.
return previousContext;}return contextStackCursor.current;}}function cacheContext(workInProgress,unmaskedContext,maskedContext){{var instance=workInProgress.stateNode;instance.__reactInternalMemoizedUnmaskedChildContext=unmaskedContext;instance.__reactInternalMemoizedMaskedChildContext=maskedContext;}}function getMaskedContext(workInProgress,unmaskedContext){{var type=workInProgress.type;var contextTypes=type.contextTypes;if(!contextTypes){return emptyContextObject;}// Avoid recreating masked context unless unmasked context has changed.
// Failing to do this will result in unnecessary calls to componentWillReceiveProps.
// This may trigger infinite loops if componentWillReceiveProps calls setState.
var instance=workInProgress.stateNode;if(instance&&instance.__reactInternalMemoizedUnmaskedChildContext===unmaskedContext){return instance.__reactInternalMemoizedMaskedChildContext;}var context={};for(var key in contextTypes){context[key]=unmaskedContext[key];}{var name=getComponentName(type)||'Unknown';checkPropTypes(contextTypes,context,'context',name);}// Cache unmasked context so we can avoid recreating masked context unless necessary.
// Context is created before the class component is instantiated so check for instance.
if(instance){cacheContext(workInProgress,unmaskedContext,context);}return context;}}function hasContextChanged(){{return didPerformWorkStackCursor.current;}}function isContextProvider(type){{var childContextTypes=type.childContextTypes;return childContextTypes!==null&&childContextTypes!==undefined;}}function popContext(fiber){{pop(didPerformWorkStackCursor,fiber);pop(contextStackCursor,fiber);}}function popTopLevelContextObject(fiber){{pop(didPerformWorkStackCursor,fiber);pop(contextStackCursor,fiber);}}function pushTopLevelContextObject(fiber,context,didChange){{if(!(contextStackCursor.current===emptyContextObject)){{throw Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");}}push(contextStackCursor,context,fiber);push(didPerformWorkStackCursor,didChange,fiber);}}function processChildContext(fiber,type,parentContext){{var instance=fiber.stateNode;var childContextTypes=type.childContextTypes;// TODO (bvaughn) Replace this behavior with an invariant() in the future.
// It has only been added in Fiber to match the (unintentional) behavior in Stack.
if(typeof instance.getChildContext!=='function'){{var componentName=getComponentName(type)||'Unknown';if(!warnedAboutMissingGetChildContext[componentName]){warnedAboutMissingGetChildContext[componentName]=true;error('%s.childContextTypes is specified but there is no getChildContext() method '+'on the instance. You can either define getChildContext() on %s or remove '+'childContextTypes from it.',componentName,componentName);}}return parentContext;}var childContext=instance.getChildContext();for(var contextKey in childContext){if(!(contextKey in childContextTypes)){{throw Error((getComponentName(type)||'Unknown')+".getChildContext(): key \""+contextKey+"\" is not defined in childContextTypes.");}}}{var name=getComponentName(type)||'Unknown';checkPropTypes(childContextTypes,childContext,'child context',name);}return _assign({},parentContext,childContext);}}function pushContextProvider(workInProgress){{var instance=workInProgress.stateNode;// We push the context as early as possible to ensure stack integrity.
// If the instance does not exist yet, we will push null at first,
// and replace it on the stack later when invalidating the context.
var memoizedMergedChildContext=instance&&instance.__reactInternalMemoizedMergedChildContext||emptyContextObject;// Remember the parent context so we can merge with it later.
// Inherit the parent's did-perform-work value to avoid inadvertently blocking updates.
previousContext=contextStackCursor.current;push(contextStackCursor,memoizedMergedChildContext,workInProgress);push(didPerformWorkStackCursor,didPerformWorkStackCursor.current,workInProgress);return true;}}function invalidateContextProvider(workInProgress,type,didChange){{var instance=workInProgress.stateNode;if(!instance){{throw Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");}}if(didChange){// Merge parent and own context.
// Skip this if we're not updating due to sCU.
// This avoids unnecessarily recomputing memoized values.
var mergedContext=processChildContext(workInProgress,type,previousContext);instance.__reactInternalMemoizedMergedChildContext=mergedContext;// Replace the old (or empty) context with the new one.
// It is important to unwind the context in the reverse order.
pop(didPerformWorkStackCursor,workInProgress);pop(contextStackCursor,workInProgress);// Now push the new context and mark that it has changed.
push(contextStackCursor,mergedContext,workInProgress);push(didPerformWorkStackCursor,didChange,workInProgress);}else {pop(didPerformWorkStackCursor,workInProgress);push(didPerformWorkStackCursor,didChange,workInProgress);}}}function findCurrentUnmaskedContext(fiber){{// Currently this is only used with renderSubtreeIntoContainer; not sure if it
// makes sense elsewhere
if(!(isFiberMounted(fiber)&&fiber.tag===ClassComponent)){{throw Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");}}var node=fiber;do{switch(node.tag){case HostRoot:return node.stateNode.context;case ClassComponent:{var Component=node.type;if(isContextProvider(Component)){return node.stateNode.__reactInternalMemoizedMergedChildContext;}break;}}node=node["return"];}while(node!==null);{{throw Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");}}}}var LegacyRoot=0;var BlockingRoot=1;var ConcurrentRoot=2;var rendererID=null;var injectedHook=null;var hasLoggedError=false;var isDevToolsPresent=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!=='undefined';function injectInternals(internals){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__==='undefined'){// No DevTools
return false;}var hook=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(hook.isDisabled){// This isn't a real property on the hook, but it can be set to opt out
// of DevTools integration and associated warnings and logs.
// https://github.com/facebook/react/issues/3877
return true;}if(!hook.supportsFiber){{error('The installed version of React DevTools is too old and will not work '+'with the current version of React. Please update React DevTools. '+'https://reactjs.org/link/react-devtools');}// DevTools exists, even though it doesn't support Fiber.
return true;}try{rendererID=hook.inject(internals);// We have successfully injected, so now it is safe to set up hooks.
injectedHook=hook;}catch(err){// Catch all errors because it is unsafe to throw during initialization.
{error('React instrumentation encountered an error: %s.',err);}}// DevTools exists
return true;}function onScheduleRoot(root,children){{if(injectedHook&&typeof injectedHook.onScheduleFiberRoot==='function'){try{injectedHook.onScheduleFiberRoot(rendererID,root,children);}catch(err){if(!hasLoggedError){hasLoggedError=true;error('React instrumentation encountered an error: %s',err);}}}}}function onCommitRoot(root,priorityLevel){if(injectedHook&&typeof injectedHook.onCommitFiberRoot==='function'){try{var didError=(root.current.flags&DidCapture)===DidCapture;if(enableProfilerTimer){injectedHook.onCommitFiberRoot(rendererID,root,priorityLevel,didError);}}catch(err){{if(!hasLoggedError){hasLoggedError=true;error('React instrumentation encountered an error: %s',err);}}}}}function onCommitUnmount(fiber){if(injectedHook&&typeof injectedHook.onCommitFiberUnmount==='function'){try{injectedHook.onCommitFiberUnmount(rendererID,fiber);}catch(err){{if(!hasLoggedError){hasLoggedError=true;error('React instrumentation encountered an error: %s',err);}}}}}var Scheduler_runWithPriority=Scheduler.unstable_runWithPriority,Scheduler_scheduleCallback=Scheduler.unstable_scheduleCallback,Scheduler_cancelCallback=Scheduler.unstable_cancelCallback,Scheduler_shouldYield=Scheduler.unstable_shouldYield,Scheduler_requestPaint=Scheduler.unstable_requestPaint,Scheduler_now$1=Scheduler.unstable_now,Scheduler_getCurrentPriorityLevel=Scheduler.unstable_getCurrentPriorityLevel,Scheduler_ImmediatePriority=Scheduler.unstable_ImmediatePriority,Scheduler_UserBlockingPriority=Scheduler.unstable_UserBlockingPriority,Scheduler_NormalPriority=Scheduler.unstable_NormalPriority,Scheduler_LowPriority=Scheduler.unstable_LowPriority,Scheduler_IdlePriority=Scheduler.unstable_IdlePriority;{// Provide explicit error message when production+profiling bundle of e.g.
// react-dom is used with production (non-profiling) bundle of
// scheduler/tracing
if(!(tracing.__interactionsRef!=null&&tracing.__interactionsRef.current!=null)){{throw Error("It is not supported to run the profiling version of a renderer (for example, `react-dom/profiling`) without also replacing the `scheduler/tracing` module with `scheduler/tracing-profiling`. Your bundler might have a setting for aliasing both modules. Learn more at https://reactjs.org/link/profiling");}}}var fakeCallbackNode={};// Except for NoPriority, these correspond to Scheduler priorities. We use
// ascending numbers so we can compare them like numbers. They start at 90 to
// avoid clashing with Scheduler's priorities.
var ImmediatePriority$1=99;var UserBlockingPriority$2=98;var NormalPriority$1=97;var LowPriority$1=96;var IdlePriority$1=95;// NoPriority is the absence of priority. Also React-only.
var NoPriority$1=90;var shouldYield=Scheduler_shouldYield;var requestPaint=// Fall back gracefully if we're running an older version of Scheduler.
Scheduler_requestPaint!==undefined?Scheduler_requestPaint:function(){};var syncQueue=null;var immediateQueueCallbackNode=null;var isFlushingSyncQueue=false;var initialTimeMs$1=Scheduler_now$1();// If the initial timestamp is reasonably small, use Scheduler's `now` directly.
// This will be the case for modern browsers that support `performance.now`. In
// older browsers, Scheduler falls back to `Date.now`, which returns a Unix
// timestamp. In that case, subtract the module initialization time to simulate
// the behavior of performance.now and keep our times small enough to fit
// within 32 bits.
// TODO: Consider lifting this into Scheduler.
var now=initialTimeMs$1<10000?Scheduler_now$1:function(){return Scheduler_now$1()-initialTimeMs$1;};function getCurrentPriorityLevel(){switch(Scheduler_getCurrentPriorityLevel()){case Scheduler_ImmediatePriority:return ImmediatePriority$1;case Scheduler_UserBlockingPriority:return UserBlockingPriority$2;case Scheduler_NormalPriority:return NormalPriority$1;case Scheduler_LowPriority:return LowPriority$1;case Scheduler_IdlePriority:return IdlePriority$1;default:{{throw Error("Unknown priority level.");}}}}function reactPriorityToSchedulerPriority(reactPriorityLevel){switch(reactPriorityLevel){case ImmediatePriority$1:return Scheduler_ImmediatePriority;case UserBlockingPriority$2:return Scheduler_UserBlockingPriority;case NormalPriority$1:return Scheduler_NormalPriority;case LowPriority$1:return Scheduler_LowPriority;case IdlePriority$1:return Scheduler_IdlePriority;default:{{throw Error("Unknown priority level.");}}}}function runWithPriority$1(reactPriorityLevel,fn){var priorityLevel=reactPriorityToSchedulerPriority(reactPriorityLevel);return Scheduler_runWithPriority(priorityLevel,fn);}function scheduleCallback(reactPriorityLevel,callback,options){var priorityLevel=reactPriorityToSchedulerPriority(reactPriorityLevel);return Scheduler_scheduleCallback(priorityLevel,callback,options);}function scheduleSyncCallback(callback){// Push this callback into an internal queue. We'll flush these either in
// the next tick, or earlier if something calls `flushSyncCallbackQueue`.
if(syncQueue===null){syncQueue=[callback];// Flush the queue in the next tick, at the earliest.
immediateQueueCallbackNode=Scheduler_scheduleCallback(Scheduler_ImmediatePriority,flushSyncCallbackQueueImpl);}else {// Push onto existing queue. Don't need to schedule a callback because
// we already scheduled one when we created the queue.
syncQueue.push(callback);}return fakeCallbackNode;}function cancelCallback(callbackNode){if(callbackNode!==fakeCallbackNode){Scheduler_cancelCallback(callbackNode);}}function flushSyncCallbackQueue(){if(immediateQueueCallbackNode!==null){var node=immediateQueueCallbackNode;immediateQueueCallbackNode=null;Scheduler_cancelCallback(node);}flushSyncCallbackQueueImpl();}function flushSyncCallbackQueueImpl(){if(!isFlushingSyncQueue&&syncQueue!==null){// Prevent re-entrancy.
isFlushingSyncQueue=true;var i=0;{try{var _isSync2=true;var _queue=syncQueue;runWithPriority$1(ImmediatePriority$1,function(){for(;i<_queue.length;i++){var callback=_queue[i];do{callback=callback(_isSync2);}while(callback!==null);}});syncQueue=null;}catch(error){// If something throws, leave the remaining callbacks on the queue.
if(syncQueue!==null){syncQueue=syncQueue.slice(i+1);}// Resume flushing in the next tick
Scheduler_scheduleCallback(Scheduler_ImmediatePriority,flushSyncCallbackQueue);throw error;}finally{isFlushingSyncQueue=false;}}}}// TODO: this is special because it gets imported during build.
var ReactVersion='17.0.1';var NoMode=0;var StrictMode=1;// TODO: Remove BlockingMode and ConcurrentMode by reading from the root
// tag instead
var BlockingMode=2;var ConcurrentMode=4;var ProfileMode=8;var DebugTracingMode=16;var ReactCurrentBatchConfig=ReactSharedInternals.ReactCurrentBatchConfig;var NoTransition=0;function requestCurrentTransition(){return ReactCurrentBatchConfig.transition;}var ReactStrictModeWarnings={recordUnsafeLifecycleWarnings:function recordUnsafeLifecycleWarnings(fiber,instance){},flushPendingUnsafeLifecycleWarnings:function flushPendingUnsafeLifecycleWarnings(){},recordLegacyContextWarning:function recordLegacyContextWarning(fiber,instance){},flushLegacyContextWarning:function flushLegacyContextWarning(){},discardPendingWarnings:function discardPendingWarnings(){}};{var findStrictRoot=function findStrictRoot(fiber){var maybeStrictRoot=null;var node=fiber;while(node!==null){if(node.mode&StrictMode){maybeStrictRoot=node;}node=node["return"];}return maybeStrictRoot;};var setToSortedString=function setToSortedString(set){var array=[];set.forEach(function(value){array.push(value);});return array.sort().join(', ');};var pendingComponentWillMountWarnings=[];var pendingUNSAFE_ComponentWillMountWarnings=[];var pendingComponentWillReceivePropsWarnings=[];var pendingUNSAFE_ComponentWillReceivePropsWarnings=[];var pendingComponentWillUpdateWarnings=[];var pendingUNSAFE_ComponentWillUpdateWarnings=[];// Tracks components we have already warned about.
var didWarnAboutUnsafeLifecycles=new Set();ReactStrictModeWarnings.recordUnsafeLifecycleWarnings=function(fiber,instance){// Dedup strategy: Warn once per component.
if(didWarnAboutUnsafeLifecycles.has(fiber.type)){return;}if(typeof instance.componentWillMount==='function'&&// Don't warn about react-lifecycles-compat polyfilled components.
instance.componentWillMount.__suppressDeprecationWarning!==true){pendingComponentWillMountWarnings.push(fiber);}if(fiber.mode&StrictMode&&typeof instance.UNSAFE_componentWillMount==='function'){pendingUNSAFE_ComponentWillMountWarnings.push(fiber);}if(typeof instance.componentWillReceiveProps==='function'&&instance.componentWillReceiveProps.__suppressDeprecationWarning!==true){pendingComponentWillReceivePropsWarnings.push(fiber);}if(fiber.mode&StrictMode&&typeof instance.UNSAFE_componentWillReceiveProps==='function'){pendingUNSAFE_ComponentWillReceivePropsWarnings.push(fiber);}if(typeof instance.componentWillUpdate==='function'&&instance.componentWillUpdate.__suppressDeprecationWarning!==true){pendingComponentWillUpdateWarnings.push(fiber);}if(fiber.mode&StrictMode&&typeof instance.UNSAFE_componentWillUpdate==='function'){pendingUNSAFE_ComponentWillUpdateWarnings.push(fiber);}};ReactStrictModeWarnings.flushPendingUnsafeLifecycleWarnings=function(){// We do an initial pass to gather component names
var componentWillMountUniqueNames=new Set();if(pendingComponentWillMountWarnings.length>0){pendingComponentWillMountWarnings.forEach(function(fiber){componentWillMountUniqueNames.add(getComponentName(fiber.type)||'Component');didWarnAboutUnsafeLifecycles.add(fiber.type);});pendingComponentWillMountWarnings=[];}var UNSAFE_componentWillMountUniqueNames=new Set();if(pendingUNSAFE_ComponentWillMountWarnings.length>0){pendingUNSAFE_ComponentWillMountWarnings.forEach(function(fiber){UNSAFE_componentWillMountUniqueNames.add(getComponentName(fiber.type)||'Component');didWarnAboutUnsafeLifecycles.add(fiber.type);});pendingUNSAFE_ComponentWillMountWarnings=[];}var componentWillReceivePropsUniqueNames=new Set();if(pendingComponentWillReceivePropsWarnings.length>0){pendingComponentWillReceivePropsWarnings.forEach(function(fiber){componentWillReceivePropsUniqueNames.add(getComponentName(fiber.type)||'Component');didWarnAboutUnsafeLifecycles.add(fiber.type);});pendingComponentWillReceivePropsWarnings=[];}var UNSAFE_componentWillReceivePropsUniqueNames=new Set();if(pendingUNSAFE_ComponentWillReceivePropsWarnings.length>0){pendingUNSAFE_ComponentWillReceivePropsWarnings.forEach(function(fiber){UNSAFE_componentWillReceivePropsUniqueNames.add(getComponentName(fiber.type)||'Component');didWarnAboutUnsafeLifecycles.add(fiber.type);});pendingUNSAFE_ComponentWillReceivePropsWarnings=[];}var componentWillUpdateUniqueNames=new Set();if(pendingComponentWillUpdateWarnings.length>0){pendingComponentWillUpdateWarnings.forEach(function(fiber){componentWillUpdateUniqueNames.add(getComponentName(fiber.type)||'Component');didWarnAboutUnsafeLifecycles.add(fiber.type);});pendingComponentWillUpdateWarnings=[];}var UNSAFE_componentWillUpdateUniqueNames=new Set();if(pendingUNSAFE_ComponentWillUpdateWarnings.length>0){pendingUNSAFE_ComponentWillUpdateWarnings.forEach(function(fiber){UNSAFE_componentWillUpdateUniqueNames.add(getComponentName(fiber.type)||'Component');didWarnAboutUnsafeLifecycles.add(fiber.type);});pendingUNSAFE_ComponentWillUpdateWarnings=[];}// Finally, we flush all the warnings
// UNSAFE_ ones before the deprecated ones, since they'll be 'louder'
if(UNSAFE_componentWillMountUniqueNames.size>0){var sortedNames=setToSortedString(UNSAFE_componentWillMountUniqueNames);error('Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. '+'See https://reactjs.org/link/unsafe-component-lifecycles for details.\n\n'+'* Move code with side effects to componentDidMount, and set initial state in the constructor.\n'+'\nPlease update the following components: %s',sortedNames);}if(UNSAFE_componentWillReceivePropsUniqueNames.size>0){var _sortedNames=setToSortedString(UNSAFE_componentWillReceivePropsUniqueNames);error('Using UNSAFE_componentWillReceiveProps in strict mode is not recommended '+'and may indicate bugs in your code. '+'See https://reactjs.org/link/unsafe-component-lifecycles for details.\n\n'+'* Move data fetching code or side effects to componentDidUpdate.\n'+"* If you're updating state whenever props change, "+'refactor your code to use memoization techniques or move it to '+'static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state\n'+'\nPlease update the following components: %s',_sortedNames);}if(UNSAFE_componentWillUpdateUniqueNames.size>0){var _sortedNames2=setToSortedString(UNSAFE_componentWillUpdateUniqueNames);error('Using UNSAFE_componentWillUpdate in strict mode is not recommended '+'and may indicate bugs in your code. '+'See https://reactjs.org/link/unsafe-component-lifecycles for details.\n\n'+'* Move data fetching code or side effects to componentDidUpdate.\n'+'\nPlease update the following components: %s',_sortedNames2);}if(componentWillMountUniqueNames.size>0){var _sortedNames3=setToSortedString(componentWillMountUniqueNames);warn('componentWillMount has been renamed, and is not recommended for use. '+'See https://reactjs.org/link/unsafe-component-lifecycles for details.\n\n'+'* Move code with side effects to componentDidMount, and set initial state in the constructor.\n'+'* Rename componentWillMount to UNSAFE_componentWillMount to suppress '+'this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. '+'To rename all deprecated lifecycles to their new names, you can run '+'`npx react-codemod rename-unsafe-lifecycles` in your project source folder.\n'+'\nPlease update the following components: %s',_sortedNames3);}if(componentWillReceivePropsUniqueNames.size>0){var _sortedNames4=setToSortedString(componentWillReceivePropsUniqueNames);warn('componentWillReceiveProps has been renamed, and is not recommended for use. '+'See https://reactjs.org/link/unsafe-component-lifecycles for details.\n\n'+'* Move data fetching code or side effects to componentDidUpdate.\n'+"* If you're updating state whenever props change, refactor your "+'code to use memoization techniques or move it to '+'static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state\n'+'* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress '+'this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. '+'To rename all deprecated lifecycles to their new names, you can run '+'`npx react-codemod rename-unsafe-lifecycles` in your project source folder.\n'+'\nPlease update the following components: %s',_sortedNames4);}if(componentWillUpdateUniqueNames.size>0){var _sortedNames5=setToSortedString(componentWillUpdateUniqueNames);warn('componentWillUpdate has been renamed, and is not recommended for use. '+'See https://reactjs.org/link/unsafe-component-lifecycles for details.\n\n'+'* Move data fetching code or side effects to componentDidUpdate.\n'+'* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress '+'this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. '+'To rename all deprecated lifecycles to their new names, you can run '+'`npx react-codemod rename-unsafe-lifecycles` in your project source folder.\n'+'\nPlease update the following components: %s',_sortedNames5);}};var pendingLegacyContextWarning=new Map();// Tracks components we have already warned about.
var didWarnAboutLegacyContext=new Set();ReactStrictModeWarnings.recordLegacyContextWarning=function(fiber,instance){var strictRoot=findStrictRoot(fiber);if(strictRoot===null){error('Expected to find a StrictMode component in a strict mode tree. '+'This error is likely caused by a bug in React. Please file an issue.');return;}// Dedup strategy: Warn once per component.
if(didWarnAboutLegacyContext.has(fiber.type)){return;}var warningsForRoot=pendingLegacyContextWarning.get(strictRoot);if(fiber.type.contextTypes!=null||fiber.type.childContextTypes!=null||instance!==null&&typeof instance.getChildContext==='function'){if(warningsForRoot===undefined){warningsForRoot=[];pendingLegacyContextWarning.set(strictRoot,warningsForRoot);}warningsForRoot.push(fiber);}};ReactStrictModeWarnings.flushLegacyContextWarning=function(){pendingLegacyContextWarning.forEach(function(fiberArray,strictRoot){if(fiberArray.length===0){return;}var firstFiber=fiberArray[0];var uniqueNames=new Set();fiberArray.forEach(function(fiber){uniqueNames.add(getComponentName(fiber.type)||'Component');didWarnAboutLegacyContext.add(fiber.type);});var sortedNames=setToSortedString(uniqueNames);try{setCurrentFiber(firstFiber);error('Legacy context API has been detected within a strict-mode tree.'+'\n\nThe old API will be supported in all 16.x releases, but applications '+'using it should migrate to the new version.'+'\n\nPlease update the following components: %s'+'\n\nLearn more about this warning here: https://reactjs.org/link/legacy-context',sortedNames);}finally{resetCurrentFiber();}});};ReactStrictModeWarnings.discardPendingWarnings=function(){pendingComponentWillMountWarnings=[];pendingUNSAFE_ComponentWillMountWarnings=[];pendingComponentWillReceivePropsWarnings=[];pendingUNSAFE_ComponentWillReceivePropsWarnings=[];pendingComponentWillUpdateWarnings=[];pendingUNSAFE_ComponentWillUpdateWarnings=[];pendingLegacyContextWarning=new Map();};}function resolveDefaultProps(Component,baseProps){if(Component&&Component.defaultProps){// Resolve default props. Taken from ReactElement
var props=_assign({},baseProps);var defaultProps=Component.defaultProps;for(var propName in defaultProps){if(props[propName]===undefined){props[propName]=defaultProps[propName];}}return props;}return baseProps;}// Max 31 bit integer. The max integer size in V8 for 32-bit systems.
// Math.pow(2, 30) - 1
// 0b111111111111111111111111111111
var MAX_SIGNED_31_BIT_INT=1073741823;var valueCursor=createCursor(null);var rendererSigil;{// Use this to detect multiple renderers using the same context
rendererSigil={};}var currentlyRenderingFiber=null;var lastContextDependency=null;var lastContextWithAllBitsObserved=null;var isDisallowedContextReadInDEV=false;function resetContextDependencies(){// This is called right before React yields execution, to ensure `readContext`
// cannot be called outside the render phase.
currentlyRenderingFiber=null;lastContextDependency=null;lastContextWithAllBitsObserved=null;{isDisallowedContextReadInDEV=false;}}function enterDisallowedContextReadInDEV(){{isDisallowedContextReadInDEV=true;}}function exitDisallowedContextReadInDEV(){{isDisallowedContextReadInDEV=false;}}function pushProvider(providerFiber,nextValue){var context=providerFiber.type._context;{push(valueCursor,context._currentValue,providerFiber);context._currentValue=nextValue;{if(context._currentRenderer!==undefined&&context._currentRenderer!==null&&context._currentRenderer!==rendererSigil){error('Detected multiple renderers concurrently rendering the '+'same context provider. This is currently unsupported.');}context._currentRenderer=rendererSigil;}}}function popProvider(providerFiber){var currentValue=valueCursor.current;pop(valueCursor,providerFiber);var context=providerFiber.type._context;{context._currentValue=currentValue;}}function calculateChangedBits(context,newValue,oldValue){if(objectIs(oldValue,newValue)){// No change
return 0;}else {var changedBits=typeof context._calculateChangedBits==='function'?context._calculateChangedBits(oldValue,newValue):MAX_SIGNED_31_BIT_INT;{if((changedBits&MAX_SIGNED_31_BIT_INT)!==changedBits){error('calculateChangedBits: Expected the return value to be a '+'31-bit integer. Instead received: %s',changedBits);}}return changedBits|0;}}function scheduleWorkOnParentPath(parent,renderLanes){// Update the child lanes of all the ancestors, including the alternates.
var node=parent;while(node!==null){var alternate=node.alternate;if(!isSubsetOfLanes(node.childLanes,renderLanes)){node.childLanes=mergeLanes(node.childLanes,renderLanes);if(alternate!==null){alternate.childLanes=mergeLanes(alternate.childLanes,renderLanes);}}else if(alternate!==null&&!isSubsetOfLanes(alternate.childLanes,renderLanes)){alternate.childLanes=mergeLanes(alternate.childLanes,renderLanes);}else {// Neither alternate was updated, which means the rest of the
// ancestor path already has sufficient priority.
break;}node=node["return"];}}function propagateContextChange(workInProgress,context,changedBits,renderLanes){var fiber=workInProgress.child;if(fiber!==null){// Set the return pointer of the child to the work-in-progress fiber.
fiber["return"]=workInProgress;}while(fiber!==null){var nextFiber=void 0;// Visit this fiber.
var list=fiber.dependencies;if(list!==null){nextFiber=fiber.child;var dependency=list.firstContext;while(dependency!==null){// Check if the context matches.
if(dependency.context===context&&(dependency.observedBits&changedBits)!==0){// Match! Schedule an update on this fiber.
if(fiber.tag===ClassComponent){// Schedule a force update on the work-in-progress.
var update=createUpdate(NoTimestamp,pickArbitraryLane(renderLanes));update.tag=ForceUpdate;// TODO: Because we don't have a work-in-progress, this will add the
// update to the current fiber, too, which means it will persist even if
// this render is thrown away. Since it's a race condition, not sure it's
// worth fixing.
enqueueUpdate(fiber,update);}fiber.lanes=mergeLanes(fiber.lanes,renderLanes);var alternate=fiber.alternate;if(alternate!==null){alternate.lanes=mergeLanes(alternate.lanes,renderLanes);}scheduleWorkOnParentPath(fiber["return"],renderLanes);// Mark the updated lanes on the list, too.
list.lanes=mergeLanes(list.lanes,renderLanes);// Since we already found a match, we can stop traversing the
// dependency list.
break;}dependency=dependency.next;}}else if(fiber.tag===ContextProvider){// Don't scan deeper if this is a matching provider
nextFiber=fiber.type===workInProgress.type?null:fiber.child;}else {// Traverse down.
nextFiber=fiber.child;}if(nextFiber!==null){// Set the return pointer of the child to the work-in-progress fiber.
nextFiber["return"]=fiber;}else {// No child. Traverse to next sibling.
nextFiber=fiber;while(nextFiber!==null){if(nextFiber===workInProgress){// We're back to the root of this subtree. Exit.
nextFiber=null;break;}var sibling=nextFiber.sibling;if(sibling!==null){// Set the return pointer of the sibling to the work-in-progress fiber.
sibling["return"]=nextFiber["return"];nextFiber=sibling;break;}// No more siblings. Traverse up.
nextFiber=nextFiber["return"];}}fiber=nextFiber;}}function prepareToReadContext(workInProgress,renderLanes){currentlyRenderingFiber=workInProgress;lastContextDependency=null;lastContextWithAllBitsObserved=null;var dependencies=workInProgress.dependencies;if(dependencies!==null){var firstContext=dependencies.firstContext;if(firstContext!==null){if(includesSomeLane(dependencies.lanes,renderLanes)){// Context list has a pending update. Mark that this fiber performed work.
markWorkInProgressReceivedUpdate();}// Reset the work-in-progress list
dependencies.firstContext=null;}}}function _readContext(context,observedBits){{// This warning would fire if you read context inside a Hook like useMemo.
// Unlike the class check below, it's not enforced in production for perf.
if(isDisallowedContextReadInDEV){error('Context can only be read while React is rendering. '+'In classes, you can read it in the render method or getDerivedStateFromProps. '+'In function components, you can read it directly in the function body, but not '+'inside Hooks like useReducer() or useMemo().');}}if(lastContextWithAllBitsObserved===context);else if(observedBits===false||observedBits===0);else {var resolvedObservedBits;// Avoid deopting on observable arguments or heterogeneous types.
if(typeof observedBits!=='number'||observedBits===MAX_SIGNED_31_BIT_INT){// Observe all updates.
lastContextWithAllBitsObserved=context;resolvedObservedBits=MAX_SIGNED_31_BIT_INT;}else {resolvedObservedBits=observedBits;}var contextItem={context:context,observedBits:resolvedObservedBits,next:null};if(lastContextDependency===null){if(!(currentlyRenderingFiber!==null)){{throw Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");}}// This is the first dependency for this component. Create a new list.
lastContextDependency=contextItem;currentlyRenderingFiber.dependencies={lanes:NoLanes,firstContext:contextItem,responders:null};}else {// Append a new context item.
lastContextDependency=lastContextDependency.next=contextItem;}}return context._currentValue;}var UpdateState=0;var ReplaceState=1;var ForceUpdate=2;var CaptureUpdate=3;// Global state that is reset at the beginning of calling `processUpdateQueue`.
// It should only be read right after calling `processUpdateQueue`, via
// `checkHasForceUpdateAfterProcessing`.
var hasForceUpdate=false;var didWarnUpdateInsideUpdate;var currentlyProcessingQueue;{didWarnUpdateInsideUpdate=false;currentlyProcessingQueue=null;}function initializeUpdateQueue(fiber){var queue={baseState:fiber.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null},effects:null};fiber.updateQueue=queue;}function cloneUpdateQueue(current,workInProgress){// Clone the update queue from current. Unless it's already a clone.
var queue=workInProgress.updateQueue;var currentQueue=current.updateQueue;if(queue===currentQueue){var clone={baseState:currentQueue.baseState,firstBaseUpdate:currentQueue.firstBaseUpdate,lastBaseUpdate:currentQueue.lastBaseUpdate,shared:currentQueue.shared,effects:currentQueue.effects};workInProgress.updateQueue=clone;}}function createUpdate(eventTime,lane){var update={eventTime:eventTime,lane:lane,tag:UpdateState,payload:null,callback:null,next:null};return update;}function enqueueUpdate(fiber,update){var updateQueue=fiber.updateQueue;if(updateQueue===null){// Only occurs if the fiber has been unmounted.
return;}var sharedQueue=updateQueue.shared;var pending=sharedQueue.pending;if(pending===null){// This is the first update. Create a circular list.
update.next=update;}else {update.next=pending.next;pending.next=update;}sharedQueue.pending=update;{if(currentlyProcessingQueue===sharedQueue&&!didWarnUpdateInsideUpdate){error('An update (setState, replaceState, or forceUpdate) was scheduled '+'from inside an update function. Update functions should be pure, '+'with zero side-effects. Consider using componentDidUpdate or a '+'callback.');didWarnUpdateInsideUpdate=true;}}}function enqueueCapturedUpdate(workInProgress,capturedUpdate){// Captured updates are updates that are thrown by a child during the render
// phase. They should be discarded if the render is aborted. Therefore,
// we should only put them on the work-in-progress queue, not the current one.
var queue=workInProgress.updateQueue;// Check if the work-in-progress queue is a clone.
var current=workInProgress.alternate;if(current!==null){var currentQueue=current.updateQueue;if(queue===currentQueue){// The work-in-progress queue is the same as current. This happens when
// we bail out on a parent fiber that then captures an error thrown by
// a child. Since we want to append the update only to the work-in
// -progress queue, we need to clone the updates. We usually clone during
// processUpdateQueue, but that didn't happen in this case because we
// skipped over the parent when we bailed out.
var newFirst=null;var newLast=null;var firstBaseUpdate=queue.firstBaseUpdate;if(firstBaseUpdate!==null){// Loop through the updates and clone them.
var update=firstBaseUpdate;do{var clone={eventTime:update.eventTime,lane:update.lane,tag:update.tag,payload:update.payload,callback:update.callback,next:null};if(newLast===null){newFirst=newLast=clone;}else {newLast.next=clone;newLast=clone;}update=update.next;}while(update!==null);// Append the captured update the end of the cloned list.
if(newLast===null){newFirst=newLast=capturedUpdate;}else {newLast.next=capturedUpdate;newLast=capturedUpdate;}}else {// There are no base updates.
newFirst=newLast=capturedUpdate;}queue={baseState:currentQueue.baseState,firstBaseUpdate:newFirst,lastBaseUpdate:newLast,shared:currentQueue.shared,effects:currentQueue.effects};workInProgress.updateQueue=queue;return;}}// Append the update to the end of the list.
var lastBaseUpdate=queue.lastBaseUpdate;if(lastBaseUpdate===null){queue.firstBaseUpdate=capturedUpdate;}else {lastBaseUpdate.next=capturedUpdate;}queue.lastBaseUpdate=capturedUpdate;}function getStateFromUpdate(workInProgress,queue,update,prevState,nextProps,instance){switch(update.tag){case ReplaceState:{var payload=update.payload;if(typeof payload==='function'){// Updater function
{enterDisallowedContextReadInDEV();}var nextState=payload.call(instance,prevState,nextProps);{if(workInProgress.mode&StrictMode){disableLogs();try{payload.call(instance,prevState,nextProps);}finally{reenableLogs();}}exitDisallowedContextReadInDEV();}return nextState;}// State object
return payload;}case CaptureUpdate:{workInProgress.flags=workInProgress.flags&~ShouldCapture|DidCapture;}// Intentional fallthrough
case UpdateState:{var _payload=update.payload;var partialState;if(typeof _payload==='function'){// Updater function
{enterDisallowedContextReadInDEV();}partialState=_payload.call(instance,prevState,nextProps);{if(workInProgress.mode&StrictMode){disableLogs();try{_payload.call(instance,prevState,nextProps);}finally{reenableLogs();}}exitDisallowedContextReadInDEV();}}else {// Partial state object
partialState=_payload;}if(partialState===null||partialState===undefined){// Null and undefined are treated as no-ops.
return prevState;}// Merge the partial state and the previous state.
return _assign({},prevState,partialState);}case ForceUpdate:{hasForceUpdate=true;return prevState;}}return prevState;}function processUpdateQueue(workInProgress,props,instance,renderLanes){// This is always non-null on a ClassComponent or HostRoot
var queue=workInProgress.updateQueue;hasForceUpdate=false;{currentlyProcessingQueue=queue.shared;}var firstBaseUpdate=queue.firstBaseUpdate;var lastBaseUpdate=queue.lastBaseUpdate;// Check if there are pending updates. If so, transfer them to the base queue.
var pendingQueue=queue.shared.pending;if(pendingQueue!==null){queue.shared.pending=null;// The pending queue is circular. Disconnect the pointer between first
// and last so that it's non-circular.
var lastPendingUpdate=pendingQueue;var firstPendingUpdate=lastPendingUpdate.next;lastPendingUpdate.next=null;// Append pending updates to base queue
if(lastBaseUpdate===null){firstBaseUpdate=firstPendingUpdate;}else {lastBaseUpdate.next=firstPendingUpdate;}lastBaseUpdate=lastPendingUpdate;// If there's a current queue, and it's different from the base queue, then
// we need to transfer the updates to that queue, too. Because the base
// queue is a singly-linked list with no cycles, we can append to both
// lists and take advantage of structural sharing.
// TODO: Pass `current` as argument
var current=workInProgress.alternate;if(current!==null){// This is always non-null on a ClassComponent or HostRoot
var currentQueue=current.updateQueue;var currentLastBaseUpdate=currentQueue.lastBaseUpdate;if(currentLastBaseUpdate!==lastBaseUpdate){if(currentLastBaseUpdate===null){currentQueue.firstBaseUpdate=firstPendingUpdate;}else {currentLastBaseUpdate.next=firstPendingUpdate;}currentQueue.lastBaseUpdate=lastPendingUpdate;}}}// These values may change as we process the queue.
if(firstBaseUpdate!==null){// Iterate through the list of updates to compute the result.
var newState=queue.baseState;// TODO: Don't need to accumulate this. Instead, we can remove renderLanes
// from the original lanes.
var newLanes=NoLanes;var newBaseState=null;var newFirstBaseUpdate=null;var newLastBaseUpdate=null;var update=firstBaseUpdate;do{var updateLane=update.lane;var updateEventTime=update.eventTime;if(!isSubsetOfLanes(renderLanes,updateLane)){// Priority is insufficient. Skip this update. If this is the first
// skipped update, the previous update/state is the new base
// update/state.
var clone={eventTime:updateEventTime,lane:updateLane,tag:update.tag,payload:update.payload,callback:update.callback,next:null};if(newLastBaseUpdate===null){newFirstBaseUpdate=newLastBaseUpdate=clone;newBaseState=newState;}else {newLastBaseUpdate=newLastBaseUpdate.next=clone;}// Update the remaining priority in the queue.
newLanes=mergeLanes(newLanes,updateLane);}else {// This update does have sufficient priority.
if(newLastBaseUpdate!==null){var _clone={eventTime:updateEventTime,// This update is going to be committed so we never want uncommit
// it. Using NoLane works because 0 is a subset of all bitmasks, so
// this will never be skipped by the check above.
lane:NoLane,tag:update.tag,payload:update.payload,callback:update.callback,next:null};newLastBaseUpdate=newLastBaseUpdate.next=_clone;}// Process this update.
newState=getStateFromUpdate(workInProgress,queue,update,newState,props,instance);var callback=update.callback;if(callback!==null){workInProgress.flags|=Callback;var effects=queue.effects;if(effects===null){queue.effects=[update];}else {effects.push(update);}}}update=update.next;if(update===null){pendingQueue=queue.shared.pending;if(pendingQueue===null){break;}else {// An update was scheduled from inside a reducer. Add the new
// pending updates to the end of the list and keep processing.
var _lastPendingUpdate=pendingQueue;// Intentionally unsound. Pending updates form a circular list, but we
// unravel them when transferring them to the base queue.
var _firstPendingUpdate=_lastPendingUpdate.next;_lastPendingUpdate.next=null;update=_firstPendingUpdate;queue.lastBaseUpdate=_lastPendingUpdate;queue.shared.pending=null;}}}while(true);if(newLastBaseUpdate===null){newBaseState=newState;}queue.baseState=newBaseState;queue.firstBaseUpdate=newFirstBaseUpdate;queue.lastBaseUpdate=newLastBaseUpdate;// Set the remaining expiration time to be whatever is remaining in the queue.
// This should be fine because the only two other things that contribute to
// expiration time are props and context. We're already in the middle of the
// begin phase by the time we start processing the queue, so we've already
// dealt with the props. Context in components that specify
// shouldComponentUpdate is tricky; but we'll have to account for
// that regardless.
markSkippedUpdateLanes(newLanes);workInProgress.lanes=newLanes;workInProgress.memoizedState=newState;}{currentlyProcessingQueue=null;}}function callCallback(callback,context){if(!(typeof callback==='function')){{throw Error("Invalid argument passed as callback. Expected a function. Instead received: "+callback);}}callback.call(context);}function resetHasForceUpdateBeforeProcessing(){hasForceUpdate=false;}function checkHasForceUpdateAfterProcessing(){return hasForceUpdate;}function commitUpdateQueue(finishedWork,finishedQueue,instance){// Commit the effects
var effects=finishedQueue.effects;finishedQueue.effects=null;if(effects!==null){for(var i=0;i<effects.length;i++){var effect=effects[i];var callback=effect.callback;if(callback!==null){effect.callback=null;callCallback(callback,instance);}}}}var fakeInternalInstance={};var isArray=Array.isArray;// React.Component uses a shared frozen object by default.
// We'll use it to determine whether we need to initialize legacy refs.
var emptyRefsObject=new React.Component().refs;var didWarnAboutStateAssignmentForComponent;var didWarnAboutUninitializedState;var didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate;var didWarnAboutLegacyLifecyclesAndDerivedState;var didWarnAboutUndefinedDerivedState;var warnOnUndefinedDerivedState;var warnOnInvalidCallback;var didWarnAboutDirectlyAssigningPropsToState;var didWarnAboutContextTypeAndContextTypes;var didWarnAboutInvalidateContextType;{didWarnAboutStateAssignmentForComponent=new Set();didWarnAboutUninitializedState=new Set();didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate=new Set();didWarnAboutLegacyLifecyclesAndDerivedState=new Set();didWarnAboutDirectlyAssigningPropsToState=new Set();didWarnAboutUndefinedDerivedState=new Set();didWarnAboutContextTypeAndContextTypes=new Set();didWarnAboutInvalidateContextType=new Set();var didWarnOnInvalidCallback=new Set();warnOnInvalidCallback=function warnOnInvalidCallback(callback,callerName){if(callback===null||typeof callback==='function'){return;}var key=callerName+'_'+callback;if(!didWarnOnInvalidCallback.has(key)){didWarnOnInvalidCallback.add(key);error('%s(...): Expected the last optional `callback` argument to be a '+'function. Instead received: %s.',callerName,callback);}};warnOnUndefinedDerivedState=function warnOnUndefinedDerivedState(type,partialState){if(partialState===undefined){var componentName=getComponentName(type)||'Component';if(!didWarnAboutUndefinedDerivedState.has(componentName)){didWarnAboutUndefinedDerivedState.add(componentName);error('%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. '+'You have returned undefined.',componentName);}}};// This is so gross but it's at least non-critical and can be removed if
// it causes problems. This is meant to give a nicer error message for
// ReactDOM15.unstable_renderSubtreeIntoContainer(reactDOM16Component,
// ...)) which otherwise throws a "_processChildContext is not a function"
// exception.
Object.defineProperty(fakeInternalInstance,'_processChildContext',{enumerable:false,value:function value(){{{throw Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");}}}});Object.freeze(fakeInternalInstance);}function applyDerivedStateFromProps(workInProgress,ctor,getDerivedStateFromProps,nextProps){var prevState=workInProgress.memoizedState;{if(workInProgress.mode&StrictMode){disableLogs();try{// Invoke the function an extra time to help detect side-effects.
getDerivedStateFromProps(nextProps,prevState);}finally{reenableLogs();}}}var partialState=getDerivedStateFromProps(nextProps,prevState);{warnOnUndefinedDerivedState(ctor,partialState);}// Merge the partial state and the previous state.
var memoizedState=partialState===null||partialState===undefined?prevState:_assign({},prevState,partialState);workInProgress.memoizedState=memoizedState;// Once the update queue is empty, persist the derived state onto the
// base state.
if(workInProgress.lanes===NoLanes){// Queue is always non-null for classes
var updateQueue=workInProgress.updateQueue;updateQueue.baseState=memoizedState;}}var classComponentUpdater={isMounted:isMounted,enqueueSetState:function enqueueSetState(inst,payload,callback){var fiber=get(inst);var eventTime=requestEventTime();var lane=requestUpdateLane(fiber);var update=createUpdate(eventTime,lane);update.payload=payload;if(callback!==undefined&&callback!==null){{warnOnInvalidCallback(callback,'setState');}update.callback=callback;}enqueueUpdate(fiber,update);scheduleUpdateOnFiber(fiber,lane,eventTime);},enqueueReplaceState:function enqueueReplaceState(inst,payload,callback){var fiber=get(inst);var eventTime=requestEventTime();var lane=requestUpdateLane(fiber);var update=createUpdate(eventTime,lane);update.tag=ReplaceState;update.payload=payload;if(callback!==undefined&&callback!==null){{warnOnInvalidCallback(callback,'replaceState');}update.callback=callback;}enqueueUpdate(fiber,update);scheduleUpdateOnFiber(fiber,lane,eventTime);},enqueueForceUpdate:function enqueueForceUpdate(inst,callback){var fiber=get(inst);var eventTime=requestEventTime();var lane=requestUpdateLane(fiber);var update=createUpdate(eventTime,lane);update.tag=ForceUpdate;if(callback!==undefined&&callback!==null){{warnOnInvalidCallback(callback,'forceUpdate');}update.callback=callback;}enqueueUpdate(fiber,update);scheduleUpdateOnFiber(fiber,lane,eventTime);}};function checkShouldComponentUpdate(workInProgress,ctor,oldProps,newProps,oldState,newState,nextContext){var instance=workInProgress.stateNode;if(typeof instance.shouldComponentUpdate==='function'){{if(workInProgress.mode&StrictMode){disableLogs();try{// Invoke the function an extra time to help detect side-effects.
instance.shouldComponentUpdate(newProps,newState,nextContext);}finally{reenableLogs();}}}var shouldUpdate=instance.shouldComponentUpdate(newProps,newState,nextContext);{if(shouldUpdate===undefined){error('%s.shouldComponentUpdate(): Returned undefined instead of a '+'boolean value. Make sure to return true or false.',getComponentName(ctor)||'Component');}}return shouldUpdate;}if(ctor.prototype&&ctor.prototype.isPureReactComponent){return !shallowEqual(oldProps,newProps)||!shallowEqual(oldState,newState);}return true;}function checkClassInstance(workInProgress,ctor,newProps){var instance=workInProgress.stateNode;{var name=getComponentName(ctor)||'Component';var renderPresent=instance.render;if(!renderPresent){if(ctor.prototype&&typeof ctor.prototype.render==='function'){error('%s(...): No `render` method found on the returned component '+'instance: did you accidentally return an object from the constructor?',name);}else {error('%s(...): No `render` method found on the returned component '+'instance: you may have forgotten to define `render`.',name);}}if(instance.getInitialState&&!instance.getInitialState.isReactClassApproved&&!instance.state){error('getInitialState was defined on %s, a plain JavaScript class. '+'This is only supported for classes created using React.createClass. '+'Did you mean to define a state property instead?',name);}if(instance.getDefaultProps&&!instance.getDefaultProps.isReactClassApproved){error('getDefaultProps was defined on %s, a plain JavaScript class. '+'This is only supported for classes created using React.createClass. '+'Use a static property to define defaultProps instead.',name);}if(instance.propTypes){error('propTypes was defined as an instance property on %s. Use a static '+'property to define propTypes instead.',name);}if(instance.contextType){error('contextType was defined as an instance property on %s. Use a static '+'property to define contextType instead.',name);}{if(instance.contextTypes){error('contextTypes was defined as an instance property on %s. Use a static '+'property to define contextTypes instead.',name);}if(ctor.contextType&&ctor.contextTypes&&!didWarnAboutContextTypeAndContextTypes.has(ctor)){didWarnAboutContextTypeAndContextTypes.add(ctor);error('%s declares both contextTypes and contextType static properties. '+'The legacy contextTypes property will be ignored.',name);}}if(typeof instance.componentShouldUpdate==='function'){error('%s has a method called '+'componentShouldUpdate(). Did you mean shouldComponentUpdate()? '+'The name is phrased as a question because the function is '+'expected to return a value.',name);}if(ctor.prototype&&ctor.prototype.isPureReactComponent&&typeof instance.shouldComponentUpdate!=='undefined'){error('%s has a method called shouldComponentUpdate(). '+'shouldComponentUpdate should not be used when extending React.PureComponent. '+'Please extend React.Component if shouldComponentUpdate is used.',getComponentName(ctor)||'A pure component');}if(typeof instance.componentDidUnmount==='function'){error('%s has a method called '+'componentDidUnmount(). But there is no such lifecycle method. '+'Did you mean componentWillUnmount()?',name);}if(typeof instance.componentDidReceiveProps==='function'){error('%s has a method called '+'componentDidReceiveProps(). But there is no such lifecycle method. '+'If you meant to update the state in response to changing props, '+'use componentWillReceiveProps(). If you meant to fetch data or '+'run side-effects or mutations after React has updated the UI, use componentDidUpdate().',name);}if(typeof instance.componentWillRecieveProps==='function'){error('%s has a method called '+'componentWillRecieveProps(). Did you mean componentWillReceiveProps()?',name);}if(typeof instance.UNSAFE_componentWillRecieveProps==='function'){error('%s has a method called '+'UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?',name);}var hasMutatedProps=instance.props!==newProps;if(instance.props!==undefined&&hasMutatedProps){error('%s(...): When calling super() in `%s`, make sure to pass '+"up the same props that your component's constructor was passed.",name,name);}if(instance.defaultProps){error('Setting defaultProps as an instance property on %s is not supported and will be ignored.'+' Instead, define defaultProps as a static property on %s.',name,name);}if(typeof instance.getSnapshotBeforeUpdate==='function'&&typeof instance.componentDidUpdate!=='function'&&!didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate.has(ctor)){didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate.add(ctor);error('%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). '+'This component defines getSnapshotBeforeUpdate() only.',getComponentName(ctor));}if(typeof instance.getDerivedStateFromProps==='function'){error('%s: getDerivedStateFromProps() is defined as an instance method '+'and will be ignored. Instead, declare it as a static method.',name);}if(typeof instance.getDerivedStateFromError==='function'){error('%s: getDerivedStateFromError() is defined as an instance method '+'and will be ignored. Instead, declare it as a static method.',name);}if(typeof ctor.getSnapshotBeforeUpdate==='function'){error('%s: getSnapshotBeforeUpdate() is defined as a static method '+'and will be ignored. Instead, declare it as an instance method.',name);}var _state=instance.state;if(_state&&(_typeof$1(_state)!=='object'||isArray(_state))){error('%s.state: must be set to an object or null',name);}if(typeof instance.getChildContext==='function'&&_typeof$1(ctor.childContextTypes)!=='object'){error('%s.getChildContext(): childContextTypes must be defined in order to '+'use getChildContext().',name);}}}function adoptClassInstance(workInProgress,instance){instance.updater=classComponentUpdater;workInProgress.stateNode=instance;// The instance needs access to the fiber so that it can schedule updates
set(instance,workInProgress);{instance._reactInternalInstance=fakeInternalInstance;}}function constructClassInstance(workInProgress,ctor,props){var isLegacyContextConsumer=false;var unmaskedContext=emptyContextObject;var context=emptyContextObject;var contextType=ctor.contextType;{if('contextType'in ctor){var isValid=// Allow null for conditional declaration
contextType===null||contextType!==undefined&&contextType.$$typeof===REACT_CONTEXT_TYPE&&contextType._context===undefined;// Not a <Context.Consumer>
if(!isValid&&!didWarnAboutInvalidateContextType.has(ctor)){didWarnAboutInvalidateContextType.add(ctor);var addendum='';if(contextType===undefined){addendum=' However, it is set to undefined. '+'This can be caused by a typo or by mixing up named and default imports. '+'This can also happen due to a circular dependency, so '+'try moving the createContext() call to a separate file.';}else if(_typeof$1(contextType)!=='object'){addendum=' However, it is set to a '+_typeof$1(contextType)+'.';}else if(contextType.$$typeof===REACT_PROVIDER_TYPE){addendum=' Did you accidentally pass the Context.Provider instead?';}else if(contextType._context!==undefined){// <Context.Consumer>
addendum=' Did you accidentally pass the Context.Consumer instead?';}else {addendum=' However, it is set to an object with keys {'+Object.keys(contextType).join(', ')+'}.';}error('%s defines an invalid contextType. '+'contextType should point to the Context object returned by React.createContext().%s',getComponentName(ctor)||'Component',addendum);}}}if(_typeof$1(contextType)==='object'&&contextType!==null){context=_readContext(contextType);}else {unmaskedContext=getUnmaskedContext(workInProgress,ctor,true);var contextTypes=ctor.contextTypes;isLegacyContextConsumer=contextTypes!==null&&contextTypes!==undefined;context=isLegacyContextConsumer?getMaskedContext(workInProgress,unmaskedContext):emptyContextObject;}// Instantiate twice to help detect side-effects.
{if(workInProgress.mode&StrictMode){disableLogs();try{new ctor(props,context);// eslint-disable-line no-new
}finally{reenableLogs();}}}var instance=new ctor(props,context);var state=workInProgress.memoizedState=instance.state!==null&&instance.state!==undefined?instance.state:null;adoptClassInstance(workInProgress,instance);{if(typeof ctor.getDerivedStateFromProps==='function'&&state===null){var componentName=getComponentName(ctor)||'Component';if(!didWarnAboutUninitializedState.has(componentName)){didWarnAboutUninitializedState.add(componentName);error('`%s` uses `getDerivedStateFromProps` but its initial state is '+'%s. This is not recommended. Instead, define the initial state by '+'assigning an object to `this.state` in the constructor of `%s`. '+'This ensures that `getDerivedStateFromProps` arguments have a consistent shape.',componentName,instance.state===null?'null':'undefined',componentName);}}// If new component APIs are defined, "unsafe" lifecycles won't be called.
// Warn about these lifecycles if they are present.
// Don't warn about react-lifecycles-compat polyfilled methods though.
if(typeof ctor.getDerivedStateFromProps==='function'||typeof instance.getSnapshotBeforeUpdate==='function'){var foundWillMountName=null;var foundWillReceivePropsName=null;var foundWillUpdateName=null;if(typeof instance.componentWillMount==='function'&&instance.componentWillMount.__suppressDeprecationWarning!==true){foundWillMountName='componentWillMount';}else if(typeof instance.UNSAFE_componentWillMount==='function'){foundWillMountName='UNSAFE_componentWillMount';}if(typeof instance.componentWillReceiveProps==='function'&&instance.componentWillReceiveProps.__suppressDeprecationWarning!==true){foundWillReceivePropsName='componentWillReceiveProps';}else if(typeof instance.UNSAFE_componentWillReceiveProps==='function'){foundWillReceivePropsName='UNSAFE_componentWillReceiveProps';}if(typeof instance.componentWillUpdate==='function'&&instance.componentWillUpdate.__suppressDeprecationWarning!==true){foundWillUpdateName='componentWillUpdate';}else if(typeof instance.UNSAFE_componentWillUpdate==='function'){foundWillUpdateName='UNSAFE_componentWillUpdate';}if(foundWillMountName!==null||foundWillReceivePropsName!==null||foundWillUpdateName!==null){var _componentName=getComponentName(ctor)||'Component';var newApiName=typeof ctor.getDerivedStateFromProps==='function'?'getDerivedStateFromProps()':'getSnapshotBeforeUpdate()';if(!didWarnAboutLegacyLifecyclesAndDerivedState.has(_componentName)){didWarnAboutLegacyLifecyclesAndDerivedState.add(_componentName);error('Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n'+'%s uses %s but also contains the following legacy lifecycles:%s%s%s\n\n'+'The above lifecycles should be removed. Learn more about this warning here:\n'+'https://reactjs.org/link/unsafe-component-lifecycles',_componentName,newApiName,foundWillMountName!==null?"\n  "+foundWillMountName:'',foundWillReceivePropsName!==null?"\n  "+foundWillReceivePropsName:'',foundWillUpdateName!==null?"\n  "+foundWillUpdateName:'');}}}}// Cache unmasked context so we can avoid recreating masked context unless necessary.
// ReactFiberContext usually updates this cache but can't for newly-created instances.
if(isLegacyContextConsumer){cacheContext(workInProgress,unmaskedContext,context);}return instance;}function callComponentWillMount(workInProgress,instance){var oldState=instance.state;if(typeof instance.componentWillMount==='function'){instance.componentWillMount();}if(typeof instance.UNSAFE_componentWillMount==='function'){instance.UNSAFE_componentWillMount();}if(oldState!==instance.state){{error('%s.componentWillMount(): Assigning directly to this.state is '+"deprecated (except inside a component's "+'constructor). Use setState instead.',getComponentName(workInProgress.type)||'Component');}classComponentUpdater.enqueueReplaceState(instance,instance.state,null);}}function callComponentWillReceiveProps(workInProgress,instance,newProps,nextContext){var oldState=instance.state;if(typeof instance.componentWillReceiveProps==='function'){instance.componentWillReceiveProps(newProps,nextContext);}if(typeof instance.UNSAFE_componentWillReceiveProps==='function'){instance.UNSAFE_componentWillReceiveProps(newProps,nextContext);}if(instance.state!==oldState){{var componentName=getComponentName(workInProgress.type)||'Component';if(!didWarnAboutStateAssignmentForComponent.has(componentName)){didWarnAboutStateAssignmentForComponent.add(componentName);error('%s.componentWillReceiveProps(): Assigning directly to '+"this.state is deprecated (except inside a component's "+'constructor). Use setState instead.',componentName);}}classComponentUpdater.enqueueReplaceState(instance,instance.state,null);}}// Invokes the mount life-cycles on a previously never rendered instance.
function mountClassInstance(workInProgress,ctor,newProps,renderLanes){{checkClassInstance(workInProgress,ctor,newProps);}var instance=workInProgress.stateNode;instance.props=newProps;instance.state=workInProgress.memoizedState;instance.refs=emptyRefsObject;initializeUpdateQueue(workInProgress);var contextType=ctor.contextType;if(_typeof$1(contextType)==='object'&&contextType!==null){instance.context=_readContext(contextType);}else {var unmaskedContext=getUnmaskedContext(workInProgress,ctor,true);instance.context=getMaskedContext(workInProgress,unmaskedContext);}{if(instance.state===newProps){var componentName=getComponentName(ctor)||'Component';if(!didWarnAboutDirectlyAssigningPropsToState.has(componentName)){didWarnAboutDirectlyAssigningPropsToState.add(componentName);error('%s: It is not recommended to assign props directly to state '+"because updates to props won't be reflected in state. "+'In most cases, it is better to use props directly.',componentName);}}if(workInProgress.mode&StrictMode){ReactStrictModeWarnings.recordLegacyContextWarning(workInProgress,instance);}{ReactStrictModeWarnings.recordUnsafeLifecycleWarnings(workInProgress,instance);}}processUpdateQueue(workInProgress,newProps,instance,renderLanes);instance.state=workInProgress.memoizedState;var getDerivedStateFromProps=ctor.getDerivedStateFromProps;if(typeof getDerivedStateFromProps==='function'){applyDerivedStateFromProps(workInProgress,ctor,getDerivedStateFromProps,newProps);instance.state=workInProgress.memoizedState;}// In order to support react-lifecycles-compat polyfilled components,
// Unsafe lifecycles should not be invoked for components using the new APIs.
if(typeof ctor.getDerivedStateFromProps!=='function'&&typeof instance.getSnapshotBeforeUpdate!=='function'&&(typeof instance.UNSAFE_componentWillMount==='function'||typeof instance.componentWillMount==='function')){callComponentWillMount(workInProgress,instance);// If we had additional state updates during this life-cycle, let's
// process them now.
processUpdateQueue(workInProgress,newProps,instance,renderLanes);instance.state=workInProgress.memoizedState;}if(typeof instance.componentDidMount==='function'){workInProgress.flags|=Update;}}function resumeMountClassInstance(workInProgress,ctor,newProps,renderLanes){var instance=workInProgress.stateNode;var oldProps=workInProgress.memoizedProps;instance.props=oldProps;var oldContext=instance.context;var contextType=ctor.contextType;var nextContext=emptyContextObject;if(_typeof$1(contextType)==='object'&&contextType!==null){nextContext=_readContext(contextType);}else {var nextLegacyUnmaskedContext=getUnmaskedContext(workInProgress,ctor,true);nextContext=getMaskedContext(workInProgress,nextLegacyUnmaskedContext);}var getDerivedStateFromProps=ctor.getDerivedStateFromProps;var hasNewLifecycles=typeof getDerivedStateFromProps==='function'||typeof instance.getSnapshotBeforeUpdate==='function';// Note: During these life-cycles, instance.props/instance.state are what
// ever the previously attempted to render - not the "current". However,
// during componentDidUpdate we pass the "current" props.
// In order to support react-lifecycles-compat polyfilled components,
// Unsafe lifecycles should not be invoked for components using the new APIs.
if(!hasNewLifecycles&&(typeof instance.UNSAFE_componentWillReceiveProps==='function'||typeof instance.componentWillReceiveProps==='function')){if(oldProps!==newProps||oldContext!==nextContext){callComponentWillReceiveProps(workInProgress,instance,newProps,nextContext);}}resetHasForceUpdateBeforeProcessing();var oldState=workInProgress.memoizedState;var newState=instance.state=oldState;processUpdateQueue(workInProgress,newProps,instance,renderLanes);newState=workInProgress.memoizedState;if(oldProps===newProps&&oldState===newState&&!hasContextChanged()&&!checkHasForceUpdateAfterProcessing()){// If an update was already in progress, we should schedule an Update
// effect even though we're bailing out, so that cWU/cDU are called.
if(typeof instance.componentDidMount==='function'){workInProgress.flags|=Update;}return false;}if(typeof getDerivedStateFromProps==='function'){applyDerivedStateFromProps(workInProgress,ctor,getDerivedStateFromProps,newProps);newState=workInProgress.memoizedState;}var shouldUpdate=checkHasForceUpdateAfterProcessing()||checkShouldComponentUpdate(workInProgress,ctor,oldProps,newProps,oldState,newState,nextContext);if(shouldUpdate){// In order to support react-lifecycles-compat polyfilled components,
// Unsafe lifecycles should not be invoked for components using the new APIs.
if(!hasNewLifecycles&&(typeof instance.UNSAFE_componentWillMount==='function'||typeof instance.componentWillMount==='function')){if(typeof instance.componentWillMount==='function'){instance.componentWillMount();}if(typeof instance.UNSAFE_componentWillMount==='function'){instance.UNSAFE_componentWillMount();}}if(typeof instance.componentDidMount==='function'){workInProgress.flags|=Update;}}else {// If an update was already in progress, we should schedule an Update
// effect even though we're bailing out, so that cWU/cDU are called.
if(typeof instance.componentDidMount==='function'){workInProgress.flags|=Update;}// If shouldComponentUpdate returned false, we should still update the
// memoized state to indicate that this work can be reused.
workInProgress.memoizedProps=newProps;workInProgress.memoizedState=newState;}// Update the existing instance's state, props, and context pointers even
// if shouldComponentUpdate returns false.
instance.props=newProps;instance.state=newState;instance.context=nextContext;return shouldUpdate;}// Invokes the update life-cycles and returns false if it shouldn't rerender.
function updateClassInstance(current,workInProgress,ctor,newProps,renderLanes){var instance=workInProgress.stateNode;cloneUpdateQueue(current,workInProgress);var unresolvedOldProps=workInProgress.memoizedProps;var oldProps=workInProgress.type===workInProgress.elementType?unresolvedOldProps:resolveDefaultProps(workInProgress.type,unresolvedOldProps);instance.props=oldProps;var unresolvedNewProps=workInProgress.pendingProps;var oldContext=instance.context;var contextType=ctor.contextType;var nextContext=emptyContextObject;if(_typeof$1(contextType)==='object'&&contextType!==null){nextContext=_readContext(contextType);}else {var nextUnmaskedContext=getUnmaskedContext(workInProgress,ctor,true);nextContext=getMaskedContext(workInProgress,nextUnmaskedContext);}var getDerivedStateFromProps=ctor.getDerivedStateFromProps;var hasNewLifecycles=typeof getDerivedStateFromProps==='function'||typeof instance.getSnapshotBeforeUpdate==='function';// Note: During these life-cycles, instance.props/instance.state are what
// ever the previously attempted to render - not the "current". However,
// during componentDidUpdate we pass the "current" props.
// In order to support react-lifecycles-compat polyfilled components,
// Unsafe lifecycles should not be invoked for components using the new APIs.
if(!hasNewLifecycles&&(typeof instance.UNSAFE_componentWillReceiveProps==='function'||typeof instance.componentWillReceiveProps==='function')){if(unresolvedOldProps!==unresolvedNewProps||oldContext!==nextContext){callComponentWillReceiveProps(workInProgress,instance,newProps,nextContext);}}resetHasForceUpdateBeforeProcessing();var oldState=workInProgress.memoizedState;var newState=instance.state=oldState;processUpdateQueue(workInProgress,newProps,instance,renderLanes);newState=workInProgress.memoizedState;if(unresolvedOldProps===unresolvedNewProps&&oldState===newState&&!hasContextChanged()&&!checkHasForceUpdateAfterProcessing()){// If an update was already in progress, we should schedule an Update
// effect even though we're bailing out, so that cWU/cDU are called.
if(typeof instance.componentDidUpdate==='function'){if(unresolvedOldProps!==current.memoizedProps||oldState!==current.memoizedState){workInProgress.flags|=Update;}}if(typeof instance.getSnapshotBeforeUpdate==='function'){if(unresolvedOldProps!==current.memoizedProps||oldState!==current.memoizedState){workInProgress.flags|=Snapshot;}}return false;}if(typeof getDerivedStateFromProps==='function'){applyDerivedStateFromProps(workInProgress,ctor,getDerivedStateFromProps,newProps);newState=workInProgress.memoizedState;}var shouldUpdate=checkHasForceUpdateAfterProcessing()||checkShouldComponentUpdate(workInProgress,ctor,oldProps,newProps,oldState,newState,nextContext);if(shouldUpdate){// In order to support react-lifecycles-compat polyfilled components,
// Unsafe lifecycles should not be invoked for components using the new APIs.
if(!hasNewLifecycles&&(typeof instance.UNSAFE_componentWillUpdate==='function'||typeof instance.componentWillUpdate==='function')){if(typeof instance.componentWillUpdate==='function'){instance.componentWillUpdate(newProps,newState,nextContext);}if(typeof instance.UNSAFE_componentWillUpdate==='function'){instance.UNSAFE_componentWillUpdate(newProps,newState,nextContext);}}if(typeof instance.componentDidUpdate==='function'){workInProgress.flags|=Update;}if(typeof instance.getSnapshotBeforeUpdate==='function'){workInProgress.flags|=Snapshot;}}else {// If an update was already in progress, we should schedule an Update
// effect even though we're bailing out, so that cWU/cDU are called.
if(typeof instance.componentDidUpdate==='function'){if(unresolvedOldProps!==current.memoizedProps||oldState!==current.memoizedState){workInProgress.flags|=Update;}}if(typeof instance.getSnapshotBeforeUpdate==='function'){if(unresolvedOldProps!==current.memoizedProps||oldState!==current.memoizedState){workInProgress.flags|=Snapshot;}}// If shouldComponentUpdate returned false, we should still update the
// memoized props/state to indicate that this work can be reused.
workInProgress.memoizedProps=newProps;workInProgress.memoizedState=newState;}// Update the existing instance's state, props, and context pointers even
// if shouldComponentUpdate returns false.
instance.props=newProps;instance.state=newState;instance.context=nextContext;return shouldUpdate;}var didWarnAboutMaps;var didWarnAboutGenerators;var didWarnAboutStringRefs;var ownerHasKeyUseWarning;var ownerHasFunctionTypeWarning;var warnForMissingKey=function warnForMissingKey(child,returnFiber){};{didWarnAboutMaps=false;didWarnAboutGenerators=false;didWarnAboutStringRefs={};/**
   * Warn if there's no key explicitly set on dynamic arrays of children or
   * object keys are not valid. This allows us to keep track of children between
   * updates.
   */ownerHasKeyUseWarning={};ownerHasFunctionTypeWarning={};warnForMissingKey=function warnForMissingKey(child,returnFiber){if(child===null||_typeof$1(child)!=='object'){return;}if(!child._store||child._store.validated||child.key!=null){return;}if(!(_typeof$1(child._store)==='object')){{throw Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");}}child._store.validated=true;var componentName=getComponentName(returnFiber.type)||'Component';if(ownerHasKeyUseWarning[componentName]){return;}ownerHasKeyUseWarning[componentName]=true;error('Each child in a list should have a unique '+'"key" prop. See https://reactjs.org/link/warning-keys for '+'more information.');};}var isArray$1=Array.isArray;function coerceRef(returnFiber,current,element){var mixedRef=element.ref;if(mixedRef!==null&&typeof mixedRef!=='function'&&_typeof$1(mixedRef)!=='object'){{// TODO: Clean this up once we turn on the string ref warning for
// everyone, because the strict mode case will no longer be relevant
if((returnFiber.mode&StrictMode||warnAboutStringRefs)&&// We warn in ReactElement.js if owner and self are equal for string refs
// because these cannot be automatically converted to an arrow function
// using a codemod. Therefore, we don't have to warn about string refs again.
!(element._owner&&element._self&&element._owner.stateNode!==element._self)){var componentName=getComponentName(returnFiber.type)||'Component';if(!didWarnAboutStringRefs[componentName]){{error('A string ref, "%s", has been found within a strict mode tree. '+'String refs are a source of potential bugs and should be avoided. '+'We recommend using useRef() or createRef() instead. '+'Learn more about using refs safely here: '+'https://reactjs.org/link/strict-mode-string-ref',mixedRef);}didWarnAboutStringRefs[componentName]=true;}}}if(element._owner){var owner=element._owner;var inst;if(owner){var ownerFiber=owner;if(!(ownerFiber.tag===ClassComponent)){{throw Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");}}inst=ownerFiber.stateNode;}if(!inst){{throw Error("Missing owner for string ref "+mixedRef+". This error is likely caused by a bug in React. Please file an issue.");}}var stringRef=''+mixedRef;// Check if previous string ref matches new string ref
if(current!==null&&current.ref!==null&&typeof current.ref==='function'&&current.ref._stringRef===stringRef){return current.ref;}var ref=function ref(value){var refs=inst.refs;if(refs===emptyRefsObject){// This is a lazy pooled frozen object, so we need to initialize.
refs=inst.refs={};}if(value===null){delete refs[stringRef];}else {refs[stringRef]=value;}};ref._stringRef=stringRef;return ref;}else {if(!(typeof mixedRef==='string')){{throw Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");}}if(!element._owner){{throw Error("Element ref was specified as a string ("+mixedRef+") but no owner was set. This could happen for one of the following reasons:\n1. You may be adding a ref to a function component\n2. You may be adding a ref to a component that was not created inside a component's render method\n3. You have multiple copies of React loaded\nSee https://reactjs.org/link/refs-must-have-owner for more information.");}}}}return mixedRef;}function throwOnInvalidObjectType(returnFiber,newChild){if(returnFiber.type!=='textarea'){{{throw Error("Objects are not valid as a React child (found: "+(Object.prototype.toString.call(newChild)==='[object Object]'?'object with keys {'+Object.keys(newChild).join(', ')+'}':newChild)+"). If you meant to render a collection of children, use an array instead.");}}}}function warnOnFunctionType(returnFiber){{var componentName=getComponentName(returnFiber.type)||'Component';if(ownerHasFunctionTypeWarning[componentName]){return;}ownerHasFunctionTypeWarning[componentName]=true;error('Functions are not valid as a React child. This may happen if '+'you return a Component instead of <Component /> from render. '+'Or maybe you meant to call this function rather than return it.');}}// We avoid inlining this to avoid potential deopts from using try/catch.
// to be able to optimize each path individually by branching early. This needs
// a compiler or we can do it manually. Helpers that don't need this branching
// live outside of this function.
function ChildReconciler(shouldTrackSideEffects){function deleteChild(returnFiber,childToDelete){if(!shouldTrackSideEffects){// Noop.
return;}// Deletions are added in reversed order so we add it to the front.
// At this point, the return fiber's effect list is empty except for
// deletions, so we can just append the deletion to the list. The remaining
// effects aren't added until the complete phase. Once we implement
// resuming, this may not be true.
var last=returnFiber.lastEffect;if(last!==null){last.nextEffect=childToDelete;returnFiber.lastEffect=childToDelete;}else {returnFiber.firstEffect=returnFiber.lastEffect=childToDelete;}childToDelete.nextEffect=null;childToDelete.flags=Deletion;}function deleteRemainingChildren(returnFiber,currentFirstChild){if(!shouldTrackSideEffects){// Noop.
return null;}// TODO: For the shouldClone case, this could be micro-optimized a bit by
// assuming that after the first child we've already added everything.
var childToDelete=currentFirstChild;while(childToDelete!==null){deleteChild(returnFiber,childToDelete);childToDelete=childToDelete.sibling;}return null;}function mapRemainingChildren(returnFiber,currentFirstChild){// Add the remaining children to a temporary map so that we can find them by
// keys quickly. Implicit (null) keys get added to this set with their index
// instead.
var existingChildren=new Map();var existingChild=currentFirstChild;while(existingChild!==null){if(existingChild.key!==null){existingChildren.set(existingChild.key,existingChild);}else {existingChildren.set(existingChild.index,existingChild);}existingChild=existingChild.sibling;}return existingChildren;}function useFiber(fiber,pendingProps){// We currently set sibling to null and index to 0 here because it is easy
// to forget to do before returning it. E.g. for the single child case.
var clone=createWorkInProgress(fiber,pendingProps);clone.index=0;clone.sibling=null;return clone;}function placeChild(newFiber,lastPlacedIndex,newIndex){newFiber.index=newIndex;if(!shouldTrackSideEffects){// Noop.
return lastPlacedIndex;}var current=newFiber.alternate;if(current!==null){var oldIndex=current.index;if(oldIndex<lastPlacedIndex){// This is a move.
newFiber.flags=Placement;return lastPlacedIndex;}else {// This item can stay in place.
return oldIndex;}}else {// This is an insertion.
newFiber.flags=Placement;return lastPlacedIndex;}}function placeSingleChild(newFiber){// This is simpler for the single child case. We only need to do a
// placement for inserting new children.
if(shouldTrackSideEffects&&newFiber.alternate===null){newFiber.flags=Placement;}return newFiber;}function updateTextNode(returnFiber,current,textContent,lanes){if(current===null||current.tag!==HostText){// Insert
var created=createFiberFromText(textContent,returnFiber.mode,lanes);created["return"]=returnFiber;return created;}else {// Update
var existing=useFiber(current,textContent);existing["return"]=returnFiber;return existing;}}function updateElement(returnFiber,current,element,lanes){if(current!==null){if(current.elementType===element.type||// Keep this check inline so it only runs on the false path:
isCompatibleFamilyForHotReloading(current,element)){// Move based on index
var existing=useFiber(current,element.props);existing.ref=coerceRef(returnFiber,current,element);existing["return"]=returnFiber;{existing._debugSource=element._source;existing._debugOwner=element._owner;}return existing;}}// Insert
var created=createFiberFromElement(element,returnFiber.mode,lanes);created.ref=coerceRef(returnFiber,current,element);created["return"]=returnFiber;return created;}function updatePortal(returnFiber,current,portal,lanes){if(current===null||current.tag!==HostPortal||current.stateNode.containerInfo!==portal.containerInfo||current.stateNode.implementation!==portal.implementation){// Insert
var created=createFiberFromPortal(portal,returnFiber.mode,lanes);created["return"]=returnFiber;return created;}else {// Update
var existing=useFiber(current,portal.children||[]);existing["return"]=returnFiber;return existing;}}function updateFragment(returnFiber,current,fragment,lanes,key){if(current===null||current.tag!==Fragment){// Insert
var created=createFiberFromFragment(fragment,returnFiber.mode,lanes,key);created["return"]=returnFiber;return created;}else {// Update
var existing=useFiber(current,fragment);existing["return"]=returnFiber;return existing;}}function createChild(returnFiber,newChild,lanes){if(typeof newChild==='string'||typeof newChild==='number'){// Text nodes don't have keys. If the previous node is implicitly keyed
// we can continue to replace it without aborting even if it is not a text
// node.
var created=createFiberFromText(''+newChild,returnFiber.mode,lanes);created["return"]=returnFiber;return created;}if(_typeof$1(newChild)==='object'&&newChild!==null){switch(newChild.$$typeof){case REACT_ELEMENT_TYPE:{var _created=createFiberFromElement(newChild,returnFiber.mode,lanes);_created.ref=coerceRef(returnFiber,null,newChild);_created["return"]=returnFiber;return _created;}case REACT_PORTAL_TYPE:{var _created2=createFiberFromPortal(newChild,returnFiber.mode,lanes);_created2["return"]=returnFiber;return _created2;}}if(isArray$1(newChild)||getIteratorFn(newChild)){var _created3=createFiberFromFragment(newChild,returnFiber.mode,lanes,null);_created3["return"]=returnFiber;return _created3;}throwOnInvalidObjectType(returnFiber,newChild);}{if(typeof newChild==='function'){warnOnFunctionType(returnFiber);}}return null;}function updateSlot(returnFiber,oldFiber,newChild,lanes){// Update the fiber if the keys match, otherwise return null.
var key=oldFiber!==null?oldFiber.key:null;if(typeof newChild==='string'||typeof newChild==='number'){// Text nodes don't have keys. If the previous node is implicitly keyed
// we can continue to replace it without aborting even if it is not a text
// node.
if(key!==null){return null;}return updateTextNode(returnFiber,oldFiber,''+newChild,lanes);}if(_typeof$1(newChild)==='object'&&newChild!==null){switch(newChild.$$typeof){case REACT_ELEMENT_TYPE:{if(newChild.key===key){if(newChild.type===REACT_FRAGMENT_TYPE){return updateFragment(returnFiber,oldFiber,newChild.props.children,lanes,key);}return updateElement(returnFiber,oldFiber,newChild,lanes);}else {return null;}}case REACT_PORTAL_TYPE:{if(newChild.key===key){return updatePortal(returnFiber,oldFiber,newChild,lanes);}else {return null;}}}if(isArray$1(newChild)||getIteratorFn(newChild)){if(key!==null){return null;}return updateFragment(returnFiber,oldFiber,newChild,lanes,null);}throwOnInvalidObjectType(returnFiber,newChild);}{if(typeof newChild==='function'){warnOnFunctionType(returnFiber);}}return null;}function updateFromMap(existingChildren,returnFiber,newIdx,newChild,lanes){if(typeof newChild==='string'||typeof newChild==='number'){// Text nodes don't have keys, so we neither have to check the old nor
// new node for the key. If both are text nodes, they match.
var matchedFiber=existingChildren.get(newIdx)||null;return updateTextNode(returnFiber,matchedFiber,''+newChild,lanes);}if(_typeof$1(newChild)==='object'&&newChild!==null){switch(newChild.$$typeof){case REACT_ELEMENT_TYPE:{var _matchedFiber=existingChildren.get(newChild.key===null?newIdx:newChild.key)||null;if(newChild.type===REACT_FRAGMENT_TYPE){return updateFragment(returnFiber,_matchedFiber,newChild.props.children,lanes,newChild.key);}return updateElement(returnFiber,_matchedFiber,newChild,lanes);}case REACT_PORTAL_TYPE:{var _matchedFiber2=existingChildren.get(newChild.key===null?newIdx:newChild.key)||null;return updatePortal(returnFiber,_matchedFiber2,newChild,lanes);}}if(isArray$1(newChild)||getIteratorFn(newChild)){var _matchedFiber3=existingChildren.get(newIdx)||null;return updateFragment(returnFiber,_matchedFiber3,newChild,lanes,null);}throwOnInvalidObjectType(returnFiber,newChild);}{if(typeof newChild==='function'){warnOnFunctionType(returnFiber);}}return null;}/**
   * Warns if there is a duplicate or missing key
   */function warnOnInvalidKey(child,knownKeys,returnFiber){{if(_typeof$1(child)!=='object'||child===null){return knownKeys;}switch(child.$$typeof){case REACT_ELEMENT_TYPE:case REACT_PORTAL_TYPE:warnForMissingKey(child,returnFiber);var key=child.key;if(typeof key!=='string'){break;}if(knownKeys===null){knownKeys=new Set();knownKeys.add(key);break;}if(!knownKeys.has(key)){knownKeys.add(key);break;}error('Encountered two children with the same key, `%s`. '+'Keys should be unique so that components maintain their identity '+'across updates. Non-unique keys may cause children to be '+'duplicated and/or omitted — the behavior is unsupported and '+'could change in a future version.',key);break;}}return knownKeys;}function reconcileChildrenArray(returnFiber,currentFirstChild,newChildren,lanes){// This algorithm can't optimize by searching from both ends since we
// don't have backpointers on fibers. I'm trying to see how far we can get
// with that model. If it ends up not being worth the tradeoffs, we can
// add it later.
// Even with a two ended optimization, we'd want to optimize for the case
// where there are few changes and brute force the comparison instead of
// going for the Map. It'd like to explore hitting that path first in
// forward-only mode and only go for the Map once we notice that we need
// lots of look ahead. This doesn't handle reversal as well as two ended
// search but that's unusual. Besides, for the two ended optimization to
// work on Iterables, we'd need to copy the whole set.
// In this first iteration, we'll just live with hitting the bad case
// (adding everything to a Map) in for every insert/move.
// If you change this code, also update reconcileChildrenIterator() which
// uses the same algorithm.
{// First, validate keys.
var knownKeys=null;for(var i=0;i<newChildren.length;i++){var child=newChildren[i];knownKeys=warnOnInvalidKey(child,knownKeys,returnFiber);}}var resultingFirstChild=null;var previousNewFiber=null;var oldFiber=currentFirstChild;var lastPlacedIndex=0;var newIdx=0;var nextOldFiber=null;for(;oldFiber!==null&&newIdx<newChildren.length;newIdx++){if(oldFiber.index>newIdx){nextOldFiber=oldFiber;oldFiber=null;}else {nextOldFiber=oldFiber.sibling;}var newFiber=updateSlot(returnFiber,oldFiber,newChildren[newIdx],lanes);if(newFiber===null){// TODO: This breaks on empty slots like null children. That's
// unfortunate because it triggers the slow path all the time. We need
// a better way to communicate whether this was a miss or null,
// boolean, undefined, etc.
if(oldFiber===null){oldFiber=nextOldFiber;}break;}if(shouldTrackSideEffects){if(oldFiber&&newFiber.alternate===null){// We matched the slot, but we didn't reuse the existing fiber, so we
// need to delete the existing child.
deleteChild(returnFiber,oldFiber);}}lastPlacedIndex=placeChild(newFiber,lastPlacedIndex,newIdx);if(previousNewFiber===null){// TODO: Move out of the loop. This only happens for the first run.
resultingFirstChild=newFiber;}else {// TODO: Defer siblings if we're not at the right index for this slot.
// I.e. if we had null values before, then we want to defer this
// for each null value. However, we also don't want to call updateSlot
// with the previous one.
previousNewFiber.sibling=newFiber;}previousNewFiber=newFiber;oldFiber=nextOldFiber;}if(newIdx===newChildren.length){// We've reached the end of the new children. We can delete the rest.
deleteRemainingChildren(returnFiber,oldFiber);return resultingFirstChild;}if(oldFiber===null){// If we don't have any more existing children we can choose a fast path
// since the rest will all be insertions.
for(;newIdx<newChildren.length;newIdx++){var _newFiber=createChild(returnFiber,newChildren[newIdx],lanes);if(_newFiber===null){continue;}lastPlacedIndex=placeChild(_newFiber,lastPlacedIndex,newIdx);if(previousNewFiber===null){// TODO: Move out of the loop. This only happens for the first run.
resultingFirstChild=_newFiber;}else {previousNewFiber.sibling=_newFiber;}previousNewFiber=_newFiber;}return resultingFirstChild;}// Add all children to a key map for quick lookups.
var existingChildren=mapRemainingChildren(returnFiber,oldFiber);// Keep scanning and use the map to restore deleted items as moves.
for(;newIdx<newChildren.length;newIdx++){var _newFiber2=updateFromMap(existingChildren,returnFiber,newIdx,newChildren[newIdx],lanes);if(_newFiber2!==null){if(shouldTrackSideEffects){if(_newFiber2.alternate!==null){// The new fiber is a work in progress, but if there exists a
// current, that means that we reused the fiber. We need to delete
// it from the child list so that we don't add it to the deletion
// list.
existingChildren["delete"](_newFiber2.key===null?newIdx:_newFiber2.key);}}lastPlacedIndex=placeChild(_newFiber2,lastPlacedIndex,newIdx);if(previousNewFiber===null){resultingFirstChild=_newFiber2;}else {previousNewFiber.sibling=_newFiber2;}previousNewFiber=_newFiber2;}}if(shouldTrackSideEffects){// Any existing children that weren't consumed above were deleted. We need
// to add them to the deletion list.
existingChildren.forEach(function(child){return deleteChild(returnFiber,child);});}return resultingFirstChild;}function reconcileChildrenIterator(returnFiber,currentFirstChild,newChildrenIterable,lanes){// This is the same implementation as reconcileChildrenArray(),
// but using the iterator instead.
var iteratorFn=getIteratorFn(newChildrenIterable);if(!(typeof iteratorFn==='function')){{throw Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");}}{// We don't support rendering Generators because it's a mutation.
// See https://github.com/facebook/react/issues/12995
if(typeof Symbol==='function'&&// $FlowFixMe Flow doesn't know about toStringTag
newChildrenIterable[Symbol.toStringTag]==='Generator'){if(!didWarnAboutGenerators){error('Using Generators as children is unsupported and will likely yield '+'unexpected results because enumerating a generator mutates it. '+'You may convert it to an array with `Array.from()` or the '+'`[...spread]` operator before rendering. Keep in mind '+'you might need to polyfill these features for older browsers.');}didWarnAboutGenerators=true;}// Warn about using Maps as children
if(newChildrenIterable.entries===iteratorFn){if(!didWarnAboutMaps){error('Using Maps as children is not supported. '+'Use an array of keyed ReactElements instead.');}didWarnAboutMaps=true;}// First, validate keys.
// We'll get a different iterator later for the main pass.
var _newChildren=iteratorFn.call(newChildrenIterable);if(_newChildren){var knownKeys=null;var _step=_newChildren.next();for(;!_step.done;_step=_newChildren.next()){var child=_step.value;knownKeys=warnOnInvalidKey(child,knownKeys,returnFiber);}}}var newChildren=iteratorFn.call(newChildrenIterable);if(!(newChildren!=null)){{throw Error("An iterable object provided no iterator.");}}var resultingFirstChild=null;var previousNewFiber=null;var oldFiber=currentFirstChild;var lastPlacedIndex=0;var newIdx=0;var nextOldFiber=null;var step=newChildren.next();for(;oldFiber!==null&&!step.done;newIdx++,step=newChildren.next()){if(oldFiber.index>newIdx){nextOldFiber=oldFiber;oldFiber=null;}else {nextOldFiber=oldFiber.sibling;}var newFiber=updateSlot(returnFiber,oldFiber,step.value,lanes);if(newFiber===null){// TODO: This breaks on empty slots like null children. That's
// unfortunate because it triggers the slow path all the time. We need
// a better way to communicate whether this was a miss or null,
// boolean, undefined, etc.
if(oldFiber===null){oldFiber=nextOldFiber;}break;}if(shouldTrackSideEffects){if(oldFiber&&newFiber.alternate===null){// We matched the slot, but we didn't reuse the existing fiber, so we
// need to delete the existing child.
deleteChild(returnFiber,oldFiber);}}lastPlacedIndex=placeChild(newFiber,lastPlacedIndex,newIdx);if(previousNewFiber===null){// TODO: Move out of the loop. This only happens for the first run.
resultingFirstChild=newFiber;}else {// TODO: Defer siblings if we're not at the right index for this slot.
// I.e. if we had null values before, then we want to defer this
// for each null value. However, we also don't want to call updateSlot
// with the previous one.
previousNewFiber.sibling=newFiber;}previousNewFiber=newFiber;oldFiber=nextOldFiber;}if(step.done){// We've reached the end of the new children. We can delete the rest.
deleteRemainingChildren(returnFiber,oldFiber);return resultingFirstChild;}if(oldFiber===null){// If we don't have any more existing children we can choose a fast path
// since the rest will all be insertions.
for(;!step.done;newIdx++,step=newChildren.next()){var _newFiber3=createChild(returnFiber,step.value,lanes);if(_newFiber3===null){continue;}lastPlacedIndex=placeChild(_newFiber3,lastPlacedIndex,newIdx);if(previousNewFiber===null){// TODO: Move out of the loop. This only happens for the first run.
resultingFirstChild=_newFiber3;}else {previousNewFiber.sibling=_newFiber3;}previousNewFiber=_newFiber3;}return resultingFirstChild;}// Add all children to a key map for quick lookups.
var existingChildren=mapRemainingChildren(returnFiber,oldFiber);// Keep scanning and use the map to restore deleted items as moves.
for(;!step.done;newIdx++,step=newChildren.next()){var _newFiber4=updateFromMap(existingChildren,returnFiber,newIdx,step.value,lanes);if(_newFiber4!==null){if(shouldTrackSideEffects){if(_newFiber4.alternate!==null){// The new fiber is a work in progress, but if there exists a
// current, that means that we reused the fiber. We need to delete
// it from the child list so that we don't add it to the deletion
// list.
existingChildren["delete"](_newFiber4.key===null?newIdx:_newFiber4.key);}}lastPlacedIndex=placeChild(_newFiber4,lastPlacedIndex,newIdx);if(previousNewFiber===null){resultingFirstChild=_newFiber4;}else {previousNewFiber.sibling=_newFiber4;}previousNewFiber=_newFiber4;}}if(shouldTrackSideEffects){// Any existing children that weren't consumed above were deleted. We need
// to add them to the deletion list.
existingChildren.forEach(function(child){return deleteChild(returnFiber,child);});}return resultingFirstChild;}function reconcileSingleTextNode(returnFiber,currentFirstChild,textContent,lanes){// There's no need to check for keys on text nodes since we don't have a
// way to define them.
if(currentFirstChild!==null&&currentFirstChild.tag===HostText){// We already have an existing node so let's just update it and delete
// the rest.
deleteRemainingChildren(returnFiber,currentFirstChild.sibling);var existing=useFiber(currentFirstChild,textContent);existing["return"]=returnFiber;return existing;}// The existing first child is not a text node so we need to create one
// and delete the existing ones.
deleteRemainingChildren(returnFiber,currentFirstChild);var created=createFiberFromText(textContent,returnFiber.mode,lanes);created["return"]=returnFiber;return created;}function reconcileSingleElement(returnFiber,currentFirstChild,element,lanes){var key=element.key;var child=currentFirstChild;while(child!==null){// TODO: If key === null and child.key === null, then this only applies to
// the first item in the list.
if(child.key===key){switch(child.tag){case Fragment:{if(element.type===REACT_FRAGMENT_TYPE){deleteRemainingChildren(returnFiber,child.sibling);var existing=useFiber(child,element.props.children);existing["return"]=returnFiber;{existing._debugSource=element._source;existing._debugOwner=element._owner;}return existing;}break;}case Block:// We intentionally fallthrough here if enableBlocksAPI is not on.
// eslint-disable-next-lined no-fallthrough
default:{if(child.elementType===element.type||// Keep this check inline so it only runs on the false path:
isCompatibleFamilyForHotReloading(child,element)){deleteRemainingChildren(returnFiber,child.sibling);var _existing3=useFiber(child,element.props);_existing3.ref=coerceRef(returnFiber,child,element);_existing3["return"]=returnFiber;{_existing3._debugSource=element._source;_existing3._debugOwner=element._owner;}return _existing3;}break;}}// Didn't match.
deleteRemainingChildren(returnFiber,child);break;}else {deleteChild(returnFiber,child);}child=child.sibling;}if(element.type===REACT_FRAGMENT_TYPE){var created=createFiberFromFragment(element.props.children,returnFiber.mode,lanes,element.key);created["return"]=returnFiber;return created;}else {var _created4=createFiberFromElement(element,returnFiber.mode,lanes);_created4.ref=coerceRef(returnFiber,currentFirstChild,element);_created4["return"]=returnFiber;return _created4;}}function reconcileSinglePortal(returnFiber,currentFirstChild,portal,lanes){var key=portal.key;var child=currentFirstChild;while(child!==null){// TODO: If key === null and child.key === null, then this only applies to
// the first item in the list.
if(child.key===key){if(child.tag===HostPortal&&child.stateNode.containerInfo===portal.containerInfo&&child.stateNode.implementation===portal.implementation){deleteRemainingChildren(returnFiber,child.sibling);var existing=useFiber(child,portal.children||[]);existing["return"]=returnFiber;return existing;}else {deleteRemainingChildren(returnFiber,child);break;}}else {deleteChild(returnFiber,child);}child=child.sibling;}var created=createFiberFromPortal(portal,returnFiber.mode,lanes);created["return"]=returnFiber;return created;}// This API will tag the children with the side-effect of the reconciliation
// itself. They will be added to the side-effect list as we pass through the
// children and the parent.
function reconcileChildFibers(returnFiber,currentFirstChild,newChild,lanes){// This function is not recursive.
// If the top level item is an array, we treat it as a set of children,
// not as a fragment. Nested arrays on the other hand will be treated as
// fragment nodes. Recursion happens at the normal flow.
// Handle top level unkeyed fragments as if they were arrays.
// This leads to an ambiguity between <>{[...]}</> and <>...</>.
// We treat the ambiguous cases above the same.
var isUnkeyedTopLevelFragment=_typeof$1(newChild)==='object'&&newChild!==null&&newChild.type===REACT_FRAGMENT_TYPE&&newChild.key===null;if(isUnkeyedTopLevelFragment){newChild=newChild.props.children;}// Handle object types
var isObject=_typeof$1(newChild)==='object'&&newChild!==null;if(isObject){switch(newChild.$$typeof){case REACT_ELEMENT_TYPE:return placeSingleChild(reconcileSingleElement(returnFiber,currentFirstChild,newChild,lanes));case REACT_PORTAL_TYPE:return placeSingleChild(reconcileSinglePortal(returnFiber,currentFirstChild,newChild,lanes));}}if(typeof newChild==='string'||typeof newChild==='number'){return placeSingleChild(reconcileSingleTextNode(returnFiber,currentFirstChild,''+newChild,lanes));}if(isArray$1(newChild)){return reconcileChildrenArray(returnFiber,currentFirstChild,newChild,lanes);}if(getIteratorFn(newChild)){return reconcileChildrenIterator(returnFiber,currentFirstChild,newChild,lanes);}if(isObject){throwOnInvalidObjectType(returnFiber,newChild);}{if(typeof newChild==='function'){warnOnFunctionType(returnFiber);}}if(typeof newChild==='undefined'&&!isUnkeyedTopLevelFragment){// If the new child is undefined, and the return fiber is a composite
// component, throw an error. If Fiber return types are disabled,
// we already threw above.
switch(returnFiber.tag){case ClassComponent:{{var instance=returnFiber.stateNode;if(instance.render._isMockFunction){// We allow auto-mocks to proceed as if they're returning null.
break;}}}// Intentionally fall through to the next case, which handles both
// functions and classes
// eslint-disable-next-lined no-fallthrough
case Block:case FunctionComponent:case ForwardRef:case SimpleMemoComponent:{{{throw Error((getComponentName(returnFiber.type)||'Component')+"(...): Nothing was returned from render. This usually means a return statement is missing. Or, to render nothing, return null.");}}}}}// Remaining cases are all treated as empty.
return deleteRemainingChildren(returnFiber,currentFirstChild);}return reconcileChildFibers;}var reconcileChildFibers=ChildReconciler(true);var mountChildFibers=ChildReconciler(false);function cloneChildFibers(current,workInProgress){if(!(current===null||workInProgress.child===current.child)){{throw Error("Resuming work not yet implemented.");}}if(workInProgress.child===null){return;}var currentChild=workInProgress.child;var newChild=createWorkInProgress(currentChild,currentChild.pendingProps);workInProgress.child=newChild;newChild["return"]=workInProgress;while(currentChild.sibling!==null){currentChild=currentChild.sibling;newChild=newChild.sibling=createWorkInProgress(currentChild,currentChild.pendingProps);newChild["return"]=workInProgress;}newChild.sibling=null;}// Reset a workInProgress child set to prepare it for a second pass.
function resetChildFibers(workInProgress,lanes){var child=workInProgress.child;while(child!==null){resetWorkInProgress(child,lanes);child=child.sibling;}}var NO_CONTEXT={};var contextStackCursor$1=createCursor(NO_CONTEXT);var contextFiberStackCursor=createCursor(NO_CONTEXT);var rootInstanceStackCursor=createCursor(NO_CONTEXT);function requiredContext(c){if(!(c!==NO_CONTEXT)){{throw Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");}}return c;}function getRootHostContainer(){var rootInstance=requiredContext(rootInstanceStackCursor.current);return rootInstance;}function pushHostContainer(fiber,nextRootInstance){// Push current root instance onto the stack;
// This allows us to reset root when portals are popped.
push(rootInstanceStackCursor,nextRootInstance,fiber);// Track the context and the Fiber that provided it.
// This enables us to pop only Fibers that provide unique contexts.
push(contextFiberStackCursor,fiber,fiber);// Finally, we need to push the host context to the stack.
// However, we can't just call getRootHostContext() and push it because
// we'd have a different number of entries on the stack depending on
// whether getRootHostContext() throws somewhere in renderer code or not.
// So we push an empty value first. This lets us safely unwind on errors.
push(contextStackCursor$1,NO_CONTEXT,fiber);var nextRootContext=getRootHostContext(nextRootInstance);// Now that we know this function doesn't throw, replace it.
pop(contextStackCursor$1,fiber);push(contextStackCursor$1,nextRootContext,fiber);}function popHostContainer(fiber){pop(contextStackCursor$1,fiber);pop(contextFiberStackCursor,fiber);pop(rootInstanceStackCursor,fiber);}function getHostContext(){var context=requiredContext(contextStackCursor$1.current);return context;}function pushHostContext(fiber){var rootInstance=requiredContext(rootInstanceStackCursor.current);var context=requiredContext(contextStackCursor$1.current);var nextContext=getChildHostContext(context,fiber.type);// Don't push this Fiber's context unless it's unique.
if(context===nextContext){return;}// Track the context and the Fiber that provided it.
// This enables us to pop only Fibers that provide unique contexts.
push(contextFiberStackCursor,fiber,fiber);push(contextStackCursor$1,nextContext,fiber);}function popHostContext(fiber){// Do not pop unless this Fiber provided the current context.
// pushHostContext() only pushes Fibers that provide unique contexts.
if(contextFiberStackCursor.current!==fiber){return;}pop(contextStackCursor$1,fiber);pop(contextFiberStackCursor,fiber);}var DefaultSuspenseContext=0;// The Suspense Context is split into two parts. The lower bits is
// inherited deeply down the subtree. The upper bits only affect
// this immediate suspense boundary and gets reset each new
// boundary or suspense list.
var SubtreeSuspenseContextMask=1;// Subtree Flags:
// InvisibleParentSuspenseContext indicates that one of our parent Suspense
// boundaries is not currently showing visible main content.
// Either because it is already showing a fallback or is not mounted at all.
// We can use this to determine if it is desirable to trigger a fallback at
// the parent. If not, then we might need to trigger undesirable boundaries
// and/or suspend the commit to avoid hiding the parent content.
var InvisibleParentSuspenseContext=1;// Shallow Flags:
// ForceSuspenseFallback can be used by SuspenseList to force newly added
// items into their fallback state during one of the render passes.
var ForceSuspenseFallback=2;var suspenseStackCursor=createCursor(DefaultSuspenseContext);function hasSuspenseContext(parentContext,flag){return (parentContext&flag)!==0;}function setDefaultShallowSuspenseContext(parentContext){return parentContext&SubtreeSuspenseContextMask;}function setShallowSuspenseContext(parentContext,shallowContext){return parentContext&SubtreeSuspenseContextMask|shallowContext;}function addSubtreeSuspenseContext(parentContext,subtreeContext){return parentContext|subtreeContext;}function pushSuspenseContext(fiber,newContext){push(suspenseStackCursor,newContext,fiber);}function popSuspenseContext(fiber){pop(suspenseStackCursor,fiber);}function shouldCaptureSuspense(workInProgress,hasInvisibleParent){// If it was the primary children that just suspended, capture and render the
// fallback. Otherwise, don't capture and bubble to the next boundary.
var nextState=workInProgress.memoizedState;if(nextState!==null){if(nextState.dehydrated!==null){// A dehydrated boundary always captures.
return true;}return false;}var props=workInProgress.memoizedProps;// In order to capture, the Suspense component must have a fallback prop.
if(props.fallback===undefined){return false;}// Regular boundaries always capture.
if(props.unstable_avoidThisFallback!==true){return true;}// If it's a boundary we should avoid, then we prefer to bubble up to the
// parent boundary if it is currently invisible.
if(hasInvisibleParent){return false;}// If the parent is not able to handle it, we must handle it.
return true;}function findFirstSuspended(row){var node=row;while(node!==null){if(node.tag===SuspenseComponent){var state=node.memoizedState;if(state!==null){var dehydrated=state.dehydrated;if(dehydrated===null||isSuspenseInstancePending(dehydrated)||isSuspenseInstanceFallback(dehydrated)){return node;}}}else if(node.tag===SuspenseListComponent&&// revealOrder undefined can't be trusted because it don't
// keep track of whether it suspended or not.
node.memoizedProps.revealOrder!==undefined){var didSuspend=(node.flags&DidCapture)!==NoFlags;if(didSuspend){return node;}}else if(node.child!==null){node.child["return"]=node;node=node.child;continue;}if(node===row){return null;}while(node.sibling===null){if(node["return"]===null||node["return"]===row){return null;}node=node["return"];}node.sibling["return"]=node["return"];node=node.sibling;}return null;}var NoFlags$1=/*  */0;// Represents whether effect should fire.
var HasEffect=/* */1;// Represents the phase in which the effect (not the clean-up) fires.
var Layout=/*    */2;var Passive$1=/*   */4;// This may have been an insertion or a hydration.
var hydrationParentFiber=null;var nextHydratableInstance=null;var isHydrating=false;function enterHydrationState(fiber){var parentInstance=fiber.stateNode.containerInfo;nextHydratableInstance=getFirstHydratableChild(parentInstance);hydrationParentFiber=fiber;isHydrating=true;return true;}function deleteHydratableInstance(returnFiber,instance){{switch(returnFiber.tag){case HostRoot:didNotHydrateContainerInstance(returnFiber.stateNode.containerInfo,instance);break;case HostComponent:didNotHydrateInstance(returnFiber.type,returnFiber.memoizedProps,returnFiber.stateNode,instance);break;}}var childToDelete=createFiberFromHostInstanceForDeletion();childToDelete.stateNode=instance;childToDelete["return"]=returnFiber;childToDelete.flags=Deletion;// This might seem like it belongs on progressedFirstDeletion. However,
// these children are not part of the reconciliation list of children.
// Even if we abort and rereconcile the children, that will try to hydrate
// again and the nodes are still in the host tree so these will be
// recreated.
if(returnFiber.lastEffect!==null){returnFiber.lastEffect.nextEffect=childToDelete;returnFiber.lastEffect=childToDelete;}else {returnFiber.firstEffect=returnFiber.lastEffect=childToDelete;}}function insertNonHydratedInstance(returnFiber,fiber){fiber.flags=fiber.flags&~Hydrating|Placement;{switch(returnFiber.tag){case HostRoot:{var parentContainer=returnFiber.stateNode.containerInfo;switch(fiber.tag){case HostComponent:var type=fiber.type;var props=fiber.pendingProps;didNotFindHydratableContainerInstance(parentContainer,type);break;case HostText:var text=fiber.pendingProps;didNotFindHydratableContainerTextInstance(parentContainer,text);break;}break;}case HostComponent:{var parentType=returnFiber.type;var parentProps=returnFiber.memoizedProps;var parentInstance=returnFiber.stateNode;switch(fiber.tag){case HostComponent:var _type=fiber.type;var _props=fiber.pendingProps;didNotFindHydratableInstance(parentType,parentProps,parentInstance,_type);break;case HostText:var _text=fiber.pendingProps;didNotFindHydratableTextInstance(parentType,parentProps,parentInstance,_text);break;case SuspenseComponent:didNotFindHydratableSuspenseInstance(parentType,parentProps);break;}break;}default:return;}}}function tryHydrate(fiber,nextInstance){switch(fiber.tag){case HostComponent:{var type=fiber.type;var props=fiber.pendingProps;var instance=canHydrateInstance(nextInstance,type);if(instance!==null){fiber.stateNode=instance;return true;}return false;}case HostText:{var text=fiber.pendingProps;var textInstance=canHydrateTextInstance(nextInstance,text);if(textInstance!==null){fiber.stateNode=textInstance;return true;}return false;}case SuspenseComponent:{return false;}default:return false;}}function tryToClaimNextHydratableInstance(fiber){if(!isHydrating){return;}var nextInstance=nextHydratableInstance;if(!nextInstance){// Nothing to hydrate. Make it an insertion.
insertNonHydratedInstance(hydrationParentFiber,fiber);isHydrating=false;hydrationParentFiber=fiber;return;}var firstAttemptedInstance=nextInstance;if(!tryHydrate(fiber,nextInstance)){// If we can't hydrate this instance let's try the next one.
// We use this as a heuristic. It's based on intuition and not data so it
// might be flawed or unnecessary.
nextInstance=getNextHydratableSibling(firstAttemptedInstance);if(!nextInstance||!tryHydrate(fiber,nextInstance)){// Nothing to hydrate. Make it an insertion.
insertNonHydratedInstance(hydrationParentFiber,fiber);isHydrating=false;hydrationParentFiber=fiber;return;}// We matched the next one, we'll now assume that the first one was
// superfluous and we'll delete it. Since we can't eagerly delete it
// we'll have to schedule a deletion. To do that, this node needs a dummy
// fiber associated with it.
deleteHydratableInstance(hydrationParentFiber,firstAttemptedInstance);}hydrationParentFiber=fiber;nextHydratableInstance=getFirstHydratableChild(nextInstance);}function prepareToHydrateHostInstance(fiber,rootContainerInstance,hostContext){var instance=fiber.stateNode;var updatePayload=hydrateInstance(instance,fiber.type,fiber.memoizedProps,rootContainerInstance,hostContext,fiber);// TODO: Type this specific to this type of component.
fiber.updateQueue=updatePayload;// If the update payload indicates that there is a change or if there
// is a new ref we mark this as an update.
if(updatePayload!==null){return true;}return false;}function prepareToHydrateHostTextInstance(fiber){var textInstance=fiber.stateNode;var textContent=fiber.memoizedProps;var shouldUpdate=hydrateTextInstance(textInstance,textContent,fiber);{if(shouldUpdate){// We assume that prepareToHydrateHostTextInstance is called in a context where the
// hydration parent is the parent host component of this host text.
var returnFiber=hydrationParentFiber;if(returnFiber!==null){switch(returnFiber.tag){case HostRoot:{var parentContainer=returnFiber.stateNode.containerInfo;didNotMatchHydratedContainerTextInstance(parentContainer,textInstance,textContent);break;}case HostComponent:{var parentType=returnFiber.type;var parentProps=returnFiber.memoizedProps;var parentInstance=returnFiber.stateNode;didNotMatchHydratedTextInstance(parentType,parentProps,parentInstance,textInstance,textContent);break;}}}}}return shouldUpdate;}function skipPastDehydratedSuspenseInstance(fiber){var suspenseState=fiber.memoizedState;var suspenseInstance=suspenseState!==null?suspenseState.dehydrated:null;if(!suspenseInstance){{throw Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");}}return getNextHydratableInstanceAfterSuspenseInstance(suspenseInstance);}function popToNextHostParent(fiber){var parent=fiber["return"];while(parent!==null&&parent.tag!==HostComponent&&parent.tag!==HostRoot&&parent.tag!==SuspenseComponent){parent=parent["return"];}hydrationParentFiber=parent;}function popHydrationState(fiber){if(fiber!==hydrationParentFiber){// We're deeper than the current hydration context, inside an inserted
// tree.
return false;}if(!isHydrating){// If we're not currently hydrating but we're in a hydration context, then
// we were an insertion and now need to pop up reenter hydration of our
// siblings.
popToNextHostParent(fiber);isHydrating=true;return false;}var type=fiber.type;// If we have any remaining hydratable nodes, we need to delete them now.
// We only do this deeper than head and body since they tend to have random
// other nodes in them. We also ignore components with pure text content in
// side of them.
// TODO: Better heuristic.
if(fiber.tag!==HostComponent||type!=='head'&&type!=='body'&&!shouldSetTextContent(type,fiber.memoizedProps)){var nextInstance=nextHydratableInstance;while(nextInstance){deleteHydratableInstance(fiber,nextInstance);nextInstance=getNextHydratableSibling(nextInstance);}}popToNextHostParent(fiber);if(fiber.tag===SuspenseComponent){nextHydratableInstance=skipPastDehydratedSuspenseInstance(fiber);}else {nextHydratableInstance=hydrationParentFiber?getNextHydratableSibling(fiber.stateNode):null;}return true;}function resetHydrationState(){hydrationParentFiber=null;nextHydratableInstance=null;isHydrating=false;}function getIsHydrating(){return isHydrating;}// and should be reset before starting a new render.
// This tracks which mutable sources need to be reset after a render.
var workInProgressSources=[];var rendererSigil$1;{// Used to detect multiple renderers using the same mutable source.
rendererSigil$1={};}function markSourceAsDirty(mutableSource){workInProgressSources.push(mutableSource);}function resetWorkInProgressVersions(){for(var i=0;i<workInProgressSources.length;i++){var mutableSource=workInProgressSources[i];{mutableSource._workInProgressVersionPrimary=null;}}workInProgressSources.length=0;}function getWorkInProgressVersion(mutableSource){{return mutableSource._workInProgressVersionPrimary;}}function setWorkInProgressVersion(mutableSource,version){{mutableSource._workInProgressVersionPrimary=version;}workInProgressSources.push(mutableSource);}function warnAboutMultipleRenderersDEV(mutableSource){{{if(mutableSource._currentPrimaryRenderer==null){mutableSource._currentPrimaryRenderer=rendererSigil$1;}else if(mutableSource._currentPrimaryRenderer!==rendererSigil$1){error('Detected multiple renderers concurrently rendering the '+'same mutable source. This is currently unsupported.');}}}}// Eager reads the version of a mutable source and stores it on the root.
var ReactCurrentDispatcher$1=ReactSharedInternals.ReactCurrentDispatcher,ReactCurrentBatchConfig$1=ReactSharedInternals.ReactCurrentBatchConfig;var didWarnAboutMismatchedHooksForComponent;var didWarnAboutUseOpaqueIdentifier;{didWarnAboutUseOpaqueIdentifier={};didWarnAboutMismatchedHooksForComponent=new Set();}// These are set right before calling the component.
var renderLanes=NoLanes;// The work-in-progress fiber. I've named it differently to distinguish it from
// the work-in-progress hook.
var currentlyRenderingFiber$1=null;// Hooks are stored as a linked list on the fiber's memoizedState field. The
// current hook list is the list that belongs to the current fiber. The
// work-in-progress hook list is a new list that will be added to the
// work-in-progress fiber.
var currentHook=null;var workInProgressHook=null;// Whether an update was scheduled at any point during the render phase. This
// does not get reset if we do another render pass; only when we're completely
// finished evaluating this component. This is an optimization so we know
// whether we need to clear render phase updates after a throw.
var didScheduleRenderPhaseUpdate=false;// Where an update was scheduled only during the current render pass. This
// gets reset after each attempt.
// TODO: Maybe there's some way to consolidate this with
// `didScheduleRenderPhaseUpdate`. Or with `numberOfReRenders`.
var didScheduleRenderPhaseUpdateDuringThisPass=false;var RE_RENDER_LIMIT=25;// In DEV, this is the name of the currently executing primitive hook
var currentHookNameInDev=null;// In DEV, this list ensures that hooks are called in the same order between renders.
// The list stores the order of hooks used during the initial render (mount).
// Subsequent renders (updates) reference this list.
var hookTypesDev=null;var hookTypesUpdateIndexDev=-1;// In DEV, this tracks whether currently rendering component needs to ignore
// the dependencies for Hooks that need them (e.g. useEffect or useMemo).
// When true, such Hooks will always be "remounted". Only used during hot reload.
var ignorePreviousDependencies=false;function mountHookTypesDev(){{var hookName=currentHookNameInDev;if(hookTypesDev===null){hookTypesDev=[hookName];}else {hookTypesDev.push(hookName);}}}function updateHookTypesDev(){{var hookName=currentHookNameInDev;if(hookTypesDev!==null){hookTypesUpdateIndexDev++;if(hookTypesDev[hookTypesUpdateIndexDev]!==hookName){warnOnHookMismatchInDev(hookName);}}}}function checkDepsAreArrayDev(deps){{if(deps!==undefined&&deps!==null&&!Array.isArray(deps)){// Verify deps, but only on mount to avoid extra checks.
// It's unlikely their type would change as usually you define them inline.
error('%s received a final argument that is not an array (instead, received `%s`). When '+'specified, the final argument must be an array.',currentHookNameInDev,_typeof$1(deps));}}}function warnOnHookMismatchInDev(currentHookName){{var componentName=getComponentName(currentlyRenderingFiber$1.type);if(!didWarnAboutMismatchedHooksForComponent.has(componentName)){didWarnAboutMismatchedHooksForComponent.add(componentName);if(hookTypesDev!==null){var table='';var secondColumnStart=30;for(var i=0;i<=hookTypesUpdateIndexDev;i++){var oldHookName=hookTypesDev[i];var newHookName=i===hookTypesUpdateIndexDev?currentHookName:oldHookName;var row=i+1+". "+oldHookName;// Extra space so second column lines up
// lol @ IE not supporting String#repeat
while(row.length<secondColumnStart){row+=' ';}row+=newHookName+'\n';table+=row;}error('React has detected a change in the order of Hooks called by %s. '+'This will lead to bugs and errors if not fixed. '+'For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks\n\n'+'   Previous render            Next render\n'+'   ------------------------------------------------------\n'+'%s'+'   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n',componentName,table);}}}}function throwInvalidHookError(){{{throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.");}}}function areHookInputsEqual(nextDeps,prevDeps){{if(ignorePreviousDependencies){// Only true when this component is being hot reloaded.
return false;}}if(prevDeps===null){{error('%s received a final argument during this render, but not during '+'the previous render. Even though the final argument is optional, '+'its type cannot change between renders.',currentHookNameInDev);}return false;}{// Don't bother comparing lengths in prod because these arrays should be
// passed inline.
if(nextDeps.length!==prevDeps.length){error('The final argument passed to %s changed size between renders. The '+'order and size of this array must remain constant.\n\n'+'Previous: %s\n'+'Incoming: %s',currentHookNameInDev,"["+prevDeps.join(', ')+"]","["+nextDeps.join(', ')+"]");}}for(var i=0;i<prevDeps.length&&i<nextDeps.length;i++){if(objectIs(nextDeps[i],prevDeps[i])){continue;}return false;}return true;}function renderWithHooks(current,workInProgress,Component,props,secondArg,nextRenderLanes){renderLanes=nextRenderLanes;currentlyRenderingFiber$1=workInProgress;{hookTypesDev=current!==null?current._debugHookTypes:null;hookTypesUpdateIndexDev=-1;// Used for hot reloading:
ignorePreviousDependencies=current!==null&&current.type!==workInProgress.type;}workInProgress.memoizedState=null;workInProgress.updateQueue=null;workInProgress.lanes=NoLanes;// The following should have already been reset
// currentHook = null;
// workInProgressHook = null;
// didScheduleRenderPhaseUpdate = false;
// TODO Warn if no hooks are used at all during mount, then some are used during update.
// Currently we will identify the update render as a mount because memoizedState === null.
// This is tricky because it's valid for certain types of components (e.g. React.lazy)
// Using memoizedState to differentiate between mount/update only works if at least one stateful hook is used.
// Non-stateful hooks (e.g. context) don't get added to memoizedState,
// so memoizedState would be null during updates and mounts.
{if(current!==null&&current.memoizedState!==null){ReactCurrentDispatcher$1.current=HooksDispatcherOnUpdateInDEV;}else if(hookTypesDev!==null){// This dispatcher handles an edge case where a component is updating,
// but no stateful hooks have been used.
// We want to match the production code behavior (which will use HooksDispatcherOnMount),
// but with the extra DEV validation to ensure hooks ordering hasn't changed.
// This dispatcher does that.
ReactCurrentDispatcher$1.current=HooksDispatcherOnMountWithHookTypesInDEV;}else {ReactCurrentDispatcher$1.current=HooksDispatcherOnMountInDEV;}}var children=Component(props,secondArg);// Check if there was a render phase update
if(didScheduleRenderPhaseUpdateDuringThisPass){// Keep rendering in a loop for as long as render phase updates continue to
// be scheduled. Use a counter to prevent infinite loops.
var numberOfReRenders=0;do{didScheduleRenderPhaseUpdateDuringThisPass=false;if(!(numberOfReRenders<RE_RENDER_LIMIT)){{throw Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");}}numberOfReRenders+=1;{// Even when hot reloading, allow dependencies to stabilize
// after first render to prevent infinite render phase updates.
ignorePreviousDependencies=false;}// Start over from the beginning of the list
currentHook=null;workInProgressHook=null;workInProgress.updateQueue=null;{// Also validate hook order for cascading updates.
hookTypesUpdateIndexDev=-1;}ReactCurrentDispatcher$1.current=HooksDispatcherOnRerenderInDEV;children=Component(props,secondArg);}while(didScheduleRenderPhaseUpdateDuringThisPass);}// We can assume the previous dispatcher is always this one, since we set it
// at the beginning of the render phase and there's no re-entrancy.
ReactCurrentDispatcher$1.current=ContextOnlyDispatcher;{workInProgress._debugHookTypes=hookTypesDev;}// This check uses currentHook so that it works the same in DEV and prod bundles.
// hookTypesDev could catch more cases (e.g. context) but only in DEV bundles.
var didRenderTooFewHooks=currentHook!==null&&currentHook.next!==null;renderLanes=NoLanes;currentlyRenderingFiber$1=null;currentHook=null;workInProgressHook=null;{currentHookNameInDev=null;hookTypesDev=null;hookTypesUpdateIndexDev=-1;}didScheduleRenderPhaseUpdate=false;if(!!didRenderTooFewHooks){{throw Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");}}return children;}function bailoutHooks(current,workInProgress,lanes){workInProgress.updateQueue=current.updateQueue;workInProgress.flags&=~(Passive|Update);current.lanes=removeLanes(current.lanes,lanes);}function resetHooksAfterThrow(){// We can assume the previous dispatcher is always this one, since we set it
// at the beginning of the render phase and there's no re-entrancy.
ReactCurrentDispatcher$1.current=ContextOnlyDispatcher;if(didScheduleRenderPhaseUpdate){// There were render phase updates. These are only valid for this render
// phase, which we are now aborting. Remove the updates from the queues so
// they do not persist to the next render. Do not remove updates from hooks
// that weren't processed.
//
// Only reset the updates from the queue if it has a clone. If it does
// not have a clone, that means it wasn't processed, and the updates were
// scheduled before we entered the render phase.
var hook=currentlyRenderingFiber$1.memoizedState;while(hook!==null){var queue=hook.queue;if(queue!==null){queue.pending=null;}hook=hook.next;}didScheduleRenderPhaseUpdate=false;}renderLanes=NoLanes;currentlyRenderingFiber$1=null;currentHook=null;workInProgressHook=null;{hookTypesDev=null;hookTypesUpdateIndexDev=-1;currentHookNameInDev=null;isUpdatingOpaqueValueInRenderPhase=false;}didScheduleRenderPhaseUpdateDuringThisPass=false;}function mountWorkInProgressHook(){var hook={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};if(workInProgressHook===null){// This is the first hook in the list
currentlyRenderingFiber$1.memoizedState=workInProgressHook=hook;}else {// Append to the end of the list
workInProgressHook=workInProgressHook.next=hook;}return workInProgressHook;}function updateWorkInProgressHook(){// This function is used both for updates and for re-renders triggered by a
// render phase update. It assumes there is either a current hook we can
// clone, or a work-in-progress hook from a previous render pass that we can
// use as a base. When we reach the end of the base list, we must switch to
// the dispatcher used for mounts.
var nextCurrentHook;if(currentHook===null){var current=currentlyRenderingFiber$1.alternate;if(current!==null){nextCurrentHook=current.memoizedState;}else {nextCurrentHook=null;}}else {nextCurrentHook=currentHook.next;}var nextWorkInProgressHook;if(workInProgressHook===null){nextWorkInProgressHook=currentlyRenderingFiber$1.memoizedState;}else {nextWorkInProgressHook=workInProgressHook.next;}if(nextWorkInProgressHook!==null){// There's already a work-in-progress. Reuse it.
workInProgressHook=nextWorkInProgressHook;nextWorkInProgressHook=workInProgressHook.next;currentHook=nextCurrentHook;}else {// Clone from the current hook.
if(!(nextCurrentHook!==null)){{throw Error("Rendered more hooks than during the previous render.");}}currentHook=nextCurrentHook;var newHook={memoizedState:currentHook.memoizedState,baseState:currentHook.baseState,baseQueue:currentHook.baseQueue,queue:currentHook.queue,next:null};if(workInProgressHook===null){// This is the first hook in the list.
currentlyRenderingFiber$1.memoizedState=workInProgressHook=newHook;}else {// Append to the end of the list.
workInProgressHook=workInProgressHook.next=newHook;}}return workInProgressHook;}function createFunctionComponentUpdateQueue(){return {lastEffect:null};}function basicStateReducer(state,action){// $FlowFixMe: Flow doesn't like mixed types
return typeof action==='function'?action(state):action;}function mountReducer(reducer,initialArg,init){var hook=mountWorkInProgressHook();var initialState;if(init!==undefined){initialState=init(initialArg);}else {initialState=initialArg;}hook.memoizedState=hook.baseState=initialState;var queue=hook.queue={pending:null,dispatch:null,lastRenderedReducer:reducer,lastRenderedState:initialState};var dispatch=queue.dispatch=dispatchAction.bind(null,currentlyRenderingFiber$1,queue);return [hook.memoizedState,dispatch];}function updateReducer(reducer,initialArg,init){var hook=updateWorkInProgressHook();var queue=hook.queue;if(!(queue!==null)){{throw Error("Should have a queue. This is likely a bug in React. Please file an issue.");}}queue.lastRenderedReducer=reducer;var current=currentHook;// The last rebase update that is NOT part of the base state.
var baseQueue=current.baseQueue;// The last pending update that hasn't been processed yet.
var pendingQueue=queue.pending;if(pendingQueue!==null){// We have new updates that haven't been processed yet.
// We'll add them to the base queue.
if(baseQueue!==null){// Merge the pending queue and the base queue.
var baseFirst=baseQueue.next;var pendingFirst=pendingQueue.next;baseQueue.next=pendingFirst;pendingQueue.next=baseFirst;}{if(current.baseQueue!==baseQueue){// Internal invariant that should never happen, but feasibly could in
// the future if we implement resuming, or some form of that.
error('Internal error: Expected work-in-progress queue to be a clone. '+'This is a bug in React.');}}current.baseQueue=baseQueue=pendingQueue;queue.pending=null;}if(baseQueue!==null){// We have a queue to process.
var first=baseQueue.next;var newState=current.baseState;var newBaseState=null;var newBaseQueueFirst=null;var newBaseQueueLast=null;var update=first;do{var updateLane=update.lane;if(!isSubsetOfLanes(renderLanes,updateLane)){// Priority is insufficient. Skip this update. If this is the first
// skipped update, the previous update/state is the new base
// update/state.
var clone={lane:updateLane,action:update.action,eagerReducer:update.eagerReducer,eagerState:update.eagerState,next:null};if(newBaseQueueLast===null){newBaseQueueFirst=newBaseQueueLast=clone;newBaseState=newState;}else {newBaseQueueLast=newBaseQueueLast.next=clone;}// Update the remaining priority in the queue.
// TODO: Don't need to accumulate this. Instead, we can remove
// renderLanes from the original lanes.
currentlyRenderingFiber$1.lanes=mergeLanes(currentlyRenderingFiber$1.lanes,updateLane);markSkippedUpdateLanes(updateLane);}else {// This update does have sufficient priority.
if(newBaseQueueLast!==null){var _clone={// This update is going to be committed so we never want uncommit
// it. Using NoLane works because 0 is a subset of all bitmasks, so
// this will never be skipped by the check above.
lane:NoLane,action:update.action,eagerReducer:update.eagerReducer,eagerState:update.eagerState,next:null};newBaseQueueLast=newBaseQueueLast.next=_clone;}// Process this update.
if(update.eagerReducer===reducer){// If this update was processed eagerly, and its reducer matches the
// current reducer, we can use the eagerly computed state.
newState=update.eagerState;}else {var action=update.action;newState=reducer(newState,action);}}update=update.next;}while(update!==null&&update!==first);if(newBaseQueueLast===null){newBaseState=newState;}else {newBaseQueueLast.next=newBaseQueueFirst;}// Mark that the fiber performed work, but only if the new state is
// different from the current state.
if(!objectIs(newState,hook.memoizedState)){markWorkInProgressReceivedUpdate();}hook.memoizedState=newState;hook.baseState=newBaseState;hook.baseQueue=newBaseQueueLast;queue.lastRenderedState=newState;}var dispatch=queue.dispatch;return [hook.memoizedState,dispatch];}function rerenderReducer(reducer,initialArg,init){var hook=updateWorkInProgressHook();var queue=hook.queue;if(!(queue!==null)){{throw Error("Should have a queue. This is likely a bug in React. Please file an issue.");}}queue.lastRenderedReducer=reducer;// This is a re-render. Apply the new render phase updates to the previous
// work-in-progress hook.
var dispatch=queue.dispatch;var lastRenderPhaseUpdate=queue.pending;var newState=hook.memoizedState;if(lastRenderPhaseUpdate!==null){// The queue doesn't persist past this render pass.
queue.pending=null;var firstRenderPhaseUpdate=lastRenderPhaseUpdate.next;var update=firstRenderPhaseUpdate;do{// Process this render phase update. We don't have to check the
// priority because it will always be the same as the current
// render's.
var action=update.action;newState=reducer(newState,action);update=update.next;}while(update!==firstRenderPhaseUpdate);// Mark that the fiber performed work, but only if the new state is
// different from the current state.
if(!objectIs(newState,hook.memoizedState)){markWorkInProgressReceivedUpdate();}hook.memoizedState=newState;// Don't persist the state accumulated from the render phase updates to
// the base state unless the queue is empty.
// TODO: Not sure if this is the desired semantics, but it's what we
// do for gDSFP. I can't remember why.
if(hook.baseQueue===null){hook.baseState=newState;}queue.lastRenderedState=newState;}return [newState,dispatch];}function readFromUnsubcribedMutableSource(root,source,getSnapshot){{warnAboutMultipleRenderersDEV(source);}var getVersion=source._getVersion;var version=getVersion(source._source);// Is it safe for this component to read from this source during the current render?
var isSafeToReadFromSource=false;// Check the version first.
// If this render has already been started with a specific version,
// we can use it alone to determine if we can safely read from the source.
var currentRenderVersion=getWorkInProgressVersion(source);if(currentRenderVersion!==null){// It's safe to read if the store hasn't been mutated since the last time
// we read something.
isSafeToReadFromSource=currentRenderVersion===version;}else {// If there's no version, then this is the first time we've read from the
// source during the current render pass, so we need to do a bit more work.
// What we need to determine is if there are any hooks that already
// subscribed to the source, and if so, whether there are any pending
// mutations that haven't been synchronized yet.
//
// If there are no pending mutations, then `root.mutableReadLanes` will be
// empty, and we know we can safely read.
//
// If there *are* pending mutations, we may still be able to safely read
// if the currently rendering lanes are inclusive of the pending mutation
// lanes, since that guarantees that the value we're about to read from
// the source is consistent with the values that we read during the most
// recent mutation.
isSafeToReadFromSource=isSubsetOfLanes(renderLanes,root.mutableReadLanes);if(isSafeToReadFromSource){// If it's safe to read from this source during the current render,
// store the version in case other components read from it.
// A changed version number will let those components know to throw and restart the render.
setWorkInProgressVersion(source,version);}}if(isSafeToReadFromSource){var snapshot=getSnapshot(source._source);{if(typeof snapshot==='function'){error('Mutable source should not return a function as the snapshot value. '+'Functions may close over mutable values and cause tearing.');}}return snapshot;}else {// This handles the special case of a mutable source being shared between renderers.
// In that case, if the source is mutated between the first and second renderer,
// The second renderer don't know that it needs to reset the WIP version during unwind,
// (because the hook only marks sources as dirty if it's written to their WIP version).
// That would cause this tear check to throw again and eventually be visible to the user.
// We can avoid this infinite loop by explicitly marking the source as dirty.
//
// This can lead to tearing in the first renderer when it resumes,
// but there's nothing we can do about that (short of throwing here and refusing to continue the render).
markSourceAsDirty(source);{{throw Error("Cannot read from mutable source during the current render without tearing. This is a bug in React. Please file an issue.");}}}}function useMutableSource(hook,source,getSnapshot,subscribe){var root=getWorkInProgressRoot();if(!(root!==null)){{throw Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");}}var getVersion=source._getVersion;var version=getVersion(source._source);var dispatcher=ReactCurrentDispatcher$1.current;// eslint-disable-next-line prefer-const
var _dispatcher$useState=dispatcher.useState(function(){return readFromUnsubcribedMutableSource(root,source,getSnapshot);}),currentSnapshot=_dispatcher$useState[0],setSnapshot=_dispatcher$useState[1];var snapshot=currentSnapshot;// Grab a handle to the state hook as well.
// We use it to clear the pending update queue if we have a new source.
var stateHook=workInProgressHook;var memoizedState=hook.memoizedState;var refs=memoizedState.refs;var prevGetSnapshot=refs.getSnapshot;var prevSource=memoizedState.source;var prevSubscribe=memoizedState.subscribe;var fiber=currentlyRenderingFiber$1;hook.memoizedState={refs:refs,source:source,subscribe:subscribe};// Sync the values needed by our subscription handler after each commit.
dispatcher.useEffect(function(){refs.getSnapshot=getSnapshot;// Normally the dispatch function for a state hook never changes,
// but this hook recreates the queue in certain cases  to avoid updates from stale sources.
// handleChange() below needs to reference the dispatch function without re-subscribing,
// so we use a ref to ensure that it always has the latest version.
refs.setSnapshot=setSnapshot;// Check for a possible change between when we last rendered now.
var maybeNewVersion=getVersion(source._source);if(!objectIs(version,maybeNewVersion)){var maybeNewSnapshot=getSnapshot(source._source);{if(typeof maybeNewSnapshot==='function'){error('Mutable source should not return a function as the snapshot value. '+'Functions may close over mutable values and cause tearing.');}}if(!objectIs(snapshot,maybeNewSnapshot)){setSnapshot(maybeNewSnapshot);var lane=requestUpdateLane(fiber);markRootMutableRead(root,lane);}// If the source mutated between render and now,
// there may be state updates already scheduled from the old source.
// Entangle the updates so that they render in the same batch.
markRootEntangled(root,root.mutableReadLanes);}},[getSnapshot,source,subscribe]);// If we got a new source or subscribe function, re-subscribe in a passive effect.
dispatcher.useEffect(function(){var handleChange=function handleChange(){var latestGetSnapshot=refs.getSnapshot;var latestSetSnapshot=refs.setSnapshot;try{latestSetSnapshot(latestGetSnapshot(source._source));// Record a pending mutable source update with the same expiration time.
var lane=requestUpdateLane(fiber);markRootMutableRead(root,lane);}catch(error){// A selector might throw after a source mutation.
// e.g. it might try to read from a part of the store that no longer exists.
// In this case we should still schedule an update with React.
// Worst case the selector will throw again and then an error boundary will handle it.
latestSetSnapshot(function(){throw error;});}};var unsubscribe=subscribe(source._source,handleChange);{if(typeof unsubscribe!=='function'){error('Mutable source subscribe function must return an unsubscribe function.');}}return unsubscribe;},[source,subscribe]);// If any of the inputs to useMutableSource change, reading is potentially unsafe.
//
// If either the source or the subscription have changed we can't can't trust the update queue.
// Maybe the source changed in a way that the old subscription ignored but the new one depends on.
//
// If the getSnapshot function changed, we also shouldn't rely on the update queue.
// It's possible that the underlying source was mutated between the when the last "change" event fired,
// and when the current render (with the new getSnapshot function) is processed.
//
// In both cases, we need to throw away pending updates (since they are no longer relevant)
// and treat reading from the source as we do in the mount case.
if(!objectIs(prevGetSnapshot,getSnapshot)||!objectIs(prevSource,source)||!objectIs(prevSubscribe,subscribe)){// Create a new queue and setState method,
// So if there are interleaved updates, they get pushed to the older queue.
// When this becomes current, the previous queue and dispatch method will be discarded,
// including any interleaving updates that occur.
var newQueue={pending:null,dispatch:null,lastRenderedReducer:basicStateReducer,lastRenderedState:snapshot};newQueue.dispatch=setSnapshot=dispatchAction.bind(null,currentlyRenderingFiber$1,newQueue);stateHook.queue=newQueue;stateHook.baseQueue=null;snapshot=readFromUnsubcribedMutableSource(root,source,getSnapshot);stateHook.memoizedState=stateHook.baseState=snapshot;}return snapshot;}function mountMutableSource(source,getSnapshot,subscribe){var hook=mountWorkInProgressHook();hook.memoizedState={refs:{getSnapshot:getSnapshot,setSnapshot:null},source:source,subscribe:subscribe};return useMutableSource(hook,source,getSnapshot,subscribe);}function updateMutableSource(source,getSnapshot,subscribe){var hook=updateWorkInProgressHook();return useMutableSource(hook,source,getSnapshot,subscribe);}function mountState(initialState){var hook=mountWorkInProgressHook();if(typeof initialState==='function'){// $FlowFixMe: Flow doesn't like mixed types
initialState=initialState();}hook.memoizedState=hook.baseState=initialState;var queue=hook.queue={pending:null,dispatch:null,lastRenderedReducer:basicStateReducer,lastRenderedState:initialState};var dispatch=queue.dispatch=dispatchAction.bind(null,currentlyRenderingFiber$1,queue);return [hook.memoizedState,dispatch];}function updateState(initialState){return updateReducer(basicStateReducer);}function rerenderState(initialState){return rerenderReducer(basicStateReducer);}function pushEffect(tag,create,destroy,deps){var effect={tag:tag,create:create,destroy:destroy,deps:deps,// Circular
next:null};var componentUpdateQueue=currentlyRenderingFiber$1.updateQueue;if(componentUpdateQueue===null){componentUpdateQueue=createFunctionComponentUpdateQueue();currentlyRenderingFiber$1.updateQueue=componentUpdateQueue;componentUpdateQueue.lastEffect=effect.next=effect;}else {var lastEffect=componentUpdateQueue.lastEffect;if(lastEffect===null){componentUpdateQueue.lastEffect=effect.next=effect;}else {var firstEffect=lastEffect.next;lastEffect.next=effect;effect.next=firstEffect;componentUpdateQueue.lastEffect=effect;}}return effect;}function mountRef(initialValue){var hook=mountWorkInProgressHook();var ref={current:initialValue};{Object.seal(ref);}hook.memoizedState=ref;return ref;}function updateRef(initialValue){var hook=updateWorkInProgressHook();return hook.memoizedState;}function mountEffectImpl(fiberFlags,hookFlags,create,deps){var hook=mountWorkInProgressHook();var nextDeps=deps===undefined?null:deps;currentlyRenderingFiber$1.flags|=fiberFlags;hook.memoizedState=pushEffect(HasEffect|hookFlags,create,undefined,nextDeps);}function updateEffectImpl(fiberFlags,hookFlags,create,deps){var hook=updateWorkInProgressHook();var nextDeps=deps===undefined?null:deps;var destroy=undefined;if(currentHook!==null){var prevEffect=currentHook.memoizedState;destroy=prevEffect.destroy;if(nextDeps!==null){var prevDeps=prevEffect.deps;if(areHookInputsEqual(nextDeps,prevDeps)){pushEffect(hookFlags,create,destroy,nextDeps);return;}}}currentlyRenderingFiber$1.flags|=fiberFlags;hook.memoizedState=pushEffect(HasEffect|hookFlags,create,destroy,nextDeps);}function mountEffect(create,deps){{// $FlowExpectedError - jest isn't a global, and isn't recognized outside of tests
if('undefined'!==typeof jest){warnIfNotCurrentlyActingEffectsInDEV(currentlyRenderingFiber$1);}}return mountEffectImpl(Update|Passive,Passive$1,create,deps);}function updateEffect(create,deps){{// $FlowExpectedError - jest isn't a global, and isn't recognized outside of tests
if('undefined'!==typeof jest){warnIfNotCurrentlyActingEffectsInDEV(currentlyRenderingFiber$1);}}return updateEffectImpl(Update|Passive,Passive$1,create,deps);}function mountLayoutEffect(create,deps){return mountEffectImpl(Update,Layout,create,deps);}function updateLayoutEffect(create,deps){return updateEffectImpl(Update,Layout,create,deps);}function imperativeHandleEffect(create,ref){if(typeof ref==='function'){var refCallback=ref;var _inst=create();refCallback(_inst);return function(){refCallback(null);};}else if(ref!==null&&ref!==undefined){var refObject=ref;{if(!refObject.hasOwnProperty('current')){error('Expected useImperativeHandle() first argument to either be a '+'ref callback or React.createRef() object. Instead received: %s.','an object with keys {'+Object.keys(refObject).join(', ')+'}');}}var _inst2=create();refObject.current=_inst2;return function(){refObject.current=null;};}}function mountImperativeHandle(ref,create,deps){{if(typeof create!=='function'){error('Expected useImperativeHandle() second argument to be a function '+'that creates a handle. Instead received: %s.',create!==null?_typeof$1(create):'null');}}// TODO: If deps are provided, should we skip comparing the ref itself?
var effectDeps=deps!==null&&deps!==undefined?deps.concat([ref]):null;return mountEffectImpl(Update,Layout,imperativeHandleEffect.bind(null,create,ref),effectDeps);}function updateImperativeHandle(ref,create,deps){{if(typeof create!=='function'){error('Expected useImperativeHandle() second argument to be a function '+'that creates a handle. Instead received: %s.',create!==null?_typeof$1(create):'null');}}// TODO: If deps are provided, should we skip comparing the ref itself?
var effectDeps=deps!==null&&deps!==undefined?deps.concat([ref]):null;return updateEffectImpl(Update,Layout,imperativeHandleEffect.bind(null,create,ref),effectDeps);}function mountDebugValue(value,formatterFn){// This hook is normally a no-op.
// The react-debug-hooks package injects its own implementation
// so that e.g. DevTools can display custom hook values.
}var updateDebugValue=mountDebugValue;function mountCallback(callback,deps){var hook=mountWorkInProgressHook();var nextDeps=deps===undefined?null:deps;hook.memoizedState=[callback,nextDeps];return callback;}function updateCallback(callback,deps){var hook=updateWorkInProgressHook();var nextDeps=deps===undefined?null:deps;var prevState=hook.memoizedState;if(prevState!==null){if(nextDeps!==null){var prevDeps=prevState[1];if(areHookInputsEqual(nextDeps,prevDeps)){return prevState[0];}}}hook.memoizedState=[callback,nextDeps];return callback;}function mountMemo(nextCreate,deps){var hook=mountWorkInProgressHook();var nextDeps=deps===undefined?null:deps;var nextValue=nextCreate();hook.memoizedState=[nextValue,nextDeps];return nextValue;}function updateMemo(nextCreate,deps){var hook=updateWorkInProgressHook();var nextDeps=deps===undefined?null:deps;var prevState=hook.memoizedState;if(prevState!==null){// Assume these are defined. If they're not, areHookInputsEqual will warn.
if(nextDeps!==null){var prevDeps=prevState[1];if(areHookInputsEqual(nextDeps,prevDeps)){return prevState[0];}}}var nextValue=nextCreate();hook.memoizedState=[nextValue,nextDeps];return nextValue;}function mountDeferredValue(value){var _mountState=mountState(value),prevValue=_mountState[0],setValue=_mountState[1];mountEffect(function(){var prevTransition=ReactCurrentBatchConfig$1.transition;ReactCurrentBatchConfig$1.transition=1;try{setValue(value);}finally{ReactCurrentBatchConfig$1.transition=prevTransition;}},[value]);return prevValue;}function updateDeferredValue(value){var _updateState=updateState(),prevValue=_updateState[0],setValue=_updateState[1];updateEffect(function(){var prevTransition=ReactCurrentBatchConfig$1.transition;ReactCurrentBatchConfig$1.transition=1;try{setValue(value);}finally{ReactCurrentBatchConfig$1.transition=prevTransition;}},[value]);return prevValue;}function rerenderDeferredValue(value){var _rerenderState=rerenderState(),prevValue=_rerenderState[0],setValue=_rerenderState[1];updateEffect(function(){var prevTransition=ReactCurrentBatchConfig$1.transition;ReactCurrentBatchConfig$1.transition=1;try{setValue(value);}finally{ReactCurrentBatchConfig$1.transition=prevTransition;}},[value]);return prevValue;}function startTransition(setPending,callback){var priorityLevel=getCurrentPriorityLevel();{runWithPriority$1(priorityLevel<UserBlockingPriority$2?UserBlockingPriority$2:priorityLevel,function(){setPending(true);});runWithPriority$1(priorityLevel>NormalPriority$1?NormalPriority$1:priorityLevel,function(){var prevTransition=ReactCurrentBatchConfig$1.transition;ReactCurrentBatchConfig$1.transition=1;try{setPending(false);callback();}finally{ReactCurrentBatchConfig$1.transition=prevTransition;}});}}function mountTransition(){var _mountState2=mountState(false),isPending=_mountState2[0],setPending=_mountState2[1];// The `start` method can be stored on a ref, since `setPending`
// never changes.
var start=startTransition.bind(null,setPending);mountRef(start);return [start,isPending];}function updateTransition(){var _updateState2=updateState(),isPending=_updateState2[0];var startRef=updateRef();var start=startRef.current;return [start,isPending];}function rerenderTransition(){var _rerenderState2=rerenderState(),isPending=_rerenderState2[0];var startRef=updateRef();var start=startRef.current;return [start,isPending];}var isUpdatingOpaqueValueInRenderPhase=false;function getIsUpdatingOpaqueValueInRenderPhaseInDEV(){{return isUpdatingOpaqueValueInRenderPhase;}}function warnOnOpaqueIdentifierAccessInDEV(fiber){{// TODO: Should warn in effects and callbacks, too
var name=getComponentName(fiber.type)||'Unknown';if(getIsRendering()&&!didWarnAboutUseOpaqueIdentifier[name]){error('The object passed back from useOpaqueIdentifier is meant to be '+'passed through to attributes only. Do not read the '+'value directly.');didWarnAboutUseOpaqueIdentifier[name]=true;}}}function mountOpaqueIdentifier(){var makeId=makeClientIdInDEV.bind(null,warnOnOpaqueIdentifierAccessInDEV.bind(null,currentlyRenderingFiber$1));if(getIsHydrating()){var didUpgrade=false;var fiber=currentlyRenderingFiber$1;var readValue=function readValue(){if(!didUpgrade){// Only upgrade once. This works even inside the render phase because
// the update is added to a shared queue, which outlasts the
// in-progress render.
didUpgrade=true;{isUpdatingOpaqueValueInRenderPhase=true;setId(makeId());isUpdatingOpaqueValueInRenderPhase=false;warnOnOpaqueIdentifierAccessInDEV(fiber);}}{{throw Error("The object passed back from useOpaqueIdentifier is meant to be passed through to attributes only. Do not read the value directly.");}}};var id=makeOpaqueHydratingObject(readValue);var setId=mountState(id)[1];if((currentlyRenderingFiber$1.mode&BlockingMode)===NoMode){currentlyRenderingFiber$1.flags|=Update|Passive;pushEffect(HasEffect|Passive$1,function(){setId(makeId());},undefined,null);}return id;}else {var _id=makeId();mountState(_id);return _id;}}function updateOpaqueIdentifier(){var id=updateState()[0];return id;}function rerenderOpaqueIdentifier(){var id=rerenderState()[0];return id;}function dispatchAction(fiber,queue,action){{if(typeof arguments[3]==='function'){error("State updates from the useState() and useReducer() Hooks don't support the "+'second callback argument. To execute a side effect after '+'rendering, declare it in the component body with useEffect().');}}var eventTime=requestEventTime();var lane=requestUpdateLane(fiber);var update={lane:lane,action:action,eagerReducer:null,eagerState:null,next:null};// Append the update to the end of the list.
var pending=queue.pending;if(pending===null){// This is the first update. Create a circular list.
update.next=update;}else {update.next=pending.next;pending.next=update;}queue.pending=update;var alternate=fiber.alternate;if(fiber===currentlyRenderingFiber$1||alternate!==null&&alternate===currentlyRenderingFiber$1){// This is a render phase update. Stash it in a lazily-created map of
// queue -> linked list of updates. After this render pass, we'll restart
// and apply the stashed updates on top of the work-in-progress hook.
didScheduleRenderPhaseUpdateDuringThisPass=didScheduleRenderPhaseUpdate=true;}else {if(fiber.lanes===NoLanes&&(alternate===null||alternate.lanes===NoLanes)){// The queue is currently empty, which means we can eagerly compute the
// next state before entering the render phase. If the new state is the
// same as the current state, we may be able to bail out entirely.
var lastRenderedReducer=queue.lastRenderedReducer;if(lastRenderedReducer!==null){var prevDispatcher;{prevDispatcher=ReactCurrentDispatcher$1.current;ReactCurrentDispatcher$1.current=InvalidNestedHooksDispatcherOnUpdateInDEV;}try{var currentState=queue.lastRenderedState;var eagerState=lastRenderedReducer(currentState,action);// Stash the eagerly computed state, and the reducer used to compute
// it, on the update object. If the reducer hasn't changed by the
// time we enter the render phase, then the eager state can be used
// without calling the reducer again.
update.eagerReducer=lastRenderedReducer;update.eagerState=eagerState;if(objectIs(eagerState,currentState)){// Fast path. We can bail out without scheduling React to re-render.
// It's still possible that we'll need to rebase this update later,
// if the component re-renders for a different reason and by that
// time the reducer has changed.
return;}}catch(error){// Suppress the error. It will throw again in the render phase.
}finally{{ReactCurrentDispatcher$1.current=prevDispatcher;}}}}{// $FlowExpectedError - jest isn't a global, and isn't recognized outside of tests
if('undefined'!==typeof jest){warnIfNotScopedWithMatchingAct(fiber);warnIfNotCurrentlyActingUpdatesInDev(fiber);}}scheduleUpdateOnFiber(fiber,lane,eventTime);}}var ContextOnlyDispatcher={readContext:_readContext,useCallback:throwInvalidHookError,useContext:throwInvalidHookError,useEffect:throwInvalidHookError,useImperativeHandle:throwInvalidHookError,useLayoutEffect:throwInvalidHookError,useMemo:throwInvalidHookError,useReducer:throwInvalidHookError,useRef:throwInvalidHookError,useState:throwInvalidHookError,useDebugValue:throwInvalidHookError,useDeferredValue:throwInvalidHookError,useTransition:throwInvalidHookError,useMutableSource:throwInvalidHookError,useOpaqueIdentifier:throwInvalidHookError,unstable_isNewReconciler:enableNewReconciler};var HooksDispatcherOnMountInDEV=null;var HooksDispatcherOnMountWithHookTypesInDEV=null;var HooksDispatcherOnUpdateInDEV=null;var HooksDispatcherOnRerenderInDEV=null;var InvalidNestedHooksDispatcherOnMountInDEV=null;var InvalidNestedHooksDispatcherOnUpdateInDEV=null;var InvalidNestedHooksDispatcherOnRerenderInDEV=null;{var warnInvalidContextAccess=function warnInvalidContextAccess(){error('Context can only be read while React is rendering. '+'In classes, you can read it in the render method or getDerivedStateFromProps. '+'In function components, you can read it directly in the function body, but not '+'inside Hooks like useReducer() or useMemo().');};var warnInvalidHookAccess=function warnInvalidHookAccess(){error('Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. '+'You can only call Hooks at the top level of your React function. '+'For more information, see '+'https://reactjs.org/link/rules-of-hooks');};HooksDispatcherOnMountInDEV={readContext:function readContext(context,observedBits){return _readContext(context,observedBits);},useCallback:function useCallback(callback,deps){currentHookNameInDev='useCallback';mountHookTypesDev();checkDepsAreArrayDev(deps);return mountCallback(callback,deps);},useContext:function useContext(context,observedBits){currentHookNameInDev='useContext';mountHookTypesDev();return _readContext(context,observedBits);},useEffect:function useEffect(create,deps){currentHookNameInDev='useEffect';mountHookTypesDev();checkDepsAreArrayDev(deps);return mountEffect(create,deps);},useImperativeHandle:function useImperativeHandle(ref,create,deps){currentHookNameInDev='useImperativeHandle';mountHookTypesDev();checkDepsAreArrayDev(deps);return mountImperativeHandle(ref,create,deps);},useLayoutEffect:function useLayoutEffect(create,deps){currentHookNameInDev='useLayoutEffect';mountHookTypesDev();checkDepsAreArrayDev(deps);return mountLayoutEffect(create,deps);},useMemo:function useMemo(create,deps){currentHookNameInDev='useMemo';mountHookTypesDev();checkDepsAreArrayDev(deps);var prevDispatcher=ReactCurrentDispatcher$1.current;ReactCurrentDispatcher$1.current=InvalidNestedHooksDispatcherOnMountInDEV;try{return mountMemo(create,deps);}finally{ReactCurrentDispatcher$1.current=prevDispatcher;}},useReducer:function useReducer(reducer,initialArg,init){currentHookNameInDev='useReducer';mountHookTypesDev();var prevDispatcher=ReactCurrentDispatcher$1.current;ReactCurrentDispatcher$1.current=InvalidNestedHooksDispatcherOnMountInDEV;try{return mountReducer(reducer,initialArg,init);}finally{ReactCurrentDispatcher$1.current=prevDispatcher;}},useRef:function useRef(initialValue){currentHookNameInDev='useRef';mountHookTypesDev();return mountRef(initialValue);},useState:function useState(initialState){currentHookNameInDev='useState';mountHookTypesDev();var prevDispatcher=ReactCurrentDispatcher$1.current;ReactCurrentDispatcher$1.current=InvalidNestedHooksDispatcherOnMountInDEV;try{return mountState(initialState);}finally{ReactCurrentDispatcher$1.current=prevDispatcher;}},useDebugValue:function useDebugValue(value,formatterFn){currentHookNameInDev='useDebugValue';mountHookTypesDev();return mountDebugValue();},useDeferredValue:function useDeferredValue(value){currentHookNameInDev='useDeferredValue';mountHookTypesDev();return mountDeferredValue(value);},useTransition:function useTransition(){currentHookNameInDev='useTransition';mountHookTypesDev();return mountTransition();},useMutableSource:function useMutableSource(source,getSnapshot,subscribe){currentHookNameInDev='useMutableSource';mountHookTypesDev();return mountMutableSource(source,getSnapshot,subscribe);},useOpaqueIdentifier:function useOpaqueIdentifier(){currentHookNameInDev='useOpaqueIdentifier';mountHookTypesDev();return mountOpaqueIdentifier();},unstable_isNewReconciler:enableNewReconciler};HooksDispatcherOnMountWithHookTypesInDEV={readContext:function readContext(context,observedBits){return _readContext(context,observedBits);},useCallback:function useCallback(callback,deps){currentHookNameInDev='useCallback';updateHookTypesDev();return mountCallback(callback,deps);},useContext:function useContext(context,observedBits){currentHookNameInDev='useContext';updateHookTypesDev();return _readContext(context,observedBits);},useEffect:function useEffect(create,deps){currentHookNameInDev='useEffect';updateHookTypesDev();return mountEffect(create,deps);},useImperativeHandle:function useImperativeHandle(ref,create,deps){currentHookNameInDev='useImperativeHandle';updateHookTypesDev();return mountImperativeHandle(ref,create,deps);},useLayoutEffect:function useLayoutEffect(create,deps){currentHookNameInDev='useLayoutEffect';updateHookTypesDev();return mountLayoutEffect(create,deps);},useMemo:function useMemo(create,deps){currentHookNameInDev='useMemo';updateHookTypesDev();var prevDispatcher=ReactCurrentDispatcher$1.current;ReactCurrentDispatcher$1.current=InvalidNestedHooksDispatcherOnMountInDEV;try{return mountMemo(create,deps);}finally{ReactCurrentDispatcher$1.current=prevDispatcher;}},useReducer:function useReducer(reducer,initialArg,init){currentHookNameInDev='useReducer';updateHookTypesDev();var prevDispatcher=ReactCurrentDispatcher$1.current;ReactCurrentDispatcher$1.current=InvalidNestedHooksDispatcherOnMountInDEV;try{return mountReducer(reducer,initialArg,init);}finally{ReactCurrentDispatcher$1.current=prevDispatcher;}},useRef:function useRef(initialValue){currentHookNameInDev='useRef';updateHookTypesDev();return mountRef(initialValue);},useState:function useState(initialState){currentHookNameInDev='useState';updateHookTypesDev();var prevDispatcher=ReactCurrentDispatcher$1.current;ReactCurrentDispatcher$1.current=InvalidNestedHooksDispatcherOnMountInDEV;try{return mountState(initialState);}finally{ReactCurrentDispatcher$1.current=prevDispatcher;}},useDebugValue:function useDebugValue(value,formatterFn){currentHookNameInDev='useDebugValue';updateHookTypesDev();return mountDebugValue();},useDeferredValue:function useDeferredValue(value){currentHookNameInDev='useDeferredValue';updateHookTypesDev();return mountDeferredValue(value);},useTransition:function useTransition(){currentHookNameInDev='useTransition';updateHookTypesDev();return mountTransition();},useMutableSource:function useMutableSource(source,getSnapshot,subscribe){currentHookNameInDev='useMutableSource';updateHookTypesDev();return mountMutableSource(source,getSnapshot,subscribe);},useOpaqueIdentifier:function useOpaqueIdentifier(){currentHookNameInDev='useOpaqueIdentifier';updateHookTypesDev();return mountOpaqueIdentifier();},unstable_isNewReconciler:enableNewReconciler};HooksDispatcherOnUpdateInDEV={readContext:function readContext(context,observedBits){return _readContext(context,observedBits);},useCallback:function useCallback(callback,deps){currentHookNameInDev='useCallback';updateHookTypesDev();return updateCallback(callback,deps);},useContext:function useContext(context,observedBits){currentHookNameInDev='useContext';updateHookTypesDev();return _readContext(context,observedBits);},useEffect:function useEffect(create,deps){currentHookNameInDev='useEffect';updateHookTypesDev();return updateEffect(create,deps);},useImperativeHandle:function useImperativeHandle(ref,create,deps){currentHookNameInDev='useImperativeHandle';updateHookTypesDev();return updateImperativeHandle(ref,create,deps);},useLayoutEffect:function useLayoutEffect(create,deps){currentHookNameInDev='useLayoutEffect';updateHookTypesDev();return updateLayoutEffect(create,deps);},useMemo:function useMemo(create,deps){currentHookNameInDev='useMemo';updateHookTypesDev();var prevDispatcher=ReactCurrentDispatcher$1.current;ReactCurrentDispatcher$1.current=InvalidNestedHooksDispatcherOnUpdateInDEV;try{return updateMemo(create,deps);}finally{ReactCurrentDispatcher$1.current=prevDispatcher;}},useReducer:function useReducer(reducer,initialArg,init){currentHookNameInDev='useReducer';updateHookTypesDev();var prevDispatcher=ReactCurrentDispatcher$1.current;ReactCurrentDispatcher$1.current=InvalidNestedHooksDispatcherOnUpdateInDEV;try{return updateReducer(reducer,initialArg,init);}finally{ReactCurrentDispatcher$1.current=prevDispatcher;}},useRef:function useRef(initialValue){currentHookNameInDev='useRef';updateHookTypesDev();return updateRef();},useState:function useState(initialState){currentHookNameInDev='useState';updateHookTypesDev();var prevDispatcher=ReactCurrentDispatcher$1.current;ReactCurrentDispatcher$1.current=InvalidNestedHooksDispatcherOnUpdateInDEV;try{return updateState(initialState);}finally{ReactCurrentDispatcher$1.current=prevDispatcher;}},useDebugValue:function useDebugValue(value,formatterFn){currentHookNameInDev='useDebugValue';updateHookTypesDev();return updateDebugValue();},useDeferredValue:function useDeferredValue(value){currentHookNameInDev='useDeferredValue';updateHookTypesDev();return updateDeferredValue(value);},useTransition:function useTransition(){currentHookNameInDev='useTransition';updateHookTypesDev();return updateTransition();},useMutableSource:function useMutableSource(source,getSnapshot,subscribe){currentHookNameInDev='useMutableSource';updateHookTypesDev();return updateMutableSource(source,getSnapshot,subscribe);},useOpaqueIdentifier:function useOpaqueIdentifier(){currentHookNameInDev='useOpaqueIdentifier';updateHookTypesDev();return updateOpaqueIdentifier();},unstable_isNewReconciler:enableNewReconciler};HooksDispatcherOnRerenderInDEV={readContext:function readContext(context,observedBits){return _readContext(context,observedBits);},useCallback:function useCallback(callback,deps){currentHookNameInDev='useCallback';updateHookTypesDev();return updateCallback(callback,deps);},useContext:function useContext(context,observedBits){currentHookNameInDev='useContext';updateHookTypesDev();return _readContext(context,observedBits);},useEffect:function useEffect(create,deps){currentHookNameInDev='useEffect';updateHookTypesDev();return updateEffect(create,deps);},useImperativeHandle:function useImperativeHandle(ref,create,deps){currentHookNameInDev='useImperativeHandle';updateHookTypesDev();return updateImperativeHandle(ref,create,deps);},useLayoutEffect:function useLayoutEffect(create,deps){currentHookNameInDev='useLayoutEffect';updateHookTypesDev();return updateLayoutEffect(create,deps);},useMemo:function useMemo(create,deps){currentHookNameInDev='useMemo';updateHookTypesDev();var prevDispatcher=ReactCurrentDispatcher$1.current;ReactCurrentDispatcher$1.current=InvalidNestedHooksDispatcherOnRerenderInDEV;try{return updateMemo(create,deps);}finally{ReactCurrentDispatcher$1.current=prevDispatcher;}},useReducer:function useReducer(reducer,initialArg,init){currentHookNameInDev='useReducer';updateHookTypesDev();var prevDispatcher=ReactCurrentDispatcher$1.current;ReactCurrentDispatcher$1.current=InvalidNestedHooksDispatcherOnRerenderInDEV;try{return rerenderReducer(reducer,initialArg,init);}finally{ReactCurrentDispatcher$1.current=prevDispatcher;}},useRef:function useRef(initialValue){currentHookNameInDev='useRef';updateHookTypesDev();return updateRef();},useState:function useState(initialState){currentHookNameInDev='useState';updateHookTypesDev();var prevDispatcher=ReactCurrentDispatcher$1.current;ReactCurrentDispatcher$1.current=InvalidNestedHooksDispatcherOnRerenderInDEV;try{return rerenderState(initialState);}finally{ReactCurrentDispatcher$1.current=prevDispatcher;}},useDebugValue:function useDebugValue(value,formatterFn){currentHookNameInDev='useDebugValue';updateHookTypesDev();return updateDebugValue();},useDeferredValue:function useDeferredValue(value){currentHookNameInDev='useDeferredValue';updateHookTypesDev();return rerenderDeferredValue(value);},useTransition:function useTransition(){currentHookNameInDev='useTransition';updateHookTypesDev();return rerenderTransition();},useMutableSource:function useMutableSource(source,getSnapshot,subscribe){currentHookNameInDev='useMutableSource';updateHookTypesDev();return updateMutableSource(source,getSnapshot,subscribe);},useOpaqueIdentifier:function useOpaqueIdentifier(){currentHookNameInDev='useOpaqueIdentifier';updateHookTypesDev();return rerenderOpaqueIdentifier();},unstable_isNewReconciler:enableNewReconciler};InvalidNestedHooksDispatcherOnMountInDEV={readContext:function readContext(context,observedBits){warnInvalidContextAccess();return _readContext(context,observedBits);},useCallback:function useCallback(callback,deps){currentHookNameInDev='useCallback';warnInvalidHookAccess();mountHookTypesDev();return mountCallback(callback,deps);},useContext:function useContext(context,observedBits){currentHookNameInDev='useContext';warnInvalidHookAccess();mountHookTypesDev();return _readContext(context,observedBits);},useEffect:function useEffect(create,deps){currentHookNameInDev='useEffect';warnInvalidHookAccess();mountHookTypesDev();return mountEffect(create,deps);},useImperativeHandle:function useImperativeHandle(ref,create,deps){currentHookNameInDev='useImperativeHandle';warnInvalidHookAccess();mountHookTypesDev();return mountImperativeHandle(ref,create,deps);},useLayoutEffect:function useLayoutEffect(create,deps){currentHookNameInDev='useLayoutEffect';warnInvalidHookAccess();mountHookTypesDev();return mountLayoutEffect(create,deps);},useMemo:function useMemo(create,deps){currentHookNameInDev='useMemo';warnInvalidHookAccess();mountHookTypesDev();var prevDispatcher=ReactCurrentDispatcher$1.current;ReactCurrentDispatcher$1.current=InvalidNestedHooksDispatcherOnMountInDEV;try{return mountMemo(create,deps);}finally{ReactCurrentDispatcher$1.current=prevDispatcher;}},useReducer:function useReducer(reducer,initialArg,init){currentHookNameInDev='useReducer';warnInvalidHookAccess();mountHookTypesDev();var prevDispatcher=ReactCurrentDispatcher$1.current;ReactCurrentDispatcher$1.current=InvalidNestedHooksDispatcherOnMountInDEV;try{return mountReducer(reducer,initialArg,init);}finally{ReactCurrentDispatcher$1.current=prevDispatcher;}},useRef:function useRef(initialValue){currentHookNameInDev='useRef';warnInvalidHookAccess();mountHookTypesDev();return mountRef(initialValue);},useState:function useState(initialState){currentHookNameInDev='useState';warnInvalidHookAccess();mountHookTypesDev();var prevDispatcher=ReactCurrentDispatcher$1.current;ReactCurrentDispatcher$1.current=InvalidNestedHooksDispatcherOnMountInDEV;try{return mountState(initialState);}finally{ReactCurrentDispatcher$1.current=prevDispatcher;}},useDebugValue:function useDebugValue(value,formatterFn){currentHookNameInDev='useDebugValue';warnInvalidHookAccess();mountHookTypesDev();return mountDebugValue();},useDeferredValue:function useDeferredValue(value){currentHookNameInDev='useDeferredValue';warnInvalidHookAccess();mountHookTypesDev();return mountDeferredValue(value);},useTransition:function useTransition(){currentHookNameInDev='useTransition';warnInvalidHookAccess();mountHookTypesDev();return mountTransition();},useMutableSource:function useMutableSource(source,getSnapshot,subscribe){currentHookNameInDev='useMutableSource';warnInvalidHookAccess();mountHookTypesDev();return mountMutableSource(source,getSnapshot,subscribe);},useOpaqueIdentifier:function useOpaqueIdentifier(){currentHookNameInDev='useOpaqueIdentifier';warnInvalidHookAccess();mountHookTypesDev();return mountOpaqueIdentifier();},unstable_isNewReconciler:enableNewReconciler};InvalidNestedHooksDispatcherOnUpdateInDEV={readContext:function readContext(context,observedBits){warnInvalidContextAccess();return _readContext(context,observedBits);},useCallback:function useCallback(callback,deps){currentHookNameInDev='useCallback';warnInvalidHookAccess();updateHookTypesDev();return updateCallback(callback,deps);},useContext:function useContext(context,observedBits){currentHookNameInDev='useContext';warnInvalidHookAccess();updateHookTypesDev();return _readContext(context,observedBits);},useEffect:function useEffect(create,deps){currentHookNameInDev='useEffect';warnInvalidHookAccess();updateHookTypesDev();return updateEffect(create,deps);},useImperativeHandle:function useImperativeHandle(ref,create,deps){currentHookNameInDev='useImperativeHandle';warnInvalidHookAccess();updateHookTypesDev();return updateImperativeHandle(ref,create,deps);},useLayoutEffect:function useLayoutEffect(create,deps){currentHookNameInDev='useLayoutEffect';warnInvalidHookAccess();updateHookTypesDev();return updateLayoutEffect(create,deps);},useMemo:function useMemo(create,deps){currentHookNameInDev='useMemo';warnInvalidHookAccess();updateHookTypesDev();var prevDispatcher=ReactCurrentDispatcher$1.current;ReactCurrentDispatcher$1.current=InvalidNestedHooksDispatcherOnUpdateInDEV;try{return updateMemo(create,deps);}finally{ReactCurrentDispatcher$1.current=prevDispatcher;}},useReducer:function useReducer(reducer,initialArg,init){currentHookNameInDev='useReducer';warnInvalidHookAccess();updateHookTypesDev();var prevDispatcher=ReactCurrentDispatcher$1.current;ReactCurrentDispatcher$1.current=InvalidNestedHooksDispatcherOnUpdateInDEV;try{return updateReducer(reducer,initialArg,init);}finally{ReactCurrentDispatcher$1.current=prevDispatcher;}},useRef:function useRef(initialValue){currentHookNameInDev='useRef';warnInvalidHookAccess();updateHookTypesDev();return updateRef();},useState:function useState(initialState){currentHookNameInDev='useState';warnInvalidHookAccess();updateHookTypesDev();var prevDispatcher=ReactCurrentDispatcher$1.current;ReactCurrentDispatcher$1.current=InvalidNestedHooksDispatcherOnUpdateInDEV;try{return updateState(initialState);}finally{ReactCurrentDispatcher$1.current=prevDispatcher;}},useDebugValue:function useDebugValue(value,formatterFn){currentHookNameInDev='useDebugValue';warnInvalidHookAccess();updateHookTypesDev();return updateDebugValue();},useDeferredValue:function useDeferredValue(value){currentHookNameInDev='useDeferredValue';warnInvalidHookAccess();updateHookTypesDev();return updateDeferredValue(value);},useTransition:function useTransition(){currentHookNameInDev='useTransition';warnInvalidHookAccess();updateHookTypesDev();return updateTransition();},useMutableSource:function useMutableSource(source,getSnapshot,subscribe){currentHookNameInDev='useMutableSource';warnInvalidHookAccess();updateHookTypesDev();return updateMutableSource(source,getSnapshot,subscribe);},useOpaqueIdentifier:function useOpaqueIdentifier(){currentHookNameInDev='useOpaqueIdentifier';warnInvalidHookAccess();updateHookTypesDev();return updateOpaqueIdentifier();},unstable_isNewReconciler:enableNewReconciler};InvalidNestedHooksDispatcherOnRerenderInDEV={readContext:function readContext(context,observedBits){warnInvalidContextAccess();return _readContext(context,observedBits);},useCallback:function useCallback(callback,deps){currentHookNameInDev='useCallback';warnInvalidHookAccess();updateHookTypesDev();return updateCallback(callback,deps);},useContext:function useContext(context,observedBits){currentHookNameInDev='useContext';warnInvalidHookAccess();updateHookTypesDev();return _readContext(context,observedBits);},useEffect:function useEffect(create,deps){currentHookNameInDev='useEffect';warnInvalidHookAccess();updateHookTypesDev();return updateEffect(create,deps);},useImperativeHandle:function useImperativeHandle(ref,create,deps){currentHookNameInDev='useImperativeHandle';warnInvalidHookAccess();updateHookTypesDev();return updateImperativeHandle(ref,create,deps);},useLayoutEffect:function useLayoutEffect(create,deps){currentHookNameInDev='useLayoutEffect';warnInvalidHookAccess();updateHookTypesDev();return updateLayoutEffect(create,deps);},useMemo:function useMemo(create,deps){currentHookNameInDev='useMemo';warnInvalidHookAccess();updateHookTypesDev();var prevDispatcher=ReactCurrentDispatcher$1.current;ReactCurrentDispatcher$1.current=InvalidNestedHooksDispatcherOnUpdateInDEV;try{return updateMemo(create,deps);}finally{ReactCurrentDispatcher$1.current=prevDispatcher;}},useReducer:function useReducer(reducer,initialArg,init){currentHookNameInDev='useReducer';warnInvalidHookAccess();updateHookTypesDev();var prevDispatcher=ReactCurrentDispatcher$1.current;ReactCurrentDispatcher$1.current=InvalidNestedHooksDispatcherOnUpdateInDEV;try{return rerenderReducer(reducer,initialArg,init);}finally{ReactCurrentDispatcher$1.current=prevDispatcher;}},useRef:function useRef(initialValue){currentHookNameInDev='useRef';warnInvalidHookAccess();updateHookTypesDev();return updateRef();},useState:function useState(initialState){currentHookNameInDev='useState';warnInvalidHookAccess();updateHookTypesDev();var prevDispatcher=ReactCurrentDispatcher$1.current;ReactCurrentDispatcher$1.current=InvalidNestedHooksDispatcherOnUpdateInDEV;try{return rerenderState(initialState);}finally{ReactCurrentDispatcher$1.current=prevDispatcher;}},useDebugValue:function useDebugValue(value,formatterFn){currentHookNameInDev='useDebugValue';warnInvalidHookAccess();updateHookTypesDev();return updateDebugValue();},useDeferredValue:function useDeferredValue(value){currentHookNameInDev='useDeferredValue';warnInvalidHookAccess();updateHookTypesDev();return rerenderDeferredValue(value);},useTransition:function useTransition(){currentHookNameInDev='useTransition';warnInvalidHookAccess();updateHookTypesDev();return rerenderTransition();},useMutableSource:function useMutableSource(source,getSnapshot,subscribe){currentHookNameInDev='useMutableSource';warnInvalidHookAccess();updateHookTypesDev();return updateMutableSource(source,getSnapshot,subscribe);},useOpaqueIdentifier:function useOpaqueIdentifier(){currentHookNameInDev='useOpaqueIdentifier';warnInvalidHookAccess();updateHookTypesDev();return rerenderOpaqueIdentifier();},unstable_isNewReconciler:enableNewReconciler};}var now$1=Scheduler.unstable_now;var commitTime=0;var profilerStartTime=-1;function getCommitTime(){return commitTime;}function recordCommitTime(){commitTime=now$1();}function startProfilerTimer(fiber){profilerStartTime=now$1();if(fiber.actualStartTime<0){fiber.actualStartTime=now$1();}}function stopProfilerTimerIfRunning(fiber){profilerStartTime=-1;}function stopProfilerTimerIfRunningAndRecordDelta(fiber,overrideBaseTime){if(profilerStartTime>=0){var elapsedTime=now$1()-profilerStartTime;fiber.actualDuration+=elapsedTime;if(overrideBaseTime){fiber.selfBaseDuration=elapsedTime;}profilerStartTime=-1;}}function transferActualDuration(fiber){// Transfer time spent rendering these children so we don't lose it
// after we rerender. This is used as a helper in special cases
// where we should count the work of multiple passes.
var child=fiber.child;while(child){fiber.actualDuration+=child.actualDuration;child=child.sibling;}}var ReactCurrentOwner$1=ReactSharedInternals.ReactCurrentOwner;var didReceiveUpdate=false;var didWarnAboutBadClass;var didWarnAboutModulePatternComponent;var didWarnAboutContextTypeOnFunctionComponent;var didWarnAboutGetDerivedStateOnFunctionComponent;var didWarnAboutFunctionRefs;var didWarnAboutReassigningProps;var didWarnAboutRevealOrder;var didWarnAboutTailOptions;{didWarnAboutBadClass={};didWarnAboutModulePatternComponent={};didWarnAboutContextTypeOnFunctionComponent={};didWarnAboutGetDerivedStateOnFunctionComponent={};didWarnAboutFunctionRefs={};didWarnAboutReassigningProps=false;didWarnAboutRevealOrder={};didWarnAboutTailOptions={};}function reconcileChildren(current,workInProgress,nextChildren,renderLanes){if(current===null){// If this is a fresh new component that hasn't been rendered yet, we
// won't update its child set by applying minimal side-effects. Instead,
// we will add them all to the child before it gets rendered. That means
// we can optimize this reconciliation pass by not tracking side-effects.
workInProgress.child=mountChildFibers(workInProgress,null,nextChildren,renderLanes);}else {// If the current child is the same as the work in progress, it means that
// we haven't yet started any work on these children. Therefore, we use
// the clone algorithm to create a copy of all the current children.
// If we had any progressed work already, that is invalid at this point so
// let's throw it out.
workInProgress.child=reconcileChildFibers(workInProgress,current.child,nextChildren,renderLanes);}}function forceUnmountCurrentAndReconcile(current,workInProgress,nextChildren,renderLanes){// This function is fork of reconcileChildren. It's used in cases where we
// want to reconcile without matching against the existing set. This has the
// effect of all current children being unmounted; even if the type and key
// are the same, the old child is unmounted and a new child is created.
//
// To do this, we're going to go through the reconcile algorithm twice. In
// the first pass, we schedule a deletion for all the current children by
// passing null.
workInProgress.child=reconcileChildFibers(workInProgress,current.child,null,renderLanes);// In the second pass, we mount the new children. The trick here is that we
// pass null in place of where we usually pass the current child set. This has
// the effect of remounting all children regardless of whether their
// identities match.
workInProgress.child=reconcileChildFibers(workInProgress,null,nextChildren,renderLanes);}function updateForwardRef(current,workInProgress,Component,nextProps,renderLanes){// TODO: current can be non-null here even if the component
// hasn't yet mounted. This happens after the first render suspends.
// We'll need to figure out if this is fine or can cause issues.
{if(workInProgress.type!==workInProgress.elementType){// Lazy component props can't be validated in createElement
// because they're only guaranteed to be resolved here.
var innerPropTypes=Component.propTypes;if(innerPropTypes){checkPropTypes(innerPropTypes,nextProps,// Resolved props
'prop',getComponentName(Component));}}}var render=Component.render;var ref=workInProgress.ref;// The rest is a fork of updateFunctionComponent
var nextChildren;prepareToReadContext(workInProgress,renderLanes);{ReactCurrentOwner$1.current=workInProgress;setIsRendering(true);nextChildren=renderWithHooks(current,workInProgress,render,nextProps,ref,renderLanes);if(workInProgress.mode&StrictMode){disableLogs();try{nextChildren=renderWithHooks(current,workInProgress,render,nextProps,ref,renderLanes);}finally{reenableLogs();}}setIsRendering(false);}if(current!==null&&!didReceiveUpdate){bailoutHooks(current,workInProgress,renderLanes);return bailoutOnAlreadyFinishedWork(current,workInProgress,renderLanes);}// React DevTools reads this flag.
workInProgress.flags|=PerformedWork;reconcileChildren(current,workInProgress,nextChildren,renderLanes);return workInProgress.child;}function updateMemoComponent(current,workInProgress,Component,nextProps,updateLanes,renderLanes){if(current===null){var type=Component.type;if(isSimpleFunctionComponent(type)&&Component.compare===null&&// SimpleMemoComponent codepath doesn't resolve outer props either.
Component.defaultProps===undefined){var resolvedType=type;{resolvedType=resolveFunctionForHotReloading(type);}// If this is a plain function component without default props,
// and with only the default shallow comparison, we upgrade it
// to a SimpleMemoComponent to allow fast path updates.
workInProgress.tag=SimpleMemoComponent;workInProgress.type=resolvedType;{validateFunctionComponentInDev(workInProgress,type);}return updateSimpleMemoComponent(current,workInProgress,resolvedType,nextProps,updateLanes,renderLanes);}{var innerPropTypes=type.propTypes;if(innerPropTypes){// Inner memo component props aren't currently validated in createElement.
// We could move it there, but we'd still need this for lazy code path.
checkPropTypes(innerPropTypes,nextProps,// Resolved props
'prop',getComponentName(type));}}var child=createFiberFromTypeAndProps(Component.type,null,nextProps,workInProgress,workInProgress.mode,renderLanes);child.ref=workInProgress.ref;child["return"]=workInProgress;workInProgress.child=child;return child;}{var _type=Component.type;var _innerPropTypes=_type.propTypes;if(_innerPropTypes){// Inner memo component props aren't currently validated in createElement.
// We could move it there, but we'd still need this for lazy code path.
checkPropTypes(_innerPropTypes,nextProps,// Resolved props
'prop',getComponentName(_type));}}var currentChild=current.child;// This is always exactly one child
if(!includesSomeLane(updateLanes,renderLanes)){// This will be the props with resolved defaultProps,
// unlike current.memoizedProps which will be the unresolved ones.
var prevProps=currentChild.memoizedProps;// Default to shallow comparison
var compare=Component.compare;compare=compare!==null?compare:shallowEqual;if(compare(prevProps,nextProps)&&current.ref===workInProgress.ref){return bailoutOnAlreadyFinishedWork(current,workInProgress,renderLanes);}}// React DevTools reads this flag.
workInProgress.flags|=PerformedWork;var newChild=createWorkInProgress(currentChild,nextProps);newChild.ref=workInProgress.ref;newChild["return"]=workInProgress;workInProgress.child=newChild;return newChild;}function updateSimpleMemoComponent(current,workInProgress,Component,nextProps,updateLanes,renderLanes){// TODO: current can be non-null here even if the component
// hasn't yet mounted. This happens when the inner render suspends.
// We'll need to figure out if this is fine or can cause issues.
{if(workInProgress.type!==workInProgress.elementType){// Lazy component props can't be validated in createElement
// because they're only guaranteed to be resolved here.
var outerMemoType=workInProgress.elementType;if(outerMemoType.$$typeof===REACT_LAZY_TYPE){// We warn when you define propTypes on lazy()
// so let's just skip over it to find memo() outer wrapper.
// Inner props for memo are validated later.
var lazyComponent=outerMemoType;var payload=lazyComponent._payload;var init=lazyComponent._init;try{outerMemoType=init(payload);}catch(x){outerMemoType=null;}// Inner propTypes will be validated in the function component path.
var outerPropTypes=outerMemoType&&outerMemoType.propTypes;if(outerPropTypes){checkPropTypes(outerPropTypes,nextProps,// Resolved (SimpleMemoComponent has no defaultProps)
'prop',getComponentName(outerMemoType));}}}}if(current!==null){var prevProps=current.memoizedProps;if(shallowEqual(prevProps,nextProps)&&current.ref===workInProgress.ref&&// Prevent bailout if the implementation changed due to hot reload.
workInProgress.type===current.type){didReceiveUpdate=false;if(!includesSomeLane(renderLanes,updateLanes)){// The pending lanes were cleared at the beginning of beginWork. We're
// about to bail out, but there might be other lanes that weren't
// included in the current render. Usually, the priority level of the
// remaining updates is accumlated during the evaluation of the
// component (i.e. when processing the update queue). But since since
// we're bailing out early *without* evaluating the component, we need
// to account for it here, too. Reset to the value of the current fiber.
// NOTE: This only applies to SimpleMemoComponent, not MemoComponent,
// because a MemoComponent fiber does not have hooks or an update queue;
// rather, it wraps around an inner component, which may or may not
// contains hooks.
// TODO: Move the reset at in beginWork out of the common path so that
// this is no longer necessary.
workInProgress.lanes=current.lanes;return bailoutOnAlreadyFinishedWork(current,workInProgress,renderLanes);}else if((current.flags&ForceUpdateForLegacySuspense)!==NoFlags){// This is a special case that only exists for legacy mode.
// See https://github.com/facebook/react/pull/19216.
didReceiveUpdate=true;}}}return updateFunctionComponent(current,workInProgress,Component,nextProps,renderLanes);}function updateOffscreenComponent(current,workInProgress,renderLanes){var nextProps=workInProgress.pendingProps;var nextChildren=nextProps.children;var prevState=current!==null?current.memoizedState:null;if(nextProps.mode==='hidden'||nextProps.mode==='unstable-defer-without-hiding'){if((workInProgress.mode&ConcurrentMode)===NoMode){// In legacy sync mode, don't defer the subtree. Render it now.
// TODO: Figure out what we should do in Blocking mode.
var nextState={baseLanes:NoLanes};workInProgress.memoizedState=nextState;pushRenderLanes(workInProgress,renderLanes);}else if(!includesSomeLane(renderLanes,OffscreenLane)){var nextBaseLanes;if(prevState!==null){var prevBaseLanes=prevState.baseLanes;nextBaseLanes=mergeLanes(prevBaseLanes,renderLanes);}else {nextBaseLanes=renderLanes;}// Schedule this fiber to re-render at offscreen priority. Then bailout.
{markSpawnedWork(OffscreenLane);}workInProgress.lanes=workInProgress.childLanes=laneToLanes(OffscreenLane);var _nextState={baseLanes:nextBaseLanes};workInProgress.memoizedState=_nextState;// We're about to bail out, but we need to push this to the stack anyway
// to avoid a push/pop misalignment.
pushRenderLanes(workInProgress,nextBaseLanes);return null;}else {// Rendering at offscreen, so we can clear the base lanes.
var _nextState2={baseLanes:NoLanes};workInProgress.memoizedState=_nextState2;// Push the lanes that were skipped when we bailed out.
var subtreeRenderLanes=prevState!==null?prevState.baseLanes:renderLanes;pushRenderLanes(workInProgress,subtreeRenderLanes);}}else {var _subtreeRenderLanes;if(prevState!==null){_subtreeRenderLanes=mergeLanes(prevState.baseLanes,renderLanes);// Since we're not hidden anymore, reset the state
workInProgress.memoizedState=null;}else {// We weren't previously hidden, and we still aren't, so there's nothing
// special to do. Need to push to the stack regardless, though, to avoid
// a push/pop misalignment.
_subtreeRenderLanes=renderLanes;}pushRenderLanes(workInProgress,_subtreeRenderLanes);}reconcileChildren(current,workInProgress,nextChildren,renderLanes);return workInProgress.child;}// Note: These happen to have identical begin phases, for now. We shouldn't hold
// ourselves to this constraint, though. If the behavior diverges, we should
// fork the function.
var updateLegacyHiddenComponent=updateOffscreenComponent;function updateFragment(current,workInProgress,renderLanes){var nextChildren=workInProgress.pendingProps;reconcileChildren(current,workInProgress,nextChildren,renderLanes);return workInProgress.child;}function updateMode(current,workInProgress,renderLanes){var nextChildren=workInProgress.pendingProps.children;reconcileChildren(current,workInProgress,nextChildren,renderLanes);return workInProgress.child;}function updateProfiler(current,workInProgress,renderLanes){{workInProgress.flags|=Update;// Reset effect durations for the next eventual effect phase.
// These are reset during render to allow the DevTools commit hook a chance to read them,
var stateNode=workInProgress.stateNode;stateNode.effectDuration=0;stateNode.passiveEffectDuration=0;}var nextProps=workInProgress.pendingProps;var nextChildren=nextProps.children;reconcileChildren(current,workInProgress,nextChildren,renderLanes);return workInProgress.child;}function markRef(current,workInProgress){var ref=workInProgress.ref;if(current===null&&ref!==null||current!==null&&current.ref!==ref){// Schedule a Ref effect
workInProgress.flags|=Ref;}}function updateFunctionComponent(current,workInProgress,Component,nextProps,renderLanes){{if(workInProgress.type!==workInProgress.elementType){// Lazy component props can't be validated in createElement
// because they're only guaranteed to be resolved here.
var innerPropTypes=Component.propTypes;if(innerPropTypes){checkPropTypes(innerPropTypes,nextProps,// Resolved props
'prop',getComponentName(Component));}}}var context;{var unmaskedContext=getUnmaskedContext(workInProgress,Component,true);context=getMaskedContext(workInProgress,unmaskedContext);}var nextChildren;prepareToReadContext(workInProgress,renderLanes);{ReactCurrentOwner$1.current=workInProgress;setIsRendering(true);nextChildren=renderWithHooks(current,workInProgress,Component,nextProps,context,renderLanes);if(workInProgress.mode&StrictMode){disableLogs();try{nextChildren=renderWithHooks(current,workInProgress,Component,nextProps,context,renderLanes);}finally{reenableLogs();}}setIsRendering(false);}if(current!==null&&!didReceiveUpdate){bailoutHooks(current,workInProgress,renderLanes);return bailoutOnAlreadyFinishedWork(current,workInProgress,renderLanes);}// React DevTools reads this flag.
workInProgress.flags|=PerformedWork;reconcileChildren(current,workInProgress,nextChildren,renderLanes);return workInProgress.child;}function updateClassComponent(current,workInProgress,Component,nextProps,renderLanes){{if(workInProgress.type!==workInProgress.elementType){// Lazy component props can't be validated in createElement
// because they're only guaranteed to be resolved here.
var innerPropTypes=Component.propTypes;if(innerPropTypes){checkPropTypes(innerPropTypes,nextProps,// Resolved props
'prop',getComponentName(Component));}}}// Push context providers early to prevent context stack mismatches.
// During mounting we don't know the child context yet as the instance doesn't exist.
// We will invalidate the child context in finishClassComponent() right after rendering.
var hasContext;if(isContextProvider(Component)){hasContext=true;pushContextProvider(workInProgress);}else {hasContext=false;}prepareToReadContext(workInProgress,renderLanes);var instance=workInProgress.stateNode;var shouldUpdate;if(instance===null){if(current!==null){// A class component without an instance only mounts if it suspended
// inside a non-concurrent tree, in an inconsistent state. We want to
// treat it like a new mount, even though an empty version of it already
// committed. Disconnect the alternate pointers.
current.alternate=null;workInProgress.alternate=null;// Since this is conceptually a new fiber, schedule a Placement effect
workInProgress.flags|=Placement;}// In the initial pass we might need to construct the instance.
constructClassInstance(workInProgress,Component,nextProps);mountClassInstance(workInProgress,Component,nextProps,renderLanes);shouldUpdate=true;}else if(current===null){// In a resume, we'll already have an instance we can reuse.
shouldUpdate=resumeMountClassInstance(workInProgress,Component,nextProps,renderLanes);}else {shouldUpdate=updateClassInstance(current,workInProgress,Component,nextProps,renderLanes);}var nextUnitOfWork=finishClassComponent(current,workInProgress,Component,shouldUpdate,hasContext,renderLanes);{var inst=workInProgress.stateNode;if(shouldUpdate&&inst.props!==nextProps){if(!didWarnAboutReassigningProps){error('It looks like %s is reassigning its own `this.props` while rendering. '+'This is not supported and can lead to confusing bugs.',getComponentName(workInProgress.type)||'a component');}didWarnAboutReassigningProps=true;}}return nextUnitOfWork;}function finishClassComponent(current,workInProgress,Component,shouldUpdate,hasContext,renderLanes){// Refs should update even if shouldComponentUpdate returns false
markRef(current,workInProgress);var didCaptureError=(workInProgress.flags&DidCapture)!==NoFlags;if(!shouldUpdate&&!didCaptureError){// Context providers should defer to sCU for rendering
if(hasContext){invalidateContextProvider(workInProgress,Component,false);}return bailoutOnAlreadyFinishedWork(current,workInProgress,renderLanes);}var instance=workInProgress.stateNode;// Rerender
ReactCurrentOwner$1.current=workInProgress;var nextChildren;if(didCaptureError&&typeof Component.getDerivedStateFromError!=='function'){// If we captured an error, but getDerivedStateFromError is not defined,
// unmount all the children. componentDidCatch will schedule an update to
// re-render a fallback. This is temporary until we migrate everyone to
// the new API.
// TODO: Warn in a future release.
nextChildren=null;{stopProfilerTimerIfRunning();}}else {{setIsRendering(true);nextChildren=instance.render();if(workInProgress.mode&StrictMode){disableLogs();try{instance.render();}finally{reenableLogs();}}setIsRendering(false);}}// React DevTools reads this flag.
workInProgress.flags|=PerformedWork;if(current!==null&&didCaptureError){// If we're recovering from an error, reconcile without reusing any of
// the existing children. Conceptually, the normal children and the children
// that are shown on error are two different sets, so we shouldn't reuse
// normal children even if their identities match.
forceUnmountCurrentAndReconcile(current,workInProgress,nextChildren,renderLanes);}else {reconcileChildren(current,workInProgress,nextChildren,renderLanes);}// Memoize state using the values we just used to render.
// TODO: Restructure so we never read values from the instance.
workInProgress.memoizedState=instance.state;// The context might have changed so we need to recalculate it.
if(hasContext){invalidateContextProvider(workInProgress,Component,true);}return workInProgress.child;}function pushHostRootContext(workInProgress){var root=workInProgress.stateNode;if(root.pendingContext){pushTopLevelContextObject(workInProgress,root.pendingContext,root.pendingContext!==root.context);}else if(root.context){// Should always be set
pushTopLevelContextObject(workInProgress,root.context,false);}pushHostContainer(workInProgress,root.containerInfo);}function updateHostRoot(current,workInProgress,renderLanes){pushHostRootContext(workInProgress);var updateQueue=workInProgress.updateQueue;if(!(current!==null&&updateQueue!==null)){{throw Error("If the root does not have an updateQueue, we should have already bailed out. This error is likely caused by a bug in React. Please file an issue.");}}var nextProps=workInProgress.pendingProps;var prevState=workInProgress.memoizedState;var prevChildren=prevState!==null?prevState.element:null;cloneUpdateQueue(current,workInProgress);processUpdateQueue(workInProgress,nextProps,null,renderLanes);var nextState=workInProgress.memoizedState;// Caution: React DevTools currently depends on this property
// being called "element".
var nextChildren=nextState.element;if(nextChildren===prevChildren){resetHydrationState();return bailoutOnAlreadyFinishedWork(current,workInProgress,renderLanes);}var root=workInProgress.stateNode;if(root.hydrate&&enterHydrationState(workInProgress)){// If we don't have any current children this might be the first pass.
// We always try to hydrate. If this isn't a hydration pass there won't
// be any children to hydrate which is effectively the same thing as
// not hydrating.
{var mutableSourceEagerHydrationData=root.mutableSourceEagerHydrationData;if(mutableSourceEagerHydrationData!=null){for(var i=0;i<mutableSourceEagerHydrationData.length;i+=2){var mutableSource=mutableSourceEagerHydrationData[i];var version=mutableSourceEagerHydrationData[i+1];setWorkInProgressVersion(mutableSource,version);}}}var child=mountChildFibers(workInProgress,null,nextChildren,renderLanes);workInProgress.child=child;var node=child;while(node){// Mark each child as hydrating. This is a fast path to know whether this
// tree is part of a hydrating tree. This is used to determine if a child
// node has fully mounted yet, and for scheduling event replaying.
// Conceptually this is similar to Placement in that a new subtree is
// inserted into the React tree here. It just happens to not need DOM
// mutations because it already exists.
node.flags=node.flags&~Placement|Hydrating;node=node.sibling;}}else {// Otherwise reset hydration state in case we aborted and resumed another
// root.
reconcileChildren(current,workInProgress,nextChildren,renderLanes);resetHydrationState();}return workInProgress.child;}function updateHostComponent(current,workInProgress,renderLanes){pushHostContext(workInProgress);if(current===null){tryToClaimNextHydratableInstance(workInProgress);}var type=workInProgress.type;var nextProps=workInProgress.pendingProps;var prevProps=current!==null?current.memoizedProps:null;var nextChildren=nextProps.children;var isDirectTextChild=shouldSetTextContent(type,nextProps);if(isDirectTextChild){// We special case a direct text child of a host node. This is a common
// case. We won't handle it as a reified child. We will instead handle
// this in the host environment that also has access to this prop. That
// avoids allocating another HostText fiber and traversing it.
nextChildren=null;}else if(prevProps!==null&&shouldSetTextContent(type,prevProps)){// If we're switching from a direct text child to a normal child, or to
// empty, we need to schedule the text content to be reset.
workInProgress.flags|=ContentReset;}markRef(current,workInProgress);reconcileChildren(current,workInProgress,nextChildren,renderLanes);return workInProgress.child;}function updateHostText(current,workInProgress){if(current===null){tryToClaimNextHydratableInstance(workInProgress);}// Nothing to do here. This is terminal. We'll do the completion step
// immediately after.
return null;}function mountLazyComponent(_current,workInProgress,elementType,updateLanes,renderLanes){if(_current!==null){// A lazy component only mounts if it suspended inside a non-
// concurrent tree, in an inconsistent state. We want to treat it like
// a new mount, even though an empty version of it already committed.
// Disconnect the alternate pointers.
_current.alternate=null;workInProgress.alternate=null;// Since this is conceptually a new fiber, schedule a Placement effect
workInProgress.flags|=Placement;}var props=workInProgress.pendingProps;var lazyComponent=elementType;var payload=lazyComponent._payload;var init=lazyComponent._init;var Component=init(payload);// Store the unwrapped component in the type.
workInProgress.type=Component;var resolvedTag=workInProgress.tag=resolveLazyComponentTag(Component);var resolvedProps=resolveDefaultProps(Component,props);var child;switch(resolvedTag){case FunctionComponent:{{validateFunctionComponentInDev(workInProgress,Component);workInProgress.type=Component=resolveFunctionForHotReloading(Component);}child=updateFunctionComponent(null,workInProgress,Component,resolvedProps,renderLanes);return child;}case ClassComponent:{{workInProgress.type=Component=resolveClassForHotReloading(Component);}child=updateClassComponent(null,workInProgress,Component,resolvedProps,renderLanes);return child;}case ForwardRef:{{workInProgress.type=Component=resolveForwardRefForHotReloading(Component);}child=updateForwardRef(null,workInProgress,Component,resolvedProps,renderLanes);return child;}case MemoComponent:{{if(workInProgress.type!==workInProgress.elementType){var outerPropTypes=Component.propTypes;if(outerPropTypes){checkPropTypes(outerPropTypes,resolvedProps,// Resolved for outer only
'prop',getComponentName(Component));}}}child=updateMemoComponent(null,workInProgress,Component,resolveDefaultProps(Component.type,resolvedProps),// The inner type can have defaults too
updateLanes,renderLanes);return child;}}var hint='';{if(Component!==null&&_typeof$1(Component)==='object'&&Component.$$typeof===REACT_LAZY_TYPE){hint=' Did you wrap a component in React.lazy() more than once?';}}// This message intentionally doesn't mention ForwardRef or MemoComponent
// because the fact that it's a separate type of work is an
// implementation detail.
{{throw Error("Element type is invalid. Received a promise that resolves to: "+Component+". Lazy element type must resolve to a class or function."+hint);}}}function mountIncompleteClassComponent(_current,workInProgress,Component,nextProps,renderLanes){if(_current!==null){// An incomplete component only mounts if it suspended inside a non-
// concurrent tree, in an inconsistent state. We want to treat it like
// a new mount, even though an empty version of it already committed.
// Disconnect the alternate pointers.
_current.alternate=null;workInProgress.alternate=null;// Since this is conceptually a new fiber, schedule a Placement effect
workInProgress.flags|=Placement;}// Promote the fiber to a class and try rendering again.
workInProgress.tag=ClassComponent;// The rest of this function is a fork of `updateClassComponent`
// Push context providers early to prevent context stack mismatches.
// During mounting we don't know the child context yet as the instance doesn't exist.
// We will invalidate the child context in finishClassComponent() right after rendering.
var hasContext;if(isContextProvider(Component)){hasContext=true;pushContextProvider(workInProgress);}else {hasContext=false;}prepareToReadContext(workInProgress,renderLanes);constructClassInstance(workInProgress,Component,nextProps);mountClassInstance(workInProgress,Component,nextProps,renderLanes);return finishClassComponent(null,workInProgress,Component,true,hasContext,renderLanes);}function mountIndeterminateComponent(_current,workInProgress,Component,renderLanes){if(_current!==null){// An indeterminate component only mounts if it suspended inside a non-
// concurrent tree, in an inconsistent state. We want to treat it like
// a new mount, even though an empty version of it already committed.
// Disconnect the alternate pointers.
_current.alternate=null;workInProgress.alternate=null;// Since this is conceptually a new fiber, schedule a Placement effect
workInProgress.flags|=Placement;}var props=workInProgress.pendingProps;var context;{var unmaskedContext=getUnmaskedContext(workInProgress,Component,false);context=getMaskedContext(workInProgress,unmaskedContext);}prepareToReadContext(workInProgress,renderLanes);var value;{if(Component.prototype&&typeof Component.prototype.render==='function'){var componentName=getComponentName(Component)||'Unknown';if(!didWarnAboutBadClass[componentName]){error("The <%s /> component appears to have a render method, but doesn't extend React.Component. "+'This is likely to cause errors. Change %s to extend React.Component instead.',componentName,componentName);didWarnAboutBadClass[componentName]=true;}}if(workInProgress.mode&StrictMode){ReactStrictModeWarnings.recordLegacyContextWarning(workInProgress,null);}setIsRendering(true);ReactCurrentOwner$1.current=workInProgress;value=renderWithHooks(null,workInProgress,Component,props,context,renderLanes);setIsRendering(false);}// React DevTools reads this flag.
workInProgress.flags|=PerformedWork;{// Support for module components is deprecated and is removed behind a flag.
// Whether or not it would crash later, we want to show a good message in DEV first.
if(_typeof$1(value)==='object'&&value!==null&&typeof value.render==='function'&&value.$$typeof===undefined){var _componentName=getComponentName(Component)||'Unknown';if(!didWarnAboutModulePatternComponent[_componentName]){error('The <%s /> component appears to be a function component that returns a class instance. '+'Change %s to a class that extends React.Component instead. '+"If you can't use a class try assigning the prototype on the function as a workaround. "+"`%s.prototype = React.Component.prototype`. Don't use an arrow function since it "+'cannot be called with `new` by React.',_componentName,_componentName,_componentName);didWarnAboutModulePatternComponent[_componentName]=true;}}}if(// Run these checks in production only if the flag is off.
// Eventually we'll delete this branch altogether.
_typeof$1(value)==='object'&&value!==null&&typeof value.render==='function'&&value.$$typeof===undefined){{var _componentName2=getComponentName(Component)||'Unknown';if(!didWarnAboutModulePatternComponent[_componentName2]){error('The <%s /> component appears to be a function component that returns a class instance. '+'Change %s to a class that extends React.Component instead. '+"If you can't use a class try assigning the prototype on the function as a workaround. "+"`%s.prototype = React.Component.prototype`. Don't use an arrow function since it "+'cannot be called with `new` by React.',_componentName2,_componentName2,_componentName2);didWarnAboutModulePatternComponent[_componentName2]=true;}}// Proceed under the assumption that this is a class instance
workInProgress.tag=ClassComponent;// Throw out any hooks that were used.
workInProgress.memoizedState=null;workInProgress.updateQueue=null;// Push context providers early to prevent context stack mismatches.
// During mounting we don't know the child context yet as the instance doesn't exist.
// We will invalidate the child context in finishClassComponent() right after rendering.
var hasContext=false;if(isContextProvider(Component)){hasContext=true;pushContextProvider(workInProgress);}else {hasContext=false;}workInProgress.memoizedState=value.state!==null&&value.state!==undefined?value.state:null;initializeUpdateQueue(workInProgress);var getDerivedStateFromProps=Component.getDerivedStateFromProps;if(typeof getDerivedStateFromProps==='function'){applyDerivedStateFromProps(workInProgress,Component,getDerivedStateFromProps,props);}adoptClassInstance(workInProgress,value);mountClassInstance(workInProgress,Component,props,renderLanes);return finishClassComponent(null,workInProgress,Component,true,hasContext,renderLanes);}else {// Proceed under the assumption that this is a function component
workInProgress.tag=FunctionComponent;{if(workInProgress.mode&StrictMode){disableLogs();try{value=renderWithHooks(null,workInProgress,Component,props,context,renderLanes);}finally{reenableLogs();}}}reconcileChildren(null,workInProgress,value,renderLanes);{validateFunctionComponentInDev(workInProgress,Component);}return workInProgress.child;}}function validateFunctionComponentInDev(workInProgress,Component){{if(Component){if(Component.childContextTypes){error('%s(...): childContextTypes cannot be defined on a function component.',Component.displayName||Component.name||'Component');}}if(workInProgress.ref!==null){var info='';var ownerName=getCurrentFiberOwnerNameInDevOrNull();if(ownerName){info+='\n\nCheck the render method of `'+ownerName+'`.';}var warningKey=ownerName||workInProgress._debugID||'';var debugSource=workInProgress._debugSource;if(debugSource){warningKey=debugSource.fileName+':'+debugSource.lineNumber;}if(!didWarnAboutFunctionRefs[warningKey]){didWarnAboutFunctionRefs[warningKey]=true;error('Function components cannot be given refs. '+'Attempts to access this ref will fail. '+'Did you mean to use React.forwardRef()?%s',info);}}if(typeof Component.getDerivedStateFromProps==='function'){var _componentName3=getComponentName(Component)||'Unknown';if(!didWarnAboutGetDerivedStateOnFunctionComponent[_componentName3]){error('%s: Function components do not support getDerivedStateFromProps.',_componentName3);didWarnAboutGetDerivedStateOnFunctionComponent[_componentName3]=true;}}if(_typeof$1(Component.contextType)==='object'&&Component.contextType!==null){var _componentName4=getComponentName(Component)||'Unknown';if(!didWarnAboutContextTypeOnFunctionComponent[_componentName4]){error('%s: Function components do not support contextType.',_componentName4);didWarnAboutContextTypeOnFunctionComponent[_componentName4]=true;}}}}var SUSPENDED_MARKER={dehydrated:null,retryLane:NoLane};function mountSuspenseOffscreenState(renderLanes){return {baseLanes:renderLanes};}function updateSuspenseOffscreenState(prevOffscreenState,renderLanes){return {baseLanes:mergeLanes(prevOffscreenState.baseLanes,renderLanes)};}// TODO: Probably should inline this back
function shouldRemainOnFallback(suspenseContext,current,workInProgress,renderLanes){// If we're already showing a fallback, there are cases where we need to
// remain on that fallback regardless of whether the content has resolved.
// For example, SuspenseList coordinates when nested content appears.
if(current!==null){var suspenseState=current.memoizedState;if(suspenseState===null){// Currently showing content. Don't hide it, even if ForceSuspenseFallack
// is true. More precise name might be "ForceRemainSuspenseFallback".
// Note: This is a factoring smell. Can't remain on a fallback if there's
// no fallback to remain on.
return false;}}// Not currently showing content. Consult the Suspense context.
return hasSuspenseContext(suspenseContext,ForceSuspenseFallback);}function getRemainingWorkInPrimaryTree(current,renderLanes){// TODO: Should not remove render lanes that were pinged during this render
return removeLanes(current.childLanes,renderLanes);}function updateSuspenseComponent(current,workInProgress,renderLanes){var nextProps=workInProgress.pendingProps;// This is used by DevTools to force a boundary to suspend.
{if(shouldSuspend(workInProgress)){workInProgress.flags|=DidCapture;}}var suspenseContext=suspenseStackCursor.current;var showFallback=false;var didSuspend=(workInProgress.flags&DidCapture)!==NoFlags;if(didSuspend||shouldRemainOnFallback(suspenseContext,current)){// Something in this boundary's subtree already suspended. Switch to
// rendering the fallback children.
showFallback=true;workInProgress.flags&=~DidCapture;}else {// Attempting the main content
if(current===null||current.memoizedState!==null){// This is a new mount or this boundary is already showing a fallback state.
// Mark this subtree context as having at least one invisible parent that could
// handle the fallback state.
// Boundaries without fallbacks or should be avoided are not considered since
// they cannot handle preferred fallback states.
if(nextProps.fallback!==undefined&&nextProps.unstable_avoidThisFallback!==true){suspenseContext=addSubtreeSuspenseContext(suspenseContext,InvisibleParentSuspenseContext);}}}suspenseContext=setDefaultShallowSuspenseContext(suspenseContext);pushSuspenseContext(workInProgress,suspenseContext);// OK, the next part is confusing. We're about to reconcile the Suspense
// boundary's children. This involves some custom reconcilation logic. Two
// main reasons this is so complicated.
//
// First, Legacy Mode has different semantics for backwards compatibility. The
// primary tree will commit in an inconsistent state, so when we do the
// second pass to render the fallback, we do some exceedingly, uh, clever
// hacks to make that not totally break. Like transferring effects and
// deletions from hidden tree. In Concurrent Mode, it's much simpler,
// because we bailout on the primary tree completely and leave it in its old
// state, no effects. Same as what we do for Offscreen (except that
// Offscreen doesn't have the first render pass).
//
// Second is hydration. During hydration, the Suspense fiber has a slightly
// different layout, where the child points to a dehydrated fragment, which
// contains the DOM rendered by the server.
//
// Third, even if you set all that aside, Suspense is like error boundaries in
// that we first we try to render one tree, and if that fails, we render again
// and switch to a different tree. Like a try/catch block. So we have to track
// which branch we're currently rendering. Ideally we would model this using
// a stack.
if(current===null){// Initial mount
// If we're currently hydrating, try to hydrate this boundary.
// But only if this has a fallback.
if(nextProps.fallback!==undefined){tryToClaimNextHydratableInstance(workInProgress);// This could've been a dehydrated suspense component.
}var nextPrimaryChildren=nextProps.children;var nextFallbackChildren=nextProps.fallback;if(showFallback){var fallbackFragment=mountSuspenseFallbackChildren(workInProgress,nextPrimaryChildren,nextFallbackChildren,renderLanes);var primaryChildFragment=workInProgress.child;primaryChildFragment.memoizedState=mountSuspenseOffscreenState(renderLanes);workInProgress.memoizedState=SUSPENDED_MARKER;return fallbackFragment;}else if(typeof nextProps.unstable_expectedLoadTime==='number'){// This is a CPU-bound tree. Skip this tree and show a placeholder to
// unblock the surrounding content. Then immediately retry after the
// initial commit.
var _fallbackFragment=mountSuspenseFallbackChildren(workInProgress,nextPrimaryChildren,nextFallbackChildren,renderLanes);var _primaryChildFragment=workInProgress.child;_primaryChildFragment.memoizedState=mountSuspenseOffscreenState(renderLanes);workInProgress.memoizedState=SUSPENDED_MARKER;// Since nothing actually suspended, there will nothing to ping this to
// get it started back up to attempt the next item. While in terms of
// priority this work has the same priority as this current render, it's
// not part of the same transition once the transition has committed. If
// it's sync, we still want to yield so that it can be painted.
// Conceptually, this is really the same as pinging. We can use any
// RetryLane even if it's the one currently rendering since we're leaving
// it behind on this node.
workInProgress.lanes=SomeRetryLane;{markSpawnedWork(SomeRetryLane);}return _fallbackFragment;}else {return mountSuspensePrimaryChildren(workInProgress,nextPrimaryChildren,renderLanes);}}else {// This is an update.
// If the current fiber has a SuspenseState, that means it's already showing
// a fallback.
var prevState=current.memoizedState;if(prevState!==null){if(showFallback){var _nextFallbackChildren2=nextProps.fallback;var _nextPrimaryChildren2=nextProps.children;var _fallbackChildFragment=updateSuspenseFallbackChildren(current,workInProgress,_nextPrimaryChildren2,_nextFallbackChildren2,renderLanes);var _primaryChildFragment3=workInProgress.child;var prevOffscreenState=current.child.memoizedState;_primaryChildFragment3.memoizedState=prevOffscreenState===null?mountSuspenseOffscreenState(renderLanes):updateSuspenseOffscreenState(prevOffscreenState,renderLanes);_primaryChildFragment3.childLanes=getRemainingWorkInPrimaryTree(current,renderLanes);workInProgress.memoizedState=SUSPENDED_MARKER;return _fallbackChildFragment;}else {var _nextPrimaryChildren3=nextProps.children;var _primaryChildFragment4=updateSuspensePrimaryChildren(current,workInProgress,_nextPrimaryChildren3,renderLanes);workInProgress.memoizedState=null;return _primaryChildFragment4;}}else {// The current tree is not already showing a fallback.
if(showFallback){// Timed out.
var _nextFallbackChildren3=nextProps.fallback;var _nextPrimaryChildren4=nextProps.children;var _fallbackChildFragment2=updateSuspenseFallbackChildren(current,workInProgress,_nextPrimaryChildren4,_nextFallbackChildren3,renderLanes);var _primaryChildFragment5=workInProgress.child;var _prevOffscreenState=current.child.memoizedState;_primaryChildFragment5.memoizedState=_prevOffscreenState===null?mountSuspenseOffscreenState(renderLanes):updateSuspenseOffscreenState(_prevOffscreenState,renderLanes);_primaryChildFragment5.childLanes=getRemainingWorkInPrimaryTree(current,renderLanes);// Skip the primary children, and continue working on the
// fallback children.
workInProgress.memoizedState=SUSPENDED_MARKER;return _fallbackChildFragment2;}else {// Still haven't timed out. Continue rendering the children, like we
// normally do.
var _nextPrimaryChildren5=nextProps.children;var _primaryChildFragment6=updateSuspensePrimaryChildren(current,workInProgress,_nextPrimaryChildren5,renderLanes);workInProgress.memoizedState=null;return _primaryChildFragment6;}}}}function mountSuspensePrimaryChildren(workInProgress,primaryChildren,renderLanes){var mode=workInProgress.mode;var primaryChildProps={mode:'visible',children:primaryChildren};var primaryChildFragment=createFiberFromOffscreen(primaryChildProps,mode,renderLanes,null);primaryChildFragment["return"]=workInProgress;workInProgress.child=primaryChildFragment;return primaryChildFragment;}function mountSuspenseFallbackChildren(workInProgress,primaryChildren,fallbackChildren,renderLanes){var mode=workInProgress.mode;var progressedPrimaryFragment=workInProgress.child;var primaryChildProps={mode:'hidden',children:primaryChildren};var primaryChildFragment;var fallbackChildFragment;if((mode&BlockingMode)===NoMode&&progressedPrimaryFragment!==null){// In legacy mode, we commit the primary tree as if it successfully
// completed, even though it's in an inconsistent state.
primaryChildFragment=progressedPrimaryFragment;primaryChildFragment.childLanes=NoLanes;primaryChildFragment.pendingProps=primaryChildProps;if(workInProgress.mode&ProfileMode){// Reset the durations from the first pass so they aren't included in the
// final amounts. This seems counterintuitive, since we're intentionally
// not measuring part of the render phase, but this makes it match what we
// do in Concurrent Mode.
primaryChildFragment.actualDuration=0;primaryChildFragment.actualStartTime=-1;primaryChildFragment.selfBaseDuration=0;primaryChildFragment.treeBaseDuration=0;}fallbackChildFragment=createFiberFromFragment(fallbackChildren,mode,renderLanes,null);}else {primaryChildFragment=createFiberFromOffscreen(primaryChildProps,mode,NoLanes,null);fallbackChildFragment=createFiberFromFragment(fallbackChildren,mode,renderLanes,null);}primaryChildFragment["return"]=workInProgress;fallbackChildFragment["return"]=workInProgress;primaryChildFragment.sibling=fallbackChildFragment;workInProgress.child=primaryChildFragment;return fallbackChildFragment;}function createWorkInProgressOffscreenFiber(current,offscreenProps){// The props argument to `createWorkInProgress` is `any` typed, so we use this
// wrapper function to constrain it.
return createWorkInProgress(current,offscreenProps);}function updateSuspensePrimaryChildren(current,workInProgress,primaryChildren,renderLanes){var currentPrimaryChildFragment=current.child;var currentFallbackChildFragment=currentPrimaryChildFragment.sibling;var primaryChildFragment=createWorkInProgressOffscreenFiber(currentPrimaryChildFragment,{mode:'visible',children:primaryChildren});if((workInProgress.mode&BlockingMode)===NoMode){primaryChildFragment.lanes=renderLanes;}primaryChildFragment["return"]=workInProgress;primaryChildFragment.sibling=null;if(currentFallbackChildFragment!==null){// Delete the fallback child fragment
currentFallbackChildFragment.nextEffect=null;currentFallbackChildFragment.flags=Deletion;workInProgress.firstEffect=workInProgress.lastEffect=currentFallbackChildFragment;}workInProgress.child=primaryChildFragment;return primaryChildFragment;}function updateSuspenseFallbackChildren(current,workInProgress,primaryChildren,fallbackChildren,renderLanes){var mode=workInProgress.mode;var currentPrimaryChildFragment=current.child;var currentFallbackChildFragment=currentPrimaryChildFragment.sibling;var primaryChildProps={mode:'hidden',children:primaryChildren};var primaryChildFragment;if(// In legacy mode, we commit the primary tree as if it successfully
// completed, even though it's in an inconsistent state.
(mode&BlockingMode)===NoMode&&// Make sure we're on the second pass, i.e. the primary child fragment was
// already cloned. In legacy mode, the only case where this isn't true is
// when DevTools forces us to display a fallback; we skip the first render
// pass entirely and go straight to rendering the fallback. (In Concurrent
// Mode, SuspenseList can also trigger this scenario, but this is a legacy-
// only codepath.)
workInProgress.child!==currentPrimaryChildFragment){var progressedPrimaryFragment=workInProgress.child;primaryChildFragment=progressedPrimaryFragment;primaryChildFragment.childLanes=NoLanes;primaryChildFragment.pendingProps=primaryChildProps;if(workInProgress.mode&ProfileMode){// Reset the durations from the first pass so they aren't included in the
// final amounts. This seems counterintuitive, since we're intentionally
// not measuring part of the render phase, but this makes it match what we
// do in Concurrent Mode.
primaryChildFragment.actualDuration=0;primaryChildFragment.actualStartTime=-1;primaryChildFragment.selfBaseDuration=currentPrimaryChildFragment.selfBaseDuration;primaryChildFragment.treeBaseDuration=currentPrimaryChildFragment.treeBaseDuration;}// The fallback fiber was added as a deletion effect during the first pass.
// However, since we're going to remain on the fallback, we no longer want
// to delete it. So we need to remove it from the list. Deletions are stored
// on the same list as effects. We want to keep the effects from the primary
// tree. So we copy the primary child fragment's effect list, which does not
// include the fallback deletion effect.
var progressedLastEffect=primaryChildFragment.lastEffect;if(progressedLastEffect!==null){workInProgress.firstEffect=primaryChildFragment.firstEffect;workInProgress.lastEffect=progressedLastEffect;progressedLastEffect.nextEffect=null;}else {// TODO: Reset this somewhere else? Lol legacy mode is so weird.
workInProgress.firstEffect=workInProgress.lastEffect=null;}}else {primaryChildFragment=createWorkInProgressOffscreenFiber(currentPrimaryChildFragment,primaryChildProps);}var fallbackChildFragment;if(currentFallbackChildFragment!==null){fallbackChildFragment=createWorkInProgress(currentFallbackChildFragment,fallbackChildren);}else {fallbackChildFragment=createFiberFromFragment(fallbackChildren,mode,renderLanes,null);// Needs a placement effect because the parent (the Suspense boundary) already
// mounted but this is a new fiber.
fallbackChildFragment.flags|=Placement;}fallbackChildFragment["return"]=workInProgress;primaryChildFragment["return"]=workInProgress;primaryChildFragment.sibling=fallbackChildFragment;workInProgress.child=primaryChildFragment;return fallbackChildFragment;}function scheduleWorkOnFiber(fiber,renderLanes){fiber.lanes=mergeLanes(fiber.lanes,renderLanes);var alternate=fiber.alternate;if(alternate!==null){alternate.lanes=mergeLanes(alternate.lanes,renderLanes);}scheduleWorkOnParentPath(fiber["return"],renderLanes);}function propagateSuspenseContextChange(workInProgress,firstChild,renderLanes){// Mark any Suspense boundaries with fallbacks as having work to do.
// If they were previously forced into fallbacks, they may now be able
// to unblock.
var node=firstChild;while(node!==null){if(node.tag===SuspenseComponent){var state=node.memoizedState;if(state!==null){scheduleWorkOnFiber(node,renderLanes);}}else if(node.tag===SuspenseListComponent){// If the tail is hidden there might not be an Suspense boundaries
// to schedule work on. In this case we have to schedule it on the
// list itself.
// We don't have to traverse to the children of the list since
// the list will propagate the change when it rerenders.
scheduleWorkOnFiber(node,renderLanes);}else if(node.child!==null){node.child["return"]=node;node=node.child;continue;}if(node===workInProgress){return;}while(node.sibling===null){if(node["return"]===null||node["return"]===workInProgress){return;}node=node["return"];}node.sibling["return"]=node["return"];node=node.sibling;}}function findLastContentRow(firstChild){// This is going to find the last row among these children that is already
// showing content on the screen, as opposed to being in fallback state or
// new. If a row has multiple Suspense boundaries, any of them being in the
// fallback state, counts as the whole row being in a fallback state.
// Note that the "rows" will be workInProgress, but any nested children
// will still be current since we haven't rendered them yet. The mounted
// order may not be the same as the new order. We use the new order.
var row=firstChild;var lastContentRow=null;while(row!==null){var currentRow=row.alternate;// New rows can't be content rows.
if(currentRow!==null&&findFirstSuspended(currentRow)===null){lastContentRow=row;}row=row.sibling;}return lastContentRow;}function validateRevealOrder(revealOrder){{if(revealOrder!==undefined&&revealOrder!=='forwards'&&revealOrder!=='backwards'&&revealOrder!=='together'&&!didWarnAboutRevealOrder[revealOrder]){didWarnAboutRevealOrder[revealOrder]=true;if(typeof revealOrder==='string'){switch(revealOrder.toLowerCase()){case'together':case'forwards':case'backwards':{error('"%s" is not a valid value for revealOrder on <SuspenseList />. '+'Use lowercase "%s" instead.',revealOrder,revealOrder.toLowerCase());break;}case'forward':case'backward':{error('"%s" is not a valid value for revealOrder on <SuspenseList />. '+'React uses the -s suffix in the spelling. Use "%ss" instead.',revealOrder,revealOrder.toLowerCase());break;}default:error('"%s" is not a supported revealOrder on <SuspenseList />. '+'Did you mean "together", "forwards" or "backwards"?',revealOrder);break;}}else {error('%s is not a supported value for revealOrder on <SuspenseList />. '+'Did you mean "together", "forwards" or "backwards"?',revealOrder);}}}}function validateTailOptions(tailMode,revealOrder){{if(tailMode!==undefined&&!didWarnAboutTailOptions[tailMode]){if(tailMode!=='collapsed'&&tailMode!=='hidden'){didWarnAboutTailOptions[tailMode]=true;error('"%s" is not a supported value for tail on <SuspenseList />. '+'Did you mean "collapsed" or "hidden"?',tailMode);}else if(revealOrder!=='forwards'&&revealOrder!=='backwards'){didWarnAboutTailOptions[tailMode]=true;error('<SuspenseList tail="%s" /> is only valid if revealOrder is '+'"forwards" or "backwards". '+'Did you mean to specify revealOrder="forwards"?',tailMode);}}}}function validateSuspenseListNestedChild(childSlot,index){{var isArray=Array.isArray(childSlot);var isIterable=!isArray&&typeof getIteratorFn(childSlot)==='function';if(isArray||isIterable){var type=isArray?'array':'iterable';error('A nested %s was passed to row #%s in <SuspenseList />. Wrap it in '+'an additional SuspenseList to configure its revealOrder: '+'<SuspenseList revealOrder=...> ... '+'<SuspenseList revealOrder=...>{%s}</SuspenseList> ... '+'</SuspenseList>',type,index,type);return false;}}return true;}function validateSuspenseListChildren(children,revealOrder){{if((revealOrder==='forwards'||revealOrder==='backwards')&&children!==undefined&&children!==null&&children!==false){if(Array.isArray(children)){for(var i=0;i<children.length;i++){if(!validateSuspenseListNestedChild(children[i],i)){return;}}}else {var iteratorFn=getIteratorFn(children);if(typeof iteratorFn==='function'){var childrenIterator=iteratorFn.call(children);if(childrenIterator){var step=childrenIterator.next();var _i=0;for(;!step.done;step=childrenIterator.next()){if(!validateSuspenseListNestedChild(step.value,_i)){return;}_i++;}}}else {error('A single row was passed to a <SuspenseList revealOrder="%s" />. '+'This is not useful since it needs multiple rows. '+'Did you mean to pass multiple children or an array?',revealOrder);}}}}}function initSuspenseListRenderState(workInProgress,isBackwards,tail,lastContentRow,tailMode,lastEffectBeforeRendering){var renderState=workInProgress.memoizedState;if(renderState===null){workInProgress.memoizedState={isBackwards:isBackwards,rendering:null,renderingStartTime:0,last:lastContentRow,tail:tail,tailMode:tailMode,lastEffect:lastEffectBeforeRendering};}else {// We can reuse the existing object from previous renders.
renderState.isBackwards=isBackwards;renderState.rendering=null;renderState.renderingStartTime=0;renderState.last=lastContentRow;renderState.tail=tail;renderState.tailMode=tailMode;renderState.lastEffect=lastEffectBeforeRendering;}}// This can end up rendering this component multiple passes.
// The first pass splits the children fibers into two sets. A head and tail.
// We first render the head. If anything is in fallback state, we do another
// pass through beginWork to rerender all children (including the tail) with
// the force suspend context. If the first render didn't have anything in
// in fallback state. Then we render each row in the tail one-by-one.
// That happens in the completeWork phase without going back to beginWork.
function updateSuspenseListComponent(current,workInProgress,renderLanes){var nextProps=workInProgress.pendingProps;var revealOrder=nextProps.revealOrder;var tailMode=nextProps.tail;var newChildren=nextProps.children;validateRevealOrder(revealOrder);validateTailOptions(tailMode,revealOrder);validateSuspenseListChildren(newChildren,revealOrder);reconcileChildren(current,workInProgress,newChildren,renderLanes);var suspenseContext=suspenseStackCursor.current;var shouldForceFallback=hasSuspenseContext(suspenseContext,ForceSuspenseFallback);if(shouldForceFallback){suspenseContext=setShallowSuspenseContext(suspenseContext,ForceSuspenseFallback);workInProgress.flags|=DidCapture;}else {var didSuspendBefore=current!==null&&(current.flags&DidCapture)!==NoFlags;if(didSuspendBefore){// If we previously forced a fallback, we need to schedule work
// on any nested boundaries to let them know to try to render
// again. This is the same as context updating.
propagateSuspenseContextChange(workInProgress,workInProgress.child,renderLanes);}suspenseContext=setDefaultShallowSuspenseContext(suspenseContext);}pushSuspenseContext(workInProgress,suspenseContext);if((workInProgress.mode&BlockingMode)===NoMode){// In legacy mode, SuspenseList doesn't work so we just
// use make it a noop by treating it as the default revealOrder.
workInProgress.memoizedState=null;}else {switch(revealOrder){case'forwards':{var lastContentRow=findLastContentRow(workInProgress.child);var tail;if(lastContentRow===null){// The whole list is part of the tail.
// TODO: We could fast path by just rendering the tail now.
tail=workInProgress.child;workInProgress.child=null;}else {// Disconnect the tail rows after the content row.
// We're going to render them separately later.
tail=lastContentRow.sibling;lastContentRow.sibling=null;}initSuspenseListRenderState(workInProgress,false,// isBackwards
tail,lastContentRow,tailMode,workInProgress.lastEffect);break;}case'backwards':{// We're going to find the first row that has existing content.
// At the same time we're going to reverse the list of everything
// we pass in the meantime. That's going to be our tail in reverse
// order.
var _tail=null;var row=workInProgress.child;workInProgress.child=null;while(row!==null){var currentRow=row.alternate;// New rows can't be content rows.
if(currentRow!==null&&findFirstSuspended(currentRow)===null){// This is the beginning of the main content.
workInProgress.child=row;break;}var nextRow=row.sibling;row.sibling=_tail;_tail=row;row=nextRow;}// TODO: If workInProgress.child is null, we can continue on the tail immediately.
initSuspenseListRenderState(workInProgress,true,// isBackwards
_tail,null,// last
tailMode,workInProgress.lastEffect);break;}case'together':{initSuspenseListRenderState(workInProgress,false,// isBackwards
null,// tail
null,// last
undefined,workInProgress.lastEffect);break;}default:{// The default reveal order is the same as not having
// a boundary.
workInProgress.memoizedState=null;}}}return workInProgress.child;}function updatePortalComponent(current,workInProgress,renderLanes){pushHostContainer(workInProgress,workInProgress.stateNode.containerInfo);var nextChildren=workInProgress.pendingProps;if(current===null){// Portals are special because we don't append the children during mount
// but at commit. Therefore we need to track insertions which the normal
// flow doesn't do during mount. This doesn't happen at the root because
// the root always starts with a "current" with a null child.
// TODO: Consider unifying this with how the root works.
workInProgress.child=reconcileChildFibers(workInProgress,null,nextChildren,renderLanes);}else {reconcileChildren(current,workInProgress,nextChildren,renderLanes);}return workInProgress.child;}var hasWarnedAboutUsingNoValuePropOnContextProvider=false;function updateContextProvider(current,workInProgress,renderLanes){var providerType=workInProgress.type;var context=providerType._context;var newProps=workInProgress.pendingProps;var oldProps=workInProgress.memoizedProps;var newValue=newProps.value;{if(!('value'in newProps)){if(!hasWarnedAboutUsingNoValuePropOnContextProvider){hasWarnedAboutUsingNoValuePropOnContextProvider=true;error('The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?');}}var providerPropTypes=workInProgress.type.propTypes;if(providerPropTypes){checkPropTypes(providerPropTypes,newProps,'prop','Context.Provider');}}pushProvider(workInProgress,newValue);if(oldProps!==null){var oldValue=oldProps.value;var changedBits=calculateChangedBits(context,newValue,oldValue);if(changedBits===0){// No change. Bailout early if children are the same.
if(oldProps.children===newProps.children&&!hasContextChanged()){return bailoutOnAlreadyFinishedWork(current,workInProgress,renderLanes);}}else {// The context value changed. Search for matching consumers and schedule
// them to update.
propagateContextChange(workInProgress,context,changedBits,renderLanes);}}var newChildren=newProps.children;reconcileChildren(current,workInProgress,newChildren,renderLanes);return workInProgress.child;}var hasWarnedAboutUsingContextAsConsumer=false;function updateContextConsumer(current,workInProgress,renderLanes){var context=workInProgress.type;// The logic below for Context differs depending on PROD or DEV mode. In
// DEV mode, we create a separate object for Context.Consumer that acts
// like a proxy to Context. This proxy object adds unnecessary code in PROD
// so we use the old behaviour (Context.Consumer references Context) to
// reduce size and overhead. The separate object references context via
// a property called "_context", which also gives us the ability to check
// in DEV mode if this property exists or not and warn if it does not.
{if(context._context===undefined){// This may be because it's a Context (rather than a Consumer).
// Or it may be because it's older React where they're the same thing.
// We only want to warn if we're sure it's a new React.
if(context!==context.Consumer){if(!hasWarnedAboutUsingContextAsConsumer){hasWarnedAboutUsingContextAsConsumer=true;error('Rendering <Context> directly is not supported and will be removed in '+'a future major release. Did you mean to render <Context.Consumer> instead?');}}}else {context=context._context;}}var newProps=workInProgress.pendingProps;var render=newProps.children;{if(typeof render!=='function'){error('A context consumer was rendered with multiple children, or a child '+"that isn't a function. A context consumer expects a single child "+'that is a function. If you did pass a function, make sure there '+'is no trailing or leading whitespace around it.');}}prepareToReadContext(workInProgress,renderLanes);var newValue=_readContext(context,newProps.unstable_observedBits);var newChildren;{ReactCurrentOwner$1.current=workInProgress;setIsRendering(true);newChildren=render(newValue);setIsRendering(false);}// React DevTools reads this flag.
workInProgress.flags|=PerformedWork;reconcileChildren(current,workInProgress,newChildren,renderLanes);return workInProgress.child;}function markWorkInProgressReceivedUpdate(){didReceiveUpdate=true;}function bailoutOnAlreadyFinishedWork(current,workInProgress,renderLanes){if(current!==null){// Reuse previous dependencies
workInProgress.dependencies=current.dependencies;}{// Don't update "base" render times for bailouts.
stopProfilerTimerIfRunning();}markSkippedUpdateLanes(workInProgress.lanes);// Check if the children have any pending work.
if(!includesSomeLane(renderLanes,workInProgress.childLanes)){// The children don't have any work either. We can skip them.
// TODO: Once we add back resuming, we should check if the children are
// a work-in-progress set. If so, we need to transfer their effects.
return null;}else {// This fiber doesn't have work, but its subtree does. Clone the child
// fibers and continue.
cloneChildFibers(current,workInProgress);return workInProgress.child;}}function remountFiber(current,oldWorkInProgress,newWorkInProgress){{var returnFiber=oldWorkInProgress["return"];if(returnFiber===null){throw new Error('Cannot swap the root fiber.');}// Disconnect from the old current.
// It will get deleted.
current.alternate=null;oldWorkInProgress.alternate=null;// Connect to the new tree.
newWorkInProgress.index=oldWorkInProgress.index;newWorkInProgress.sibling=oldWorkInProgress.sibling;newWorkInProgress["return"]=oldWorkInProgress["return"];newWorkInProgress.ref=oldWorkInProgress.ref;// Replace the child/sibling pointers above it.
if(oldWorkInProgress===returnFiber.child){returnFiber.child=newWorkInProgress;}else {var prevSibling=returnFiber.child;if(prevSibling===null){throw new Error('Expected parent to have a child.');}while(prevSibling.sibling!==oldWorkInProgress){prevSibling=prevSibling.sibling;if(prevSibling===null){throw new Error('Expected to find the previous sibling.');}}prevSibling.sibling=newWorkInProgress;}// Delete the old fiber and place the new one.
// Since the old fiber is disconnected, we have to schedule it manually.
var last=returnFiber.lastEffect;if(last!==null){last.nextEffect=current;returnFiber.lastEffect=current;}else {returnFiber.firstEffect=returnFiber.lastEffect=current;}current.nextEffect=null;current.flags=Deletion;newWorkInProgress.flags|=Placement;// Restart work from the new fiber.
return newWorkInProgress;}}function beginWork(current,workInProgress,renderLanes){var updateLanes=workInProgress.lanes;{if(workInProgress._debugNeedsRemount&&current!==null){// This will restart the begin phase with a new fiber.
return remountFiber(current,workInProgress,createFiberFromTypeAndProps(workInProgress.type,workInProgress.key,workInProgress.pendingProps,workInProgress._debugOwner||null,workInProgress.mode,workInProgress.lanes));}}if(current!==null){var oldProps=current.memoizedProps;var newProps=workInProgress.pendingProps;if(oldProps!==newProps||hasContextChanged()||// Force a re-render if the implementation changed due to hot reload:
workInProgress.type!==current.type){// If props or context changed, mark the fiber as having performed work.
// This may be unset if the props are determined to be equal later (memo).
didReceiveUpdate=true;}else if(!includesSomeLane(renderLanes,updateLanes)){didReceiveUpdate=false;// This fiber does not have any pending work. Bailout without entering
// the begin phase. There's still some bookkeeping we that needs to be done
// in this optimized path, mostly pushing stuff onto the stack.
switch(workInProgress.tag){case HostRoot:pushHostRootContext(workInProgress);resetHydrationState();break;case HostComponent:pushHostContext(workInProgress);break;case ClassComponent:{var Component=workInProgress.type;if(isContextProvider(Component)){pushContextProvider(workInProgress);}break;}case HostPortal:pushHostContainer(workInProgress,workInProgress.stateNode.containerInfo);break;case ContextProvider:{var newValue=workInProgress.memoizedProps.value;pushProvider(workInProgress,newValue);break;}case Profiler:{// Profiler should only call onRender when one of its descendants actually rendered.
var hasChildWork=includesSomeLane(renderLanes,workInProgress.childLanes);if(hasChildWork){workInProgress.flags|=Update;}// Reset effect durations for the next eventual effect phase.
// These are reset during render to allow the DevTools commit hook a chance to read them,
var stateNode=workInProgress.stateNode;stateNode.effectDuration=0;stateNode.passiveEffectDuration=0;}break;case SuspenseComponent:{var state=workInProgress.memoizedState;if(state!==null){// whether to retry the primary children, or to skip over it and
// go straight to the fallback. Check the priority of the primary
// child fragment.
var primaryChildFragment=workInProgress.child;var primaryChildLanes=primaryChildFragment.childLanes;if(includesSomeLane(renderLanes,primaryChildLanes)){// The primary children have pending work. Use the normal path
// to attempt to render the primary children again.
return updateSuspenseComponent(current,workInProgress,renderLanes);}else {// The primary child fragment does not have pending work marked
// on it
pushSuspenseContext(workInProgress,setDefaultShallowSuspenseContext(suspenseStackCursor.current));// The primary children do not have pending work with sufficient
// priority. Bailout.
var child=bailoutOnAlreadyFinishedWork(current,workInProgress,renderLanes);if(child!==null){// The fallback children have pending work. Skip over the
// primary children and work on the fallback.
return child.sibling;}else {return null;}}}else {pushSuspenseContext(workInProgress,setDefaultShallowSuspenseContext(suspenseStackCursor.current));}break;}case SuspenseListComponent:{var didSuspendBefore=(current.flags&DidCapture)!==NoFlags;var _hasChildWork=includesSomeLane(renderLanes,workInProgress.childLanes);if(didSuspendBefore){if(_hasChildWork){// If something was in fallback state last time, and we have all the
// same children then we're still in progressive loading state.
// Something might get unblocked by state updates or retries in the
// tree which will affect the tail. So we need to use the normal
// path to compute the correct tail.
return updateSuspenseListComponent(current,workInProgress,renderLanes);}// If none of the children had any work, that means that none of
// them got retried so they'll still be blocked in the same way
// as before. We can fast bail out.
workInProgress.flags|=DidCapture;}// If nothing suspended before and we're rendering the same children,
// then the tail doesn't matter. Anything new that suspends will work
// in the "together" mode, so we can continue from the state we had.
var renderState=workInProgress.memoizedState;if(renderState!==null){// Reset to the "together" mode in case we've started a different
// update in the past but didn't complete it.
renderState.rendering=null;renderState.tail=null;renderState.lastEffect=null;}pushSuspenseContext(workInProgress,suspenseStackCursor.current);if(_hasChildWork){break;}else {// If none of the children had any work, that means that none of
// them got retried so they'll still be blocked in the same way
// as before. We can fast bail out.
return null;}}case OffscreenComponent:case LegacyHiddenComponent:{// Need to check if the tree still needs to be deferred. This is
// almost identical to the logic used in the normal update path,
// so we'll just enter that. The only difference is we'll bail out
// at the next level instead of this one, because the child props
// have not changed. Which is fine.
// TODO: Probably should refactor `beginWork` to split the bailout
// path from the normal path. I'm tempted to do a labeled break here
// but I won't :)
workInProgress.lanes=NoLanes;return updateOffscreenComponent(current,workInProgress,renderLanes);}}return bailoutOnAlreadyFinishedWork(current,workInProgress,renderLanes);}else {if((current.flags&ForceUpdateForLegacySuspense)!==NoFlags){// This is a special case that only exists for legacy mode.
// See https://github.com/facebook/react/pull/19216.
didReceiveUpdate=true;}else {// An update was scheduled on this fiber, but there are no new props
// nor legacy context. Set this to false. If an update queue or context
// consumer produces a changed value, it will set this to true. Otherwise,
// the component will assume the children have not changed and bail out.
didReceiveUpdate=false;}}}else {didReceiveUpdate=false;}// Before entering the begin phase, clear pending update priority.
// TODO: This assumes that we're about to evaluate the component and process
// the update queue. However, there's an exception: SimpleMemoComponent
// sometimes bails out later in the begin phase. This indicates that we should
// move this assignment out of the common path and into each branch.
workInProgress.lanes=NoLanes;switch(workInProgress.tag){case IndeterminateComponent:{return mountIndeterminateComponent(current,workInProgress,workInProgress.type,renderLanes);}case LazyComponent:{var elementType=workInProgress.elementType;return mountLazyComponent(current,workInProgress,elementType,updateLanes,renderLanes);}case FunctionComponent:{var _Component=workInProgress.type;var unresolvedProps=workInProgress.pendingProps;var resolvedProps=workInProgress.elementType===_Component?unresolvedProps:resolveDefaultProps(_Component,unresolvedProps);return updateFunctionComponent(current,workInProgress,_Component,resolvedProps,renderLanes);}case ClassComponent:{var _Component2=workInProgress.type;var _unresolvedProps=workInProgress.pendingProps;var _resolvedProps=workInProgress.elementType===_Component2?_unresolvedProps:resolveDefaultProps(_Component2,_unresolvedProps);return updateClassComponent(current,workInProgress,_Component2,_resolvedProps,renderLanes);}case HostRoot:return updateHostRoot(current,workInProgress,renderLanes);case HostComponent:return updateHostComponent(current,workInProgress,renderLanes);case HostText:return updateHostText(current,workInProgress);case SuspenseComponent:return updateSuspenseComponent(current,workInProgress,renderLanes);case HostPortal:return updatePortalComponent(current,workInProgress,renderLanes);case ForwardRef:{var type=workInProgress.type;var _unresolvedProps2=workInProgress.pendingProps;var _resolvedProps2=workInProgress.elementType===type?_unresolvedProps2:resolveDefaultProps(type,_unresolvedProps2);return updateForwardRef(current,workInProgress,type,_resolvedProps2,renderLanes);}case Fragment:return updateFragment(current,workInProgress,renderLanes);case Mode:return updateMode(current,workInProgress,renderLanes);case Profiler:return updateProfiler(current,workInProgress,renderLanes);case ContextProvider:return updateContextProvider(current,workInProgress,renderLanes);case ContextConsumer:return updateContextConsumer(current,workInProgress,renderLanes);case MemoComponent:{var _type2=workInProgress.type;var _unresolvedProps3=workInProgress.pendingProps;// Resolve outer props first, then resolve inner props.
var _resolvedProps3=resolveDefaultProps(_type2,_unresolvedProps3);{if(workInProgress.type!==workInProgress.elementType){var outerPropTypes=_type2.propTypes;if(outerPropTypes){checkPropTypes(outerPropTypes,_resolvedProps3,// Resolved for outer only
'prop',getComponentName(_type2));}}}_resolvedProps3=resolveDefaultProps(_type2.type,_resolvedProps3);return updateMemoComponent(current,workInProgress,_type2,_resolvedProps3,updateLanes,renderLanes);}case SimpleMemoComponent:{return updateSimpleMemoComponent(current,workInProgress,workInProgress.type,workInProgress.pendingProps,updateLanes,renderLanes);}case IncompleteClassComponent:{var _Component3=workInProgress.type;var _unresolvedProps4=workInProgress.pendingProps;var _resolvedProps4=workInProgress.elementType===_Component3?_unresolvedProps4:resolveDefaultProps(_Component3,_unresolvedProps4);return mountIncompleteClassComponent(current,workInProgress,_Component3,_resolvedProps4,renderLanes);}case SuspenseListComponent:{return updateSuspenseListComponent(current,workInProgress,renderLanes);}case FundamentalComponent:{break;}case ScopeComponent:{break;}case Block:{break;}case OffscreenComponent:{return updateOffscreenComponent(current,workInProgress,renderLanes);}case LegacyHiddenComponent:{return updateLegacyHiddenComponent(current,workInProgress,renderLanes);}}{{throw Error("Unknown unit of work tag ("+workInProgress.tag+"). This error is likely caused by a bug in React. Please file an issue.");}}}function markUpdate(workInProgress){// Tag the fiber with an update effect. This turns a Placement into
// a PlacementAndUpdate.
workInProgress.flags|=Update;}function markRef$1(workInProgress){workInProgress.flags|=Ref;}var appendAllChildren;var updateHostContainer;var updateHostComponent$1;var updateHostText$1;{// Mutation mode
appendAllChildren=function appendAllChildren(parent,workInProgress,needsVisibilityToggle,isHidden){// We only have the top Fiber that was created but we need recurse down its
// children to find all the terminal nodes.
var node=workInProgress.child;while(node!==null){if(node.tag===HostComponent||node.tag===HostText){appendInitialChild(parent,node.stateNode);}else if(node.tag===HostPortal);else if(node.child!==null){node.child["return"]=node;node=node.child;continue;}if(node===workInProgress){return;}while(node.sibling===null){if(node["return"]===null||node["return"]===workInProgress){return;}node=node["return"];}node.sibling["return"]=node["return"];node=node.sibling;}};updateHostContainer=function updateHostContainer(workInProgress){// Noop
};updateHostComponent$1=function updateHostComponent$1(current,workInProgress,type,newProps,rootContainerInstance){// If we have an alternate, that means this is an update and we need to
// schedule a side-effect to do the updates.
var oldProps=current.memoizedProps;if(oldProps===newProps){// In mutation mode, this is sufficient for a bailout because
// we won't touch this node even if children changed.
return;}// If we get updated because one of our children updated, we don't
// have newProps so we'll have to reuse them.
// TODO: Split the update API as separate for the props vs. children.
// Even better would be if children weren't special cased at all tho.
var instance=workInProgress.stateNode;var currentHostContext=getHostContext();// TODO: Experiencing an error where oldProps is null. Suggests a host
// component is hitting the resume path. Figure out why. Possibly
// related to `hidden`.
var updatePayload=prepareUpdate(instance,type,oldProps,newProps,rootContainerInstance,currentHostContext);// TODO: Type this specific to this type of component.
workInProgress.updateQueue=updatePayload;// If the update payload indicates that there is a change or if there
// is a new ref we mark this as an update. All the work is done in commitWork.
if(updatePayload){markUpdate(workInProgress);}};updateHostText$1=function updateHostText$1(current,workInProgress,oldText,newText){// If the text differs, mark it as an update. All the work in done in commitWork.
if(oldText!==newText){markUpdate(workInProgress);}};}function cutOffTailIfNeeded(renderState,hasRenderedATailFallback){if(getIsHydrating()){// If we're hydrating, we should consume as many items as we can
// so we don't leave any behind.
return;}switch(renderState.tailMode){case'hidden':{// Any insertions at the end of the tail list after this point
// should be invisible. If there are already mounted boundaries
// anything before them are not considered for collapsing.
// Therefore we need to go through the whole tail to find if
// there are any.
var tailNode=renderState.tail;var lastTailNode=null;while(tailNode!==null){if(tailNode.alternate!==null){lastTailNode=tailNode;}tailNode=tailNode.sibling;}// Next we're simply going to delete all insertions after the
// last rendered item.
if(lastTailNode===null){// All remaining items in the tail are insertions.
renderState.tail=null;}else {// Detach the insertion after the last node that was already
// inserted.
lastTailNode.sibling=null;}break;}case'collapsed':{// Any insertions at the end of the tail list after this point
// should be invisible. If there are already mounted boundaries
// anything before them are not considered for collapsing.
// Therefore we need to go through the whole tail to find if
// there are any.
var _tailNode=renderState.tail;var _lastTailNode=null;while(_tailNode!==null){if(_tailNode.alternate!==null){_lastTailNode=_tailNode;}_tailNode=_tailNode.sibling;}// Next we're simply going to delete all insertions after the
// last rendered item.
if(_lastTailNode===null){// All remaining items in the tail are insertions.
if(!hasRenderedATailFallback&&renderState.tail!==null){// We suspended during the head. We want to show at least one
// row at the tail. So we'll keep on and cut off the rest.
renderState.tail.sibling=null;}else {renderState.tail=null;}}else {// Detach the insertion after the last node that was already
// inserted.
_lastTailNode.sibling=null;}break;}}}function completeWork(current,workInProgress,renderLanes){var newProps=workInProgress.pendingProps;switch(workInProgress.tag){case IndeterminateComponent:case LazyComponent:case SimpleMemoComponent:case FunctionComponent:case ForwardRef:case Fragment:case Mode:case Profiler:case ContextConsumer:case MemoComponent:return null;case ClassComponent:{var Component=workInProgress.type;if(isContextProvider(Component)){popContext(workInProgress);}return null;}case HostRoot:{popHostContainer(workInProgress);popTopLevelContextObject(workInProgress);resetWorkInProgressVersions();var fiberRoot=workInProgress.stateNode;if(fiberRoot.pendingContext){fiberRoot.context=fiberRoot.pendingContext;fiberRoot.pendingContext=null;}if(current===null||current.child===null){// If we hydrated, pop so that we can delete any remaining children
// that weren't hydrated.
var wasHydrated=popHydrationState(workInProgress);if(wasHydrated){// If we hydrated, then we'll need to schedule an update for
// the commit side-effects on the root.
markUpdate(workInProgress);}else if(!fiberRoot.hydrate){// Schedule an effect to clear this container at the start of the next commit.
// This handles the case of React rendering into a container with previous children.
// It's also safe to do for updates too, because current.child would only be null
// if the previous render was null (so the the container would already be empty).
workInProgress.flags|=Snapshot;}}updateHostContainer(workInProgress);return null;}case HostComponent:{popHostContext(workInProgress);var rootContainerInstance=getRootHostContainer();var type=workInProgress.type;if(current!==null&&workInProgress.stateNode!=null){updateHostComponent$1(current,workInProgress,type,newProps,rootContainerInstance);if(current.ref!==workInProgress.ref){markRef$1(workInProgress);}}else {if(!newProps){if(!(workInProgress.stateNode!==null)){{throw Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");}}// This can happen when we abort work.
return null;}var currentHostContext=getHostContext();// TODO: Move createInstance to beginWork and keep it on a context
// "stack" as the parent. Then append children as we go in beginWork
// or completeWork depending on whether we want to add them top->down or
// bottom->up. Top->down is faster in IE11.
var _wasHydrated=popHydrationState(workInProgress);if(_wasHydrated){// TODO: Move this and createInstance step into the beginPhase
// to consolidate.
if(prepareToHydrateHostInstance(workInProgress,rootContainerInstance,currentHostContext)){// If changes to the hydrated node need to be applied at the
// commit-phase we mark this as such.
markUpdate(workInProgress);}}else {var instance=createInstance(type,newProps,rootContainerInstance,currentHostContext,workInProgress);appendAllChildren(instance,workInProgress,false,false);workInProgress.stateNode=instance;// Certain renderers require commit-time effects for initial mount.
// (eg DOM renderer supports auto-focus for certain elements).
// Make sure such renderers get scheduled for later work.
if(finalizeInitialChildren(instance,type,newProps,rootContainerInstance)){markUpdate(workInProgress);}}if(workInProgress.ref!==null){// If there is a ref on a host node we need to schedule a callback
markRef$1(workInProgress);}}return null;}case HostText:{var newText=newProps;if(current&&workInProgress.stateNode!=null){var oldText=current.memoizedProps;// If we have an alternate, that means this is an update and we need
// to schedule a side-effect to do the updates.
updateHostText$1(current,workInProgress,oldText,newText);}else {if(typeof newText!=='string'){if(!(workInProgress.stateNode!==null)){{throw Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");}}// This can happen when we abort work.
}var _rootContainerInstance=getRootHostContainer();var _currentHostContext=getHostContext();var _wasHydrated2=popHydrationState(workInProgress);if(_wasHydrated2){if(prepareToHydrateHostTextInstance(workInProgress)){markUpdate(workInProgress);}}else {workInProgress.stateNode=createTextInstance(newText,_rootContainerInstance,_currentHostContext,workInProgress);}}return null;}case SuspenseComponent:{popSuspenseContext(workInProgress);var nextState=workInProgress.memoizedState;if((workInProgress.flags&DidCapture)!==NoFlags){// Something suspended. Re-render with the fallback children.
workInProgress.lanes=renderLanes;// Do not reset the effect list.
if((workInProgress.mode&ProfileMode)!==NoMode){transferActualDuration(workInProgress);}return workInProgress;}var nextDidTimeout=nextState!==null;var prevDidTimeout=false;if(current===null){if(workInProgress.memoizedProps.fallback!==undefined){popHydrationState(workInProgress);}}else {var prevState=current.memoizedState;prevDidTimeout=prevState!==null;}if(nextDidTimeout&&!prevDidTimeout){// If this subtreee is running in blocking mode we can suspend,
// otherwise we won't suspend.
// TODO: This will still suspend a synchronous tree if anything
// in the concurrent tree already suspended during this render.
// This is a known bug.
if((workInProgress.mode&BlockingMode)!==NoMode){// TODO: Move this back to throwException because this is too late
// if this is a large tree which is common for initial loads. We
// don't know if we should restart a render or not until we get
// this marker, and this is too late.
// If this render already had a ping or lower pri updates,
// and this is the first time we know we're going to suspend we
// should be able to immediately restart from within throwException.
var hasInvisibleChildContext=current===null&&workInProgress.memoizedProps.unstable_avoidThisFallback!==true;if(hasInvisibleChildContext||hasSuspenseContext(suspenseStackCursor.current,InvisibleParentSuspenseContext)){// If this was in an invisible tree or a new render, then showing
// this boundary is ok.
renderDidSuspend();}else {// Otherwise, we're going to have to hide content so we should
// suspend for longer if possible.
renderDidSuspendDelayIfPossible();}}}{// TODO: Only schedule updates if these values are non equal, i.e. it changed.
if(nextDidTimeout||prevDidTimeout){// If this boundary just timed out, schedule an effect to attach a
// retry listener to the promise. This flag is also used to hide the
// primary children. In mutation mode, we also need the flag to
// *unhide* children that were previously hidden, so check if this
// is currently timed out, too.
workInProgress.flags|=Update;}}return null;}case HostPortal:popHostContainer(workInProgress);updateHostContainer(workInProgress);if(current===null){preparePortalMount(workInProgress.stateNode.containerInfo);}return null;case ContextProvider:// Pop provider fiber
popProvider(workInProgress);return null;case IncompleteClassComponent:{// Same as class component case. I put it down here so that the tags are
// sequential to ensure this switch is compiled to a jump table.
var _Component=workInProgress.type;if(isContextProvider(_Component)){popContext(workInProgress);}return null;}case SuspenseListComponent:{popSuspenseContext(workInProgress);var renderState=workInProgress.memoizedState;if(renderState===null){// We're running in the default, "independent" mode.
// We don't do anything in this mode.
return null;}var didSuspendAlready=(workInProgress.flags&DidCapture)!==NoFlags;var renderedTail=renderState.rendering;if(renderedTail===null){// We just rendered the head.
if(!didSuspendAlready){// This is the first pass. We need to figure out if anything is still
// suspended in the rendered set.
// If new content unsuspended, but there's still some content that
// didn't. Then we need to do a second pass that forces everything
// to keep showing their fallbacks.
// We might be suspended if something in this render pass suspended, or
// something in the previous committed pass suspended. Otherwise,
// there's no chance so we can skip the expensive call to
// findFirstSuspended.
var cannotBeSuspended=renderHasNotSuspendedYet()&&(current===null||(current.flags&DidCapture)===NoFlags);if(!cannotBeSuspended){var row=workInProgress.child;while(row!==null){var suspended=findFirstSuspended(row);if(suspended!==null){didSuspendAlready=true;workInProgress.flags|=DidCapture;cutOffTailIfNeeded(renderState,false);// If this is a newly suspended tree, it might not get committed as
// part of the second pass. In that case nothing will subscribe to
// its thennables. Instead, we'll transfer its thennables to the
// SuspenseList so that it can retry if they resolve.
// There might be multiple of these in the list but since we're
// going to wait for all of them anyway, it doesn't really matter
// which ones gets to ping. In theory we could get clever and keep
// track of how many dependencies remain but it gets tricky because
// in the meantime, we can add/remove/change items and dependencies.
// We might bail out of the loop before finding any but that
// doesn't matter since that means that the other boundaries that
// we did find already has their listeners attached.
var newThennables=suspended.updateQueue;if(newThennables!==null){workInProgress.updateQueue=newThennables;workInProgress.flags|=Update;}// Rerender the whole list, but this time, we'll force fallbacks
// to stay in place.
// Reset the effect list before doing the second pass since that's now invalid.
if(renderState.lastEffect===null){workInProgress.firstEffect=null;}workInProgress.lastEffect=renderState.lastEffect;// Reset the child fibers to their original state.
resetChildFibers(workInProgress,renderLanes);// Set up the Suspense Context to force suspense and immediately
// rerender the children.
pushSuspenseContext(workInProgress,setShallowSuspenseContext(suspenseStackCursor.current,ForceSuspenseFallback));return workInProgress.child;}row=row.sibling;}}if(renderState.tail!==null&&now()>getRenderTargetTime()){// We have already passed our CPU deadline but we still have rows
// left in the tail. We'll just give up further attempts to render
// the main content and only render fallbacks.
workInProgress.flags|=DidCapture;didSuspendAlready=true;cutOffTailIfNeeded(renderState,false);// Since nothing actually suspended, there will nothing to ping this
// to get it started back up to attempt the next item. While in terms
// of priority this work has the same priority as this current render,
// it's not part of the same transition once the transition has
// committed. If it's sync, we still want to yield so that it can be
// painted. Conceptually, this is really the same as pinging.
// We can use any RetryLane even if it's the one currently rendering
// since we're leaving it behind on this node.
workInProgress.lanes=SomeRetryLane;{markSpawnedWork(SomeRetryLane);}}}else {cutOffTailIfNeeded(renderState,false);}// Next we're going to render the tail.
}else {// Append the rendered row to the child list.
if(!didSuspendAlready){var _suspended=findFirstSuspended(renderedTail);if(_suspended!==null){workInProgress.flags|=DidCapture;didSuspendAlready=true;// Ensure we transfer the update queue to the parent so that it doesn't
// get lost if this row ends up dropped during a second pass.
var _newThennables=_suspended.updateQueue;if(_newThennables!==null){workInProgress.updateQueue=_newThennables;workInProgress.flags|=Update;}cutOffTailIfNeeded(renderState,true);// This might have been modified.
if(renderState.tail===null&&renderState.tailMode==='hidden'&&!renderedTail.alternate&&!getIsHydrating()// We don't cut it if we're hydrating.
){// We need to delete the row we just rendered.
// Reset the effect list to what it was before we rendered this
// child. The nested children have already appended themselves.
var lastEffect=workInProgress.lastEffect=renderState.lastEffect;// Remove any effects that were appended after this point.
if(lastEffect!==null){lastEffect.nextEffect=null;}// We're done.
return null;}}else if(// The time it took to render last row is greater than the remaining
// time we have to render. So rendering one more row would likely
// exceed it.
now()*2-renderState.renderingStartTime>getRenderTargetTime()&&renderLanes!==OffscreenLane){// We have now passed our CPU deadline and we'll just give up further
// attempts to render the main content and only render fallbacks.
// The assumption is that this is usually faster.
workInProgress.flags|=DidCapture;didSuspendAlready=true;cutOffTailIfNeeded(renderState,false);// Since nothing actually suspended, there will nothing to ping this
// to get it started back up to attempt the next item. While in terms
// of priority this work has the same priority as this current render,
// it's not part of the same transition once the transition has
// committed. If it's sync, we still want to yield so that it can be
// painted. Conceptually, this is really the same as pinging.
// We can use any RetryLane even if it's the one currently rendering
// since we're leaving it behind on this node.
workInProgress.lanes=SomeRetryLane;{markSpawnedWork(SomeRetryLane);}}}if(renderState.isBackwards){// The effect list of the backwards tail will have been added
// to the end. This breaks the guarantee that life-cycles fire in
// sibling order but that isn't a strong guarantee promised by React.
// Especially since these might also just pop in during future commits.
// Append to the beginning of the list.
renderedTail.sibling=workInProgress.child;workInProgress.child=renderedTail;}else {var previousSibling=renderState.last;if(previousSibling!==null){previousSibling.sibling=renderedTail;}else {workInProgress.child=renderedTail;}renderState.last=renderedTail;}}if(renderState.tail!==null){// We still have tail rows to render.
// Pop a row.
var next=renderState.tail;renderState.rendering=next;renderState.tail=next.sibling;renderState.lastEffect=workInProgress.lastEffect;renderState.renderingStartTime=now();next.sibling=null;// Restore the context.
// TODO: We can probably just avoid popping it instead and only
// setting it the first time we go from not suspended to suspended.
var suspenseContext=suspenseStackCursor.current;if(didSuspendAlready){suspenseContext=setShallowSuspenseContext(suspenseContext,ForceSuspenseFallback);}else {suspenseContext=setDefaultShallowSuspenseContext(suspenseContext);}pushSuspenseContext(workInProgress,suspenseContext);// Do a pass over the next row.
return next;}return null;}case FundamentalComponent:{break;}case ScopeComponent:{break;}case Block:break;case OffscreenComponent:case LegacyHiddenComponent:{popRenderLanes(workInProgress);if(current!==null){var _nextState=workInProgress.memoizedState;var _prevState=current.memoizedState;var prevIsHidden=_prevState!==null;var nextIsHidden=_nextState!==null;if(prevIsHidden!==nextIsHidden&&newProps.mode!=='unstable-defer-without-hiding'){workInProgress.flags|=Update;}}return null;}}{{throw Error("Unknown unit of work tag ("+workInProgress.tag+"). This error is likely caused by a bug in React. Please file an issue.");}}}function unwindWork(workInProgress,renderLanes){switch(workInProgress.tag){case ClassComponent:{var Component=workInProgress.type;if(isContextProvider(Component)){popContext(workInProgress);}var flags=workInProgress.flags;if(flags&ShouldCapture){workInProgress.flags=flags&~ShouldCapture|DidCapture;if((workInProgress.mode&ProfileMode)!==NoMode){transferActualDuration(workInProgress);}return workInProgress;}return null;}case HostRoot:{popHostContainer(workInProgress);popTopLevelContextObject(workInProgress);resetWorkInProgressVersions();var _flags=workInProgress.flags;if(!((_flags&DidCapture)===NoFlags)){{throw Error("The root failed to unmount after an error. This is likely a bug in React. Please file an issue.");}}workInProgress.flags=_flags&~ShouldCapture|DidCapture;return workInProgress;}case HostComponent:{// TODO: popHydrationState
popHostContext(workInProgress);return null;}case SuspenseComponent:{popSuspenseContext(workInProgress);var _flags2=workInProgress.flags;if(_flags2&ShouldCapture){workInProgress.flags=_flags2&~ShouldCapture|DidCapture;// Captured a suspense effect. Re-render the boundary.
if((workInProgress.mode&ProfileMode)!==NoMode){transferActualDuration(workInProgress);}return workInProgress;}return null;}case SuspenseListComponent:{popSuspenseContext(workInProgress);// SuspenseList doesn't actually catch anything. It should've been
// caught by a nested boundary. If not, it should bubble through.
return null;}case HostPortal:popHostContainer(workInProgress);return null;case ContextProvider:popProvider(workInProgress);return null;case OffscreenComponent:case LegacyHiddenComponent:popRenderLanes(workInProgress);return null;default:return null;}}function unwindInterruptedWork(interruptedWork){switch(interruptedWork.tag){case ClassComponent:{var childContextTypes=interruptedWork.type.childContextTypes;if(childContextTypes!==null&&childContextTypes!==undefined){popContext(interruptedWork);}break;}case HostRoot:{popHostContainer(interruptedWork);popTopLevelContextObject(interruptedWork);resetWorkInProgressVersions();break;}case HostComponent:{popHostContext(interruptedWork);break;}case HostPortal:popHostContainer(interruptedWork);break;case SuspenseComponent:popSuspenseContext(interruptedWork);break;case SuspenseListComponent:popSuspenseContext(interruptedWork);break;case ContextProvider:popProvider(interruptedWork);break;case OffscreenComponent:case LegacyHiddenComponent:popRenderLanes(interruptedWork);break;}}function createCapturedValue(value,source){// If the value is an error, call this function immediately after it is thrown
// so the stack is accurate.
return {value:value,source:source,stack:getStackByFiberInDevAndProd(source)};}// This module is forked in different environments.
// By default, return `true` to log errors to the console.
// Forks can return `false` if this isn't desirable.
function showErrorDialog(boundary,errorInfo){return true;}function logCapturedError(boundary,errorInfo){try{var logError=showErrorDialog(boundary,errorInfo);// Allow injected showErrorDialog() to prevent default console.error logging.
// This enables renderers like ReactNative to better manage redbox behavior.
if(logError===false){return;}var error=errorInfo.value;if(true){var source=errorInfo.source;var stack=errorInfo.stack;var componentStack=stack!==null?stack:'';// Browsers support silencing uncaught errors by calling
// `preventDefault()` in window `error` handler.
// We record this information as an expando on the error.
if(error!=null&&error._suppressLogging){if(boundary.tag===ClassComponent){// The error is recoverable and was silenced.
// Ignore it and don't print the stack addendum.
// This is handy for testing error boundaries without noise.
return;}// The error is fatal. Since the silencing might have
// been accidental, we'll surface it anyway.
// However, the browser would have silenced the original error
// so we'll print it first, and then print the stack addendum.
console['error'](error);// Don't transform to our wrapper
// For a more detailed description of this block, see:
// https://github.com/facebook/react/pull/13384
}var componentName=source?getComponentName(source.type):null;var componentNameMessage=componentName?"The above error occurred in the <"+componentName+"> component:":'The above error occurred in one of your React components:';var errorBoundaryMessage;var errorBoundaryName=getComponentName(boundary.type);if(errorBoundaryName){errorBoundaryMessage="React will try to recreate this component tree from scratch "+("using the error boundary you provided, "+errorBoundaryName+".");}else {errorBoundaryMessage='Consider adding an error boundary to your tree to customize error handling behavior.\n'+'Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.';}var combinedMessage=componentNameMessage+"\n"+componentStack+"\n\n"+(""+errorBoundaryMessage);// In development, we provide our own message with just the component stack.
// We don't include the original error message and JS stack because the browser
// has already printed it. Even if the application swallows the error, it is still
// displayed by the browser thanks to the DEV-only fake event trick in ReactErrorUtils.
console['error'](combinedMessage);// Don't transform to our wrapper
}}catch(e){// This method must not throw, or React internal state will get messed up.
// If console.error is overridden, or logCapturedError() shows a dialog that throws,
// we want to report this error outside of the normal stack as a last resort.
// https://github.com/facebook/react/issues/13188
setTimeout(function(){throw e;});}}var PossiblyWeakMap$1=typeof WeakMap==='function'?WeakMap:Map;function createRootErrorUpdate(fiber,errorInfo,lane){var update=createUpdate(NoTimestamp,lane);// Unmount the root by rendering null.
update.tag=CaptureUpdate;// Caution: React DevTools currently depends on this property
// being called "element".
update.payload={element:null};var error=errorInfo.value;update.callback=function(){onUncaughtError(error);logCapturedError(fiber,errorInfo);};return update;}function createClassErrorUpdate(fiber,errorInfo,lane){var update=createUpdate(NoTimestamp,lane);update.tag=CaptureUpdate;var getDerivedStateFromError=fiber.type.getDerivedStateFromError;if(typeof getDerivedStateFromError==='function'){var error$1=errorInfo.value;update.payload=function(){logCapturedError(fiber,errorInfo);return getDerivedStateFromError(error$1);};}var inst=fiber.stateNode;if(inst!==null&&typeof inst.componentDidCatch==='function'){update.callback=function callback(){{markFailedErrorBoundaryForHotReloading(fiber);}if(typeof getDerivedStateFromError!=='function'){// To preserve the preexisting retry behavior of error boundaries,
// we keep track of which ones already failed during this batch.
// This gets reset before we yield back to the browser.
// TODO: Warn in strict mode if getDerivedStateFromError is
// not defined.
markLegacyErrorBoundaryAsFailed(this);// Only log here if componentDidCatch is the only error boundary method defined
logCapturedError(fiber,errorInfo);}var error$1=errorInfo.value;var stack=errorInfo.stack;this.componentDidCatch(error$1,{componentStack:stack!==null?stack:''});{if(typeof getDerivedStateFromError!=='function'){// If componentDidCatch is the only error boundary method defined,
// then it needs to call setState to recover from errors.
// If no state update is scheduled then the boundary will swallow the error.
if(!includesSomeLane(fiber.lanes,SyncLane)){error('%s: Error boundaries should implement getDerivedStateFromError(). '+'In that method, return a state update to display an error message or fallback UI.',getComponentName(fiber.type)||'Unknown');}}}};}else {update.callback=function(){markFailedErrorBoundaryForHotReloading(fiber);};}return update;}function attachPingListener(root,wakeable,lanes){// Attach a listener to the promise to "ping" the root and retry. But only if
// one does not already exist for the lanes we're currently rendering (which
// acts like a "thread ID" here).
var pingCache=root.pingCache;var threadIDs;if(pingCache===null){pingCache=root.pingCache=new PossiblyWeakMap$1();threadIDs=new Set();pingCache.set(wakeable,threadIDs);}else {threadIDs=pingCache.get(wakeable);if(threadIDs===undefined){threadIDs=new Set();pingCache.set(wakeable,threadIDs);}}if(!threadIDs.has(lanes)){// Memoize using the thread ID to prevent redundant listeners.
threadIDs.add(lanes);var ping=pingSuspendedRoot.bind(null,root,wakeable,lanes);wakeable.then(ping,ping);}}function throwException(root,returnFiber,sourceFiber,value,rootRenderLanes){// The source fiber did not complete.
sourceFiber.flags|=Incomplete;// Its effect list is no longer valid.
sourceFiber.firstEffect=sourceFiber.lastEffect=null;if(value!==null&&_typeof$1(value)==='object'&&typeof value.then==='function'){// This is a wakeable.
var wakeable=value;if((sourceFiber.mode&BlockingMode)===NoMode){// Reset the memoizedState to what it was before we attempted
// to render it.
var currentSource=sourceFiber.alternate;if(currentSource){sourceFiber.updateQueue=currentSource.updateQueue;sourceFiber.memoizedState=currentSource.memoizedState;sourceFiber.lanes=currentSource.lanes;}else {sourceFiber.updateQueue=null;sourceFiber.memoizedState=null;}}var hasInvisibleParentBoundary=hasSuspenseContext(suspenseStackCursor.current,InvisibleParentSuspenseContext);// Schedule the nearest Suspense to re-render the timed out view.
var _workInProgress=returnFiber;do{if(_workInProgress.tag===SuspenseComponent&&shouldCaptureSuspense(_workInProgress,hasInvisibleParentBoundary)){// Found the nearest boundary.
// Stash the promise on the boundary fiber. If the boundary times out, we'll
// attach another listener to flip the boundary back to its normal state.
var wakeables=_workInProgress.updateQueue;if(wakeables===null){var updateQueue=new Set();updateQueue.add(wakeable);_workInProgress.updateQueue=updateQueue;}else {wakeables.add(wakeable);}// If the boundary is outside of blocking mode, we should *not*
// suspend the commit. Pretend as if the suspended component rendered
// null and keep rendering. In the commit phase, we'll schedule a
// subsequent synchronous update to re-render the Suspense.
//
// Note: It doesn't matter whether the component that suspended was
// inside a blocking mode tree. If the Suspense is outside of it, we
// should *not* suspend the commit.
if((_workInProgress.mode&BlockingMode)===NoMode){_workInProgress.flags|=DidCapture;sourceFiber.flags|=ForceUpdateForLegacySuspense;// We're going to commit this fiber even though it didn't complete.
// But we shouldn't call any lifecycle methods or callbacks. Remove
// all lifecycle effect tags.
sourceFiber.flags&=~(LifecycleEffectMask|Incomplete);if(sourceFiber.tag===ClassComponent){var currentSourceFiber=sourceFiber.alternate;if(currentSourceFiber===null){// This is a new mount. Change the tag so it's not mistaken for a
// completed class component. For example, we should not call
// componentWillUnmount if it is deleted.
sourceFiber.tag=IncompleteClassComponent;}else {// When we try rendering again, we should not reuse the current fiber,
// since it's known to be in an inconsistent state. Use a force update to
// prevent a bail out.
var update=createUpdate(NoTimestamp,SyncLane);update.tag=ForceUpdate;enqueueUpdate(sourceFiber,update);}}// The source fiber did not complete. Mark it with Sync priority to
// indicate that it still has pending work.
sourceFiber.lanes=mergeLanes(sourceFiber.lanes,SyncLane);// Exit without suspending.
return;}// Confirmed that the boundary is in a concurrent mode tree. Continue
// with the normal suspend path.
//
// After this we'll use a set of heuristics to determine whether this
// render pass will run to completion or restart or "suspend" the commit.
// The actual logic for this is spread out in different places.
//
// This first principle is that if we're going to suspend when we complete
// a root, then we should also restart if we get an update or ping that
// might unsuspend it, and vice versa. The only reason to suspend is
// because you think you might want to restart before committing. However,
// it doesn't make sense to restart only while in the period we're suspended.
//
// Restarting too aggressively is also not good because it starves out any
// intermediate loading state. So we use heuristics to determine when.
// Suspense Heuristics
//
// If nothing threw a Promise or all the same fallbacks are already showing,
// then don't suspend/restart.
//
// If this is an initial render of a new tree of Suspense boundaries and
// those trigger a fallback, then don't suspend/restart. We want to ensure
// that we can show the initial loading state as quickly as possible.
//
// If we hit a "Delayed" case, such as when we'd switch from content back into
// a fallback, then we should always suspend/restart. Transitions apply
// to this case. If none is defined, JND is used instead.
//
// If we're already showing a fallback and it gets "retried", allowing us to show
// another level, but there's still an inner boundary that would show a fallback,
// then we suspend/restart for 500ms since the last time we showed a fallback
// anywhere in the tree. This effectively throttles progressive loading into a
// consistent train of commits. This also gives us an opportunity to restart to
// get to the completed state slightly earlier.
//
// If there's ambiguity due to batching it's resolved in preference of:
// 1) "delayed", 2) "initial render", 3) "retry".
//
// We want to ensure that a "busy" state doesn't get force committed. We want to
// ensure that new initial loading states can commit as soon as possible.
attachPingListener(root,wakeable,rootRenderLanes);_workInProgress.flags|=ShouldCapture;_workInProgress.lanes=rootRenderLanes;return;}// This boundary already captured during this render. Continue to the next
// boundary.
_workInProgress=_workInProgress["return"];}while(_workInProgress!==null);// No boundary was found. Fallthrough to error mode.
// TODO: Use invariant so the message is stripped in prod?
value=new Error((getComponentName(sourceFiber.type)||'A React component')+' suspended while rendering, but no fallback UI was specified.\n'+'\n'+'Add a <Suspense fallback=...> component higher in the tree to '+'provide a loading indicator or placeholder to display.');}// We didn't find a boundary that could handle this type of exception. Start
// over and traverse parent path again, this time treating the exception
// as an error.
renderDidError();value=createCapturedValue(value,sourceFiber);var workInProgress=returnFiber;do{switch(workInProgress.tag){case HostRoot:{var _errorInfo=value;workInProgress.flags|=ShouldCapture;var lane=pickArbitraryLane(rootRenderLanes);workInProgress.lanes=mergeLanes(workInProgress.lanes,lane);var _update=createRootErrorUpdate(workInProgress,_errorInfo,lane);enqueueCapturedUpdate(workInProgress,_update);return;}case ClassComponent:// Capture and retry
var errorInfo=value;var ctor=workInProgress.type;var instance=workInProgress.stateNode;if((workInProgress.flags&DidCapture)===NoFlags&&(typeof ctor.getDerivedStateFromError==='function'||instance!==null&&typeof instance.componentDidCatch==='function'&&!isAlreadyFailedLegacyErrorBoundary(instance))){workInProgress.flags|=ShouldCapture;var _lane=pickArbitraryLane(rootRenderLanes);workInProgress.lanes=mergeLanes(workInProgress.lanes,_lane);// Schedule the error boundary to re-render using updated state
var _update2=createClassErrorUpdate(workInProgress,errorInfo,_lane);enqueueCapturedUpdate(workInProgress,_update2);return;}break;}workInProgress=workInProgress["return"];}while(workInProgress!==null);}var didWarnAboutUndefinedSnapshotBeforeUpdate=null;{didWarnAboutUndefinedSnapshotBeforeUpdate=new Set();}var PossiblyWeakSet=typeof WeakSet==='function'?WeakSet:Set;var callComponentWillUnmountWithTimer=function callComponentWillUnmountWithTimer(current,instance){instance.props=current.memoizedProps;instance.state=current.memoizedState;{instance.componentWillUnmount();}};// Capture errors so they don't interrupt unmounting.
function safelyCallComponentWillUnmount(current,instance){{invokeGuardedCallback(null,callComponentWillUnmountWithTimer,null,current,instance);if(hasCaughtError()){var unmountError=clearCaughtError();captureCommitPhaseError(current,unmountError);}}}function safelyDetachRef(current){var ref=current.ref;if(ref!==null){if(typeof ref==='function'){{invokeGuardedCallback(null,ref,null,null);if(hasCaughtError()){var refError=clearCaughtError();captureCommitPhaseError(current,refError);}}}else {ref.current=null;}}}function safelyCallDestroy(current,destroy){{invokeGuardedCallback(null,destroy,null);if(hasCaughtError()){var error=clearCaughtError();captureCommitPhaseError(current,error);}}}function commitBeforeMutationLifeCycles(current,finishedWork){switch(finishedWork.tag){case FunctionComponent:case ForwardRef:case SimpleMemoComponent:case Block:{return;}case ClassComponent:{if(finishedWork.flags&Snapshot){if(current!==null){var prevProps=current.memoizedProps;var prevState=current.memoizedState;var instance=finishedWork.stateNode;// We could update instance props and state here,
// but instead we rely on them being set during last render.
// TODO: revisit this when we implement resuming.
{if(finishedWork.type===finishedWork.elementType&&!didWarnAboutReassigningProps){if(instance.props!==finishedWork.memoizedProps){error('Expected %s props to match memoized props before '+'getSnapshotBeforeUpdate. '+'This might either be because of a bug in React, or because '+'a component reassigns its own `this.props`. '+'Please file an issue.',getComponentName(finishedWork.type)||'instance');}if(instance.state!==finishedWork.memoizedState){error('Expected %s state to match memoized state before '+'getSnapshotBeforeUpdate. '+'This might either be because of a bug in React, or because '+'a component reassigns its own `this.state`. '+'Please file an issue.',getComponentName(finishedWork.type)||'instance');}}}var snapshot=instance.getSnapshotBeforeUpdate(finishedWork.elementType===finishedWork.type?prevProps:resolveDefaultProps(finishedWork.type,prevProps),prevState);{var didWarnSet=didWarnAboutUndefinedSnapshotBeforeUpdate;if(snapshot===undefined&&!didWarnSet.has(finishedWork.type)){didWarnSet.add(finishedWork.type);error('%s.getSnapshotBeforeUpdate(): A snapshot value (or null) '+'must be returned. You have returned undefined.',getComponentName(finishedWork.type));}}instance.__reactInternalSnapshotBeforeUpdate=snapshot;}}return;}case HostRoot:{{if(finishedWork.flags&Snapshot){var root=finishedWork.stateNode;clearContainer(root.containerInfo);}}return;}case HostComponent:case HostText:case HostPortal:case IncompleteClassComponent:// Nothing to do for these component types
return;}{{throw Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");}}}function commitHookEffectListUnmount(tag,finishedWork){var updateQueue=finishedWork.updateQueue;var lastEffect=updateQueue!==null?updateQueue.lastEffect:null;if(lastEffect!==null){var firstEffect=lastEffect.next;var effect=firstEffect;do{if((effect.tag&tag)===tag){// Unmount
var destroy=effect.destroy;effect.destroy=undefined;if(destroy!==undefined){destroy();}}effect=effect.next;}while(effect!==firstEffect);}}function commitHookEffectListMount(tag,finishedWork){var updateQueue=finishedWork.updateQueue;var lastEffect=updateQueue!==null?updateQueue.lastEffect:null;if(lastEffect!==null){var firstEffect=lastEffect.next;var effect=firstEffect;do{if((effect.tag&tag)===tag){// Mount
var create=effect.create;effect.destroy=create();{var destroy=effect.destroy;if(destroy!==undefined&&typeof destroy!=='function'){var addendum=void 0;if(destroy===null){addendum=' You returned null. If your effect does not require clean '+'up, return undefined (or nothing).';}else if(typeof destroy.then==='function'){addendum='\n\nIt looks like you wrote useEffect(async () => ...) or returned a Promise. '+'Instead, write the async function inside your effect '+'and call it immediately:\n\n'+'useEffect(() => {\n'+'  async function fetchData() {\n'+'    // You can await here\n'+'    const response = await MyAPI.getData(someId);\n'+'    // ...\n'+'  }\n'+'  fetchData();\n'+"}, [someId]); // Or [] if effect doesn't need props or state\n\n"+'Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching';}else {addendum=' You returned: '+destroy;}error('An effect function must not return anything besides a function, '+'which is used for clean-up.%s',addendum);}}}effect=effect.next;}while(effect!==firstEffect);}}function schedulePassiveEffects(finishedWork){var updateQueue=finishedWork.updateQueue;var lastEffect=updateQueue!==null?updateQueue.lastEffect:null;if(lastEffect!==null){var firstEffect=lastEffect.next;var effect=firstEffect;do{var _effect=effect,next=_effect.next,tag=_effect.tag;if((tag&Passive$1)!==NoFlags$1&&(tag&HasEffect)!==NoFlags$1){enqueuePendingPassiveHookEffectUnmount(finishedWork,effect);enqueuePendingPassiveHookEffectMount(finishedWork,effect);}effect=next;}while(effect!==firstEffect);}}function commitLifeCycles(finishedRoot,current,finishedWork,committedLanes){switch(finishedWork.tag){case FunctionComponent:case ForwardRef:case SimpleMemoComponent:case Block:{// At this point layout effects have already been destroyed (during mutation phase).
// This is done to prevent sibling component effects from interfering with each other,
// e.g. a destroy function in one component should never override a ref set
// by a create function in another component during the same commit.
{commitHookEffectListMount(Layout|HasEffect,finishedWork);}schedulePassiveEffects(finishedWork);return;}case ClassComponent:{var instance=finishedWork.stateNode;if(finishedWork.flags&Update){if(current===null){// We could update instance props and state here,
// but instead we rely on them being set during last render.
// TODO: revisit this when we implement resuming.
{if(finishedWork.type===finishedWork.elementType&&!didWarnAboutReassigningProps){if(instance.props!==finishedWork.memoizedProps){error('Expected %s props to match memoized props before '+'componentDidMount. '+'This might either be because of a bug in React, or because '+'a component reassigns its own `this.props`. '+'Please file an issue.',getComponentName(finishedWork.type)||'instance');}if(instance.state!==finishedWork.memoizedState){error('Expected %s state to match memoized state before '+'componentDidMount. '+'This might either be because of a bug in React, or because '+'a component reassigns its own `this.state`. '+'Please file an issue.',getComponentName(finishedWork.type)||'instance');}}}{instance.componentDidMount();}}else {var prevProps=finishedWork.elementType===finishedWork.type?current.memoizedProps:resolveDefaultProps(finishedWork.type,current.memoizedProps);var prevState=current.memoizedState;// We could update instance props and state here,
// but instead we rely on them being set during last render.
// TODO: revisit this when we implement resuming.
{if(finishedWork.type===finishedWork.elementType&&!didWarnAboutReassigningProps){if(instance.props!==finishedWork.memoizedProps){error('Expected %s props to match memoized props before '+'componentDidUpdate. '+'This might either be because of a bug in React, or because '+'a component reassigns its own `this.props`. '+'Please file an issue.',getComponentName(finishedWork.type)||'instance');}if(instance.state!==finishedWork.memoizedState){error('Expected %s state to match memoized state before '+'componentDidUpdate. '+'This might either be because of a bug in React, or because '+'a component reassigns its own `this.state`. '+'Please file an issue.',getComponentName(finishedWork.type)||'instance');}}}{instance.componentDidUpdate(prevProps,prevState,instance.__reactInternalSnapshotBeforeUpdate);}}}// TODO: I think this is now always non-null by the time it reaches the
// commit phase. Consider removing the type check.
var updateQueue=finishedWork.updateQueue;if(updateQueue!==null){{if(finishedWork.type===finishedWork.elementType&&!didWarnAboutReassigningProps){if(instance.props!==finishedWork.memoizedProps){error('Expected %s props to match memoized props before '+'processing the update queue. '+'This might either be because of a bug in React, or because '+'a component reassigns its own `this.props`. '+'Please file an issue.',getComponentName(finishedWork.type)||'instance');}if(instance.state!==finishedWork.memoizedState){error('Expected %s state to match memoized state before '+'processing the update queue. '+'This might either be because of a bug in React, or because '+'a component reassigns its own `this.state`. '+'Please file an issue.',getComponentName(finishedWork.type)||'instance');}}}// We could update instance props and state here,
// but instead we rely on them being set during last render.
// TODO: revisit this when we implement resuming.
commitUpdateQueue(finishedWork,updateQueue,instance);}return;}case HostRoot:{// TODO: I think this is now always non-null by the time it reaches the
// commit phase. Consider removing the type check.
var _updateQueue=finishedWork.updateQueue;if(_updateQueue!==null){var _instance=null;if(finishedWork.child!==null){switch(finishedWork.child.tag){case HostComponent:_instance=getPublicInstance(finishedWork.child.stateNode);break;case ClassComponent:_instance=finishedWork.child.stateNode;break;}}commitUpdateQueue(finishedWork,_updateQueue,_instance);}return;}case HostComponent:{var _instance2=finishedWork.stateNode;// Renderers may schedule work to be done after host components are mounted
// (eg DOM renderer may schedule auto-focus for inputs and form controls).
// These effects should only be committed when components are first mounted,
// aka when there is no current/alternate.
if(current===null&&finishedWork.flags&Update){var type=finishedWork.type;var props=finishedWork.memoizedProps;commitMount(_instance2,type,props);}return;}case HostText:{// We have no life-cycles associated with text.
return;}case HostPortal:{// We have no life-cycles associated with portals.
return;}case Profiler:{{var _finishedWork$memoize2=finishedWork.memoizedProps,onCommit=_finishedWork$memoize2.onCommit,onRender=_finishedWork$memoize2.onRender;var effectDuration=finishedWork.stateNode.effectDuration;var commitTime=getCommitTime();if(typeof onRender==='function'){{onRender(finishedWork.memoizedProps.id,current===null?'mount':'update',finishedWork.actualDuration,finishedWork.treeBaseDuration,finishedWork.actualStartTime,commitTime,finishedRoot.memoizedInteractions);}}}return;}case SuspenseComponent:{commitSuspenseHydrationCallbacks(finishedRoot,finishedWork);return;}case SuspenseListComponent:case IncompleteClassComponent:case FundamentalComponent:case ScopeComponent:case OffscreenComponent:case LegacyHiddenComponent:return;}{{throw Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");}}}function hideOrUnhideAllChildren(finishedWork,isHidden){{// We only have the top Fiber that was inserted but we need to recurse down its
// children to find all the terminal nodes.
var node=finishedWork;while(true){if(node.tag===HostComponent){var instance=node.stateNode;if(isHidden){hideInstance(instance);}else {unhideInstance(node.stateNode,node.memoizedProps);}}else if(node.tag===HostText){var _instance3=node.stateNode;if(isHidden){hideTextInstance(_instance3);}else {unhideTextInstance(_instance3,node.memoizedProps);}}else if((node.tag===OffscreenComponent||node.tag===LegacyHiddenComponent)&&node.memoizedState!==null&&node!==finishedWork);else if(node.child!==null){node.child["return"]=node;node=node.child;continue;}if(node===finishedWork){return;}while(node.sibling===null){if(node["return"]===null||node["return"]===finishedWork){return;}node=node["return"];}node.sibling["return"]=node["return"];node=node.sibling;}}}function commitAttachRef(finishedWork){var ref=finishedWork.ref;if(ref!==null){var instance=finishedWork.stateNode;var instanceToUse;switch(finishedWork.tag){case HostComponent:instanceToUse=getPublicInstance(instance);break;default:instanceToUse=instance;}// Moved outside to ensure DCE works with this flag
if(typeof ref==='function'){ref(instanceToUse);}else {{if(!ref.hasOwnProperty('current')){error('Unexpected ref object provided for %s. '+'Use either a ref-setter function or React.createRef().',getComponentName(finishedWork.type));}}ref.current=instanceToUse;}}}function commitDetachRef(current){var currentRef=current.ref;if(currentRef!==null){if(typeof currentRef==='function'){currentRef(null);}else {currentRef.current=null;}}}// User-originating errors (lifecycles and refs) should not interrupt
// deletion, so don't let them throw. Host-originating errors should
// interrupt deletion, so it's okay
function commitUnmount(finishedRoot,current,renderPriorityLevel){onCommitUnmount(current);switch(current.tag){case FunctionComponent:case ForwardRef:case MemoComponent:case SimpleMemoComponent:case Block:{var updateQueue=current.updateQueue;if(updateQueue!==null){var lastEffect=updateQueue.lastEffect;if(lastEffect!==null){var firstEffect=lastEffect.next;var effect=firstEffect;do{var _effect2=effect,destroy=_effect2.destroy,tag=_effect2.tag;if(destroy!==undefined){if((tag&Passive$1)!==NoFlags$1){enqueuePendingPassiveHookEffectUnmount(current,effect);}else {{safelyCallDestroy(current,destroy);}}}effect=effect.next;}while(effect!==firstEffect);}}return;}case ClassComponent:{safelyDetachRef(current);var instance=current.stateNode;if(typeof instance.componentWillUnmount==='function'){safelyCallComponentWillUnmount(current,instance);}return;}case HostComponent:{safelyDetachRef(current);return;}case HostPortal:{// TODO: this is recursive.
// We are also not using this parent because
// the portal will get pushed immediately.
{unmountHostComponents(finishedRoot,current);}return;}case FundamentalComponent:{return;}case DehydratedFragment:{return;}case ScopeComponent:{return;}}}function commitNestedUnmounts(finishedRoot,root,renderPriorityLevel){// While we're inside a removed host node we don't want to call
// removeChild on the inner nodes because they're removed by the top
// call anyway. We also want to call componentWillUnmount on all
// composites before this host node is removed from the tree. Therefore
// we do an inner loop while we're still inside the host node.
var node=root;while(true){commitUnmount(finishedRoot,node);// Visit children because they may contain more composite or host nodes.
// Skip portals because commitUnmount() currently visits them recursively.
if(node.child!==null&&// If we use mutation we drill down into portals using commitUnmount above.
// If we don't use mutation we drill down into portals here instead.
node.tag!==HostPortal){node.child["return"]=node;node=node.child;continue;}if(node===root){return;}while(node.sibling===null){if(node["return"]===null||node["return"]===root){return;}node=node["return"];}node.sibling["return"]=node["return"];node=node.sibling;}}function detachFiberMutation(fiber){// Cut off the return pointers to disconnect it from the tree. Ideally, we
// should clear the child pointer of the parent alternate to let this
// get GC:ed but we don't know which for sure which parent is the current
// one so we'll settle for GC:ing the subtree of this child. This child
// itself will be GC:ed when the parent updates the next time.
// Note: we cannot null out sibling here, otherwise it can cause issues
// with findDOMNode and how it requires the sibling field to carry out
// traversal in a later effect. See PR #16820. We now clear the sibling
// field after effects, see: detachFiberAfterEffects.
//
// Don't disconnect stateNode now; it will be detached in detachFiberAfterEffects.
// It may be required if the current component is an error boundary,
// and one of its descendants throws while unmounting a passive effect.
fiber.alternate=null;fiber.child=null;fiber.dependencies=null;fiber.firstEffect=null;fiber.lastEffect=null;fiber.memoizedProps=null;fiber.memoizedState=null;fiber.pendingProps=null;fiber["return"]=null;fiber.updateQueue=null;{fiber._debugOwner=null;}}function getHostParentFiber(fiber){var parent=fiber["return"];while(parent!==null){if(isHostParent(parent)){return parent;}parent=parent["return"];}{{throw Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");}}}function isHostParent(fiber){return fiber.tag===HostComponent||fiber.tag===HostRoot||fiber.tag===HostPortal;}function getHostSibling(fiber){// We're going to search forward into the tree until we find a sibling host
// node. Unfortunately, if multiple insertions are done in a row we have to
// search past them. This leads to exponential search for the next sibling.
// TODO: Find a more efficient way to do this.
var node=fiber;siblings:while(true){// If we didn't find anything, let's try the next sibling.
while(node.sibling===null){if(node["return"]===null||isHostParent(node["return"])){// If we pop out of the root or hit the parent the fiber we are the
// last sibling.
return null;}node=node["return"];}node.sibling["return"]=node["return"];node=node.sibling;while(node.tag!==HostComponent&&node.tag!==HostText&&node.tag!==DehydratedFragment){// If it is not host node and, we might have a host node inside it.
// Try to search down until we find one.
if(node.flags&Placement){// If we don't have a child, try the siblings instead.
continue siblings;}// If we don't have a child, try the siblings instead.
// We also skip portals because they are not part of this host tree.
if(node.child===null||node.tag===HostPortal){continue siblings;}else {node.child["return"]=node;node=node.child;}}// Check if this host node is stable or about to be placed.
if(!(node.flags&Placement)){// Found it!
return node.stateNode;}}}function commitPlacement(finishedWork){var parentFiber=getHostParentFiber(finishedWork);// Note: these two variables *must* always be updated together.
var parent;var isContainer;var parentStateNode=parentFiber.stateNode;switch(parentFiber.tag){case HostComponent:parent=parentStateNode;isContainer=false;break;case HostRoot:parent=parentStateNode.containerInfo;isContainer=true;break;case HostPortal:parent=parentStateNode.containerInfo;isContainer=true;break;case FundamentalComponent:// eslint-disable-next-line-no-fallthrough
default:{{throw Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");}}}if(parentFiber.flags&ContentReset){// Reset the text content of the parent before doing any insertions
resetTextContent(parent);// Clear ContentReset from the effect tag
parentFiber.flags&=~ContentReset;}var before=getHostSibling(finishedWork);// We only have the top Fiber that was inserted but we need to recurse down its
// children to find all the terminal nodes.
if(isContainer){insertOrAppendPlacementNodeIntoContainer(finishedWork,before,parent);}else {insertOrAppendPlacementNode(finishedWork,before,parent);}}function insertOrAppendPlacementNodeIntoContainer(node,before,parent){var tag=node.tag;var isHost=tag===HostComponent||tag===HostText;if(isHost||enableFundamentalAPI){var stateNode=isHost?node.stateNode:node.stateNode.instance;if(before){insertInContainerBefore(parent,stateNode,before);}else {appendChildToContainer(parent,stateNode);}}else if(tag===HostPortal);else {var child=node.child;if(child!==null){insertOrAppendPlacementNodeIntoContainer(child,before,parent);var sibling=child.sibling;while(sibling!==null){insertOrAppendPlacementNodeIntoContainer(sibling,before,parent);sibling=sibling.sibling;}}}}function insertOrAppendPlacementNode(node,before,parent){var tag=node.tag;var isHost=tag===HostComponent||tag===HostText;if(isHost||enableFundamentalAPI){var stateNode=isHost?node.stateNode:node.stateNode.instance;if(before){insertBefore(parent,stateNode,before);}else {appendChild(parent,stateNode);}}else if(tag===HostPortal);else {var child=node.child;if(child!==null){insertOrAppendPlacementNode(child,before,parent);var sibling=child.sibling;while(sibling!==null){insertOrAppendPlacementNode(sibling,before,parent);sibling=sibling.sibling;}}}}function unmountHostComponents(finishedRoot,current,renderPriorityLevel){// We only have the top Fiber that was deleted but we need to recurse down its
// children to find all the terminal nodes.
var node=current;// Each iteration, currentParent is populated with node's host parent if not
// currentParentIsValid.
var currentParentIsValid=false;// Note: these two variables *must* always be updated together.
var currentParent;var currentParentIsContainer;while(true){if(!currentParentIsValid){var parent=node["return"];findParent:while(true){if(!(parent!==null)){{throw Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");}}var parentStateNode=parent.stateNode;switch(parent.tag){case HostComponent:currentParent=parentStateNode;currentParentIsContainer=false;break findParent;case HostRoot:currentParent=parentStateNode.containerInfo;currentParentIsContainer=true;break findParent;case HostPortal:currentParent=parentStateNode.containerInfo;currentParentIsContainer=true;break findParent;}parent=parent["return"];}currentParentIsValid=true;}if(node.tag===HostComponent||node.tag===HostText){commitNestedUnmounts(finishedRoot,node);// After all the children have unmounted, it is now safe to remove the
// node from the tree.
if(currentParentIsContainer){removeChildFromContainer(currentParent,node.stateNode);}else {removeChild(currentParent,node.stateNode);}// Don't visit children because we already visited them.
}else if(node.tag===HostPortal){if(node.child!==null){// When we go into a portal, it becomes the parent to remove from.
// We will reassign it back when we pop the portal on the way up.
currentParent=node.stateNode.containerInfo;currentParentIsContainer=true;// Visit children because portals might contain host components.
node.child["return"]=node;node=node.child;continue;}}else {commitUnmount(finishedRoot,node);// Visit children because we may find more host components below.
if(node.child!==null){node.child["return"]=node;node=node.child;continue;}}if(node===current){return;}while(node.sibling===null){if(node["return"]===null||node["return"]===current){return;}node=node["return"];if(node.tag===HostPortal){// When we go out of the portal, we need to restore the parent.
// Since we don't keep a stack of them, we will search for it.
currentParentIsValid=false;}}node.sibling["return"]=node["return"];node=node.sibling;}}function commitDeletion(finishedRoot,current,renderPriorityLevel){{// Recursively delete all host nodes from the parent.
// Detach refs and call componentWillUnmount() on the whole subtree.
unmountHostComponents(finishedRoot,current);}var alternate=current.alternate;detachFiberMutation(current);if(alternate!==null){detachFiberMutation(alternate);}}function commitWork(current,finishedWork){switch(finishedWork.tag){case FunctionComponent:case ForwardRef:case MemoComponent:case SimpleMemoComponent:case Block:{// Layout effects are destroyed during the mutation phase so that all
// destroy functions for all fibers are called before any create functions.
// This prevents sibling component effects from interfering with each other,
// e.g. a destroy function in one component should never override a ref set
// by a create function in another component during the same commit.
{commitHookEffectListUnmount(Layout|HasEffect,finishedWork);}return;}case ClassComponent:{return;}case HostComponent:{var instance=finishedWork.stateNode;if(instance!=null){// Commit the work prepared earlier.
var newProps=finishedWork.memoizedProps;// For hydration we reuse the update path but we treat the oldProps
// as the newProps. The updatePayload will contain the real change in
// this case.
var oldProps=current!==null?current.memoizedProps:newProps;var type=finishedWork.type;// TODO: Type the updateQueue to be specific to host components.
var updatePayload=finishedWork.updateQueue;finishedWork.updateQueue=null;if(updatePayload!==null){commitUpdate(instance,updatePayload,type,oldProps,newProps);}}return;}case HostText:{if(!(finishedWork.stateNode!==null)){{throw Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");}}var textInstance=finishedWork.stateNode;var newText=finishedWork.memoizedProps;// For hydration we reuse the update path but we treat the oldProps
// as the newProps. The updatePayload will contain the real change in
// this case.
var oldText=current!==null?current.memoizedProps:newText;commitTextUpdate(textInstance,oldText,newText);return;}case HostRoot:{{var _root=finishedWork.stateNode;if(_root.hydrate){// We've just hydrated. No need to hydrate again.
_root.hydrate=false;commitHydratedContainer(_root.containerInfo);}}return;}case Profiler:{return;}case SuspenseComponent:{commitSuspenseComponent(finishedWork);attachSuspenseRetryListeners(finishedWork);return;}case SuspenseListComponent:{attachSuspenseRetryListeners(finishedWork);return;}case IncompleteClassComponent:{return;}case FundamentalComponent:{break;}case ScopeComponent:{break;}case OffscreenComponent:case LegacyHiddenComponent:{var newState=finishedWork.memoizedState;var isHidden=newState!==null;hideOrUnhideAllChildren(finishedWork,isHidden);return;}}{{throw Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");}}}function commitSuspenseComponent(finishedWork){var newState=finishedWork.memoizedState;if(newState!==null){markCommitTimeOfFallback();{// Hide the Offscreen component that contains the primary children. TODO:
// Ideally, this effect would have been scheduled on the Offscreen fiber
// itself. That's how unhiding works: the Offscreen component schedules an
// effect on itself. However, in this case, the component didn't complete,
// so the fiber was never added to the effect list in the normal path. We
// could have appended it to the effect list in the Suspense component's
// second pass, but doing it this way is less complicated. This would be
// simpler if we got rid of the effect list and traversed the tree, like
// we're planning to do.
var primaryChildParent=finishedWork.child;hideOrUnhideAllChildren(primaryChildParent,true);}}}function commitSuspenseHydrationCallbacks(finishedRoot,finishedWork){var newState=finishedWork.memoizedState;if(newState===null){var current=finishedWork.alternate;if(current!==null){var prevState=current.memoizedState;if(prevState!==null){var suspenseInstance=prevState.dehydrated;if(suspenseInstance!==null){commitHydratedSuspenseInstance(suspenseInstance);}}}}}function attachSuspenseRetryListeners(finishedWork){// If this boundary just timed out, then it will have a set of wakeables.
// For each wakeable, attach a listener so that when it resolves, React
// attempts to re-render the boundary in the primary (pre-timeout) state.
var wakeables=finishedWork.updateQueue;if(wakeables!==null){finishedWork.updateQueue=null;var retryCache=finishedWork.stateNode;if(retryCache===null){retryCache=finishedWork.stateNode=new PossiblyWeakSet();}wakeables.forEach(function(wakeable){// Memoize using the boundary fiber to prevent redundant listeners.
var retry=resolveRetryWakeable.bind(null,finishedWork,wakeable);if(!retryCache.has(wakeable)){{if(wakeable.__reactDoNotTraceInteractions!==true){retry=tracing.unstable_wrap(retry);}}retryCache.add(wakeable);wakeable.then(retry,retry);}});}}// This function detects when a Suspense boundary goes from visible to hidden.
// It returns false if the boundary is already hidden.
// TODO: Use an effect tag.
function isSuspenseBoundaryBeingHidden(current,finishedWork){if(current!==null){var oldState=current.memoizedState;if(oldState===null||oldState.dehydrated!==null){var newState=finishedWork.memoizedState;return newState!==null&&newState.dehydrated===null;}}return false;}function commitResetTextContent(current){resetTextContent(current.stateNode);}var COMPONENT_TYPE=0;var HAS_PSEUDO_CLASS_TYPE=1;var ROLE_TYPE=2;var TEST_NAME_TYPE=3;var TEXT_TYPE=4;if(typeof Symbol==='function'&&Symbol["for"]){var symbolFor$1=Symbol["for"];COMPONENT_TYPE=symbolFor$1('selector.component');HAS_PSEUDO_CLASS_TYPE=symbolFor$1('selector.has_pseudo_class');ROLE_TYPE=symbolFor$1('selector.role');TEST_NAME_TYPE=symbolFor$1('selector.test_id');TEXT_TYPE=symbolFor$1('selector.text');}var commitHooks=[];function onCommitRoot$1(){{commitHooks.forEach(function(commitHook){return commitHook();});}}var ceil=Math.ceil;var ReactCurrentDispatcher$2=ReactSharedInternals.ReactCurrentDispatcher,ReactCurrentOwner$2=ReactSharedInternals.ReactCurrentOwner,IsSomeRendererActing=ReactSharedInternals.IsSomeRendererActing;var NoContext=/*             */0;var BatchedContext=/*               */1;var EventContext=/*                 */2;var DiscreteEventContext=/*         */4;var LegacyUnbatchedContext=/*       */8;var RenderContext=/*                */16;var CommitContext=/*                */32;var RetryAfterError=/*       */64;var RootIncomplete=0;var RootFatalErrored=1;var RootErrored=2;var RootSuspended=3;var RootSuspendedWithDelay=4;var RootCompleted=5;// Describes where we are in the React execution stack
var executionContext=NoContext;// The root we're working on
var workInProgressRoot=null;// The fiber we're working on
var workInProgress=null;// The lanes we're rendering
var workInProgressRootRenderLanes=NoLanes;// Stack that allows components to change the render lanes for its subtree
// This is a superset of the lanes we started working on at the root. The only
// case where it's different from `workInProgressRootRenderLanes` is when we
// enter a subtree that is hidden and needs to be unhidden: Suspense and
// Offscreen component.
//
// Most things in the work loop should deal with workInProgressRootRenderLanes.
// Most things in begin/complete phases should deal with subtreeRenderLanes.
var subtreeRenderLanes=NoLanes;var subtreeRenderLanesCursor=createCursor(NoLanes);// Whether to root completed, errored, suspended, etc.
var workInProgressRootExitStatus=RootIncomplete;// A fatal error, if one is thrown
var workInProgressRootFatalError=null;// "Included" lanes refer to lanes that were worked on during this render. It's
// slightly different than `renderLanes` because `renderLanes` can change as you
// enter and exit an Offscreen tree. This value is the combination of all render
// lanes for the entire render phase.
var workInProgressRootIncludedLanes=NoLanes;// The work left over by components that were visited during this render. Only
// includes unprocessed updates, not work in bailed out children.
var workInProgressRootSkippedLanes=NoLanes;// Lanes that were updated (in an interleaved event) during this render.
var workInProgressRootUpdatedLanes=NoLanes;// Lanes that were pinged (in an interleaved event) during this render.
var workInProgressRootPingedLanes=NoLanes;var mostRecentlyUpdatedRoot=null;// The most recent time we committed a fallback. This lets us ensure a train
// model where we don't commit new loading states in too quick succession.
var globalMostRecentFallbackTime=0;var FALLBACK_THROTTLE_MS=500;// The absolute time for when we should start giving up on rendering
// more and prefer CPU suspense heuristics instead.
var workInProgressRootRenderTargetTime=Infinity;// How long a render is supposed to take before we start following CPU
// suspense heuristics and opt out of rendering more content.
var RENDER_TIMEOUT_MS=500;function resetRenderTimer(){workInProgressRootRenderTargetTime=now()+RENDER_TIMEOUT_MS;}function getRenderTargetTime(){return workInProgressRootRenderTargetTime;}var nextEffect=null;var hasUncaughtError=false;var firstUncaughtError=null;var legacyErrorBoundariesThatAlreadyFailed=null;var rootDoesHavePassiveEffects=false;var rootWithPendingPassiveEffects=null;var pendingPassiveEffectsRenderPriority=NoPriority$1;var pendingPassiveEffectsLanes=NoLanes;var pendingPassiveHookEffectsMount=[];var pendingPassiveHookEffectsUnmount=[];var rootsWithPendingDiscreteUpdates=null;// Use these to prevent an infinite loop of nested updates
var NESTED_UPDATE_LIMIT=50;var nestedUpdateCount=0;var rootWithNestedUpdates=null;var NESTED_PASSIVE_UPDATE_LIMIT=50;var nestedPassiveUpdateCount=0;// Marks the need to reschedule pending interactions at these lanes
// during the commit phase. This enables them to be traced across components
// that spawn new work during render. E.g. hidden boundaries, suspended SSR
// hydration or SuspenseList.
// TODO: Can use a bitmask instead of an array
var spawnedWorkDuringRender=null;// If two updates are scheduled within the same event, we should treat their
// event times as simultaneous, even if the actual clock time has advanced
// between the first and second call.
var currentEventTime=NoTimestamp;var currentEventWipLanes=NoLanes;var currentEventPendingLanes=NoLanes;// Dev only flag that tracks if passive effects are currently being flushed.
// We warn about state updates for unmounted components differently in this case.
var isFlushingPassiveEffects=false;var focusedInstanceHandle=null;var shouldFireAfterActiveInstanceBlur=false;function getWorkInProgressRoot(){return workInProgressRoot;}function requestEventTime(){if((executionContext&(RenderContext|CommitContext))!==NoContext){// We're inside React, so it's fine to read the actual time.
return now();}// We're not inside React, so we may be in the middle of a browser event.
if(currentEventTime!==NoTimestamp){// Use the same start time for all updates until we enter React again.
return currentEventTime;}// This is the first update since React yielded. Compute a new start time.
currentEventTime=now();return currentEventTime;}function requestUpdateLane(fiber){// Special cases
var mode=fiber.mode;if((mode&BlockingMode)===NoMode){return SyncLane;}else if((mode&ConcurrentMode)===NoMode){return getCurrentPriorityLevel()===ImmediatePriority$1?SyncLane:SyncBatchedLane;}// The algorithm for assigning an update to a lane should be stable for all
// updates at the same priority within the same event. To do this, the inputs
// to the algorithm must be the same. For example, we use the `renderLanes`
// to avoid choosing a lane that is already in the middle of rendering.
//
// However, the "included" lanes could be mutated in between updates in the
// same event, like if you perform an update inside `flushSync`. Or any other
// code path that might call `prepareFreshStack`.
//
// The trick we use is to cache the first of each of these inputs within an
// event. Then reset the cached values once we can be sure the event is over.
// Our heuristic for that is whenever we enter a concurrent work loop.
//
// We'll do the same for `currentEventPendingLanes` below.
if(currentEventWipLanes===NoLanes){currentEventWipLanes=workInProgressRootIncludedLanes;}var isTransition=requestCurrentTransition()!==NoTransition;if(isTransition){if(currentEventPendingLanes!==NoLanes){currentEventPendingLanes=mostRecentlyUpdatedRoot!==null?mostRecentlyUpdatedRoot.pendingLanes:NoLanes;}return findTransitionLane(currentEventWipLanes,currentEventPendingLanes);}// TODO: Remove this dependency on the Scheduler priority.
// To do that, we're replacing it with an update lane priority.
var schedulerPriority=getCurrentPriorityLevel();// The old behavior was using the priority level of the Scheduler.
// This couples React to the Scheduler internals, so we're replacing it
// with the currentUpdateLanePriority above. As an example of how this
// could be problematic, if we're not inside `Scheduler.runWithPriority`,
// then we'll get the priority of the current running Scheduler task,
// which is probably not what we want.
var lane;if(// TODO: Temporary. We're removing the concept of discrete updates.
(executionContext&DiscreteEventContext)!==NoContext&&schedulerPriority===UserBlockingPriority$2){lane=findUpdateLane(InputDiscreteLanePriority,currentEventWipLanes);}else {var schedulerLanePriority=schedulerPriorityToLanePriority(schedulerPriority);lane=findUpdateLane(schedulerLanePriority,currentEventWipLanes);}return lane;}function requestRetryLane(fiber){// This is a fork of `requestUpdateLane` designed specifically for Suspense
// "retries" — a special update that attempts to flip a Suspense boundary
// from its placeholder state to its primary/resolved state.
// Special cases
var mode=fiber.mode;if((mode&BlockingMode)===NoMode){return SyncLane;}else if((mode&ConcurrentMode)===NoMode){return getCurrentPriorityLevel()===ImmediatePriority$1?SyncLane:SyncBatchedLane;}// See `requestUpdateLane` for explanation of `currentEventWipLanes`
if(currentEventWipLanes===NoLanes){currentEventWipLanes=workInProgressRootIncludedLanes;}return findRetryLane(currentEventWipLanes);}function scheduleUpdateOnFiber(fiber,lane,eventTime){checkForNestedUpdates();warnAboutRenderPhaseUpdatesInDEV(fiber);var root=markUpdateLaneFromFiberToRoot(fiber,lane);if(root===null){warnAboutUpdateOnUnmountedFiberInDEV(fiber);return null;}// Mark that the root has a pending update.
markRootUpdated(root,lane,eventTime);if(root===workInProgressRoot){// Received an update to a tree that's in the middle of rendering. Mark
// that there was an interleaved update work on this root. Unless the
// `deferRenderPhaseUpdateToNextBatch` flag is off and this is a render
// phase update. In that case, we don't treat render phase updates as if
// they were interleaved, for backwards compat reasons.
{workInProgressRootUpdatedLanes=mergeLanes(workInProgressRootUpdatedLanes,lane);}if(workInProgressRootExitStatus===RootSuspendedWithDelay){// The root already suspended with a delay, which means this render
// definitely won't finish. Since we have a new update, let's mark it as
// suspended now, right before marking the incoming update. This has the
// effect of interrupting the current render and switching to the update.
// TODO: Make sure this doesn't override pings that happen while we've
// already started rendering.
markRootSuspended$1(root,workInProgressRootRenderLanes);}}// TODO: requestUpdateLanePriority also reads the priority. Pass the
// priority as an argument to that function and this one.
var priorityLevel=getCurrentPriorityLevel();if(lane===SyncLane){if(// Check if we're inside unbatchedUpdates
(executionContext&LegacyUnbatchedContext)!==NoContext&&// Check if we're not already rendering
(executionContext&(RenderContext|CommitContext))===NoContext){// Register pending interactions on the root to avoid losing traced interaction data.
schedulePendingInteractions(root,lane);// This is a legacy edge case. The initial mount of a ReactDOM.render-ed
// root inside of batchedUpdates should be synchronous, but layout updates
// should be deferred until the end of the batch.
performSyncWorkOnRoot(root);}else {ensureRootIsScheduled(root,eventTime);schedulePendingInteractions(root,lane);if(executionContext===NoContext){// Flush the synchronous work now, unless we're already working or inside
// a batch. This is intentionally inside scheduleUpdateOnFiber instead of
// scheduleCallbackForFiber to preserve the ability to schedule a callback
// without immediately flushing it. We only do this for user-initiated
// updates, to preserve historical behavior of legacy mode.
resetRenderTimer();flushSyncCallbackQueue();}}}else {// Schedule a discrete update but only if it's not Sync.
if((executionContext&DiscreteEventContext)!==NoContext&&(// Only updates at user-blocking priority or greater are considered
// discrete, even inside a discrete event.
priorityLevel===UserBlockingPriority$2||priorityLevel===ImmediatePriority$1)){// This is the result of a discrete event. Track the lowest priority
// discrete update per root so we can flush them early, if needed.
if(rootsWithPendingDiscreteUpdates===null){rootsWithPendingDiscreteUpdates=new Set([root]);}else {rootsWithPendingDiscreteUpdates.add(root);}}// Schedule other updates after in case the callback is sync.
ensureRootIsScheduled(root,eventTime);schedulePendingInteractions(root,lane);}// We use this when assigning a lane for a transition inside
// `requestUpdateLane`. We assume it's the same as the root being updated,
// since in the common case of a single root app it probably is. If it's not
// the same root, then it's not a huge deal, we just might batch more stuff
// together more than necessary.
mostRecentlyUpdatedRoot=root;}// This is split into a separate function so we can mark a fiber with pending
// work without treating it as a typical update that originates from an event;
// e.g. retrying a Suspense boundary isn't an update, but it does schedule work
// on a fiber.
function markUpdateLaneFromFiberToRoot(sourceFiber,lane){// Update the source fiber's lanes
sourceFiber.lanes=mergeLanes(sourceFiber.lanes,lane);var alternate=sourceFiber.alternate;if(alternate!==null){alternate.lanes=mergeLanes(alternate.lanes,lane);}{if(alternate===null&&(sourceFiber.flags&(Placement|Hydrating))!==NoFlags){warnAboutUpdateOnNotYetMountedFiberInDEV(sourceFiber);}}// Walk the parent path to the root and update the child expiration time.
var node=sourceFiber;var parent=sourceFiber["return"];while(parent!==null){parent.childLanes=mergeLanes(parent.childLanes,lane);alternate=parent.alternate;if(alternate!==null){alternate.childLanes=mergeLanes(alternate.childLanes,lane);}else {{if((parent.flags&(Placement|Hydrating))!==NoFlags){warnAboutUpdateOnNotYetMountedFiberInDEV(sourceFiber);}}}node=parent;parent=parent["return"];}if(node.tag===HostRoot){var root=node.stateNode;return root;}else {return null;}}// Use this function to schedule a task for a root. There's only one task per
// root; if a task was already scheduled, we'll check to make sure the priority
// of the existing task is the same as the priority of the next level that the
// root has work on. This function is called on every update, and right before
// exiting a task.
function ensureRootIsScheduled(root,currentTime){var existingCallbackNode=root.callbackNode;// Check if any lanes are being starved by other work. If so, mark them as
// expired so we know to work on those next.
markStarvedLanesAsExpired(root,currentTime);// Determine the next lanes to work on, and their priority.
var nextLanes=getNextLanes(root,root===workInProgressRoot?workInProgressRootRenderLanes:NoLanes);// This returns the priority level computed during the `getNextLanes` call.
var newCallbackPriority=returnNextLanesPriority();if(nextLanes===NoLanes){// Special case: There's nothing to work on.
if(existingCallbackNode!==null){cancelCallback(existingCallbackNode);root.callbackNode=null;root.callbackPriority=NoLanePriority;}return;}// Check if there's an existing task. We may be able to reuse it.
if(existingCallbackNode!==null){var existingCallbackPriority=root.callbackPriority;if(existingCallbackPriority===newCallbackPriority){// The priority hasn't changed. We can reuse the existing task. Exit.
return;}// The priority changed. Cancel the existing callback. We'll schedule a new
// one below.
cancelCallback(existingCallbackNode);}// Schedule a new callback.
var newCallbackNode;if(newCallbackPriority===SyncLanePriority){// Special case: Sync React callbacks are scheduled on a special
// internal queue
newCallbackNode=scheduleSyncCallback(performSyncWorkOnRoot.bind(null,root));}else if(newCallbackPriority===SyncBatchedLanePriority){newCallbackNode=scheduleCallback(ImmediatePriority$1,performSyncWorkOnRoot.bind(null,root));}else {var schedulerPriorityLevel=lanePriorityToSchedulerPriority(newCallbackPriority);newCallbackNode=scheduleCallback(schedulerPriorityLevel,performConcurrentWorkOnRoot.bind(null,root));}root.callbackPriority=newCallbackPriority;root.callbackNode=newCallbackNode;}// This is the entry point for every concurrent task, i.e. anything that
// goes through Scheduler.
function performConcurrentWorkOnRoot(root){// Since we know we're in a React event, we can clear the current
// event time. The next update will compute a new event time.
currentEventTime=NoTimestamp;currentEventWipLanes=NoLanes;currentEventPendingLanes=NoLanes;if(!((executionContext&(RenderContext|CommitContext))===NoContext)){{throw Error("Should not already be working.");}}// Flush any pending passive effects before deciding which lanes to work on,
// in case they schedule additional work.
var originalCallbackNode=root.callbackNode;var didFlushPassiveEffects=flushPassiveEffects();if(didFlushPassiveEffects){// Something in the passive effect phase may have canceled the current task.
// Check if the task node for this root was changed.
if(root.callbackNode!==originalCallbackNode){// The current task was canceled. Exit. We don't need to call
// `ensureRootIsScheduled` because the check above implies either that
// there's a new task, or that there's no remaining work on this root.
return null;}}// Determine the next expiration time to work on, using the fields stored
// on the root.
var lanes=getNextLanes(root,root===workInProgressRoot?workInProgressRootRenderLanes:NoLanes);if(lanes===NoLanes){// Defensive coding. This is never expected to happen.
return null;}var exitStatus=renderRootConcurrent(root,lanes);if(includesSomeLane(workInProgressRootIncludedLanes,workInProgressRootUpdatedLanes)){// The render included lanes that were updated during the render phase.
// For example, when unhiding a hidden tree, we include all the lanes
// that were previously skipped when the tree was hidden. That set of
// lanes is a superset of the lanes we started rendering with.
//
// So we'll throw out the current work and restart.
prepareFreshStack(root,NoLanes);}else if(exitStatus!==RootIncomplete){if(exitStatus===RootErrored){executionContext|=RetryAfterError;// If an error occurred during hydration,
// discard server response and fall back to client side render.
if(root.hydrate){root.hydrate=false;clearContainer(root.containerInfo);}// If something threw an error, try rendering one more time. We'll render
// synchronously to block concurrent data mutations, and we'll includes
// all pending updates are included. If it still fails after the second
// attempt, we'll give up and commit the resulting tree.
lanes=getLanesToRetrySynchronouslyOnError(root);if(lanes!==NoLanes){exitStatus=renderRootSync(root,lanes);}}if(exitStatus===RootFatalErrored){var fatalError=workInProgressRootFatalError;prepareFreshStack(root,NoLanes);markRootSuspended$1(root,lanes);ensureRootIsScheduled(root,now());throw fatalError;}// We now have a consistent tree. The next step is either to commit it,
// or, if something suspended, wait to commit it after a timeout.
var finishedWork=root.current.alternate;root.finishedWork=finishedWork;root.finishedLanes=lanes;finishConcurrentRender(root,exitStatus,lanes);}ensureRootIsScheduled(root,now());if(root.callbackNode===originalCallbackNode){// The task node scheduled for this root is the same one that's
// currently executed. Need to return a continuation.
return performConcurrentWorkOnRoot.bind(null,root);}return null;}function finishConcurrentRender(root,exitStatus,lanes){switch(exitStatus){case RootIncomplete:case RootFatalErrored:{{{throw Error("Root did not complete. This is a bug in React.");}}}// Flow knows about invariant, so it complains if I add a break
// statement, but eslint doesn't know about invariant, so it complains
// if I do. eslint-disable-next-line no-fallthrough
case RootErrored:{// We should have already attempted to retry this tree. If we reached
// this point, it errored again. Commit it.
commitRoot(root);break;}case RootSuspended:{markRootSuspended$1(root,lanes);// We have an acceptable loading state. We need to figure out if we
// should immediately commit it or wait a bit.
if(includesOnlyRetries(lanes)&&// do not delay if we're inside an act() scope
!shouldForceFlushFallbacksInDEV()){// This render only included retries, no updates. Throttle committing
// retries so that we don't show too many loading states too quickly.
var msUntilTimeout=globalMostRecentFallbackTime+FALLBACK_THROTTLE_MS-now();// Don't bother with a very short suspense time.
if(msUntilTimeout>10){var nextLanes=getNextLanes(root,NoLanes);if(nextLanes!==NoLanes){// There's additional work on this root.
break;}var suspendedLanes=root.suspendedLanes;if(!isSubsetOfLanes(suspendedLanes,lanes)){// We should prefer to render the fallback of at the last
// suspended level. Ping the last suspended level to try
// rendering it again.
// FIXME: What if the suspended lanes are Idle? Should not restart.
var eventTime=requestEventTime();markRootPinged(root,suspendedLanes);break;}// The render is suspended, it hasn't timed out, and there's no
// lower priority work to do. Instead of committing the fallback
// immediately, wait for more data to arrive.
root.timeoutHandle=scheduleTimeout(commitRoot.bind(null,root),msUntilTimeout);break;}}// The work expired. Commit immediately.
commitRoot(root);break;}case RootSuspendedWithDelay:{markRootSuspended$1(root,lanes);if(includesOnlyTransitions(lanes)){// This is a transition, so we should exit without committing a
// placeholder and without scheduling a timeout. Delay indefinitely
// until we receive more data.
break;}{// This is not a transition, but we did trigger an avoided state.
// Schedule a placeholder to display after a short delay, using the Just
// Noticeable Difference.
// TODO: Is the JND optimization worth the added complexity? If this is
// the only reason we track the event time, then probably not.
// Consider removing.
var mostRecentEventTime=getMostRecentEventTime(root,lanes);var eventTimeMs=mostRecentEventTime;var timeElapsedMs=now()-eventTimeMs;var _msUntilTimeout=jnd(timeElapsedMs)-timeElapsedMs;// Don't bother with a very short suspense time.
if(_msUntilTimeout>10){// Instead of committing the fallback immediately, wait for more data
// to arrive.
root.timeoutHandle=scheduleTimeout(commitRoot.bind(null,root),_msUntilTimeout);break;}}// Commit the placeholder.
commitRoot(root);break;}case RootCompleted:{// The work completed. Ready to commit.
commitRoot(root);break;}default:{{{throw Error("Unknown root exit status.");}}}}}function markRootSuspended$1(root,suspendedLanes){// When suspending, we should always exclude lanes that were pinged or (more
// rarely, since we try to avoid it) updated during the render phase.
// TODO: Lol maybe there's a better way to factor this besides this
// obnoxiously named function :)
suspendedLanes=removeLanes(suspendedLanes,workInProgressRootPingedLanes);suspendedLanes=removeLanes(suspendedLanes,workInProgressRootUpdatedLanes);markRootSuspended(root,suspendedLanes);}// This is the entry point for synchronous tasks that don't go
// through Scheduler
function performSyncWorkOnRoot(root){if(!((executionContext&(RenderContext|CommitContext))===NoContext)){{throw Error("Should not already be working.");}}flushPassiveEffects();var lanes;var exitStatus;if(root===workInProgressRoot&&includesSomeLane(root.expiredLanes,workInProgressRootRenderLanes)){// There's a partial tree, and at least one of its lanes has expired. Finish
// rendering it before rendering the rest of the expired work.
lanes=workInProgressRootRenderLanes;exitStatus=renderRootSync(root,lanes);if(includesSomeLane(workInProgressRootIncludedLanes,workInProgressRootUpdatedLanes)){// The render included lanes that were updated during the render phase.
// For example, when unhiding a hidden tree, we include all the lanes
// that were previously skipped when the tree was hidden. That set of
// lanes is a superset of the lanes we started rendering with.
//
// Note that this only happens when part of the tree is rendered
// concurrently. If the whole tree is rendered synchronously, then there
// are no interleaved events.
lanes=getNextLanes(root,lanes);exitStatus=renderRootSync(root,lanes);}}else {lanes=getNextLanes(root,NoLanes);exitStatus=renderRootSync(root,lanes);}if(root.tag!==LegacyRoot&&exitStatus===RootErrored){executionContext|=RetryAfterError;// If an error occurred during hydration,
// discard server response and fall back to client side render.
if(root.hydrate){root.hydrate=false;clearContainer(root.containerInfo);}// If something threw an error, try rendering one more time. We'll render
// synchronously to block concurrent data mutations, and we'll includes
// all pending updates are included. If it still fails after the second
// attempt, we'll give up and commit the resulting tree.
lanes=getLanesToRetrySynchronouslyOnError(root);if(lanes!==NoLanes){exitStatus=renderRootSync(root,lanes);}}if(exitStatus===RootFatalErrored){var fatalError=workInProgressRootFatalError;prepareFreshStack(root,NoLanes);markRootSuspended$1(root,lanes);ensureRootIsScheduled(root,now());throw fatalError;}// We now have a consistent tree. Because this is a sync render, we
// will commit it even if something suspended.
var finishedWork=root.current.alternate;root.finishedWork=finishedWork;root.finishedLanes=lanes;commitRoot(root);// Before exiting, make sure there's a callback scheduled for the next
// pending level.
ensureRootIsScheduled(root,now());return null;}function flushDiscreteUpdates(){// TODO: Should be able to flush inside batchedUpdates, but not inside `act`.
// However, `act` uses `batchedUpdates`, so there's no way to distinguish
// those two cases. Need to fix this before exposing flushDiscreteUpdates
// as a public API.
if((executionContext&(BatchedContext|RenderContext|CommitContext))!==NoContext){{if((executionContext&RenderContext)!==NoContext){error('unstable_flushDiscreteUpdates: Cannot flush updates when React is '+'already rendering.');}}// We're already rendering, so we can't synchronously flush pending work.
// This is probably a nested event dispatch triggered by a lifecycle/effect,
// like `el.focus()`. Exit.
return;}flushPendingDiscreteUpdates();// If the discrete updates scheduled passive effects, flush them now so that
// they fire before the next serial event.
flushPassiveEffects();}function flushPendingDiscreteUpdates(){if(rootsWithPendingDiscreteUpdates!==null){// For each root with pending discrete updates, schedule a callback to
// immediately flush them.
var roots=rootsWithPendingDiscreteUpdates;rootsWithPendingDiscreteUpdates=null;roots.forEach(function(root){markDiscreteUpdatesExpired(root);ensureRootIsScheduled(root,now());});}// Now flush the immediate queue.
flushSyncCallbackQueue();}function batchedUpdates$1(fn,a){var prevExecutionContext=executionContext;executionContext|=BatchedContext;try{return fn(a);}finally{executionContext=prevExecutionContext;if(executionContext===NoContext){// Flush the immediate callbacks that were scheduled during this batch
resetRenderTimer();flushSyncCallbackQueue();}}}function batchedEventUpdates$1(fn,a){var prevExecutionContext=executionContext;executionContext|=EventContext;try{return fn(a);}finally{executionContext=prevExecutionContext;if(executionContext===NoContext){// Flush the immediate callbacks that were scheduled during this batch
resetRenderTimer();flushSyncCallbackQueue();}}}function discreteUpdates$1(fn,a,b,c,d){var prevExecutionContext=executionContext;executionContext|=DiscreteEventContext;{try{return runWithPriority$1(UserBlockingPriority$2,fn.bind(null,a,b,c,d));}finally{executionContext=prevExecutionContext;if(executionContext===NoContext){// Flush the immediate callbacks that were scheduled during this batch
resetRenderTimer();flushSyncCallbackQueue();}}}}function unbatchedUpdates(fn,a){var prevExecutionContext=executionContext;executionContext&=~BatchedContext;executionContext|=LegacyUnbatchedContext;try{return fn(a);}finally{executionContext=prevExecutionContext;if(executionContext===NoContext){// Flush the immediate callbacks that were scheduled during this batch
resetRenderTimer();flushSyncCallbackQueue();}}}function flushSync(fn,a){var prevExecutionContext=executionContext;if((prevExecutionContext&(RenderContext|CommitContext))!==NoContext){{error('flushSync was called from inside a lifecycle method. React cannot '+'flush when React is already rendering. Consider moving this call to '+'a scheduler task or micro task.');}return fn(a);}executionContext|=BatchedContext;{try{if(fn){return runWithPriority$1(ImmediatePriority$1,fn.bind(null,a));}else {return undefined;}}finally{executionContext=prevExecutionContext;// Flush the immediate callbacks that were scheduled during this batch.
// Note that this will happen even if batchedUpdates is higher up
// the stack.
flushSyncCallbackQueue();}}}function pushRenderLanes(fiber,lanes){push(subtreeRenderLanesCursor,subtreeRenderLanes,fiber);subtreeRenderLanes=mergeLanes(subtreeRenderLanes,lanes);workInProgressRootIncludedLanes=mergeLanes(workInProgressRootIncludedLanes,lanes);}function popRenderLanes(fiber){subtreeRenderLanes=subtreeRenderLanesCursor.current;pop(subtreeRenderLanesCursor,fiber);}function prepareFreshStack(root,lanes){root.finishedWork=null;root.finishedLanes=NoLanes;var timeoutHandle=root.timeoutHandle;if(timeoutHandle!==noTimeout){// The root previous suspended and scheduled a timeout to commit a fallback
// state. Now that we have additional work, cancel the timeout.
root.timeoutHandle=noTimeout;// $FlowFixMe Complains noTimeout is not a TimeoutID, despite the check above
cancelTimeout(timeoutHandle);}if(workInProgress!==null){var interruptedWork=workInProgress["return"];while(interruptedWork!==null){unwindInterruptedWork(interruptedWork);interruptedWork=interruptedWork["return"];}}workInProgressRoot=root;workInProgress=createWorkInProgress(root.current,null);workInProgressRootRenderLanes=subtreeRenderLanes=workInProgressRootIncludedLanes=lanes;workInProgressRootExitStatus=RootIncomplete;workInProgressRootFatalError=null;workInProgressRootSkippedLanes=NoLanes;workInProgressRootUpdatedLanes=NoLanes;workInProgressRootPingedLanes=NoLanes;{spawnedWorkDuringRender=null;}{ReactStrictModeWarnings.discardPendingWarnings();}}function handleError(root,thrownValue){do{var erroredWork=workInProgress;try{// Reset module-level state that was set during the render phase.
resetContextDependencies();resetHooksAfterThrow();resetCurrentFiber();// TODO: I found and added this missing line while investigating a
// separate issue. Write a regression test using string refs.
ReactCurrentOwner$2.current=null;if(erroredWork===null||erroredWork["return"]===null){// Expected to be working on a non-root fiber. This is a fatal error
// because there's no ancestor that can handle it; the root is
// supposed to capture all errors that weren't caught by an error
// boundary.
workInProgressRootExitStatus=RootFatalErrored;workInProgressRootFatalError=thrownValue;// Set `workInProgress` to null. This represents advancing to the next
// sibling, or the parent if there are no siblings. But since the root
// has no siblings nor a parent, we set it to null. Usually this is
// handled by `completeUnitOfWork` or `unwindWork`, but since we're
// intentionally not calling those, we need set it here.
// TODO: Consider calling `unwindWork` to pop the contexts.
workInProgress=null;return;}if(enableProfilerTimer&&erroredWork.mode&ProfileMode){// Record the time spent rendering before an error was thrown. This
// avoids inaccurate Profiler durations in the case of a
// suspended render.
stopProfilerTimerIfRunningAndRecordDelta(erroredWork,true);}throwException(root,erroredWork["return"],erroredWork,thrownValue,workInProgressRootRenderLanes);completeUnitOfWork(erroredWork);}catch(yetAnotherThrownValue){// Something in the return path also threw.
thrownValue=yetAnotherThrownValue;if(workInProgress===erroredWork&&erroredWork!==null){// If this boundary has already errored, then we had trouble processing
// the error. Bubble it to the next boundary.
erroredWork=erroredWork["return"];workInProgress=erroredWork;}else {erroredWork=workInProgress;}continue;}// Return to the normal work loop.
return;}while(true);}function pushDispatcher(){var prevDispatcher=ReactCurrentDispatcher$2.current;ReactCurrentDispatcher$2.current=ContextOnlyDispatcher;if(prevDispatcher===null){// The React isomorphic package does not include a default dispatcher.
// Instead the first renderer will lazily attach one, in order to give
// nicer error messages.
return ContextOnlyDispatcher;}else {return prevDispatcher;}}function popDispatcher(prevDispatcher){ReactCurrentDispatcher$2.current=prevDispatcher;}function pushInteractions(root){{var prevInteractions=tracing.__interactionsRef.current;tracing.__interactionsRef.current=root.memoizedInteractions;return prevInteractions;}}function popInteractions(prevInteractions){{tracing.__interactionsRef.current=prevInteractions;}}function markCommitTimeOfFallback(){globalMostRecentFallbackTime=now();}function markSkippedUpdateLanes(lane){workInProgressRootSkippedLanes=mergeLanes(lane,workInProgressRootSkippedLanes);}function renderDidSuspend(){if(workInProgressRootExitStatus===RootIncomplete){workInProgressRootExitStatus=RootSuspended;}}function renderDidSuspendDelayIfPossible(){if(workInProgressRootExitStatus===RootIncomplete||workInProgressRootExitStatus===RootSuspended){workInProgressRootExitStatus=RootSuspendedWithDelay;}// Check if there are updates that we skipped tree that might have unblocked
// this render.
if(workInProgressRoot!==null&&(includesNonIdleWork(workInProgressRootSkippedLanes)||includesNonIdleWork(workInProgressRootUpdatedLanes))){// Mark the current render as suspended so that we switch to working on
// the updates that were skipped. Usually we only suspend at the end of
// the render phase.
// TODO: We should probably always mark the root as suspended immediately
// (inside this function), since by suspending at the end of the render
// phase introduces a potential mistake where we suspend lanes that were
// pinged or updated while we were rendering.
markRootSuspended$1(workInProgressRoot,workInProgressRootRenderLanes);}}function renderDidError(){if(workInProgressRootExitStatus!==RootCompleted){workInProgressRootExitStatus=RootErrored;}}// Called during render to determine if anything has suspended.
// Returns false if we're not sure.
function renderHasNotSuspendedYet(){// If something errored or completed, we can't really be sure,
// so those are false.
return workInProgressRootExitStatus===RootIncomplete;}function renderRootSync(root,lanes){var prevExecutionContext=executionContext;executionContext|=RenderContext;var prevDispatcher=pushDispatcher();// If the root or lanes have changed, throw out the existing stack
// and prepare a fresh one. Otherwise we'll continue where we left off.
if(workInProgressRoot!==root||workInProgressRootRenderLanes!==lanes){prepareFreshStack(root,lanes);startWorkOnPendingInteractions(root,lanes);}var prevInteractions=pushInteractions(root);do{try{workLoopSync();break;}catch(thrownValue){handleError(root,thrownValue);}}while(true);resetContextDependencies();{popInteractions(prevInteractions);}executionContext=prevExecutionContext;popDispatcher(prevDispatcher);if(workInProgress!==null){// This is a sync render, so we should have finished the whole tree.
{{throw Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");}}}workInProgressRoot=null;workInProgressRootRenderLanes=NoLanes;return workInProgressRootExitStatus;}// The work loop is an extremely hot path. Tell Closure not to inline it.
/** @noinline */function workLoopSync(){// Already timed out, so perform work without checking if we need to yield.
while(workInProgress!==null){performUnitOfWork(workInProgress);}}function renderRootConcurrent(root,lanes){var prevExecutionContext=executionContext;executionContext|=RenderContext;var prevDispatcher=pushDispatcher();// If the root or lanes have changed, throw out the existing stack
// and prepare a fresh one. Otherwise we'll continue where we left off.
if(workInProgressRoot!==root||workInProgressRootRenderLanes!==lanes){resetRenderTimer();prepareFreshStack(root,lanes);startWorkOnPendingInteractions(root,lanes);}var prevInteractions=pushInteractions(root);do{try{workLoopConcurrent();break;}catch(thrownValue){handleError(root,thrownValue);}}while(true);resetContextDependencies();{popInteractions(prevInteractions);}popDispatcher(prevDispatcher);executionContext=prevExecutionContext;if(workInProgress!==null){return RootIncomplete;}else {workInProgressRoot=null;workInProgressRootRenderLanes=NoLanes;// Return the final exit status.
return workInProgressRootExitStatus;}}/** @noinline */function workLoopConcurrent(){// Perform work until Scheduler asks us to yield
while(workInProgress!==null&&!shouldYield()){performUnitOfWork(workInProgress);}}function performUnitOfWork(unitOfWork){// The current, flushed, state of this fiber is the alternate. Ideally
// nothing should rely on this, but relying on it here means that we don't
// need an additional field on the work in progress.
var current=unitOfWork.alternate;setCurrentFiber(unitOfWork);var next;if((unitOfWork.mode&ProfileMode)!==NoMode){startProfilerTimer(unitOfWork);next=beginWork$1(current,unitOfWork,subtreeRenderLanes);stopProfilerTimerIfRunningAndRecordDelta(unitOfWork,true);}else {next=beginWork$1(current,unitOfWork,subtreeRenderLanes);}resetCurrentFiber();unitOfWork.memoizedProps=unitOfWork.pendingProps;if(next===null){// If this doesn't spawn new work, complete the current work.
completeUnitOfWork(unitOfWork);}else {workInProgress=next;}ReactCurrentOwner$2.current=null;}function completeUnitOfWork(unitOfWork){// Attempt to complete the current unit of work, then move to the next
// sibling. If there are no more siblings, return to the parent fiber.
var completedWork=unitOfWork;do{// The current, flushed, state of this fiber is the alternate. Ideally
// nothing should rely on this, but relying on it here means that we don't
// need an additional field on the work in progress.
var current=completedWork.alternate;var returnFiber=completedWork["return"];// Check if the work completed or if something threw.
if((completedWork.flags&Incomplete)===NoFlags){setCurrentFiber(completedWork);var next=void 0;if((completedWork.mode&ProfileMode)===NoMode){next=completeWork(current,completedWork,subtreeRenderLanes);}else {startProfilerTimer(completedWork);next=completeWork(current,completedWork,subtreeRenderLanes);// Update render duration assuming we didn't error.
stopProfilerTimerIfRunningAndRecordDelta(completedWork,false);}resetCurrentFiber();if(next!==null){// Completing this fiber spawned new work. Work on that next.
workInProgress=next;return;}resetChildLanes(completedWork);if(returnFiber!==null&&// Do not append effects to parents if a sibling failed to complete
(returnFiber.flags&Incomplete)===NoFlags){// Append all the effects of the subtree and this fiber onto the effect
// list of the parent. The completion order of the children affects the
// side-effect order.
if(returnFiber.firstEffect===null){returnFiber.firstEffect=completedWork.firstEffect;}if(completedWork.lastEffect!==null){if(returnFiber.lastEffect!==null){returnFiber.lastEffect.nextEffect=completedWork.firstEffect;}returnFiber.lastEffect=completedWork.lastEffect;}// If this fiber had side-effects, we append it AFTER the children's
// side-effects. We can perform certain side-effects earlier if needed,
// by doing multiple passes over the effect list. We don't want to
// schedule our own side-effect on our own list because if end up
// reusing children we'll schedule this effect onto itself since we're
// at the end.
var flags=completedWork.flags;// Skip both NoWork and PerformedWork tags when creating the effect
// list. PerformedWork effect is read by React DevTools but shouldn't be
// committed.
if(flags>PerformedWork){if(returnFiber.lastEffect!==null){returnFiber.lastEffect.nextEffect=completedWork;}else {returnFiber.firstEffect=completedWork;}returnFiber.lastEffect=completedWork;}}}else {// This fiber did not complete because something threw. Pop values off
// the stack without entering the complete phase. If this is a boundary,
// capture values if possible.
var _next=unwindWork(completedWork);// Because this fiber did not complete, don't reset its expiration time.
if(_next!==null){// If completing this work spawned new work, do that next. We'll come
// back here again.
// Since we're restarting, remove anything that is not a host effect
// from the effect tag.
_next.flags&=HostEffectMask;workInProgress=_next;return;}if((completedWork.mode&ProfileMode)!==NoMode){// Record the render duration for the fiber that errored.
stopProfilerTimerIfRunningAndRecordDelta(completedWork,false);// Include the time spent working on failed children before continuing.
var actualDuration=completedWork.actualDuration;var child=completedWork.child;while(child!==null){actualDuration+=child.actualDuration;child=child.sibling;}completedWork.actualDuration=actualDuration;}if(returnFiber!==null){// Mark the parent fiber as incomplete and clear its effect list.
returnFiber.firstEffect=returnFiber.lastEffect=null;returnFiber.flags|=Incomplete;}}var siblingFiber=completedWork.sibling;if(siblingFiber!==null){// If there is more work to do in this returnFiber, do that next.
workInProgress=siblingFiber;return;}// Otherwise, return to the parent
completedWork=returnFiber;// Update the next thing we're working on in case something throws.
workInProgress=completedWork;}while(completedWork!==null);// We've reached the root.
if(workInProgressRootExitStatus===RootIncomplete){workInProgressRootExitStatus=RootCompleted;}}function resetChildLanes(completedWork){if(// TODO: Move this check out of the hot path by moving `resetChildLanes`
// to switch statement in `completeWork`.
(completedWork.tag===LegacyHiddenComponent||completedWork.tag===OffscreenComponent)&&completedWork.memoizedState!==null&&!includesSomeLane(subtreeRenderLanes,OffscreenLane)&&(completedWork.mode&ConcurrentMode)!==NoLanes){// The children of this component are hidden. Don't bubble their
// expiration times.
return;}var newChildLanes=NoLanes;// Bubble up the earliest expiration time.
if((completedWork.mode&ProfileMode)!==NoMode){// In profiling mode, resetChildExpirationTime is also used to reset
// profiler durations.
var actualDuration=completedWork.actualDuration;var treeBaseDuration=completedWork.selfBaseDuration;// When a fiber is cloned, its actualDuration is reset to 0. This value will
// only be updated if work is done on the fiber (i.e. it doesn't bailout).
// When work is done, it should bubble to the parent's actualDuration. If
// the fiber has not been cloned though, (meaning no work was done), then
// this value will reflect the amount of time spent working on a previous
// render. In that case it should not bubble. We determine whether it was
// cloned by comparing the child pointer.
var shouldBubbleActualDurations=completedWork.alternate===null||completedWork.child!==completedWork.alternate.child;var child=completedWork.child;while(child!==null){newChildLanes=mergeLanes(newChildLanes,mergeLanes(child.lanes,child.childLanes));if(shouldBubbleActualDurations){actualDuration+=child.actualDuration;}treeBaseDuration+=child.treeBaseDuration;child=child.sibling;}var isTimedOutSuspense=completedWork.tag===SuspenseComponent&&completedWork.memoizedState!==null;if(isTimedOutSuspense){// Don't count time spent in a timed out Suspense subtree as part of the base duration.
var primaryChildFragment=completedWork.child;if(primaryChildFragment!==null){treeBaseDuration-=primaryChildFragment.treeBaseDuration;}}completedWork.actualDuration=actualDuration;completedWork.treeBaseDuration=treeBaseDuration;}else {var _child=completedWork.child;while(_child!==null){newChildLanes=mergeLanes(newChildLanes,mergeLanes(_child.lanes,_child.childLanes));_child=_child.sibling;}}completedWork.childLanes=newChildLanes;}function commitRoot(root){var renderPriorityLevel=getCurrentPriorityLevel();runWithPriority$1(ImmediatePriority$1,commitRootImpl.bind(null,root,renderPriorityLevel));return null;}function commitRootImpl(root,renderPriorityLevel){do{// `flushPassiveEffects` will call `flushSyncUpdateQueue` at the end, which
// means `flushPassiveEffects` will sometimes result in additional
// passive effects. So we need to keep flushing in a loop until there are
// no more pending effects.
// TODO: Might be better if `flushPassiveEffects` did not automatically
// flush synchronous work at the end, to avoid factoring hazards like this.
flushPassiveEffects();}while(rootWithPendingPassiveEffects!==null);flushRenderPhaseStrictModeWarningsInDEV();if(!((executionContext&(RenderContext|CommitContext))===NoContext)){{throw Error("Should not already be working.");}}var finishedWork=root.finishedWork;var lanes=root.finishedLanes;if(finishedWork===null){return null;}root.finishedWork=null;root.finishedLanes=NoLanes;if(!(finishedWork!==root.current)){{throw Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");}}// commitRoot never returns a continuation; it always finishes synchronously.
// So we can clear these now to allow a new callback to be scheduled.
root.callbackNode=null;// Update the first and last pending times on this root. The new first
// pending time is whatever is left on the root fiber.
var remainingLanes=mergeLanes(finishedWork.lanes,finishedWork.childLanes);markRootFinished(root,remainingLanes);// Clear already finished discrete updates in case that a later call of
// `flushDiscreteUpdates` starts a useless render pass which may cancels
// a scheduled timeout.
if(rootsWithPendingDiscreteUpdates!==null){if(!hasDiscreteLanes(remainingLanes)&&rootsWithPendingDiscreteUpdates.has(root)){rootsWithPendingDiscreteUpdates["delete"](root);}}if(root===workInProgressRoot){// We can reset these now that they are finished.
workInProgressRoot=null;workInProgress=null;workInProgressRootRenderLanes=NoLanes;}// Get the list of effects.
var firstEffect;if(finishedWork.flags>PerformedWork){// A fiber's effect list consists only of its children, not itself. So if
// the root has an effect, we need to add it to the end of the list. The
// resulting list is the set that would belong to the root's parent, if it
// had one; that is, all the effects in the tree including the root.
if(finishedWork.lastEffect!==null){finishedWork.lastEffect.nextEffect=finishedWork;firstEffect=finishedWork.firstEffect;}else {firstEffect=finishedWork;}}else {// There is no effect on the root.
firstEffect=finishedWork.firstEffect;}if(firstEffect!==null){var prevExecutionContext=executionContext;executionContext|=CommitContext;var prevInteractions=pushInteractions(root);// Reset this to null before calling lifecycles
ReactCurrentOwner$2.current=null;// The commit phase is broken into several sub-phases. We do a separate pass
// of the effect list for each phase: all mutation effects come before all
// layout effects, and so on.
// The first phase a "before mutation" phase. We use this phase to read the
// state of the host tree right before we mutate it. This is where
// getSnapshotBeforeUpdate is called.
focusedInstanceHandle=prepareForCommit(root.containerInfo);shouldFireAfterActiveInstanceBlur=false;nextEffect=firstEffect;do{{invokeGuardedCallback(null,commitBeforeMutationEffects,null);if(hasCaughtError()){if(!(nextEffect!==null)){{throw Error("Should be working on an effect.");}}var error=clearCaughtError();captureCommitPhaseError(nextEffect,error);nextEffect=nextEffect.nextEffect;}}}while(nextEffect!==null);// We no longer need to track the active instance fiber
focusedInstanceHandle=null;{// Mark the current commit time to be shared by all Profilers in this
// batch. This enables them to be grouped later.
recordCommitTime();}// The next phase is the mutation phase, where we mutate the host tree.
nextEffect=firstEffect;do{{invokeGuardedCallback(null,commitMutationEffects,null,root,renderPriorityLevel);if(hasCaughtError()){if(!(nextEffect!==null)){{throw Error("Should be working on an effect.");}}var _error=clearCaughtError();captureCommitPhaseError(nextEffect,_error);nextEffect=nextEffect.nextEffect;}}}while(nextEffect!==null);resetAfterCommit(root.containerInfo);// The work-in-progress tree is now the current tree. This must come after
// the mutation phase, so that the previous tree is still current during
// componentWillUnmount, but before the layout phase, so that the finished
// work is current during componentDidMount/Update.
root.current=finishedWork;// The next phase is the layout phase, where we call effects that read
// the host tree after it's been mutated. The idiomatic use case for this is
// layout, but class component lifecycles also fire here for legacy reasons.
nextEffect=firstEffect;do{{invokeGuardedCallback(null,commitLayoutEffects,null,root,lanes);if(hasCaughtError()){if(!(nextEffect!==null)){{throw Error("Should be working on an effect.");}}var _error2=clearCaughtError();captureCommitPhaseError(nextEffect,_error2);nextEffect=nextEffect.nextEffect;}}}while(nextEffect!==null);nextEffect=null;// Tell Scheduler to yield at the end of the frame, so the browser has an
// opportunity to paint.
requestPaint();{popInteractions(prevInteractions);}executionContext=prevExecutionContext;}else {// No effects.
root.current=finishedWork;// Measure these anyway so the flamegraph explicitly shows that there were
// no effects.
// TODO: Maybe there's a better way to report this.
{recordCommitTime();}}var rootDidHavePassiveEffects=rootDoesHavePassiveEffects;if(rootDoesHavePassiveEffects){// This commit has passive effects. Stash a reference to them. But don't
// schedule a callback until after flushing layout work.
rootDoesHavePassiveEffects=false;rootWithPendingPassiveEffects=root;pendingPassiveEffectsLanes=lanes;pendingPassiveEffectsRenderPriority=renderPriorityLevel;}else {// We are done with the effect chain at this point so let's clear the
// nextEffect pointers to assist with GC. If we have passive effects, we'll
// clear this in flushPassiveEffects.
nextEffect=firstEffect;while(nextEffect!==null){var nextNextEffect=nextEffect.nextEffect;nextEffect.nextEffect=null;if(nextEffect.flags&Deletion){detachFiberAfterEffects(nextEffect);}nextEffect=nextNextEffect;}}// Read this again, since an effect might have updated it
remainingLanes=root.pendingLanes;// Check if there's remaining work on this root
if(remainingLanes!==NoLanes){{if(spawnedWorkDuringRender!==null){var expirationTimes=spawnedWorkDuringRender;spawnedWorkDuringRender=null;for(var i=0;i<expirationTimes.length;i++){scheduleInteractions(root,expirationTimes[i],root.memoizedInteractions);}}schedulePendingInteractions(root,remainingLanes);}}else {// If there's no remaining work, we can clear the set of already failed
// error boundaries.
legacyErrorBoundariesThatAlreadyFailed=null;}{if(!rootDidHavePassiveEffects){// If there are no passive effects, then we can complete the pending interactions.
// Otherwise, we'll wait until after the passive effects are flushed.
// Wait to do this until after remaining work has been scheduled,
// so that we don't prematurely signal complete for interactions when there's e.g. hidden work.
finishPendingInteractions(root,lanes);}}if(remainingLanes===SyncLane){// Count the number of times the root synchronously re-renders without
// finishing. If there are too many, it indicates an infinite update loop.
if(root===rootWithNestedUpdates){nestedUpdateCount++;}else {nestedUpdateCount=0;rootWithNestedUpdates=root;}}else {nestedUpdateCount=0;}onCommitRoot(finishedWork.stateNode,renderPriorityLevel);{onCommitRoot$1();}// Always call this before exiting `commitRoot`, to ensure that any
// additional work on this root is scheduled.
ensureRootIsScheduled(root,now());if(hasUncaughtError){hasUncaughtError=false;var _error3=firstUncaughtError;firstUncaughtError=null;throw _error3;}if((executionContext&LegacyUnbatchedContext)!==NoContext){// a ReactDOM.render-ed root inside of batchedUpdates. The commit fired
// synchronously, but layout updates should be deferred until the end
// of the batch.
return null;}// If layout work was scheduled, flush it now.
flushSyncCallbackQueue();return null;}function commitBeforeMutationEffects(){while(nextEffect!==null){var current=nextEffect.alternate;if(!shouldFireAfterActiveInstanceBlur&&focusedInstanceHandle!==null){if((nextEffect.flags&Deletion)!==NoFlags){if(doesFiberContain(nextEffect,focusedInstanceHandle)){shouldFireAfterActiveInstanceBlur=true;}}else {// TODO: Move this out of the hot path using a dedicated effect tag.
if(nextEffect.tag===SuspenseComponent&&isSuspenseBoundaryBeingHidden(current,nextEffect)&&doesFiberContain(nextEffect,focusedInstanceHandle)){shouldFireAfterActiveInstanceBlur=true;}}}var flags=nextEffect.flags;if((flags&Snapshot)!==NoFlags){setCurrentFiber(nextEffect);commitBeforeMutationLifeCycles(current,nextEffect);resetCurrentFiber();}if((flags&Passive)!==NoFlags){// If there are passive effects, schedule a callback to flush at
// the earliest opportunity.
if(!rootDoesHavePassiveEffects){rootDoesHavePassiveEffects=true;scheduleCallback(NormalPriority$1,function(){flushPassiveEffects();return null;});}}nextEffect=nextEffect.nextEffect;}}function commitMutationEffects(root,renderPriorityLevel){// TODO: Should probably move the bulk of this function to commitWork.
while(nextEffect!==null){setCurrentFiber(nextEffect);var flags=nextEffect.flags;if(flags&ContentReset){commitResetTextContent(nextEffect);}if(flags&Ref){var current=nextEffect.alternate;if(current!==null){commitDetachRef(current);}}// The following switch statement is only concerned about placement,
// updates, and deletions. To avoid needing to add a case for every possible
// bitmap value, we remove the secondary effects from the effect tag and
// switch on that value.
var primaryFlags=flags&(Placement|Update|Deletion|Hydrating);switch(primaryFlags){case Placement:{commitPlacement(nextEffect);// Clear the "placement" from effect tag so that we know that this is
// inserted, before any life-cycles like componentDidMount gets called.
// TODO: findDOMNode doesn't rely on this any more but isMounted does
// and isMounted is deprecated anyway so we should be able to kill this.
nextEffect.flags&=~Placement;break;}case PlacementAndUpdate:{// Placement
commitPlacement(nextEffect);// Clear the "placement" from effect tag so that we know that this is
// inserted, before any life-cycles like componentDidMount gets called.
nextEffect.flags&=~Placement;// Update
var _current=nextEffect.alternate;commitWork(_current,nextEffect);break;}case Hydrating:{nextEffect.flags&=~Hydrating;break;}case HydratingAndUpdate:{nextEffect.flags&=~Hydrating;// Update
var _current2=nextEffect.alternate;commitWork(_current2,nextEffect);break;}case Update:{var _current3=nextEffect.alternate;commitWork(_current3,nextEffect);break;}case Deletion:{commitDeletion(root,nextEffect);break;}}resetCurrentFiber();nextEffect=nextEffect.nextEffect;}}function commitLayoutEffects(root,committedLanes){while(nextEffect!==null){setCurrentFiber(nextEffect);var flags=nextEffect.flags;if(flags&(Update|Callback)){var current=nextEffect.alternate;commitLifeCycles(root,current,nextEffect);}{if(flags&Ref){commitAttachRef(nextEffect);}}resetCurrentFiber();nextEffect=nextEffect.nextEffect;}}function flushPassiveEffects(){// Returns whether passive effects were flushed.
if(pendingPassiveEffectsRenderPriority!==NoPriority$1){var priorityLevel=pendingPassiveEffectsRenderPriority>NormalPriority$1?NormalPriority$1:pendingPassiveEffectsRenderPriority;pendingPassiveEffectsRenderPriority=NoPriority$1;{return runWithPriority$1(priorityLevel,flushPassiveEffectsImpl);}}return false;}function enqueuePendingPassiveHookEffectMount(fiber,effect){pendingPassiveHookEffectsMount.push(effect,fiber);if(!rootDoesHavePassiveEffects){rootDoesHavePassiveEffects=true;scheduleCallback(NormalPriority$1,function(){flushPassiveEffects();return null;});}}function enqueuePendingPassiveHookEffectUnmount(fiber,effect){pendingPassiveHookEffectsUnmount.push(effect,fiber);{fiber.flags|=PassiveUnmountPendingDev;var alternate=fiber.alternate;if(alternate!==null){alternate.flags|=PassiveUnmountPendingDev;}}if(!rootDoesHavePassiveEffects){rootDoesHavePassiveEffects=true;scheduleCallback(NormalPriority$1,function(){flushPassiveEffects();return null;});}}function invokePassiveEffectCreate(effect){var create=effect.create;effect.destroy=create();}function flushPassiveEffectsImpl(){if(rootWithPendingPassiveEffects===null){return false;}var root=rootWithPendingPassiveEffects;var lanes=pendingPassiveEffectsLanes;rootWithPendingPassiveEffects=null;pendingPassiveEffectsLanes=NoLanes;if(!((executionContext&(RenderContext|CommitContext))===NoContext)){{throw Error("Cannot flush passive effects while already rendering.");}}{isFlushingPassiveEffects=true;}var prevExecutionContext=executionContext;executionContext|=CommitContext;var prevInteractions=pushInteractions(root);// It's important that ALL pending passive effect destroy functions are called
// before ANY passive effect create functions are called.
// Otherwise effects in sibling components might interfere with each other.
// e.g. a destroy function in one component may unintentionally override a ref
// value set by a create function in another component.
// Layout effects have the same constraint.
// First pass: Destroy stale passive effects.
var unmountEffects=pendingPassiveHookEffectsUnmount;pendingPassiveHookEffectsUnmount=[];for(var i=0;i<unmountEffects.length;i+=2){var _effect=unmountEffects[i];var fiber=unmountEffects[i+1];var destroy=_effect.destroy;_effect.destroy=undefined;{fiber.flags&=~PassiveUnmountPendingDev;var alternate=fiber.alternate;if(alternate!==null){alternate.flags&=~PassiveUnmountPendingDev;}}if(typeof destroy==='function'){{setCurrentFiber(fiber);{invokeGuardedCallback(null,destroy,null);}if(hasCaughtError()){if(!(fiber!==null)){{throw Error("Should be working on an effect.");}}var error=clearCaughtError();captureCommitPhaseError(fiber,error);}resetCurrentFiber();}}}// Second pass: Create new passive effects.
var mountEffects=pendingPassiveHookEffectsMount;pendingPassiveHookEffectsMount=[];for(var _i=0;_i<mountEffects.length;_i+=2){var _effect2=mountEffects[_i];var _fiber=mountEffects[_i+1];{setCurrentFiber(_fiber);{invokeGuardedCallback(null,invokePassiveEffectCreate,null,_effect2);}if(hasCaughtError()){if(!(_fiber!==null)){{throw Error("Should be working on an effect.");}}var _error4=clearCaughtError();captureCommitPhaseError(_fiber,_error4);}resetCurrentFiber();}}// Note: This currently assumes there are no passive effects on the root fiber
// because the root is not part of its own effect list.
// This could change in the future.
var effect=root.current.firstEffect;while(effect!==null){var nextNextEffect=effect.nextEffect;// Remove nextEffect pointer to assist GC
effect.nextEffect=null;if(effect.flags&Deletion){detachFiberAfterEffects(effect);}effect=nextNextEffect;}{popInteractions(prevInteractions);finishPendingInteractions(root,lanes);}{isFlushingPassiveEffects=false;}executionContext=prevExecutionContext;flushSyncCallbackQueue();// If additional passive effects were scheduled, increment a counter. If this
// exceeds the limit, we'll fire a warning.
nestedPassiveUpdateCount=rootWithPendingPassiveEffects===null?0:nestedPassiveUpdateCount+1;return true;}function isAlreadyFailedLegacyErrorBoundary(instance){return legacyErrorBoundariesThatAlreadyFailed!==null&&legacyErrorBoundariesThatAlreadyFailed.has(instance);}function markLegacyErrorBoundaryAsFailed(instance){if(legacyErrorBoundariesThatAlreadyFailed===null){legacyErrorBoundariesThatAlreadyFailed=new Set([instance]);}else {legacyErrorBoundariesThatAlreadyFailed.add(instance);}}function prepareToThrowUncaughtError(error){if(!hasUncaughtError){hasUncaughtError=true;firstUncaughtError=error;}}var onUncaughtError=prepareToThrowUncaughtError;function captureCommitPhaseErrorOnRoot(rootFiber,sourceFiber,error){var errorInfo=createCapturedValue(error,sourceFiber);var update=createRootErrorUpdate(rootFiber,errorInfo,SyncLane);enqueueUpdate(rootFiber,update);var eventTime=requestEventTime();var root=markUpdateLaneFromFiberToRoot(rootFiber,SyncLane);if(root!==null){markRootUpdated(root,SyncLane,eventTime);ensureRootIsScheduled(root,eventTime);schedulePendingInteractions(root,SyncLane);}}function captureCommitPhaseError(sourceFiber,error){if(sourceFiber.tag===HostRoot){// Error was thrown at the root. There is no parent, so the root
// itself should capture it.
captureCommitPhaseErrorOnRoot(sourceFiber,sourceFiber,error);return;}var fiber=sourceFiber["return"];while(fiber!==null){if(fiber.tag===HostRoot){captureCommitPhaseErrorOnRoot(fiber,sourceFiber,error);return;}else if(fiber.tag===ClassComponent){var ctor=fiber.type;var instance=fiber.stateNode;if(typeof ctor.getDerivedStateFromError==='function'||typeof instance.componentDidCatch==='function'&&!isAlreadyFailedLegacyErrorBoundary(instance)){var errorInfo=createCapturedValue(error,sourceFiber);var update=createClassErrorUpdate(fiber,errorInfo,SyncLane);enqueueUpdate(fiber,update);var eventTime=requestEventTime();var root=markUpdateLaneFromFiberToRoot(fiber,SyncLane);if(root!==null){markRootUpdated(root,SyncLane,eventTime);ensureRootIsScheduled(root,eventTime);schedulePendingInteractions(root,SyncLane);}else {// This component has already been unmounted.
// We can't schedule any follow up work for the root because the fiber is already unmounted,
// but we can still call the log-only boundary so the error isn't swallowed.
//
// TODO This is only a temporary bandaid for the old reconciler fork.
// We can delete this special case once the new fork is merged.
if(typeof instance.componentDidCatch==='function'&&!isAlreadyFailedLegacyErrorBoundary(instance)){try{instance.componentDidCatch(error,errorInfo);}catch(errorToIgnore){// TODO Ignore this error? Rethrow it?
// This is kind of an edge case.
}}}return;}}fiber=fiber["return"];}}function pingSuspendedRoot(root,wakeable,pingedLanes){var pingCache=root.pingCache;if(pingCache!==null){// The wakeable resolved, so we no longer need to memoize, because it will
// never be thrown again.
pingCache["delete"](wakeable);}var eventTime=requestEventTime();markRootPinged(root,pingedLanes);if(workInProgressRoot===root&&isSubsetOfLanes(workInProgressRootRenderLanes,pingedLanes)){// Received a ping at the same priority level at which we're currently
// rendering. We might want to restart this render. This should mirror
// the logic of whether or not a root suspends once it completes.
// TODO: If we're rendering sync either due to Sync, Batched or expired,
// we should probably never restart.
// If we're suspended with delay, or if it's a retry, we'll always suspend
// so we can always restart.
if(workInProgressRootExitStatus===RootSuspendedWithDelay||workInProgressRootExitStatus===RootSuspended&&includesOnlyRetries(workInProgressRootRenderLanes)&&now()-globalMostRecentFallbackTime<FALLBACK_THROTTLE_MS){// Restart from the root.
prepareFreshStack(root,NoLanes);}else {// Even though we can't restart right now, we might get an
// opportunity later. So we mark this render as having a ping.
workInProgressRootPingedLanes=mergeLanes(workInProgressRootPingedLanes,pingedLanes);}}ensureRootIsScheduled(root,eventTime);schedulePendingInteractions(root,pingedLanes);}function retryTimedOutBoundary(boundaryFiber,retryLane){// The boundary fiber (a Suspense component or SuspenseList component)
// previously was rendered in its fallback state. One of the promises that
// suspended it has resolved, which means at least part of the tree was
// likely unblocked. Try rendering again, at a new expiration time.
if(retryLane===NoLane){retryLane=requestRetryLane(boundaryFiber);}// TODO: Special case idle priority?
var eventTime=requestEventTime();var root=markUpdateLaneFromFiberToRoot(boundaryFiber,retryLane);if(root!==null){markRootUpdated(root,retryLane,eventTime);ensureRootIsScheduled(root,eventTime);schedulePendingInteractions(root,retryLane);}}function resolveRetryWakeable(boundaryFiber,wakeable){var retryLane=NoLane;// Default
var retryCache;{retryCache=boundaryFiber.stateNode;}if(retryCache!==null){// The wakeable resolved, so we no longer need to memoize, because it will
// never be thrown again.
retryCache["delete"](wakeable);}retryTimedOutBoundary(boundaryFiber,retryLane);}// Computes the next Just Noticeable Difference (JND) boundary.
// The theory is that a person can't tell the difference between small differences in time.
// Therefore, if we wait a bit longer than necessary that won't translate to a noticeable
// difference in the experience. However, waiting for longer might mean that we can avoid
// showing an intermediate loading state. The longer we have already waited, the harder it
// is to tell small differences in time. Therefore, the longer we've already waited,
// the longer we can wait additionally. At some point we have to give up though.
// We pick a train model where the next boundary commits at a consistent schedule.
// These particular numbers are vague estimates. We expect to adjust them based on research.
function jnd(timeElapsed){return timeElapsed<120?120:timeElapsed<480?480:timeElapsed<1080?1080:timeElapsed<1920?1920:timeElapsed<3000?3000:timeElapsed<4320?4320:ceil(timeElapsed/1960)*1960;}function checkForNestedUpdates(){if(nestedUpdateCount>NESTED_UPDATE_LIMIT){nestedUpdateCount=0;rootWithNestedUpdates=null;{{throw Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");}}}{if(nestedPassiveUpdateCount>NESTED_PASSIVE_UPDATE_LIMIT){nestedPassiveUpdateCount=0;error('Maximum update depth exceeded. This can happen when a component '+"calls setState inside useEffect, but useEffect either doesn't "+'have a dependency array, or one of the dependencies changes on '+'every render.');}}}function flushRenderPhaseStrictModeWarningsInDEV(){{ReactStrictModeWarnings.flushLegacyContextWarning();{ReactStrictModeWarnings.flushPendingUnsafeLifecycleWarnings();}}}var didWarnStateUpdateForNotYetMountedComponent=null;function warnAboutUpdateOnNotYetMountedFiberInDEV(fiber){{if((executionContext&RenderContext)!==NoContext){// We let the other warning about render phase updates deal with this one.
return;}if(!(fiber.mode&(BlockingMode|ConcurrentMode))){return;}var tag=fiber.tag;if(tag!==IndeterminateComponent&&tag!==HostRoot&&tag!==ClassComponent&&tag!==FunctionComponent&&tag!==ForwardRef&&tag!==MemoComponent&&tag!==SimpleMemoComponent&&tag!==Block){// Only warn for user-defined components, not internal ones like Suspense.
return;}// We show the whole stack but dedupe on the top component's name because
// the problematic code almost always lies inside that component.
var componentName=getComponentName(fiber.type)||'ReactComponent';if(didWarnStateUpdateForNotYetMountedComponent!==null){if(didWarnStateUpdateForNotYetMountedComponent.has(componentName)){return;}didWarnStateUpdateForNotYetMountedComponent.add(componentName);}else {didWarnStateUpdateForNotYetMountedComponent=new Set([componentName]);}var previousFiber=current;try{setCurrentFiber(fiber);error("Can't perform a React state update on a component that hasn't mounted yet. "+'This indicates that you have a side-effect in your render function that '+'asynchronously later calls tries to update the component. Move this work to '+'useEffect instead.');}finally{if(previousFiber){setCurrentFiber(fiber);}else {resetCurrentFiber();}}}}var didWarnStateUpdateForUnmountedComponent=null;function warnAboutUpdateOnUnmountedFiberInDEV(fiber){{var tag=fiber.tag;if(tag!==HostRoot&&tag!==ClassComponent&&tag!==FunctionComponent&&tag!==ForwardRef&&tag!==MemoComponent&&tag!==SimpleMemoComponent&&tag!==Block){// Only warn for user-defined components, not internal ones like Suspense.
return;}// If there are pending passive effects unmounts for this Fiber,
// we can assume that they would have prevented this update.
if((fiber.flags&PassiveUnmountPendingDev)!==NoFlags){return;}// We show the whole stack but dedupe on the top component's name because
// the problematic code almost always lies inside that component.
var componentName=getComponentName(fiber.type)||'ReactComponent';if(didWarnStateUpdateForUnmountedComponent!==null){if(didWarnStateUpdateForUnmountedComponent.has(componentName)){return;}didWarnStateUpdateForUnmountedComponent.add(componentName);}else {didWarnStateUpdateForUnmountedComponent=new Set([componentName]);}if(isFlushingPassiveEffects);else {var previousFiber=current;try{setCurrentFiber(fiber);error("Can't perform a React state update on an unmounted component. This "+'is a no-op, but it indicates a memory leak in your application. To '+'fix, cancel all subscriptions and asynchronous tasks in %s.',tag===ClassComponent?'the componentWillUnmount method':'a useEffect cleanup function');}finally{if(previousFiber){setCurrentFiber(fiber);}else {resetCurrentFiber();}}}}}var beginWork$1;{var dummyFiber=null;beginWork$1=function beginWork$1(current,unitOfWork,lanes){// If a component throws an error, we replay it again in a synchronously
// dispatched event, so that the debugger will treat it as an uncaught
// error See ReactErrorUtils for more information.
// Before entering the begin phase, copy the work-in-progress onto a dummy
// fiber. If beginWork throws, we'll use this to reset the state.
var originalWorkInProgressCopy=assignFiberPropertiesInDEV(dummyFiber,unitOfWork);try{return beginWork(current,unitOfWork,lanes);}catch(originalError){if(originalError!==null&&_typeof$1(originalError)==='object'&&typeof originalError.then==='function'){// Don't replay promises. Treat everything else like an error.
throw originalError;}// Keep this code in sync with handleError; any changes here must have
// corresponding changes there.
resetContextDependencies();resetHooksAfterThrow();// Don't reset current debug fiber, since we're about to work on the
// same fiber again.
// Unwind the failed stack frame
unwindInterruptedWork(unitOfWork);// Restore the original properties of the fiber.
assignFiberPropertiesInDEV(unitOfWork,originalWorkInProgressCopy);if(unitOfWork.mode&ProfileMode){// Reset the profiler timer.
startProfilerTimer(unitOfWork);}// Run beginWork again.
invokeGuardedCallback(null,beginWork,null,current,unitOfWork,lanes);if(hasCaughtError()){var replayError=clearCaughtError();// `invokeGuardedCallback` sometimes sets an expando `_suppressLogging`.
// Rethrow this error instead of the original one.
throw replayError;}else {// This branch is reachable if the render phase is impure.
throw originalError;}}};}var didWarnAboutUpdateInRender=false;var didWarnAboutUpdateInRenderForAnotherComponent;{didWarnAboutUpdateInRenderForAnotherComponent=new Set();}function warnAboutRenderPhaseUpdatesInDEV(fiber){{if(isRendering&&(executionContext&RenderContext)!==NoContext&&!getIsUpdatingOpaqueValueInRenderPhaseInDEV()){switch(fiber.tag){case FunctionComponent:case ForwardRef:case SimpleMemoComponent:{var renderingComponentName=workInProgress&&getComponentName(workInProgress.type)||'Unknown';// Dedupe by the rendering component because it's the one that needs to be fixed.
var dedupeKey=renderingComponentName;if(!didWarnAboutUpdateInRenderForAnotherComponent.has(dedupeKey)){didWarnAboutUpdateInRenderForAnotherComponent.add(dedupeKey);var setStateComponentName=getComponentName(fiber.type)||'Unknown';error('Cannot update a component (`%s`) while rendering a '+'different component (`%s`). To locate the bad setState() call inside `%s`, '+'follow the stack trace as described in https://reactjs.org/link/setstate-in-render',setStateComponentName,renderingComponentName,renderingComponentName);}break;}case ClassComponent:{if(!didWarnAboutUpdateInRender){error('Cannot update during an existing state transition (such as '+'within `render`). Render methods should be a pure '+'function of props and state.');didWarnAboutUpdateInRender=true;}break;}}}}}// a 'shared' variable that changes when act() opens/closes in tests.
var IsThisRendererActing={current:false};function warnIfNotScopedWithMatchingAct(fiber){{if(IsSomeRendererActing.current===true&&IsThisRendererActing.current!==true){var previousFiber=current;try{setCurrentFiber(fiber);error("It looks like you're using the wrong act() around your test interactions.\n"+'Be sure to use the matching version of act() corresponding to your renderer:\n\n'+'// for react-dom:\n'+// Break up imports to avoid accidentally parsing them as dependencies.
'import {act} fr'+"om 'react-dom/test-utils';\n"+'// ...\n'+'act(() => ...);\n\n'+'// for react-test-renderer:\n'+// Break up imports to avoid accidentally parsing them as dependencies.
'import TestRenderer fr'+"om react-test-renderer';\n"+'const {act} = TestRenderer;\n'+'// ...\n'+'act(() => ...);');}finally{if(previousFiber){setCurrentFiber(fiber);}else {resetCurrentFiber();}}}}}function warnIfNotCurrentlyActingEffectsInDEV(fiber){{if((fiber.mode&StrictMode)!==NoMode&&IsSomeRendererActing.current===false&&IsThisRendererActing.current===false){error('An update to %s ran an effect, but was not wrapped in act(...).\n\n'+'When testing, code that causes React state updates should be '+'wrapped into act(...):\n\n'+'act(() => {\n'+'  /* fire events that update state */\n'+'});\n'+'/* assert on the output */\n\n'+"This ensures that you're testing the behavior the user would see "+'in the browser.'+' Learn more at https://reactjs.org/link/wrap-tests-with-act',getComponentName(fiber.type));}}}function warnIfNotCurrentlyActingUpdatesInDEV(fiber){{if(executionContext===NoContext&&IsSomeRendererActing.current===false&&IsThisRendererActing.current===false){var previousFiber=current;try{setCurrentFiber(fiber);error('An update to %s inside a test was not wrapped in act(...).\n\n'+'When testing, code that causes React state updates should be '+'wrapped into act(...):\n\n'+'act(() => {\n'+'  /* fire events that update state */\n'+'});\n'+'/* assert on the output */\n\n'+"This ensures that you're testing the behavior the user would see "+'in the browser.'+' Learn more at https://reactjs.org/link/wrap-tests-with-act',getComponentName(fiber.type));}finally{if(previousFiber){setCurrentFiber(fiber);}else {resetCurrentFiber();}}}}}var warnIfNotCurrentlyActingUpdatesInDev=warnIfNotCurrentlyActingUpdatesInDEV;// In tests, we want to enforce a mocked scheduler.
var didWarnAboutUnmockedScheduler=false;// TODO Before we release concurrent mode, revisit this and decide whether a mocked
// scheduler is the actual recommendation. The alternative could be a testing build,
// a new lib, or whatever; we dunno just yet. This message is for early adopters
// to get their tests right.
function warnIfUnmockedScheduler(fiber){{if(didWarnAboutUnmockedScheduler===false&&Scheduler.unstable_flushAllWithoutAsserting===undefined){if(fiber.mode&BlockingMode||fiber.mode&ConcurrentMode){didWarnAboutUnmockedScheduler=true;error('In Concurrent or Sync modes, the "scheduler" module needs to be mocked '+'to guarantee consistent behaviour across tests and browsers. '+'For example, with jest: \n'+// Break up requires to avoid accidentally parsing them as dependencies.
"jest.mock('scheduler', () => require"+"('scheduler/unstable_mock'));\n\n"+'For more info, visit https://reactjs.org/link/mock-scheduler');}}}}function computeThreadID(root,lane){// Interaction threads are unique per root and expiration time.
// NOTE: Intentionally unsound cast. All that matters is that it's a number
// and it represents a batch of work. Could make a helper function instead,
// but meh this is fine for now.
return lane*1000+root.interactionThreadID;}function markSpawnedWork(lane){if(spawnedWorkDuringRender===null){spawnedWorkDuringRender=[lane];}else {spawnedWorkDuringRender.push(lane);}}function scheduleInteractions(root,lane,interactions){if(interactions.size>0){var pendingInteractionMap=root.pendingInteractionMap;var pendingInteractions=pendingInteractionMap.get(lane);if(pendingInteractions!=null){interactions.forEach(function(interaction){if(!pendingInteractions.has(interaction)){// Update the pending async work count for previously unscheduled interaction.
interaction.__count++;}pendingInteractions.add(interaction);});}else {pendingInteractionMap.set(lane,new Set(interactions));// Update the pending async work count for the current interactions.
interactions.forEach(function(interaction){interaction.__count++;});}var subscriber=tracing.__subscriberRef.current;if(subscriber!==null){var threadID=computeThreadID(root,lane);subscriber.onWorkScheduled(interactions,threadID);}}}function schedulePendingInteractions(root,lane){scheduleInteractions(root,lane,tracing.__interactionsRef.current);}function startWorkOnPendingInteractions(root,lanes){// we can accurately attribute time spent working on it, And so that cascading
// work triggered during the render phase will be associated with it.
var interactions=new Set();root.pendingInteractionMap.forEach(function(scheduledInteractions,scheduledLane){if(includesSomeLane(lanes,scheduledLane)){scheduledInteractions.forEach(function(interaction){return interactions.add(interaction);});}});// Store the current set of interactions on the FiberRoot for a few reasons:
// We can re-use it in hot functions like performConcurrentWorkOnRoot()
// without having to recalculate it. We will also use it in commitWork() to
// pass to any Profiler onRender() hooks. This also provides DevTools with a
// way to access it when the onCommitRoot() hook is called.
root.memoizedInteractions=interactions;if(interactions.size>0){var subscriber=tracing.__subscriberRef.current;if(subscriber!==null){var threadID=computeThreadID(root,lanes);try{subscriber.onWorkStarted(interactions,threadID);}catch(error){// If the subscriber throws, rethrow it in a separate task
scheduleCallback(ImmediatePriority$1,function(){throw error;});}}}}function finishPendingInteractions(root,committedLanes){var remainingLanesAfterCommit=root.pendingLanes;var subscriber;try{subscriber=tracing.__subscriberRef.current;if(subscriber!==null&&root.memoizedInteractions.size>0){// FIXME: More than one lane can finish in a single commit.
var threadID=computeThreadID(root,committedLanes);subscriber.onWorkStopped(root.memoizedInteractions,threadID);}}catch(error){// If the subscriber throws, rethrow it in a separate task
scheduleCallback(ImmediatePriority$1,function(){throw error;});}finally{// Clear completed interactions from the pending Map.
// Unless the render was suspended or cascading work was scheduled,
// In which case– leave pending interactions until the subsequent render.
var pendingInteractionMap=root.pendingInteractionMap;pendingInteractionMap.forEach(function(scheduledInteractions,lane){// Only decrement the pending interaction count if we're done.
// If there's still work at the current priority,
// That indicates that we are waiting for suspense data.
if(!includesSomeLane(remainingLanesAfterCommit,lane)){pendingInteractionMap["delete"](lane);scheduledInteractions.forEach(function(interaction){interaction.__count--;if(subscriber!==null&&interaction.__count===0){try{subscriber.onInteractionScheduledWorkCompleted(interaction);}catch(error){// If the subscriber throws, rethrow it in a separate task
scheduleCallback(ImmediatePriority$1,function(){throw error;});}}});}});}}// `act` testing API
function shouldForceFlushFallbacksInDEV(){// Never force flush in production. This function should get stripped out.
return actingUpdatesScopeDepth>0;}// so we can tell if any async act() calls try to run in parallel.
var actingUpdatesScopeDepth=0;function detachFiberAfterEffects(fiber){fiber.sibling=null;fiber.stateNode=null;}var resolveFamily=null;// $FlowFixMe Flow gets confused by a WeakSet feature check below.
var failedBoundaries=null;var setRefreshHandler=function setRefreshHandler(handler){{resolveFamily=handler;}};function resolveFunctionForHotReloading(type){{if(resolveFamily===null){// Hot reloading is disabled.
return type;}var family=resolveFamily(type);if(family===undefined){return type;}// Use the latest known implementation.
return family.current;}}function resolveClassForHotReloading(type){// No implementation differences.
return resolveFunctionForHotReloading(type);}function resolveForwardRefForHotReloading(type){{if(resolveFamily===null){// Hot reloading is disabled.
return type;}var family=resolveFamily(type);if(family===undefined){// Check if we're dealing with a real forwardRef. Don't want to crash early.
if(type!==null&&type!==undefined&&typeof type.render==='function'){// ForwardRef is special because its resolved .type is an object,
// but it's possible that we only have its inner render function in the map.
// If that inner render function is different, we'll build a new forwardRef type.
var currentRender=resolveFunctionForHotReloading(type.render);if(type.render!==currentRender){var syntheticType={$$typeof:REACT_FORWARD_REF_TYPE,render:currentRender};if(type.displayName!==undefined){syntheticType.displayName=type.displayName;}return syntheticType;}}return type;}// Use the latest known implementation.
return family.current;}}function isCompatibleFamilyForHotReloading(fiber,element){{if(resolveFamily===null){// Hot reloading is disabled.
return false;}var prevType=fiber.elementType;var nextType=element.type;// If we got here, we know types aren't === equal.
var needsCompareFamilies=false;var $$typeofNextType=_typeof$1(nextType)==='object'&&nextType!==null?nextType.$$typeof:null;switch(fiber.tag){case ClassComponent:{if(typeof nextType==='function'){needsCompareFamilies=true;}break;}case FunctionComponent:{if(typeof nextType==='function'){needsCompareFamilies=true;}else if($$typeofNextType===REACT_LAZY_TYPE){// We don't know the inner type yet.
// We're going to assume that the lazy inner type is stable,
// and so it is sufficient to avoid reconciling it away.
// We're not going to unwrap or actually use the new lazy type.
needsCompareFamilies=true;}break;}case ForwardRef:{if($$typeofNextType===REACT_FORWARD_REF_TYPE){needsCompareFamilies=true;}else if($$typeofNextType===REACT_LAZY_TYPE){needsCompareFamilies=true;}break;}case MemoComponent:case SimpleMemoComponent:{if($$typeofNextType===REACT_MEMO_TYPE){// TODO: if it was but can no longer be simple,
// we shouldn't set this.
needsCompareFamilies=true;}else if($$typeofNextType===REACT_LAZY_TYPE){needsCompareFamilies=true;}break;}default:return false;}// Check if both types have a family and it's the same one.
if(needsCompareFamilies){// Note: memo() and forwardRef() we'll compare outer rather than inner type.
// This means both of them need to be registered to preserve state.
// If we unwrapped and compared the inner types for wrappers instead,
// then we would risk falsely saying two separate memo(Foo)
// calls are equivalent because they wrap the same Foo function.
var prevFamily=resolveFamily(prevType);if(prevFamily!==undefined&&prevFamily===resolveFamily(nextType)){return true;}}return false;}}function markFailedErrorBoundaryForHotReloading(fiber){{if(resolveFamily===null){// Hot reloading is disabled.
return;}if(typeof WeakSet!=='function'){return;}if(failedBoundaries===null){failedBoundaries=new WeakSet();}failedBoundaries.add(fiber);}}var scheduleRefresh=function scheduleRefresh(root,update){{if(resolveFamily===null){// Hot reloading is disabled.
return;}var staleFamilies=update.staleFamilies,updatedFamilies=update.updatedFamilies;flushPassiveEffects();flushSync(function(){scheduleFibersWithFamiliesRecursively(root.current,updatedFamilies,staleFamilies);});}};var scheduleRoot=function scheduleRoot(root,element){{if(root.context!==emptyContextObject){// Super edge case: root has a legacy _renderSubtree context
// but we don't know the parentComponent so we can't pass it.
// Just ignore. We'll delete this with _renderSubtree code path later.
return;}flushPassiveEffects();flushSync(function(){updateContainer(element,root,null,null);});}};function scheduleFibersWithFamiliesRecursively(fiber,updatedFamilies,staleFamilies){{var alternate=fiber.alternate,child=fiber.child,sibling=fiber.sibling,tag=fiber.tag,type=fiber.type;var candidateType=null;switch(tag){case FunctionComponent:case SimpleMemoComponent:case ClassComponent:candidateType=type;break;case ForwardRef:candidateType=type.render;break;}if(resolveFamily===null){throw new Error('Expected resolveFamily to be set during hot reload.');}var needsRender=false;var needsRemount=false;if(candidateType!==null){var family=resolveFamily(candidateType);if(family!==undefined){if(staleFamilies.has(family)){needsRemount=true;}else if(updatedFamilies.has(family)){if(tag===ClassComponent){needsRemount=true;}else {needsRender=true;}}}}if(failedBoundaries!==null){if(failedBoundaries.has(fiber)||alternate!==null&&failedBoundaries.has(alternate)){needsRemount=true;}}if(needsRemount){fiber._debugNeedsRemount=true;}if(needsRemount||needsRender){scheduleUpdateOnFiber(fiber,SyncLane,NoTimestamp);}if(child!==null&&!needsRemount){scheduleFibersWithFamiliesRecursively(child,updatedFamilies,staleFamilies);}if(sibling!==null){scheduleFibersWithFamiliesRecursively(sibling,updatedFamilies,staleFamilies);}}}var findHostInstancesForRefresh=function findHostInstancesForRefresh(root,families){{var hostInstances=new Set();var types=new Set(families.map(function(family){return family.current;}));findHostInstancesForMatchingFibersRecursively(root.current,types,hostInstances);return hostInstances;}};function findHostInstancesForMatchingFibersRecursively(fiber,types,hostInstances){{var child=fiber.child,sibling=fiber.sibling,tag=fiber.tag,type=fiber.type;var candidateType=null;switch(tag){case FunctionComponent:case SimpleMemoComponent:case ClassComponent:candidateType=type;break;case ForwardRef:candidateType=type.render;break;}var didMatch=false;if(candidateType!==null){if(types.has(candidateType)){didMatch=true;}}if(didMatch){// We have a match. This only drills down to the closest host components.
// There's no need to search deeper because for the purpose of giving
// visual feedback, "flashing" outermost parent rectangles is sufficient.
findHostInstancesForFiberShallowly(fiber,hostInstances);}else {// If there's no match, maybe there will be one further down in the child tree.
if(child!==null){findHostInstancesForMatchingFibersRecursively(child,types,hostInstances);}}if(sibling!==null){findHostInstancesForMatchingFibersRecursively(sibling,types,hostInstances);}}}function findHostInstancesForFiberShallowly(fiber,hostInstances){{var foundHostInstances=findChildHostInstancesForFiberShallowly(fiber,hostInstances);if(foundHostInstances){return;}// If we didn't find any host children, fallback to closest host parent.
var node=fiber;while(true){switch(node.tag){case HostComponent:hostInstances.add(node.stateNode);return;case HostPortal:hostInstances.add(node.stateNode.containerInfo);return;case HostRoot:hostInstances.add(node.stateNode.containerInfo);return;}if(node["return"]===null){throw new Error('Expected to reach root first.');}node=node["return"];}}}function findChildHostInstancesForFiberShallowly(fiber,hostInstances){{var node=fiber;var foundHostInstances=false;while(true){if(node.tag===HostComponent){// We got a match.
foundHostInstances=true;hostInstances.add(node.stateNode);// There may still be more, so keep searching.
}else if(node.child!==null){node.child["return"]=node;node=node.child;continue;}if(node===fiber){return foundHostInstances;}while(node.sibling===null){if(node["return"]===null||node["return"]===fiber){return foundHostInstances;}node=node["return"];}node.sibling["return"]=node["return"];node=node.sibling;}}return false;}var hasBadMapPolyfill;{hasBadMapPolyfill=false;try{var nonExtensibleObject=Object.preventExtensions({});/* eslint-disable no-new */new Map([[nonExtensibleObject,null]]);new Set([nonExtensibleObject]);/* eslint-enable no-new */}catch(e){// TODO: Consider warning about bad polyfills
hasBadMapPolyfill=true;}}var debugCounter=1;function FiberNode(tag,pendingProps,key,mode){// Instance
this.tag=tag;this.key=key;this.elementType=null;this.type=null;this.stateNode=null;// Fiber
this["return"]=null;this.child=null;this.sibling=null;this.index=0;this.ref=null;this.pendingProps=pendingProps;this.memoizedProps=null;this.updateQueue=null;this.memoizedState=null;this.dependencies=null;this.mode=mode;// Effects
this.flags=NoFlags;this.nextEffect=null;this.firstEffect=null;this.lastEffect=null;this.lanes=NoLanes;this.childLanes=NoLanes;this.alternate=null;{// Note: The following is done to avoid a v8 performance cliff.
//
// Initializing the fields below to smis and later updating them with
// double values will cause Fibers to end up having separate shapes.
// This behavior/bug has something to do with Object.preventExtension().
// Fortunately this only impacts DEV builds.
// Unfortunately it makes React unusably slow for some applications.
// To work around this, initialize the fields below with doubles.
//
// Learn more about this here:
// https://github.com/facebook/react/issues/14365
// https://bugs.chromium.org/p/v8/issues/detail?id=8538
this.actualDuration=Number.NaN;this.actualStartTime=Number.NaN;this.selfBaseDuration=Number.NaN;this.treeBaseDuration=Number.NaN;// It's okay to replace the initial doubles with smis after initialization.
// This won't trigger the performance cliff mentioned above,
// and it simplifies other profiler code (including DevTools).
this.actualDuration=0;this.actualStartTime=-1;this.selfBaseDuration=0;this.treeBaseDuration=0;}{// This isn't directly used but is handy for debugging internals:
this._debugID=debugCounter++;this._debugSource=null;this._debugOwner=null;this._debugNeedsRemount=false;this._debugHookTypes=null;if(!hasBadMapPolyfill&&typeof Object.preventExtensions==='function'){Object.preventExtensions(this);}}}// This is a constructor function, rather than a POJO constructor, still
// please ensure we do the following:
// 1) Nobody should add any instance methods on this. Instance methods can be
//    more difficult to predict when they get optimized and they are almost
//    never inlined properly in static compilers.
// 2) Nobody should rely on `instanceof Fiber` for type testing. We should
//    always know when it is a fiber.
// 3) We might want to experiment with using numeric keys since they are easier
//    to optimize in a non-JIT environment.
// 4) We can easily go from a constructor to a createFiber object literal if that
//    is faster.
// 5) It should be easy to port this to a C struct and keep a C implementation
//    compatible.
var createFiber=function createFiber(tag,pendingProps,key,mode){// $FlowFixMe: the shapes are exact here but Flow doesn't like constructors
return new FiberNode(tag,pendingProps,key,mode);};function shouldConstruct$1(Component){var prototype=Component.prototype;return !!(prototype&&prototype.isReactComponent);}function isSimpleFunctionComponent(type){return typeof type==='function'&&!shouldConstruct$1(type)&&type.defaultProps===undefined;}function resolveLazyComponentTag(Component){if(typeof Component==='function'){return shouldConstruct$1(Component)?ClassComponent:FunctionComponent;}else if(Component!==undefined&&Component!==null){var $$typeof=Component.$$typeof;if($$typeof===REACT_FORWARD_REF_TYPE){return ForwardRef;}if($$typeof===REACT_MEMO_TYPE){return MemoComponent;}}return IndeterminateComponent;}// This is used to create an alternate fiber to do work on.
function createWorkInProgress(current,pendingProps){var workInProgress=current.alternate;if(workInProgress===null){// We use a double buffering pooling technique because we know that we'll
// only ever need at most two versions of a tree. We pool the "other" unused
// node that we're free to reuse. This is lazily created to avoid allocating
// extra objects for things that are never updated. It also allow us to
// reclaim the extra memory if needed.
workInProgress=createFiber(current.tag,pendingProps,current.key,current.mode);workInProgress.elementType=current.elementType;workInProgress.type=current.type;workInProgress.stateNode=current.stateNode;{// DEV-only fields
workInProgress._debugID=current._debugID;workInProgress._debugSource=current._debugSource;workInProgress._debugOwner=current._debugOwner;workInProgress._debugHookTypes=current._debugHookTypes;}workInProgress.alternate=current;current.alternate=workInProgress;}else {workInProgress.pendingProps=pendingProps;// Needed because Blocks store data on type.
workInProgress.type=current.type;// We already have an alternate.
// Reset the effect tag.
workInProgress.flags=NoFlags;// The effect list is no longer valid.
workInProgress.nextEffect=null;workInProgress.firstEffect=null;workInProgress.lastEffect=null;{// We intentionally reset, rather than copy, actualDuration & actualStartTime.
// This prevents time from endlessly accumulating in new commits.
// This has the downside of resetting values for different priority renders,
// But works for yielding (the common case) and should support resuming.
workInProgress.actualDuration=0;workInProgress.actualStartTime=-1;}}workInProgress.childLanes=current.childLanes;workInProgress.lanes=current.lanes;workInProgress.child=current.child;workInProgress.memoizedProps=current.memoizedProps;workInProgress.memoizedState=current.memoizedState;workInProgress.updateQueue=current.updateQueue;// Clone the dependencies object. This is mutated during the render phase, so
// it cannot be shared with the current fiber.
var currentDependencies=current.dependencies;workInProgress.dependencies=currentDependencies===null?null:{lanes:currentDependencies.lanes,firstContext:currentDependencies.firstContext};// These will be overridden during the parent's reconciliation
workInProgress.sibling=current.sibling;workInProgress.index=current.index;workInProgress.ref=current.ref;{workInProgress.selfBaseDuration=current.selfBaseDuration;workInProgress.treeBaseDuration=current.treeBaseDuration;}{workInProgress._debugNeedsRemount=current._debugNeedsRemount;switch(workInProgress.tag){case IndeterminateComponent:case FunctionComponent:case SimpleMemoComponent:workInProgress.type=resolveFunctionForHotReloading(current.type);break;case ClassComponent:workInProgress.type=resolveClassForHotReloading(current.type);break;case ForwardRef:workInProgress.type=resolveForwardRefForHotReloading(current.type);break;}}return workInProgress;}// Used to reuse a Fiber for a second pass.
function resetWorkInProgress(workInProgress,renderLanes){// This resets the Fiber to what createFiber or createWorkInProgress would
// have set the values to before during the first pass. Ideally this wouldn't
// be necessary but unfortunately many code paths reads from the workInProgress
// when they should be reading from current and writing to workInProgress.
// We assume pendingProps, index, key, ref, return are still untouched to
// avoid doing another reconciliation.
// Reset the effect tag but keep any Placement tags, since that's something
// that child fiber is setting, not the reconciliation.
workInProgress.flags&=Placement;// The effect list is no longer valid.
workInProgress.nextEffect=null;workInProgress.firstEffect=null;workInProgress.lastEffect=null;var current=workInProgress.alternate;if(current===null){// Reset to createFiber's initial values.
workInProgress.childLanes=NoLanes;workInProgress.lanes=renderLanes;workInProgress.child=null;workInProgress.memoizedProps=null;workInProgress.memoizedState=null;workInProgress.updateQueue=null;workInProgress.dependencies=null;workInProgress.stateNode=null;{// Note: We don't reset the actualTime counts. It's useful to accumulate
// actual time across multiple render passes.
workInProgress.selfBaseDuration=0;workInProgress.treeBaseDuration=0;}}else {// Reset to the cloned values that createWorkInProgress would've.
workInProgress.childLanes=current.childLanes;workInProgress.lanes=current.lanes;workInProgress.child=current.child;workInProgress.memoizedProps=current.memoizedProps;workInProgress.memoizedState=current.memoizedState;workInProgress.updateQueue=current.updateQueue;// Needed because Blocks store data on type.
workInProgress.type=current.type;// Clone the dependencies object. This is mutated during the render phase, so
// it cannot be shared with the current fiber.
var currentDependencies=current.dependencies;workInProgress.dependencies=currentDependencies===null?null:{lanes:currentDependencies.lanes,firstContext:currentDependencies.firstContext};{// Note: We don't reset the actualTime counts. It's useful to accumulate
// actual time across multiple render passes.
workInProgress.selfBaseDuration=current.selfBaseDuration;workInProgress.treeBaseDuration=current.treeBaseDuration;}}return workInProgress;}function createHostRootFiber(tag){var mode;if(tag===ConcurrentRoot){mode=ConcurrentMode|BlockingMode|StrictMode;}else if(tag===BlockingRoot){mode=BlockingMode|StrictMode;}else {mode=NoMode;}if(isDevToolsPresent){// Always collect profile timings when DevTools are present.
// This enables DevTools to start capturing timing at any point–
// Without some nodes in the tree having empty base times.
mode|=ProfileMode;}return createFiber(HostRoot,null,null,mode);}function createFiberFromTypeAndProps(type,// React$ElementType
key,pendingProps,owner,mode,lanes){var fiberTag=IndeterminateComponent;// The resolved type is set if we know what the final type will be. I.e. it's not lazy.
var resolvedType=type;if(typeof type==='function'){if(shouldConstruct$1(type)){fiberTag=ClassComponent;{resolvedType=resolveClassForHotReloading(resolvedType);}}else {{resolvedType=resolveFunctionForHotReloading(resolvedType);}}}else if(typeof type==='string'){fiberTag=HostComponent;}else {getTag:switch(type){case REACT_FRAGMENT_TYPE:return createFiberFromFragment(pendingProps.children,mode,lanes,key);case REACT_DEBUG_TRACING_MODE_TYPE:fiberTag=Mode;mode|=DebugTracingMode;break;case REACT_STRICT_MODE_TYPE:fiberTag=Mode;mode|=StrictMode;break;case REACT_PROFILER_TYPE:return createFiberFromProfiler(pendingProps,mode,lanes,key);case REACT_SUSPENSE_TYPE:return createFiberFromSuspense(pendingProps,mode,lanes,key);case REACT_SUSPENSE_LIST_TYPE:return createFiberFromSuspenseList(pendingProps,mode,lanes,key);case REACT_OFFSCREEN_TYPE:return createFiberFromOffscreen(pendingProps,mode,lanes,key);case REACT_LEGACY_HIDDEN_TYPE:return createFiberFromLegacyHidden(pendingProps,mode,lanes,key);case REACT_SCOPE_TYPE:// eslint-disable-next-line no-fallthrough
default:{if(_typeof$1(type)==='object'&&type!==null){switch(type.$$typeof){case REACT_PROVIDER_TYPE:fiberTag=ContextProvider;break getTag;case REACT_CONTEXT_TYPE:// This is a consumer
fiberTag=ContextConsumer;break getTag;case REACT_FORWARD_REF_TYPE:fiberTag=ForwardRef;{resolvedType=resolveForwardRefForHotReloading(resolvedType);}break getTag;case REACT_MEMO_TYPE:fiberTag=MemoComponent;break getTag;case REACT_LAZY_TYPE:fiberTag=LazyComponent;resolvedType=null;break getTag;case REACT_BLOCK_TYPE:fiberTag=Block;break getTag;}}var info='';{if(type===undefined||_typeof$1(type)==='object'&&type!==null&&Object.keys(type).length===0){info+=' You likely forgot to export your component from the file '+"it's defined in, or you might have mixed up default and "+'named imports.';}var ownerName=owner?getComponentName(owner.type):null;if(ownerName){info+='\n\nCheck the render method of `'+ownerName+'`.';}}{{throw Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: "+(type==null?type:_typeof$1(type))+"."+info);}}}}}var fiber=createFiber(fiberTag,pendingProps,key,mode);fiber.elementType=type;fiber.type=resolvedType;fiber.lanes=lanes;{fiber._debugOwner=owner;}return fiber;}function createFiberFromElement(element,mode,lanes){var owner=null;{owner=element._owner;}var type=element.type;var key=element.key;var pendingProps=element.props;var fiber=createFiberFromTypeAndProps(type,key,pendingProps,owner,mode,lanes);{fiber._debugSource=element._source;fiber._debugOwner=element._owner;}return fiber;}function createFiberFromFragment(elements,mode,lanes,key){var fiber=createFiber(Fragment,elements,key,mode);fiber.lanes=lanes;return fiber;}function createFiberFromProfiler(pendingProps,mode,lanes,key){{if(typeof pendingProps.id!=='string'){error('Profiler must specify an "id" as a prop');}}var fiber=createFiber(Profiler,pendingProps,key,mode|ProfileMode);// TODO: The Profiler fiber shouldn't have a type. It has a tag.
fiber.elementType=REACT_PROFILER_TYPE;fiber.type=REACT_PROFILER_TYPE;fiber.lanes=lanes;{fiber.stateNode={effectDuration:0,passiveEffectDuration:0};}return fiber;}function createFiberFromSuspense(pendingProps,mode,lanes,key){var fiber=createFiber(SuspenseComponent,pendingProps,key,mode);// TODO: The SuspenseComponent fiber shouldn't have a type. It has a tag.
// This needs to be fixed in getComponentName so that it relies on the tag
// instead.
fiber.type=REACT_SUSPENSE_TYPE;fiber.elementType=REACT_SUSPENSE_TYPE;fiber.lanes=lanes;return fiber;}function createFiberFromSuspenseList(pendingProps,mode,lanes,key){var fiber=createFiber(SuspenseListComponent,pendingProps,key,mode);{// TODO: The SuspenseListComponent fiber shouldn't have a type. It has a tag.
// This needs to be fixed in getComponentName so that it relies on the tag
// instead.
fiber.type=REACT_SUSPENSE_LIST_TYPE;}fiber.elementType=REACT_SUSPENSE_LIST_TYPE;fiber.lanes=lanes;return fiber;}function createFiberFromOffscreen(pendingProps,mode,lanes,key){var fiber=createFiber(OffscreenComponent,pendingProps,key,mode);// TODO: The OffscreenComponent fiber shouldn't have a type. It has a tag.
// This needs to be fixed in getComponentName so that it relies on the tag
// instead.
{fiber.type=REACT_OFFSCREEN_TYPE;}fiber.elementType=REACT_OFFSCREEN_TYPE;fiber.lanes=lanes;return fiber;}function createFiberFromLegacyHidden(pendingProps,mode,lanes,key){var fiber=createFiber(LegacyHiddenComponent,pendingProps,key,mode);// TODO: The LegacyHidden fiber shouldn't have a type. It has a tag.
// This needs to be fixed in getComponentName so that it relies on the tag
// instead.
{fiber.type=REACT_LEGACY_HIDDEN_TYPE;}fiber.elementType=REACT_LEGACY_HIDDEN_TYPE;fiber.lanes=lanes;return fiber;}function createFiberFromText(content,mode,lanes){var fiber=createFiber(HostText,content,null,mode);fiber.lanes=lanes;return fiber;}function createFiberFromHostInstanceForDeletion(){var fiber=createFiber(HostComponent,null,null,NoMode);// TODO: These should not need a type.
fiber.elementType='DELETED';fiber.type='DELETED';return fiber;}function createFiberFromPortal(portal,mode,lanes){var pendingProps=portal.children!==null?portal.children:[];var fiber=createFiber(HostPortal,pendingProps,portal.key,mode);fiber.lanes=lanes;fiber.stateNode={containerInfo:portal.containerInfo,pendingChildren:null,// Used by persistent updates
implementation:portal.implementation};return fiber;}// Used for stashing WIP properties to replay failed work in DEV.
function assignFiberPropertiesInDEV(target,source){if(target===null){// This Fiber's initial properties will always be overwritten.
// We only use a Fiber to ensure the same hidden class so DEV isn't slow.
target=createFiber(IndeterminateComponent,null,null,NoMode);}// This is intentionally written as a list of all properties.
// We tried to use Object.assign() instead but this is called in
// the hottest path, and Object.assign() was too slow:
// https://github.com/facebook/react/issues/12502
// This code is DEV-only so size is not a concern.
target.tag=source.tag;target.key=source.key;target.elementType=source.elementType;target.type=source.type;target.stateNode=source.stateNode;target["return"]=source["return"];target.child=source.child;target.sibling=source.sibling;target.index=source.index;target.ref=source.ref;target.pendingProps=source.pendingProps;target.memoizedProps=source.memoizedProps;target.updateQueue=source.updateQueue;target.memoizedState=source.memoizedState;target.dependencies=source.dependencies;target.mode=source.mode;target.flags=source.flags;target.nextEffect=source.nextEffect;target.firstEffect=source.firstEffect;target.lastEffect=source.lastEffect;target.lanes=source.lanes;target.childLanes=source.childLanes;target.alternate=source.alternate;{target.actualDuration=source.actualDuration;target.actualStartTime=source.actualStartTime;target.selfBaseDuration=source.selfBaseDuration;target.treeBaseDuration=source.treeBaseDuration;}target._debugID=source._debugID;target._debugSource=source._debugSource;target._debugOwner=source._debugOwner;target._debugNeedsRemount=source._debugNeedsRemount;target._debugHookTypes=source._debugHookTypes;return target;}function FiberRootNode(containerInfo,tag,hydrate){this.tag=tag;this.containerInfo=containerInfo;this.pendingChildren=null;this.current=null;this.pingCache=null;this.finishedWork=null;this.timeoutHandle=noTimeout;this.context=null;this.pendingContext=null;this.hydrate=hydrate;this.callbackNode=null;this.callbackPriority=NoLanePriority;this.eventTimes=createLaneMap(NoLanes);this.expirationTimes=createLaneMap(NoTimestamp);this.pendingLanes=NoLanes;this.suspendedLanes=NoLanes;this.pingedLanes=NoLanes;this.expiredLanes=NoLanes;this.mutableReadLanes=NoLanes;this.finishedLanes=NoLanes;this.entangledLanes=NoLanes;this.entanglements=createLaneMap(NoLanes);{this.mutableSourceEagerHydrationData=null;}{this.interactionThreadID=tracing.unstable_getThreadID();this.memoizedInteractions=new Set();this.pendingInteractionMap=new Map();}{switch(tag){case BlockingRoot:this._debugRootType='createBlockingRoot()';break;case ConcurrentRoot:this._debugRootType='createRoot()';break;case LegacyRoot:this._debugRootType='createLegacyRoot()';break;}}}function createFiberRoot(containerInfo,tag,hydrate,hydrationCallbacks){var root=new FiberRootNode(containerInfo,tag,hydrate);// stateNode is any.
var uninitializedFiber=createHostRootFiber(tag);root.current=uninitializedFiber;uninitializedFiber.stateNode=root;initializeUpdateQueue(uninitializedFiber);return root;}// This ensures that the version used for server rendering matches the one
// that is eventually read during hydration.
// If they don't match there's a potential tear and a full deopt render is required.
function registerMutableSourceForHydration(root,mutableSource){var getVersion=mutableSource._getVersion;var version=getVersion(mutableSource._source);// TODO Clear this data once all pending hydration work is finished.
// Retaining it forever may interfere with GC.
if(root.mutableSourceEagerHydrationData==null){root.mutableSourceEagerHydrationData=[mutableSource,version];}else {root.mutableSourceEagerHydrationData.push(mutableSource,version);}}function createPortal(children,containerInfo,// TODO: figure out the API for cross-renderer implementation.
implementation){var key=arguments.length>3&&arguments[3]!==undefined?arguments[3]:null;return {// This tag allow us to uniquely identify this as a React Portal
$$typeof:REACT_PORTAL_TYPE,key:key==null?null:''+key,children:children,containerInfo:containerInfo,implementation:implementation};}var didWarnAboutNestedUpdates;var didWarnAboutFindNodeInStrictMode;{didWarnAboutNestedUpdates=false;didWarnAboutFindNodeInStrictMode={};}function getContextForSubtree(parentComponent){if(!parentComponent){return emptyContextObject;}var fiber=get(parentComponent);var parentContext=findCurrentUnmaskedContext(fiber);if(fiber.tag===ClassComponent){var Component=fiber.type;if(isContextProvider(Component)){return processChildContext(fiber,Component,parentContext);}}return parentContext;}function findHostInstanceWithWarning(component,methodName){{var fiber=get(component);if(fiber===undefined){if(typeof component.render==='function'){{{throw Error("Unable to find node on an unmounted component.");}}}else {{{throw Error("Argument appears to not be a ReactComponent. Keys: "+Object.keys(component));}}}}var hostFiber=findCurrentHostFiber(fiber);if(hostFiber===null){return null;}if(hostFiber.mode&StrictMode){var componentName=getComponentName(fiber.type)||'Component';if(!didWarnAboutFindNodeInStrictMode[componentName]){didWarnAboutFindNodeInStrictMode[componentName]=true;var previousFiber=current;try{setCurrentFiber(hostFiber);if(fiber.mode&StrictMode){error('%s is deprecated in StrictMode. '+'%s was passed an instance of %s which is inside StrictMode. '+'Instead, add a ref directly to the element you want to reference. '+'Learn more about using refs safely here: '+'https://reactjs.org/link/strict-mode-find-node',methodName,methodName,componentName);}else {error('%s is deprecated in StrictMode. '+'%s was passed an instance of %s which renders StrictMode children. '+'Instead, add a ref directly to the element you want to reference. '+'Learn more about using refs safely here: '+'https://reactjs.org/link/strict-mode-find-node',methodName,methodName,componentName);}}finally{// Ideally this should reset to previous but this shouldn't be called in
// render and there's another warning for that anyway.
if(previousFiber){setCurrentFiber(previousFiber);}else {resetCurrentFiber();}}}}return hostFiber.stateNode;}}function createContainer(containerInfo,tag,hydrate,hydrationCallbacks){return createFiberRoot(containerInfo,tag,hydrate);}function updateContainer(element,container,parentComponent,callback){{onScheduleRoot(container,element);}var current$1=container.current;var eventTime=requestEventTime();{// $FlowExpectedError - jest isn't a global, and isn't recognized outside of tests
if('undefined'!==typeof jest){warnIfUnmockedScheduler(current$1);warnIfNotScopedWithMatchingAct(current$1);}}var lane=requestUpdateLane(current$1);var context=getContextForSubtree(parentComponent);if(container.context===null){container.context=context;}else {container.pendingContext=context;}{if(isRendering&&current!==null&&!didWarnAboutNestedUpdates){didWarnAboutNestedUpdates=true;error('Render methods should be a pure function of props and state; '+'triggering nested component updates from render is not allowed. '+'If necessary, trigger nested updates in componentDidUpdate.\n\n'+'Check the render method of %s.',getComponentName(current.type)||'Unknown');}}var update=createUpdate(eventTime,lane);// Caution: React DevTools currently depends on this property
// being called "element".
update.payload={element:element};callback=callback===undefined?null:callback;if(callback!==null){{if(typeof callback!=='function'){error('render(...): Expected the last optional `callback` argument to be a '+'function. Instead received: %s.',callback);}}update.callback=callback;}enqueueUpdate(current$1,update);scheduleUpdateOnFiber(current$1,lane,eventTime);return lane;}function getPublicRootInstance(container){var containerFiber=container.current;if(!containerFiber.child){return null;}switch(containerFiber.child.tag){case HostComponent:return getPublicInstance(containerFiber.child.stateNode);default:return containerFiber.child.stateNode;}}function markRetryLaneImpl(fiber,retryLane){var suspenseState=fiber.memoizedState;if(suspenseState!==null&&suspenseState.dehydrated!==null){suspenseState.retryLane=higherPriorityLane(suspenseState.retryLane,retryLane);}}// Increases the priority of thennables when they resolve within this boundary.
function markRetryLaneIfNotHydrated(fiber,retryLane){markRetryLaneImpl(fiber,retryLane);var alternate=fiber.alternate;if(alternate){markRetryLaneImpl(alternate,retryLane);}}function attemptUserBlockingHydration$1(fiber){if(fiber.tag!==SuspenseComponent){// We ignore HostRoots here because we can't increase
// their priority and they should not suspend on I/O,
// since you have to wrap anything that might suspend in
// Suspense.
return;}var eventTime=requestEventTime();var lane=InputDiscreteHydrationLane;scheduleUpdateOnFiber(fiber,lane,eventTime);markRetryLaneIfNotHydrated(fiber,lane);}function attemptContinuousHydration$1(fiber){if(fiber.tag!==SuspenseComponent){// We ignore HostRoots here because we can't increase
// their priority and they should not suspend on I/O,
// since you have to wrap anything that might suspend in
// Suspense.
return;}var eventTime=requestEventTime();var lane=SelectiveHydrationLane;scheduleUpdateOnFiber(fiber,lane,eventTime);markRetryLaneIfNotHydrated(fiber,lane);}function attemptHydrationAtCurrentPriority$1(fiber){if(fiber.tag!==SuspenseComponent){// We ignore HostRoots here because we can't increase
// their priority other than synchronously flush it.
return;}var eventTime=requestEventTime();var lane=requestUpdateLane(fiber);scheduleUpdateOnFiber(fiber,lane,eventTime);markRetryLaneIfNotHydrated(fiber,lane);}function runWithPriority$2(priority,fn){try{setCurrentUpdateLanePriority(priority);return fn();}finally{}}function findHostInstanceWithNoPortals(fiber){var hostFiber=findCurrentHostFiberWithNoPortals(fiber);if(hostFiber===null){return null;}if(hostFiber.tag===FundamentalComponent){return hostFiber.stateNode.instance;}return hostFiber.stateNode;}var shouldSuspendImpl=function shouldSuspendImpl(fiber){return false;};function shouldSuspend(fiber){return shouldSuspendImpl(fiber);}var overrideHookState=null;var overrideHookStateDeletePath=null;var overrideHookStateRenamePath=null;var overrideProps=null;var overridePropsDeletePath=null;var overridePropsRenamePath=null;var scheduleUpdate=null;var setSuspenseHandler=null;{var copyWithDeleteImpl=function copyWithDeleteImpl(obj,path,index){var key=path[index];var updated=Array.isArray(obj)?obj.slice():_assign({},obj);if(index+1===path.length){if(Array.isArray(updated)){updated.splice(key,1);}else {delete updated[key];}return updated;}// $FlowFixMe number or string is fine here
updated[key]=copyWithDeleteImpl(obj[key],path,index+1);return updated;};var copyWithDelete=function copyWithDelete(obj,path){return copyWithDeleteImpl(obj,path,0);};var copyWithRenameImpl=function copyWithRenameImpl(obj,oldPath,newPath,index){var oldKey=oldPath[index];var updated=Array.isArray(obj)?obj.slice():_assign({},obj);if(index+1===oldPath.length){var newKey=newPath[index];// $FlowFixMe number or string is fine here
updated[newKey]=updated[oldKey];if(Array.isArray(updated)){updated.splice(oldKey,1);}else {delete updated[oldKey];}}else {// $FlowFixMe number or string is fine here
updated[oldKey]=copyWithRenameImpl(// $FlowFixMe number or string is fine here
obj[oldKey],oldPath,newPath,index+1);}return updated;};var copyWithRename=function copyWithRename(obj,oldPath,newPath){if(oldPath.length!==newPath.length){warn('copyWithRename() expects paths of the same length');return;}else {for(var i=0;i<newPath.length-1;i++){if(oldPath[i]!==newPath[i]){warn('copyWithRename() expects paths to be the same except for the deepest key');return;}}}return copyWithRenameImpl(obj,oldPath,newPath,0);};var copyWithSetImpl=function copyWithSetImpl(obj,path,index,value){if(index>=path.length){return value;}var key=path[index];var updated=Array.isArray(obj)?obj.slice():_assign({},obj);// $FlowFixMe number or string is fine here
updated[key]=copyWithSetImpl(obj[key],path,index+1,value);return updated;};var copyWithSet=function copyWithSet(obj,path,value){return copyWithSetImpl(obj,path,0,value);};var findHook=function findHook(fiber,id){// For now, the "id" of stateful hooks is just the stateful hook index.
// This may change in the future with e.g. nested hooks.
var currentHook=fiber.memoizedState;while(currentHook!==null&&id>0){currentHook=currentHook.next;id--;}return currentHook;};// Support DevTools editable values for useState and useReducer.
overrideHookState=function overrideHookState(fiber,id,path,value){var hook=findHook(fiber,id);if(hook!==null){var newState=copyWithSet(hook.memoizedState,path,value);hook.memoizedState=newState;hook.baseState=newState;// We aren't actually adding an update to the queue,
// because there is no update we can add for useReducer hooks that won't trigger an error.
// (There's no appropriate action type for DevTools overrides.)
// As a result though, React will see the scheduled update as a noop and bailout.
// Shallow cloning props works as a workaround for now to bypass the bailout check.
fiber.memoizedProps=_assign({},fiber.memoizedProps);scheduleUpdateOnFiber(fiber,SyncLane,NoTimestamp);}};overrideHookStateDeletePath=function overrideHookStateDeletePath(fiber,id,path){var hook=findHook(fiber,id);if(hook!==null){var newState=copyWithDelete(hook.memoizedState,path);hook.memoizedState=newState;hook.baseState=newState;// We aren't actually adding an update to the queue,
// because there is no update we can add for useReducer hooks that won't trigger an error.
// (There's no appropriate action type for DevTools overrides.)
// As a result though, React will see the scheduled update as a noop and bailout.
// Shallow cloning props works as a workaround for now to bypass the bailout check.
fiber.memoizedProps=_assign({},fiber.memoizedProps);scheduleUpdateOnFiber(fiber,SyncLane,NoTimestamp);}};overrideHookStateRenamePath=function overrideHookStateRenamePath(fiber,id,oldPath,newPath){var hook=findHook(fiber,id);if(hook!==null){var newState=copyWithRename(hook.memoizedState,oldPath,newPath);hook.memoizedState=newState;hook.baseState=newState;// We aren't actually adding an update to the queue,
// because there is no update we can add for useReducer hooks that won't trigger an error.
// (There's no appropriate action type for DevTools overrides.)
// As a result though, React will see the scheduled update as a noop and bailout.
// Shallow cloning props works as a workaround for now to bypass the bailout check.
fiber.memoizedProps=_assign({},fiber.memoizedProps);scheduleUpdateOnFiber(fiber,SyncLane,NoTimestamp);}};// Support DevTools props for function components, forwardRef, memo, host components, etc.
overrideProps=function overrideProps(fiber,path,value){fiber.pendingProps=copyWithSet(fiber.memoizedProps,path,value);if(fiber.alternate){fiber.alternate.pendingProps=fiber.pendingProps;}scheduleUpdateOnFiber(fiber,SyncLane,NoTimestamp);};overridePropsDeletePath=function overridePropsDeletePath(fiber,path){fiber.pendingProps=copyWithDelete(fiber.memoizedProps,path);if(fiber.alternate){fiber.alternate.pendingProps=fiber.pendingProps;}scheduleUpdateOnFiber(fiber,SyncLane,NoTimestamp);};overridePropsRenamePath=function overridePropsRenamePath(fiber,oldPath,newPath){fiber.pendingProps=copyWithRename(fiber.memoizedProps,oldPath,newPath);if(fiber.alternate){fiber.alternate.pendingProps=fiber.pendingProps;}scheduleUpdateOnFiber(fiber,SyncLane,NoTimestamp);};scheduleUpdate=function scheduleUpdate(fiber){scheduleUpdateOnFiber(fiber,SyncLane,NoTimestamp);};setSuspenseHandler=function setSuspenseHandler(newShouldSuspendImpl){shouldSuspendImpl=newShouldSuspendImpl;};}function findHostInstanceByFiber(fiber){var hostFiber=findCurrentHostFiber(fiber);if(hostFiber===null){return null;}return hostFiber.stateNode;}function emptyFindFiberByHostInstance(instance){return null;}function getCurrentFiberForDevTools(){return current;}function injectIntoDevTools(devToolsConfig){var findFiberByHostInstance=devToolsConfig.findFiberByHostInstance;var ReactCurrentDispatcher=ReactSharedInternals.ReactCurrentDispatcher;return injectInternals({bundleType:devToolsConfig.bundleType,version:devToolsConfig.version,rendererPackageName:devToolsConfig.rendererPackageName,rendererConfig:devToolsConfig.rendererConfig,overrideHookState:overrideHookState,overrideHookStateDeletePath:overrideHookStateDeletePath,overrideHookStateRenamePath:overrideHookStateRenamePath,overrideProps:overrideProps,overridePropsDeletePath:overridePropsDeletePath,overridePropsRenamePath:overridePropsRenamePath,setSuspenseHandler:setSuspenseHandler,scheduleUpdate:scheduleUpdate,currentDispatcherRef:ReactCurrentDispatcher,findHostInstanceByFiber:findHostInstanceByFiber,findFiberByHostInstance:findFiberByHostInstance||emptyFindFiberByHostInstance,// React Refresh
findHostInstancesForRefresh:findHostInstancesForRefresh,scheduleRefresh:scheduleRefresh,scheduleRoot:scheduleRoot,setRefreshHandler:setRefreshHandler,// Enables DevTools to append owner stacks to error messages in DEV mode.
getCurrentFiber:getCurrentFiberForDevTools});}function ReactDOMRoot(container,options){this._internalRoot=createRootImpl(container,ConcurrentRoot,options);}function ReactDOMBlockingRoot(container,tag,options){this._internalRoot=createRootImpl(container,tag,options);}ReactDOMRoot.prototype.render=ReactDOMBlockingRoot.prototype.render=function(children){var root=this._internalRoot;{if(typeof arguments[1]==='function'){error('render(...): does not support the second callback argument. '+'To execute a side effect after rendering, declare it in a component body with useEffect().');}var container=root.containerInfo;if(container.nodeType!==COMMENT_NODE){var hostInstance=findHostInstanceWithNoPortals(root.current);if(hostInstance){if(hostInstance.parentNode!==container){error('render(...): It looks like the React-rendered content of the '+'root container was removed without using React. This is not '+'supported and will cause errors. Instead, call '+"root.unmount() to empty a root's container.");}}}}updateContainer(children,root,null,null);};ReactDOMRoot.prototype.unmount=ReactDOMBlockingRoot.prototype.unmount=function(){{if(typeof arguments[0]==='function'){error('unmount(...): does not support a callback argument. '+'To execute a side effect after rendering, declare it in a component body with useEffect().');}}var root=this._internalRoot;var container=root.containerInfo;updateContainer(null,root,null,function(){unmarkContainerAsRoot(container);});};function createRootImpl(container,tag,options){// Tag is either LegacyRoot or Concurrent Root
var hydrate=options!=null&&options.hydrate===true;var hydrationCallbacks=options!=null&&options.hydrationOptions||null;var mutableSources=options!=null&&options.hydrationOptions!=null&&options.hydrationOptions.mutableSources||null;var root=createContainer(container,tag,hydrate);markContainerAsRoot(root.current,container);var containerNodeType=container.nodeType;{var rootContainerElement=container.nodeType===COMMENT_NODE?container.parentNode:container;listenToAllSupportedEvents(rootContainerElement);}if(mutableSources){for(var i=0;i<mutableSources.length;i++){var mutableSource=mutableSources[i];registerMutableSourceForHydration(root,mutableSource);}}return root;}function createLegacyRoot(container,options){return new ReactDOMBlockingRoot(container,LegacyRoot,options);}function isValidContainer(node){return !!(node&&(node.nodeType===ELEMENT_NODE||node.nodeType===DOCUMENT_NODE||node.nodeType===DOCUMENT_FRAGMENT_NODE||node.nodeType===COMMENT_NODE&&node.nodeValue===' react-mount-point-unstable '));}var ReactCurrentOwner$3=ReactSharedInternals.ReactCurrentOwner;var topLevelUpdateWarnings;var warnedAboutHydrateAPI=false;{topLevelUpdateWarnings=function topLevelUpdateWarnings(container){if(container._reactRootContainer&&container.nodeType!==COMMENT_NODE){var hostInstance=findHostInstanceWithNoPortals(container._reactRootContainer._internalRoot.current);if(hostInstance){if(hostInstance.parentNode!==container){error('render(...): It looks like the React-rendered content of this '+'container was removed without using React. This is not '+'supported and will cause errors. Instead, call '+'ReactDOM.unmountComponentAtNode to empty a container.');}}}var isRootRenderedBySomeReact=!!container._reactRootContainer;var rootEl=getReactRootElementInContainer(container);var hasNonRootReactChild=!!(rootEl&&getInstanceFromNode(rootEl));if(hasNonRootReactChild&&!isRootRenderedBySomeReact){error('render(...): Replacing React-rendered children with a new root '+'component. If you intended to update the children of this node, '+'you should instead have the existing children update their state '+'and render the new components instead of calling ReactDOM.render.');}if(container.nodeType===ELEMENT_NODE&&container.tagName&&container.tagName.toUpperCase()==='BODY'){error('render(): Rendering components directly into document.body is '+'discouraged, since its children are often manipulated by third-party '+'scripts and browser extensions. This may lead to subtle '+'reconciliation issues. Try rendering into a container element created '+'for your app.');}};}function getReactRootElementInContainer(container){if(!container){return null;}if(container.nodeType===DOCUMENT_NODE){return container.documentElement;}else {return container.firstChild;}}function shouldHydrateDueToLegacyHeuristic(container){var rootElement=getReactRootElementInContainer(container);return !!(rootElement&&rootElement.nodeType===ELEMENT_NODE&&rootElement.hasAttribute(ROOT_ATTRIBUTE_NAME));}function legacyCreateRootFromDOMContainer(container,forceHydrate){var shouldHydrate=forceHydrate||shouldHydrateDueToLegacyHeuristic(container);// First clear any existing content.
if(!shouldHydrate){var warned=false;var rootSibling;while(rootSibling=container.lastChild){{if(!warned&&rootSibling.nodeType===ELEMENT_NODE&&rootSibling.hasAttribute(ROOT_ATTRIBUTE_NAME)){warned=true;error('render(): Target node has markup rendered by React, but there '+'are unrelated nodes as well. This is most commonly caused by '+'white-space inserted around server-rendered markup.');}}container.removeChild(rootSibling);}}{if(shouldHydrate&&!forceHydrate&&!warnedAboutHydrateAPI){warnedAboutHydrateAPI=true;warn('render(): Calling ReactDOM.render() to hydrate server-rendered markup '+'will stop working in React v18. Replace the ReactDOM.render() call '+'with ReactDOM.hydrate() if you want React to attach to the server HTML.');}}return createLegacyRoot(container,shouldHydrate?{hydrate:true}:undefined);}function warnOnInvalidCallback$1(callback,callerName){{if(callback!==null&&typeof callback!=='function'){error('%s(...): Expected the last optional `callback` argument to be a '+'function. Instead received: %s.',callerName,callback);}}}function legacyRenderSubtreeIntoContainer(parentComponent,children,container,forceHydrate,callback){{topLevelUpdateWarnings(container);warnOnInvalidCallback$1(callback===undefined?null:callback,'render');}// TODO: Without `any` type, Flow says "Property cannot be accessed on any
// member of intersection type." Whyyyyyy.
var root=container._reactRootContainer;var fiberRoot;if(!root){// Initial mount
root=container._reactRootContainer=legacyCreateRootFromDOMContainer(container,forceHydrate);fiberRoot=root._internalRoot;if(typeof callback==='function'){var originalCallback=callback;callback=function callback(){var instance=getPublicRootInstance(fiberRoot);originalCallback.call(instance);};}// Initial mount should not be batched.
unbatchedUpdates(function(){updateContainer(children,fiberRoot,parentComponent,callback);});}else {fiberRoot=root._internalRoot;if(typeof callback==='function'){var _originalCallback=callback;callback=function callback(){var instance=getPublicRootInstance(fiberRoot);_originalCallback.call(instance);};}// Update
updateContainer(children,fiberRoot,parentComponent,callback);}return getPublicRootInstance(fiberRoot);}function findDOMNode(componentOrElement){{var owner=ReactCurrentOwner$3.current;if(owner!==null&&owner.stateNode!==null){var warnedAboutRefsInRender=owner.stateNode._warnedAboutRefsInRender;if(!warnedAboutRefsInRender){error('%s is accessing findDOMNode inside its render(). '+'render() should be a pure function of props and state. It should '+'never access something that requires stale data from the previous '+'render, such as refs. Move this logic to componentDidMount and '+'componentDidUpdate instead.',getComponentName(owner.type)||'A component');}owner.stateNode._warnedAboutRefsInRender=true;}}if(componentOrElement==null){return null;}if(componentOrElement.nodeType===ELEMENT_NODE){return componentOrElement;}{return findHostInstanceWithWarning(componentOrElement,'findDOMNode');}}function hydrate(element,container,callback){if(!isValidContainer(container)){{throw Error("Target container is not a DOM element.");}}{var isModernRoot=isContainerMarkedAsRoot(container)&&container._reactRootContainer===undefined;if(isModernRoot){error('You are calling ReactDOM.hydrate() on a container that was previously '+'passed to ReactDOM.createRoot(). This is not supported. '+'Did you mean to call createRoot(container, {hydrate: true}).render(element)?');}}// TODO: throw or warn if we couldn't hydrate?
return legacyRenderSubtreeIntoContainer(null,element,container,true,callback);}function render(element,container,callback){if(!isValidContainer(container)){{throw Error("Target container is not a DOM element.");}}{var isModernRoot=isContainerMarkedAsRoot(container)&&container._reactRootContainer===undefined;if(isModernRoot){error('You are calling ReactDOM.render() on a container that was previously '+'passed to ReactDOM.createRoot(). This is not supported. '+'Did you mean to call root.render(element)?');}}return legacyRenderSubtreeIntoContainer(null,element,container,false,callback);}function unstable_renderSubtreeIntoContainer(parentComponent,element,containerNode,callback){if(!isValidContainer(containerNode)){{throw Error("Target container is not a DOM element.");}}if(!(parentComponent!=null&&has(parentComponent))){{throw Error("parentComponent must be a valid React Component");}}return legacyRenderSubtreeIntoContainer(parentComponent,element,containerNode,false,callback);}function unmountComponentAtNode(container){if(!isValidContainer(container)){{throw Error("unmountComponentAtNode(...): Target container is not a DOM element.");}}{var isModernRoot=isContainerMarkedAsRoot(container)&&container._reactRootContainer===undefined;if(isModernRoot){error('You are calling ReactDOM.unmountComponentAtNode() on a container that was previously '+'passed to ReactDOM.createRoot(). This is not supported. Did you mean to call root.unmount()?');}}if(container._reactRootContainer){{var rootEl=getReactRootElementInContainer(container);var renderedByDifferentReact=rootEl&&!getInstanceFromNode(rootEl);if(renderedByDifferentReact){error("unmountComponentAtNode(): The node you're attempting to unmount "+'was rendered by another copy of React.');}}// Unmount should not be batched.
unbatchedUpdates(function(){legacyRenderSubtreeIntoContainer(null,null,container,false,function(){// $FlowFixMe This should probably use `delete container._reactRootContainer`
container._reactRootContainer=null;unmarkContainerAsRoot(container);});});// If you call unmountComponentAtNode twice in quick succession, you'll
// get `true` twice. That's probably fine?
return true;}else {{var _rootEl=getReactRootElementInContainer(container);var hasNonRootReactChild=!!(_rootEl&&getInstanceFromNode(_rootEl));// Check if the container itself is a React root node.
var isContainerReactRoot=container.nodeType===ELEMENT_NODE&&isValidContainer(container.parentNode)&&!!container.parentNode._reactRootContainer;if(hasNonRootReactChild){error("unmountComponentAtNode(): The node you're attempting to unmount "+'was rendered by React and is not a top-level container. %s',isContainerReactRoot?'You may have accidentally passed in a React root node instead '+'of its container.':'Instead, have the parent component update its state and '+'rerender in order to remove this component.');}}return false;}}setAttemptUserBlockingHydration(attemptUserBlockingHydration$1);setAttemptContinuousHydration(attemptContinuousHydration$1);setAttemptHydrationAtCurrentPriority(attemptHydrationAtCurrentPriority$1);setAttemptHydrationAtPriority(runWithPriority$2);var didWarnAboutUnstableCreatePortal=false;{if(typeof Map!=='function'||// $FlowIssue Flow incorrectly thinks Map has no prototype
Map.prototype==null||typeof Map.prototype.forEach!=='function'||typeof Set!=='function'||// $FlowIssue Flow incorrectly thinks Set has no prototype
Set.prototype==null||typeof Set.prototype.clear!=='function'||typeof Set.prototype.forEach!=='function'){error('React depends on Map and Set built-in types. Make sure that you load a '+'polyfill in older browsers. https://reactjs.org/link/react-polyfills');}}setRestoreImplementation(restoreControlledState$3);setBatchingImplementation(batchedUpdates$1,discreteUpdates$1,flushDiscreteUpdates,batchedEventUpdates$1);function createPortal$1(children,container){var key=arguments.length>2&&arguments[2]!==undefined?arguments[2]:null;if(!isValidContainer(container)){{throw Error("Target container is not a DOM element.");}}// TODO: pass ReactDOM portal implementation as third argument
// $FlowFixMe The Flow type is opaque but there's no way to actually create it.
return createPortal(children,container,null,key);}function renderSubtreeIntoContainer(parentComponent,element,containerNode,callback){return unstable_renderSubtreeIntoContainer(parentComponent,element,containerNode,callback);}function unstable_createPortal(children,container){var key=arguments.length>2&&arguments[2]!==undefined?arguments[2]:null;{if(!didWarnAboutUnstableCreatePortal){didWarnAboutUnstableCreatePortal=true;warn('The ReactDOM.unstable_createPortal() alias has been deprecated, '+'and will be removed in React 18+. Update your code to use '+'ReactDOM.createPortal() instead. It has the exact same API, '+'but without the "unstable_" prefix.');}}return createPortal$1(children,container,key);}var Internals={// Keep in sync with ReactTestUtils.js, and ReactTestUtilsAct.js.
// This is an array for better minification.
Events:[getInstanceFromNode,getNodeFromInstance,getFiberCurrentPropsFromNode,enqueueStateRestore,restoreStateIfNeeded,flushPassiveEffects,// TODO: This is related to `act`, not events. Move to separate key?
IsThisRendererActing]};var foundDevTools=injectIntoDevTools({findFiberByHostInstance:getClosestInstanceFromNode,bundleType:1,version:ReactVersion,rendererPackageName:'react-dom'});{if(!foundDevTools&&canUseDOM&&window.top===window.self){// If we're in Chrome or Firefox, provide a download link if not installed.
if(navigator.userAgent.indexOf('Chrome')>-1&&navigator.userAgent.indexOf('Edge')===-1||navigator.userAgent.indexOf('Firefox')>-1){var protocol=window.location.protocol;// Don't warn in exotic cases like chrome-extension://.
if(/^(https?|file):$/.test(protocol)){// eslint-disable-next-line react-internal/no-production-logging
console.info('%cDownload the React DevTools '+'for a better development experience: '+'https://reactjs.org/link/react-devtools'+(protocol==='file:'?'\nYou might need to use a local HTTP server (instead of file://): '+'https://reactjs.org/link/react-devtools-faq':''),'font-weight:bold');}}}}exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Internals;exports.createPortal=createPortal$1;exports.findDOMNode=findDOMNode;exports.flushSync=flushSync;exports.hydrate=hydrate;exports.render=render;exports.unmountComponentAtNode=unmountComponentAtNode;exports.unstable_batchedUpdates=batchedUpdates$1;exports.unstable_createPortal=unstable_createPortal;exports.unstable_renderSubtreeIntoContainer=renderSubtreeIntoContainer;exports.version=ReactVersion;})();}var reactDom_development=/*#__PURE__*/Object.freeze({__proto__:null});var require$$0=/*@__PURE__*/getAugmentedNamespace(reactDom_production_min);var require$$1=/*@__PURE__*/getAugmentedNamespace(reactDom_development);var reactDom=createCommonjsModule(function(module){function checkDCE(){/* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__==='undefined'||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=='function'){return;}if(process.env.NODE_ENV!=='production'){// This branch is unreachable because this function is only called
// in production, but the condition is true only in development.
// Therefore if the branch is still here, dead code elimination wasn't
// properly applied.
// Don't change the message. React DevTools relies on it. Also make sure
// this message doesn't occur elsewhere in this function, or it will cause
// a false positive.
throw new Error('^_^');}try{// Verify that the code above has been dead code eliminated (DCE'd).
__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);}catch(err){// DevTools shouldn't crash React, no matter what.
// We should still report in case we break this code.
console.error(err);}}if(process.env.NODE_ENV==='production'){// DCE check should happen before ReactDOM bundle executes so that
// DevTools can report bad minification during injection.
checkDCE();module.exports=require$$0;}else {module.exports=require$$1;}});// https://github.com/davidtheclark/tabbable/blob/master/src/index.js
var candidateSelectors=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'];var candidateSelector=candidateSelectors.join(",");var matches=typeof Element==="undefined"?function(){return false;}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector;function getHTMLElements(root,selector){var result=[];var _iterator=_createForOfIteratorHelper(root.querySelectorAll(selector)),_step2;try{for(_iterator.s();!(_step2=_iterator.n()).done;){var el=_step2.value;if(el instanceof HTMLElement){result.push(el);}}}catch(err){_iterator.e(err);}finally{_iterator.f();}return result;}function tabbable(el,optionalOptions){var options=optionalOptions||{};var regularTabbables=[];var orderedTabbables=[];var candidates=getHTMLElements(el,candidateSelector);if(options.includeContainer){if(matches.call(el,candidateSelector)){candidates=Array.prototype.slice.apply(candidates);candidates.unshift(el);}}var candidate;var candidateTabindex;for(var i=0;i<candidates.length;i++){candidate=candidates[i];if(!isNodeMatchingSelectorTabbable(candidate)){continue;}candidateTabindex=getTabindex(candidate);if(candidateTabindex===0){regularTabbables.push(candidate);}else {orderedTabbables.push({documentOrder:i,tabIndex:candidateTabindex,node:candidate});}}var tabbableNodes=orderedTabbables.sort(sortOrderedTabbables).map(function(a){return a.node;}).concat(regularTabbables);return tabbableNodes;}tabbable.isTabbable=isTabbable;tabbable.isFocusable=isFocusable;function isNodeMatchingSelectorTabbable(node){if(!isNodeMatchingSelectorFocusable(node)||isNonTabbableRadio(node)||getTabindex(node)<0){return false;}return true;}function isTabbable(node){if(!node){throw new Error("No node provided");}if(matches.call(node,candidateSelector)===false){return false;}return isNodeMatchingSelectorTabbable(node);}function isNodeMatchingSelectorFocusable(node){if(node.disabled||isHiddenInput(node)||isHidden(node)){return false;}return true;}var focusableCandidateSelector=candidateSelectors.concat("iframe").join(",");function isFocusable(node){if(!node){throw new Error("No node provided");}// Added this to make TypeScript work.
if(!(node instanceof HTMLElement))return false;if(matches.call(node,focusableCandidateSelector)===false){return false;}return isNodeMatchingSelectorFocusable(node);}function getTabindex(node){var tabindexAttr=parseInt(node.getAttribute("tabindex")||"",10);if(!isNaN(tabindexAttr)){return tabindexAttr;}// Browsers do not return `tabIndex` correctly for contentEditable nodes;
// so if they don't have a tabindex attribute specifically set, assume it's 0.
if(isContentEditable(node)){return 0;}return node.tabIndex;}function sortOrderedTabbables(a,b){return a.tabIndex===b.tabIndex?a.documentOrder-b.documentOrder:a.tabIndex-b.tabIndex;}function isContentEditable(node){return node.contentEditable==="true";}function isInput(node){return node.tagName==="INPUT";}function isHiddenInput(node){return isInput(node)&&node.type==="hidden";}function isRadio(node){return isInput(node)&&node.type==="radio";}function isNonTabbableRadio(node){return isRadio(node)&&!isTabbableRadio(node);}function getCheckedRadio(nodes){for(var i=0;i<nodes.length;i++){if(nodes[i].checked){return nodes[i];}}return undefined;}function isTabbableRadio(node){if(!node.name){return true;}if(!node.ownerDocument){// Need this for TypeScript to be OK with the rest of this code.
// I guess we'll just assume that anything without an owner
// document isn't tabbable...
return false;}// This won't account for the edge case where you have radio groups with the same
// in separate forms on the same page.
var radioSet=Array.from(node.ownerDocument.querySelectorAll('input[type="radio"][name="'+node.name+'"]'));var checked=getCheckedRadio(radioSet);return !checked||checked===node;}function isHidden(node){// offsetParent being null will allow detecting cases where an element is invisible or inside an invisible element,
// as long as the element does not use position: fixed. For them, their visibility has to be checked directly as well.
return node.offsetParent===null||getComputedStyle(node).visibility==="hidden";}// https://github.com/davidtheclark/focus-trap/blob/master/index.js
var activeFocusDelay;var activeFocusTraps=function(){var trapQueue=[];return {activateTrap:function activateTrap(trap){if(trapQueue.length>0){var activeTrap=trapQueue[trapQueue.length-1];if(activeTrap!==trap){activeTrap.pause();}}var trapIndex=trapQueue.indexOf(trap);if(trapIndex===-1){trapQueue.push(trap);}else {// move this existing trap to the front of the queue
trapQueue.splice(trapIndex,1);trapQueue.push(trap);}},deactivateTrap:function deactivateTrap(trap){var trapIndex=trapQueue.indexOf(trap);if(trapIndex!==-1){trapQueue.splice(trapIndex,1);}if(trapQueue.length>0){trapQueue[trapQueue.length-1].unpause();}}};}();function getHTMLElement(doc,selector){var el=doc.querySelector(selector);if(!(el&&el instanceof HTMLElement)){throw new Error("No HTML element matches \"".concat(selector,"\"!"));}return el;}function createFocusTrap(element,userOptions){var doc=document;var container=typeof element==="string"?getHTMLElement(doc,element):element;var config=_objectSpread2$1({returnFocusOnDeactivate:true,escapeDeactivates:true},userOptions);var state={firstTabbableNode:null,lastTabbableNode:null,nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:false,paused:false};var trap={activate:activate,deactivate:deactivate,pause:pause,unpause:unpause};return trap;function activate(activateOptions){if(state.active)return;updateTabbableNodes();state.active=true;state.paused=false;state.nodeFocusedBeforeActivation=doc.activeElement;var onActivate=activateOptions&&activateOptions.onActivate?activateOptions.onActivate:config.onActivate;if(onActivate){onActivate();}addListeners();return trap;}function deactivate(deactivateOptions){if(!state.active)return;clearTimeout(activeFocusDelay);removeListeners();state.active=false;state.paused=false;activeFocusTraps.deactivateTrap(trap);var onDeactivate=deactivateOptions&&deactivateOptions.onDeactivate!==undefined?deactivateOptions.onDeactivate:config.onDeactivate;if(onDeactivate){onDeactivate();}var returnFocus=deactivateOptions&&deactivateOptions.returnFocus!==undefined?deactivateOptions.returnFocus:config.returnFocusOnDeactivate;if(returnFocus){delay(function(){tryFocus(getReturnFocusNode(state.nodeFocusedBeforeActivation));});}return trap;}function containerContains(el){if(el&&el instanceof Node)return container.contains(el);return false;}function pause(){if(state.paused||!state.active)return;state.paused=true;removeListeners();}function unpause(){if(!state.paused||!state.active)return;state.paused=false;updateTabbableNodes();addListeners();}function addListeners(){if(!state.active)return;// There can be only one listening focus trap at a time
activeFocusTraps.activateTrap(trap);// Delay ensures that the focused element doesn't capture the event
// that caused the focus trap activation.
activeFocusDelay=delay(function(){tryFocus(getInitialFocusNode());});doc.addEventListener("focusin",checkFocusIn,true);doc.addEventListener("mousedown",checkPointerDown,{capture:true,passive:false});doc.addEventListener("touchstart",checkPointerDown,{capture:true,passive:false});doc.addEventListener("click",checkClick,{capture:true,passive:false});doc.addEventListener("keydown",checkKey,{capture:true,passive:false});return trap;}function removeListeners(){if(!state.active)return;doc.removeEventListener("focusin",checkFocusIn,true);doc.removeEventListener("mousedown",checkPointerDown,true);doc.removeEventListener("touchstart",checkPointerDown,true);doc.removeEventListener("click",checkClick,true);doc.removeEventListener("keydown",checkKey,true);return trap;}function getNodeForOption(optionName){var optionValue=config[optionName];var node=optionValue;if(!optionValue){return null;}if(typeof optionValue==="string"){node=doc.querySelector(optionValue);if(!node){throw new Error("`"+optionName+"` refers to no known node");}}if(typeof optionValue==="function"){node=optionValue();if(!node){throw new Error("`"+optionName+"` did not return a node");}}return node;}function getInitialFocusNode(){var node;if(getNodeForOption("initialFocus")!==null){node=getNodeForOption("initialFocus");}else if(container.contains(doc.activeElement)){node=doc.activeElement;}else {node=state.firstTabbableNode||getNodeForOption("fallbackFocus");}if(!node){throw new Error("Your focus-trap needs to have at least one focusable element");}return node;}function getReturnFocusNode(previousActiveElement){var node=getNodeForOption("setReturnFocus");return node?node:previousActiveElement;}// This needs to be done on mousedown and touchstart instead of click
// so that it precedes the focus event.
function checkPointerDown(e){if(containerContains(e.target))return;if(config.clickOutsideDeactivates){deactivate({returnFocus:!tabbable.isFocusable(e.target)});return;}// This is needed for mobile devices.
// (If we'll only let `click` events through,
// then on mobile they will be blocked anyways if `touchstart` is blocked.)
if(config.allowOutsideClick&&config.allowOutsideClick(e)){return;}e.preventDefault();}// In case focus escapes the trap for some strange reason, pull it back in.
function checkFocusIn(e){// In Firefox when you Tab out of an iframe the Document is briefly focused.
if(containerContains(e.target)||e.target instanceof Document){return;}e.stopImmediatePropagation();tryFocus(state.mostRecentlyFocusedNode||getInitialFocusNode());}function checkKey(e){if(config.escapeDeactivates!==false&&isEscapeEvent(e)){e.preventDefault();deactivate();return;}if(isTabEvent(e)){checkTab(e);return;}}// Hijack Tab events on the first and last focusable nodes of the trap,
// in order to prevent focus from escaping. If it escapes for even a
// moment it can end up scrolling the page and causing confusion so we
// kind of need to capture the action at the keydown phase.
function checkTab(e){updateTabbableNodes();if(e.shiftKey&&e.target===state.firstTabbableNode){e.preventDefault();tryFocus(state.lastTabbableNode);return;}if(!e.shiftKey&&e.target===state.lastTabbableNode){e.preventDefault();tryFocus(state.firstTabbableNode);return;}}function checkClick(e){if(config.clickOutsideDeactivates)return;if(containerContains(e.target))return;if(config.allowOutsideClick&&config.allowOutsideClick(e)){return;}e.preventDefault();e.stopImmediatePropagation();}function updateTabbableNodes(){var tabbableNodes=tabbable(container);state.firstTabbableNode=tabbableNodes[0]||getInitialFocusNode();state.lastTabbableNode=tabbableNodes[tabbableNodes.length-1]||getInitialFocusNode();}function tryFocus(node){if(node===doc.activeElement)return;if(!node||!node.focus){tryFocus(getInitialFocusNode());return;}node.focus({preventScroll:userOptions.preventScroll});state.mostRecentlyFocusedNode=node;if(isSelectableInput(node)){node.select();}}}function isSelectableInput(node){return node.tagName&&node.tagName.toLowerCase()==="input"&&typeof node.select==="function";}function isEscapeEvent(e){return e.key==="Escape"||e.key==="Esc"||e.keyCode===27;}function isTabEvent(e){return e.key==="Tab"||e.keyCode===9;}function delay(fn){return window.setTimeout(fn,0);}// https://github.com/davidtheclark/focus-trap-react/blob/master/src/focus-trap-react.js
function isFocusableElement(el){// This isn't actually a great way of testing this, but we want to
// preserve the original behavior while also satisfying TypeScript.
return el.focus;}var ReactFocusTrap=/*#__PURE__*/function(_React$Component){_inherits(ReactFocusTrap,_React$Component);var _super=_createSuper(ReactFocusTrap);function ReactFocusTrap(props){var _this;_classCallCheck(this,ReactFocusTrap);_this=_super.call(this,props);_this.setFocusTrapElement=function(element){_this.focusTrapElement=element;};if(typeof document!=="undefined"){_this.previouslyFocusedElement=document.activeElement;}return _this;}_createClass(ReactFocusTrap,[{key:"componentDidMount",value:function componentDidMount(){// We need to hijack the returnFocusOnDeactivate option,
// because React can move focus into the element before we arrived at
// this lifecycle hook (e.g. with autoFocus inputs). So the component
// captures the previouslyFocusedElement in componentWillMount,
// then (optionally) returns focus to it in componentWillUnmount.
var specifiedFocusTrapOptions=this.props.focusTrapOptions;var tailoredFocusTrapOptions={returnFocusOnDeactivate:false};for(var optionName in specifiedFocusTrapOptions){if(!specifiedFocusTrapOptions.hasOwnProperty(optionName))continue;if(optionName==="returnFocusOnDeactivate")continue;tailoredFocusTrapOptions[optionName]=specifiedFocusTrapOptions[optionName];}var focusTrapElementDOMNode=reactDom.findDOMNode(this.focusTrapElement);if(!(focusTrapElementDOMNode instanceof HTMLElement)){throw new Error("Focus trap element DOM node is not an HTML element!");}this.focusTrap=this.props._createFocusTrap(focusTrapElementDOMNode,tailoredFocusTrapOptions);if(this.props.active){this.focusTrap.activate();}if(this.props.paused){this.focusTrap.pause();}}},{key:"componentDidUpdate",value:function componentDidUpdate(prevProps){if(!this.focusTrap){throw new Error("Assertion failure!");}if(prevProps.active&&!this.props.active){var returnFocusOnDeactivate=this.props.focusTrapOptions.returnFocusOnDeactivate;var returnFocus=returnFocusOnDeactivate||false;var config={returnFocus:returnFocus};this.focusTrap.deactivate(config);}else if(!prevProps.active&&this.props.active){this.focusTrap.activate();}if(prevProps.paused&&!this.props.paused){this.focusTrap.unpause();}else if(!prevProps.paused&&this.props.paused){this.focusTrap.pause();}}},{key:"componentWillUnmount",value:function componentWillUnmount(){if(!this.focusTrap){throw new Error("Assertion failure!");}this.focusTrap.deactivate();if(this.props.focusTrapOptions.returnFocusOnDeactivate!==false&&this.previouslyFocusedElement&&isFocusableElement(this.previouslyFocusedElement)){this.previouslyFocusedElement.focus();}}},{key:"render",value:function render(){var _this2=this;var child=React__default['default'].Children.only(this.props.children);var composedRefCallback=function composedRefCallback(element){_this2.setFocusTrapElement(element);if(typeof child.ref==="function"){child.ref(element);}};var childWithRef=/*#__PURE__*/React__default['default'].cloneElement(child,{ref:composedRefCallback});return childWithRef;}}]);return ReactFocusTrap;}(React__default['default'].Component);ReactFocusTrap.defaultProps={active:true,paused:false,focusTrapOptions:{},_createFocusTrap:createFocusTrap};// https://github.com/davidtheclark/react-displace/blob/master/src/displace.js
function displace(WrappedComponent,optionalOptions){var options=optionalOptions||{};var Displaced=/*#__PURE__*/function(_React$Component2){_inherits(Displaced,_React$Component2);var _super2=_createSuper(Displaced);function Displaced(){_classCallCheck(this,Displaced);return _super2.apply(this,arguments);}_createClass(Displaced,[{key:"componentDidMount",value:function componentDidMount(){this.container=function(){var renderTo=options.renderTo;if(!renderTo){var result=document.createElement("div");document.body.appendChild(result);return result;}else if(typeof renderTo==="string"){var el=document.querySelector(renderTo);if(!el){throw new Error("No element matches \"".concat(renderTo,"\"!"));}return el;}else {return renderTo;}}();this.forceUpdate();}},{key:"componentWillUnmount",value:function componentWillUnmount(){if(!options.renderTo&&this.container&&this.container.parentNode){this.container.parentNode.removeChild(this.container);}}},{key:"render",value:function render(){if(this.props.mounted===false)return null;if(this.container){return reactDom.createPortal(/*#__PURE__*/React__default['default'].createElement(WrappedComponent,this.props,this.props.children),this.container);}return false;}}]);return Displaced;}(React__default['default'].Component);return Displaced;}// https://github.com/davidtheclark/react-aria-modal/blob/master/src/react-aria-modal.js
var Modal=/*#__PURE__*/function(_React$Component3){_inherits(Modal,_React$Component3);var _super3=_createSuper(Modal);function Modal(props){var _this3;_classCallCheck(this,Modal);_this3=_super3.call(this,props);_this3.getApplicationNode=function(){if(_this3.props.getApplicationNode)return _this3.props.getApplicationNode();return _this3.props.applicationNode;};_this3.checkUnderlayClick=function(event){if(_this3.dialogNode&&event.target instanceof Node&&_this3.dialogNode.contains(event.target)||// If the click is on the scrollbar we don't want to close the modal.
event.target instanceof Element&&event.target.ownerDocument&&(event.pageX>event.target.ownerDocument.documentElement.offsetWidth||event.pageY>event.target.ownerDocument.documentElement.offsetHeight))return;_this3.exit(event);};_this3.checkDocumentKeyDown=function(event){if(_this3.props.escapeExits&&(event.key==="Escape"||event.key==="Esc"||event.keyCode===27)){_this3.exit(event);}};_this3.exit=function(event){if(_this3.props.onExit){_this3.props.onExit(event);}};if(!_this3.props.titleText&&!_this3.props.titleId){throw new Error("react-aria-modal instances should have a `titleText` or `titleId`");}return _this3;}_createClass(Modal,[{key:"componentDidMount",value:function componentDidMount(){if(this.props.onEnter){this.props.onEnter();}// Timeout to ensure this happens *after* focus has moved
var applicationNode=this.getApplicationNode();setTimeout(function(){if(applicationNode&&applicationNode instanceof Element){applicationNode.setAttribute("aria-hidden","true");}},0);if(this.props.escapeExits){this.addKeyDownListener();}if(this.props.scrollDisabled){on();}}},{key:"componentDidUpdate",value:function componentDidUpdate(prevProps){if(prevProps.scrollDisabled&&!this.props.scrollDisabled){off();}else if(!prevProps.scrollDisabled&&this.props.scrollDisabled){on();}if(this.props.escapeExits&&!prevProps.escapeExits){this.addKeyDownListener();}else if(!this.props.escapeExits&&prevProps.escapeExits){this.removeKeyDownListener();}}},{key:"componentWillUnmount",value:function componentWillUnmount(){if(this.props.scrollDisabled){off();}var applicationNode=this.getApplicationNode();if(applicationNode&&applicationNode instanceof Element){applicationNode.setAttribute("aria-hidden","false");}this.removeKeyDownListener();}},{key:"addKeyDownListener",value:function addKeyDownListener(){var _this4=this;setTimeout(function(){document.addEventListener("keydown",_this4.checkDocumentKeyDown);});}},{key:"removeKeyDownListener",value:function removeKeyDownListener(){var _this5=this;setTimeout(function(){document.removeEventListener("keydown",_this5.checkDocumentKeyDown);});}},{key:"render",value:function render(){var _this6=this;var props=this.props;var style={};if(props.includeDefaultStyles){style={position:"fixed",top:0,left:0,width:"100%",height:"100%",zIndex:1050,overflowX:"hidden",overflowY:"auto",WebkitOverflowScrolling:"touch",textAlign:"center"};if(props.underlayColor){style.background=props.underlayColor;}if(props.underlayClickExits){style.cursor="pointer";}}if(props.underlayStyle){for(var key in props.underlayStyle){if(!props.underlayStyle.hasOwnProperty(key))continue;style[key]=props.underlayStyle[key];}}var underlayProps={className:props.underlayClass,style:style};if(props.underlayClickExits){underlayProps.onMouseDown=this.checkUnderlayClick;}for(var prop in this.props.underlayProps){underlayProps[prop]=this.props.underlayProps[prop];}var verticalCenterStyle={};if(props.includeDefaultStyles){verticalCenterStyle={display:"inline-block",height:"100%",verticalAlign:"middle"};}var dialogStyle={};if(props.includeDefaultStyles){dialogStyle={display:"inline-block",textAlign:"left",top:0,maxWidth:"100%",cursor:"default",outline:props.focusDialog?0:undefined};if(props.verticallyCenter){dialogStyle.verticalAlign="middle";dialogStyle.top=0;}}if(props.dialogStyle){for(var _key3 in props.dialogStyle){if(!props.dialogStyle.hasOwnProperty(_key3))continue;dialogStyle[_key3]=props.dialogStyle[_key3];}}var dialogProps={key:"b",ref:function ref(el){_this6.dialogNode=el;},role:props.alert?"alertdialog":"dialog",id:props.dialogId,className:props.dialogClass,style:dialogStyle};if(props.titleId){dialogProps["aria-labelledby"]=props.titleId;}else if(props.titleText){dialogProps["aria-label"]=props.titleText;}if(props.focusDialog){dialogProps.tabIndex=-1;}// Apply data- and aria- attributes passed as props
for(var _key4 in props){if(/^(data-|aria-)/.test(_key4)){dialogProps[_key4]=props[_key4];}}var childrenArray=[/*#__PURE__*/React__default['default'].createElement("div",Object.assign({},dialogProps),props.children)];if(props.verticallyCenter){childrenArray.unshift(/*#__PURE__*/React__default['default'].createElement("div",{key:"a",style:verticalCenterStyle}));}var focusTrapOptions=props.focusTrapOptions||{};if(props.focusDialog||props.initialFocus){focusTrapOptions.initialFocus=props.focusDialog?"#".concat(this.props.dialogId):props.initialFocus;}focusTrapOptions.escapeDeactivates=props.escapeExits;return/*#__PURE__*/React__default['default'].createElement(ReactFocusTrap,{focusTrapOptions:focusTrapOptions,paused:props.focusTrapPaused},/*#__PURE__*/React__default['default'].createElement("div",Object.assign({},underlayProps),childrenArray));}}]);return Modal;}(React__default['default'].Component);Modal.defaultProps={underlayProps:{},dialogId:"react-aria-modal-dialog",underlayClickExits:true,escapeExits:true,underlayColor:"rgba(0,0,0,0.5)",includeDefaultStyles:true,focusTrapPaused:false,scrollDisabled:true};var AriaModal=displace(Modal);AriaModal.renderTo=function(input){return displace(Modal,{renderTo:input});};var Modal$1=function Modal(_ref){var modalContent=_ref.modalContent,triggerContent=_ref.triggerContent,props=_objectWithoutProperties$3(_ref,["modalContent","triggerContent"]);var _React$useState=React__default['default'].useState(false),_React$useState2=_slicedToArray(_React$useState,2),isOpen=_React$useState2[0],setIsOpen=_React$useState2[1];var _React$useState3=React__default['default'].useState(false),_React$useState4=_slicedToArray(_React$useState3,2),isClosing=_React$useState4[0],setIsClosing=_React$useState4[1];// States for sliders.
var _React$useState5=React__default['default'].useState(props.firstSlide),_React$useState6=_slicedToArray(_React$useState5,2),currentSlide=_React$useState6[0],setCurrentSlide=_React$useState6[1];var _React$useState7=React__default['default'].useState(null),_React$useState8=_slicedToArray(_React$useState7,2),slideDirection=_React$useState8[0],setSlideDirection=_React$useState8[1];React__default['default'].useEffect(function(){if(!props.dialogId){throw new Error('SUI Modal instances should have a `dialogId`');}},[]);var isSlider='object'===_typeof$1(modalContent)&&null!==modalContent;var openModal=function openModal(){return setIsOpen(true);},closeModal=function closeModal(){// Close the modal with the exit animation and reset the slider.
setIsClosing(true);setTimeout(function(){setIsOpen(false);setIsClosing(false);if(isSlider){setSlideDirection(null);setCurrentSlide(props.firstSlide);}},300);},slideTo=function slideTo(slide){var direction=arguments.length>1&&arguments[1]!==undefined?arguments[1]:'left';setCurrentSlide(slide);setSlideDirection(direction);};var _props$getApplication=props.getApplicationNode,getApplicationNode=_props$getApplication===void 0?function(){return document.getElementsByClassName('sui-wrap')[0];}:_props$getApplication;var dialogClass="sui-modal-content sui-content-".concat(isClosing?'fade-out':'fade-in'," ").concat(props.dialogClass||"");var renderContent,modalSize,initialFocus;if(!isSlider){// Not a slider, we can just render the content.
renderContent=modalContent;modalSize=props.size;initialFocus=props.initialFocus||false;}else {// Render the content from the given slides.
renderContent=modalContent[currentSlide].render;initialFocus=modalContent[currentSlide].focus||false;modalSize=modalContent[currentSlide].size;// Add the slide direction class when provided and we're not closing the modal.
if(slideDirection&&!isClosing){dialogClass+="sui-modal-slide sui-active sui-fadein-".concat(slideDirection);}}// Use 'isOpen' as an alias of 'mounted' if not defined.
if('undefined'===typeof props.mounted){props.mounted=isOpen;}var AltModal=props.renderToNode?AriaModal.renderTo(props.renderToNode):AriaModal;return/*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment,null,/*#__PURE__*/React__default['default'].createElement(AltModal,_extends$2({getApplicationNode:getApplicationNode,dialogClass:dialogClass,underlayClass:"sui-modal sui-active sui-modal-".concat(modalSize||'md'," sui-wrap ").concat(props.underlayClass||''),includeDefaultStyles:false,initialFocus:initialFocus},props),renderContent({closeModal:closeModal,slideTo:slideTo})),triggerContent&&triggerContent({openModal:openModal}));};

function _defineProperty$2(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys$2(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2$2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys$2(Object(source), true).forEach(function (key) {
        _defineProperty$2(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$2(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose$4(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties$4(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose$4(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var ButtonIcon = function ButtonIcon(_ref) {
  var label = _ref.label,
      icon = _ref.icon,
      iconSize = _ref.iconSize,
      _ref$design = _ref.design,
      design = _ref$design === void 0 ? "solid" : _ref$design,
      color = _ref.color,
      className = _ref.className,
      loading = _ref.loading,
      props = _objectWithoutProperties$4(_ref, ["label", "icon", "iconSize", "design", "color", "className", "loading"]);

  var loader = /*#__PURE__*/React__default['default'].createElement("span", {
    className: "sui-icon-loader sui-loading",
    style: {
      position: "relative"
    },
    "aria-hidden": "true"
  });
  var content = /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement("span", {
    className: "sui-icon-".concat(icon).concat(iconSize ? ' sui-' + iconSize : ''),
    "aria-hidden": "true"
  }), /*#__PURE__*/React__default['default'].createElement("span", {
    className: "sui-screen-reader-text"
  }, label));
  className = "sui-button-icon ".concat(className || ''); // Set button color.

  switch (color) {
    case "blue":
    case "green":
    case "red":
    case "orange":
    case "purple":
    case "yellow":
    case "white":
      className += " sui-button-" + color;
      break;

    case "gray":
    default:
      className += "";
      break;
  } // Set button style.


  switch (design) {
    case "ghost":
    case "outlined":
      className += " sui-button-" + design;
      break;

    case "solid":
    default:
      className += "";
      break;
  } // Set loading class.


  if (loading) {
    className += " sui-button-onload";
  }

  var htmlTag = props.href ? 'a' : 'button';
  return /*#__PURE__*/React__default['default'].createElement(htmlTag, _objectSpread2$2({
    className: className,
    disabled: props.disabled || loading
  }, props), loading ? loader : content);
};

function _classCallCheck$1(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties$1(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass$1(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties$1(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties$1(Constructor, staticProps);
  return Constructor;
}

function _defineProperty$3(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends$3() {
  _extends$3 = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends$3.apply(this, arguments);
}

function _inherits$1(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf$1(subClass, superClass);
}

function _getPrototypeOf$1(o) {
  _getPrototypeOf$1 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf$1(o);
}

function _setPrototypeOf$1(o, p) {
  _setPrototypeOf$1 = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf$1(o, p);
}

function _isNativeReflectConstruct$1() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _assertThisInitialized$1(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn$1(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized$1(self);
}

function _createSuper$1(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$1();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf$1(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf$1(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn$1(this, result);
  };
}

function _taggedTemplateLiteral$1(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function _templateObject8() {
  var data = _taggedTemplateLiteral$1(["\n\tmin-width: 1px;\n\tflex: 1;\n\t", "\n\tcolor: #17A8E3 !important;\n\tfont-size: 13px !important;\n\tline-height: 18px !important;\n\tfont-weight: 500 !important;\n\tletter-spacing: -0.2px !important;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral$1(["\n\tdisplay: block;\n\t", "\n\n\tp {\n\t\toverflow: hidden;\n\t\tdisplay: -webkit-box;\n\t\t-webkit-box-orient: vertical;\n\t\tmargin: 0 !important;\n\t\tpadding: 0 !important;\n\t\tborder: 0;\n\t\tcolor: #888 !important;\n\t\tfont-size: 13px !important;\n\t\tline-height: 22px !important;\n\t\tletter-spacing: -0.2px;\n\t\t-webkit-line-clamp: ", ";\n\t}\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral$1(["\n\t", "\n\tmargin: 0 !important;\n\tpadding: 0 !important;\n\tborder: 0;\n\tcolor: #888 !important;\n\tfont-size: 13px !important;\n\tline-height: 18px !important;\n\tletter-spacing: -0.2px;\n\n\t", "\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral$1(["\n\toverflow: hidden;\n\tdisplay: -webkit-box !important;\n\t-webkit-box-orient: vertical;\n\t", "\n\tmargin: ", " !important;\n\tpadding: 0 !important;\n\tborder: 0;\n\tfont-size: 13px !important;\n\tline-height: 18px !important;\n\tfont-weight: 500 !important;\n\tletter-spacing: -0.2px;\n\t", "\n\n\t", "\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral$1(["\n\t", "\n\theight: ", ";\n\tmargin: ", ";\n\t", "\n\tdisplay: block;\n\t", "\n\tbackground-color: #FFF;\n\tbackground-image: url(", ");\n\tbackground-size: cover;\n\tbackground-position: center;\n\tbackground-repeat: no-repeat;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$1() {
  var data = _taggedTemplateLiteral$1(["\n\tdisplay: flex;\n\tflex: 0 0 auto;\n\tflex-flow: row wrap;\n\talign-items: center;\n\tmargin-top: 15px;\n"]);

  _templateObject3$1 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$1() {
  var data = _taggedTemplateLiteral$1(["\n\tdisplay: flex;\n\tflex-flow: row wrap;\n\n\t+ div {\n\t\tmargin-top: 20px;\n\t}\n"]);

  _templateObject2$1 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$1() {
  var data = _taggedTemplateLiteral$1(["\n\t", "\n\tcursor: pointer;\n\t", "\n\t", "\n\tpadding: ", ";\n\tborder-radius: 4px;\n\tbackground-color: #fff;\n\t", "\n\ttransition: 0.2s ease all;\n\n\t* {\n\t\tpointer-events: none;\n\t}\n\n\t&:hover,\n\t&:focus {\n\t\t", "\n\n\t\t", "\n\t}\n\n\t", "\n\n\t&:focus {\n\t\toutline: none;\n\t\t", "\n\t}\n\n\t@media ", " {\n\t\t", "\n\t}\n"]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}

var aria = aria || {};
aria.KeyCode = {
  TAB: 9,
  RETURN: 13,
  ESC: 27,
  SPACE: 32,
  PAGE_UP: 33,
  PAGE_DOWN: 34,
  END: 35,
  HOME: 36,
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
  DELETE: 46
};
var screen$1 = {
  mobile: 480,
  tablet: 783,
  laptop: 1200,
  desktop: 1500
};
var device$1 = {
  mobile: "(min-width: ".concat(screen$1.mobile, "px)"),
  tablet: "(min-width: ".concat(screen$1.tablet, "px)"),
  laptop: "(min-width: ".concat(screen$1.laptop, "px)"),
  desktop: "(min-width: ".concat(screen$1.desktop, "px)")
};
var PostWrapper = styled__default['default'].div.attrs(function (props) {
  return {
    tabIndex: 0,
    props: props
  };
})(_templateObject$1(), function (props) {
  return props.banner ? "overflow: hidden;" : "";
}, function (props) {
  return props.banner ? "display: flex;" : "";
}, function (props) {
  return props.banner ? "flex-flow: column nowrap;" : "";
}, function (props) {
  return props.banner ? "20px 20px 30px" : "10px";
}, function (props) {
  return props.banner ? "box-shadow: 0 0 0 1px #E6E6E6;" : "";
}, function (props) {
  return props.banner ? "transform: scale(1.02);" : "background-color: #FAFAFA;";
}, function (props) {
  return props.banner ? "@media ".concat(device$1.tablet, " {\n\t\t\t\ttransform: scale(1.05);\n\t\t\t}") : "";
}, function (props) {
  return props.banner ? "@media ".concat(device$1.tablet, " {\n\t\t\tbox-shadow: 0 2px 7px 0 rgba(0,0,0,0.05);\n\t\t}") : "";
}, function (props) {
  return props.banner ? "box-shadow: 0 2px 7px 0 rgba(0,0,0,0.05), 0 0 2px 0 #17A8E3;" : "";
}, device$1.tablet, function (props) {
  return props.banner ? "min-height: 100%;" : "padding: 15px;";
});
var PostHeader = styled__default['default'].div(_templateObject2$1());
var PostFooter = styled__default['default'].div(_templateObject3$1());
var FeaturedImage = styled__default['default'].div.attrs(function () {
  return {
    tabIndex: "-1",
    "aria-hidden": true
  };
})(_templateObject4(), function (props) {
  return props.banner ? "" : "width: 66px;";
}, function (props) {
  return props.banner ? "140px" : "54px";
}, function (props) {
  return props.banner ? "-20px -20px 20px" : "0 10px 0 0";
}, function (props) {
  return props.banner ? "" : "border-radius: 4px;";
}, function (props) {
  return props.banner ? "flex: 0 0 auto;" : "";
}, function (props) {
  return props.src || "none";
});
var PostTitle = styled__default['default'].h3(_templateObject5(), function (props) {
  return props.banner ? "flex: 1 1 auto;" : "";
}, function (props) {
  return props.banner ? "0 0 10px" : "0";
}, function (props) {
  return props.banner ? "" : "-webkit-line-clamp: 2;";
}, function (props) {
  return props.banner ? "@media ".concat(device$1.tablet, " {\n\t\t\t-webkit-line-clamp: 2;\n\t\t}") : "";
});
var PostTime = styled__default['default'].p(_templateObject6(), function (props) {
  return props.banner ? "flex: 0 0 auto;" : "";
}, function (props) {
  return props.banner ? "* + & {\n\t\t\tmargin-left: 5px !important;\n\t\t}" : "";
});
var Excerpt = styled__default['default'].div(_templateObject7(), function (props) {
  return props.banner ? "flex: 1 1 auto;" : "";
}, function (props) {
  return props.banner ? "3" : "2";
});
var ReadMore = styled__default['default'].p(_templateObject8(), function (props) {
  return props.banner ? "" : "margin: 4px 0 0;";
});

var Post = /*#__PURE__*/function (_Component) {
  _inherits$1(Post, _Component);

  var _super = _createSuper$1(Post);

  function Post(props) {
    var _this;

    _classCallCheck$1(this, Post);

    _this = _super.call(this, props);

    _defineProperty$3(_assertThisInitialized$1(_this), "openLink", function (e) {
      var ref = e.target !== null ? e.target : e.srcElement;

      if (ref) {
        window.open(ref.getAttribute("data-href"), "_blank");
      }
    });

    _defineProperty$3(_assertThisInitialized$1(_this), "handleKeydown", function (e) {
      var key = e.which || e.keyCode;

      switch (key) {
        case aria.KeyCode.RETURN:
          _this.openLink(e);

          break;
      }
    });

    _this.state = {
      media: [],
      error: null,
      isLoaded: false
    };
    _this.openLink = _this.openLink.bind(_assertThisInitialized$1(_this));
    _this.handleKeydown = _this.handleKeydown.bind(_assertThisInitialized$1(_this));
    return _this;
  }

  _createClass$1(Post, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var API_URL = "https://wpmudev.com/blog/wp-json/wp/v2/media/";
      var QUERY_ID = this.props.media; // GET media using fetch.

      fetch(API_URL + QUERY_ID).then(function (response) {
        return response.json();
      }).then(function (data) {
        _this2.setState({
          isLoaded: true,
          media: data.guid.rendered
        });
      }, function (error) {
        _this2.setState({
          isLoaded: true,
          error: error
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          media = _this$state.media,
          error = _this$state.error,
          isLoaded = _this$state.isLoaded;
      var translate = this.props.translate;
      var read_article = translate && translate[0].read_article ? translate[0].read_article : "Read article";
      var min_read = translate && translate[0].min_read ? translate[0].min_read : "min read";
      var PostImage = ""; // Empty.

      if (this.props.image) {
        PostImage = /*#__PURE__*/React__default['default'].createElement(FeaturedImage, _extends$3({
          src: this.props.image,
          alt: ""
        }, this.props));
      } else {
        if (error) {
          PostImage = error.message;
        } else if (!isLoaded) {
          PostImage = /*#__PURE__*/React__default['default'].createElement("p", {
            style: {
              textAlign: 'center'
            }
          }, /*#__PURE__*/React__default['default'].createElement("span", {
            className: "sui-icon-loader sui-loading",
            "aria-hidden": "true"
          }), /*#__PURE__*/React__default['default'].createElement("span", {
            className: "sui-screen-reader-text"
          }, "Image is loading"));
        } else {
          PostImage = /*#__PURE__*/React__default['default'].createElement(FeaturedImage, _extends$3({
            src: media
          }, this.props));
        }
      }

      if (this.props.banner) {
        return /*#__PURE__*/React__default['default'].createElement(PostWrapper, this.props, PostImage, this.props.title && "" !== this.props.title && /*#__PURE__*/React__default['default'].createElement(PostTitle, {
          banner: true
        }, this.props.title), this.props.excerpt && "" !== this.props.excerpt && /*#__PURE__*/React__default['default'].createElement(Excerpt, {
          banner: true,
          dangerouslySetInnerHTML: {
            __html: this.props.excerpt
          }
        }), /*#__PURE__*/React__default['default'].createElement(PostFooter, {
          banner: true
        }, /*#__PURE__*/React__default['default'].createElement(ReadMore, {
          banner: true
        }, read_article), this.props.time && "" !== this.props.time && /*#__PURE__*/React__default['default'].createElement(PostTime, {
          banner: true
        }, /*#__PURE__*/React__default['default'].createElement("span", {
          className: "sui-icon-clock sui-sm",
          style: {
            verticalAlign: "middle",
            marginRight: 5
          },
          "aria-hidden": "true"
        }), this.props.time, " ", min_read)));
      }

      return /*#__PURE__*/React__default['default'].createElement(PostWrapper, this.props, /*#__PURE__*/React__default['default'].createElement(PostHeader, null, PostImage, /*#__PURE__*/React__default['default'].createElement("div", {
        style: {
          minWidth: "1px",
          flex: 1
        }
      }, this.props.title && "" !== this.props.title && /*#__PURE__*/React__default['default'].createElement(PostTitle, null, this.props.title), this.props.time && "" !== this.props.time && /*#__PURE__*/React__default['default'].createElement(PostTime, null, "*", this.props.time, " ", min_read))), this.props.excerpt && "" !== this.props.excerpt && /*#__PURE__*/React__default['default'].createElement(Excerpt, {
        dangerouslySetInnerHTML: {
          __html: this.props.excerpt
        }
      }), /*#__PURE__*/React__default['default'].createElement(ReadMore, null, read_article));
    }
  }]);

  return Post;
}(React.Component);

function _classCallCheck$2(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties$2(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass$2(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties$2(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties$2(Constructor, staticProps);
  return Constructor;
}

function _defineProperty$4(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _inherits$2(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf$2(subClass, superClass);
}

function _getPrototypeOf$2(o) {
  _getPrototypeOf$2 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf$2(o);
}

function _setPrototypeOf$2(o, p) {
  _setPrototypeOf$2 = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf$2(o, p);
}

function _isNativeReflectConstruct$2() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _assertThisInitialized$2(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn$2(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized$2(self);
}

function _createSuper$2(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$2();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf$2(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf$2(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn$2(this, result);
  };
}

function _defineProperty$1$1(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys$3(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2$3(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys$3(Object(source), true).forEach(function (key) {
        _defineProperty$1$1(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$3(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose$5(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties$5(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose$5(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var ButtonIcon$1 = function ButtonIcon(_ref) {
  var label = _ref.label,
      icon = _ref.icon,
      iconSize = _ref.iconSize,
      _ref$design = _ref.design,
      design = _ref$design === void 0 ? "solid" : _ref$design,
      color = _ref.color,
      className = _ref.className,
      loading = _ref.loading,
      props = _objectWithoutProperties$5(_ref, ["label", "icon", "iconSize", "design", "color", "className", "loading"]);

  var loader = /*#__PURE__*/React__default['default'].createElement("span", {
    className: "sui-icon-loader sui-loading",
    style: {
      position: "relative"
    },
    "aria-hidden": "true"
  });
  var content = /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement("span", {
    className: "sui-icon-".concat(icon).concat(iconSize ? ' sui-' + iconSize : ''),
    "aria-hidden": "true"
  }), /*#__PURE__*/React__default['default'].createElement("span", {
    className: "sui-screen-reader-text"
  }, label));
  className = "sui-button-icon ".concat(className || ''); // Set button color.

  switch (color) {
    case "blue":
    case "green":
    case "red":
    case "orange":
    case "purple":
    case "yellow":
    case "white":
      className += " sui-button-" + color;
      break;

    case "gray":
    default:
      className += "";
      break;
  } // Set button style.


  switch (design) {
    case "ghost":
    case "outlined":
      className += " sui-button-" + design;
      break;

    case "solid":
    default:
      className += "";
      break;
  } // Set loading class.


  if (loading) {
    className += " sui-button-onload";
  }

  var htmlTag = props.href ? 'a' : 'button';
  return /*#__PURE__*/React__default['default'].createElement(htmlTag, _objectSpread2$3({
    className: className,
    disabled: props.disabled || loading
  }, props), loading ? loader : content);
};

var Notifications = /*#__PURE__*/function (_Component) {
  _inherits$2(Notifications, _Component);

  var _super = _createSuper$2(Notifications);

  function Notifications(props) {
    var _this;

    _classCallCheck$2(this, Notifications);

    _this = _super.call(this, props);

    _defineProperty$4(_assertThisInitialized$2(_this), "close", function () {
      _this.setState({
        hide: true
      });
    });

    _this.state = {
      hide: false
    };
    _this.close = _this.close.bind(_assertThisInitialized$2(_this));
    return _this;
  }

  _createClass$2(Notifications, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var hide = this.state.hide;
      var classMain = "sui-notice";
      var classIcon = "sui-notice-icon sui-md";

      switch (this.props.type) {
        case "info":
        case "success":
        case "warning":
        case "error":
        case "upsell":
          classMain += " sui-notice-" + this.props.type;
          classIcon += " sui-icon-info";
          break;

        case "loading":
          classIcon += " sui-icon-loader sui-loading";
          break;

        default:
          classIcon += " sui-icon-info";
          break;
      }

      var message = /*#__PURE__*/React__default['default'].createElement("div", {
        className: "sui-notice-message"
      }, /*#__PURE__*/React__default['default'].createElement("span", {
        className: classIcon,
        "aria-hidden": "true"
      }), this.props.children);
      var actions = /*#__PURE__*/React__default['default'].createElement("div", {
        className: "sui-notice-actions"
      }, /*#__PURE__*/React__default['default'].createElement(ButtonIcon$1, {
        icon: "check",
        label: "Hide",
        onClick: function onClick(e) {
          return _this2.close(e);
        }
      }));

      if (!hide) {
        return /*#__PURE__*/React__default['default'].createElement("div", {
          className: classMain
        }, /*#__PURE__*/React__default['default'].createElement("div", {
          className: "sui-notice-content"
        }, message, this.props.dismiss && actions));
      }

      return null;
    }
  }]);

  return Notifications;
}(React.Component);

function _classCallCheck$3(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties$3(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass$3(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties$3(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties$3(Constructor, staticProps);
  return Constructor;
}

function _extends$4() {
  _extends$4 = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends$4.apply(this, arguments);
}

function _inherits$3(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf$3(subClass, superClass);
}

function _getPrototypeOf$3(o) {
  _getPrototypeOf$3 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf$3(o);
}

function _setPrototypeOf$3(o, p) {
  _setPrototypeOf$3 = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf$3(o, p);
}

function _isNativeReflectConstruct$3() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _assertThisInitialized$3(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn$3(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized$3(self);
}

function _createSuper$3(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$3();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf$3(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf$3(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn$3(this, result);
  };
}

function _taggedTemplateLiteral$2(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function _defineProperty$5(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys$4(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2$4(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys$4(Object(source), true).forEach(function (key) {
        _defineProperty$5(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$4(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose$6(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties$6(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose$6(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var ButtonIcon$2 = function ButtonIcon(_ref) {
  var label = _ref.label,
      icon = _ref.icon,
      iconSize = _ref.iconSize,
      _ref$design = _ref.design,
      design = _ref$design === void 0 ? "solid" : _ref$design,
      color = _ref.color,
      className = _ref.className,
      loading = _ref.loading,
      props = _objectWithoutProperties$6(_ref, ["label", "icon", "iconSize", "design", "color", "className", "loading"]);

  var loader = /*#__PURE__*/React__default['default'].createElement("span", {
    className: "sui-icon-loader sui-loading",
    style: {
      position: "relative"
    },
    "aria-hidden": "true"
  });
  var content = /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement("span", {
    className: "sui-icon-".concat(icon).concat(iconSize ? ' sui-' + iconSize : ''),
    "aria-hidden": "true"
  }), /*#__PURE__*/React__default['default'].createElement("span", {
    className: "sui-screen-reader-text"
  }, label));
  className = "sui-button-icon ".concat(className || ''); // Set button color.

  switch (color) {
    case "blue":
    case "green":
    case "red":
    case "orange":
    case "purple":
    case "yellow":
    case "white":
      className += " sui-button-" + color;
      break;

    case "gray":
    default:
      className += "";
      break;
  } // Set button style.


  switch (design) {
    case "ghost":
    case "outlined":
      className += " sui-button-" + design;
      break;

    case "solid":
    default:
      className += "";
      break;
  } // Set loading class.


  if (loading) {
    className += " sui-button-onload";
  }

  var htmlTag = props.href ? 'a' : 'button';
  return /*#__PURE__*/React__default['default'].createElement(htmlTag, _objectSpread2$4({
    className: className,
    disabled: props.disabled || loading
  }, props), loading ? loader : content);
};

function _templateObject2$2() {
  var data = _taggedTemplateLiteral$2(["\n.sui-wrap && {\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n\n    &:hover,\n    &:focus {\n        ", "\n        ", "\n        ", "\n        ", "\n        ", "\n    }\n}\n"]);

  _templateObject2$2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$2() {
  var data = _taggedTemplateLiteral$2(["\n.sui-wrap && {\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n\n    &:hover,\n    &:focus {\n        ", "\n        ", "\n        ", "\n        ", "\n        ", "\n    }\n}\n"]);

  _templateObject$2 = function _templateObject() {
    return data;
  };

  return data;
}

var Link = styled__default['default'].a(_templateObject$2(), function (props) {
  return 'blue' === props.color ? 'color: #17A8E3 !important;' : '';
}, function (props) {
  return 'green' === props.color ? 'color: #1ABC9C !important;' : '';
}, function (props) {
  return 'yellow' === props.color ? 'color: #FECF2F !important;' : '';
}, function (props) {
  return 'red' === props.color ? 'color: #FF6D6D !important;' : '';
}, function (props) {
  return 'purple' === props.color ? 'color: #8D00B1 !important;' : '';
}, function (props) {
  return 'blue' === props.color ? 'background-color: #E1F6FF !important;' : '';
}, function (props) {
  return 'green' === props.color ? 'background-color: #D1F1EA !important;' : '';
}, function (props) {
  return 'yellow' === props.color ? 'background-color: #FFF5D5 !important;' : '';
}, function (props) {
  return 'red' === props.color ? 'background-color: #FFE5E9 !important;' : '';
}, function (props) {
  return 'purple' === props.color ? 'background-color: #F9E1FF !important;' : '';
});
var Button$1 = styled__default['default'].button(_templateObject2$2(), function (props) {
  return 'blue' === props.color ? 'color: #17A8E3 !important;' : '';
}, function (props) {
  return 'green' === props.color ? 'color: #1ABC9C !important;' : '';
}, function (props) {
  return 'yellow' === props.color ? 'color: #FECF2F !important;' : '';
}, function (props) {
  return 'red' === props.color ? 'color: #FF6D6D !important;' : '';
}, function (props) {
  return 'purple' === props.color ? 'color: #8D00B1 !important;' : '';
}, function (props) {
  return 'blue' === props.color ? 'background-color: #E1F6FF !important;' : '';
}, function (props) {
  return 'green' === props.color ? 'background-color: #D1F1EA !important;' : '';
}, function (props) {
  return 'yellow' === props.color ? 'background-color: #FFF5D5 !important;' : '';
}, function (props) {
  return 'red' === props.color ? 'background-color: #FFE5E9 !important;' : '';
}, function (props) {
  return 'purple' === props.color ? 'background-color: #F9E1FF !important;' : '';
});

var Dropdown = /*#__PURE__*/function (_Component) {
  _inherits$3(Dropdown, _Component);

  var _super = _createSuper$3(Dropdown);

  function Dropdown(props) {
    var _this;

    _classCallCheck$3(this, Dropdown);

    _this = _super.call(this, props);
    _this.state = {
      open: false
    };
    _this.toggle = _this.toggle.bind(_assertThisInitialized$3(_this));
    _this.wrapperRef = /*#__PURE__*/React__default['default'].createRef();
    _this.setWrapperRef = _this.setWrapperRef.bind(_assertThisInitialized$3(_this));
    _this.handleClickOutside = _this.handleClickOutside.bind(_assertThisInitialized$3(_this));
    return _this;
  }

  _createClass$3(Dropdown, [{
    key: "toggle",
    value: function toggle() {
      this.setState({
        open: !this.state.open
      });
    }
  }, {
    key: "setWrapperRef",
    value: function setWrapperRef(node) {
      this.wrapperRef = node;
    }
  }, {
    key: "handleClickOutside",
    value: function handleClickOutside(e) {
      if (this.wrapperRef && !this.wrapperRef.contains(e.target)) {
        this.setState({
          open: false
        });
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener('mousedown', this.handleClickOutside);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('mousedown', this.handleClickOutside);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var open = this.state.open;
      var options = React.Children.map(this.props.children, function (option) {
        var icon = option.props.icon && '' !== option.props.icon && /*#__PURE__*/React__default['default'].createElement("span", {
          className: "sui-icon-".concat(option.props.icon),
          "aria-hidden": "true"
        });
        var tag = option.props.tag && '' !== option.props.tag && /*#__PURE__*/React__default['default'].createElement("span", {
          className: "sui-tag sui-tag-beta",
          style: {
            pointerEvents: 'none',
            display: 'inline',
            marginLeft: 5,
            lineHeight: 1
          }
        }, option.props.tag);
        var label = /*#__PURE__*/React__default['default'].createElement(React.Fragment, null, icon, option.props.name, tag);

        if (option.props.href) {
          return /*#__PURE__*/React__default['default'].createElement("li", null, /*#__PURE__*/React__default['default'].createElement(Link, _extends$4({
            href: option.props.href
          }, option.props), label));
        }

        return /*#__PURE__*/React__default['default'].createElement("li", null, /*#__PURE__*/React__default['default'].createElement(Button$1, option.props, label));
      });
      var clazz = !open ? 'sui-dropdown' : 'sui-dropdown open';

      switch (this.props.position) {
        case 'left':
          clazz += ' sui-dropdown-right';
          break;

        case 'center':
          clazz += ' sui-dropdown-center';
          break;

        case 'right':
          clazz += ' sui-dropdown-left';
          break;

        default:
          clazz += ' sui-dropdown-right';
          break;
      }

      return /*#__PURE__*/React__default['default'].createElement("div", {
        className: clazz,
        ref: this.setWrapperRef,
        onClick: function onClick(e) {
          return e.stopPropagation();
        }
      }, /*#__PURE__*/React__default['default'].createElement(ButtonIcon$2, {
        icon: "widget-settings-config",
        label: open ? 'Open menu' : 'Close menu',
        onClick: this.toggle
      }), open && /*#__PURE__*/React__default['default'].createElement("ul", {
        onClick: function onClick() {
          return _this2.setState({
            open: false
          });
        }
      }, options));
    }
  }]);

  return Dropdown;
}(React.Component);

function _classCallCheck$4(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties$4(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass$4(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties$4(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties$4(Constructor, staticProps);
  return Constructor;
}

function _defineProperty$6(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends$5() {
  _extends$5 = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends$5.apply(this, arguments);
}

function _inherits$4(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf$4(subClass, superClass);
}

function _getPrototypeOf$4(o) {
  _getPrototypeOf$4 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf$4(o);
}

function _setPrototypeOf$4(o, p) {
  _setPrototypeOf$4 = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf$4(o, p);
}

function _isNativeReflectConstruct$4() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _assertThisInitialized$4(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn$4(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized$4(self);
}

function _createSuper$4(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$4();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf$4(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf$4(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn$4(this, result);
  };
}

function _taggedTemplateLiteral$3(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function _defineProperty$1$2(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys$5(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2$5(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys$5(Object(source), true).forEach(function (key) {
        _defineProperty$1$2(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$5(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose$7(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties$7(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose$7(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var ButtonIcon$3 = function ButtonIcon(_ref) {
  var label = _ref.label,
      icon = _ref.icon,
      iconSize = _ref.iconSize,
      _ref$design = _ref.design,
      design = _ref$design === void 0 ? "solid" : _ref$design,
      color = _ref.color,
      className = _ref.className,
      loading = _ref.loading,
      props = _objectWithoutProperties$7(_ref, ["label", "icon", "iconSize", "design", "color", "className", "loading"]);

  var loader = /*#__PURE__*/React__default['default'].createElement("span", {
    className: "sui-icon-loader sui-loading",
    style: {
      position: "relative"
    },
    "aria-hidden": "true"
  });
  var content = /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement("span", {
    className: "sui-icon-".concat(icon).concat(iconSize ? ' sui-' + iconSize : ''),
    "aria-hidden": "true"
  }), /*#__PURE__*/React__default['default'].createElement("span", {
    className: "sui-screen-reader-text"
  }, label));
  className = "sui-button-icon ".concat(className || ''); // Set button color.

  switch (color) {
    case "blue":
    case "green":
    case "red":
    case "orange":
    case "purple":
    case "yellow":
    case "white":
      className += " sui-button-" + color;
      break;

    case "gray":
    default:
      className += "";
      break;
  } // Set button style.


  switch (design) {
    case "ghost":
    case "outlined":
      className += " sui-button-" + design;
      break;

    case "solid":
    default:
      className += "";
      break;
  } // Set loading class.


  if (loading) {
    className += " sui-button-onload";
  }

  var htmlTag = props.href ? 'a' : 'button';
  return /*#__PURE__*/React__default['default'].createElement(htmlTag, _objectSpread2$5({
    className: className,
    disabled: props.disabled || loading
  }, props), loading ? loader : content);
};

function _templateObject$3() {
  var data = _taggedTemplateLiteral$3(["\n    width: 30px;\n    height: 30px;\n    margin-right: 10px;\n    border-radius: 10px;\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: center;\n"]);

  _templateObject$3 = function _templateObject() {
    return data;
  };

  return data;
}

var ItemImage = styled__default['default'].span(_templateObject$3());

var Accordion = /*#__PURE__*/function (_Component) {
  _inherits$4(Accordion, _Component);

  var _super = _createSuper$4(Accordion);

  function Accordion(props) {
    _classCallCheck$4(this, Accordion);

    return _super.call(this, props);
  }

  _createClass$4(Accordion, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React__default['default'].createElement("div", {
        className: "sui-accordion"
      }, this.props.children);
    }
  }]);

  return Accordion;
}(React.Component);

var AccordionItem = /*#__PURE__*/function (_Component2) {
  _inherits$4(AccordionItem, _Component2);

  var _super2 = _createSuper$4(AccordionItem);

  function AccordionItem(props) {
    var _this;

    _classCallCheck$4(this, AccordionItem);

    _this = _super2.call(this, props);

    _defineProperty$6(_assertThisInitialized$4(_this), "toggle", function (e) {
      if ('sui-dropdown' !== e.target.className) {
        _this.setState({
          open: !_this.state.open
        });
      }
    });

    _this.state = {
      open: false
    };
    _this.toggle = _this.toggle.bind(_assertThisInitialized$4(_this));
    return _this;
  }

  _createClass$4(AccordionItem, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var open = this.state.open;
      var clazz = !open ? 'sui-accordion-item' : 'sui-accordion-item sui-accordion-item--open';
      return /*#__PURE__*/React__default['default'].createElement("div", _extends$5({
        className: clazz
      }, this.props), /*#__PURE__*/React__default['default'].createElement(AccordionItemHeader, {
        state: open ? 'true' : 'false',
        title: this.props.title,
        image: this.props.image,
        icon: this.props.icon,
        onClick: function onClick(e) {
          return _this2.toggle(e);
        }
      }), /*#__PURE__*/React__default['default'].createElement(AccordionItemBody, null, this.props.children));
    }
  }]);

  return AccordionItem;
}(React.Component);

var AccordionItemHeader = /*#__PURE__*/function (_Component3) {
  _inherits$4(AccordionItemHeader, _Component3);

  var _super3 = _createSuper$4(AccordionItemHeader);

  function AccordionItemHeader(props) {
    var _this3;

    _classCallCheck$4(this, AccordionItemHeader);

    _this3 = _super3.call(this, props);
    _this3.state = {
      open: false
    };
    return _this3;
  }

  _createClass$4(AccordionItemHeader, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        open: this.props.state
      });
    }
  }, {
    key: "render",
    value: function render() {
      var open = this.state.open;
      var icon = this.props.icon && '' !== this.props.icon ? /*#__PURE__*/React__default['default'].createElement("span", {
        className: "sui-icon-".concat(this.props.icon),
        "aria-hidden": "true"
      }) : '';
      var image = this.props.image && '' !== this.props.image ? /*#__PURE__*/React__default['default'].createElement(ItemImage, {
        style: {
          backgroundImage: "url(".concat(this.props.image, ")")
        }
      }) : '';
      var title = /*#__PURE__*/React__default['default'].createElement("div", {
        className: "sui-accordion-item-title"
      }, icon, image, this.props.title);
      var indicator = /*#__PURE__*/React__default['default'].createElement(ButtonIcon$3, {
        icon: "chevron-down",
        label: open ? 'Close section' : 'Open section',
        className: "sui-button-icon sui-accordion-open-indicator"
      });
      var actions = /*#__PURE__*/React__default['default'].createElement("div", {
        className: "sui-accordion-col-auto"
      }, this.props.children, indicator);
      return /*#__PURE__*/React__default['default'].createElement("div", _extends$5({
        className: "sui-accordion-item-header"
      }, this.props), title, actions);
    }
  }]);

  return AccordionItemHeader;
}(React.Component);

var AccordionItemBody = /*#__PURE__*/function (_Component4) {
  _inherits$4(AccordionItemBody, _Component4);

  var _super4 = _createSuper$4(AccordionItemBody);

  function AccordionItemBody(props) {
    _classCallCheck$4(this, AccordionItemBody);

    return _super4.call(this, props);
  }

  _createClass$4(AccordionItemBody, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React__default['default'].createElement("div", {
        className: "sui-accordion-item-body"
      }, this.props.children);
    }
  }]);

  return AccordionItemBody;
}(React.Component);

exports.Accordion = Accordion;
exports.AccordionItem = AccordionItem;
exports.AccordionItemBody = AccordionItemBody;
exports.AccordionItemHeader = AccordionItemHeader;
exports.Box = Box;
exports.BoxBody = BoxBody;
exports.BoxFooter = BoxFooter;
exports.BoxHeader = BoxHeader;
exports.BoxTitle = BoxTitle;
exports.Button = Button;
exports.ButtonIcon = ButtonIcon;
exports.Dropdown = Dropdown;
exports.Input = Input;
exports.Modal = Modal$1;
exports.Notifications = Notifications;
exports.Post = Post;
