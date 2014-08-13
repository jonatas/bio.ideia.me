(function() {
  var Florest, Tree, canvas, florest;

  Tree = (function() {
    function Tree(florest, info) {
      this.info = info;
      this.florest = florest;
      this.ctx = this.florest.ctx;
      this.length = this.info.length || 25;
      this.divergence = this.info.divergence || 12;
      this.reduction = this.info.reduction || 0.8;
      this.line_width = this.info.line_width || 3;
      this.drawTrunk();
      this.drawBranches();
    }

    Tree.prototype.drawTrunk = function() {
      this.trunk = {
        x: this.florest.numberOfTrees * this.step,
        y: this.length,
        angle: 90
      };
      this.start_points = [];
      this.start_points.push(this.trunk);
      this.ctx.beginPath();
      this.ctx.moveTo(this.trunk.x, this.height - 5);
      this.ctx.lineTo(this.trunk.x, this.height - this.trunk.y);
      this.ctx.strokeStyle = "brown";
      this.ctx.lineWidth = this.line_width;
      return this.ctx.stroke();
    };

    Tree.prototype.drawBranches = function() {
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
        ep1 = self.endPoint(sp.x, sp.y, sp.angle + self.divergence, self.length);
        ep2 = self.endPoint(sp.x, sp.y, sp.angle - self.divergence, self.length);
        self.ctx.moveTo(sp.x, self.height - sp.y);
        self.ctx.lineTo(ep1.x, self.height - ep1.y);
        self.ctx.moveTo(sp.x, self.height - sp.y);
        self.ctx.lineTo(ep2.x, self.height - ep2.y);
        ep1.angle = sp.angle + this.divergence;
        ep2.angle = sp.angle - this.divergence;
        this.new_start_points.push(ep1);
        this.new_start_points.push(ep2);
      }
      this.ctx.strokeStyle = this.length < 4 ? "green" : "brown";
      this.ctx.stroke();
      this.start_points = this.new_start_points;
      if (this.treeNumber < this.numberOfTrees + 1) {
        if (this.length > 2) {
          return setTimeout(this.florest.drawTrees.bind(this.florest), 50);
        } else {
          return setTimeout(this.drawBranches.bind(this), 50);
        }
      }
    };

    Tree.prototype.endPoint = function(x, y, a, length) {
      return {
        x: x + length * Math.cos(a * Math.PI / 180),
        y: y + length * Math.sin(a * Math.PI / 180)
      };
    };

    return Tree;

  })();

  Florest = (function() {
    function Florest(canvas, numberOfTrees) {
      if (numberOfTrees == null) {
        numberOfTrees = 5;
      }
      this.canvas = canvas;
      this.ctx = this.canvas.getContext("2d");
      this.width = window.innerWidth;
      this.height = window.innerHeight / 4;
      this.canvas.width = this.width;
      this.canvas.height = this.height;
      this.treeNumber = 0;
      this.numberOfTrees = numberOfTrees;
      this.step = this.width / this.numberOfTrees * 0.63;
      this.tree = [];
      this.drawTrees();
    }

    Florest.prototype.drawTrees = function() {
      if (this.treeNumber < this.numberOfTrees) {
        this.treeNumber += 1;
      } else {
        return;
      }
      return new Tree(this, {
        length: 5 * this.numberOfTrees,
        divergence: 15 * (1 + (this.treeNumber % 4)),
        reduction: 0.8,
        line_width: 2 + this.treeNumber
      });
    };

    return Florest;

  })();

  canvas = document.getElementById("florest");

  florest = new Florest(canvas, 4);

}).call(this);
