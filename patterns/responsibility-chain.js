var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ResponsibilityChain;
(function (ResponsibilityChain) {
    var BaseHandler = /** @class */ (function () {
        function BaseHandler() {
        }
        BaseHandler.prototype.setNext = function (h) {
            this.next = h;
            return h;
        };
        BaseHandler.prototype.handle = function (req) {
            if (this.next) {
                return this.next.handle(req);
            }
            return null;
        };
        return BaseHandler;
    }());
    ResponsibilityChain.BaseHandler = BaseHandler;
    var BoxerHandler = /** @class */ (function (_super) {
        __extends(BoxerHandler, _super);
        function BoxerHandler() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        BoxerHandler.prototype.handle = function (req) {
            if (req === "box") {
                return "Boxer will train!";
            }
            return _super.prototype.handle.call(this, req);
        };
        return BoxerHandler;
    }(BaseHandler));
    ResponsibilityChain.BoxerHandler = BoxerHandler;
    var ArmwrestlingHandler = /** @class */ (function (_super) {
        __extends(ArmwrestlingHandler, _super);
        function ArmwrestlingHandler() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ArmwrestlingHandler.prototype.handle = function (req) {
            if (req === "armwrestle") {
                return "Armwrestle will train!";
            }
            return _super.prototype.handle.call(this, req);
        };
        return ArmwrestlingHandler;
    }(BaseHandler));
    ResponsibilityChain.ArmwrestlingHandler = ArmwrestlingHandler;
    var RunnerHandler = /** @class */ (function (_super) {
        __extends(RunnerHandler, _super);
        function RunnerHandler() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        RunnerHandler.prototype.handle = function (req) {
            if (req === "run") {
                return "Runner will train!";
            }
            return _super.prototype.handle.call(this, req);
        };
        return RunnerHandler;
    }(BaseHandler));
    ResponsibilityChain.RunnerHandler = RunnerHandler;
})(ResponsibilityChain || (ResponsibilityChain = {}));
var sportActivities = ['armwrestle', 'run', 'box'];
var runner = new ResponsibilityChain.RunnerHandler();
var boxer = new ResponsibilityChain.BoxerHandler();
var armwrestler = new ResponsibilityChain.ArmwrestlingHandler();
runner.setNext(boxer).setNext(armwrestler);
sportActivities.forEach(function (sportActivity) {
    console.log(runner.handle(sportActivity));
});
