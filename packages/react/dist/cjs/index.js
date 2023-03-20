'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".Slider_container__4iuz- {\n  width: 100vw;\n  height: 500px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  z-index: 10;\n  overflow-x: hidden;\n  touch-action: none;\n}\n.Slider_container__4iuz- .Slider_slider__WdFKq {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  overflow: hidden;\n}\n.Slider_container__4iuz- .Slider_slider__WdFKq .Slider_slide__4ZSxv {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  background-position: center;\n  background-size: cover;\n  pointer-events: none;\n}\n.Slider_container__4iuz- .Slider_slider__WdFKq .Slider_slide__4ZSxv.Slider_hideToLeft__Ah2JP {\n  z-index: 1;\n  transition: 1s;\n  visibility: hidden;\n  transform: translateX(-100%);\n}\n.Slider_container__4iuz- .Slider_slider__WdFKq .Slider_slide__4ZSxv.Slider_hideToRight__-krg3 {\n  z-index: 1;\n  transition: 1s;\n  visibility: hidden;\n  transform: translateX(100%);\n}\n.Slider_container__4iuz- .Slider_slider__WdFKq .Slider_slideButton__JB5n7 {\n  width: 10%;\n  height: 100%;\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: 0.5s;\n  z-index: 5;\n}\n.Slider_container__4iuz- .Slider_slider__WdFKq .Slider_slideButton__JB5n7:hover {\n  background-color: #fff;\n  opacity: 0.3;\n}\n.Slider_container__4iuz- .Slider_slider__WdFKq .Slider_slideButton__JB5n7 .Slider_arrow__Tbs97 {\n  width: 30px;\n  height: 30px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.Slider_container__4iuz- .Slider_slider__WdFKq .Slider_middleSection__-68GV {\n  height: 100%;\n  display: flex;\n  align-items: flex-end;\n  justify-content: center;\n  flex-grow: 1;\n  z-index: 5;\n}\n.Slider_container__4iuz- .Slider_slider__WdFKq .Slider_middleSection__-68GV .Slider_circle__26uKw {\n  width: 10px;\n  height: 10px;\n  background-color: gray;\n  border-radius: 10px;\n  margin: 10px;\n}\n.Slider_container__4iuz- .Slider_slider__WdFKq .Slider_middleSection__-68GV .Slider_circle__26uKw.Slider_current__Bnf7k {\n  background-color: #fff;\n}\n\nh1,\np {\n  color: #fff;\n}";
styleInject(css_248z);

var img$1 = "data:image/svg+xml,%3csvg width='48px' height='48px' viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='48' height='48' fill='white' fill-opacity='0.01'/%3e%3cpath d='M19 12L31 24L19 36' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3e%3c/svg%3e";

var img = "data:image/svg+xml,%3csvg width='48px' height='48px' viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='48' height='48' fill='white' fill-opacity='0.01'/%3e%3cpath d='M31 36L19 24L31 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3e%3c/svg%3e";

var Slider = function (_a) {
    var slides = _a.slides;
    var _b = React.useState(0), currentSlideId = _b[0], setCurrentSlideId = _b[1];
    var _c = React.useState(''), slideDirection = _c[0], setSlideDirection = _c[1];
    var _d = React.useState(1), downX = _d[0], setDownX = _d[1];
    var _e = React.useState(1), upX = _e[0], setUpX = _e[1];
    var slideLeft = function () {
        setSlideDirection('left');
        if (currentSlideId > 0) {
            setCurrentSlideId(function (prev) { return prev - 1; });
        }
        else {
            setCurrentSlideId(slides.length - 1);
        }
    };
    var slideRight = function () {
        setSlideDirection('right');
        if (currentSlideId < slides.length - 1) {
            setCurrentSlideId(function (prev) { return prev + 1; });
        }
        else {
            setCurrentSlideId(0);
        }
    };
    var listenToMouseDown = function (e) {
        setDownX(e.clientX);
    };
    var listenToTouchStart = function (e) {
        setDownX(e.touches[0].clientX);
    };
    var listenToMouseUp = function (e) {
        setUpX(e.clientX);
    };
    var listenToTouchEnd = function (e) {
        setUpX(e.changedTouches[0].clientX);
    };
    React.useEffect(function () {
        if (downX + 100 < upX) {
            slideLeft();
        }
        else if (downX - 100 > upX) {
            slideRight();
        }
    }, [upX]);
    return (React__default["default"].createElement("div", { className: "container", onMouseDown: function (e) { return listenToMouseDown(e); }, onMouseUp: function (e) { return listenToMouseUp(e); }, onTouchStart: (function (e) { return listenToTouchStart(e); }), onTouchEnd: (function (e) { return listenToTouchEnd(e); }) },
        React__default["default"].createElement("div", { className: "slider" },
            slides.map(function (slide, idx) { return (React__default["default"].createElement("div", { key: slide.image, style: { backgroundImage: "url(".concat(slide.image, ")") }, className: "slide ".concat(currentSlideId === idx ? '' : slideDirection === 'right' ? 'hideToLeft' : 'hideToRight') },
                React__default["default"].createElement("h1", null, slide.label),
                React__default["default"].createElement("p", null, slide.paragraph))); }),
            React__default["default"].createElement("button", { className: "slideButton", onClick: slideLeft },
                React__default["default"].createElement("img", { src: img, alt: "left", className: "arrow" })),
            React__default["default"].createElement("div", { className: "middleSection", id: "slider" }, slides.map(function (slide, id) { return (React__default["default"].createElement("div", { key: id, className: "circle ".concat(id === currentSlideId ? 'current' : '') })); })),
            React__default["default"].createElement("button", { className: "slideButton", onClick: slideRight },
                React__default["default"].createElement("img", { src: img$1, alt: "right", className: "arrow" })))));
};

exports.Slider = Slider;
//# sourceMappingURL=index.js.map
