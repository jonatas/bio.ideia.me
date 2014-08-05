(function() {
  var Florest, canvas, florest;

  angular.module('tania', ['ngCookies', 'ngResource', 'ngRoute', 'ngSanitize', 'ngTouch']).config(function($routeProvider) {
    return $routeProvider.when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    }).when('/about', {
      templateUrl: 'views/about.html',
      controller: 'AboutCtrl'
    }).otherwise({
      redirectTo: '/'
    });
  });

  Florest = (function() {
    function Florest(canvas) {
      this.canvas = canvas;
      this.ctx = this.canvas.getContext("2d");
      this.W = window.innerWidth;
      this.H = window.innerHeight / 5;
      this.canvas.width = this.W;
      this.canvas.height = this.H;
      this.x = 0;
      this.numberOfTrees = 5;
      this.step = this.W / this.numberOfTrees * 0.75;
      this.init();
    }

    Florest.prototype.init = function(canvas) {
      console.log("@x", this.x);
      if (this.x < this.numberOfTrees) {
        this.x += 1;
      } else {
        return;
      }
      this.length = 12 + this.x * 2;
      this.divergence = 15;
      this.reduction = 0.8;
      this.line_width = 3;
      this.trunk = {
        x: 10 + this.x * this.step,
        y: this.length,
        angle: 90
      };
      this.start_points = [];
      this.start_points.push(this.trunk);
      this.ctx.beginPath();
      this.ctx.moveTo(this.trunk.x, this.H - 5);
      this.ctx.lineTo(this.trunk.x, this.H - this.trunk.y);
      this.ctx.strokeStyle = "brown";
      this.ctx.lineWidth = this.line_width;
      this.ctx.stroke();
      return this.branches();
    };

    Florest.prototype.branches = function() {
      var ep1, ep2, self, sp, _i, _len, _ref;
      this.length = this.length * this.reduction;
      this.line_width = this.line_width * this.reduction;
      this.ctx.lineWidth = this.line_width;
      this.new_start_points = [];
      this.ctx.beginPath();
      self = this;
      _ref = this.start_points;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        sp = _ref[_i];
        ep1 = self.get_endpoint(sp.x, sp.y, sp.angle + self.divergence, self.length);
        ep2 = self.get_endpoint(sp.x, sp.y, sp.angle - self.divergence, self.length);
        self.ctx.moveTo(sp.x, self.H - sp.y);
        self.ctx.lineTo(ep1.x, self.H - ep1.y);
        self.ctx.moveTo(sp.x, self.H - sp.y);
        self.ctx.lineTo(ep2.x, self.H - ep2.y);
        ep1.angle = sp.angle + this.divergence;
        ep2.angle = sp.angle - this.divergence;
        this.new_start_points.push(ep1);
        this.new_start_points.push(ep2);
      }
      this.ctx.strokeStyle = this.length < 4 ? "green" : "brown";
      this.ctx.stroke();
      this.start_points = this.new_start_points;
      if (this.x < this.numberOfTrees + 1) {
        if (this.length > 2) {
          return setTimeout(this.branches.bind(this), 50);
        } else {
          return setTimeout(this.init.bind(this), 47);
        }
      }
    };

    Florest.prototype.get_endpoint = function(x, y, a, length) {
      return {
        x: x + length * Math.cos(a * Math.PI / 180),
        y: y + length * Math.sin(a * Math.PI / 180)
      };
    };

    return Florest;

  })();

  canvas = document.getElementById("florest");

  florest = new Florest(canvas);

}).call(this);
